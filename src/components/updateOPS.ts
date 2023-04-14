export {};
const connection = require("../connectDB/connectDB");
function updateName(id: number, newName: string, callback: any) {
  connection.query(
    `UPDATE students SET std_name="${newName}" WHERE std_id=${id}`,
    (err: any, result: any) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log(result);
      callback(result.changedRows);
    }
  );
}
function updatefthName(id: number, newName: string, callback: any) {
  connection.query(
    `UPDATE students SET std_father="${newName}" WHERE std_id=${id}`,
    (err: any, result: any) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log(result);
      callback(result.changedRows);
    }
  );
}
module.exports = { updateName, updatefthName };
