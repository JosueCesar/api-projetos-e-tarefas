const express = require('express');

const server = express();
server.use(express.json());

server.get('/teste', (req, res) => {

    return res.json('api');
});

server.listen(3000);
