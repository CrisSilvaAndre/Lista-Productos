// Para comenzar, un producto se creara en la lista de forma random pero con una letra como nombre
const products = [
  {
    name: "Producto A",
    price: 10.99,
    description: "Descripción breve del Producto A."
  },
  {
    name: "Producto B",
    price: 15.5,
    description: "Descripción breve del Producto B."
  },
  {
    name: "Producto C",
    price: 7.75,
    description: "Descripción breve del Producto C."
  }
];
// Asi sera la estructura basica de los productis, nombre, costo y descripcion

const productList = document.getElementById('product-list');
const addProductBtn = document.getElementById('add-product-btn');

// Función para renderizar la lista completa
function renderProducts() {
  
  productList.innerHTML = '';

  products.forEach(product => {
    // Crear elemento li
    const li = document.createElement('li');

    // Usamos plantilla para el contenido
    li.innerHTML = `
      <strong>${product.name}</strong> - $${product.price.toFixed(2)}<br />
      <em>${product.description}</em>
    `;

    productList.appendChild(li);
  });
}

// Con esta se creara mas productos con la anterior estructura
function addProduct() {
  const newProduct = {
    name: `Producto ${String.fromCharCode(65 + products.length)}`, // Producto D, E, F...
    price: (Math.random() * 20 + 5).toFixed(2),
    description: "Descripción breve del nuevo producto."
  };

  newProduct.price = parseFloat(newProduct.price);

  products.push(newProduct);
  renderProducts();
}

// Render inicial
renderProducts();

// Evento para el botón
addProductBtn.addEventListener('click', addProduct);
