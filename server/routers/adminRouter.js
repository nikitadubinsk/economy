const Router = require('express');
const router = new Router();
const controller = require("../controllers/adminController")
const adminMiddleware = require("../middlewares/adminMiddleware")

router.get("/rates", adminMiddleware, controller.rates)
router.get("/rate/:id", adminMiddleware, controller.rate)
router.put("/rate/:id", adminMiddleware, controller.updateRate)
router.post("/rate", adminMiddleware, controller.createRate)
router.post("/rate/:id/hide", adminMiddleware, controller.hideRate)

router.get("/statistics", adminMiddleware, controller.statistics)

module.exports = router;
