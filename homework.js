//1.Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'.
let a = 2
if (a > 0){
console.log('Верно!');
}
else if (a > 5) {
console.log('Неверно!'); 
};

//2.Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, 
// то выведите 'Верно', в противном случае выведите в косноль 'Неверно'.

let с = 5
let b = 13
if(с>2, b>=6 ) {
    console.log('Верно!');
}
else if (с>11, b<14) {
    console.log('Верно!');
}
else {
    console.log('Неверно!');
};

// 3.В переменной month лежит какое-то число из интервала от 1 до 12. 
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). Ответ выведите в консоль
let month = 12
if (month >= 3 && month < 6){
    console.log('Весна');
}
else if (month >= 6 && month < 9){
    console.log('Лето');
}
else if (month >= 9 && month < 12){
    console.log('Осень');
}
else if (month == 1 || month == 2 || month == 12){
    console.log('Зима');
}
else {
    console.log("Неправильно введено число")
};

//4. В программе объявлены три переменные a, b и c, в которые записаны числовые значения.
//  Определите максимальное значение и выведите его в консоль.
// Методом max пользоваться нельзя.

let d = 32
let e = 5
let f = 14
if(d>e && d>f) {
    console.log(d);
}
else if (e>d && e>f ){
    console.log(e);
}
else if (f>d && f>e){
    console.log(f);
};


// 5.В программе объявлены три переменные: a, b и sign. Переменные a и b хранят численное значение. 
// Переменная sign - строковое значение, которое отражает математический знак, например: (+,-,/,*). 
// Необходимо написать простой калькулятор, который в зависимости от значения переменной sign будет совершать 
// соответствующие математические операции с переменными a и b. 
// В случаи попытки поделить на 0 программа должна выводить в консоль сообщение: “делить на 0 нельзя”.
let h = 2
let j = 6
let sign = "*"
if(sign = "*") {
    console.log(h*j);
};

if(sign = "+") {
    console.log (h+j);
};

if(sign ="/" && j==0 || h==0 ) {
    console.log ("делить на 0 нельзя");
};

// 6.В программе объявлены две переменные — temp и weather. Объявите переменную activity и присвойте ей значение по следующему правилу:
// если значение переменной temp больше либо равно 25, 
// a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "golf";
// если значение переменной temp от 10 до 24, a переменная weather имеет значение "clear", 
// тогда значение переменной activity должно быть "bowling";
// в ином случае значение переменной activity должно быть "hiking"
let temp = 25
let weather = "clear"
let act;
if (temp >= 20 && weather === "clear"){
    act = "golf";}
else if ((temp >= 10 && temp <= 19) || weather === "cloudy") {
    act = "bowling";}
    else {
        act = "hiking";
        }


console.log(act);


