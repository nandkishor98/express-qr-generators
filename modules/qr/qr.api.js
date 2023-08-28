const router = require("express").Router();
const qrController = require("./qr.controller");

router.post("/", async (req, res, next) =>{
    try{
        const{ url } = req.body;
        if(!url) throw new error("Url is required");
        const qr = await qrController.createQR(url);
        res.json({ data: qr});
    }catch (e){
        next(e);
    }
});

module.exports=router;