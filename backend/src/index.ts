import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from './routes/MyUserRoute';

// mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log('db working ...'));
mongoose.connect('mongodb://db-c:27017/mern_food_ordering').then(()=>console.log('db connected ...'))


const app = express();
app.use(express.json());
app.use(cors());

app.get('/test', async (req: Request, res: Response) => {
    res.json({ message: 'Working with docker ...!'});
})

app.use('/api/my/user', MyUserRoute)

app.listen(3000, () => {
    console.log('server listening on 3000...');
})