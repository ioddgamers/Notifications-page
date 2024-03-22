const markReadMessages = document.querySelector('.mark-as-read');
const unreadCounter = document.getElementById('unread-counter');
const unreadIcon = document.querySelector('.unread-icon');
const notificationContainer = document.querySelector('.notif-container');
const unreadMessage = document.querySelectorAll('.unread');
let counter = 0;

markReadMessages.addEventListener('click', readMessages);

function readMessages() {
    unreadCounter.textContent = counter;
    
    unreadMessage.forEach(function(message) {
        message.classList.remove('unread');
        message.classList.add('message-read');
    });

    // unreadMessage.classList.remove('unread');
    // unreadMessage.classList.add('message-read');
    // unreadIcon.classList.add('hidden');
    // markReadMessages.textContent = 'Mark as unread';
}