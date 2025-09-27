const {parentPort} = require('worker_threads')

parentPort.on("message",(val)=>{
    console.log(val)
    parentPort.postMessage({message:'from worker thread'})
    
})
