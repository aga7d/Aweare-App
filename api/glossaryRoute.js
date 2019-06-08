const Fabric = require("../model/fabric");
module.exports = router => {
  router.get("/glossary", (req, res) => {
    Fabric.find({}, "name")
      .sort({ name: 1 })
      .exec()
      .then(fabrics => res.status(200).json(fabrics))
      .catch(err =>
        res
          .status(400)
          .json({ message: "Error while fetching fabrics", error: err })
      );
  });

  router.get("/glossary/:fabricName", (req, res) => {
    Fabric.findOne({ name: req.params.fabricName }, (err, result) => {
      if (err) {
        res.status(400).json({ message: "Error finding this kind of fabric" });
      } else {
        res.status(200).json(result);
      }
    });
  });
};
