const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/AuthRoutes');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
// Connect Database
connectDB();
// Middleware
app.use(express.json());
app.use(cors());

// Routes

app.use('/api/auth', authRoutes);

module.exports = app;
