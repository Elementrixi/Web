const form = document.querySelector('.orders__form');
const kayakTypeSelect = document.querySelector('select[name="kayaks_type"]');
const hoursInput = document.querySelector('input[name="hours"]');
const quantityInput = document.querySelector('input[name="quantity"]');
const totalPriceButton = document.querySelector('.buttons__total');
const buyButton = document.querySelector('.buttons__buy');

const kayakPrices = {
  одинарний: 100,
  двомісний: 200,
  трьохмісний: 300
};

function calculateTotalPrice() {
  const selectedKayakType = kayakTypeSelect.value;
  const hours = parseInt(hoursInput.value);
  const quantity = parseInt(quantityInput.value);
  
  const pricePerHour = kayakPrices[selectedKayakType];
  const totalPrice = (quantity * pricePerHour) * hours;
  
  totalPriceButton.textContent = `Загальна ціна: ${totalPrice}$`;
}
buyButton.addEventListener('click', calculateTotalPrice);

buyButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  const nameInput = document.querySelector('input[type="text"]');
  const phoneInput = document.querySelector('input[type="tel"]');
  
  const name = nameInput.value;
  const phone = phoneInput.value;
  const quantity = parseInt(quantityInput.value);
  const kayakType = kayakTypeSelect.value;
  const hours = parseInt(hoursInput.value);
  const totalPrice = (quantity * kayakPrices[kayakType]) * hours;
  
  const orderData = {
    name: name,
    phone: phone,
    quantity: quantity || 0,
    kayakType: kayakType,
    hours: hours || 0,
    totalPrice: totalPrice || 0
  };
  
  console.log(orderData);
});


const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__rigth");
const menu_open = document.querySelector(".header__open");

burger.addEventListener("click", function() {
  menu_open.classList.toggle("header__open");
});
