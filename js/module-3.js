// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// book.genres.push('kaki')
// console.log("kaki", kaki)

// console.log(book.genres);

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//         country: "Jamaica",
//         city: "Ocho Rios",
//     },
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const state = user.location.country
// console.log(state);


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']
// console.log(book); // ['ua', 'ru']


// const name = "Генри Сибола";
// const age = 25;

// const user = {
//     name,
//     age
// };

// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25


// // ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     // Это метод объекта
//     getBooks() {
//         console.log("Этот метод будет возвращать все книги - свойство books");
//     },
//     // Это метод объекта
//     addBook(bookName) {
//         console.log("Этот метод будет добавлять новую книгу в свойство books");
//     },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };

// for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значение свойства с таким ключом
//     console.log(book[key]);
// }


// const animal = {
//     legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs);


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };

// for (const key in book) {
//     // Если это собственное свойство - выполняем тело if
//     if (book.hasOwnProperty(key)) {
//         console.log(key);
//         console.log(book[key]);
//     }

//     // Если это не собственное свойство - ничего не делаем
// }


// ЗАДАЧА 1

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// console.log(apartment);

// ЗАДАЧА 2

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com"
//     }
// };

// console.log(apartment)


// ЗАДАЧА 3

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };


// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(aptRating)


// ЗАДАЧА 4

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// console.log(ownerName);


// ЗАДАЧА 5

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// console.log(aptRating);


// ЗАДАЧА 6

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// apartment.price = 5000
// apartment.rating = 4.7
// apartment.owner.name = "Henry Sibola"
// apartment.tags.push("trusted")

// console.log(apartment.tags);


// ЗАДАЧА 7

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// apartment.area = 60
// apartment.rooms = 3
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// }

// console.log(apartment.owner);


// ЗАДАЧА 8

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//     name,
//     price,
//     image,
//     tags
// };

// console.log(product.price);


// ЗАДАЧА 9

// const propName = "name";
// const user = {
//     age: 25
// };

// user[propName] = "Генри Сибола";
// console.log(user.name);

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam"
// };

// console.log(credentials.email);


// ЗАДАЧА 10

// const book = {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["историческая проза", "приключения"],
//     rating: 8.38,
// };

// for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значение свойства с таким ключом
//     console.log(book[key]);
// }


// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const keys = [];

// const values = [];

// for (const key in apartment) {
//     keys.push(key)
//     values.push(apartment[key])
// }

// console.log(keys)
// console.log(values)


// ЗАДАЧА 11

// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// console.log()


// for (const key in apartment) {

//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }

// }

// console.log(keys)
// console.log(values)




// ЗАДАЧА 12

// function countProps(object) {
//     let propCount = 0;
//     propCount = Object.keys(object).length
//     return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }))





// ЗАДАЧА 13

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const values = [];

// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key])

// }

// console.log(keys)
// console.log(values)


// ЗАДАЧА 14

// function countProps(object) {

//     let propCount = 0;

//     let array = Object.keys(object)

//     for (const key of array) {
//         if (array.hasOwnProperty(key)) {
//             propCount += 1
//         }
//     }

//     return propCount;

// }

// console.log(countProps({ name: "Mango", age: 2, }))

// function countProps(object) {
//     let propCount = 0;

//     for (const key of Object.keys(object)) {
//         propCount += 1;
//     }

//     return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2, }))


// function countProps(object) {
//     let propCount = Object.keys(object).length;

//     return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2,}))


// ЗАДАЧА 15

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(values);




// ЗАДАЧА 16

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // totalSalary = Object.values(salaries)

//     for (salary of Object.values(salaries)) {
//         totalSalary += salary
//     }

//     return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));



// ЗАДАЧА 17

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {

//     hexColors.push(color.hex)
//     rgbColors.push(color.rgb)

// }

// console.log(hexColors);
// console.log(rgbColors);



// ЗАДАЧА 18

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];


// function getProductPrice(productName) {

//     for (const product of products) {
//         console.log(Object.keys(product));

//         if (productName === product.name) {
//             return product.price

//         }
//     }

//     return null
// }

// console.log(getProductPrice('Radar'));




// ЗАДАЧА 19 ????

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {

//     const values = []

//     for (const product of products) {

//         const keysArray = Object.keys(product)
//         console.log(keysArray)

//         if (keysArray.includes(propName)) {

//             values.push(product[propName])
//         }

//     }

//     return values
// }

// console.log(getAllPropValues('price'));




// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {

//     const values = []

//     for (const product of products) {

//         console.log(product.name)

//         for (const key of keys) {

//         }

//     }

//     return values
// }

// console.log(getAllPropValues('price'));




// ЗАДАЧА 20


// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// console.log(products.name)

// function calculateTotalPrice(productName) {
//     for (const product of products) {
//         console.log(product.name);

//         if (productName === product.name) {
//             return product.price * product.quantity
//         }

//     }

//     return 0

// }

// console.log(calculateTotalPrice("Radar"))



// ЗАДАЧА 21

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };


// const { yesterday, today, tomorrow } = highTemperatures


// const meanTemperature = (yesterday + today + tomorrow ) / 3;

// console.log(meanTemperature);



// ЗАДАЧА 22

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };


// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures


// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);


// ЗАДАЧА 23

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };


// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;


// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);




// ЗАДАЧА 24

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, rgb } of colors) {

//     // const { hex, rgb } = color

//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }

// console.log(hexColors);


const forecast = {
    today: {
        low: 28,
        high: 32,
        icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
    },
    tomorrow: {
        low: 27,
        high: 31,
    },
};
// Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;



// ЗАДАЧА 25

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };


// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// const { today: { low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' },
// tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' },
// } = forecast

// console.log(lowToday);



// ЗАДАЧА 26


// function calculateMeanTemperature(forecast) {
//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast
//     // const todayLow = forecast.today.low;
//     // const todayHigh = forecast.today.high;
//     // const tomorrowLow = forecast.tomorrow.low;
//     // const tomorrowHigh = forecast.tomorrow.high;

//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }))



// ЗАДАЧА 27

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore)


// ЗАДАЧА 28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores)


// ЗАДАЧА 29

// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };

// const finalSettings = {...defaultSettings, ...overrideSettings};

// console.log(finalSettings)


// ЗАДАЧА 30

// function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';

//     const renewData = {
//         completed: completed,
//         category: category,
//         priority: priority,
//         ...data
//     }
//     return renewData
// }
// console.log(makeTask({}))



// ЗАДАЧА 31


// function add(...args) {

//     let total = 0

//     for (const arg of args) {
//         total += arg
//     }

//     return total

// }

// console.log(add(100, 200))


// function add(...args) {

//     let total = 0

//     for (let i = 0; i < args.length; i += 1) {
//         console.log(...args)
//         total += args[i];
//     }

//     return total

// }

// console.log(add(1, 2, 3))



// ЗАДАЧА 32

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//     console.log(firstNumber); // Значение первого аргумента
//     console.log(secondNumber); // Значение второго аргумента
//     console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);



// function addOverNum(firstNumber, ...args) {

//     let total = 0;

//     console.log(firstNumber)

//     for (const arg of args) {

//         console.log(args)

//         if (firstNumber < arg){
//             total += arg;
//         }

//     }

//     return total
// }

// console.log(addOverNum(15, 8, 27))



// ЗАДАЧА 33

// function findMatches(array, ...args) {

//     const matches = [];

//     console.log(...array)
//     console.log(args)

//     for (const arg of args) {
//         console.log(arg)

//         if(array.includes(arg)){
//            matches.push(arg)
//         }
//     }

//     return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))



// ЗАДАЧА 34


// const bookShelf = {

//     books: ['The last kingdom', 'The guardian of dreams'],
//     getBooks() {
//       return 'Returning all books';
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },
//     removeBook(bookName){
//         return `Deleting book ${bookName}`
//     },
//     updateBook(oldName, newName){
//         return `Updating book ${oldName} to ${newName}`
//     }
// };

// console.log(bookShelf.getBooks())
// console.log(bookShelf.addBook("Haze"))


// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));




// ЗАДАЧА 35

// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],

//     updateBook(oldName, newName) {
//       const bookIndex = this.books.indexOf(oldName);

//       console.log(bookIndex);

//       this.books.splice(bookIndex, 1, newName);

//     },

// };


// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"))

// console.log(bookShelf.books)


// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//         // for (const book of this.books) {
//         // console.log(book)
//         // if (this.books.indexOf(oldName)) {
//         this.books.splice(this.books.indexOf(oldName), 1, newName)
//         // }
//         // }
//         return this.books
//     },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"))



// ЗАДАЧА 36

// const atTheOldToad = {
//     potions: []
// };

// console.log(atTheOldToad.potions);



// ЗАДАЧА 37

// const atTheOldToad = {

//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//     getPotions() {
//         return atTheOldToad.potions;
//     }

// };

// console.log(atTheOldToad.getPotions());



// ЗАДАЧА 38

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//     addPotion(potionName) {
//         this.potions.push(potionName)

//     },

// };


// console.log(atTheOldToad.potions)

// atTheOldToad.addPotion('Invisibility');


// console.log(atTheOldToad.potions)


// atTheOldToad.addPotion('Power potion');


// console.log(atTheOldToad.potions)



// ЗАДАЧА 39


// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],

//     removePotion(potionName) {
//         this.potions.splice(this.potions.indexOf(potionName), 1)
//     },

// };

// atTheOldToad.removePotion("Dragon breath");

// console.log(atTheOldToad.potions);


// atTheOldToad.removePotion("Speed potion")

// console.log(atTheOldToad.potions);



// ЗАДАЧА 40

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     updatePotionName(oldName, newName) {
//         this.potions.splice(this.potions.indexOf(oldName), 1, newName)
//     },
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")

// console.log(atTheOldToad.potions);

// atTheOldToad.updatePotionName("Stone skin", "Invisibility")

// console.log(atTheOldToad.potions);



// ЗАДАЧА 41

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],

//     getPotions() {
//         // console.log(this);
//         return this.potions;
//     },

//     addPotion(newPotion) {
        
//         for (const object of this.potions) {
//             // console.log(object)

//             if (object.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }

//         this.potions.push(newPotion);
//     },

//     removePotion(potionName) {

//         for (let i = 0; i < this.potions.length; i += 1) {

//             // console.log(this.potions[i])
            
//             if (potionName === this.potions[i].name) {

//                 // console.log(potionName === this.potions[i].name)
//                 // console.log(potionName)
//                 // console.log(i)
                
//                 return this.potions.splice(i, 1);
                
//             }
      
//         }

//         return `Potion ${potionName} is not in inventory!`;

//     },


//     updatePotionName(oldName, newName) {

//         for (let i = 0; i < this.potions.length; i += 1) {

//             // let newPotion = this.potions[i].name

//             // console.log(this.potions)

//             if (oldName === this.potions[i].name) {
                
//                 // console.log(oldName === newPotion)
//                 // console.log(newPotion)

//                 this.potions[i].name = newName
//                 // return this.potions.splice(i, 1, newName);
                
//                 // return
              
//             }

//             // return `Potion ${oldName} is not in inventory!`;
            
//         }
        
//     }, 

// };



// atTheOldToad.getPotions()

// console.log(atTheOldToad.potions);

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))

// console.log(atTheOldToad.potions);

// atTheOldToad.addPotion({ name: "Stone skin", price: 240 })

// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))

// atTheOldToad.addPotion({ name: "Power potion", price: 270 })

// console.log(atTheOldToad.potions);

// atTheOldToad.removePotion("Dragon breath");

// console.log(atTheOldToad.potions);

// atTheOldToad.removePotion("Speed potion");

// console.log(atTheOldToad.potions);

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")

// console.log(atTheOldToad.potions);

// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")

// console.log(atTheOldToad.potions);





// const kaki = { fdv: 'lock', lox: 'cyka' };

// const kib = { fdv: 'lock', lox: 'cyka' };

// const bot = kaki

// console.log(kaki === bot)


// const array = ['a', 'v', 'c'];

// console.log(array.includes('a'))

// const array = [
//     {
//         x: 5,
//         y: 3
//     },

//     {
//         x: 'a',
//         y: 'b'
//     },

// ]

// for (const object of array) {
//     console.log(object.x === 'a')
    
// }












/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */


// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },

    // add(product) {
    //     for (const item of this.items) {
    //         if (item.name === product.name) {
    //             item.quantity += 1;
    //             return;
    //         }
    //     }

    //     const newProduct = {
    //         ...product,
    //         quantity: 1,
    //     };

    //     this.items.push(newProduct);
    // },

    // remove(productName) {
    //     const { items } = this;

    //     for (let i = 0; i < items.length; i += 1) {
    //         const item = items[i];

    //         if (productName === item.name) {
    //             console.log('нашли такой продукт ', productName);
    //             console.log('индекс: ', i);

    //             items.splice(i, 1);
    //         }
    //     }
    // },

    // clear() {
    //     this.items = [];
    // },

    // countTotalPrice() {
    //     const { items } = this;
    //     let total = 0;

    //     for (const { price, quantity } of items) {
    //         total += price * quantity;
    //     }

    //     return total;
    // },
    // increaseQuantity(productName) { },
    // decreaseQuantity(productName) { },
// };

// console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍇');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());