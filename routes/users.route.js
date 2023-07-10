const { usersController } = require("../controllers/users.controller");
const { Router } = require("express");

const router = Router();

router.get("/usrs", usersController.getAllUsers);
router.post("/users", usersController.registerUsers);
router.post("/email", usersController.email);

module.exports = router;
