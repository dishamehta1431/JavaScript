const products = [
  {
    id: 1,
    name: "Oversized T-Shirt",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 1499,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
  },
  {
    id: 3,
    name: "Cargo Pants",
    price: 1299,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  },
  {
    id: 4,
    name: "Crop Top",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Baggy Jeans",
    price: 1399,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
  },
  {
    id: 6,
    name: "Hoodie",
    price: 1199,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
  },
  {
    id: 7,
    name: "White Sneakers",
    price: 1799,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 8,
    name: "Mini Shoulder Bag",
    price: 999,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
  {
    id: 9,
    name: "Sunglasses",
    price: 699,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
  {
    id: 10,
    name: "Analog Watch",
    price: 1599,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
  },
  {
    id: 11,
    name: "Graphic T-Shirt",
    price: 699,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
  },
  {
    id: 12,
    name: "Casual Sneakers",
    price: 1899,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    productList.innerHTML += `
      <div class="col-md-4 p-3">
        <div class="card product-card">
          <img 
            src="${product.image}" 
            class="product-img card-img-top" 
            alt="${product.name}"
          >

          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>

            <p class="card-text">
              Price: ₹${product.price}
            </p>

            <button 
              class="btn btn-card btn-primary" 
              onclick="addToCart(${product.id})"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

displayProducts();

function addToCart(productId) {
  try {
    let productItem = cart.find((product) => product.id === productId);

    if (productItem) {
      productItem.qty++;
      console.log("Product quantity updated:", productItem);
    } else {
      productItem = products.find((product) => product.id === productId);

      cart.push({
        ...productItem,
        qty: 1,
      });
    }

    updateLocalStorage();

    alert("Product added to cart successfully!");
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
}

function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function showCartItem() {
  const cartModal = document.getElementById("cartModal");

  const modal = new bootstrap.Modal(cartModal);

  modal.show();
  showCartData();
}

function showCartData() {
  const tableBody = document.getElementById("table-body");

  tableBody.innerHTML = "";

  cart.forEach((p, index) => {
    tableBody.innerHTML += `
    
    <tr>
      <td>${index + 1}</td>
      <td><img src=${p.image} class="cartProductImage" alt=${p.name}</img></td>
      <td>${p.name}</td>
      <td>${p.price}</td>
      <td>

      <div class="d-flex justify-content-center align-items-center gap-2 ">
      <button class="btn btn-cart-table1 ">+</button>
      
      <h5> ${p.qty}</h5>
      <button class="btn btn-cart-table2 ">-</button>

      </div>
      </td>
      <td>
      <h5>₹${p.qty * p.price}</h5>
      </td>
      <td> 
      <button class="btn btn-remove">Remove</button>
      </td>
      </tr>

    
    
    </tr>
    
    `;
  });
}
