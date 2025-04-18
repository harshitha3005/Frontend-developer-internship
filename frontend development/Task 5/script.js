document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Load saved theme
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
      body.classList.add('dark-mode');
      themeToggle.textContent = '☀️';
  }

  // Theme toggle button click event
  themeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
          themeToggle.textContent = '☀️';
          localStorage.setItem('theme', 'dark');
      } else {
          themeToggle.textContent = '🌙';
          localStorage.setItem('theme', 'light');
      }
  });

  // Fetch and display products from Fake Store API
  const apiUrl = 'https://fakestoreapi.com/products?limit=8';

  fetch(apiUrl)
      .then(response => response.json())
      .then(products => displayProducts(products))
      .catch(error => console.error('Error fetching products:', error));

  function displayProducts(products) {
      const productsContainer = document.querySelector('.products');
      productsContainer.innerHTML = ''; // Clear existing static products

      products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');

          productCard.innerHTML = `
              <img src="${product.image}" alt="${product.title}" class="product-image">
              <div class="product-info">
                  <h3 class="product-title">${product.title}</h3>
                  <p class="product-price">₹${(product.price * 85).toFixed(0)}</p>
                  <p class="product-desc">${product.description}</p>
                  <button class="btn">Add to Cart</button>
              </div>
          `;

          productsContainer.appendChild(productCard);
      });
  }
});
