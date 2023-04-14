import { Request, Response, NextFunction } from "express";
const connection = require("../connectDB/connectDB");
const { updateName, updatefthName } = require("./updateOPS");

async function getData(req: Request, res: Response) {
  try {
    let sql = "SELECT * from students";
    connection.query(sql, (err: any, result: any) => {
      if (err) {
        res.send({
          message: result,
        });
      }

      res.send({
        data: result,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Fatal error",
    });
  }
}

async function addData(req: Request, res: Response) {
  try {
    const { id, name, course, fthname, admiyear } = req.body;
    let sql = `INSERT INTO students (std_id, std_name, std_course, std_father, std_admiyear) VALUES (${id},"${name}","${course}","${fthname}",${admiyear})`;
    connection.query(sql, (err: any, result: any) => {
      if (err) {
        res.status(406).send({
          message: err,
        });
      }
      res.status(201).send({
        message: "Data Added Sucessfully.",
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Fatal error",
    });
  }
}

async function patchData(req: Request, res: Response) {
  try {
    if (req.query.type === "stdName") {
      updateName(req.query.id, req.query.newName, (result: number) => {
        if (result === 0) {
          res.status(200).send({
            message: "Already Updated or Not Found in Database",
          });
        }
        res.status(200).send({
          message: "Student Id Updated!!!",
        });
      });
    }

    ///////////////// Update Student's Father Name in DB//////////////////////////

    if (req.query.type === "fthName") {
      updatefthName(
        req.query.std_id,
        req.query.std_fthName,
        (result: number) => {
          if (result === 0) {
            res.status(200).send({
              message: "Already Updated or Not Found in Database",
            });
          }
          res.status(200).send({
            message: "Student's Father Name Updated!!!",
          });
        }
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Fatal error",
    });
  }
}

async function delData(req: Request, res: Response) {
  try {
    let sql = `DELETE from students WHERE std_id=${req.query.id}`;
    connection.query(sql, (err: any, result: any) => {
      if (err) {
        res.send({
          message: result,
        });
      }
      res.send({
        data: result,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Fatal error",
    });
  }
}
module.exports = { getData, addData, patchData, delData };
