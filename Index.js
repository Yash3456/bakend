import  express from "express";
import dotenv from "dotenv";
import Connection from "./Databsae/db.js";
import Defaultdata from "./default.js";
import Routes from './Routes/route.js';
import cors from "cors";
import bodyParser from "body-parser";


const app = express();

dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);
const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);

app.listen(PORT,()=> console.log(`Server is running sucessfully on Port ${PORT}`));

Defaultdata();