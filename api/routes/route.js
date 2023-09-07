// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controller/routecontroller');

router.get('/questions', UserController.getQuestions);

router.post('/questions',UserController.insertQuestions );
router.delete('/questions',UserController.deleteQuestions );
module.exports = router;
