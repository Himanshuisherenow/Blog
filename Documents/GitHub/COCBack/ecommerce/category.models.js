import mongoose from 'mongoose'

const categorySchema = new mongoose.userSchema({

    name : {
        Type:String,
        require:true,

    }
},{timestamps:true}
)

export const Category = mongoose.model("Category",categorySchema)