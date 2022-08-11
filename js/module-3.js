// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// book.genres.push('kaki')

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

// console.log(price);


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