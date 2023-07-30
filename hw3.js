// Задание 1
let password = ('пароль');
let reply = prompt('Введите пароль');
reply.toLowerCase() === password ? console.log('Пароль введен верно'):
console.log('Пароль введен неправильно');
// 

// Задание 2
let c = (2)
c>0 && c<10 ? console.log('Верно'):
console.log('Неверно');
//

// Задание 3
let d = (99)
let e = (120)
if (d>100 || e>100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
// 

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
// 

// Задание 5
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default: console.log('Ты чего? Месяцев всего 12!');
}
// 

// Задание 7
let f = Number(prompt('Пожалуйста, введите любое число'));
if (f % 2 === 0) {
    alert('Число четное');
} else if (f % 2 > 0) {
    alert('Число нечетное');
} else {
    console.log(isNaN(f));
    alert('Это не число');
}
// 

// Задание 8, Задание 9
let clientOS = prompt('Каким устройством вы пользуетесь? 0 — iOS, 1 — Android');
let clientOSdate = prompt('Пожалуйста, укажите дату выпуска устройства');
let dateYear = 2015
if (clientOS == 0 && clientOSdate < dateYear) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS == 1 && clientOSdate < dateYear) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else if (clientOS == 0 && clientOSdate >= dateYear) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS == 1 && clientOSdate >= dateYear) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Некорректное значение')
}
//