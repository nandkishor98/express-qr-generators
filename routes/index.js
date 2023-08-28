const router = require("express").Router();

const apiRouter = require('./routes.api.js');
const uiRouter = require('./routes.ui.js');


router.use('/api/v1', apiRouter);
router.use('/', uiRouter);

module.exports=router;