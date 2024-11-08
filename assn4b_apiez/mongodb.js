const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const databaseName = 'student'; // Renamed for clarity
const client = new MongoClient(url);

// Function to connect to the database
const dbConnect = async () => {
    try {
        await client.connect(); // Wait for the connection to establish
        const db = client.db(databaseName); // Access the database
        return db.collection('profile'); // Return the 'profile' collection
    } catch (error) {
        console.error('Database connection error:', error);
        throw error; // Rethrow the error for handling in the calling function
    }
};

module.exports = dbConnect; // Export the dbConnect function