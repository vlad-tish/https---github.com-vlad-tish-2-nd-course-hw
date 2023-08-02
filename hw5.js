// Задание 1
function compareNum(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}
console.log(compareNum(13, 19));
//

// Задание 2
let honestyNum = () => {
    while (true) {
        let n = Number(prompt('Введите любое число'));
        if (isNaN(n)) {
            alert('Некорректный ввод, повторите попытку');
        } else {
            if (n % 2 === 0) {
                return 'Число четное';
            } else {
                return 'Число нечетное';
            }
        }
    }  
}
console.log(honestyNum());
//

// Задание 3
function squareNum1(n) {
    console.log(n**2);
}
squareNum1(3)

function squareNum2(e) {
    return e**2
}
console.log(squareNum2(6));
//

// Задание 4
let age = Number(prompt('Сколько Вам лет?'));
let printMessage;

if(age < 0 || isNaN(age)) {
    printMessage = () => {
        alert('Вы ввели неправильное значение');
    }    
} else {
    if(age <= 12) {
        printMessage = () => {
            alert('Привет, друг!');
        }
    } else {
        printMessage = () => {
            alert('Добро пожаловать!');
        }
    }
}
printMessage()
// 

// Задание 5
function mult(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {    
            return 'Одно или оба значения не являются числом';
        } else {
            return num1 * num2;
        }
}        
console.log(mult(13, 43));    
//

// Задание 6
let cubNum = () => {
    let n = Number(prompt('Введите число'));
    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        let resuls = n**3
        return `${n} в кубе равняется ${resuls}`
    }
}
console.log(cubNum())
// 

// Задание 7
function getArea() {
    return 3.14 * this.radius**2
}

function getPerimeter() {
    return 2 * 3.14 * this.radius
}

const circle1 = {
    radius: 1,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 23,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

console.log(circle1.getArea())
console.log(circle1.getPerimeter())
console.log(circle2.getArea())
console.log(circle2.getPerimeter())
// 