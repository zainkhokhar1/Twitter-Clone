import mongoose from 'mongoose';
import express from 'express';
import env from 'dotenv'
env.config();
const Url = process.env.MONGOURL;

export const ConnectMongoDB = async () => {
    try {
        await mongoose.connect(Url);
        console.log('Successfully Connected to mongoose')
    }
    catch (e) {
        console.log('Error while connecting to mongoDB' + e.message); 
    }
}
