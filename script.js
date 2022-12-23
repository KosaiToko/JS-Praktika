'use strict'

//№1
let minute = 30;
if (minute >= 0 && minute <= 14) {
    console.log('Первая четверть')
} else if (minute >= 15 && minute <= 29){
    console.log('Вторая четверть')
} else if (minute >= 30 && minute <= 44) {
    console.log('Третья четверть')
} else {
    console.log('Четвертая четверть')
}

//№2
let lang = 'en',
ruarr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
enarr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
i = 0;
if (lang == 'ru') {
    for(i = 0; i < ruarr.length; i++){
        console.log(ruarr[i])
    }
} else if (lang == 'en') {
    for(i = 0; i < enarr.length; i++){
        console.log(enarr[i])
    }
}

//№3
let num = prompt('Введите число: '),
str = 'Число ' + num;

if (num >= 0 && num.length == 1) {
    str += " однозначное"
} else if (num >= 0 && num.length == 2) {
    str += " двузначное"
} else if (num >= 0 && num.length == 3) {
    str += " трехзначное"
} else if (num < 0 && num.length == 2) {
    str += " однозначное"
} else if (num < 0 && num.length == 3) {
    str += " двузначное"
} else if (num < 0 && num.length == 4) {
    str += " трехзначное"
}
if (num >= 0 ) {
    str += " положительное"
} else {
    str += " отрицательное"
}
console.log(str)

//Задание 4
let red = 'no',
yellow = 'no',
green;
if (red == 'no' && yellow == 'no') {
    green = 'yes';
}else {
    green = 'no';
} if (green == 'yes') {
    console.log('Горит зелёный свет, переходи дорогу!')
}

//5
let col1 = 1;
for (col1; col1 <= 12; col1++){
    console.log(col1);
}

//6
let col2 = 5;
for (col2; col2 <= 13; col2++){
    console.log(col2);
}

//7
let col3 = 0;
for (col3; col3 <= 16; col3++){
    if(col3 % 2 == 0){
        console.log(col3);
    }
}

//8
let col4 = [2,5,8,3,6],
sum = 0;
for (let i = 0; i < col4.length; i++){
    sum += col4[i];
}
console.log(sum);