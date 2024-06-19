const { query } = require('./db');

// Function to create the table and alter the sequence
async function createTableAndAlterSequence() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      password TEXT NOT NULL,
      pathToImages TEXT,
      pathToVideo TEXT
    );
  `;

  const alterSequenceQuery = `
    ALTER SEQUENCE users_id_seq RESTART WITH 1000;
  `;

  try {
    await query(createTableQuery);
    console.log('Table created');
    
    await query(alterSequenceQuery);
    console.log('Sequence altered to start with 1000');
  } catch (err) {
    console.error('Error creating table or altering sequence:', err.message);
    console.error(err.stack);
  }
}

// Function to insert data into the table
async function insertUser(password, pathToImages, pathToVideo) {
  const insertUserQuery = `
    INSERT INTO users (password, pathToImages, pathToVideo)
    VALUES ($1, $2, $3)
    RETURNING id;
  `;

  try {
    const result = await query(insertUserQuery, [password, pathToImages, pathToVideo]);
    console.log('Inserted user with id:', result.rows[0].id);
  } catch (err) {
    console.error('Error inserting user:', err.message);
    console.error(err.stack);
  }
}

// Main function to run the script
async function main() {
  await createTableAndAlterSequence();

  // Example data to insert
  const password = 'hashed_password';
  const pathToImages = 'path/to/images';
  const pathToVideo = 'path/to/video';

  await insertUser(password, pathToImages, pathToVideo);
}

main();
