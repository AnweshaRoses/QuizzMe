// controllers/userController.js


const UserController = {
  getQuestions: async (req, res) => {
    try {
      res.status(200).json({ response: 'success'});
    } catch (err) {
      res.status(500).json({ response: 'fail', msg: 'User Data could not be fetched!' });
    }
  },
  insertQuestions:async(req,res)=>{
    try {
      res.status(200).json({ response: 'success', msg:'question post req'});
    } catch (err) {
      res.status(500).json({ response: 'fail', msg: 'User Data could not be fetched!' });
    }
  },
  deleteQuestions:async(req,res)=>{
    try {
      res.status(200).json({ response: 'success', msg:'question delete req'});
    } catch (err) {
      res.status(500).json({ response: 'fail', msg: 'User Data could not be fetched!' });
    }
  }
};

module.exports = UserController;

