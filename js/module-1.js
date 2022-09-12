// VARS
// const aaa = 'jjj';
// console.log(aaa);
// const sss = 'd';
// console.log(sss);

// const productName = 'Droid';
// const pricePerItem = 2000;

// const type = typeof 'adad';
// console.log(type);

// alert('dccdcd');
// console.log(4);

// let pricePerItem = 2000;
// pricePerItem = 3500;
// console.log(pricePerItem);
// let productName = 'Droid';
// productName = 'Repair droid';
// console.log(productName);

// INPUT
// const shouldRenew = confirm('Хочеш масла?');
// console.log(shouldRenew);

// let quantity = prompt('Кіко?');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// const topSpeed = 160;
// console.log(topSpeed);
// const distance = 617.54;
// console.log(distance);
// const login = 'mango935';
// console.log(login);
// const isOnline = true;
// console.log(isOnline);
// const isAdmin = false;
// console.log(isAdmin);


// Numbers

// let salary = 1600.81925992;
// salary = Number(salary.toFixed(3));
// console.log(salary);

// console.log(Number(5/5));

// console.log(2**3);

// let base = prompt('Дай сало');
// base = Number(base);
// console.log(base);

// let power = prompt('дай степень');
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);

// console.log(Math.random());

// const max = 50;
// const min = 30;
// const result = Math.round((Math.random() * (max - min) + min));
// console.log(result);

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// Strings

// const message = 'fdjnbfdikmobmg';
// console.log(message.length);

// console.log(`unfbifmbigfmgmbfbim ${5+5}`);

// const productName = 'Droid';
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// comparison-operators

// console.log(6!=7);

// logical-operator

// console.log(5 && 7 && true);
// console.log(false || 7 || true || false);
// console.log(!true);
// console.log("" && "Mango");




// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// console.log(courseTopic.length);
// const firstElement = courseTopic[0];
// console.log(firstElement);
// const lastElement = courseTopic[courseTopicLength - 1];
// console.log(lastElement);



// FUNCTION з задачі 7
// function multiply() {
//     console.log("multiply function invocation");
// }

// multiply();

// function sayHi() {
//     console.log("Hello, this is my first function!")
// }

// sayHi();

// function multiply(x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
// }

// multiply(2, 3, 5);

// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function multiply(x, y, z) {
//     console.log("Код до return выполняется как обычно");

//     // Возвращаем результат выражения умножения
//     return x * y * z;
// }

// // Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// function add(a, b, c) {
//     return a + b + c;
// }

// add(1, 2, 3);

// result = add(15, 27, 10);
// console.log(result);
// result = add(10, 20, 30);
// console.log(result);
// result = add(5, 10, 15);
// console.log(result);

// function makeMessage (name, price) {

//    const message = "You picked ${`name`}, price per item is ${`price`} credits";
//    return message;
// };

// makeMessage('Radar', 6150);
// console.log(makeMessage);


// function isAdult(age) {
//     // Change code below this line
//     const passed = isAdult >= 18;
//     // Change code above this line
//     return passed;
// }

// age(20);


// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a,b,c,d);


// function add(a, b, c) {

//     return a + b + c
// }

// // add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));


// function makeMessage(name, price) {
//     const message = `You picked ${name}, price per item is credits`;
//     console.log(message);
//     return message;
// };

// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     const totalPrice = orderedQuantity * pricePerItem;

//     return totalPrice;
// };

// console.log(calculateTotalPrice(5,100));


// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//     const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`

//     return message;
    
// }

// console.log(makeOrderMessage(2, 100, 50));


// function isAdult(age) {
//     const passed = 18 >= age;

//     return passed;
// }

// console.log(isAdult(8));


// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = SAVED_PASSWORD === password;

//     // Change code above this line
//     return isMatch;
// }

// console.log(isValidPassword(550));


// function checkAge(age) {
//     let message = "";

//     if (age >= 18) {
        
//         message = 'You are a adult';
//     }
//     else {
//         message = 'You are a minor';
//     }
    
//     return message;
// }

// console.log(checkAge(2));


// function checkStorage(available, ordered) {
//     let message;
    
//     if (available < ordered) {
//         message = "Not enough goods in stock!"
//     }
//     else {
//         message = "Order is processed, our manager will contact you."
       
//     }

//     return message;
// }

// console.log(checkStorage(10, 1));



// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
    
//     const totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//         message = "Insufficient funds!"
//     }
//     else {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//     }

//     return message;
// }

// console.log(makeTransaction(500, 10, 8000));


// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;

//     if (password === null) { // Change this line
//         message = 'Canceled by user!';
//     } else if (password === "jqueryismyjam") { // Change this line
//         message = 'Welcome!';
//     } else {
//         message = 'Access denied, wrong password!';
//     }

//     return message;
// }

// console.log(checkPassword(null));



// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//     if (ordered === 0) {
//         message = "There are no products in the order!"
//     } else if (ordered > available) {
//         message = "Your order is too large, there are not enough items in stock!"
//     } else {
//         message = "The order is accepted, our manager will contact you"
//     }
//     return message;
// }

// console.log(checkStorage(7, 5));

// function isNumberInRange(start, end, number) {
//     const isInRange = number > start && number <= end;

//     return isInRange;
// }

// console.log(isNumberInRange(1,3,3));



// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === "pro" || subType === "vip";

//     return canAccessContent;
// }

// console.log(checkIfCanAccessContent('vip'));

// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange;

//     return isNotInRange;
// }

// console.log(isNumberNotInRange(10,30,17));



// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;

//     if (totalSpent < 5000) {
//         discount = BASE_DISCOUNT
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT
//     } else if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT
//     }
//     return discount;
// }

// console.log(getDiscount(50000));



// const age = 18;
// const type = age >= 18 ? "adult" : "child";
// console.log(type);


// function checkStorage(available, ordered) {
//     let message;
//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
//     return message;
// }

// console.log(checkStorage(300,200))


// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//     return message;
    
// }

// console.log(checkPassword("jqueryismyjam"))



// function getSubscriptionPrice(type) {
//     let price;

//     switch (type) {
//         case "starter":
//             price = 0;
//             break;

//         case "professional":
//             price = 20;
//             break;

//         case "organization":
//             price = 50;
//             break;
//     }

//     return price;
// }

// console.log(getSubscriptionPrice('professional'));


// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     switch (password) {
//         case null:
//             message = "Canceled by user!"
//             break
//         case ADMIN_PASSWORD:
//             message = "Welcome!"
//             break
//         default:
//             message = "Access denied, wrong password!"
//     }
//     return message;
// }


// console.log(checkPassword('a'));



// function getShippingCost(country) {
//     let message;
//     let price;
//     switch (country) {
//         case 'China':
//             price = 100
//             message = `Shipping to ${country} will cost ${price} credits`
//             break
//         case 'Chile':
//             price = 250
//             message = `Shipping to ${country} will cost ${price} credits`
//             break
//         case 'Australia':
//             price = 170
//             message = `Shipping to ${country} will cost ${price} credits`
//             break
//         case 'Jamaica':
//             price = 120
//             message = `Shipping to ${country} will cost ${price} credits`
//             break
//         default:
//             message = "Sorry, there is no delivery to your country"
//     }

//     return message;
// }

// console.log(getShippingCost('Australia'));


// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`;

//     return message;
// }

// console.log(getNameLength('ggggg'))


// function getSubstring(string, length) {
//     const substring = string.slice(0, length);

//     return substring;
// }


// console.log(getSubstring('Hello World', 7));



// function formatMessage(message, maxLength) {
//     let result;
//     if (message.length <= maxLength) {
//         result = message
//     } else if (message.length > maxLength) {
//         result = `${message.slice(0, maxLength)}...`
//     }
//     return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));


// function normalizeInput(input) {
//     const normalizedInput = input.toUpperCase();

//     return normalizedInput;
// }

// console.log(normalizeInput("Hello world"))


// function checkForName(fullName, name) {
//     const result = fullName.includes(name);
//     return result;
// }

// console.log(checkForName("Egor Kolbasov", "Egor"))


// function checkForSpam(message) {
//     let result;
//     if (message.includes('spam')) {
//         result === message
//     } else {
//         result === message
//     }
//     return result;
// }
// console.log(checkForSpam("Latest technology news"));


// function checkForSpam(message) {
//     let result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
//     return result;
// }
// console.log(checkForSpam("Latest technology spa"));


