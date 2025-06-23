// una lista de objetos 
let products = [
  {
    item: 'Calefon',
    brand: 'Orbis',
    price: 500000,
    used: true,
    img: 'img/calefon.jpg'
  },
  {
    item: 'Camiseta Seleccion Rumania',
    brand: 'Joma',
    price: 1500000,
    used: false,
    img: 'img/rumania.jpg'
  },
  {
    item: 'Bicicleta MTB',
    brand: 'Olmo',
    price: 350000,
    used: true,
    img: 'img/bicicleta.jpg'
  },
  {
    item: 'Playstation 2',
    brand: 'Sony',
    price: 100000,
    used: true,
    img: 'img/playstation.jpg'
  },
  {
    item: 'Cocina',
    brand: 'Orbis',
    price: 500000,
    used: true,
    img: 'img/cocina.jpg'
  },
  {
    item: 'Zapatillas',
    brand: 'Adidas',
    price: 300000,
    used: false,
    img: 'img/zapas.webp'
  },
  {
    item: '1 Kg de Manzanas',
    brand: 'Moño Azul',
    price: 3000,
    used: false,
    img: 'img/manzanas.webp'
  },
  {
    item: 'El celular de Tumulty',
    brand: 'Xiaomi',
    price: 5,
    used: true,
    img: 'img/tumulty.jpg'
  }
];

function createProduct(product) {
  let div = document.createElement('div');
  div.classList.add('product');
  let h3 = document.createElement('h3'); 
  let h4 = document.createElement('h4'); 
  let img = document.createElement('img')
  let h5 = document.createElement('h5'); 
  let p = document.createElement('p');
  h3.textContent = product.item; 
  h4.textContent = product.brand; 
  img.src = product.img;
  h5.textContent = '$ ' + product.price; 
  p.textContent = product.used ? 'Usado' : 'Nuevo'; // operador ternario 
  div.append(h3,h4,img,h5,p);
  return div;
}

function updateProducts(products) {
  let container = document.querySelector('.container');
  container.innerHTML = ''; // eliminar todo lo que está adentro de container
  // for of para loopear todos los elementos de un array
  for (let product of products) 
    container.append(createProduct(product));
}

updateProducts(products);