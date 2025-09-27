const {exec} = require('child_process')
const { error } = require('console')
exec('git add .',(err,stdout,stderr)=>{
    if(err){
        error(err)
    }
    console.log(stdout);
    
})