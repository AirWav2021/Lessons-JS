'use strict';
/*1. Задать температуру в градусах по Цельсию. Вывести в 
alert соответствующую температуру в градусах по 
Фаренгейту. Подсказка: расчёт идёт по формуле: 
Tf = (9 / 5) * Tc + 32, где Tf – температура по 
Фаренгейту, Tc – температура по Цельсию*/

let Tc = 32;
let Tf = (9 / 5) * Tc + 32;
alert(Tf);

/* 2. Объявить две переменные: admin и name. Записать в name строку "Василий". Скопировать
значение из name в admin. Вывести в консоль переменную admin (должно вывести "Василий") */

let name = 'Василий';
let admin = name;
console.log(admin);

/* 3. Вывести в консоль значения выражений и объяснить почему получились такие значения
используя комментарии к каждому выражению: */

// ВАЖНО если хотя бы один операнд является строкой, то второй будет также преобразован в строку!!!


let result = 10 + 10 + "10";
console.log(typeof result);
console.log(result);
/*
операторы работают один за другим
1. Первый + складывает два числа и возвращает 20
2.  следующий + объединяет результат со строкой, производя действие 20 + '10' = 2010
3. с помощью console.log выводим в console и получаем значение как строка 2010 переменной result
*/
let result2 = 10 + "10" + 10;
console.log(typeof result2);
console.log(result2);
/*
1. Первый + складывает число 10 со строкой 10  и возвращает 1010
2.  следующий + объединяет результат с числом 10, производя действие 1010 + 10 = 101010
3. с помощью console.log выводим в console и получаем значение как строка 101010 переменной result2
*/
let result3 = 10 + 10 + +"10";
console.log(typeof result3);
console.log(result3);
/*
1. Первый + складывает число 10 с числом 10  и возвращает 20
2.  следующий унарный + приводит строку в число и объединяет результат с числом 20, производя действие 20 + 10 = 30
3. с помощью console.log выводим в console и получаем значение как число 30 переменной result3
*/
let result4 = 10 / -"";
console.log(typeof result4);
console.log(result4);
/*
1. Первый операнд с числом 10 делит на приведённый с помощью унарного - 'получаем -0'
2. с помощью console.log выводим в console и получаем значение как число -Infinity переменной result4
*/
let result5 = 10 / +"2,5";
console.log(typeof result5);
console.log(result5);
/*
1. Оператор запятая выполняет каждый из его операндов (слева направо) и возвращает значение последнего операнда
2.  мы не можем оператор запятую привести к числу поэтому и получим NaN а деления не произойдёт!
3. Дробные числа должны быть объявлены через точку
*/