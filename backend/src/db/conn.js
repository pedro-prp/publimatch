const moongoose = require('mongoose');
require('dotenv').config();

async function connect() {
  try {
    await moongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (error) {
    console.log('Error connecting to database');
    console.log(error);
  }
}

module.exports = { connect };
