const express = require('express');
const { project } = require('./utils/project');

const server = express();
server.use(express.json());

// array no qual os projetos serão armazenados em tempo de execução
let projects = [];

// cadastra projetos
server.post('/projects', (req, res) => {
    // recebe id e title by body e salva em um array
    const { id, title } = req.body;

    projects.push(project(id, title));
    return res.status(200).send();
});

// lista todos os projetos e tarefas
server.get('/projects', (req, res) => {
    return res.json(projects);
});

server.put('/projects/:id', (req, res) => {
    // rota deve altearar o titulo de um projeto com o id correspondente
});

server.delete('/projects/:id', (req, res) => {
    // rota deleta um projeto com o id correspondente
});

server.post('/projects/:id/tasks', (req, res) => {
    // rota recebe um campo title,
    // armazena no array de tarefas de um projeto
    // correspondente ao id recebido
});

server.listen(3000);
