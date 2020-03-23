const { Router } = require('express');
const router = Router();

const Chat = require('../models/Chat');

router.get("/", (req, res) => {
    //Fetches all chat messages from DB
    Chat.find({}).then(chat => {
        res.json(chat);
    });
});

module.exports = router;