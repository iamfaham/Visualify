import mongoose, {Mongoose, Connection} from "mongoose";

const  MONGODB_URL = process.env.MONGODB_URL

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

// Caching the connection as NextJS works serverless,
// causing the connection to be established again and again

let cached: MongooseConnection =  (global as any).mongoose

if (!cached) {
    cached = (global as any).mongoose = {conn: null, promise: null} 
}

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn

    if (!MONGODB_URL) throw new Error('Missing MONGODB_URL')

    cached.promise = cached.promise || mongoose.connect(
        MONGODB_URL, {dbName: 'Cluster1', bufferCommands: false}
    )

    cached.conn = await cached.promise 

    await dropUniqueIndexIfNeeded(cached.conn.connection);

    return cached.conn
}


const dropUniqueIndexIfNeeded = async (connection: Connection): Promise<void> => {
    try {
      const collection = connection.collection('runs');
      const indexes = await collection.indexes();
      const authorIndex = indexes.find(index => index.key && index.key.author === 1);
  
      if (authorIndex && authorIndex.unique) {
        await collection.dropIndex('author_1');
        console.log('Dropped unique index on author field.');
      }
    } catch (error) {
      console.error('Error dropping index:', (error as Error).message);
    }
  };