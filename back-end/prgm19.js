function great (name, callback) {
    console.log(`hi ${name}`);
    callback()
}


function fsec () { // callback function
    console.log('iam the second function ');
    
}

great('ayisha', fsec) // call back function argument