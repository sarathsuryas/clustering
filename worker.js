const {parentPort} = require('worker_threads')


parentPort.on('message',(value)=>{
    const sum = value.reduce()
})