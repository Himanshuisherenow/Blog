import mongoose from 'mongoose'

const doctorSchema = new mongoose.userSchema({

},{timestamps:true}
)

export const Doctor = mongoose.model("Doctor",doctorSchema)