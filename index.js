const modal = document.getElementById("loginModal");
const closeModal = document.querySelector(".close");
const loginButton = document.getElementById("modalLoginButton");
const registerButton = document.getElementById("modalRegisterButton");
const modalTitle = document.getElementById("modalTitle");
const loginFields = document.getElementById("loginFields");
const registerFields = document.getElementById("registerFields");

// // Открытие модального окна с формой входа
// function openLoginModal() {
//     modal.style.display = "block";
//     modalTitle.textContent = "Вход";
//     loginFields.style.display = "flex";
//     registerFields.style.display = "none";
//     loginButton.style.display = "block";
//     registerButton.textContent = "Зарегистрироваться";
// }

// // Открытие модального окна с формой регистрации
// function openRegisterModal() {
//     modal.style.display = "block";
//     modalTitle.textContent = "Регистрация";
//     loginFields.style.display = "none";
//     registerFields.style.display = "flex";
//     loginButton.style.display = "none";
//     registerButton.textContent = "Войти";
// }

// Открытие модального окна с формой входа
function openLoginModal() {
    modal.style.display = "block";
    modalTitle.textContent = "Вход";
    loginFields.style.display = "flex";
    registerFields.style.display = "none";
    
    // Настройка кнопок для формы входа
    loginButton.style.display = "block";
    loginButton.setAttribute('type', 'submit'); // Устанавливаем тип кнопки
    loginButton.classList.add('login-button'); // Применяем стиль для кнопки submit
    loginButton.classList.remove('register-button');

    registerButton.textContent = "Зарегистрироваться";
    registerButton.setAttribute('type', 'button'); // Устанавливаем тип кнопки
    registerButton.classList.add('register-button'); // Применяем стиль для кнопки button
    registerButton.classList.remove('login-button');
    registerButton.onclick = openRegisterModal;
}

// Открытие модального окна с формой регистрации
function openRegisterModal() {
    modal.style.display = "block";
    modalTitle.textContent = "Регистрация";
    loginFields.style.display = "none";
    registerFields.style.display = "flex";
    
    // Настройка кнопок для формы регистрации
    loginButton.style.display = "block";
    loginButton.textContent = "Войти";
    loginButton.setAttribute('type', 'button'); // Устанавливаем тип кнопки
    loginButton.classList.add('register-button'); // Применяем стиль для кнопки button
    loginButton.classList.remove('login-button');
    loginButton.onclick = openLoginModal;

    // Изменяем тип кнопки Зарегистрироваться на submit
    registerButton.setAttribute('type', 'submit');
    registerButton.classList.add('login-button'); // Применяем стиль для кнопки submit
    registerButton.classList.remove('register-button');
}



// Закрытие модального окна
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь нажимает где-либо вне модального окна, закрываем его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




// Когда пользователь нажимает на ссылку, открываем модальное окно
const btn = document.getElementById("loginLink");
btn.onclick = function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    openLoginModal(); // Открываем модальное окно с формой входа
};


// Когда пользователь нажимает на <span> (x), закрываем модальное окно
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
};
// Переключение между формой входа и регистрации
registerButton.onclick = function() {
    if (modalTitle.textContent === "Вход") {
        openRegisterModal();
    } else {
        openLoginModal();
    }
};

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
};

// Когда пользователь нажимает где-либо вне модального окна, закрываем его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
