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