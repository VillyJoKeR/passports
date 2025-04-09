# VisaCheck App Documentation

## Overview

VisaCheck is a mobile-optimized Progressive Web Application (PWA) designed to help travelers quickly check visa requirements based on their passport nationality and destination country. It focuses on providing comprehensive information for Spanish passport holders with data for over 119 destinations.

## Features

- **Passport Selection**: Choose your passport nationality from a searchable dropdown
- **Destination Selection**: Select your travel destination from a searchable dropdown
- **Visa Requirements Display**: View detailed visa information including:
  - Visa status (visa-free, visa on arrival, e-visa, visa required)
  - Maximum stay duration
  - Validity period
  - Processing time
  - Cost
  - Entry requirements
  - Additional notes
- **Recent Searches**: Track and quickly access your recent visa requirement lookups
- **Offline Functionality**: Access previously searched information without internet connection
- **Mobile Optimization**: Designed specifically for iPhone use
- **"Add to Home Screen" Support**: Install as a native-like app on your home screen

## Data Content

The application includes:
- Complete country list with flags (195+ countries and territories)
- 119 destinations with detailed visa information for Spanish passport holders
- Default fallback entry for unknown combinations
- Total of 350 visa requirement entries in the database

## Technical Architecture

### Frontend
- Built with React and TypeScript
- Uses Tailwind CSS for styling with shadcn UI components
- Employs React Query for data fetching
- Implements wouter for lightweight routing
- Includes service workers for offline functionality

### Backend
- Express.js server
- PostgreSQL database for data persistence
- Drizzle ORM for database interactions
- RESTful API endpoints

### Database Schema

**Countries Table**
- id: Serial primary key
- code: Two-letter country code (ISO 3166-1 alpha-2)
- name: Country name
- flag: Flag emoji
- region: Geographic region

**Visa Requirements Table**
- id: Serial primary key
- from_country_code: Passport country code
- to_country_code: Destination country code
- status: Visa status (visa-free, visa-on-arrival, e-visa, visa-required)
- duration: Maximum stay duration
- validity: Entry validity (single/multiple entry)
- processing: Processing time
- cost: Cost information
- notes: Additional details
- requirements: JSON array of required documents
- last_updated: Date of last update

**Search History Table**
- id: Serial primary key
- from_country_code: Passport country code
- to_country_code: Destination country code
- searched_at: Timestamp of search

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/countries` | GET | Get list of all countries |
| `/api/visa-requirement` | GET | Get visa requirement by passport and destination |
| `/api/recent-searches` | GET | Get recent search history |

## Using the Application

1. **Select Passport**: Choose your passport nationality from the dropdown
2. **Select Destination**: Choose your destination country from the dropdown
3. **Check Requirements**: Click "Check Visa Requirements" button
4. **View Results**: See visa status, duration, and other details
5. **View Details**: Click "View More Details" for comprehensive information
6. **Recent Searches**: Click on any recent search to quickly retrieve that information

## Offline Usage

To use the app offline:
1. While online, search for destinations you're interested in
2. These searches will be saved to your device
3. When offline, you can still access previously searched information

## Add to iPhone Home Screen

For the best experience on iPhone:
1. Open Safari and navigate to the app URL
2. Tap the Share button (box with up arrow)
3. Scroll down and select "Add to Home Screen"
4. Name your app "VisaCheck" and tap "Add"
5. The app will appear on your home screen like a native app