'use strict';
const productsBtn = document.querySelectorAll('.products__btn'); //Получаем все кнопки add to cart
const cartProductsList = document.querySelector('.cart-content'); //Получаем
const cart = document.querySelector('.header__topline-right-cart');//Получаем саму корзину
const cartQuantity = document.querySelector('.header__topline-right-count'); //Получаем счётчик товаров
const fullPrice = document.querySelector('.fullprice'); //Получаем ссылку на итоговую стоимость продуктов в корзине
let title = document.querySelector('.products__title');
let price = 0; //итоговое число которое будет пересчитываться
let count = 1;
let allProducts = [];

console.log(count);

/**
 * 
 * @returns Создаём генератор рандомного id к товарам
 */
const randomId = () => {
   return Math.random().toString(36).substring(2);
}

/**
 * 
 * @param {*} str 
 * @returns С помощью регулярного выражения убираем из цены точку, знак доллара и нули
 */
const priceWithoutSpaces = (str) => {
   return str.replace(/[^.\d]/g, '');
};
/**
 * 
 * @param {*} str 
 * @returns И обратно меняем как оно было!
 */
const normalPrice = (str) => {
   return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

productsBtn.forEach(el => { // Пробегаемся по всем кнопкам
   // Находим родителя productsBtn с помощью .closest('.products__item')
   // и добавляем аттрибут к каждому продукту .setAttribute data-id продуктам с помощью функции randomId
   el.closest('.products__item').setAttribute('data-id', randomId());
   el.addEventListener('click', (currentElem) => {
      let self = currentElem.currentTarget; // Текущий элемент по которому кликаем
      let parentProduct = self.closest('.products__item'); // при клике находим текущий продукт
      let id = parentProduct.dataset.id // при клике получаем дата аттрибут id
      // Получаем c помощью .getAttribute('src') изображение при клике
      let img = parentProduct.querySelector('.products__img-card').getAttribute('src');
      let title = parentProduct.querySelector('.products__title').textContent; // Получим название товара
      // Получаем цену товара в целом числовом варианте  без знака доллара и точки
      let priceNumber = parseInt(priceWithoutSpaces(parentProduct.querySelector('.products__price').textContent));

      if (allProducts.length == 0) {
         makeElem(id, priceNumber, img, title, priceNumber)
      }
      else {
         let elemAvaliable = false;
         allProducts.forEach(element => {
            if (element.id === id) {
               element.count++;
   // Пересчитываем свойство объекта ПРИ ДОБАВЛЕНИИ К ИМЕЮЩИМУСЯ - итоговая цена, получаемая цена * кличество
               element.total = element.price * element.count;
               getFullPrice();
               document.querySelector('.cart-product__count').textContent = `${element.count} шт.`;
               elemAvaliable = true;
               // console.log(allProducts)
               // plusFullPrice(priceNumber);
               // printFullPrice();
               
               
               // return;
            }
         })
         // console.log(elemAvaliable)
         if (elemAvaliable === false) {
            makeElem(id, priceNumber, img, title)
            getFullPrice();
            // console.log(allProducts)
         }
      };

   });
});


function makeElem(id, priceNumber, img, title) {
  if(!cartProductsList.classList.contains('active')){
   cartProductsList.classList.toggle('active')
  }
   let currentElem = {};
   currentElem.id = id;
   currentElem.count = count;
   currentElem.price = priceNumber;
   // Добавил свойство объекта ПРИ СОЗДАНИИ - итоговая цена, получаемая цена * кличество
   currentElem.total = priceNumber * count;
   allProducts.push(currentElem);
   // printQuantity();
   // plusFullPrice(priceNumber);
   // printFullPrice();
   cartProductsList.insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id));
   // cartProductsList.querySelector('.simplebar-content')
   getFullPrice();

   
}

// // При добавление продукта в корзину сумма будет суммироваться +
// const plusFullPrice = (currentPrice) => {
   
//    return price += currentPrice;
   
// };

// При удалении продукта из корзины сумма будет суммироваться -
// const minusFullPrice = (currentPrice) => {
//    // return price -= currentPrice;

// };

const getFullPrice = () => {
   let arr = [];
   allProducts.forEach((elem) =>{
       arr.push(elem.total);
   })
   let res = arr.reduce(function(accum, elem){
      return accum += elem;
   });
   fullPrice.textContent = res;
}


//Количество элементов внутри в корзине
// const printQuantity = () => {
//    let length = cartProductsList.querySelector('.simplebar-content').children.length;
//    cartQuantity.textContent = length;
//    if (length > 0) {
//       cartProductsList.classList.add('active');
//    } else {
//       cartProductsList.classList.remove('active');
//    };
//    // length > 0 ? cart.classList.add('active') : cart.classList.remove('active');
// };

// // Выводим общую стоимость в корзине
// const printFullPrice = () => {
//    fullPrice.textContent = `$${normalPrice(price)}`;

// };

/**
 *  Вставляем разметку, при добавлении товаров в корзину
 * @param {*} img 
 * @param {*} title 
 * @param {*} price 
 * @param {*} id 
 * 
 * @returns 
 */
const generateCartProduct = (img, title, price, id) => {
   return `
		<li class="cart-content__item list">
			<article class="cart-content__product cart-product" data-id="${id}">
				<img src="${img}" alt="" class="cart-product__img" width="70px" height="70px">
				<div class="cart-product__text">
					<h3 class="cart-product__title">Название товара ${title}</h3>
               <div class="cart-product__count">${count} Шт</div>
					<span class="cart-product__price">Цена $${normalPrice(price)}</span>
				</div>
				<button class="cart-product__delete">Удалить товар</button>
			</article>
		</li>
	`;
};

/**
 * 
 * @param {*} productParent Функция удаление продуктов из корзины
 */
const deleteProducts = (productParent) => {
   // let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price').textContent));
   // let res = [];
   // allProducts.forEach(element => {
   //    let id = productParent.querySelector('.cart-product').dataset.id;
   //    if (element.id == id) {
   //       let preres = allProducts.indexOf(element);
   //      res = allProducts.splice(preres);
   //    }
   // })
   // minusFullPrice(currentPrice);
   // printFullPrice();

  
   // console.log(allProducts.indexOf(productParent))
   console.dir(productParent)
   allProducts.forEach((elem) =>{
      if(elem.id == productParent.dataset.id){
         elem.count = 0;
         elem.total = elem.price * elem.count;
         let ind = allProducts.indexOf(elem);
         allProducts.splice(ind, 1);
      }
   })
   productParent.closest('.cart-content__item').remove();
   // productParent.remove();
   // printQuantity();
   if(allProducts != 0){
      getFullPrice();
   } else {
      cartProductsList.classList.toggle('active')
   }
   
   
};

cartProductsList.addEventListener('click', (event) => {
   if (event.target.classList.contains('cart-product__delete')) {
      deleteProducts(event.target.parentElement);
      // Получал не тот элемент
      // deleteProducts(event.target.closest('.cart-content__item'));
   }
});
