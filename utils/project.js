// retorna uma estrutura de projeto
const project = (id, title) => {
    return {
        id: id,
        title: title,
        tasks: [],
    }
}

exports.project = project;