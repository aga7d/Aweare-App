const mongoose= require("mongoose");
const {Schema} = mongoose;

const scoreSchema= new Schema({
    name: String,
    carbon: Number,
    green_gas : Number,
    water_use : Number,
    land_use : Number, 
    water_polution : Number,
    biodegrability : Number
})
module.exports= mongoose.model("Score", scoreSchema);