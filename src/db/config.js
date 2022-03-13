import { connect } from 'mongoose';

export const dbConnectMongo = async () => {
    try {
        await connect(process.env.MONGODB);
        console.log('MongoDB database online');
    } catch (error) {
        throw new Error('Failed to start the database');
    };
};