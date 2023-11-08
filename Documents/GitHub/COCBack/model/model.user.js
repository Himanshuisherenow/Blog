import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({


username : {
    Type : String,
    required: true,
    unique : true,
    lowercase : true,
},
email:{
    Type:String,
    required:true,
    unique:true,
    lowercase:true

},
password:{
    Type : String,
    required:true,

    
}





},
{timestamps : true}
)

export const User = mongoose.model('User',userSchema)