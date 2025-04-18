document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
  
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
  
    
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
  
    
    const apiUrl = 'https://fakestoreapi.com/products?limit=8';
  
    fetch(apiUrl)
        .then(response => response.json())
        .then(products => displayProducts(products))
        .catch(error => console.error('Error fetching products:', error));
  
    function displayProducts(products) {
        const productsContainer = document.querySelector('.products');
        productsContainer.innerHTML = ''; 
  
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
 



document.addEventListener('DOMContentLoaded', () => {
    const openForm = document.getElementById('openForm');
    const closeForm = document.getElementById('closeForm');
    const slideForm = document.getElementById('slideForm');
    const contactSlideForm = document.getElementById('contactSlideForm');

    openForm.addEventListener('click', () => {
        slideForm.classList.add('active');
    });

    closeForm.addEventListener('click', () => {
        slideForm.classList.remove('active');
    });

    contactSlideForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || message.length < 10) {
            alert('Please fill out all fields with valid information.');
            return;
        }

        alert("Your message has been sent successfully!");
        contactSlideForm.reset();
        slideForm.classList.remove('active');
    });
});
