const Score = require("../model/scores");

module.exports = router => {
    router.get("/scores", (req,res)=>{
        Score.find()
        .exec()
        .then(scores=> res.status(200).json(scores))
        .catch(err=> res.status(400).json({message:"error while fetching scores", error:err}))
    })
}