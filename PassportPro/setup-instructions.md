# VisaCheck Setup Instructions

This document provides instructions for setting up the VisaCheck app locally on your computer and eventually on your iPhone.

## Required Software
1. Node.js (v18 or later)
2. npm (comes with Node.js)
3. PostgreSQL database

## Project Structure
The application has the following structure:
- **client/** - Frontend code (React application)
- **server/** - Backend API (Express server)
- **shared/** - Shared TypeScript types and schemas
- **public/** - Static assets
- **database/** - Database scripts and migrations

## Setup Steps

### 1. Create Project Folders
Create a new folder for your project with the following structure:
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

### 2. Set Up Database
1. Install PostgreSQL or use a cloud database service
2. Create a new database named `visa_check`
3. Note your database connection details (host, port, username, password)

### 3. Install Project Dependencies
In the root folder, create a package.json file with the following content:

```json
{
  "name": "visa-check",
  "version": "1.0.0",
  "description": "Visa requirement checker for travelers",
  "main": "server/index.js",
  "scripts": {
    "start": "tsx server/index.ts",
    "dev": "tsx server/index.ts",
    "build": "vite build",
    "db:push": "drizzle-kit push:pg"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.3.2",
    "@neondatabase/serverless": "^0.6.0",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-collapsible": "^1.0.3",
    "@radix-ui/react-context-menu": "^2.1.5",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-hover-card": "^1.0.7",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-menubar": "^1.0.4",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-toggle-group": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@tanstack/react-query": "^5.8.1",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "cmdk": "^0.2.0",
    "connect-pg-simple": "^9.0.1",
    "date-fns": "^2.30.0",
    "drizzle-kit": "^0.20.6",
    "drizzle-orm": "^0.29.1",
    "drizzle-zod": "^0.5.1",
    "embla-carousel-react": "^8.0.0-rc14",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "framer-motion": "^10.16.5",
    "input-otp": "^0.2.0",
    "lucide-react": "^0.292.0",
    "passport": "^0.6.0",
    "passport-local": "^1.0.0",
    "pg": "^8.11.3",
    "react": "^18.2.0",
    "react-day-picker": "^8.9.1",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.48.2",
    "react-icons": "^4.12.0",
    "react-resizable-panels": "^0.0.55",
    "recharts": "^2.9.3",
    "tailwind-merge": "^2.0.0",
    "tailwindcss-animate": "^1.0.7",
    "tsx": "^4.1.2",
    "typescript": "^5.2.2",
    "vaul": "^0.7.7",
    "vite": "^4.4.9",
    "wouter": "^2.11.0",
    "zod": "^3.22.4",
    "zod-validation-error": "^1.5.0"
  },
  "devDependencies": {
    "@types/connect-pg-simple": "^7.0.3",
    "@types/express": "^4.17.21",
    "@types/express-session": "^1.17.10",
    "@types/node": "^20.9.0",
    "@types/passport": "^1.0.15",
    "@types/passport-local": "^1.0.38",
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5"
  }
}
```

4. Run `npm install` to install all dependencies

### 4. Configure Database Connection
Create a `.env` file in the root folder with your database connection details:

```
DATABASE_URL=postgresql://username:password@localhost:5432/visa_check
```

### 5. Import Database Schema
Create the schema.ts file in the shared folder with the types and database schema.

### 6. Import Visa Data
Create a script to import the visa requirement data into your database.

### 7. Start the Development Server
Run `npm run dev` to start the development server.

### 8. Building for Production
1. Run `npm run build` to build the production version
2. Deploy the built application to a hosting service

## Using on iPhone
Once the application is deployed to a hosting service:
1. Open Safari on your iPhone
2. Navigate to your app's URL
3. Tap the Share button
4. Select "Add to Home Screen"
5. Now you can access the app from your home screen like a native app!

## Offline Functionality
The app includes service workers for offline functionality. Once you've loaded data, it will be available offline on your iPhone.