"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = require("./routes/routes");
const morgan = require("morgan");
const cors = require("cors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(morgan("tiny"));
app.use(cors());
app.use("/", router);
app.get("/", (req, res, next) => {
    console.log(req.body);
    res.send({
        message: "CRUD on TypeScript and MySQL has started",
    });
});
app.get("/DBstatus", (req, res, next) => { });
const port = process.argv[2] || 8080;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
