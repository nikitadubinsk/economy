const Router = require('express');
const router = new Router();
const controller = require("../controllers/authController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/registration", controller.registration)
router.post("/login", controller.auth)
router.get("/info", authMiddleware, controller.info)
// router.get("/rates", controller.rates)
// router.post("/info", controller.updateInfo)
// router.post("/resetPassword", controller.resetPassword)

module.exports = router;
