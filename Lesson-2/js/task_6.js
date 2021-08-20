'use strict';
/*
 * Функция возвращает верный падеж для слова "рубль", в зависимости
 * от переданного числа.
 */

let number = prompt('Какое число Вы хотите положить в банк?');
const count = number;

const CountForm = (number, titles) => {
   number = Math.abs(number);
   if (Number.isInteger(number)) {
      const cases = [2, 0, 1, 1, 1, 2];
      return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

   }

   return titles[1];

}
const resultRuble = (CountForm(count, ['рубль', 'рубля', 'рублей']));
alert(`Ваша сумма ${number} ${resultRuble} успешно зачислена.`);