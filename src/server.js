import http from 'node:http'

// - criar usuários
// - listar usuários
// - Edição de usuário
// - Remoção de usuário

// - HTTP
//    - métodos HTTP
//    - url

//cabecalhos (Requisição/resposta) => metadados

// HTTP Status code
const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (methos === 'GET' && url === '/users') {
        return res
        .setHeader('Content-Type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            name: 'John Doe',
            email: 'johndoe@ex.com'
        })
        return res.writeHead(201).end()
    }

    return res.write(404).end()
})

server.listen(3333)
