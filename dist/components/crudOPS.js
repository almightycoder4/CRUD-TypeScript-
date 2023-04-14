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
function getData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = "SELECT * from students";
        connection.query(sql, (err, result) => {
            if (err)
                return res.send({
                    message: result,
                });
            res.send({
                data: result,
            });
        });
    });
}
function addData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id, name, course, fthname, admiyear } = req.body;
        let sql = `INSERT INTO students (std_id, std_name, std_course, std_father, std_admiyear) VALUES (${id},"${name}","${course}","${fthname}",${admiyear})`;
        connection.query(sql, (err, result) => {
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
    });
}
function patchData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        console.log(req.params.id);
    });
}
function delData() {
    return __awaiter(this, void 0, void 0, function* () { });
}
module.exports = { getData, addData, patchData, delData };
