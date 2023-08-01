const Controller = require("../controller/MenuController");
const UserController = require("../controller/Usercontroller");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const router = require("express").Router();

router.post("/registerstaff", UserController.RegisterStaff);
router.post("/loginstaff", UserController.Login);

router.post(
  "/createmenu",
  authentication,
  authorization,
  Controller.createMenu
);
router.get("/showmenu", authentication, authorization, Controller.showMenu);
router.get("/detail/:MenuId", authentication, Controller.getMenubyId);
router.put(
  "/updateMenu/:MenuId",
  authentication,
  authorization,
  Controller.updateMenu
);
router.patch(
  "/updateStatus/:MenuId",
  authentication,
  authorization,
  Controller.updateStatus
);

module.exports = router;

