const db = require('../models/index');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const {secret} = require('../config/config');

const generateAccessToken = (id, role, name, time) => {
    const payload = {
        id,
        role,
        name,
    };
    return jwt.sign(payload, secret, {expiresIn: time});
};

class authController {
    async registration(req, res) {
        try {
            let role = null;
            let parent = null;

            if (req.body.parentEmail) {
                role = await db.Roles.findOne({
                    where: {
                        name: 'Ребенок',
                    },
                });

                parent  = await db.Users.findOne({
                    where: {
                        email: req.body.parentEmail
                    },
                }) 

                if (!parent) {
                    return res.status(400).send({
                        message: 'Пользователя с email родителя не существует',
                    });
                }
            } else {
                role = await db.Roles.findOne({
                    where: {
                        name: 'Родитель',
                    },
                });
            }
            
            const candidate = await db.Users.findOne({
                where: {
                    email: req.body.email,
                },
            });
            if (candidate) {
                return res.status(400).send({
                    message: 'Данный пользователь уже существует',
                });
            }

            let user = await db.Users.create({
                name: req.body.name,
                email: req.body.email,
                password: md5(req.body.password1),
                roleId: role.dataValues.id,
            });
            await db.Clients.create({
                userId: user.id,
                monthlyBudget: 0,
                amountOnAccount: 0,
                rateId: 1,
                parentId: parent?.dataValues?.id || null,
                dateOfBitrh: req.body.birthday
            })
            const token = generateAccessToken(
                user.dataValues.id,
                role.dataValues.name,
                user.dataValues.name,
                3600
            );
            return res.status(200).json({token: token});
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время регистрации (${e.message})`,
            });
        }
    }

    async auth(req, res) {
        try {
            let result = await db.Users.count({
                where: {email: req.body.login, password: md5(req.body.password)},
            });
            if (result === 0) {
                result = await db.Users.count({
                    where: {email: req.body.login},
                });
                if (result == 0) {
                    res.status(401).send({
                        message: 'Данный пользователь не найден',
                    });
                } else {
                    res.status(401).send({
                        message: 'Неверный пароль',
                    });
                }
            } else {
                let user = await db.Users.findOne({
                    where: {email: req.body.login, password: md5(req.body.password)},
                });
                let role = await db.Roles.findOne({
                    where: {id: user.dataValues.roleId},
                });
                const token = generateAccessToken(
                    user.dataValues.id,
                    role.dataValues.name,
                    user.dataValues.name,
                    3600
                );
                return res.status(200).json({token});
            }
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время авторизации (${e.message})`,
            });
        }
    }

    async info(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            let decorderData = jwt.verify(token, secret);
            // let operatorRoles = await db.Users.findOne({
            //     where: {id: decorderData.id},
            // });
            let user = await db.Users.findOne({
                where: {id: decorderData.id},
            });
            decorderData = await {
                ...decorderData,
            };
            res.send(decorderData);
        } catch (e) {
            console.error(e);
            res.status(401).send({
                message: `Произошла небольшая ошибка во время получения информации о пользователе (${e.message})`,
            });
        }
    }

    async rates(req, res) {
        try {
            let rates = await db.Rates.findAll({
                where: {active: true},
                attributes: ['id', 'name', 'description', 'price', 'maxUsers'],
            });
            res.send(rates);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во время получения списка тарифов (${e.message})`,
            });
        }
    }

    // async updateInfo(req, res) {
    //     try {
    //         const token = req.headers.authorization.split(' ')[1];
    //         let decorderData = jwt.verify(token, secret);
    //         await db.Users.update(
    //             {
    //                 photo: req.body.photo,
    //             },
    //             {
    //                 where: {
    //                     id: decorderData.id,
    //                 },
    //             }
    //         );
    //         await db.Clients.update(
    //             {
    //                 typeInformationPerception: req.body.typeInformationPerception,
    //                 telegramUserId: req.body.telegramUserId,
    //                 description: req.body.description,
    //             },
    //             {
    //                 where: {
    //                     userId: decorderData.id,
    //                 },
    //             }
    //         );
    //         res.send(void 0);
    //     } catch (e) {
    //         console.error(e);
    //         res.status(500).send({
    //             message: `Произошла небольшая ошибка во время получения информации о пользователе (${e.message})`,
    //         });
    //     }
    // }

    async resetPassword(req, res) {
        try {
            let password = Math.random().toString(36).slice(-8);
            let user = await db.Users.findOne({
                where: {
                    email: req.body.login,
                },
            });
            if (user) {
                await db.Users.update(
                    {
                        password: md5(password),
                    },
                    {
                        where: {
                            id: user.dataValues.id,
                        },
                    }
                );
            }
            // await transporter.sendMail({
            //     from: '"Onboarding" <info@onboarding2022.online>',
            //     to: req.body.login,
            //     subject: 'Восстановление пароля в системе онбординга',
            //     text: `Привет! Ты восстанавливал пароль. Твой новый пароль - ${password}. Если ты этого не делал, срочно сам восстанови пароль и скажи своим hr-менеджерам`,
            // });
            res.send(void 0);
        } catch (e) {
            console.error(e);
            res.status(500).send({
                message: `Произошла небольшая ошибка во восстановление пароля (${e.message})`,
            });
        }
    }
}

module.exports = new authController();
