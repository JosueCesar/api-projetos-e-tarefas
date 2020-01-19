const express = require('express');

const server = express();
server.use(express.json());

server.post('/projects', (req, res) => {
    
});

server.listen(3000);
