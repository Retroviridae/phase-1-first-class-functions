function receivesAFunction(spy){
    return spy
    // console.log(callBack)
}
spy = function () {return spy}


function returnsANamedFunction(){
    return function (){}
}

console.log(returnsANamedFunction(receivesAFunction));





console.log(receivesAFunction());
