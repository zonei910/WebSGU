function hienthi(){
    document.getElementById("dang-nhap").style.display="flex";
}
function hienthii(){
    document.getElementById("dang-ky").style.display="flex";
}
function tatDangNhap(){
    document.getElementById("dang-nhap").style.display="none";
}
function tatDangKy(){
    document.getElementById("dang-ky").style.display="none";
}


function home() {
    const showFull = ["carousel","sp-hot", "sp-watch", "sp-ring", "sp-earrings", "sp-bracelet", "sp-necklace"];
    
    showFull.forEach(id => {
        document.getElementById(id).style.display = "block";
    });
}


function listMenu(abc) {
    const elementsToHide = ["carousel","sp-hot", "sp-watch", "sp-ring", "sp-earrings", "sp-bracelet", "sp-necklace"];

    elementsToHide.forEach(id => {
        document.getElementById(id).style.display = "none";
    });
    const bien = abc.id;
    switch (bien) {
        // case "carousel":
        //     document.getElementById("carousel").style.display = "block";
        //     break;
        case "dong-ho":
            document.getElementById("sp-watch").style.display = "block";
            break;
        case "nhan":
            document.getElementById("sp-ring").style.display = "block";
            break;
        case "khuyen-tai":
            document.getElementById("sp-earrings").style.display = "block";
            break;
        case "vong-tay":
            document.getElementById("sp-bracelet").style.display = "block";
            break;
        case "vong-co":
            document.getElementById("sp-necklace").style.display = "block";
            break;
        default:
            break; 
    }
}





let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); 
showSlide(currentIndex); 

// Slider
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if ( (active + 1) > lengthItems )
        active = 0;
    else 
        active += 1;

    reloadSlider();
}

prev.onclick = function() {
    if ( (active - 1) < 0 )
        active = lengthItems;
    else    
        active -= 1;

    reloadSlider();
}

let refreshSlider = setInterval(() => {next.click()}, 7000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 7000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
});
// Ket thuc slider