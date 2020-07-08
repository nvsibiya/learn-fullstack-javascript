import http from 'http';

const server = http.createServer(); //create server


server.on('request', (req, res) => {
    res.write('Hello HTTP!\n'); //writable string that you can use to send data to the user
    setTimeout(() => {
        res.write('I can stream!\n'); 
        res.end();
    }, 3000) //set a time for the server to wait before showing message on line 9 (3 secs)
});

server.listen(8080); //run it on port number

