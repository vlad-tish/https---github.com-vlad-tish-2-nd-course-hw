//Задание 1
const array = [1, 5, 4, 10, 0, 3];
for(let i = 0; array.length > i; i++) {
    if(array[i] == 10) break;
    console.log(array[i]);
}
//

//Задание 2
array.forEach((el, index) => {
    if(el == 4) {
	console.log(`${index}: ${el}`);
    }
})
//

//Задание 3
let numbs = [1, 3, 5, 10, 20];
numbs = numbs.join(' ');
console.log(numbs);
//

//Задание 4
emptyArr = [];
for(i = 2; emptyArr.length <= i; emptyArr.push([1, 1, 1])) {
    if(emptyArr.length === i) {
    }
}
console.log(emptyArr);
//

//Задание 5
let arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);
//

//Задание 6
let arraySort = [9, 8, 7, 'a', 6, 5];
arraySort = arraySort.sort();
arraySort.pop();
console.log(arraySort);

//Задание 7
arrayMystery = [9, 8, 7, 6, 5];
let answer = Number(prompt('Угадайте число'));
for (i = 0; i < arrayMystery.length; i++) {
    if(arrayMystery.includes(answer)) {
        alert('Вы угадали!:)');
        break;
    } else {
        alert('Вы не угадали:(');
        break;
    }
}
//

//Задание 8
let strong = 'abcdef';
strong = strong.split('');
strong = strong.reverse();
strong = strong.join('');
console.log(strong);
//

//Задание 9
let full = [[1, 2, 3,],[4, 5, 6]];
console.log(full.reduce((a, b) => a.concat(b)));
//

//Задание 10
let arraySum = [3,2,6,8,1];
for(i = 0; i < arraySum.length - 1; i++) {
    console.log(arraySum[i] + arraySum[i + 1]);
}
//

//Задание 11
let arraySquareNum = [13, 21, 9, 2, 5];
console.log(arraySquareNum.map(n => n**2));
//

//Задание 12
let arrayStrongs = ['Учёба в кайф', 'Я прозрел', '', 'Круто'];
let arrayStrongsNum = []
for (i = 0; i < arrayStrongs.length; i++) {
    arrayStrongsNum.push(arrayStrongs[i].length);
}
console.log(arrayStrongsNum);
//

//Задание 13
let positive = [];
function filterPositive(positive) {
    return positive.filter(n => n < 0);
  }
  console.log(filterPositive([-1, 0, 5, -10, 56]));
  console.log(filterPositive([-25, 25, 0, -1000, -2]));
//

//Задание 14

//

//Задание 15

//