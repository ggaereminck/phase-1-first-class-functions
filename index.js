function receivesAFunction(callback){
    return callback()
}


function returnsANamedFunction(){
    return function fn(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}