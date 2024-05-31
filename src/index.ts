import pool from './infrastructure/database/db';

async function testConnection() {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT * FROM test');
    console.log(res.rows[0]);
    client.release();
  } catch (err) {
    console.error('Error connecting to the database:', err);
  } finally {
    pool.end();
  }
}

testConnection();