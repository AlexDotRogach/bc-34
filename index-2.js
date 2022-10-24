/*
 * Методи функції call и apply
 */

// https://learn.javascript.ru/call-apply-decorators#perehodim-k-neskolkim-argumentam-s-func-apply

//*Функції це об'єкти зі своїми властивостями та методами

// const greet = {
//   name: 'Mango',
// };

//* call і apply

//? Викличте функцію showFullName у контексті об'єкта user

//call

// const showFullName = function (message, num) {
//   console.log(this);
//   console.log(
//     `${message} ${this.firstName} ${this.lastName} years old ${this.age}, your room number ${num}`
//   );
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Hi', 2)
// showFullName.apply(user, ['Hi', 2])

const arrData = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4}
]

// function showId() {
//     console.log("obj" + this.id)
// }

// arrData.forEach(data => showId.call(data), arrData[0])

// for(let i = 0; i < arrData.length; i++) {
//     return arrData[i]
// }

// arrData.forEach((num, index, arr) => {
//     num.check = true
//     // console.log("work")
//     // arr.push("da")
//     // doesn t work
//     // break;
//     // contrinue;
//     // return
// })

// console.log(arrData)

// 1 - number 
// 2 - index 
// 3 - arr

// //? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };

//apply

// const showFullName = function (message, num) {
//   console.log(this);
//   console.log(
//     `${message} ${this.firstName} ${this.lastName} years old ${this.age}, your room number ${num}`
//   );
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

//? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };

//* bind

// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const mango = {
//   firstName: 'Mango',
//   lastName: 'F',
//   age: 34,
// };

// console.log(showFullName.bind(user)())

/*
 * Якщо прив'язати контекст через bind
 * при передачі функції як callback контекст зберігається
 */
// Передача функції як callback З прив'язаним контекстом
// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// function someFoo(callback) {
//     console.log(callback)
//     callback();
// }

// someFoo(showFullName.bind(user))

//* Метод об'єкта у ролі колбека

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//   callback();
// };

// // user.showThis()
// // user.showName()

// someFunction(user.showName.bind(user))
// someFunction(user.showThis.bind(user))

/*
? Що виведе цей код?
*/

// const f = function (message) {
//   console.log(`${message}, ${this.name} ${this.surname}!`);
// };

// const user = {
//   name: 'Вася',
//   surname: "Test"
// };

// const anotherUser = {
//   name: 'Петя',
// };

// const foo = f.bind(user, 'Hello');
// foo();

// const copyFunc = f.bind(anotherUser).bind(user);
// console.log(f.bind(anotherUser))
// console.log(f.bind(anotherUser).bind(user))
// console.log(f.bind(anotherUser).bind(user)())
// const testFun = f.bind(anotherUser);

// console.log(testFun.bind(user)())
// copyFunc('Hi');

/*
? Виклик checkPassword() у наведеному нижче коді повинен перевірити пароль і потім викликати user.loginOk/loginFail в залежністі від відповіді.
? Однак його виклик призводить до помилки. Чому?
 */

// const checkPassword = function (userPassword, ok, fail) {
//   const PASSWORD = 'rockstar';

//   if (PASSWORD === userPassword) {
//     console.log('Password Ok!');
//     ok();
//   } else {
//     console.error('Password not Ok!');
//     fail();
//   }
// };

// const user = {
//   name: 'Вася',

//   loginOk() {
//     console.log('this', this);
//     console.log(`${this.name} logged in!`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in!`);
//   },
// };

// const onSucsses = user.loginOk.bind(user);
// const onError = user.loginFail.bind(user);

// checkPassword('rockstar', onSucsses, onError);

// const user = {
//   name: 'Вася',
// };

// const arrowFoo = () => {
//   console.log(this);
// };

// const obj = {
//     name: 'Alex',
//     callBack: function (callback) {
//         const test = () => 5

//         console.log(test())
//     },
//     testFun: () => {console.log(this)},
//     testFunSimple: function () {console.log(this)}

// } 

// obj.callBack((obj) => {
//     console.log(obj)
// })
// obj.callBack()
// obj.testFun()
// obj.testFunSimple()
// 

// const obj = {
//     message: 'Number > ',
//     numbers: [1,2,3,4],
//     list(objCont) {
//         this.numbers.forEach(function (number) {
//             console.log(this.message, number)
//         }, objCont)
//     },
//     listArr() {
//         this.numbers.forEach((number) => {
//             console.log(this.message, number)
//         })
//     },
// } 

// obj.listArr()
// obj.list(obj)


const products = [
    {
      shortName: 'Сардельки «Алан»',
      fullName: `Сардельки «Алан» «Ретро» з вершками в/ґ н/о
      Сардельки «Алан» «Ретро» з вершками в/ґ н/о`,
      volume: 500,
      price: 200,
      img: {
        url: 'https://content.silpo.ua/sku/ecommerce/7/545x440wwm/72620_545x440wwm_f865a87e-2cfd-cd86-37ea-15160792313c.png',
        alt: 'food',
      },
      quantity: 32,
    },
    {
      shortName: 'Cola',
      fullName: 'Напій Coca-Cola',
      volume: 1,
      price: 25,
      img: {
        url: 'https://content.silpo.ua/sku/ecommerce/48/545x440wwm/486807_545x440wwm_ebd928d0-8826-3ba2-fb22-33e4c8209e5d.png',
        alt: 'water',
      },
      quantity: 23,
    },
    {
      shortName: 'Pasta ZARA',
      fullName: 'Вироби макаронні Pasta ZARA «Рісіні»',
      volume: 500,
      price: 38,
      img: {
        url: 'https://content.silpo.ua/sku/ecommerce/59/545x440wwm/599480_545x440wwm_34dd450c-0aaa-3129-2e57-0066c33c8539.png',
        alt: 'food',
      },
      quantity: 12,
    },
    {
      shortName: 'кус-кус',
      fullName: 'Крупа «Премія»® пшенична кус-кус',
      volume: 500,
      price: 29,
      img: {
        url: 'https://content.silpo.ua/sku/ecommerce/85/545x440wwm/856915_545x440wwm_30d66171-8349-3a1a-9918-cc78e270c7cd.png',
        alt: 'food',
      },
      quantity: 13,
    },
    {
      shortName: 'Пиво Captain Jack',
      fullName: 'Пиво Captain Jack Orange світле',
      volume: 0.3,
      price: 49,
      img: {
        url: 'https://content.silpo.ua/sku/ecommerce/91/545x440wwm/911040_545x440wwm_693ef8b2-0fd6-9f88-4129-1d1770b9a984.png',
        alt: 'beer',
      },
      quantity: 12,
    },
  ];

function showProduct() {
    if (this.fullName.length > 15)  {
        return this.fullName
    }

    return 'less 15'
}

products.forEach(product => console.log(showProduct.call(product)))
  