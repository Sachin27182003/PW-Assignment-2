// Create a simple JavaScript function named displayInfo that takes two parameters (name and role) and logs a messageG
// - Use call to invoke the displayInfo function with specific argumentsG
// - Use apply to invoke the displayInfo function with arguments passed as an arrayG
// - Create another function named greet that logs a greeting with this contextG
// - Use bind to create a new function boundGreet with a specific context and log the greeting.


// Define the displayInfo function
function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
}

displayInfo.call(Rohan, 'Rohan', 'Motivator');

displayInfo.apply(Sachin, ['Sachin', 'Developer']);

function greet() {
    console.log(`Hello, I'm ${this.name}, and I'm a ${this.role}.`);
}

const person = {
    name: 'Ritesh',
    role: 'Backend Devloper'
};

const boundGreet = greet.bind(person);

boundGreet();



