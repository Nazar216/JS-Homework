// const clients = ["Mango", "Poly", "Ajax"];
// console.table(clients);
// const last = clients.length - 1
// console.log(last);

// const clients = ["Mango", "Poly", "Ajax"];
// clients[1] = 'vbdfb'
// console.log(clients);

// const clients = ["Mango", "Poly"];
// clients[0] = 'koka'
// console.log(clients.length)

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//     console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//     console.log(character);
// }


// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = "Клиент с таким именем есть в базе данных!";
//         break;
//     }
//     message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message);


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }

//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }


// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(20); // 5


// const name = "Mango";
// console.log(name.split(""));

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]


// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);


// console.log(`${fruit} is a red fruit!`);


// const numbers = [];

// numbers.push(5);
// console.log(numbers);


// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers);


// const cart = [10, 12, 26]
// let total = 0
// for (let i = 0; i < cart.length; i += 1){
//     console.log(cart[i]);
//     total += cart[i]
// }
// console.log(total)

// АБО

// const cart = [10, 12, 26]
// let total = 0
// for (const value of cart) {
//     total += value
// }
// console.log(total)



// ЗАДАЧА 1

// function checkAge(age) {
//     let message;

//     if (age >= 18) {
//         message = "Вы совершеннолетний человек";
//     } else {
//         message = "Вы не совершеннолетний человек";
//     }

//     return message;
// }

// console.log(checkAge(5));

// function checkAge(age) {
//     if (age >= 18) {
//         return "You are an adult";
//     }

//     return "You are a minor";
// }

// console.log(checkAge(50));


// ЗАДАЧА 2

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";


//     if (password === ADMIN_PASSWORD) {
//         return "Welcome!";
//     }
//     return "Access denied, wrong password!";

// }

// console.log(checkPassword("tmnr"))


// ЗАДАЧА 3

// function checkStorage(available, ordered) {

//     if (ordered === 0) {
//         return "Your order is empty!";
//     }
//     if (ordered > available) {
//         return "Your order is too large, not enough goods in stock!";
//     }
//     return "The order is accepted, our manager will contact you";

// }

// console.log(checkStorage(70, 0))


// ЗАДАЧА 4

// const fruits = ['apple', 'plum', 'pear', 'orange']

// console.log(fruits);

// ЗАДАЧА 5

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0]
// const secondElement = fruits[1]
// const lastElement = fruits[3]

// console.log(firstElement)

// ЗАДАЧА 6

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = 'peach'
// fruits[3] = "banana"
// console.log(fruits)


// ЗАДАЧА 7

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length

// console.log(fruitsArrayLength);


// ЗАДАЧА 8

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1
// const lastElement = fruits[fruits.length - 1]

// console.log(lastElementIndex)
// console.log(lastElement)

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1
// const lastElement = fruits[lastElementIndex]

// console.log(lastElement)


// ЗАДАЧА 9

// function getExtremeElements(array) {
//     const element = [array[0, array.length - 1]]
//     return element

// }

// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));



// function getExtremeElements(array) {
//     const firstElement = array[0]
//     const lastElement = array[array.length - 1]
//     return [firstElement, lastElement]
// }

// console.log(getExtremeElements(["Earth", "Mars", "Venus", 'fjbdnbujfd']));


// ЗАДАЧА 10


// function splitMessage(message, delimeter) {
//     let words = message.split(delimeter);
//     // console.log(message);
//     return words;
// }

// console.log(splitMessage("Mango hurries to the train fdbbdb", ""))



// ЗАДАЧА 11

// function calculateEngravingPrice(message, pricePerWord) {
//     let total = message.split(" ").length * pricePerWord

//     return total

// }

// console.log(calculateEngravingPrice('vdvfdvd fdbfdbd fbdbdfb', "10"));

// ЗАДАЧА 12

// function makeStringFromArray(array, delimeter) {
//     let string = array.join(delimeter)

//     return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));


// ЗАДАЧА 13

// function slugify(title) {
//     let slug = title.toUpperCase().split(" ").join("-")
//     return slug
// }

// console.log(slugify("Arrays for begginers"));


// ЗАДАЧА 14

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);


// ЗАДАЧА 15

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);


// ЗАДАЧА 16

// function makeArray(firstArray, secondArray, maxLength) {
//     return newArray = firstArray.concat(secondArray).slice(0, maxLength);

// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))


// ЗАДАЧА 17

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//     console.log(client);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i]);

// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// const start = 3;
// const end = 7;

// for (let i = 3; i <= 7; i += 1) {
//   console.log(i);
// }


// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//     console.log(i);
// }


// ЗАДАЧА 18

// function calculateTotal(number) {
//     let total = 0;

//     for (let i = 0; i <= number; i ++) {
//         total += i
//     }

//     return total
// }

// console.log(calculateTotal(63))


// ЗАДАЧА 19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//     const fruit = fruits[i];
//     console.log(fruit);
// }


// ЗАДАЧА 20

// function calculateTotalPrice(order) {
//     let total = 0;

//     for (let i = 0; i < order.length; i += 1){
//         total += order[i];
//     }

//     return total;
// }

// console.log(calculateTotalPrice([5, 5, 5, 5, 5]));


// ЗАДАЧА 21


// function findLongestWord(string) {

//     let arrayFromString = string.split(" ")
//     // console.log(arrayFromString);
//     let longestString = arrayFromString[0]

//     for (let i = 0; i < arrayFromString.length; i += 1){

//         let words = arrayFromString[i];
//         console.log(words);


//         // console.log(smallestString)
//         if (arrayFromString[i].length > longestString.length) {
//             longestString = arrayFromString[i];

//         }
//         console.log(longestString)
//         // console.log(arrayFromString)
//     }

//     return longestString
// }

// console.log('Це', findLongestWord("The quick brown fox jumped over the lazy dog"))


// function findSmallestWord(string) {

//     let arrayFromString = string.split(' ')
//     // console.log(string)
//     let smallestWord = arrayFromString[0]
//     // console.log(smallestWord)

//     for (const word of arrayFromString) {
//         console.log(word)

//         if (smallestWord.length > word.length) {
//             smallestWord = word
//         }
//     }

//     return smallestWord
// }


// console.log("Найменше це", findSmallestWord("Google do a roll"));


// // ЗАДАЧА 22

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // console.log(numbers)
//     // numbers.push(min, max)

//     for (let i = min; i <= max; i += 1){
//         numbers.push(i)
//     }

//     // console.log(numbers)
//     return numbers;
// }

// console.log(createArrayOfNumbers(11, 16));


// ЗАДАЧА 23


// function filterArray(numbers, value) {
//     const newArray = [];

//     for (const number of numbers) {

//         console.log(number)

//         if (value < number) {
//             newArray.push(number);
//             console.log(number)
//         }
//     }

//     return newArray
// }

// console.log(filterArray([1, 2, 62, 4, 5], 4))



// function filterArray(numbers, value) {
//     const newArray = []

//     for (let i = 0; i < numbers.length; i += 1) {
//         console.log(numbers[i])

//         if (value < numbers[i]) {
//             newArray.push(numbers[i])
//         }
//     }

//     return newArray
// }

// console.log(filterArray([12, 24, 8, 41, 76], 38))


// ЗАДАЧА 24


// function checkFruit(fruit) {
//     const fruits = ["apple", 'kaki', "plum", "pear", "orange"];

//     return fruits.includes(fruit);
// }

// console.log(checkFruit('apple', 'kaki'))


// ЗАДАЧА 25

// function getCommonElements(array1, array2) {
//     const newArray = []

//     for (const number of array1) {
//         console.log(number)

//         if (array2.includes(number)) {
//             newArray.push(number)
//         }
//     }

//     return newArray

// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));


// ЗАДАЧА 26

// function calculateTotalPrice(order) {
//     let total = 0;


//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }


//     return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));


// function calculateTotalPrice(order) {
//     let total = 0;

//     for (const number of order) {
//         console.log(number)

//         total += number
//     }

//     return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));



// ЗАДАЧА 28

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(d);


// ЗАДАЧА 29

// function getEvenNumbers(start, end) {
//     const newArray = []

//     for (let i = start; i <= end; i += 1){
//         // console.log(i)
//         // console.log(newArray)

//         if (i % 2 === 0) {
//             newArray.push(i)
//         }

//     }

//     return newArray
// }

// console.log(getEvenNumbers(3, 11))


// ЗАДАЧА 30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//     if (i % 5 === 0) {
//         number = i;
//         console.log(i);
//         break

//     }
// }



// ЗАДАЧА 31

// function findNumber(start, end, divisor) {

//     // let number;

//     for (let i = start; i < end; i += 1) {
//         if (i % divisor === 0) {
//             // number = i;
//             return i;
//         }
//     }

//     // return number;

// }

// console.log(findNumber(2, 6, 5));



// ЗАДАЧА 32

// function includes(array, value) {

//     // const newArray = []

//     for (let i = 0; i < array.length; i += 1){

//         console.log(array[i])

//         if (value === array[i]) {
//             return true
//         }
//     }

//     return false

// }

// console.log(includes([1, 2, 3, 4, 5], 6))


// function includes(array, value) {

//     // const newArray = []

//     for (numbers of array){

//         console.log(numbers)

//         if (value === numbers) {
//             return true
//         }
//     }

//     return false

// }

// console.log(includes([1, 2, 3, 4, 5], 6))


// function multiply(a, b) {
//    return a * b
    
// }

// console.log(multiply(1, 2));






