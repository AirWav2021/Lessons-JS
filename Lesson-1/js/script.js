
const goods = [
   { id: "0001", image: "img/burger-1.png", title: 'Burger-1', price: 223 },
   { id: "0002", image: "img/burger-1.png", title: 'Burger-2', price: 107 },
   { id: "0003", image: "img/burger-1.png", title: 'Burger-3', price: 35 },
   { id: "0004", image: "img/burger-1.png", title: 'Burger-4', price: 110 },
   { id: "0005", image: "img/burger-1.png", title: 'Burger-5', price: 220 },
   { id: "0006", image: "img/burger-1.png", title: 'Burger-6', price: 32 },
   { id: "0007", image: "img/burger-1.png", title: 'Burger-7', price: 105 },
   { id: "0008", image: "img/burger-1.png", title: 'Burger-8', price: 99 },
   { id: "0009", image: "img/burger-1.png", title: 'Burger-9', price: 126 },

];



const renderGoodsItem = (id = 'none', image = "img/burger-1.png", title = "Burger", price = 0) =>
   `<article class="products__item" id="${id}">
   <div class="products__img">
      <img class="products__img-card" src=${image} alt="${title}">
      <div class ="products__overlay">
      <button class ="products__btn">
      <img class ="products__icon-cart" src="img/icon-cart.svg" alt="icon-cart">в корзину
      </button>
      </div>
   </div>
   <div class="products__content-title">
      <h3 class="products__title">${title}</h3>
      <p class="products__descr">булочка, разрезанная пополам, 
      внутри которой вложена сочная котлета, 
      приправленная свежими овощами и соусом</p>
      <span class="products__price">$${price}</span>
   </div>
</article>`;


const renderGoodsList = (list) => {
   let goodsList = list.map(item => renderGoodsItem(item.id, item.image, item.title, item.price)).join('');
   document.querySelector('.products__items').innerHTML = goodsList;

}

renderGoodsList(goods);

