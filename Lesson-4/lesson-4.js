'use strict';

// ЗАДАНИЕ 1
/* Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:  */

class SelectNum {

   constructor(num) {
      if (!Number.isInteger(num)) {
         return alert('Должно быть целое число');
      }

      if (typeof num == 'number' && num >= 0 && num <= 999) {
         this.units = num % 10;
         this.tens = Math.floor(num / 10 % 10);
         this.hundreds = Math.floor(num / 100);

      }
      else {
         alert('Число должно быть не больше 999');
      }
   }
}

const num1 = new SelectNum(+prompt('Введите число не больше 999'));

console.log(num1);
document.querySelector('.test').innerHTML = num;


//ЗАДАНИЕ 1.1


/** ES5
 * 
 * @param {*} name имя продукта
 * @param {*} price цена со скидкой 25%
 */
function Product(name, price) {
   this.name = name;
   this.price = price;
}

const sale = new Product('Кросовки Nike', 5999);


Product.prototype.make25PercentDiscount = function () {
   this.price -= (this.price / 100 * 25);
};

sale.make25PercentDiscount();
console.log(sale);


class Product2 {
   constructor(name, price) {
      this.name = name;
      this.price = price;
   }
   make25PercentDiscount() {
      this.price -= (this.price / 100 * 25);
   }
}
const sale2 = new Product2('Кросовки Nike', 5999);
sale2.make25PercentDiscount();
console.log(sale2);


//ЗАДАНИЕ 1.2

function Post(author, text, date) {
   this.author = author;
   this.text = text;
   this.date = date;
}

Post.prototype.edit = function (someText) {
   this.someText = someText;
}

const newPost = new Post('Mark', 'new user', new Date()); //создали новый пост
newPost.edit('lorem lorem lorem lorem lorem'); //отредактировали текст в посте
console.log(newPost);


function AttachedPost(author, text, date) {
   Post.call(this, author, text, date);
   this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () { //метод makeTextHighlighted, который будет назначать свойству highlighted значение true  
   this.highlighted = true;
}

const attachedPost = new AttachedPost('admin', 'lorem2 ipsum2', new Date());
attachedPost.makeTextHighlighted();
attachedPost.edit('lorem lorem lorem lorem lorem222');
console.log(attachedPost);


//ЗАДАНИЕ 1.2 ES6

class Post2 {
   constructor(author, text, date) {
      this.author = author;
      this.text = text;
      this.date = date;
   }

   edit(text) { //создаём метод edit, который будет принимать текст и записывать его в свойство text объекта конструктора Post2
      this.text = text;
   }
}

const newPost2 = new Post2('Mark', 'web-developer', new Date());
newPost.edit('lorem lorem lorem lorem');
console.log(newPost2);

class AttachedPost2 extends Post2 { //наследуем свойста из Post2 
   constructor(author, text, date) {
      super(author, text, date);
      this.highlighted = false; //создаём свой объект
   }

   makeTextHighlighted() { //метод makeTextHighlighted, который будет назначать свойству highlighted значение true  
      this.highlighted = true;
   }
}

const attachedPost2 = new AttachedPost2('admin', 'other text', new Date());
console.log(attachedPost2);
attachedPost2.makeTextHighlighted();
attachedPost2.edit('other text22222');
console.log(attachedPost2);