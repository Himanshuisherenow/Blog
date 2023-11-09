import mongoose from 'mongoose'

const hospitalSchema = new mongoose.userSchema({

},{timestamps:true}
)

export const Hospital = mongoose.model("Hospital",hospitalSchema)