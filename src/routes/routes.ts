import { Router } from "express";
const {
  getData,
  addData,
  patchData,
  delData,
} = require("../components/crudOPS");

const router = Router();
router.get("/getData", getData);
router.post("/addStd", addData);
router.patch("/updateData", patchData);
router.delete("/delData", delData);

module.exports = router;
