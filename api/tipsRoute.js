const Tip= require("../model/tips");
module.exports= app=>{
    app.get("/tips", (req,res)=>{
        Tip.find()
        .sort({title:1})
        .exec()
        .then(tips=>res.status(200).json(tips))
        .catch(err=>res.status(400).json({message:"Error while fetching tips", error:err}))
    });
}