import { 
  Country, InsertCountry, countries,
  VisaRequirement, InsertVisaRequirement, visaRequirements,
  SearchHistory, InsertSearchHistory, searchHistory,
  User, InsertUser, users
} from "@shared/schema";
import { countriesData } from "../client/src/lib/countries";
import { visaDatabase } from "../client/src/lib/visa-database";
import { db } from "./db";
import { eq, and, desc, sql } from "drizzle-orm";

// Interface for all storage operations
export interface IStorage {
  // User methods (keeping original)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Country methods
  getAllCountries(): Promise<Country[]>;
  getCountryByCode(code: string): Promise<Country | undefined>;
  
  // Visa requirement methods
  getVisaRequirement(fromCode: string, toCode: string): Promise<VisaRequirement | undefined>;
  addVisaRequirement(requirement: InsertVisaRequirement): Promise<VisaRequirement>;
  
  // Search history methods
  getRecentSearches(limit?: number): Promise<SearchHistory[]>;
  addSearchHistory(search: InsertSearchHistory): Promise<SearchHistory>;
  
  // Database initialization
  initializeDatabase(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  constructor() {}
  
  // Initialize database with countries and visa requirements
  async initializeDatabase(): Promise<void> {
    // Initialize countries table
    const existingCountries = await db.select().from(countries);
    
    if (existingCountries.length === 0) {
      console.log("Initializing countries table...");
      const countriesToInsert = countriesData.map(country => ({
        code: country.code,
        name: country.name,
        flag: country.flag,
        region: country.region || ""
      }));
      
      await db.insert(countries).values(countriesToInsert);
    }
    
    // Check visa requirements table
    const requirementCount = await db.select({ count: sql<number>`count(*)` }).from(visaRequirements);
    
    // If there are no requirements in the database OR if the count is too low
    // we want to make sure all visa requirements are properly loaded
    if (requirementCount[0].count < 100) {
      console.log("Initializing visa requirements table...");
      
      // First, make sure we have the default entry
      const defaultRequirement = {
        fromCountryCode: 'default',
        toCountryCode: 'default',
        status: 'unknown',
        duration: 'Unknown',
        validity: 'Unknown',
        processing: 'Unknown',
        cost: 'Unknown',
        notes: 'Data not available for this passport-destination combination. Please check with the embassy or consulate of the destination country for accurate visa requirements.',
        requirements: [],
        lastUpdated: '2023-08-15'
      };
      
      await db.insert(visaRequirements).values(defaultRequirement).onConflictDoNothing();
      
      // Now add all the requirements from the visa database
      const allRequirements: any[] = [];
      
      // First add the explicit entries from the visaDatabase object
      Object.entries(visaDatabase).forEach(([key, data]) => {
        const [fromCode, toCode] = key.split('-');
        allRequirements.push({
          fromCountryCode: fromCode,
          toCountryCode: toCode,
          status: data.status,
          duration: data.duration,
          validity: data.validity,
          processing: data.processing,
          cost: data.cost,
          notes: data.notes || '',
          requirements: data.requirements || [],
          lastUpdated: data.lastUpdated || new Date().toISOString().split('T')[0]
        });
      });
      
      // Add the dynamically generated entries that were created in the visa-database.ts file
      const commonPassports = ["us", "gb", "ca", "au", "de", "fr", "jp", "sg", "kr", "in", "cn", "ru", "za", "br", "mx"];
      const allCountries = ["af", "al", "dz", "ad", "ao", "ag", "ar", "am", "au", "at", "az", "bs", "bh", "bd", "bb", "by", "be", "bz", "bj", "bt", "bo", "ba", "bw", "br", "bn", "bg", "bf", "bi", "cv", "kh", "cm", "ca", "cf", "td", "cl", "cn", "co", "km", "cg", "cd", "cr", "ci", "hr", "cu", "cy", "cz", "dk", "dj", "dm", "do", "ec", "eg", "sv", "gq", "er", "ee", "sz", "et", "fj", "fi", "fr", "ga", "gm", "ge", "de", "gh", "gr", "gd", "gt", "gn", "gw", "gy", "ht", "hn", "hu", "is", "in", "id", "ir", "iq", "ie", "il", "it", "jm", "jp", "jo", "kz", "ke", "ki", "kp", "kr", "kw", "kg", "la", "lv", "lb", "ls", "lr", "ly", "li", "lt", "lu", "mg", "mw", "my", "mv", "ml", "mt", "mh", "mr", "mu", "mx", "fm", "md", "mc", "mn", "me", "ma", "mz", "mm", "na", "nr", "np", "nl", "nz", "ni", "ne", "ng", "mk", "no", "om", "pk", "pw", "pa", "pg", "py", "pe", "ph", "pl", "pt", "qa", "ro", "ru", "rw", "kn", "lc", "vc", "ws", "sm", "st", "sa", "sn", "rs", "sc", "sl", "sg", "sk", "si", "sb", "so", "za", "ss", "es", "lk", "sd", "sr", "se", "ch", "sy", "tw", "tj", "tz", "th", "tl", "tg", "to", "tt", "tn", "tr", "tm", "tv", "ug", "ua", "ae", "gb", "us", "uy", "uz", "vu", "va", "ve", "vn", "ye", "zm", "zw"];
      
      // Generic default for each passport to any unspecified destination
      commonPassports.forEach(passport => {
        // Only add if it doesn't already exist in allRequirements
        const passportDefault = {
          fromCountryCode: passport,
          toCountryCode: 'default',
          status: 'visa-required',
          duration: 'Varies by visa type',
          validity: 'Typically up to 90 days',
          processing: '7-21 business days',
          cost: 'Varies by country and visa type',
          notes: `Please check with the embassy or consulate of the destination country for accurate visa requirements with a ${passport} passport.`,
          requirements: [],
          lastUpdated: '2023-08-15'
        };
        
        // Check if it already exists in allRequirements
        const exists = allRequirements.some(req => 
          req.fromCountryCode === passport && req.toCountryCode === 'default'
        );
        
        if (!exists) {
          allRequirements.push(passportDefault);
        }
      });
      
      // EU/Schengen passport holders can travel visa-free to many countries
      const euPassports = ["gb", "de", "fr", "it", "es", "nl", "be", "se", "dk", "fi", "pl", "cz", "at", "hr"];
      const visaFreeForEu = ["us", "ca", "jp", "kr", "sg", "th", "my", "mx", "br", "ar", "cl", "au", "nz"];
      
      euPassports.forEach(passport => {
        visaFreeForEu.forEach(destination => {
          // Check if this combination already exists in allRequirements
          const exists = allRequirements.some(req => 
            req.fromCountryCode === passport && req.toCountryCode === destination
          );
          
          if (!exists) {
            allRequirements.push({
              fromCountryCode: passport,
              toCountryCode: destination,
              status: 'visa-free',
              duration: '90 days',
              validity: 'Multiple entry',
              processing: 'N/A',
              cost: 'Free',
              notes: '',
              requirements: [],
              lastUpdated: '2023-10-15'
            });
          }
        });
      });
      
      // North American passport holders
      const naPassports = ["us", "ca"];
      const visaFreeForNa = ["gb", "fr", "de", "it", "es", "jp", "kr", "au", "nz", "sg", "th", "mx", "cr", "pa", "jm", "bs"];
      
      naPassports.forEach(passport => {
        visaFreeForNa.forEach(destination => {
          // Check if this combination already exists in allRequirements
          const exists = allRequirements.some(req => 
            req.fromCountryCode === passport && req.toCountryCode === destination
          );
          
          if (!exists) {
            allRequirements.push({
              fromCountryCode: passport,
              toCountryCode: destination,
              status: 'visa-free',
              duration: '90 days',
              validity: 'Multiple entry',
              processing: 'N/A',
              cost: 'Free',
              notes: '',
              requirements: [],
              lastUpdated: '2023-10-15'
            });
          }
        });
      });
      
      // Insert all requirements in batches
      const batchSize = 100;
      console.log(`Inserting ${allRequirements.length} visa requirements`);
      
      // Insert in batches using onConflictDoNothing to avoid duplicates
      for (let i = 0; i < allRequirements.length; i += batchSize) {
        const batch = allRequirements.slice(i, i + batchSize);
        await db.insert(visaRequirements).values(batch).onConflictDoNothing();
      }
      
      console.log("Visa requirements initialization complete");
    }
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Country methods
  async getAllCountries(): Promise<Country[]> {
    return db.select().from(countries).orderBy(countries.name);
  }

  async getCountryByCode(code: string): Promise<Country | undefined> {
    const [country] = await db.select().from(countries).where(eq(countries.code, code));
    return country;
  }

  // Visa requirement methods
  async getVisaRequirement(fromCode: string, toCode: string): Promise<VisaRequirement | undefined> {
    // Try to get the specific requirement
    const [specificRequirement] = await db.select()
      .from(visaRequirements)
      .where(and(
        eq(visaRequirements.fromCountryCode, fromCode),
        eq(visaRequirements.toCountryCode, toCode)
      ));
      
    if (specificRequirement) {
      return specificRequirement;
    }
    
    // If not found, try to find a default for the passport country
    const [defaultRequirement] = await db.select()
      .from(visaRequirements)
      .where(and(
        eq(visaRequirements.fromCountryCode, fromCode),
        eq(visaRequirements.toCountryCode, 'default')
      ));
      
    if (defaultRequirement) {
      return defaultRequirement;
    }
    
    // Fallback to universal default
    const [universalDefault] = await db.select()
      .from(visaRequirements)
      .where(and(
        eq(visaRequirements.fromCountryCode, 'default'),
        eq(visaRequirements.toCountryCode, 'default')
      ));
      
    return universalDefault;
  }

  async addVisaRequirement(requirement: InsertVisaRequirement): Promise<VisaRequirement> {
    const [newRequirement] = await db.insert(visaRequirements)
      .values(requirement)
      .returning();
      
    return newRequirement;
  }

  // Search history methods
  async getRecentSearches(limit: number = 10): Promise<SearchHistory[]> {
    return db.select()
      .from(searchHistory)
      .orderBy(desc(searchHistory.searchedAt))
      .limit(limit);
  }

  async addSearchHistory(search: InsertSearchHistory): Promise<SearchHistory> {
    const [newSearch] = await db.insert(searchHistory)
      .values(search)
      .returning();
      
    // Cleanup: keep only most recent searches
    const totalSearches = await db.select({ count: sql<number>`count(*)` })
      .from(searchHistory);
      
    if (totalSearches[0].count > 20) {
      const oldestToKeep = await db.select()
        .from(searchHistory)
        .orderBy(desc(searchHistory.searchedAt))
        .limit(1)
        .offset(19);
        
      if (oldestToKeep.length > 0) {
        await db.delete(searchHistory)
          .where(sql`${searchHistory.searchedAt} < ${oldestToKeep[0].searchedAt}`);
      }
    }
    
    return newSearch;
  }
}

// Initialize the database storage
export const storage = new DatabaseStorage();
