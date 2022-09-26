// ЗАДАЧА 1

// const animal = {
//     legs: 4
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog);
// console.log(animal.isPrototypeOf(dog));


// const parent = {
//     name: 'Stacey',
//     surname: 'Moore',
//     age: 54,
//     heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// console.log(child)



// ЗАДАЧА 2

// const ancestor = {
//     name: 'Paul',
//     age: 83,
//     surname: 'Dawson',
//     heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки

// console.log(ancestor.isPrototypeOf(parent))
// console.log(parent.isPrototypeOf(child))
// console.log(parent.hasOwnProperty('heritage'))



// ЗАДАЧА 3

// function Car(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }

// const newCar = new Car('Audi', 'Q3', 36000)

// console.log(newCar)


// ЗАДАЧА 4


// function Car({ brand, model, price, color }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     this.color = color;
// }

// const newCar1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000, color: 'black' })
// const newCar2 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })


// console.log(newCar1)
// console.log(newCar2)


// ЗАДАЧА 5

// function User({ name, email }) {
//     this.name = name;
//     this.email = email;
// }

// User.prototype.getEmail = function () {
//     return this.email;
// };

// User.prototype.changeEmail = function (newEmail) {
//     this.email = newEmail;
// };

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// console.log(mango.getEmail());
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail());


// function Car({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }

// Car.prototype.getPrice = function() {
//     return this.price
// }

// Car.prototype.changePrice = function (newPrice) {
//     return this.price = newPrice
// }


// const newCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(newCar.getPrice())
// console.log(newCar.changePrice(35000))



// ЗАДАЧА 6

// function Storage(items) {
//     this.items = items
// }

// Storage.prototype.getItems = function () {
//     // console.log(this)
//     return this.items
// }

// Storage.prototype.addItem = function (newItem) {
//     return this.items.push(newItem)
// }

// Storage.prototype.removeItem = function (item) {
//     // return this.items.splice(1,1)

//     // const filterArray = this.items.filter(element => element !== item)
//     // return this.items = filterArray



//     for (let i = 0; i < this.items.length; i++) {
//         // console.log(this.items[i])
//         if (this.items[i] !== item) {
//             console.log()
//         }
//     }


// }

// // // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// ЗАДАЧА 7


// function StringBuilder(baseValue) {
//     this.value = baseValue

//     // console.log()
// }

// StringBuilder.prototype.getValue = function () {
//     return this.value
// }

// StringBuilder.prototype.padStart = function (str) {
//     return this.value = str + this.value
// }

// StringBuilder.prototype.padEnd = function (str) {
//     return this.value = this.value + str
// }

// StringBuilder.prototype.padBoth = function (str) {
//     return this.value = str + this.value + str
// }


// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


// ЗАДАЧА 9


// function Car({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }


// const newCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })

// console.log(newCar)

// class Car{
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }

// const newCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })

// console.log(newCar)


// ЗАДАЧА 10


// class Car {
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     getPrice() {
//         return this.price
//     }

//     changePrice(newPrice) {
//         return this.price = newPrice
//     }
// }

// const newCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })

// console.log(newCar.changePrice())

// newCar.changePrice(35000)

// // console.log(newCar)



// ЗАДАЧА 11

// class Car {

//     #brand;

//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     getBrand() {
//         return this.#brand
//     }

//     changeBrand(newBrand) {
//         return this.#brand = newBrand
//     }

// }


// const newCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })

// console.log(newCar)
// console.log(newCar.changeBrand('dvd'))



// ЗАДАЧА 12

// class Storage{

//     #items

//     constructor(items) {
//         this.#items = items

//     }

//     getItems() {
//         return this.#items;
//     };

//     addItem(newItem) {
//        return this.#items.push(newItem);
//     };

//     removeItem(item) {
//         const itemIndex = this.#items.indexOf(item);
//         return this.#items.splice(itemIndex, 1);
//     };
// }

// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems());
// storage.addItem("Дроид");
// console.log(storage.getItems());
// storage.removeItem("Пролонгер");
// console.log(storage.getItems());

// console.log(storage)


// ЗАДАЧА 13

// class StringBuilder{
//     // this.value = baseValue;
//     #value

//     constructor(baseValeu) {
//         this.#value = baseValeu
//     }

//     getValue() {
//         return this.#value;
//     };

//     padEnd(str) {
//         this.#value += str;
//     };

//     padStart(str) {
//         this.#value = str + this.#value;
//     };

//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     };

// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


// ЗАДАЧА 14


// class Car {
//     #model;
//     #price;
//     #brand;

//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.#model = model;
//         this.#price = price;
//     }

//     get brand() {
//         return this.#brand;
//     }

//     set brand(newBrand) {
//         this.#brand = newBrand;
//     }

//     get model() {
//         return this.#model;
//     }

//     set model(newModel) {
//         this.#model = newModel;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         this.#price = newPrice;
//     }
// }


// const newCar = new Car({ model: 'Манго', price: 'mango@mail.com' });


// console.log(newCar)



// ЗАДАЧА 15

// class Car {
//     // Пиши код ниже этой строки
//     static MAX_PRICE = 50000;
//     #price;

//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (newPrice >= Car.MAX_PRICE) {
//             return
//         }
//         this.#price = newPrice;
//     }
//     // Пиши код выше этой строки
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000



// ЗАДАЧА 16

// class Car {
//     static #MAX_PRICE = 50000;

//     static checkPrice(price) {
//         if (Car.#MAX_PRICE < price) {
//             return `${'Внимание! Цена превышает допустимую.'}`
//         }

//         return `${'Всё хорошо, цена в порядке.'}`
//     }

//     constructor({ price }) {
//         this.price = price;
//     }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price));
// console.log(Car.checkPrice(bmw.price));



// ЗАДАЧА 17


// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User{
//     static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' }

// }

// const admin = new Admin('koki')

// console.log(admin)
// Admin.AccessLevel.BASIC
// console.log(Admin.AccessLevel.SUPERUSER)



// ЗАДАЧА 18

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     // Пиши код ниже этой строки
//     accessLevel

//     constructor({ email, accessLevel }) {
//         super(email)
//         this.accessLevel = accessLevel
//     }

//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser'
//     };

//     // Пиши код выше этой строки
// }

// const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

// // console.log(Admin.AccessLevel.BASIC)


// ЗАДАЧА 19

class User {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}
class Admin extends User {
    // Пиши код ниже этой строки

    static AccessLevel = {
        BASIC: 'basic',
        SUPERUSER: 'superuser'
    };

    accessLevel;

    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
    }

    blacklistedEmails = [];

    // Пиши код выше этой строки
}

const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 