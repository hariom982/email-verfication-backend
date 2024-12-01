// const { MongoClient } = require("mongodb");

// module.exports = async (req, res) => {
//     const uri = "mongodb+srv://hariom:salmankhan@cluster0.4khuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB connection string
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//     try {
//         await client.connect();
//         const database = client.db("myDatabase"); 
//         const collection = database.collection("users"); 

//         const email = req.query.email;
//         const user = await collection.findOne({ email: email });

//         if (user) {
//             res.status(200).json({ exists: true });
//         } else {
//             res.status(404).json({ exists: false });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     } finally {
//         await client.close();
//     }
// };
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

