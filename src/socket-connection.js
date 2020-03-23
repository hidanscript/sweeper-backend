const Chat = require('./models/Chat');

const initSockets = async server => {
    
    const io = require('socket.io')(server);
    
    //This enables CORS
    io.set('origins', '*:*');

    let currentChat = await fetchChatMessages();

    io.on("connection" , socket => {
        socket.on("new message", message => {

            currentChat = currentChat.concat(message);

            socket.broadcast.emit("new message", currentChat );
            saveNewMessage(message);

        });
    });
}

const saveNewMessage = message => {
    const newMessage = new Chat({ ...message });
    newMessage.save();
}

const fetchChatMessages = async () => {
    try {
        const chatMessages = await Chat.find({});
        return chatMessages;
    } catch(exception) {
        throw new Error(exception);
    };
}

module.exports = initSockets;