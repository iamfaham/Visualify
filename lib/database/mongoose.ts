import mongoose, {Mongoose} from "mongoose";

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

    return cached.conn
}