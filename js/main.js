$(document).ready(function () {
    var currentFloor = 2; // переменная, где хранится текущий этаж
    var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
    var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
    
    // функция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
    });
    // отслеживаем клик по кнопке вверх
    counterUp.on("click", function () {
        // проверяем значение этажа, оно не должно быть больше 18
        if (currentFloor < 18) {
            currentFloor++; // прибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 01 а не 1
            $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    });
        // отслеживаем клик по кнопке вниз
    counterDown.on("click", function () {
        // проверяем значение этажа, оно должно быть больше 2
        if (currentFloor > 2) {
            currentFloor--; // отнимаем один этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 01 а не 1
            $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    });
    let popup = $('.popup');
    let buttonPrimary = $('.button-primary');
    let close = $('.close');

    buttonPrimary.on("click", function () {
        popup.addClass('active');
        $('body').addClass('overflow');
        currentCounter = $('.counter').text(); // получаем значение текущего этажа
        $(".popup-block-left-title").text("Этаж " + currentCounter); // добавляем текст в заголовок попапа
    });
    floorPath.on("click", function () {
        popup.addClass('active');
        $('body').addClass('overflow');
    });
    close.on("click", function () {
        popup.removeClass('active');
        $('body').removeClass('overflow');
    });
    $(document).mouseup(function (e) {
        if (popup.has(e.target).length === 0){
            popup.removeClass('active');
            $('body').removeClass('overflow');
        }
    });
    floorPath.on("click", function() {
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".popup-block-left-title").text("Этаж " + currentFloor); 
    });
    let menuButton = $('.menu-button');
    let menu = $('.navbar-menu');

    menuButton.on('click', () => {
        menu.toggleClass('active');
    });
});

const room = document.querySelectorAll('[data-room]');
const roomLink = document.querySelectorAll('[data-room-link]');

for (let rooms of room) {
    rooms.addEventListener('mouseover', () => {
        rooms.classList.add('active');
        roomLink.forEach(content => {
            if (content.dataset.roomLink === rooms.dataset.room) {
                content.classList.add('active');
            }
        });
    });
    rooms.addEventListener('mouseout', () => {
        room.forEach(item => { item.classList.remove('active') });
        roomLink.forEach(content => {
            content.classList.remove('active');
        });
    });
};

for (let roomsLink of roomLink) {
    roomsLink.addEventListener('mouseover', () => {
        roomsLink.classList.add('active');
        room.forEach(content => {
            if (content.dataset.room === roomsLink.dataset.roomLink) {
                content.classList.add('active');
            }
        });
    });
    roomsLink.addEventListener('mouseout', () => {
        room.forEach(item => { item.classList.remove('active') });
        roomLink.forEach(content => {
            content.classList.remove('active');
        });
    });
};