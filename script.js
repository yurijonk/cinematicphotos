let headerToppanelPhone = document.querySelector('.header__toppanel_phone');
let headerToppanel = document.querySelector('.header__toppanel');
let viewimg__butt = document.querySelector('.viewimg__butt');
let burger__menu = document.querySelector('.burger__menu');
let buttomBox = document.querySelector('.buttomBox');
let close = document.querySelector('.close');
let viewimg = document.querySelector('.viewimg');

let bar = document.documentElement
// let barVerflow = getComputedStyle(bar).overflow

let scrollbarhtml = window.getComputedStyle(bar, '::-webkit-scrollbar')



function scrollBarOn() {
    bar.style.overflow = 'overlay';
    bar.style.setProperty('--changeWidth', '')
}
function scrollBarOff() {
    bar.style.overflow = '';
    bar.style.setProperty('--changeWidth', 0)
}

function chooseDevice() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        headerToppanelPhone.style.display = 'flex';
        headerToppanel.style.display = 'none';
        viewimg__butt.style.display = 'none';
        burger__menu.style.display = '';
        buttomBox.style.display = 'none';  
        close.style.display = 'none';  
        scrollBarOff()
      } else {
        headerToppanel.style.display = 'flex';
        headerToppanelPhone.style.display = 'none';
        viewimg__butt.style.display = '';
        burger__menu.style.display = 'none';
        buttomBox.style.display = '';
        close.style.display = '';  
        scrollBarOn()
    }
    resRotateScreen()
}

chooseDevice();

function resRotateScreen() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if ( window.screen.width / 1.5  > window.screen.height) {
            viewimg.style.height = 99 + 'vh';
            viewimg.style.width = 'calc(99vh * 1.5)'
        } else {
            viewimg.style.width = 99 + 'vw';
            viewimg.style.height = 'calc(99vw / 1.5)'
        }
      } else {
        viewimg.style.width = 60 + 'vw';
        viewimg.style.height = 'calc(60vw / 1.5)'
    }
}

// header lange panel=========================================================
let icon = document.querySelector('.icon');
let header__langblock = document.querySelector('.header__langblock');
let box3lang = document.querySelector('.box3lang');
let header__langblock_arrow = document.querySelector('.header__langblock_arrow');

window.addEventListener('click', showEng);

function showEng(e) {

    if(e.target.className === 'header__langblock' || e.target.className === 'icon' ||e.target.className === 'header__langblock_icon')
    if (parseInt(getComputedStyle(box3lang).height) === 0) {
        box3lang.style.height = 100+'%';
    } else {
        box3lang.style.height = 0;
    } else if(parseInt(getComputedStyle(box3lang).top) > 0 && e.target.className !== 'header__langblock' && e.target.className !== 'icon' && e.target.className !== 'header__langblock_icon') {
        box3lang.style.height = 0;
    }
}



let backBlock = document.querySelector('.backBlock');
let bodyy = document.querySelector('body');
let header = document.querySelector('header');
let getView = getComputedStyle(viewimg);
// photos sketch============================================================================
let galleryBlock__photo = document.querySelectorAll('.galleryBlock__photo');

let fullPhotosUrl = [
    `url(./img/full_1.jpg)`,
    `url(./img/full_2.jpg)`,
    `url(./img/full_3.jpg)`,
    `url(./img/full_4.jpg)`,
    `url(./img/full_5.jpg)`,
    `url(./img/full_6.jpg)`,
    `url(./img/full_7.jpg)`,
    `url(./img/full_8.jpg)`,
    `url(./img/full_9.jpg)`,
    `url(./img/full_10.jpg)`,
    `url(./img/full_11.jpg)`,
    `url(./img/full_12.jpg)`,
    `url(./img/full_13.jpg)`,
    `url(./img/full_14.jpg)`,
    `url(./img/full_15.jpg)`,
    `url(./img/full_16.jpg)`,
    `url(./img/full_17.jpg)`,
    `url(./img/full_18.jpg)`,
    `url(./img/full_19.jpg)`,
    `url(./img/full_20.jpg)`,
    `url(./img/full_21.jpg)`,
    `url(./img/full_22.jpg)`,
    `url(./img/full_23.jpg)`,
    `url(./img/full_24.jpg)`,
]
let lowPhotosUrl = [
    `url(./img/low_img/low_1.jpg)`,
    `url(./img/low_img/low_2.jpg)`,
    `url(./img/low_img/low_3.jpg)`,
    `url(./img/low_img/low_4.jpg)`,
    `url(./img/low_img/low_5.jpg)`,
    `url(./img/low_img/low_6.jpg)`,
    `url(./img/low_img/low_7.jpg)`,
    `url(./img/low_img/low_8.jpg)`,
    `url(./img/low_img/low_9.jpg)`,
    `url(./img/low_img/low_10.jpg)`,
    `url(./img/low_img/low_11.jpg)`,
    `url(./img/low_img/low_12.jpg)`,
    `url(./img/low_img/low_13.jpg)`,
    `url(./img/low_img/low_14.jpg)`,
    `url(./img/low_img/low_15.jpg)`,
    `url(./img/low_img/low_16.jpg)`,
    `url(./img/low_img/low_17.jpg)`,
    `url(./img/low_img/low_18.jpg)`,
    `url(./img/low_img/low_19.jpg)`,
    `url(./img/low_img/low_20.jpg)`,
    `url(./img/low_img/low_21.jpg)`,
    `url(./img/low_img/low_22.jpg)`,
    `url(./img/low_img/low_23.jpg)`,
    `url(./img/low_img/low_24.jpg)`,
]

for(let i = 0; i < galleryBlock__photo.length; i++) {
    galleryBlock__photo[i].style.backgroundImage = lowPhotosUrl[i]
}

// Slider===================================================================================

let pointBlock__pages = document.querySelector('.pointBlock__pages');
let pointBlock__point = null;


let galleryBlock__line = document.querySelector('.galleryBlock__line');
let galleryBlock__page = document.querySelectorAll('.galleryBlock__page');
let footer__block = document.querySelector('.footer__block');

let footer__block_width = parseInt(getComputedStyle(footer__block).width) 
let footer__block_height = parseInt(getComputedStyle(footer__block).height) 
let galleryBlock__page_length = galleryBlock__page.length;
let galleryBlock__page_length_1 = galleryBlock__page_length -1;
galleryBlock__page.forEach(item => {
    item.style.width = footer__block_width+'px';
    item.style.height = footer__block_height+'px';
})
galleryBlock__line.style.width = footer__block_width * galleryBlock__page_length + 'px';

// pointBlock__point==============================================================

for(let i = 0; i < galleryBlock__page.length; i++) {
    pointBlock__pages.insertAdjacentHTML('afterbegin', '<div class="pointBlock__point"></div>')
    pointBlock__point = document.querySelector('.pointBlock__point');
}

pointBlock__point = document.querySelectorAll('.pointBlock__point');

pointBlock__point[0].classList.add('active__point')

let pointBlockCounter = 0;


function pointBlockMoveRight() {
    
    if(pointBlockCounter >= pointBlock__point.length-1) {
        pointBlock__point[pointBlockCounter].classList.remove('active__point')
        pointBlockCounter = 0
    } else {
        pointBlock__point[pointBlockCounter].classList.remove('active__point')
        pointBlockCounter++
    }
    pointBlock__point[pointBlockCounter].classList.add('active__point')
}
function pointBlockMoveLeft() {
    if (pointBlockCounter <= 0) {
        pointBlock__point[pointBlockCounter].classList.remove('active__point')
        pointBlockCounter = pointBlock__point.length-1
    }else {
        pointBlock__point[pointBlockCounter].classList.remove('active__point')
        pointBlockCounter--
    }
    pointBlock__point[pointBlockCounter].classList.add('active__point')
}

// button=========================================================================
let next = document.querySelector('.next');
let back = document.querySelector('.back');

next.addEventListener('click', nextSlide)
back.addEventListener('click', backSlide)
let sliderCounter = 0;

function nextSlide() {
    if(sliderCounter <= -parseInt(footer__block_width) * (galleryBlock__page_length_1)) {
        sliderCounter = 0;
    } else {
        sliderCounter += -parseInt(footer__block_width)
    }
    galleryBlock__line.style.left = sliderCounter + 'px'
    pointBlockMoveRight()
}

function backSlide() {
    if(sliderCounter >= 0  ) {
        sliderCounter = -parseInt(footer__block_width) * (galleryBlock__page_length_1)
    } else {
        sliderCounter -= -parseInt(footer__block_width)
    }
    galleryBlock__line.style.left = sliderCounter + 'px'
    sum = parseInt(getComputedStyle(galleryBlock__line).left)
    pointBlockMoveLeft()
}

// swipe===================================================================================

document.addEventListener('touchstart', slideStart);
document.addEventListener('touchend', slideEnd);

let start = null;
let move = null;
let moveStart0 = null;

function slideStart(e) {
    if(e.touches[0].target.className === 'photo') {
        start = e.touches[0].clientX;
        document.addEventListener('touchmove', slideMove);
    }
}
function slideMove(e) {
    move = e.touches[0].clientX;
    moveStart0 = move - start;
    if (moveStart0 <= -60) {
        nextSlide();
        document.removeEventListener('touchmove', slideMove);
        
    } else if (moveStart0 >= 60) {
        backSlide();
        document.removeEventListener('touchmove', slideMove);
        
    }
}

function slideEnd() {
    document.removeEventListener('touchmove', slideMove);
}
galleryBlock__line.style.left = 0+ 'px'
// Flip fullscreen photos function=============================================================
let photos = document.querySelectorAll('.photo');

let leftFullFlip = document.querySelector('.viewimg__left');
let rightFullFlip = document.querySelector('.viewimg__right');



photos.forEach(
    (item, index) => item.addEventListener('click', function() {
        document.addEventListener('click', function (event) {
            viewimg.addEventListener('touchstart', swipeStart);
        })
        let counter = index;
        if( this.className === 'photo' && getView.display == 'none') {
            viewimg.style.backgroundImage = fullPhotosUrl[counter];
            viewimg.style.display = 'block';
            backBlock.style.display = 'block';
            bodyy.style.overflow = 'hidden';
            header.style.display = 'none';
            scrollBarOff()

            leftFullFlip.addEventListener('click', function() {
                if (counter <= 0) {
                    counter = photos.length -1
                } else {counter--}
                viewimg.style.backgroundImage = fullPhotosUrl[counter];
            } );        

            rightFullFlip.addEventListener('click', function() {
                if (counter >= photos.length -1) {
                    counter = 0
                } else {counter++}
                viewimg.style.backgroundImage = fullPhotosUrl[counter];
                
            } );   



            document.addEventListener('touchstart', swipeStart);
            let start = null;
            let move = null;
            let moveStart0 = null;


            function swipeStart(e) {
                e.stopPropagation()
                if(e.touches[0].target.className === 'viewimg' || e.touches[0].target.localName === "button") {
                    start = e.touches[0].clientX;
                    document.addEventListener('touchmove', swipeMove);
                }
            }

            function swipeMove(e) {
                e.stopPropagation()
                move = e.touches[0].clientX;
                moveStart0 = move - start;
                if (moveStart0 <= -55) {
                    if (counter >= photos.length -1) {
                        counter = 0
                    } else {counter++}
                    viewimg.style.backgroundImage = fullPhotosUrl[counter];
                    document.removeEventListener('touchmove', swipeMove);
                    
                } else if (moveStart0 >= 55) {
                    if (counter <= 0) {
                        counter = photos.length -1
                    } else {counter--}
                    viewimg.style.backgroundImage = fullPhotosUrl[counter];
                    document.removeEventListener('touchmove', swipeMove);
                }
            }

        } 
    })
)

document.addEventListener('click', function (event) {
    if (event.target.className == 'backBlock' || event.target.className == 'close' && getView.display == 'block') {
        viewimg.style.display = 'none'
        backBlock.style.display = 'none'
        bodyy.style.overflow = '';
        header.style.display = '';
        scrollBarOn()
    }
})


// Burger menu ===================================================================
let burgerMenuBackground = document.querySelector('.burger__menu_background');
let burgerMenu = document.querySelector('.burger__menu');
let header__toppanelPhone_burgerIcon = document.querySelector('.header__toppanelPhone_burgerIcon');

let burger__menu_langList = document.querySelector('.burger__menu_langList');

window.addEventListener('click', closeBurger);

function closeBurger(e) {
    if(e.target.className == 'header__toppanelPhone_burgerIcon' || e.target.className == 'burgerIconBox' || e.target.className == 'burgerIconBox_line' ) {
        if(parseInt(getComputedStyle(burgerMenu).right) < 0)
        burgerMenu.style.right = 0;
        burgerMenuBackground.style.display = 'block'
        document.body.style.overflow = 'hidden'
        document.querySelector('.burgerIconBox').style.display = 'none'
        document.querySelector('.burgerIconBox_x').style.display = 'flex'
    }  
    if(e.target.className !== 'header__navmenu_phone' && e.target.className !== 'nav_phone' && e.target.className !== 'burger__menu_cap' && e.target.className !== 'burger__menu_langPanel' && parseInt(getComputedStyle(burgerMenu).right) >= 0) {
        burgerMenu.style.right = -70 + 'vw'
        burgerMenuBackground.style.display = 'none'
        document.body.style.overflow = ''
        burger__menu_langList.style.height = 0;
        document.querySelector('.burgerIconBox').style.display = 'flex'
        document.querySelector('.burgerIconBox_x').style.display = 'none'
    }

    if(e.target.className == 'burger__menu_cap') {
        if(parseInt(getComputedStyle(burger__menu_langList).height) <= 0) {
            burger__menu_langList.style.height = 40+'px';
        } else {
            burger__menu_langList.style.height = 0;
        }
    }

}

// localStorage==========================================================================
let langUA = document.querySelector('.langUA');
let langEN = document.querySelector('.langEN');

let burger__menu_ua = document.querySelector('.burger__menu_ua');
let burger__menu_en = document.querySelector('.burger__menu_en');
let menu = document.querySelectorAll('.menu');

let menu_phone = document.querySelectorAll('.menu_phone');
let pGallery = document.querySelector('.pGallery');
let pAbout = document.querySelector('.pAbout');
let text = document.querySelector('.text');

langUA.addEventListener('click',()=> chooseLanguage(uaText));
langEN.addEventListener('click', engText);
burger__menu_ua.addEventListener('click',()=> chooseLanguage(uaText));
burger__menu_en.addEventListener('click', engText);

let uaText = {
    home: 'Головна',
    gallery: 'Галерея',
    about: 'Про мене',
    contacts: 'Контакти',
    galleryTitle: 'Галерея',
    aboutTitle: 'Про мене',
    aboutText: '<p>Привіт, мене звати Юрій, і ви знаходитесь на моєму вебсайті, написаному мною власноруч за допомогою JavaScript, CSS та звісно HTML, в першу чергу, метою його створення було застосування на практиці теоретичних знань із програмування, в другу чергу це бажання мати свій власний сайт із власними фотографіями, схильність до фотографій у мене ще зі шкільних років, правда тоді у мене не було власного фотоапарата, я його позичав у свого друга Діми, або разом з ним ходив фотографувати місцеві краєвиди, хоча перші фото були звичайні рослини, листя дерев, всілякі комахи та тварини, мабуть, кожний фотограф початківець це фотографував, не знаю.</p> <p>Не мало пройшло часу, коли я вирішив купити свій власний фотоапарат, це був і є Nikon D3300, саме з нього були зроблені фотографії що розміщені на цьому сайті, апарат хороший, правда є свої мінуси, наприклад - не зручно фотографувати з низької позиції, через маленький неповороткий екран, а ще у видошукачі поганий огляд, важко зрозуміти де наведений фокус, через це об\'єктиви з ручним фокусом не використовую, звісно ці мінуси з\'ясувалися після довгого користування, зате тепер знаю яку наступну камеру виберу, у мене є декілька об\'єктивів, перші два з діафрагмою 1.8 це 50мм і 35мм, та звичайний 18-55.</p> 06:28 28/08/22',
    objectName: 'uaText',
}

let setLanguageObjects = {
    'uaText': uaText,
}

function engText () {
    if(!language) {
        return
    } else {
        localStorage.clear();
        location.reload()
    }

}

let language = null;

function chooseLanguage(objText) {
    menu[0].innerHTML = objText.home
    menu[1].innerHTML = objText.gallery
    menu[2].innerHTML = objText.about
    menu[3].innerHTML = objText.contacts
    menu_phone[0].innerHTML = objText.home
    menu_phone[1].innerHTML = objText.gallery
    menu_phone[2].innerHTML = objText.about
    menu_phone[3].innerHTML = objText.contacts
    pGallery.innerHTML = objText.galleryTitle
    pAbout.innerHTML = objText.aboutTitle
    text.innerHTML =  objText.aboutText
    language = objText.objectName
    localStorage.setItem('language', language)
}

if(localStorage.getItem('language') !== null) {
    chooseLanguage(setLanguageObjects[localStorage.getItem('language')])
}

// ===========================================================================================



menu.forEach(
    (item, index, elem) => {
        setTimeout(()=> {
            elem[0].style.opacity = 1;
            setTimeout(()=> {
                elem[1].style.opacity = 1;
                setTimeout(()=> {
                    elem[2].style.opacity = 1;
                    setTimeout(()=> {
                        elem[3].style.opacity = 1;
                    }, 70)
                }, 70)
            }, 70)
        }, 400)
    }
);


//==============================================================


let wW = window.screen.width;

window.addEventListener('orientationchange', ()=>{
    resRotateScreen()
    resRotateContent()
})


window.addEventListener('resize',()=> {
    resRotateContent()
})




function resRotateContent() {
    function chooseDevRotate() {
            footer__block = document.querySelector('.footer__block');
            galleryBlock__page = document.querySelectorAll('.galleryBlock__page');
            galleryBlock__line = document.querySelector('.galleryBlock__line');
            footer__block_width = parseInt(getComputedStyle(footer__block).width)
            footer__block_height = parseInt(getComputedStyle(footer__block).height) 
            galleryBlock__page.forEach(item => {
                item.style.width = footer__block_width+'px';
                item.style.height = footer__block_height+'px';
            })
            galleryBlock__page_length = galleryBlock__page.length;
            galleryBlock__page_length_1 = galleryBlock__page_length -1;
            galleryBlock__line.style.width = footer__block_width * galleryBlock__page_length + 'px';
            pointBlockCounter = 0;
            sliderCounter = 0
            galleryBlock__line.style.left = sliderCounter + 'px'
            // =======================================================================
                pointBlock__point.forEach((i)=>{
                    i.classList.remove('active__point')
                })
                pointBlock__point[0].classList.add('active__point')
                // ====================================================================
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        let wW2 = window.screen.width;
        if(wW !== wW2) {
            setTimeout(chooseDevRotate, 30);
            wW = wW2;
        }
    } else {
        setTimeout(chooseDevRotate, 30);
    }
    setTimeout(chooseDevice, 30);
}

//===========================================================================

let footer = document.querySelector('.footer');
let myContacts = document.querySelector('.myContacts');

menu[0].addEventListener('click', ()=> window.scrollTo(0,0))
menu[1].addEventListener('click', ()=> window.scrollTo(0,pGallery.offsetTop + -50))
menu[2].addEventListener('click', ()=> window.scrollTo(0,pAbout.offsetTop + -50))
window.addEventListener('click', ShowMyContacts)

menu_phone[0].addEventListener('click', ()=> window.scrollTo(0,window.scrollTo(0,0)))
menu_phone[1].addEventListener('click', ()=> window.scrollTo(0,pGallery.offsetTop + -50))
menu_phone[2].addEventListener('click', ()=> window.scrollTo(0,pAbout.offsetTop + -50))
function ShowMyContacts(e) {
    if(e.target === menu[3] && e.path[0].offsetParent.className === "header__toppanel" || e.target === menu_phone[3] && e.path[0].offsetParent.className === "burger__menu") {
        if( parseInt(getComputedStyle(myContacts).height) <= 0) {
        // myContacts.style.display = 'flex';
        myContacts.style.height = 100+'px';
        } else {
            myContacts.style.height = 0;
            // myContacts.style.display = 'none';
        }
    } else if(parseInt(getComputedStyle(myContacts).height) > 0 && e.target.className !== 'myContacts' && e.srcElement.offsetParent.className !== "myContacts") {
        myContacts.style.height = 0;
    }
}

let main = document.querySelector('.main');

setTimeout(()=>{
    main.style.opacity = '100%'
},2000)

SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 800,
    // Размер шага в пикселях 
    stepSize         : 75,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 2,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})













    


    
