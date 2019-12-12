const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

export class PlacesDal {

    async createTable() {
        const client = await pool.connect();

    }

}
