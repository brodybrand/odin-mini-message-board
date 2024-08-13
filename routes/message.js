const express = require("express");
const router = express.Router();
const controller = require("../controllers/messagesController");

router.get("/:id", controller.getMessageDetails);

module.exports = router;
