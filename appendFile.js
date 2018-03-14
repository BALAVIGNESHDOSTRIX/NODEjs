var file = require('fs');

file.appendFile('append.txt', 'Hello Balavignesh this is from Infidos ',function(err) //append the content into required file
{
    if(err)
    {
        throw err;
    }

    console.log("saved the message"); // verification
});