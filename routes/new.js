const express = require("express");
const router = express.Router();
const controller = require("../controllers/messagesController");

router.get("/", controller.getForm);
router.post("/", controller.postMessage);

module.exports = router;
