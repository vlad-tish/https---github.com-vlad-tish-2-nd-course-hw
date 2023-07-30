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
alert(parseInt(a) + parseInt(b));
// 

// Задание 5
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '1':
        console.log('Зима');
        break;
    case '2':
        console.log('Зима');
        break;
    case '3':
        console.log('Весна');
        break;
    case '4':
        console.log('Весна');
        break;
    case '5':
        console.log('Весна');
        break;
    case '6':
        console.log('Лето'); 
        break;
    case '7':
        console.log('Лето');
        break;
    case '8':
        console.log('Лето');
        break;
    case '9':
        console.log('Осень');
        break;
    case '10':
        console.log('Осень');
        break;
    case '11':
        console.log('Осень');
        break;
    case '12':
        console.log('Зима'); 
        break;
    default: console.log('Ты чего? Месяцев всего 12!');
        break;
}
// 

// Задание 7
let f = (prompt('Пожалуйста, введите любое число'));
console.log(isNaN(f));
if (f % 2 === 0) {
    alert('Число четное');
} else if (f % 2 > 0) {
    alert('Число нечетное');
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