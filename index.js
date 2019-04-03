import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json());

app.use(cors());

import posts from "./routes/api/posts";

app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, (res, req) => {
  console.log(`Server started at ${port}`);
});
