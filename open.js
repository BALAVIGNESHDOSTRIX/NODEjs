var file = require('fs'); //importing the filesystem module for file operation 

file.open('append.txt','w',function(err,file) //Open method is used to create a new file 
{
    if(err)
    {
        throw err;
    }

    console.log("created");  //verification purpose
});


