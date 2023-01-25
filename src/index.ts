import dotenv from "dotenv";
import express from "express";
const cors = require("cors");

const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  dotenv.config();
};

main().catch((error) => {
  console.log(error);
});
