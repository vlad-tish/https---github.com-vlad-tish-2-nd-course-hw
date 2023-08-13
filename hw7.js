// Задание 1
let string = 'Учёба в кайф!';
string = string.toLocaleUpperCase();
console.log(string);
//

// Задание 2
let array = ['Фронтенд', 'Учитель', 'Каникулы', 'Участие', 'Поток', 'Учебник'];
let search = 'Уч';

array.forEach((word) => {
    if (word.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
        console.log(word);
    }
})
//

// Задание 3
let num = 32.58884;
function math() {
    floor = Math.floor(num);
    ceil = Math.ceil(num);
    round = Math.round(num);
    console.log(floor);
    console.log(ceil);
    console.log(round);
}
math();
//

// Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));
//

// Задание 5
function getRandomNum(n) {
    return(Math.ceil(Math.random() * n));
}
console.log(getRandomNum(10))
//

// Задание 6
let number = 17;
let aNum = [];
function arrayNumber() {
    for(; Math.floor(number / 2) > aNum.length;) {
        let numRandom = (Math.round(Math.random() * number))
        aNum.push(numRandom);
    }
    return aNum;
}
console.log(arrayNumber());
//

// Задание 7
function RandomNum(a, b) {
    return(Math.round(Math.random() * (a - b) + b));
}
console.log(RandomNum(45, 60));
//

// Задание 8
let myDate = new Date();
console.log(myDate);
//

// Задание 9
let currentDate = new Date()
currentDate.setHours(73*24);
console.log(currentDate);
//

// Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let rusDate = new Date();
rusDate.setDate(13);
rusDate.setMonth(7);
rusDate.setYear(2023);

let fullDate = rusDate.getDate() + ' ' + months[rusDate.getMonth()] +
' ' + rusDate.getFullYear() + ' - это ' + days[rusDate.getDay()] + ' ' + rusDate.toLocaleTimeString();

console.log(fullDate);
//

// Задание 11
const memoriezWords = () => {
    let arrayGame = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arrayGameSortRandom = arrayGame.sort(() => Math.random() - 0.5);
    alert(arrayGameSortRandom);
    ferstAnswer = prompt('Чему равнялся первый элемент массива?');
    lastAnswer = prompt('Чему равнялся последний элемент массива?');
    if (ferstAnswer.toLowerCase() === arrayGameSortRandom[0].toLowerCase() && lastAnswer.toLowerCase() === arrayGameSortRandom[6].toLowerCase()) {
        alert('Поздравляем, вы угадали!');
    } else if (ferstAnswer.toLowerCase() === arrayGameSortRandom[0].toLowerCase() || lastAnswer.toLowerCase() === arrayGameSortRandom[6].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно :(');
    }
}
console.log(memoriezWords());
//