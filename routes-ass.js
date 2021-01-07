
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My Assignment</title></head>');
        res.write('<body><h1>Feels good to be back at challenging myself</h1><form action="/create-user" method="POST"><input type="text" name="users"><button>Submit</button></form></body>');
        res.write('</html>');
        return res.end()
    }

    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My Assignment</title></head>');
        res.write('<body><ul><li>User1</l1></ul><ul><li>User2</l1></ul><ul><li>User3</l1></ul></body>');
        res.write('</html>');
        return res.end()
    }

    if(url === '/create-user' && method == 'POST'){
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            console.log(message)
            res.end()
        })
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Assignment</title></head>');
    res.write('<body><h3>Page not found</h3></body>');
    res.write('</html>');
    res.end()

    
}


exports.handler = requestHandler