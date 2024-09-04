// - Create an object named calculator with methods add, subtract, and multiply.
// - Implement the calculate method in the calculator object, which takes an operation ('add', 'subtract', or 'multiply') and two numbers.
// - Use call to perform an addition operation using the calculate method.
// - Use apply to perform a multiplication operation using the calculate method with arguments as an array.
// - Create another object named discountCalculator with a discount percentage property and a method applyDiscount.
// - Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and can be reused.

// Create the calculator object with methods add, subtract, and multiply
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    
    // Implement the calculate method
    calculate(operation, a, b) {
        return this[operation](a, b);
    }
};

const resultAdd = calculator.calculate.call(calculator, 'add', 5, 3);
console.log(`Addition result: ${resultAdd}`); 

const resultMultiply = calculator.calculate.apply(calculator, ['multiply', 4, 7]);
console.log(`Multiplication result: ${resultMultiply}`); 

const discountCalculator = {
    discountPercentage: 10,
    
    applyDiscount(amount) {
        const discount = (this.discountPercentage / 100) * amount;
        return amount - discount;
    }
};

const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);


const originalPrice = 100;
const discountedPrice = calculateDiscount(originalPrice);
console.log(`Original Price: $${originalPrice}, Discounted Price: $${discountedPrice}`); 

