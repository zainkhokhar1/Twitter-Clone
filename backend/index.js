
import express from 'express';
import env from 'dotenv'
import { ConnectMongoDB } from './MongooseConnection.js';
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import cors from 'cors'
const app = express();
env.config();
let Port = process.env.PORT || 4001;
app.listen(Port, () => {
    console.log('Listening on the Port ' + Port);
});

// ################# Making connection to mongoose ########################
ConnectMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/user', UserRoute);
app.use('/post', PostRoute);