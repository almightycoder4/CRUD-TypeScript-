import { Request, Response, NextFunction } from "express";
const connection = require("../connectDB/connectDB");
async function getData(req: Request, res: Response) {
  let sql = "SELECT * from students";
  connection.query(sql, (err: any, result: any) => {
    if (err)
      return res.send({
        message: result,
      });

    res.send({
      data: result,
    });
  });
}
async function addData(req: Request, res: Response) {
  const { id, name, course, fthname, admiyear } = req.body;
  let sql = `INSERT INTO students (std_id, std_name, std_course, std_father, std_admiyear) VALUES (${id},"${name}","${course}","${fthname}",${admiyear})`;
  connection.query(sql, (err: any, result: any) => {
    if (err) {
      res.status(406).send({
        message: err,
      });
      return connection.release();
    }
    res.status(201).send({
      message: "Data Added Sucessfully.",
    });
  });
}

async function patchData(req: Request, res: Response) {
  const { id } = req.params;
  console.log(req.params.id);
}

async function delData() {}
module.exports = { getData, addData, patchData, delData };
