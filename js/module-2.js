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

