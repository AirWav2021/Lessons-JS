'use strict';


//Задача 1

for (let i = 0; i < 11; i++) {
   if (i % 2 == 0) {
      console.log(`${i} - это четное число`);
   }
   else {
      console.log(`${i} - это нечетное число`);
   }
};

//Задача 2

const post = {
   author: "John", //вывести этот текст
   postId: 23,
   comments: [
      {
         userId: 10,
         userName: "Alex",
         text: "lorem ipsum",
         rating: {
            likes: 10,
            dislikes: 2 //вывести это число
         }
      },
      {
         userId: 5, //вывести это число
         userName: "Jane",
         text: "lorem ipsum 2", //вывести этот текст
         rating: {
            likes: 3,
            dislikes: 1
         }
      },
   ]
}
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задача 3

const products = [
   {
      id: 3,
      price: 200,
   },
   {
      id: 4,
      price: 900,
   },
   {
      id: 1,
      price: 1000,
   },
];

products.forEach(product => product.price -= product.price * 0.15);

//products.map(product => product.price -= product.price * 0.15); так же с помощью map тоже можно перебрать элементы

console.log(products);

// Задача 4

const allProducts = [
   {
      id: 3,
      price: 127,
      photos: [
         "1.jpg",
         "2.jpg",
      ]
   },
   {
      id: 5,
      price: 499,
      photos: []
   },
   {
      id: 10,
      price: 26,
      photos: [
         "3.jpg"
      ]
   },
   {
      id: 8,
      price: 78,
   },

];

// Вывод объектов в котором содержатся photo

const productsWithoutPhotos = allProducts.filter(item_product =>
   item_product.photos && item_product.photos.length > 0); // && item_product.photos.length > 0 проверка на пустой массив

console.log(productsWithoutPhotos);

// Сортировка по цене
allProducts.sort((product1, product2) => product1.price - product2.price);

console.log(allProducts);

// Задача 5** вывод чисел не используя тело цикла

for (let i = 0; console.log(i), i++ < 9;) {
};

//Задача 6 вывод пирамиды

for (let x = 'x'; x.length <= 20; x += 'x') {

   console.log(x);
}