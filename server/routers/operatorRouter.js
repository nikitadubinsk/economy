const Router = require('express');
const router = new Router();
const controller = require("../controllers/operatorController")
const authMiddleware = require("../middlewares/authMiddleware")

// ИСТОРИИ
router.get("/stories", authMiddleware, controller.stories)
router.post("/story", authMiddleware, controller.createStory)
router.get("/story/:id", authMiddleware, controller.storyById)
router.put("/story/:id", authMiddleware, controller.editStory)
router.put("/story/:id/hide", authMiddleware, controller.hideStory)
router.put("/chapter/:id/hide", authMiddleware, controller.hideChapter)
router.get("/chapters/:id", authMiddleware, controller.chapters)
router.post("/chapters/:id", authMiddleware, controller.createChapter)
router.get("/chapter/:id", authMiddleware, controller.chapterById)
router.put("/chapter/:id", authMiddleware, controller.editChapter)
router.delete("/chapter/:id", authMiddleware, controller.deleteChapter)
router.delete("/story/:id", authMiddleware, controller.deleteStory)
router.put("/story/change-weight", authMiddleware, controller.changeStoryWeight)

module.exports = router;
