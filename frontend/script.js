// frontend/script.js
window.onload = function () {
  fetch("http://localhost:5000/api/products")
    .then((response) => response.json())
    .then((data) => {
      const productContainer = document.getElementById("product-container");
      data.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
                  <img src="${product.image}" alt="${product.name}">
                  <h3>${product.name}</h3>
                  <p>${product.description}</p>
                  <div class="price">$${product.price}</div>
              `;
        productContainer.appendChild(productElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};
