const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();


// Получаем элементы модальных окон и кнопок
const orderModal = document.getElementById('orderModal');
const reserveModal = document.getElementById('reserveModal');
const orderBtn = document.getElementById('orderBtn'); // Кнопка для открытия заказа
const reserveBtn = document.getElementById('reserveBtn'); // Кнопка для открытия бронирования
const closeOrder = orderModal.querySelector('.close'); // Кнопка закрытия заказа
const closeReserve = reserveModal.querySelector('.close'); // Кнопка закрытия бронирования

// Открыть модальное окно "Заказ онлайн"
orderBtn.addEventListener('click', function() {
    orderModal.style.display = 'flex'; // Flex для центрирования
});

// Открыть модальное окно "Бронирование"
reserveBtn.addEventListener('click', function() {
    reserveModal.style.display = 'flex'; // Flex для центрирования
});

// Закрыть модальное окно "Заказ онлайн"
closeOrder.addEventListener('click', function() {
    orderModal.style.display = 'none';
});

// Закрыть модальное окно "Бронирование"
closeReserve.addEventListener('click', function() {
    reserveModal.style.display = 'none';
});

// Закрытие окна при клике вне его
window.addEventListener('click', function(event) {
    if (event.target === orderModal) {
        orderModal.style.display = 'none';
    }
    if (event.target === reserveModal) {
        reserveModal.style.display = 'none';
    }
});



const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close-modal');
const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;

// Открытие модального окна при клике на кнопку "Войти"
loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
});

// Закрытие модального окна при клике на кнопку закрытия
closeModal.addEventListener('click', function() {
    loginModal.style.display = 'none';
});

// Закрытие модального окна при клике вне формы
window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Переключение форм внутри модального окна
signUpBtn.addEventListener('click', function () {
    formBox.classList.add('active');
    body.classList.add('active');
});

signInBtn.addEventListener('click', function () {
    formBox.classList.remove('active');
    body.classList.remove('active');
});