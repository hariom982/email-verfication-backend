const { MongoClient } = require("mongodb");

module.exports = async (req, res) => {
    const uri = "your_mongodb_connection_string"; // Replace with your MongoDB connection string
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db("your_database_name"); // Replace with your database name
        const collection = database.collection("users"); // Replace with your collection name

        const email = req.query.email; // Get the email from query parameters
        const user = await collection.findOne({ email: email });

        if (user) {
            res.status(200).json({ exists: true });
        } else {
            res.status(404).json({ exists: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        await client.close();
    }
};
