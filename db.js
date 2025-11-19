process.on('message',(msg)=>{
    console.log(msg)
    process.send({message:'hello parent'})
})