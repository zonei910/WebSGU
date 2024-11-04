function login(){
event.preventDefault();
var email = document.querySelector("#dang-nhap #email");
var password = document.querySelector("#dang-nhap #password");
var thiswindow = window;
if(email.value == "hihi@gmail.com" && password.value == "hehe"){
     thiswindow = window.open("/admin.html","AdminPage");
}
    window.close(thiswindow);
}


