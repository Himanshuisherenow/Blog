import mongoose from "mongoose";

const  todoSchema = new mongoose.Schema({

    content:{
        Type:String,
        require:true,

    },
    complete:{
        Type:Boolean,
        default : false,
    
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    subTodos:[
        {
            Type : mongoose.Schema.Types.ObjectId ,
            ref:'SubTodo'
        }
    ]// Array of subtodo
},{timestamps:true})

export const Todo =  mongoose.model('Todo',todoSchema)