const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method
    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>')
        res.write('<head><title>My First NodeJs</title></head>')
        res.write(`<body><form action="/message" method="post"><input type="text" name="email"></input><input type="submit" value="send"></input></body>`)
        res.write('</html>')
        return res.end();

    }
    if (url === '/message' && method == 'POST') {

        const body = [];
        req.on('data', (chunck) => {
            body.push(chunck)
            console.log(chunck);
        })
        return req.on('end', () => {
            console.log('End event received');
            const parsedBody = Buffer.concat(body).toString();
            const email = parsedBody.split('=');
            fs.writeFile('hello.txt', email[1], (err) => {
                console.log('File write completed');
                res.setHeader('Location', '/');
                res.statusCode = 302;
                return res.end();
            })
        })
    }

    res.setHeader('Content-type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First NodeJs</title></head>')
    res.write('<body><h1>Hello Everyone This is response from server</body>')
    res.write('</html>')
    res.end();
})

server.listen(3000);