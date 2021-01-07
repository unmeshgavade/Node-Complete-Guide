const http = require('http');

const routes = require('./routes-ass')

const server = http.createServer(routes.handler)

server.listen(3000)