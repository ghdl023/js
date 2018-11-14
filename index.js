function sayHello(name, age) {
  return `Hello, ${name} you are ${age} years old`;
}

const greetGwee = sayHello("Gwee", 26);

console.log(greetGwee);

const calculator = {
  add: function(a, b) {
    return a + b;
  }
};

const plus = calculator.add(3, 5);
console.log(plus);
