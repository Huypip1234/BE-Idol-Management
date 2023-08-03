import express from "express";
import { config } from "dotenv";
config();
import connect from "./database/database.js";
import idolRouter from "./router/idolRouter.js";
import userRouter from "./router/userRouter.js";
import bodyParser from "body-parser";
import checkToken from "./authentication/auth.js";

const app = express();
const port = process.env.PORT ?? 3000;

// Fixed Payload too large (must put on the top before express.json())
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use(express.json());

/* Middle Ware */
app.use(checkToken); // JWT checker

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
app.use("/user", userRouter);
/* End Router */

app.listen(port, async () => {
  await connect();
  console.log(`Listening on port: http://localhost:${port}`);
});
