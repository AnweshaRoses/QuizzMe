const mongoose=require("mongoose")
const questionModel=new mongoose.Schema(
    {
      
       question: {type: Array,default:[]},
       answers: {type: Array,default:[]},
       createdAt:{type: Date, default:Date.now},
       
    },{timestamps:true}
)

module.exports=mongoose.model("Question",questionModel);