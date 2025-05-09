const cluster = require('cluster');
const os = require('os');
const http = require('http');

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    console.log(`Master process running. Forking ${numCPUs} workers...`);

    // Fork workers for each core
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Listen for worker exit events
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} exited. Code: ${code}, Signal: ${signal}`);
        console.log('Starting a new worker...');
        cluster.fork(); // Replace the exited worker
    });
} else {
    // Worker processes
    http.createServer((req, res) => {
        if (req.url === '/api1') {
            console.log(`Worker ${process.pid} handling APA1`);
            let count = 0;
            const maxCount = 1e10; // Simulate heavy computation
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
}
