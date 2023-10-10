import express, { Application } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import Routes from "./routes";
import connectToDB from "./utils/mongodb";
require("dotenv").config();

const app: Application = express();
const MONGODB_URI: string = process.env.MONGODB_URI || "";

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

connectToDB(MONGODB_URI);
Routes(app);

export default app;
