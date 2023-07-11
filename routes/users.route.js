const { usersController } = require("../controllers/users.controller");
const { Router } = require("express");
const multerMiddleware = require('../models/middlewares/multer.middleware')

const router = Router();

router.get("/usrs", usersController.getAllUsers);
router.post("/users",multerMiddleware, usersController.registerUsers);
router.post("/email", usersController.email);

module.exports = router;
