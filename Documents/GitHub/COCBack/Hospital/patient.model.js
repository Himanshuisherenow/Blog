import mongoose from 'mongoose'

const patientSchema = new mongoose.userSchema({

},{timestamps:true}
)

export const Patient = mongoose.model("Patient",patientSchema)