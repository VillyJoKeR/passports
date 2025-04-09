// This is a simplified visa database based on the Henley Passport Index
// In a real application, this would be a more comprehensive dataset with
// detailed requirements for each passport-destination combination

type VisaRequirementData = {
  status: string; // "visa-free", "visa-on-arrival", "e-visa", "visa-required"
  duration: string;
  validity: string;
  processing: string;
  cost: string;
  notes?: string;
  requirements?: string[];
  lastUpdated?: string;
};

// Sample database with common passport-destination combinations
// This would be much more extensive in a real application
export const visaDatabase: Record<string, VisaRequirementData> = {
  // US passport entries
  "us-jp": {
    status: "visa-free",
    duration: "90 days",
    validity: "Single entry",
    processing: "N/A",
    cost: "Free",
    requirements: [
      "Valid passport with at least 6 months validity beyond stay",
      "Proof of onward/return travel",
      "Sufficient funds for stay"
    ],
    lastUpdated: "2023-07-15"
  },
  "us-th": {
    status: "visa-free",
    duration: "30 days",
    validity: "Single entry",
    processing: "N/A",
    cost: "Free",
    requirements: [
      "Valid passport with at least 6 months validity beyond stay",
      "Proof of onward/return travel",
      "Sufficient funds for stay"
    ],
    lastUpdated: "2023-05-20"
  },
  "us-cn": {
    status: "visa-required",
    duration: "Varies by visa type",
    validity: "Varies by visa type",
    processing: "4-7 business days",
    cost: "$140",
    requirements: [
      "Valid passport with at least 6 months validity beyond stay",
      "Completed visa application form",
      "Passport photo",
      "Proof of travel arrangements",
      "Invitation letter (for some visa types)"
    ],
    lastUpdated: "2023-06-12"
  },
  
  // UK passport entries
  "gb-jp": {
    status: "visa-free",
    duration: "90 days",
    validity: "Single entry",
    processing: "N/A",
    cost: "Free",
    lastUpdated: "2023-07-15"
  },
  "gb-th": {
    status: "visa-free",
    duration: "30 days",
    validity: "Single entry",
    processing: "N/A",
    cost: "Free",
    lastUpdated: "2023-05-20"
  },
  "gb-cn": {
    status: "visa-required",
    duration: "Varies by visa type",
    validity: "Varies by visa type",
    processing: "4-7 business days",
    cost: "£151",
    lastUpdated: "2023-06-12"
  },
  
  // Canada passport entries
  "ca-jp": {
    status: "visa-free",
    duration: "90 days",
    validity: "Single entry",
    processing: "N/A",
    cost: "Free",
    lastUpdated: "2023-07-15"
  },
  "ca-th": {
    status: "visa-free",
    duration: "30 days",
    validity: "Single entry",
    processing: "N/A",
    cost: "Free",
    lastUpdated: "2023-05-20"
  },
  "ca-cn": {
    status: "visa-required",
    duration: "Varies by visa type",
    validity: "Varies by visa type",
    processing: "4-7 business days",
    cost: "CAD$142",
    lastUpdated: "2023-06-12"
  },
  
  // Australia passport entries
  "au-jp": {
    status: "visa-free",
    duration: "90 days",
    validity: "Single entry",
    processing: "N/A",
    cost: "Free",
    lastUpdated: "2023-07-15"
  },
  "au-th": {
    status: "visa-free",
    duration: "30 days",
    validity: "Single entry",
    processing: "N/A",
    cost: "Free",
    lastUpdated: "2023-05-20"
  },
  "au-cn": {
    status: "visa-required",
    duration: "Varies by visa type",
    validity: "Varies by visa type",
    processing: "4-7 business days",
    cost: "AUD$145",
    lastUpdated: "2023-06-12"
  },
  
  // Indian passport entries
  "in-jp": {
    status: "visa-required",
    duration: "Up to 90 days",
    validity: "Single or multiple entry",
    processing: "5-7 business days",
    cost: "¥3,000",
    lastUpdated: "2023-07-15"
  },
  "in-th": {
    status: "visa-on-arrival",
    duration: "15 days",
    validity: "Single entry",
    processing: "Upon arrival",
    cost: "2,000 THB",
    lastUpdated: "2023-05-20"
  },
  "in-cn": {
    status: "visa-required",
    duration: "Varies by visa type",
    validity: "Varies by visa type",
    processing: "4-7 business days",
    cost: "$100",
    lastUpdated: "2023-06-12"
  },
  
  // Chinese passport entries
  "cn-jp": {
    status: "visa-required",
    duration: "Up to 90 days",
    validity: "Single or multiple entry",
    processing: "5-7 business days",
    cost: "¥3,000",
    lastUpdated: "2023-07-15"
  },
  "cn-th": {
    status: "visa-on-arrival",
    duration: "15 days",
    validity: "Single entry",
    processing: "Upon arrival",
    cost: "2,000 THB",
    lastUpdated: "2023-05-20"
  },
  "cn-us": {
    status: "visa-required",
    duration: "Varies by visa type",
    validity: "Varies by visa type",
    processing: "3-4 weeks",
    cost: "$160",
    lastUpdated: "2023-06-12"
  },
  
  // More popular destinations for various passports
  "us-uk": {
    status: "visa-free",
    duration: "6 months",
    validity: "Multiple entry",
    processing: "N/A",
    cost: "Free",
    lastUpdated: "2023-08-10"
  },
  "us-fr": {
    status: "visa-free",
    duration: "90 days",
    validity: "Multiple entry",
    processing: "N/A",
    cost: "Free",
    lastUpdated: "2023-08-10"
  },
  "us-mx": {
    status: "visa-free",
    duration: "180 days",
    validity: "Single entry",
    processing: "N/A",
    cost: "Free",
    lastUpdated: "2023-07-12"
  },
  "gb-us": {
    status: "visa-free",
    duration: "90 days",
    validity: "Multiple entry",
    processing: "ESTA required",
    cost: "$21 ESTA fee",
    lastUpdated: "2023-08-10"
  },
  "jp-us": {
    status: "visa-free",
    duration: "90 days",
    validity: "Multiple entry",
    processing: "ESTA required",
    cost: "$21 ESTA fee",
    lastUpdated: "2023-08-10"
  },
  
  // Default case (fallback)
  "default-default": {
    status: "unknown",
    duration: "Unknown",
    validity: "Unknown",
    processing: "Unknown",
    cost: "Unknown",
    notes: "Data not available for this passport-destination combination. Please check with the embassy or consulate of the destination country for accurate visa requirements.",
    lastUpdated: "2023-08-15"
  }
};

// Add basic visa requirements for common passport combinations
const commonPassports = ["us", "gb", "ca", "au", "de", "fr", "jp", "sg", "kr", "in", "cn", "ru", "za", "br", "mx"];
const allCountries = ["af", "al", "dz", "ad", "ao", "ag", "ar", "am", "au", "at", "az", "bs", "bh", "bd", "bb", "by", "be", "bz", "bj", "bt", "bo", "ba", "bw", "br", "bn", "bg", "bf", "bi", "cv", "kh", "cm", "ca", "cf", "td", "cl", "cn", "co", "km", "cg", "cd", "cr", "ci", "hr", "cu", "cy", "cz", "dk", "dj", "dm", "do", "ec", "eg", "sv", "gq", "er", "ee", "sz", "et", "fj", "fi", "fr", "ga", "gm", "ge", "de", "gh", "gr", "gd", "gt", "gn", "gw", "gy", "ht", "hn", "hu", "is", "in", "id", "ir", "iq", "ie", "il", "it", "jm", "jp", "jo", "kz", "ke", "ki", "kp", "kr", "kw", "kg", "la", "lv", "lb", "ls", "lr", "ly", "li", "lt", "lu", "mg", "mw", "my", "mv", "ml", "mt", "mh", "mr", "mu", "mx", "fm", "md", "mc", "mn", "me", "ma", "mz", "mm", "na", "nr", "np", "nl", "nz", "ni", "ne", "ng", "mk", "no", "om", "pk", "pw", "pa", "pg", "py", "pe", "ph", "pl", "pt", "qa", "ro", "ru", "rw", "kn", "lc", "vc", "ws", "sm", "st", "sa", "sn", "rs", "sc", "sl", "sg", "sk", "si", "sb", "so", "za", "ss", "es", "lk", "sd", "sr", "se", "ch", "sy", "tw", "tj", "tz", "th", "tl", "tg", "to", "tt", "tn", "tr", "tm", "tv", "ug", "ua", "ae", "gb", "us", "uy", "uz", "vu", "va", "ve", "vn", "ye", "zm", "zw"];

// Generate visa requirements for common passports with default values
commonPassports.forEach(passport => {
  // Generic default for any destination
  visaDatabase[`${passport}-default`] = {
    status: "visa-required",
    duration: "Varies by visa type",
    validity: "Typically up to 90 days",
    processing: "7-21 business days",
    cost: "Varies by country and visa type",
    notes: `Please check with the embassy or consulate of the destination country for accurate visa requirements with a ${passport} passport.`,
    lastUpdated: "2023-08-15"
  };
  
  // Add some region-specific entries for European passport holders
  if (["gb", "de", "fr", "it", "es", "nl", "be", "se", "dk", "fi", "pl", "cz", "at", "hr"].includes(passport)) {
    // EU/Schengen passport holders can travel visa-free to many countries
    allCountries.forEach(destination => {
      if (["us", "ca", "jp", "kr", "sg", "th", "my", "mx", "br", "ar", "cl", "au", "nz"].includes(destination)) {
        visaDatabase[`${passport}-${destination}`] = {
          status: "visa-free",
          duration: "90 days",
          validity: "Multiple entry",
          processing: "N/A",
          cost: "Free",
          lastUpdated: "2023-10-15"
        };
      }
    });
  }
  
  // Add some entries for North American passport holders
  if (["us", "ca"].includes(passport)) {
    allCountries.forEach(destination => {
      if (["gb", "fr", "de", "it", "es", "jp", "kr", "au", "nz", "sg", "th", "mx", "cr", "pa", "jm", "bs"].includes(destination)) {
        visaDatabase[`${passport}-${destination}`] = {
          status: "visa-free",
          duration: "90 days",
          validity: "Multiple entry",
          processing: "N/A",
          cost: "Free",
          lastUpdated: "2023-10-15"
        };
      }
    });
  }
});
