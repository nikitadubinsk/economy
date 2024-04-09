const db = require('../models/index');
const jwt = require('jsonwebtoken');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class adminController {
    async rates(req, res) {
        try {
            let rates = await db.Rates.findAll({
                order: [['id', 'ASC']],
            });
            res.send(rates);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка всех тарфов (${e.message})`,
            });
        }
    }

    async rate(req, res) {
        try {
            let rates = await db.Rates.findOne({
                where: {
                    id: req.params.id,
                },
            });
            res.send(rates);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка тарифов (${e.message})`,
            });
        }
    }

    async updateRate(req, res) {
        try {
            let rates = await db.Rates.update(
                {
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    maxUsers: req.body.maxUsers,
                    active: req.body.active,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );
            res.send(rates);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время редактирования тарифа тарифа (${e.message})`,
            });
        }
    }

    async createRate(req, res) {
        try {
            let rates = await db.Rates.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                maxUsers: req.body.maxUsers,
                active: req.body.active,
            });
            res.send(rates);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время добавления тарифа (${e.message})`,
            });
        }
    }

    async hideRate(req, res) {
        try {
            let rates = await db.Rates.update(
                {
                    active: !req.body.active,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );
            res.send(rates);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время изменения статуса тарифа (${e.message})`,
            });
        }
    }

    async statistics(req, res) {
        try {
            const rateStatistics = {
                value: [],
                labels: [],
            };
            let rates = await db.Rates.findAll({
                attributes: ['name', 'id'],
            });
            const ratesId = await [];
            await rates.forEach(el => {
                ratesId.push(el.dataValues.id);
            });
            await rates.forEach(el => {
                rateStatistics.labels.push(el.dataValues.name);
            });
            for (let i = 0; i < ratesId.length; i++) {
                let count = await db.Organizations.count({
                    where: {
                        rateId: ratesId[i],
                    },
                });
                rateStatistics.value.push(count);
            }
            const userStatistics = await [];
            const role = await db.Roles.findOne({
                where: {
                    name: 'Администратор',
                },
            });
            for (let i = 0; i < 31; i++) {
                const count = await db.Users.count({
                    where: {
                        createdAt: {
                            [Op.between]: [
                                new Date() - (i + 1) * 24 * 60 * 60 * 1000,
                                new Date() - i * 24 * 60 * 60 * 1000,
                            ],
                        },
                        roleId: {
                            [Op.ne]: role.dataValues.id,
                        },
                    },
                });
                await userStatistics.push(count);
            }
            const organizationStatistics = await [];
            for (let i = 0; i < 31; i++) {
                const count = await db.Organizations.count({
                    where: {
                        createdAt: {
                            [Op.between]: [
                                new Date() - (i + 1) * 24 * 60 * 60 * 1000,
                                new Date() - i * 24 * 60 * 60 * 1000,
                            ],
                        },
                    },
                });
                await organizationStatistics.push(count);
            }
            res.send({
                rateStatistics,
                userStatistics: userStatistics.reverse(),
                organizationStatistics: organizationStatistics.reverse(),
            });
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время изменения статуса тарифа (${e.message})`,
            });
        }
    }
}

module.exports = new adminController();