const express = require('express');
const http = require('http');

const app = express();

const initSockets = require('./socket-connection');

require('./database');

app.set( 'port', process.env.PORT || 4000 );

//middlewares
app.use(require('./middlewares'));

//Routes
app.use(require('./routes'));

const server = http.createServer(app);

server.listen(app.get('port'), () => {
    console.log(`Server initialized at port: ${app.get('port')}`);
});

initSockets(server);