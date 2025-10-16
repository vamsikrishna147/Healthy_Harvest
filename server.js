// --- DEPENDENCIES ---
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

// --- CONFIGURATION ---
const app = express();
const port = 3000;

// --- IMPORTANT FIX ---
// The original connection string had a syntax error and was likely invalid.
// PLEASE REPLACE THIS ENTIRE STRING with the correct one from your MongoDB Atlas dashboard.
// Remember to replace <password> with your actual database user password.
const mongoUrl = process.env.MONGO_CONNECTION_STRING || 'mongodb+srv://vamsikrishnachintalapudi_db_user:vamsi2006@cluster0.wtkaoll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const dbName = 'healthyHarvestDB';
const collectionName = 'farmData';

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// --- API ENDPOINTS ---

/**
 * @route   POST /api/upload
 * @desc    Receives farm data and stores it in MongoDB.
 * @access  Public
 */
app.post('/api/upload', async (req, res) => {
    const data = req.body;
    if (!data || !Array.isArray(data) || data.length === 0) {
        return res.status(400).json({ success: false, message: 'No data received.' });
    }

    // Validate the connection string before attempting to connect
    if (!mongoUrl || !mongoUrl.startsWith('mongodb+srv://')) {
        console.error('FATAL: MongoDB connection string is missing or invalid in server.js.');
        return res.status(500).json({ success: false, message: 'Server configuration error.' });
    }

    const client = new MongoClient(mongoUrl);

    try {
        await client.connect();
        console.log("Successfully connected to MongoDB Atlas!"); // Added for debugging
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted.`);
        res.status(201).json({ 
            success: true, 
            message: `${result.insertedCount} data records saved successfully!` 
        });
    } catch (err) {
        console.error('Failed to save data to MongoDB:', err);
        res.status(500).json({ success: false, message: 'Error saving data. Check server logs and connection string.' });
    } finally {
        await client.close();
    }
});

// --- START SERVER ---
app.listen(port, () => {
    console.log(`Healthy Harvest backend server listening at http://localhost:${port}`);
});
