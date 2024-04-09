const Router = require('express');
const router = new Router();
const controller = require("../controllers/userController")
const authMiddleware = require('../middlewares/authMiddleware');

router.get("/stories", authMiddleware, controller.stories)
router.get("/story/:id", authMiddleware, controller.storyById)
router.get("/money-boxes", authMiddleware, controller.moneyBoxes)
router.get("/statistic", authMiddleware, controller.statistic)
router.post("/receipt", authMiddleware, controller.receipt)
router.get("/transactions", authMiddleware, controller.transactions)
router.post("/transaction", authMiddleware, controller.createTransaction)
router.get("/categories", authMiddleware, controller.categories)
router.post("/money-box/:id", authMiddleware, controller.editMoneyBox)
router.post("/money-box", authMiddleware, controller.createMoneyBox)
router.delete("/money-box/:id", authMiddleware, controller.deleteMoneyBox)
router.delete("/transaction/:id", authMiddleware, controller.deleteTransaction)
router.get("/childrens", authMiddleware, controller.childrens)
router.get("/childrens/statistics/:id", authMiddleware, controller.childStatistics)
router.get("/full-info", authMiddleware, controller.fullUserInfo)

module.exports = router;
