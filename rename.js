var file = require('fs');

file.rename('append.txt','appendFile.txt',function(err) //file rename function 
{
    if(err)
    {
        throw err;
    }else{
        console.log(" The file was renamed successfully ");
    }
});