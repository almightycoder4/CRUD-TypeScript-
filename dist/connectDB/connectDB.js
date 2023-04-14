"use strict";
const { error } = require("console");
const mysql = require("mysql");
const dotenv = require("dotenv").config({ path: "../.env" });
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});
module.exports = connection;
