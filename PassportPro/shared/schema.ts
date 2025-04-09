import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (from original schema)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Country table for passport/destination data
export const countries = pgTable("countries", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().unique(),
  name: text("name").notNull(),
  flag: text("flag").notNull(),
  region: text("region"),
});

export const insertCountrySchema = createInsertSchema(countries).pick({
  code: true,
  name: true,
  flag: true,
  region: true,
});

export type InsertCountry = z.infer<typeof insertCountrySchema>;
export type Country = typeof countries.$inferSelect;

// Visa requirements table
export const visaRequirements = pgTable("visa_requirements", {
  id: serial("id").primaryKey(),
  fromCountryCode: text("from_country_code").notNull(),
  toCountryCode: text("to_country_code").notNull(),
  status: text("status").notNull(), // "visa-free", "visa-on-arrival", "e-visa", "visa-required"
  duration: text("duration"), // e.g., "90 days"
  validity: text("validity"), // e.g., "Single entry"
  processing: text("processing"), // e.g., "3-5 business days"
  cost: text("cost"), // e.g., "Free" or "$50"
  notes: text("notes"),
  requirements: jsonb("requirements"), // Array of requirements as strings
  lastUpdated: text("last_updated"),
});

export const insertVisaRequirementSchema = createInsertSchema(visaRequirements).pick({
  fromCountryCode: true,
  toCountryCode: true,
  status: true,
  duration: true,
  validity: true,
  processing: true,
  cost: true,
  notes: true,
  requirements: true,
  lastUpdated: true,
});

export type InsertVisaRequirement = z.infer<typeof insertVisaRequirementSchema>;
export type VisaRequirement = typeof visaRequirements.$inferSelect;

// Search history table
export const searchHistory = pgTable("search_history", {
  id: serial("id").primaryKey(),
  fromCountryCode: text("from_country_code").notNull(),
  toCountryCode: text("to_country_code").notNull(),
  searchedAt: text("searched_at").notNull(), // ISO string for date
});

export const insertSearchHistorySchema = createInsertSchema(searchHistory).pick({
  fromCountryCode: true,
  toCountryCode: true,
  searchedAt: true,
});

export type InsertSearchHistory = z.infer<typeof insertSearchHistorySchema>;
export type SearchHistory = typeof searchHistory.$inferSelect;

// Schemas for API operations
export const visaCheckSchema = z.object({
  fromCountryCode: z.string().min(2),
  toCountryCode: z.string().min(2),
});

export type VisaCheckRequest = z.infer<typeof visaCheckSchema>;
