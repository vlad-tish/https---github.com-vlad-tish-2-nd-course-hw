// Задание 1
let password = ('домашка');
let reply = prompt('Введите пароль');
if (reply.toLowerCase() === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}
// 

// Задание 2
let c = (2)
if (c>0 && c<10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
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
    default: console.log('Боже, ты чего? Месяцев всего 12!');
        break;
}
// 