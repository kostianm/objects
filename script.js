/**1. Створити об’єкт user з наступними властивостями:
ім'я, 
прізвище, 
електронна адреса, 
password,
номер телефона,
адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ; */

// let user = {
//   name: "Kostia",
//   surname: "Melnyk",
//   email: "melnykkn@gmail.com",
//   password: "qwerty123",
//   numberPhone: 4284438,
//   address: {
//     city: "Winnipeg",
//     avenu: "Portage",
//     building: 123,
//     appartment: 123,
//   },
// };

/* 2. Написати функцію, яка приймає об’єкт юзера і виводить вітання типу “Доброго дня, (ім’я_юзера) (прізвище юзера)” */

// const task2 = function () {
//   console.log(`Доброго дня, ${user.name} ${user.surname}`);
// };

// task2();

/*3. Написати функцію, яка приймає об’єкт і виводить в консоль всі його властивості (за допомогою циклу for..in) */

// const task3 = function (obj) {
//   for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       console.log(key, obj[key]);
//     }
//   }
// };

// task3(user);

/* 4. Створити об’єкт car (машина) з властивостями:
колір
модель
марка
об’єм двигуна
місткість (можлива кількість пасажирів)
поточна швидкість (speed)
максимальна можлива швидкість (maxSpeed)
       та методами:
accelerate (збільшення швидкості): метод приймає кількість кілометрів/годину (ціле число) та додає до поточної швидкості (speed), але результат не має перевищувати максимально можливої швидкості для цієї машини
deaccelerate (зменшення швидкості): метод приймає ціле число (кількість кілометрів на годину) і зменшує поточну швидкість (speed) на вказану, але результат не може бути від’ємним
stop (зупинка) - метод нічого не приймає, при виклику встановлює поточну швидкість (speed) рівною 0 */

// let car = {
//   color: "white",
//   model: "Hundai",
//   mark: "Kona",
//   engine: 2.5,
//   capacity: 4,
//   speed: 60,
//   maxSpeed: 120,
//   accelerate(plus) {
//     if (this.speed + plus <= this.maxSpeed) {
//       this.speed += plus;
//     }
//   },
//   deaccelerate(minus) {
//     if (this.speed - minus >= 0) {
//       this.speed -= minus;
//     }
//     },
//     stop() {
//         this.speed = 0;
//   }
// };

// console.log('car :>> ', car);
// car.accelerate(50);
// console.log('car :>> ', car);
// car.deaccelerate(100);
// console.log("car :>> ", car);
// car.stop();
// console.log("car :>> ", car);
// car.deaccelerate(110);
// console.log("car :>> ", car);

/* 5. На основі об’єкта з завдання №4 розробити функцію-конструктор для масового створення таких об’єктів за переданими параметрами. В якості перевірки створити декілька екземплярів таких об’єктів з різними властивостями */

function Car (color, model, mark, engine, capacity, speed, maxSpeed){
  this.color = color,
  this.model = model,
  this.mark = mark,
  this.engine = engine,
  this.capacity = capacity,
  this.speed = speed,
  this.maxSpeed = maxSpeed,
  this.accelerate = function(plus) {
    if (this.speed + plus <= this.maxSpeed) {
      this.speed += plus;
    }
  },
  this.deaccelerate = function(minus) {
    if (this.speed - minus >= 0) {
      this.speed -= minus;
    }
  },
  this.stop = function() {
    this.speed = 0;
  }
}

let car1 = new Car('red', 'subaru', 'forest', 2.7, 4, 100, 180);
let car2 = new Car("green", "BMW", "X5", 3, 4, 120, 280);
let car3 = new Car("gyellow", "Tesla", "Model s", 0, 4, 120, 250);
console.log('car1 :>> ', car1);
console.log("car2 :>> ", car2);
console.log("car3 :>> ", car3);


