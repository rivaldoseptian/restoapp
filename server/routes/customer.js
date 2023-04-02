const CustomerController = require("../controller/CustomerController");
const UserController = require("../controller/Usercontroller");
const authentication = require("../middleware/authentication");

const router = require("express").Router();

router.post("/register", UserController.Register);
router.post(
  "/generate-midtrans-token",
  authentication,
  CustomerController.generateMidtransToken
);
router.post("/googleSignIn", UserController.registerGoole);
router.post("/login", UserController.Login);
router.get("/menu", CustomerController.showMenu);
router.get("/order", authentication, CustomerController.getOrder);
router.delete(
  "/order/payment",
  authentication,
  CustomerController.bulkDeleteOrder
);
router.delete(
  "/order/delete",
  authentication,
  CustomerController.bulkDeleteOrderCheckout
);
router.post("/order/:MenuId", authentication, CustomerController.createOrder);
router.put("/order/:MenuId", authentication, CustomerController.UpdateOrder);
router.delete(
  "/order/:orderId",
  authentication,
  CustomerController.deleteOrder
);
router.get(
  "/menu/detail/:menuId",
  authentication,
  CustomerController.detailMenu
);

module.exports = router;
