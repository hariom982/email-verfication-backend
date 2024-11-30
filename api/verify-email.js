const { MongoClient } = require("mongodb");

module.exports = async (req, res) => {
    const uri = "mongodb+srv://hariom:salmankhan@cluster0.4khuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB connection string
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db("myDatabase"); 
        const collection = database.collection("users"); 

        const email = req.query.email;
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
