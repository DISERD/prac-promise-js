const isSuccess = true;
/*
const isSuccess = true;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve(5);
    } else {
      reject("error - 404");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result + 10;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("delete spiner");
  });
*/

const randomPromise = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      resolve();
    } else {
      reject(new Error("Error"));
    }
  });
};

randomPromise()
  .then(() => console.log("Проміс виконано"))
  .catch(() => console.log("Помилка проміса"))
  .finally(() => console.log("Робота з промісом завершена"));

// const getRandomNumber = () => {
//   return new Promise((resolve) => {
//     resolve(Math.floor(Math.random() * 100));
//   });
// };
//
// getRandomNumber()
//   .then((number) => {
//     const result = number + 10;
//     console.log(result);
//     return result;
//   })
//   .catch(() => console.log("Помилка проміса"))
//   .finally(() => console.log("Робота з промісом завершена"));

//
// 2. Додаткові завдання
//

// 1. Що виведе код нижче?
// let promise = new Promise(function(resolve, reject) {
//   resolve(1);
//   setTimeout(() => resolve(2), 1000);
// });
// promise.then(alert);
// Відповідь: Виведе 1, оскільки проміс може бути виконаний (resolved) лише один раз, а всі наступні виклики resolve/reject ігноруються.

let promise = new Promise(function(resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});
promise.then((result) => console.log(result));


// 2. Вбудована функція setTimeout використовує колбек-функції. Створіть альтернативу яка базується на промісах. Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через ms мілісекунд, так щоб ми могли додати до нього .then:
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(3000).then(() => console.log('виконалось через 3 секунди'));


// 3. Напишіть функцію, яка повертає проміс, який виконується через певний час (наприклад, 2 секунди) і повертає повідомлення "Проміс виконано".
function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Проміс виконано");
    }, 2000);
  });
}

waitTwoSeconds().then((message) => console.log(message));


//
// 3. Творчі завдання
//


// 1. Напишіть функцію, яка отримує масив чисел і повертає проміс, який виконується, якщо всі числа в масиві є парними. Якщо ж принаймні одне число непарне, проміс повинен бути відхилено з повідомленням "Є непарні числа".
function checkEvenArray(numbers) {
  return new Promise((resolve, reject) => {
    const allEven = numbers.every((num) => num % 2 === 0);
    if (allEven) {
      resolve("Всі числа парні");
    } else {
      reject("Є непарні числа");
    }
  });
}

checkEvenArray([2, 4, 6, 8])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


// 2. Напишіть функцію, яка приймає URL зображення і повертає проміс, який завантажує це зображення. Якщо завантаження успішне, проміс виконується з завантаженим зображенням, а в разі помилки — відхиляється з повідомленням про помилку.
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject("Помилка завантаження зображення");
  });
}


// 3. Напишіть функцію, яка отримує масив об'єктів і повертає проміс, який виконується з масивом імен, відсортованих за алфавітом.
const people = [
  { name: "John", age: 25 },
  { name: "Anna", age: 30 },
  { name: "Peter", age: 40 },
  { name: "Mary", age: 35 },
];

function getSortedNames(arr) {
  return new Promise((resolve) => {
    const sortedNames = arr.map((person) => person.name).sort();
    resolve(sortedNames);
  });
}

getSortedNames(people).then((names) => console.log(names));


// 4. Напишіть функцію, яка приймає два числа і повертає проміс, який виконується з результатом їхнього додавання. Якщо хоча б одне з чисел не є числом, проміс повинен бути відхилено з повідомленням "Неправильні аргументи".
function addTwoNumbers(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
      reject("Неправильні аргументи");
    } else {
      resolve(a + b);
    }
  });
}

addTwoNumbers(5, 10)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));