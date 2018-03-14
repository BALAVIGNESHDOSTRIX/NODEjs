var file = require('fs');

file.writeFile('write.txt','Hello Julisbala your vishnumaya is get angry on you ',function(err) //for writing the content on your sepcified file.
{
    if(err)
    {
        throw err;
    }else{
        console.log("The meassage is updated");
        
    }
}
);