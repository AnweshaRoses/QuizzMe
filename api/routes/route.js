// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controller/routecontroller');

// Question Routes
router.get('/questions', UserController.getQuestions);
router.post('/questions',UserController.insertQuestions );
router.delete('/questions',UserController.deleteQuestions );


// Result Routes
router.get('/result', UserController.getResult);
router.post('/result',UserController.insertResult );
router.delete('/result',UserController.deleteResult );
module.exports = router;
