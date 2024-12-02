const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://hariom:salmankhan@cluster0.4khuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        const db = client.db("myDatabase");
        const collections = await db.listCollections().toArray();
        console.log("Collections:", collections);
    } catch (err) {
        console.error("Connection error:", err);
    } finally {
        await client.close();
    }
}

testConnection();
