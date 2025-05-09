const cluster = require('cluster');
const os = require('os');
const http = require('http');


    
   
    // Listen for worker exit events
   
    // Worker processes
    http.createServer((req, res) => {
        if (req.url === '/api1') {
            console.log(`Worker ${process.pid} handling APA1`);
            let count = 0;
            const maxCount = 1e9; // Simulate heavy computation
            while (count < maxCount) count++;
            res.writeHead(200);
            res.end('First APA completed');
        } else if (req.url === '/api2') {
            console.log(`Worker ${process.pid} handling APA2`);
            res.writeHead(200);
            res.end('Hello World');
        } else if (req.url === '/api3') {
            console.log(`Worker ${process.pid} handling APA3`);
            res.writeHead(200);
            res.end('Hi World');
        } else {
            res.writeHead(404);
            res.end('Not Found');
        }
    }).listen(3000, () => {
        console.log(`Worker ${process.pid} started on port 3000`);
    });

