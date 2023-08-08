// Задание 1
let string = 'Учёба в кайф!';
string = string.toLocaleUpperCase();
console.log(string);
//

// Задание 2
let array = ['Фронтенд', 'Учёба', 'Каникулы', 'Участие', 'Поток', 'Учебник'];
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
function getRandomNum(a, b) {
    return(Math.round(Math.random() * (a - b) + b));
}
console.log(getRandomNum(1, 10))
//