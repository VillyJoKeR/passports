# VisaCheck Complete Setup Guide

This guide provides step-by-step instructions to set up the VisaCheck application with all the visa data on your own system or iPhone.

## 1. Prerequisites

- Node.js (v16 or later)
- npm (comes with Node.js)
- Basic knowledge of terminal/command line
- A PostgreSQL database (local or cloud-based)

## 2. Project Setup

### Create Project Structure

Create a new folder for your project and set up the following directory structure:

```
visa-check/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   ├── public/
│   ├── index.html
├── server/
├── shared/
├── public/
```

### Initialize Project

1. Copy the following files from the Replit project:
   - package.json
   - tsconfig.json
   - vite.config.ts
   - tailwind.config.ts
   - postcss.config.js
   - theme.json
   - drizzle.config.ts

2. Install dependencies:
   ```bash
   npm install
   ```

## 3. Database Setup

### Set Up PostgreSQL Database

1. Create a new PostgreSQL database:
   ```sql
   CREATE DATABASE visa_check;
   ```

2. Create environment variable for database connection:
   Create a `.env` file in the project root:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/visa_check
   ```

3. Run the database schema creation script:
   - Copy the `database-export.sql` file
   - Run:
     ```bash
     psql -d visa_check -f database-export.sql
     ```

4. Import Spanish passport requirements:
   - Use `spanish-requirements-inserts.sql` to import all visa requirements for Spanish passport holders
   ```bash
   psql -d visa_check -f spanish-requirements-inserts.sql
   ```

## 4. Source Code Files

### Copy Core Files

1. Copy all the React components from the `/client/src/components/` directory
2. Copy utility files from `/client/src/lib/` directory
3. Copy hooks from `/client/src/hooks/` directory
4. Copy the page components from `/client/src/pages/` directory
5. Copy main app files:
   - `/client/src/App.tsx`
   - `/client/src/main.tsx`
   - `/client/src/index.css`
6. Copy server files:
   - `/server/index.ts`
   - `/server/routes.ts`
   - `/server/storage.ts`
   - `/server/db.ts`
   - `/server/vite.ts`
7. Copy shared files:
   - `/shared/schema.ts`
8. Copy public files:
   - `/public/service-worker.js`
   - Create `manifest.json` in public directory

## 5. Running the Application

### Development Mode

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Access the application at `http://localhost:5000`

### Production Build

1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

## 6. Deploying to a Hosting Service

### Option 1: Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect Vercel to your GitHub account
3. Create a new project in Vercel, selecting your repository
4. Configure environment variables:
   - Set `DATABASE_URL` to your PostgreSQL connection string
5. Deploy

### Option 2: Deploying to Heroku

1. Install Heroku CLI
2. Login to Heroku:
   ```bash
   heroku login
   ```
3. Create a new Heroku app:
   ```bash
   heroku create visa-check-app
   ```
4. Add Heroku PostgreSQL:
   ```bash
   heroku addons:create heroku-postgresql:hobby-dev
   ```
5. Deploy:
   ```bash
   git push heroku main
   ```
6. Import data into Heroku PostgreSQL:
   ```bash
   heroku pg:psql < database-export.sql
   heroku pg:psql < spanish-requirements-inserts.sql
   ```

## 7. Using on iPhone

1. After deploying to a hosting service, open Safari on your iPhone
2. Navigate to your app's URL
3. Tap the "Share" button (box with up arrow)
4. Scroll down and select "Add to Home Screen"
5. Give your app a name (e.g., "VisaCheck")
6. Tap "Add"

Now you'll have a home screen icon that opens the app like a native application!

## 8. Offline Functionality

The app includes offline capabilities:
1. The service worker caches essential files
2. The local storage mechanism saves searched visa requirements
3. To use offline:
   - First, use the app while online and search for the destinations you're interested in
   - These will be saved in your browser's storage
   - When offline, you can still access previously searched information

## 9. Data Maintenance

To keep visa requirements up to date:
1. Periodically check official embassy websites for changes
2. Update the database with new requirements
3. Update the `last_updated` field to reflect the latest information

## 10. Troubleshooting

If you encounter issues:
1. Check database connection string
2. Verify Node.js version (v16+ recommended)
3. Clear browser cache if seeing outdated information
4. Check browser console for errors