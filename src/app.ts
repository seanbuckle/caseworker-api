import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { config } from "./config/env";

const app: Application = express();

/** 1. Security Headers (The Shield) **/
app.use(helmet());

/** 2. Logging (The Eyes) **/
// We only log in development to keep production logs clean and fast
if (config.nodeEnv === "development") {
    app.use(morgan("dev"));
}

/** 3. Parsers (The Hands) **/
app.use(express.json());

/** 4. Routes (The Brains) **/
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ status: "success" });
});

export default app;
