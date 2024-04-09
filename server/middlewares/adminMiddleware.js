const jwt = require('jsonwebtoken');
const {secret} = require("../config/config");

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).send({
                message: `Пользователь не авторизован`,
            });
        } 
        const decorderData = jwt.verify(token, secret)
        if (decorderData.role !== "Администратор") {
            return res.status(403).send({
                message: `Нет прав доступа`,
            });
        }
        req.user = decorderData;
        next();
    } catch(e) {
        res.status(500).send({
            message: 'Произошла какая-то ошибка',
        });
    }
}