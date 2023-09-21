const express = require('express');
const PORT = 3500;
const app = express();
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Sequelize = require('sequelize');
const telegramApi = require('node-telegram-bot-api');
const multer = require('multer');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const {secret} = require('./config/config');
const path = require('path');
const fileUpload = require('express-fileupload');

const authRouter = require('./routers/authRouter');
const adminRouter = require('./routers/adminRouter');
const userRouter = require('./routers/userRouter');
const operatorRouter = require('./routers/operatorRouter');

const CONFIG = {
    DB: 'nikitadub5',
    USERNAME: 'nikitadub5',
    PASSWORD: 'Onboarding2022',
    DIALECT: 'postgres',
    HOST: 'pg2.sweb.ru',
};

app.use(cookieParser('onboarding'));
const db = require('./models/index');
const {isArray} = require('util');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser('onboarding'));

const sequelize = new Sequelize(CONFIG.DB, CONFIG.USERNAME, CONFIG.PASSWORD, {
    dialect: CONFIG.DIALECT,
    host: CONFIG.HOST,
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use(history());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);
app.use('/api/users', userRouter);
app.use('/api/operators', operatorRouter);

app.use(multer({dest: 'server/uploads'}).single('file'));
app.use(
    fileUpload({
        createParentPath: true,
    })
);

app.post('/api/operators/file', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decorderData = jwt.verify(token, secret);
        const extname = path.extname(req.file.originalname);
        if (req.file) {
            const fileName = req.file.originalname.split(extname);
            fs.rename(req.file.path, `${req.file.destination}/${req.file.filename}${extname}`, async () => {
                const organization = await db.Organizations.findOne({
                    where: {
                        id: decorderData.organizationId,
                    },
                });
                let allFiles = [];
                if (Array.isArray(organization.dataValues.files)) {
                    allFiles = [...organization.dataValues.files];
                    allFiles.push({route: `${req.file.filename}${extname}`, name: fileName[0]});
                } else {
                    allFiles = [];
                    allFiles.push({route: `${req.file.filename}${extname}`, name: fileName[0]});
                }
                await db.Organizations.update(
                    {
                        files: allFiles,
                    },
                    {
                        where: {
                            id: decorderData.organizationId,
                        },
                    }
                );
            });
        }
        res.send(void 0);
    } catch (e) {
        console.error(e);
        res.status(500).send({
            message: `Произошла небольшая ошибка во время загрузки файлов ${e.message}`,
        });
    }
});

app.post('/api/userPhoto', async (req, res) => {
    try {
        const extname = path.extname(req.file.originalname);
        if (req.file) {
            fs.rename(req.file.path, `${req.file.destination}/${req.file.filename}${extname}`, async () => {
                res.send({name: `${req.file.filename}${extname}`});
            });
        }
    } catch (e) {
        console.error(e);
        res.status(500).send({
            message: `Произошла небольшая ошибка во время загрузки фотографии ${e.message}`,
        });
    }
});

app.post('/api/operators/photo', async (req, res) => {
    try {
        const extname = path.extname(req.file.originalname);
        if (req.file) {
            fs.rename(req.file.path, `${req.file.destination}/${req.file.filename}${extname}`, async () => {
                res.send({name: `${req.file.filename}${extname}`});
            });
        }
    } catch (e) {
        console.error(e);
        res.status(500).send({
            message: `Произошла небольшая ошибка во время загрузки фотографии ${e.message}`,
        });
    }
});

app.get('/api/file/:filename', (req, res) => {
    res.sendFile(path.join(__dirname, '/uploads', req.params.filename));
});

app.use('/', serveStatic(path.join(__dirname, '../dist/onboarding')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/onboarding/index.html'));
});
app.get('/*/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/onboarding/index.html'));
});

db.sequelize
    //.sync({ force: true })
    .sync()
    .then(async () => {
        app.listen(PORT, () => {
            console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
        });
        console.log('Вы успешно подключились к базе данных');
    })
    .catch(err => console.log(err));
