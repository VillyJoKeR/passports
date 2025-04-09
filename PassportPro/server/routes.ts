import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { visaCheckSchema, insertSearchHistorySchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all countries
  app.get("/api/countries", async (req, res) => {
    try {
      const countries = await storage.getAllCountries();
      res.json(countries);
    } catch (error) {
      console.error("Error getting countries:", error);
      res.status(500).json({ message: "Failed to fetch countries" });
    }
  });

  // Get visa requirement
  app.get("/api/visa-requirement", async (req, res) => {
    try {
      const { fromCountryCode, toCountryCode } = req.query;
      
      // Validate query parameters
      const result = visaCheckSchema.safeParse({ 
        fromCountryCode, 
        toCountryCode 
      });
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ message: validationError.message });
      }
      
      const requirement = await storage.getVisaRequirement(
        result.data.fromCountryCode,
        result.data.toCountryCode
      );
      
      if (!requirement) {
        return res.status(404).json({ message: "Visa requirement not found" });
      }
      
      // Add to search history
      await storage.addSearchHistory({
        fromCountryCode: result.data.fromCountryCode,
        toCountryCode: result.data.toCountryCode,
        searchedAt: new Date().toISOString()
      });
      
      res.json(requirement);
    } catch (error) {
      console.error("Error getting visa requirement:", error);
      res.status(500).json({ message: "Failed to fetch visa requirement" });
    }
  });

  // Get recent searches
  app.get("/api/recent-searches", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const searches = await storage.getRecentSearches(limit);
      res.json(searches);
    } catch (error) {
      console.error("Error getting recent searches:", error);
      res.status(500).json({ message: "Failed to fetch recent searches" });
    }
  });
  
  // Add search to history
  app.post("/api/search-history", async (req, res) => {
    try {
      const result = insertSearchHistorySchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ message: validationError.message });
      }
      
      const search = await storage.addSearchHistory(result.data);
      res.status(201).json(search);
    } catch (error) {
      console.error("Error adding search history:", error);
      res.status(500).json({ message: "Failed to add search history" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
