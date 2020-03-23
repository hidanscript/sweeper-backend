const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chatSchema = new Schema({
    user_id: {
        type: Number,
    },
    username: {
        type: String
    },
    content: {
        type: String
    }
},
{
    timestamps: true
});

let  Chat  =  mongoose.model("Chat", chatSchema);
module.exports  =  Chat;