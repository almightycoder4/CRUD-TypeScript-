"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection = require("../connectDB/connectDB");
function updateName(id, newName, callback) {
    connection.query(`UPDATE students SET std_name="${newName}" WHERE std_id=${id}`, (err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(result);
        callback(result.changedRows);
    });
}
function updatefthName(id, newName, callback) {
    connection.query(`UPDATE students SET std_father="${newName}" WHERE std_id=${id}`, (err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(result);
        callback(result.changedRows);
    });
}
module.exports = { updateName, updatefthName };
