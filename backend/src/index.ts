import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

// mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log('db working ...'));

const app = express();
app.use(express.json());
app.use(cors());

app.get('/test', async (req: Request, res: Response) => {
    res.json({ message: 'Working with docker ...!'});
})

app.listen(3000, () => {
    console.log('hello')
    console.log('server listening on 3000');
})