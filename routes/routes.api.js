const router = require("express").Router();

const mailRouter = require("../modules/mail/mail.api");
const qrRouter = require("../modules/qr/qr.api");


router.use("/qr", qrRouter);
router.use("/mail", mailRouter);

module.exports=router;