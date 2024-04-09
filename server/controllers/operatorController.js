const db = require('../models/index');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { secret } = require('../config/config');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class operatorController {
    async stories(req, res) {
        try {
            let stories = await db.Stories.findAll({
                attributes: ['id', 'title', 'img', 'active', 'createdAt', 'categoryId'],
                where: {
                    categoryId: req.query.category
                },
                include: [
                    {
                        model: db.StoryCategories,
                        as: 'category',
                    },
                ],
                order: [['weight', 'ASC']],
            });
            await res.send(stories);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async storyById(req, res) {
        try {
            let story = await db.Stories.findOne({
                attributes: ['id', 'title', 'img', 'active', 'createdAt', 'categoryId'],
                where: {
                    id: req.params.id
                },
                include: [
                    {
                        model: db.StoryCategories,
                        as: 'category',
                    },
                ],
            });
            await res.send(story);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async editStory(req, res) {
        try {
            await db.Stories.update(
                {
                    title: req.body.title,
                    title: req.body.title,
                    categoryId: req.body.category,
                    active: req.body.active,
                    img: req.body.img,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );
            res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async hideStory(req, res) {
        try {
            await db.Stories.update(
                {
                    active: req.body.active,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );
            res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async hideChapter(req, res) {
        try {
            await db.Chapters.update(
                {
                    active: req.body.active,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );
            res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async createStory(req, res) {
        try {
            let stories = await db.Stories.findAll({
                where: {
                    categoryId: req.body.category,
                },
                order: [['id', 'DESC']],
                limit: 1,
            });
            const weigth = stories[0] && stories[0].dataValues ? +stories[0].dataValues.id + 1 : 0;

            await db.Stories.create({
                title: req.body.title,
                categoryId: req.body.category,
                active: req.body.active,
                img: req.body.img,
                weight: weigth,
            });
            res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async chapters(req, res) {
        try {
            let chapters = await db.Chapters.findAll({
                attributes: ['id', 'title', 'img', 'active', 'createdAt', 'answers', 'correctAnswer', 'weight'],
                where: {
                    storyId: req.params.id
                },
                order: [['weight', 'ASC']],
            });
            await res.send(chapters);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async createChapter(req, res) {
        try {
            let chapters = await db.Chapters.findAll({
                where: {
                    storyId: req.params.id,
                },
                order: [['id', 'DESC']],
                limit: 1,
            });
            const weigth = chapters[0] && chapters[0].dataValues ? +chapters[0].dataValues.id + 1 : 0;

            await db.Chapters.create({
                title: req.body.title,
                active: req.body.active,
                img: req.body.img,
                weight: weigth,
                text: req.body.description,
                answers: req.body.type === 'text' ? null : [req.body.answer1, req.body.answer2, req.body.answer3, req.body.answer4].toString(),
                correctAnswer: req.body.type === 'text' ? null : req.body.correctAnswer,
                storyId: req.params.id
            });

            await res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async editChapter(req, res) {
        try {
            await db.Chapters.update({
                title: req.body.title,
                active: req.body.active,
                img: req.body.img,
                weight: 1,
                text: req.body.description,
                answers: req.body.type === 'text' ? null : [req.body.answer1, req.body.answer2, req.body.answer3, req.body.answer4].toString(),
                correctAnswer: req.body.type === 'text' ? null : req.body.correctAnswer,
            }, {where: {
                id: req.params.id
            }});

            await res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async chapterById(req, res) {
        try {
            const chapter = await db.Chapters.findOne({
                where: {
                    id: req.params.id
                }
            });

                if (chapter.dataValues.correctAnswer) {
                    await res.send({
                        id: chapter.dataValues.id,
                        img: chapter.dataValues.img,
                        question: {
                            text: chapter.dataValues.title,
                            answers: chapter.dataValues.answers.split(","),
                            correctAnswer: chapter.dataValues.correctAnswer,
                            answer: chapter.dataValues.text
                        },
                        active: chapter.dataValues.active
                    })
                } else {
                    await res.send({
                        id: chapter.dataValues.id,
                        img: chapter.dataValues.img,
                        title: chapter.dataValues.title,
                        text: chapter.dataValues.text,
                        active: chapter.dataValues.active
                    })
                }
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async deleteChapter(req, res) {
        try {
            await db.Chapters.destroy({
                where: { id: req.params.id },
            });

            await res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async deleteStory(req, res) {
        try {
            await db.Stories.destroy({
                where: { id: req.params.id },
            });

            await res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async changeStoryWeight(req, res) {
        try {
            console.log("AAAAA")
            for (let i = 0; i < req.body.length; i++) {
                await db.Stories.update(
                    {
                        weight: req.body[i].weight,
                    },
                    {
                        where: {
                            id: req.body[i].id,
                        },
                    }
                );
            }

            await res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }
}

module.exports = new operatorController();
