const router = require("express").Router();
const mailService = require("../../services/mailer");

router.post("/",async (req, res, next) => {
    try {
        // Add your mailer services
    const { message, to, subject } = req.body;
     const payload = {
        from: "nandyadav720@gmail.com",
        to: to,
        message,
        subject, 
    };
    const mailResponse = await mailService.sendEmail(payload);
    res.json({ data: mailResponse });
    } catch (e) {
        next(e);
    }
});

module.exports=router;