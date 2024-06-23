import express from "express";
import "dotenv/config.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:8080`);
});
