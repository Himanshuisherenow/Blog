import mongoose from 'mongoose'

const productSchema = new mongoose.userSchema({

    description : {
        require : true,
        Type : String
    },
    name:{
        require : true,
        Type : String

    }, // you can save Image in mongodb but it can make db heavy, put in folder on your server or 
       //AWS bucket image url public given to you.
    productImage : {

        type :String,


    },
    price : {
        type : Number,
        default : 0,

    },
    stock:{
        type : Number,
        default : 0,
    },

    category : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        require: true,
    },
    owner : {
        type :mongoose.Schema.Type.ObjectId,
        ref:'User'
    }
},{timestamps:true}
)

export const Product = mongoose.model("Product",productSchema)