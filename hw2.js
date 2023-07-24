let a = 20;
alert(a);

let DateiPhone = 2007;
alert(DateiPhone);

let jsCreator = 'Brendan Eich';
alert(jsCreator); 

let b = 10;
let c = 2;
alert(b+c);
alert(b-c);
alert(b*c);
alert(b/c);

let result = 2**5;
alert(result);

let x = 9;
let y = 2;
alert(x%y);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt('Сколько вам лет?');
alert(age);

const user = {
	name: 'Bob',
	age: 32,
    isAdmin: true,
}

user['city of residence'] = true;
delete user['city of residence'];
let info = prompt(`Что вы хотите узнать о пользователе?`);
alert(user[info]);
console.log(user[info])

let name = prompt('Как Вас зовут?')
alert(`Привет, ${name}!`)