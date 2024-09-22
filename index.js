const modal = document.getElementById("loginModal");
const closeModal = document.querySelector(".close");
const loginButton = document.getElementById("modalLoginButton");
const registerButton = document.getElementById("modalRegisterButton");
const modalTitle = document.getElementById("modalTitle");
const loginFields = document.getElementById("loginFields");
const registerFields = document.getElementById("registerFields");

const addmodal = document.getElementById("new-topic-modal");
const addTopicBtn = document.getElementById("add-topic-btn");
const closeBtn = document.getElementsByClassName("close")[0];
const submitTopicBtn = document.getElementById("submit-topic-btn");

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



// Открыть модальное окно при нажатии на кнопку
addTopicBtn.addEventListener("click", function() {
    addmodal.style.display = "block";
});

// Закрыть модальное окно при нажатии на крестик
closeBtn.addEventListener("click", function() {
    addmodal.style.display = "none";
});

// Закрыть модальное окно при клике вне окна
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        addmodal.style.display = "none";
    }
});

// Обработка отправки новой темы (пока без отправки на сервер)
submitTopicBtn.addEventListener("click", function() {
    const topicText = document.getElementById("topic-text").value.trim();
    const topicTitle = document.getElementById("topic-title").value.trim();

    if (topicText !== "" && topicTitle !== "") {
        // Пример обработки данных новой темы
        console.log("Тема добавлена:", topicTitle, topicText);

        // Можно добавить тему в список сообщений
        const newTopic = document.createElement("li");
        newTopic.innerHTML = `<strong>${topicTitle}</strong>: ${topicText}`;
        document.getElementById("messages").appendChild(newTopic);

        // Очистить поля
        document.getElementById("topic-text").value = "";
        document.getElementById("topic-title").value = "";

        // Закрыть окно после отправки
        addmodal.style.display = "none";
    } else {
        alert("Пожалуйста, заполните оба поля");
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const discussionListItems = document.querySelectorAll("#discussion-list li");
    const discussionTitle = document.getElementById("discussion-title");
    const messagesList = document.getElementById("messages-list");
    const messageDetail = document.getElementById("message-detail");
    const messagesContainer = document.getElementById("messages");
    const messageTitle = document.getElementById("message-title");
    const messageText = document.getElementById("message-text");
    const commentsSection = document.getElementById("comments-section");
    const commentField = document.getElementById("new-comment");
    const addCommentButton = document.getElementById("add-comment");

    

    // Пример структуры данных для сообщений
    const messagesData = {
        type1: [
            { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", comments: [] },
            { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", comments: [] }
        ],
        type2: [
            { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", comments: [] },
            { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Текст сообщения 4", comments: [] }
        ],
        type3: [
            { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", comments: [] },
            { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Текст сообщения 4", comments: [] }
        ],
        type4: [
            { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", comments: [] },
            { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Текст сообщения 4", comments: [] }
        ],
    };

    let currentMessages = [];
    let currentMessageIndex = null;

    // Обработчик выбора типа станка
    discussionListItems.forEach(item => {
        item.addEventListener("click", function() {
            const type = this.getAttribute("data-type");

            // Обновляем заголовок
            discussionTitle.textContent = `Сообщения по типу: ${type}`;

            // Отображаем список сообщений
            currentMessages = messagesData[type] || [];
            messagesContainer.innerHTML = currentMessages.map((msg, index) => 
                `<li data-index="${index}">${msg.title}</li>`
            ).join("");
            
            // Показываем список сообщений и скрываем детали сообщения
            messagesList.style.display = "block";
            messageDetail.style.display = "none";
        });
    });

    // Обработчик выбора конкретного сообщения
    messagesContainer.addEventListener("click", function(event) {
        const target = event.target;
        if (target.tagName === "LI") {
            const index = target.getAttribute("data-index");
            currentMessageIndex = index;

            const message = currentMessages[index];
            messageTitle.textContent = message.title;
            messageText.textContent = message.text;

            // Загружаем комментарии
            loadComments(message.comments);

            // Показываем детали сообщения и скрываем список сообщений
            messagesList.style.display = "none";
            messageDetail.style.display = "block";
        }
    });

    // Обработчик добавления комментария
    addCommentButton.addEventListener("click", function() {
        const commentText = commentField.value.trim();

        if (commentText !== "" && currentMessageIndex !== null) {
            // Создаем новый элемент комментария
            const newComment = document.createElement("div");
            newComment.classList.add("comment");
            
            // Добавляем текст комментария
            newComment.innerHTML = `<p><strong>Пользователь:</strong> ${commentText}</p>`;

            // Создаем блок с иконками действий
            const commentActions = document.createElement("div");
            commentActions.classList.add("comment-actions");

            commentActions.innerHTML = `
                <span><i class="fas fa-thumbs-up"></i> Лайк</span>
                <span><i class="fas fa-thumbs-down"></i> Дизлайк</span>
                <span><i class="fas fa-star"></i> Избранное</span>
                <span><i class="fas fa-flag"></i> Жалоба</span>
                <span><i class="fas fa-link"></i> Скопировать ссылку</span>
            `;

            // Добавляем блок иконок под текстом комментария
            newComment.appendChild(commentActions);

            // Добавляем новый комментарий в секцию комментариев
            commentsSection.appendChild(newComment);

            // Сохраняем комментарий в соответствующем сообщении
            currentMessages[currentMessageIndex].comments.push(commentText);

            // Очищаем поле для ввода комментария
            commentField.value = "";
        }
    });

    function loadComments(comments) {
        commentsSection.innerHTML = comments.map(comment => 
            `<div class="comment">
                <p>${comment}</p>
                <div class="comment-actions">
                    <span><i class="fas fa-thumbs-up"></i> Лайк</span>
                    <span><i class="fas fa-thumbs-down"></i> Дизлайк</span>
                    <span><i class="fas fa-star"></i> Избранное</span>
                    <span><i class="fas fa-flag"></i> Жалоба</span>
                    <span><i class="fas fa-link"></i> Скопировать ссылку</span>
                </div>
            </div>`
        ).join("");
    }
});





// document.addEventListener("DOMContentLoaded", function() {
//     const commentField = document.getElementById("new-comment");
//     const addCommentButton = document.getElementById("add-comment");
//     const commentsSection = document.getElementById("comments-section");
//     const discussionListItems = document.querySelectorAll("#discussion-list li");
//     const discussionTitle = document.getElementById("discussion-title");
//     const discussionMessage = document.getElementById("discussion-message");

//     let currentDiscussionId = null;
//     const commentsData = {}; // Объект для хранения комментариев по обсуждениям

//     // Обработчик добавления комментария
//     addCommentButton.addEventListener("click", function() {
//         const commentText = commentField.value.trim();

//         if (commentText !== "" && currentDiscussionId) {
//             // Создаем новый элемент комментария
//             const newComment = document.createElement("div");
//             newComment.classList.add("comment");
            
//             // Добавляем текст комментария
//             newComment.innerHTML = `<p><strong>Пользователь:</strong> ${commentText}</p>`;

//             // Создаем блок с иконками действий
//             const commentActions = document.createElement("div");
//             commentActions.classList.add("comment-actions");

//             commentActions.innerHTML = `
//                 <span><i class="fas fa-thumbs-up"></i> Лайк</span>
//                 <span><i class="fas fa-thumbs-down"></i> Дизлайк</span>
//                 <span><i class="fas fa-star"></i> Избранное</span>
//                 <span><i class="fas fa-flag"></i> Жалоба</span>
//                 <span><i class="fas fa-link"></i> Скопировать ссылку</span>
//             `;

//             // Добавляем блок иконок под текстом комментария
//             newComment.appendChild(commentActions);

//             // Добавляем новый комментарий в секцию комментариев
//             commentsSection.appendChild(newComment);

//             // Сохраняем комментарий в соответствующем обсуждении
//             if (!commentsData[currentDiscussionId]) {
//                 commentsData[currentDiscussionId] = [];
//             }
//             commentsData[currentDiscussionId].push(commentText);

//             // Очищаем поле для ввода комментария
//             commentField.value = "";
//         }
//     });

//     // Обработчик выбора обсуждения
//     discussionListItems.forEach(item => {
//         item.addEventListener("click", function() {
//             const title = this.getAttribute("data-title");
//             const message = this.getAttribute("data-message");

//             // Обновляем заголовок и сообщение в discussion-main
//             discussionTitle.textContent = title;
//             discussionMessage.textContent = message;

//             // Получаем идентификатор текущего обсуждения
//             currentDiscussionId = this.textContent.trim();

//             // Очищаем секцию комментариев
//             commentsSection.innerHTML = '<h3>Комментарии</h3>';

//             // Загружаем комментарии для выбранного обсуждения
//             if (commentsData[currentDiscussionId]) {
//                 commentsData[currentDiscussionId].forEach(commentText => {
//                     const newComment = document.createElement("div");
//                     newComment.classList.add("comment");
//                     newComment.innerHTML = `<p><strong>Пользователь:</strong> ${commentText}</p>`;

//                     const commentActions = document.createElement("div");
//                     commentActions.classList.add("comment-actions");

//                     commentActions.innerHTML = `
//                         <span><i class="fas fa-thumbs-up"></i> Лайк</span>
//                         <span><i class="fas fa-thumbs-down"></i> Дизлайк</span>
//                         <span><i class="fas fa-star"></i> Избранное</span>
//                         <span><i class="fas fa-flag"></i> Жалоба</span>
//                         <span><i class="fas fa-link"></i> Скопировать ссылку</span>
//                     `;

//                     newComment.appendChild(commentActions);
//                     commentsSection.appendChild(newComment);
//                 });
//             }
//         });
//     });

// });


// document.querySelectorAll('.comment-actions span').forEach(icon => {
//     icon.addEventListener('click', function() {
//         // Определение действия по тексту иконки
//         if (this.textContent.includes('Лайк')) {
//             console.log('Лайк нажат');
//             // Реализовать логику лайка
//         } else if (this.textContent.includes('Дизлайк')) {
//             console.log('Дизлайк нажат');
//             // Реализовать логику дизлайка
//         } else if (this.textContent.includes('Избранное')) {
//             console.log('Добавлено в избранное');
//             // Реализовать логику добавления в избранное
//         } else if (this.textContent.includes('Жалоба')) {
//             console.log('Жалоба отправлена');
//             // Реализовать логику жалобы
//         } else if (this.textContent.includes('Скопировать ссылку')) {
//             console.log('Ссылка скопирована');
//             // Реализовать логику копирования ссылки
//         }
//     });
// });
