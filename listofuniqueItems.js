// You are developing a program to manage a list of unique items. Write a JavaScript program that uses a
// Set to store a collection of unique numbers. Use the Map object to associate each number with its square.
// Finally, print both the unique numbers and their corresponding squares.

const uniqueNumbers = new Set([1, 2, 3, 4, 5, 2, 3]);

const squaresMap = new Map();

uniqueNumbers.forEach(number => {
    squaresMap.set(number, number * number);
});

uniqueNumbers.forEach(number => {
    console.log(`Number: ${number}, Square: ${squaresMap.get(number)}`);
});
