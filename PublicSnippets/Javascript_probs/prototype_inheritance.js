let pet={
    eats: true
};
let dog={
    jumps: true
};

dog.__proto__ = pet;
//we can find both properties in dog now
alert(dog.eats);//true
alert(dog.jumps);//true