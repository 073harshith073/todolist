const { MongoClient } = require('TO_DO_LIST');

const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, { useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();

        const database = client.db('TO_DO_LIST');
        

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        await client.close();
    }
}

connectToMongoDB();cd
