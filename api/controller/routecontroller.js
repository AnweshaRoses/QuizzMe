// controllers/userController.js
const Question=require("../models/questionSchema")
const Result=require("../models/resultSchema")
const {englishQuizData, answers}=require("../database/data")
const UserController = {
  getQuestions: async (req, res) => {
    try {
      const q = await Question.find();
        res.json(q)
    } catch (err) {
      res.status(500).json({ response: 'fail', msg: 'User Data could not be fetched!' });
    }
  },
  insertQuestions:async(req,res)=>{
    try {
      Question.insertMany({question:englishQuizData, answers:answers})
      res.status(200).json({ response: 'success', msg:'question post req'});
    } catch (err) {
      res.status(500).json({ response: 'fail', msg: 'User Data could not be fetched!' });
    }
  },
  deleteQuestions:async(req,res)=>{
    try {
      await Question.deleteMany();
      res.status(200).json({ response: 'success', msg:'question delete req'});
    } catch (err) {
      res.status(500).json({ response: 'fail', msg: 'User Data could not be fetched!' });
    }
  },
  getResult:async(req,res)=>{

    try {
      const r = await Result.find();
      res.status(200).json({ response: 'success', msg:'Get Result'});
    } catch (err) {
      res.status(500).json({ response: 'fail', msg: 'User Data could not be fetched!' });
    }
  },
  insertResult:async(req,res)=>{
    try {
      const { username, result, attempts, points, achived } = req.body;
      if(!username && !result) throw new Error('Data Not Provided...!');

      Result.create({ username, result, attempts, points, achived }, function(err, data){
          res.json({ msg : "Result Saved Successfully...!"})
      })

    } catch (err) {
      res.status(500).json({ response: 'fail', msg: 'User Data could not be fetched!' });
    }
  },
  deleteResult:async(req,res)=>{
    try {
      await Result.deleteMany();
      res.json({ msg : "Result Deleted Successfully...!"})
    } catch (err) {
      res.status(500).json({ response: 'fail', msg: 'User Data could not be fetched!' });
    }
  },

};

module.exports = UserController;

