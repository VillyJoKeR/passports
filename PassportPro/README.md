# VisaCheck App

A mobile-optimized web application for checking visa requirements based on passport nationality, with comprehensive details for Spanish passport holders.

![VisaCheck App](generated-icon.png)

## Features

- **Passport & Destination Selection**: Easily search and select your passport country and destination
- **Comprehensive Visa Information**: Get detailed requirements including:
  - Visa status (visa-free, e-visa, visa on arrival, visa required)
  - Stay duration
  - Processing time
  - Cost
  - Required documents
  - Important notes
- **Mobile Optimization**: Designed specifically for iPhone usage
- **Offline Capability**: Access previously searched information without internet connection
- **Progressive Web App**: Install directly to your home screen for app-like experience
- **Recent Searches**: Quick access to your previous lookups

## Data Coverage

- 195+ countries in the database
- 119 destinations with detailed visa requirements for Spanish passport holders
- 350 total visa requirement entries

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn UI
- **Backend**: Express.js, PostgreSQL, Drizzle ORM
- **PWA Features**: Service workers for offline functionality

## Setup

Detailed setup instructions are available in the following files:
- `setup-instructions.md` - Basic setup guide
- `complete-setup-guide.md` - Comprehensive installation instructions
- `database-export-guide.md` - Instructions for exporting and importing database data

## Documentation

For more information on how to use the app, please see:
- `app-documentation.md` - Application features and usage guide

## Data Files

The repository includes exported data:
- `exported-countries.json` - Complete country list with flags
- `exported-visa-requirements.json` - All visa requirements in the database
- `exported-spanish-requirements.json` - Visa requirements for Spanish passport holders
- `spanish-requirements-inserts.sql` - SQL inserts for Spanish passport requirements

## License

MIT

## Acknowledgements

- Country data and flags from international standards
- Visa requirement information compiled from official sources