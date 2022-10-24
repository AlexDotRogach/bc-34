// 'use strict';
/*
 *  Контекст виклику this
 */

/*
 * this існує тільки всередині функцій.
 * На контекст не впливає те, де функція була //! ОГОЛОШЕНА.
 * На контекст впливає те де функція //! ВИКЛИКАЄТЬСЯ.
 * Якщо функція визивається в контексті об'єкта, this посилається на цей об'єкт
 * Якщо функція визивається без контекста this --> undefined (в суворому режимі)
 * Якщо функція визивається без контекста this --> window (в НЕ суворому режимі)
 * При передачі функції як callback контекст не зберігається
 * this  в сктрілочних функціях посилається на батьківський this:
 *  - якщо стрілочна функція визивається без контексту або в контексті об'єкта, this --> window
 *  - якщо стрілочна функція оголошена в серередині функції (не стрілочної) this стрілочної функції буде посилатися на батьківський this
 */

//TODO: Розглянемо як this поводиться в методах об'єкта

// const user = {
//   name: "Alex",
//   showName() {
//     console.log(this.name)
//   }
// }

// user.showName()
//TODO: Розглянемо як this поводиться у звичайних функціях (суворий, не суворий режим)

// function showContext() {
//   console.log(this)
// }

// showContext()
//? Function declaration

//? Arrow function

// const user = {
//   name: 'Alex',
//   showName: () => {
//     console.log(this)
//   },
//   test: function() {
//     this.showName()
//   }
// }

// user.showName()

// user.test()

// const foo = () => {
//   console.log(this)
// }

// foo()
//TODO: Присвоєння функції як методу об'єкту

// const user = {
//   name: 'Mango',
// };

//TODO: Виклик методу об'єкта без контекстa

// const user = {
//   name: 'Kiwi',
//   show: () => {
//     console.log(user.name)
//   },
// }

// user.show()
// const show = user.showName;

// const user2 = {
//   name: "Mango"
// }

// user2.showName = show;
// console.log(user2)
// user2.showName()

//TODO: This в callback функціях

// const user = {
//   name: 'Kiwi',
//   showName() {
//     console.log(this.name)
//   },
//   test(callback) {
//     callback()
//   }
// }


// user.test(user.showName)

// user.showName()

//TODO: this у стрілочних функціях. Стрілочні функції не мають свого this, this у стрілочних функціях завжди посилається на батьківський this.

/*
? Яким буде результат виконання цього коду?
*/

// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this.arrowInside());
//     const arrow = () => console.log('this in arrow function', this);
//     arrow();
//   },
//   arrowInside: () => {
//     console.log(this)
//   }
// };

// user.go();
// user.arrowInside()
// 
// const goFn = user.go;
// console.log(goFn)
// goFn();

/*
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/

// const user = {
//   name: 'Luis',
//   age: 30,
//   makeUser() {
//     return {
//       name: 'Mango',

//       ref: this,
//       age: this.age,
//     };
//   },
// };

// user.makeUser();
// const newUser = user.makeUser();

// console.log(newUser.ref === user);

/*
? Яким буде результат console.log
*/

// function makeUser() {
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();
// let user1 = makeUser();

// console.log(user);
// console.log(user.name);
// console.log(user.ref());
// console.log(user === user.ref());

/*
? Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
*/

// const ladder = {
//   step: 0,

//   up() {
//     this.step += 1;
//     return this
//   },
//   down() {
//     this.step -= 1
//     return this
//   },

//   showStep() {
//     console.log(this.step)
//     return this
//   }
// }

// ladder.up()
// ladder.up()
// ladder.up()
// ladder.up()
// ladder.up()
// ladder.down()
// ladder.down()
// ladder.down()
// ladder.showStep()

// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо зробити це так:

//Змініть код методів up, down і showStep таким чином, щоб їх виклик можна було зробити ланцюжком, наприклад так:
// console.log(ladder.up().up().up().up().up().showStep().down());
