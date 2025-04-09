# Database Export Guide

This guide will show you how to export the complete database with all the visa requirements data we've added to the application.

## Export the Full Database

The provided `database-export.sql` file contains a basic schema and sample data, but doesn't include all the Spanish passport visa requirements we've added (119 destinations). To export the complete database:

### Option 1: Use pg_dump (If You Have PostgreSQL Installed Locally)

If you have PostgreSQL installed locally, you can connect to the Replit database and dump its contents:

1. Install PostgreSQL client tools on your computer
2. Use the following command to export the database:

```bash
# Replace these with your actual database credentials from Replit
pg_dump --host=yourdbhost --port=yourdbport --username=yourdbuser --dbname=yourdbname > full_database.sql
```

### Option 2: Export Using a Database Management Tool

1. Install a database management tool like DBeaver, pgAdmin, or TablePlus
2. Connect to your Replit database using the connection information
3. Use the tool's export functionality to export the entire database schema and data

### Option 3: Extract Data Directly in Replit

Since you're using Replit and might not have direct access to the database from your local machine, you can create a script to export the data:

1. Create a file called `export-database.js` with the following content:

```javascript
const { Pool } = require('pg');
const fs = require('fs');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function exportDatabase() {
  const client = await pool.connect();
  try {
    // Export countries
    const countriesResult = await client.query('SELECT * FROM countries ORDER BY id');
    const countriesData = JSON.stringify(countriesResult.rows, null, 2);
    fs.writeFileSync('exported-countries.json', countriesData);
    console.log(`Exported ${countriesResult.rowCount} countries`);

    // Export visa requirements
    const visaResult = await client.query('SELECT * FROM visa_requirements ORDER BY id');
    const visaData = JSON.stringify(visaResult.rows, null, 2);
    fs.writeFileSync('exported-visa-requirements.json', visaData);
    console.log(`Exported ${visaResult.rowCount} visa requirements`);

    // Export Spanish passport requirements specifically
    const spanishResult = await client.query("SELECT * FROM visa_requirements WHERE from_country_code = 'es' ORDER BY id");
    const spanishData = JSON.stringify(spanishResult.rows, null, 2);
    fs.writeFileSync('exported-spanish-requirements.json', spanishData);
    console.log(`Exported ${spanishResult.rowCount} Spanish passport requirements`);

    console.log('Database export complete!');
  } finally {
    client.release();
  }
}

exportDatabase().catch(err => {
  console.error('Error exporting database:', err);
  process.exit(1);
});
```

2. Run this script in Replit:
```bash
node export-database.js
```

3. Download the generated JSON files from Replit

## Import the Database

Once you have the exported data, you can import it into a new PostgreSQL database:

1. Set up a PostgreSQL database on your hosting provider
2. Create the database schema:
   ```sql
   -- Execute the CREATE TABLE statements from database-export.sql
   ```
3. Import the data:
   - If you have a complete SQL dump:
     ```bash
     psql -h yourhostname -U yourusername -d yourdatabase < full_database.sql
     ```
   - If you have JSON exports:
     ```javascript
     // Use a script similar to the export script but reverse the process
     ```

## Data Volume

The full database contains:
- Complete country list (245+ countries and territories)
- 119 destinations with detailed visa requirements for Spanish passport holders
- Default fallback entry for unknown combinations
- Total of ~300 visa requirement entries

## Database Maintenance

To keep the database updated:
1. Periodically check for visa requirement changes
2. Update the `last_updated` field when making changes
3. Consider adding a version field to track database schema changes