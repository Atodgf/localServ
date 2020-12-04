const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const users = ['Дима', 'Руслан', 'Катя', 'Сергей']


const server = http.createServer((req, res) => {
    if (req.method == 'GET') {
        res.end(JSON.stringify(users))
    } else if ((req.method == 'POST')) {
        let body = ''
        req.on('data', (chunk => {
            body += chunk.toString()
        }))
        req.on('end', () => {
            users.push(body)
            res.end(JSON.stringify(users))
        })
    } else if ((req.method == 'PUT')) {
        let body = ''
        req.on('data', (chunk => {
            body += chunk.toString()
        }))
        req.on('end', () => {
            users.splice(0, users.length, body)
            res.end(JSON.stringify(users))
        })
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});