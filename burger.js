function add(x, y) {
    return x + y;
}

function substract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

function findRemainder (x, y) {
    return x % y;
}

function takeCareOfDogs(arrayOfDogs){
    for (var i = 0; i < arrayOfDogs.length; i++){
        //start point; true condition; increment
        feedDog(arrayOfDogs[i]);
    }
}

    function feedDog(puppy){
     console.log("I am feeding " + puppy);
}

    var dogs = ["ben", "luca", "mail"]

    takeCareOfDogs(dogs);