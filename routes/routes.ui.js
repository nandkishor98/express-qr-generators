const router = require("express").Router();

router.get("/", (req, res, next) => {
    try{
        res.render("index", {homepage: "QR Code Generator"});
    } catch (e) {
      next (e);  
    }
});


module.exports=router;