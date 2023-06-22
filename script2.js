

var products = [
    { id: 1, name: 'Shirt', price: 20 },
    { id: 2, name: 'Jeans', price: 30 },
    { id: 3, name: 'Shoes', price: 50 },
    { id: 4, name: 'Hat', price: 15 },
    { id: 5, name: 'Sneakers', price: 100 },
    { id: 6, name: 'Jacket', price: 123 },
  ];

  var filterButton = document.getElementById('filterButton');
  var filterInput = document.getElementById('filterInput');
  var productList = document.getElementById('productList');

  filterButton.addEventListener('click', function() {
    var userInput = parseFloat(filterInput.value);

    // Clear the current list
    productList.innerHTML = '';

    // Filter and display the products
    var filteredProducts = products.filter(function(product) {
      return product.price <= userInput;
    });

    filteredProducts.forEach(function(product) {
      var listItem = document.createElement('li');
      listItem.textContent = product.name + ' - $' + product.price;
      productList.appendChild(listItem);
    });
  });