import mongoose from 'mongoose'

const medicalRecordSchema = new mongoose.userSchema({

},{timestamps:true}
)

export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema)