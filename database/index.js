const { Pool } = require('pg');


const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

pool.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Successfully connected to host');
  }
});

const getAllClips = async () => {
  try {
    const query = 'SELECT * FROM twitchclips';
    let result = await pool.query(query);
    console.log(result.rows);
  } catch (err) {
    console.log(err.stack);
  }
};

const insertClip = async (params) => {
  try {
    const query = 'INSERT INTO clips(id, title, broadcaster, views, game, embed_url, channel_url, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    const values = [params.slug, params.title, params.broadcaster.name, params.views, params.game, params.embed_url, params.broadcaster.channel_url, params.created_at];
    let result = await pool.query(query, values);
    console.log(result);
  } catch (err) {
    console.log(err.stack);
  }
};

const insertComment = async (params) => {
  try {
    const values = [];
    const query = 'INSERT INTO comments( video_id, username, comment, avatar_img, created_at) VALUES ($1, $2, $3, $4, $5)';
    let result = await pool.query(query, values);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllClips,
  insertClip,
  insertComment,
};
