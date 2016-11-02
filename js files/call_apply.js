var person1 = {name: 'Marvin', age: 42, size: '2xM'};
var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

var sayHello = function(){
    console.log('Hello, ' + this.name);
};

var sayGoodbye = function(){
    console.log('Goodbye, ' + this.name);
};

// both gives undefined
sayHello();
sayGoodbye();

sayHello.call(person1);
sayHello.call(person2);

sayGoodbye.call(person1);
sayGoodbye.apply(person2);

