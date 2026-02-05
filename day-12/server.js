const app = require('./src/app');
require('dotenv').config();
const connectDatabase = require('./src/config/database');

// Connect to the database
connectDatabase();

// Start the server on port 3000


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});