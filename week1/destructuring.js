const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//I predict it will print Tesla and then Mercedes
console.log(randomCar)
console.log(otherRandomCar)

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//I predict it will throw a syntax error due to name not being properly specified.
console.log(name);
console.log(otherName);

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//I predict it will print 12345 and then undefined.
console.log(password);
console.log(hashedPassword);

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//I predict a syntax error because of the double equal signs in the console logs.
console.log(first == second);
console.log(first == third);
// Wow I was so wrong.

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//I predict it will print value, [1, 5, 1, 8, 3, 3], 1, and then 5.
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);