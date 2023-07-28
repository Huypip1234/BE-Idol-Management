import express from "express";
import { config } from "dotenv";
config();
import connect from "./database/database.js";
import idolRouter from "./router/idolRouter.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

/* Middle Ware */
app.use(function (req, res, next) {
  //CORS: Allow all access
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});
/* End Middle Ware */

/* Router */
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Getting api successfully",
  });
});

app.use("/idol", idolRouter);
/* End Router */

app.listen(port, async () => {
  await connect();
  console.log(`Listening on port: http://localhost:${port}`);
});
