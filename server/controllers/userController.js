const db = require('../models/index');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/config');

const Sequelize = require('sequelize');
const md5 = require('md5');
const Op = Sequelize.Op;

class userController {
    async stories(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decorderData = jwt.verify(token, secret);
            const categoryType = await db.StoryCategories.findAll();
            let user = await db.Users.findOne({
                where: {
                    id: decorderData.id
                },
                include: [
                    {
                        model: db.Roles,
                        as: 'roles',
                    },
                ],
            })
            let client = await db.Clients.findOne({
                where: {
                    userId: decorderData.id
                },
            })
            const age = calculateAge(new Date(client.dataValues.dateOfBitrh))

            let stories = await db.Stories.findAll({
                attributes: ['id', 'title', 'img'],
                where: {
                    categoryId: convertCategory(categoryType, user.dataValues.roles.dataValues.name, age),
                    active: true
                },
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

    async moneyBoxes(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decorderData = jwt.verify(token, secret);
            let client = await db.Clients.findOne({
                where: {
                    userId: decorderData.id
                }
            })
            let moneyBoxes = await db.MoneyBoxes.findAll({
                attributes: ['id', 'name', 'sumPlan', 'sumFact', 'dateEnd', 'createdAt'],
                where: {
                    clientId: client.dataValues.id,
                },
            });
            const result = []
            moneyBoxes.forEach(moneyBox => {
                if (moneyBox.dataValues.dateEnd) {
                    result.push({
                        id: moneyBox.dataValues.id,
                        name: moneyBox.dataValues.name,
                        sum: {
                            plan: moneyBox.dataValues.sumPlan,
                            fact: moneyBox.dataValues.sumFact
                        },
                        date: {
                            dateStart: moneyBox.dataValues.createdAt,
                            dateEnd: moneyBox.dataValues.dateEnd
                        }
                    })
                } else {
                    result.push({
                        id: moneyBox.dataValues.id,
                        name: moneyBox.dataValues.name,
                        sum: {
                            plan: moneyBox.dataValues.sumPlan,
                            fact: moneyBox.dataValues.sumFact
                        },
                    })
                }
            });
            await res.send(result);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async statistic(req, res) {
        try {
            const result = {
                budget: {},
                categories: [],
                days: []
            };
            const token = req.headers.authorization.split(' ')[1];
            const decorderData = jwt.verify(token, secret);
            let client = await db.Clients.findOne({
                where: {
                    userId: decorderData.id
                }
            })
            result.budget = {
                plan: client.dataValues.monthlyBudget,
                fact: client.dataValues.amountOnAccount,
            }
            const now = new Date();

            const statCategory = await db.SpendingCategories.findAll({
                attributes: ['name', [Sequelize.fn('SUM', Sequelize.col('sum')), 'total']],
                include: [{
                    model: db.Transactions,
                    as: 'category',
                    where: {
                        createdAt: {
                            [Op.gte]: new Date(now.getFullYear(), now.getMonth(), 1)
                        },
                        clientId: client.dataValues.id
                    },
                    attributes: []
                }],
                group: ['SpendingCategories.name'],
                order: [[Sequelize.col('SpendingCategories.name'), 'ASC']]
            })
            statCategory.forEach(el =>
                result.categories.push({
                    name: el.dataValues.name,
                    sum: el.dataValues.total * -1
                }))


            let dateFrom = new Date(0);
            if (req.query?.from) {
                const dateFromParts = req.query.from.split('.');
                dateFrom = new Date(+dateFromParts[2], +dateFromParts[1] - 1, +dateFromParts[0]+1);
            }

            let dateTo = new Date(3000, 1, 1);
            if (req.query?.to) {
                const dateToParts = req.query.to.split('.');
                dateTo = new Date(+dateToParts[2], +dateToParts[1] - 1, +dateToParts[0]+1);
            }


            const statDay = await db.Transactions.findAll({
                attributes: [
                    [Sequelize.fn('date', Sequelize.col('date')), 'day'],
                    [Sequelize.fn('sum', Sequelize.col('sum')), 'totalSum'] // Суммируем суммы транзакций
                ],
                where: {
                    createdAt: {
                        [Sequelize.Op.between]: [dateFrom, dateTo] // Фильтрация по интервалу дат
                    },
                    clientId: client.dataValues.id,
                    categoryId: {
                        [Op.not]: null
                    }
                },
                group: ['day'], // Группировка по дню
                order: [[Sequelize.col('day'), 'ASC']], // Сортировка по возрастанию дня,
            })

            let currentDate = dateFrom;
            while (currentDate <= dateTo) {
                const dateStr = currentDate.toISOString().split('T')[0];
                const dayResult = statDay.find((item) => item.dataValues.day === dateStr);
                result.days.push([dateStr, dayResult ? +dayResult.dataValues.totalSum * -1 : 0])
                currentDate.setDate(currentDate.getDate() + 1);
              }

            res.send(result);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async receipt(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decorderData = jwt.verify(token, secret);
            let client = await db.Clients.findOne({
                where: {
                    userId: decorderData.id
                }
            })
            await db.Transactions.create({
                name: "Внесение денег",
                sum: req.body.sum,
                clientId: client.dataValues.id,
                date: (new Date()).toISOString()
            })
            await db.Clients.update(
                {
                    monthlyBudget: client.dataValues.monthlyBudget + req.body.sum
                },
                {
                    where: {
                        id: client.dataValues.id
                    }
                }
            )
            res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async transactions(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decorderData = jwt.verify(token, secret);
            let client = await db.Clients.findOne({
                where: {
                    userId: decorderData.id
                }
            })

            const page = (req?.query?.page || 0);

            let dateFrom = new Date(0);
            if (req.query?.dateFrom) {
                const dateFromParts = req.query.dateFrom.split('.');
                dateFrom = new Date(dateFromParts[2], dateFromParts[1] - 1, dateFromParts[0]+1);
            }

            let dateTo = new Date(3000, 1, 1);
            if (req.query?.dateTo) {
                const dateToParts = req.query.dateFrom.split('.');
                dateTo = new Date(dateToParts[2], dateToParts[1] - 1, dateToParts[0]);
            }

            let transactions = await db.Transactions.findAndCountAll({
                attributes: ['id', 'name', 'sum', 'date'],
                where: {
                    clientId: client.dataValues.id,
                    name: {
                        [Op.substring]: req?.query?.name || ''
                    },
                    date: {
                        [Op.between]: [dateFrom, dateTo]
                    }
                },
                include: [
                    {
                        model: db.SpendingCategories,
                        as: 'category',
                    },
                ],
                order: [['createdAt', 'DESC']],
                limit: 10,
                offset: page * 10
            });

            await res.send({
                data: transactions.rows,
                meta: {
                    pageable: {
                        pageNumber: page,
                        pageSize: 10,
                        totalElements: transactions.count,
                        totalPages: transactions.count < 10 ? 0 : Math.floor(transactions.count / 10) + 1
                    }
                }
            });
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async categories(req, res) {
        try {
            const spendingCategories = await db.SpendingCategories.findAll({
                attributes: ['id', 'name'],
            })

            await res.send(spendingCategories);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async editMoneyBox(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decorderData = jwt.verify(token, secret);
            let client = await db.Clients.findOne({
                where: {
                    userId: decorderData.id
                }
            })
            let moneyBox = await db.MoneyBoxes.findOne({
                where: {
                    id: req.params.id
                }
            })

            db.MoneyBoxes.update(
                {
                    sumFact: req.body.action ? (moneyBox.dataValues.sumFact - req.body.sum) : (moneyBox.dataValues.sumFact + req.body.sum)
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )

            await db.Clients.update(
                req.body.action ? {
                    monthlyBudget: client.dataValues.monthlyBudget + req.body.sum
                } : {
                    amountOnAccount: client.dataValues.amountOnAccount + req.body.sum
                },
                {
                    where: {
                        id: client.dataValues.id
                    }
                }
            )

            await db.Transactions.create({
                name: req.body.action ? `Деньги из копилки «${moneyBox.dataValues.name}»` : `Пополнение копилки «${moneyBox.dataValues.name}»`,
                sum: req.body.action ? req.body.sum : -req.body.sum,
                clientId: client.dataValues.id,
                date: (new Date()).toISOString()
            })

            res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async createTransaction(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decorderData = jwt.verify(token, secret);
            let client = await db.Clients.findOne({
                where: {
                    userId: decorderData.id
                }
            })
            const dateFormat = req.body.date.split('.');
            const date = new Date(dateFormat[2], dateFormat[1] - 1, dateFormat[0]);
            await db.Transactions.create({
                name: req.body.name,
                sum: -req.body.sum,
                clientId: client.dataValues.id,
                categoryId: req.body.category,
                date: date.toISOString()
            })
            await db.Clients.update(
                {
                    amountOnAccount: client.dataValues.amountOnAccount + req.body.sum
                },
                {
                    where: {
                        id: client.dataValues.id
                    }
                }
            )

            await res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async createMoneyBox(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decorderData = jwt.verify(token, secret);
            let client = await db.Clients.findOne({
                where: {
                    userId: decorderData.id
                }
            })
            await db.MoneyBoxes.create({
                name: req.body.name,
                sumPlan: req.body.sum,
                sumFact: 0,
                clientId: client.dataValues.id,
                dateEnd: req.body.date
            })

            await res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async deleteMoneyBox(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decorderData = jwt.verify(token, secret);
            let client = await db.Clients.findOne({
                where: {
                    userId: decorderData.id
                }
            })
            let moneyBox = await db.MoneyBoxes.findOne({
                where: {
                    id: req.params.id
                }
            })
            await db.Clients.update(
                {
                    monthlyBudget: client.dataValues.monthlyBudget + moneyBox.dataValues.sumFact
                },
                {
                    where: {
                        id: client.dataValues.id
                    }
                }
            )

            await db.Transactions.create({
                name: `Деньги из копилки «${moneyBox.dataValues.name}»`,
                sum: moneyBox.dataValues.sumFact,
                clientId: client.dataValues.id,
                date: (new Date()).toISOString()
            })
            await db.MoneyBoxes.destroy({
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

    async deleteTransaction(req, res) {
        try {
            await db.Transactions.destroy({
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

    async childrens(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decorderData = jwt.verify(token, secret);
            let client = await db.Clients.findOne({
                where: {
                    userId: decorderData.id
                },
            })

            let childrens = await db.Clients.findAll({
                attributes: ['createdAt', 'id'],
                where: {
                    parentId: client.dataValues.id,
                },
                include: [
                    {
                        model: db.Users,
                        as: 'user',
                    },
                ],
            });

            const result = []

            childrens.forEach(el => result.push({
                id: el.dataValues.id,
                name: el.dataValues.user.name,
                createdAt: el.dataValues.createdAt
            }))

            await res.send(result);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }
    
    async childStatistics(req, res) {
        try {
            const result = {
                budget: {},
                categories: []
            }
            let client = await db.Clients.findOne({
                where: {
                    id: req.params.id
                },
            })

            result.budget = {
                plan: Math.floor(+client.dataValues.monthlyBudget *100 / +client.dataValues.amountOnAccount),
                fact: 100,
            }
            const now = new Date();

            const statCategory = await db.SpendingCategories.findAll({
                attributes: ['name', [Sequelize.fn('SUM', Sequelize.col('sum')), 'total']],
                include: [{
                    model: db.Transactions,
                    as: 'category',
                    where: {
                        createdAt: {
                            [Op.gte]: new Date(now.getFullYear(), now.getMonth(), 1)
                        },
                        clientId: req.params.id
                    },
                    attributes: []
                }],
                group: ['SpendingCategories.name'],
                order: [[Sequelize.col('SpendingCategories.name'), 'ASC']]
            })
            const sumWithInitial = statCategory.reduce(
                (accumulator, currentValue) => accumulator + +currentValue.dataValues.total,
                0,
              );

            statCategory.forEach(el =>
                result.categories.push({
                    name: el.dataValues.name,
                    percent: Math.floor(+el.dataValues.total * 100 / sumWithInitial)
                }))

            await res.send(result);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async storyById(req, res) {
        try {
            console.log("AAAAA", req.params.id)
            const story = await db.Stories.findOne({
                where: {
                    id: req.params.id
                }
            })
            console.log(story)
            const chapters = await db.Chapters.findAndCountAll({
                where: { storyId: req.params.id, active: true },
                order: [['weight', 'ASC']],
            });
            const result = {
                id: story.dataValues.id,
                title: story.dataValues.title,
                img: story.dataValues.img,
                count: chapters.count,
                chapter: [],
            }

            chapters.rows.forEach(el => {
                if (el.dataValues.correctAnswer) {
                    result.chapter.push({
                        id: el.dataValues.id,
                        img: el.dataValues.img,
                        question: {
                            text: el.dataValues.title,
                            answers: el.dataValues.answers.split(","),
                            correctAnswer: el.dataValues.correctAnswer,
                            answer: el.dataValues.text
                        }
                    })
                } else {
                    result.chapter.push({
                        id: el.dataValues.id,
                        img: el.dataValues.img,
                        title: el.dataValues.title,
                        text: el.dataValues.text
                    })
                }
                
            })
    
            await res.send(result);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }

    async fullUserInfo(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decorderData = jwt.verify(token, secret);
            const categoryType = await db.StoryCategories.findAll();
            let user = await db.Users.findOne({
                where: {
                    id: decorderData.id
                },
                include: [
                    {
                        model: db.Roles,
                        as: 'roles',
                    },
                ],
            })
            let client = await db.Clients.findOne({
                where: {
                    userId: decorderData.id
                },
            })

            await res.send({
                name: user.dataValues.name,
                email: user.dataValues.email,
                date: client.dataValues.dateOfBitrh
            });
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка историй (${e.message})`,
            });
        }
    }
}

function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return +Math.abs(ageDate.getUTCFullYear() - 1970);
}

function convertCategory(categories, role, age) {
    if (role === 'Родитель') {
        if (age > 18) {
            return categories.find(el => el.dataValues.name === 'Родитель').id
        } else if (age < 12) {
            return categories.find(el => el.dataValues.name === '6-12').id
        } else {
            return categories.find(el => el.dataValues.name === '12-18').id
        }
    } else if (age < 12) {
        return categories.find(el => el.dataValues.name === '6-12').id
    } else {
        return categories.find(el => el.dataValues.name === '12-18').id
    } 
}

module.exports = new userController();
