const express = require('express')
const connectDB = require('./config/db');

const app = express();

// Connect to Database
connectDB();

app.get('/', (req, res) => res.send('API Running'))

const PORT = process.env.PORT || 5000 // look for an enviroment variable called port

app.listen(PORT, () => console.log(`It started. ${PORT}`))