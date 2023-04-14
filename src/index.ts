import express, { Application, Request, Response, NextFunction } from "express";
const router = require("./routes/routes");
const morgan = require("morgan");
const cors = require("cors");
const app: Application = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use("/", router);
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  res.send({
    message: "CRUD on TypeScript and MySQL has started",
  });
});
app.get("/DBstatus", (req: Request, res: Response, next: NextFunction) => {});

const port = process.argv[2] || 8080;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
