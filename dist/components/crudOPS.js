"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection = require("../connectDB/connectDB");
const { updateName, updatefthName } = require("./updateOPS");
function getData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let sql = "SELECT * from students";
            connection.query(sql, (err, result) => {
                if (err) {
                    res.send({
                        message: result,
                    });
                }
                res.send({
                    data: result,
                });
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Fatal error",
            });
        }
    });
}
function addData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id, name, course, fthname, admiyear } = req.body;
            let sql = `INSERT INTO students (std_id, std_name, std_course, std_father, std_admiyear) VALUES (${id},"${name}","${course}","${fthname}",${admiyear})`;
            connection.query(sql, (err, result) => {
                if (err) {
                    res.status(406).send({
                        message: err,
                    });
                }
                res.status(201).send({
                    message: "Data Added Sucessfully.",
                });
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Fatal error",
            });
        }
    });
}
function patchData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (req.query.type === "stdName") {
                updateName(req.query.id, req.query.newName, (result) => {
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
                updatefthName(req.query.std_id, req.query.std_fthName, (result) => {
                    if (result === 0) {
                        res.status(200).send({
                            message: "Already Updated or Not Found in Database",
                        });
                    }
                    res.status(200).send({
                        message: "Student's Father Name Updated!!!",
                    });
                });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Fatal error",
            });
        }
    });
}
function delData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let sql = `DELETE from students WHERE std_id=${req.query.id}`;
            connection.query(sql, (err, result) => {
                if (err) {
                    res.send({
                        message: result,
                    });
                }
                res.send({
                    data: result,
                });
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Fatal error",
            });
        }
    });
}
module.exports = { getData, addData, patchData, delData };
