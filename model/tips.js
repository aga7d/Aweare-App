const mongoose= require("mongoose");
const {Schema}= mongoose;

const tipsSchema= new Schema({
    title:String,
    content: String
})

module.exports= mongoose.model("Tip", tipsSchema);