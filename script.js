let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick= ()=>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick= ()=>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

let loginform = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick= ()=>
{
    loginform.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick= ()=>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
}

window.onscroll = ()=>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}



// Define your pantry data structure (you can add more items)
const pantryItems = [
  { name: "Orange", quantity: "5kg" },
  { name: "Lettuce", quantity: "1kg" },
  { name: "Potato", quantity: "10kg" },
  { name: "Avocado", quantity: "8pc" },
  { name: "Onion", quantity: "10kg" },
  { name: "Chicken", quantity: "10kg" },
];

// Add an event listener to the search form
searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  const searchBox = document.querySelector('#search-box');
  const searchTerm = searchBox.value.toLowerCase();

  // Search the pantry for the entered item
  const foundItem = pantryItems.find((item) => item.name.toLowerCase() === searchTerm);

  if (foundItem) 
  {
    alert(`Item "${foundItem.name}" is in our pantry with a quantity of ${foundItem.quantity}.`);
  } 
  else 
  {
    alert("Out of stock.Item not found in our pantry.");
  }

  searchForm.classList.remove('active'); // Close the search form
  searchBox.value = ''; // Clear the search box
});


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 4,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});