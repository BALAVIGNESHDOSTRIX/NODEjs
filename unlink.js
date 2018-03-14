var file = require('fs');

file.unlink('append.txt',function(err) //the function is used for deleting the exsisting file
{
    if(err)
    {
        throw err;
    }else{
        console.log('The is delected successfully');
    }
});