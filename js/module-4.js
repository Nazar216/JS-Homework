// function greet(name) {
//     return `Добро пожаловать ${name}.`;
// }

// console.log(greet("Манго"));

// console.log(greet);

// function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
// }


// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }

// registerGuest("Манго", greet);


// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//     console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });


// function processCall(recipient) {
//     // Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//         console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//         // Логика активации автоответчика
//     } else {
//         console.log(`Соединяем с ${recipient}, ожидайте...`);
//         // Логика принятия звонка
//     }
// }

// processCall("Манго");

// function repeatLog(n) {
//     for (let i = 0; i < n; i += 1) {
//         console.log(i);
//     }
// }

// repeatLog(5);


// const numbers = [5, 10, 15, 20, 25];

// // // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //     console.log(`Индекс ${i}, значение ${numbers[i]}`);
// // }

// numbers.forEach(function (number, index) {
//     console.log(`Индекс ${index}, значение ${number}`);
// });


// Обычное объявление функции
// function classicAdd(a, b, c) {
//     return a + b + c;
// }

// Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//     return a + b + c;
// };

// console.log(arrowAdd(1,2,3));


// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//     console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);


// Задача 1

// function makePizza() {
//     return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result = makePizza();
// const pointer = makePizza;

// console.log(pointer);



// function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
// }

// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }

// registerGuest('Манго', greet);


// Задача 2

// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// function deliverPizza(pizzaName) {
//     return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//     return `Пицца ${pizzaName} готовится, ожидайте...`;
// }


// console.log(makeMessage('Ультрасыр', deliverPizza));

// console.log(makeMessage('Ультрасыр', makePizza));


// Задача 3

// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
// });


// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//     console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });


// function makePizza(pizzaName, callback) {
//     console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//     callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//     console.log(`Доставляем пиццу ${pizzaName}.`);
// });


// makePizza('Ультрасыр', function eatPizza(pizzaName) {
//     console.log(`Едим пиццу ${pizzaName}`)
// });




// Задача 4

// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Имитируем доступеность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;

//     // console.log(isRecipientAvailable)
//     if (!isRecipientAvailable) {

//         onNotAvailable(recipient);
//         return;
//     }
//     onAvailable(recipient);
// }

// function takeCall(name) {
//     console.log(`Соединяем с ${name}, ожидайте...`);
//     // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//     // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);





// const pizzaPalace = {
//     pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],

//     order(pizzaName, onSuccess, onError) {
//         if (!this.pizzas.includes(pizzaName)) {

//             return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`)

//         }

//         return onSuccess(pizzaName);
//     },
// };

// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//     return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//     return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// pizzaPalace.order('Венская', makePizza, onOrderError);



// Задача 5

// const pizzaPalace = {
//     pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     // Пиши код ниже этой строки
//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },

//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);

//         console.log(this.checkPizza(pizzaName))

//         if (!isPizzaAvailable) {
//             return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//         }

//         return `Заказ принят, готовим пиццу «${pizzaName}».`;
//     },
//     // Пиши код выше этой строки
// };

// console.log(pizzaPalace.order('Аль Копчино'))
// console.log(pizzaPalace.order('Биг майк'))


// const bookShelf = {
//     authors: ['Бернард Корнуэлл', 'Роберт Шекли'],
//     getAuthors() {
//         return this.authors;
//     },
//     addAuthor(authorName) {
//         this.authors.push(authorName);
//     },
// };

// console.log(bookShelf.getAuthors());
// bookShelf.addAuthor('Ли Танит');
// console.log(bookShelf.getAuthors());



// Задача 6

// const customer = {
//     username: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['Burger', 'Pizza', 'Salad'],
//     // Пиши код ниже этой строки
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
//     // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']



// Задача 7


// function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);
// }

// const mango = { username: "Манго" };

// greetGuest.call(mango, "Добро пожаловать");





// const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {

//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// }

// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {
//     // console.log(orders[i])

//     // console.log(composeMessage.call(orders[i], i+1))

//     messages.push(composeMessage.call(orders[i], i + 1))

// }

// console.log(messages)






// const orders =
//     { email: 'solomon@topmail.ua', dish: 'Burger' }
//     ;

// function composeMessage(position) {


//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// }


// console.log(composeMessage.call(orders, 1))


// Задача 8

// const orders = [
//     { email: "solomon@topmail.ua", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "jacob@mail.com", dish: "Taco" },
// ];

// function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//     const msg = composeMessage.apply(orders[i], [i + 1]);
//     messages.push(msg);
// }

// console.log(messages)


// Задача 9


// const pizzaPalace = {
//     company: 'Pizza Palace',
// };

// const burgerShack = {
//     company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//     return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');


// console.log(pizzaPalaceMessage)


// Задача 10


// const service = {
//     mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//     subscribe(email) {
//         this.mailingList.push(email);
//         return `Почта ${email} добавлена в рассылку.`;
//     },
//     unsubscribe(email) {
//         this.mailingList = this.mailingList.filter((e) => e !== email);
//         return `Почта ${email} удалена из рассылки.`;
//     },
// };

// function logAndInvokeAction(email, action) {
//     console.log(`Выполняем действие с ${email}.`);
//     return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']





















// function doublePower(currentPowers) {
//     const newArray = []

//     for (i = 0; i < currentPowers.length; i++){
//         newArray.push(i)
//     }
//     return newArray
// }


// console.log(doublePower([100, 150, 200, 220])); // [200, 300, 400, 440]




// function getDifference(numbers) {

//     let maxNumber = numbers[0];
//     let minNumber = numbers[0];


//     for (let i = 0; i < numbers.length; i++){
//         console.log(numbers[i]);

//         if (numbers[i] > maxNumber) {
//             maxNumber = numbers[i]
//         }

//         if (numbers[i] < minNumber) {
//             minNumber = numbers[i]
//         }

//     }

//     console.log('max', maxNumber)
//     console.log('min', minNumber)

//     return maxNumber - minNumber
// }


// console.log('Kaki', getDifference([42, 45, 1, 78, 92, 10]))



// function getTipsRating(amount) {
//     if (amount === 0) {
//         return 'terrible'
//     } else if (1 <= amount && amount <= 10) {
//         return 'poor'
//     } else if (11 <= amount && amount <= 20) {
//         return 'good'
//     } else if (21 <= amount && amount <= 50) {
//         return 'great'
//     } else{
//         return 'excellent'
//     }
// }

// console.log(getTipsRating(0))





// function calculateTaxes(income) {
//     if (income <= 1000) {
//         return income * 0.02
//     } else if (1001 <= income && income <= 10000) {
//         return income * 0.03
//     } else {
//         return income * 0.05
//     }
// }

// console.log(calculateTaxes(18000))

// function getLargestExpressionResultOfTwo(a, b) {
//     let kaki = a - b
//     let result = a + b
//     // console.log(result)
//     if (kaki > result) {
//         result = kaki
//     }

//     return result
// }

// console.log(getLargestExpressionResultOfTwo(5, -10))

// console.log(getLargestExpressionResultOfTwo(5, 20))




// function getLargestExpressionResultOfThree(a, b) {
//     // write code here
//     const addition = a + b;
//     const subtraction = a - b;
//     const multiply = a * b
//     if (addition > subtraction && addition > multiply) {
//         return addition
//     }

//     if (subtraction > addition && subtraction > multiply) {
//         return subtraction
//     }

//     return multiply;


// }


// function printNumbersWithStep(N, step) {
//     for (let i = 1; i <= N; i += step) {
//         console.log(i);
//     }
// }

// console.log(printNumbersWithStep(7, 3))


// function printNumbersBackwards(N) {
//     for (let i = N; i >= N; i--){
//         console.log(i)
//     }
// }

// console.log(printNumbersBackwards(5))


// function getDrinks(numberOfGuests) {
//     let total = 0;
//     for (let i = 1; i <= numberOfGuests; i++) {
//         console.log(i)
//         total += i
//     }

//     return total
// }

// console.log(getDrinks(5))


// function printNumbersBackwards(N) {
//     for (let i = N; i >= 1; i--) {
//         console.log(i);
//     }
// }


// function getDrinksWithStep(numberOfGuests, step) {
//     let total = 0;
//     for (let i = 0; i <= numberOfGuests; i += step){
//         console.log(i)
//         total += i
//     }
//     return total
// }

// console.log(getDrinksWithStep(2, 1))



// function calculateProfit(amount, percent, period) {
//     let total = amount
//     for (let i = 0; i < period; i++){
//         // console.log(i)
//         total = total + total * percent / 100
//     }
//     return total - amount
// }

// console.log(calculateProfit(1000, 5, 1))



// function isSubstring(phrase, part) {
//     if (phrase.includes(part)) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isSubstring('string', ''))


// function countMs(text) {
//     let count = 0
    
//     for (const letter of text) {
//         console.log(letter)
        
//         if (letter === 'm' || letter === 'M') {
//             count += 1
            
//         }
//     }

//     return count
// }

// console.log(countMs('Malimann'))



// function removeVowels(doc) {
//     let result = '';
//     let vowels = 'aeiouy';

//     for (const letter of doc) {
//         // console.log(letter)
//         if (!vowels.includes(letter.toLowerCase())) {
//             // console.log(letter)
//             result += letter;
//         }
//     }

//     return result
// }
// // console.log('D' === 'D')
// console.log(removeVowels('dOcUment'))



// function makeAbbr(words) {
//     let abbreviation = words[0]

//     for (let i = 0; i <= words.length; i++){
//         console.log(words[i])
//         if (' ' === words[i]) {
//             abbreviation += words[i+1]
//         }
//     }

//     return abbreviation.toUpperCase()
// }

// console.log(makeAbbr('national aeronautics space administration'))


// function createArray(N) {
//     const numbers = []

//     for (let i = 1; i <= N; i++){
        
//         numbers.push(i)
//         // console.log(i)

//     }

//     return numbers
// }


// console.log(createArray(3))


// function decryptMessage(message) {
//     for (let i = message.length; i < message.length - 1; i++){
//         console.log(message[i])
//     }
// }


// console.log(decryptMessage('!!!reeb gniknird ekil eW'))



// function decryptMessage(message) {
//     let result = ''
    
//     for (let i = message.length - 1; i >= 0; i--) {
//         console.log(message[i])
//         result += message[i]
//     }

//     return result
// }

// console.log(decryptMessage('!!!reeb gniknird ekil eW'))


// function decryptMessage(message) {
//     let result = ''
    
//     for (const letter of message) {
//         // console.log(letter)
//         result = letter + result
//         console.log(result)
//     }

//     return result
// }

// console.log(decryptMessage('Nazar'))


// function isWerewolf(target) {

//     let direct = ''
//     let reversed = ''
//     let symbolsToDelete = '? .,!'
    
//     // console.log(symbolsToDelete.includes(';'))

//     for (const letter of target.toLowerCase()) {
//         // console.log(letter)
        
//         if (!symbolsToDelete.includes(letter)) {
//             direct = direct + letter
//             reversed = letter + reversed
            
//         }
        
//     }

//     console.log(reversed)

//     return direct === reversed
    
// }

// console.log(isWerewolf('ror.'))



// function makeStickers(detailsCount, robotPart) {

//     let result = []

//     for (let i = 1; i <= detailsCount; i++){
//         result.push(`${robotPart} detail #${i}`)
//     }

//     return result
// }


// console.log(makeStickers(3, 'Body'));


// function doublePower(currentPowers) {
//     let result = []

//     for (let i = 0; i < currentPowers.length; i++){
//         console.log(currentPowers[i])

//         result.push(currentPowers[i]*2)

//     }

//     return result
// }

// console.log(doublePower([100, 150, 200, 220]))


// function isSorted(boxNumbers) {
//     for (let i = 1; i < boxNumbers.length; i++){
//         console.log(boxNumbers[i])
        

//         if (boxNumbers[1] > boxNumbers[0]) {
            
//         }
        
//     }

//     return
// }

// console.log(isSorted([1, 2, 3, 4, 5]));




// const num = [1, 2, 3]

// num.map(function (num){
//     console.log(num)
//     return num * 2
// })

// console.log(num)


// console.log('a' < 'b');