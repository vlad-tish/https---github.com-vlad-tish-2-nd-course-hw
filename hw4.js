// Задание 1
let i = 4;
do {
    console.log('Привет!');
    i--;
} while (i>2);
// 

// Задание 2
let a = 1;
while(a < 6) {
    console.log(a);
    a++;
}
//

// Задание 3
let b = 7;
do {
    console.log(b);
    b++;
} while(b<28);
//

//Задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
}
for (let worker in obj) {
    alert(`${worker} - зарплата ${obj[worker]}`)
}
//

//Задание 5
for (let n = 1000, num = 0; true; n /= 2) {
    if (n < 50) {
    console.log(num);
    alert(5);
    break;
    } else {
        num++;
    }
}
//

// Задание 6
for (let dayFriday = 6; dayFriday <= 31; dayFriday++) { 
      if (dayFriday % 6 == 0) {
          alert(`Сегодня пятница, ${dayFriday}-е число. Необходимо подготовить отчет.`); 
      }
  }
// 