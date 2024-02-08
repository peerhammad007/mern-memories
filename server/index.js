import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://peerhammad2022:RrIVGJZvz6WgQEN1@cluster0.0idxh1e.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`)))
    .catch(error => console.log(error.message));
    

//RrIVGJZvz6WgQEN1
//mongodb+srv://peerhammad2022:RrIVGJZvz6WgQEN1@cluster0.0idxh1e.mongodb.net/?retryWrites=true&w=majority