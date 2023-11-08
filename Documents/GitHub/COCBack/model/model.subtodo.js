import mongoose from "mongoose";

const  subTodoSchema = new mongoose.Schema({

    content:{
        Type:String,
        require:true,

    },
    complete:{
        Type:Boolean,
        default : false,
    
    },
    createdAt:{
        Type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

export const SubTodo = mongoose.model('SubTodo',subTodoSchema)