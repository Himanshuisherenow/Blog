import mongoose from 'mongoose'


const orderItemSchema = new mongoose.Schema({

    productId:{
        type : mongoose.Schema.Type.objectId,
        ref:'product'
    },
    quantity:{
        type : Number,
        require : true
    }
}  )
const orderSchema = new mongoose.userSchema({

   orderPrice: {
        Type : Number,
        required:true,
    },
    coustomer: {

        type : mongoose.Schema.Type.ObjectId,
        ref:'User'
    },

    orderId :{

        type:[orderItemSchema]
    },
    address:{
        type : String,
        require:true,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }

},{timestamps:true}
)

export const Order = mongoose.model("Order",orderSchema)