"use strict"

const isMobile = {
    Android: function () {
    return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
    return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||   
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows());
    }
};


if(isMobile.any()){    // если мобильное ус-во
    document.body.classList.add('_touch');


let menuArrows = document.querySelectorAll('.menu__arrow');
if (menuArrows.length>0){
    for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function(e) {
            menuArrow.parentElement.classList.toggle('_active');
        });
    }
}


}else{
    document.body.classList.add('_pc');
}


// меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });

    
}



//СЛАЙДЕР


$(document).ready(function(){
    $('.slider').slick({
        arrows: true,              // видны ли стрелки
        dots:true,                 // видны ли точки
        adaptiveHeight:true,       // адаптивная высота ( постраивает высоту под самый большой в слайде)
        slidesToShow:3,            // сколько слайдов показывать
        slidesToScroll:1,          // сколько слайдов при пролистывании
        speed:500,                //  с какой скоростью меняются слайды
        easing: 'linear',          // как transition (стиль анимации)
        infinite: true,            // будет ли слайдер бесконечным (стрелке можем дать опасити)
        initialSlide:0,            // с какого слайда стартуем
        autoplay:false,            // автоматическое проигрывание слайдов
        autoplaySpeed: 1000,       // с какой скоростью проигрываются слайды
        pauseOnFocus:true,         // при нажатии останавливает
        pauseOnHover:true,         // при наведении останавливает
        pauseOnDotsHover:true,     // при наведении на точки останавливается
        draggable: true,          // прокрутка с помощью мыши (на телефоне работает и при false)
        swipe: true,               // отключаем прокрутку на телефоне
        touchThreshold:100,
        touchMove: true,           // не можем двигать слайдер 
        waitForAnimate: false,     // новый слайд не ждет когда закончится анимация предыдущего
        centerMode: false,         // центровка центральной картинки слайда 
        variableWidth: false,      // скрывает крайние оставляя слайд по центру
        rows: 1,                   // кол-во рядов в слайде
        slidesPerRow: 1,           // кол-во слайдов в ряду
        vertical:false,            // переводим в вертикальное положение слайдер, меняем display flex на display block у slick-track, указываем высоту slider-item
        verticalSwiping:false,     // свайп происходит вертикально
        responsive:[                // адаптация слайдов
            {
                breakpoint: 1346,
                settings: {
                    slidesToShow:2,   
                }
            },  {
                breakpoint: 600,
                settings: {
                    slidesToShow:1,   
                }
            }
        ],
        mobileFirst:false,                 // моб. версия
    }),
    $('.slider2').slick({  arrows: true,              // видны ли стрелки
        dots:false,                 // видны ли точки
        adaptiveHeight:true,       // адаптивная высота ( постраивает высоту под самый большой в слайде)
        slidesToShow:3,            // сколько слайдов показывать
        slidesToScroll:1,          // сколько слайдов при пролистывании
        speed:500,                //  с какой скоростью меняются слайды
        easing: 'linear',          // как transition (стиль анимации)
        infinite: true,            // будет ли слайдер бесконечным (стрелке можем дать опасити)
        initialSlide:0,            // с какого слайда стартуем
        autoplay:false,            // автоматическое проигрывание слайдов
        autoplaySpeed: 1000,       // с какой скоростью проигрываются слайды
        pauseOnFocus:true,         // при нажатии останавливает
        pauseOnHover:true,         // при наведении останавливает
        pauseOnDotsHover:true,     // при наведении на точки останавливается
        draggable: true,          // прокрутка с помощью мыши (на телефоне работает и при false)
        swipe: true,               // отключаем прокрутку на телефоне
        touchThreshold:100,
        touchMove: true,           // не можем двигать слайдер 
        waitForAnimate: false,     // новый слайд не ждет когда закончится анимация предыдущего
        centerMode: false,         // центровка центральной картинки слайда 
        variableWidth: false,      // скрывает крайние оставляя слайд по центру
        rows: 1,                   // кол-во рядов в слайде
        slidesPerRow: 1,           // кол-во слайдов в ряду
        vertical:false,            // переводим в вертикальное положение слайдер, меняем display flex на display block у slick-track, указываем высоту slider-item
        verticalSwiping:false,     // свайп происходит вертикально
        responsive:[                // адаптация слайдов
            {
                breakpoint: 1346,
                settings: {
                    slidesToShow:2,   
                }
            },  {
                breakpoint: 600,
                settings: {
                    slidesToShow:1,   
                }
            }
        ],
        mobileFirst:false,  });
});