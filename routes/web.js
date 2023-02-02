const express = require('express');
const router = express.Router();
const HomeController = require('../app/controllers/HomeController');
const AuthController = require('../app/controllers/AuthController');
const RegisterController = require('../app/controllers/RegisterController');
const HistoryController = require('../app/controllers/HistoryController');

router.post("/register/in-game", RegisterController.inGame);
router.get("/read-registers", RegisterController.readRegisters);
router.post("/history/save-result", HistoryController.saveResult);
router.post("/history/read-result", HistoryController.readHistorys);


// router.get('/', HomeController.homePage);
// router.get('/login', AuthController.loginPage);
// router.post('/login', AuthController.login);
// router.post('/logout', AuthController.logout);
// router.get('/sign-up', AuthController.signUpPage);
// router.post('/sign-up', AuthController.signUp);
// router.get('/forgot-password', AuthController.forgotPasswordPage);
// router.post('/forgot-password', AuthController.forgotPassword);



module.exports = router;