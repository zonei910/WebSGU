


window.onload = ()=>{
let  me = JSON.parse(localStorage.getItem("me"));
    console.log(me);
}





function dang_nhap(){
    let phone = document.getElementById("login-phone").value;
    let password = document.getElementById("login-password").value;
    for(let i = 0 ; i <Customer.length ; i++){
        if(phone == Customer[i].phone && password == Customer[i].password){
           let me = Customer[i];
            console.log(me);
            localStorage.setItem("me", JSON.stringify(me));
            return true;
        }
    }
    alert("Không tìm thấy tài khoản");
    return false;
}