function login(){
event.preventDefault();
var email = document.querySelector("#dang-nhap #email");
var password = document.querySelector("#dang-nhap #password");
var thiswindow = window;
if(email.value == "hihi@gmail.com" && password.value == "hehe"){
     thiswindow = window.open("admin.html","AdminPage");
}
    window.close(thiswindow);
}


function moDangNhap() {
    document.getElementById("dang-nhap").style.display = "flex";
    document.getElementById("dang-ky").style.display = "none";
}

function tatDangNhap() {
    document.getElementById("dang-nhap").style.display = "none";
}

function tatDangKy() {
    document.getElementById("dang-ky").style.display = "none";
}

function chuyenFormDangKy() {
    document.getElementById("dang-nhap").style.display = "none";
    document.getElementById("dang-ky").style.display = "flex";
}

function chuyenFormDangNhap() {
    document.getElementById("dang-ky").style.display = "none";
    document.getElementById("dang-nhap").style.display = "flex";
}
