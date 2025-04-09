// Database export script for VisaCheck app
import pg from 'pg';
import fs from 'fs';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function exportDatabase() {
  const client = await pool.connect();
  try {
    console.log('Connected to database. Starting export...');
    
    // Export countries
    const countriesResult = await client.query('SELECT * FROM countries ORDER BY id');
    const countriesData = JSON.stringify(countriesResult.rows, null, 2);
    fs.writeFileSync('exported-countries.json', countriesData);
    console.log(`✅ Exported ${countriesResult.rowCount} countries`);

    // Export all visa requirements
    const visaResult = await client.query('SELECT * FROM visa_requirements ORDER BY id');
    const visaData = JSON.stringify(visaResult.rows, null, 2);
    fs.writeFileSync('exported-visa-requirements.json', visaData);
    console.log(`✅ Exported ${visaResult.rowCount} visa requirements`);

    // Export Spanish passport requirements specifically
    const spanishResult = await client.query("SELECT * FROM visa_requirements WHERE from_country_code = 'es' ORDER BY id");
    const spanishData = JSON.stringify(spanishResult.rows, null, 2);
    fs.writeFileSync('exported-spanish-requirements.json', spanishData);
    console.log(`✅ Exported ${spanishResult.rowCount} Spanish passport requirements`);

    // Export search history
    const historyResult = await client.query('SELECT * FROM search_history ORDER BY id');
    const historyData = JSON.stringify(historyResult.rows, null, 2);
    fs.writeFileSync('exported-search-history.json', historyData);
    console.log(`✅ Exported ${historyResult.rowCount} search history entries`);

    // Generate SQL insert statements for Spanish passport requirements
    console.log('Generating SQL insert statements for Spanish passport requirements...');
    let sqlOutput = '-- SQL Insert statements for Spanish passport visa requirements\n\n';
    
    for (const row of spanishResult.rows) {
      const requirementsStr = JSON.stringify(row.requirements);
      
      sqlOutput += `INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES\n`;
      sqlOutput += `('${row.from_country_code}', '${row.to_country_code}', '${escapeSql(row.status)}', '${escapeSql(row.duration)}', '${escapeSql(row.validity)}', '${escapeSql(row.processing)}', '${escapeSql(row.cost)}', '${escapeSql(row.notes)}', '${requirementsStr}'::jsonb, '${escapeSql(row.last_updated)}');\n\n`;
    }
    
    fs.writeFileSync('spanish-requirements-inserts.sql', sqlOutput);
    console.log(`✅ Generated SQL insert statements for Spanish passport requirements`);

    console.log('📦 Database export complete! Files created:');
    console.log('  - exported-countries.json');
    console.log('  - exported-visa-requirements.json');
    console.log('  - exported-spanish-requirements.json');
    console.log('  - exported-search-history.json');
    console.log('  - spanish-requirements-inserts.sql');
  } finally {
    client.release();
  }
}

// Escape SQL string values
function escapeSql(value) {
  if (value === null || value === undefined) return '';
  return value.toString().replace(/'/g, "''");
}

// Run the export
exportDatabase().catch(err => {
  console.error('❌ Error exporting database:', err);
  process.exit(1);
});