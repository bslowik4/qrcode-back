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
async function insertUser(password) {
  const insertUserQuery = `
    INSERT INTO users (password)
    VALUES ($1)
    RETURNING id;
  `;

  try {
    const result = await query(insertUserQuery, [password]);
    const id = result.rows[0].id;

    const pathToImages = `/uploads/${id}/`;
    const pathToVideo = `/video/${id}/`;

    const updateUserPathsQuery = `
      UPDATE users
      SET pathToImages = $1, pathToVideo = $2
      WHERE id = $3;
    `;

    await query(updateUserPathsQuery, [pathToImages, pathToVideo, id]);

    console.log(`Inserted user with id: ${id}`);
  } catch (err) {
    console.error('Error inserting user:', err.message);
    console.error(err.stack);
  }
}

async function main() {
  await createTableAndAlterSequence();

  // Insert two dummy users
  await insertUser('hashed_password_1');
  await insertUser('hashed_password_2');
}

main();

