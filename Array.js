const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


console.log(ages);
ages.sort((a, b) => a - b )
console.log(`Sorted age is ${ages}`);
let max = ages[ages.length - 1];
console.log(`maximum = ${max}`);
let min = ages[ages.length - ages.length];
console.log(`minimum = ${min}`);
let median;
if((ages.length % 2) == 0){
    median = (ages[ages.length - (ages.length/2)] + ages[(ages.length - 1) - (ages.length/2)]) / 2; 
} else {
    median = ages[(ages.length ) - ((ages.length + 1)/2)]
}

console.log(` Median = ${median}`)

let sum = 0;
for(let i = 0; i < ages.length; i++){
    sum += ages[i];
}

let average = (sum / ages.length);
console.log(`Average age is ${average}`);

let range = (max - min);
console.log(`Range of Ages ${range} `);

console.log(Math.abs(-6))