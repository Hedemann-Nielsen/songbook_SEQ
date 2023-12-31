import express from "express";
import dotenv from "dotenv";
import { MainRouter } from "./routes/song.routes.js";
import { InstallRouter } from "./routes/install.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Udvider app i index.js så vi kan læse form body data
app.use(express.urlencoded({ extended: true }));

app.use(MainRouter, InstallRouter);

app.listen(port, () => {
	console.log(`server køre med port http://localhost:${port}`);
});
