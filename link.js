

function dang_nhap(){
    let phone = document.getElementById("login-phone").value;
    let password = document.getElementById("login-password").value;
    for(let i = 0 ; i <Customer.length ; i++){
        if(phone == Customer[i].phone && password == Customer[i].password){
           let me = Customer[i];
            localStorage.setItem("me", JSON.stringify(me));
            return true;
        }
    }

    for(let i = 0 ; i < Admin.length ; i++){
        if(phone == Admin[i].phone && password == Admin[i].password){
            alert("Đăng nhập Admin thành công");
            let me = Admin[i];
            localStorage.setItem("me", JSON.stringify(me));
            window.location.href = "admin.html";
            return false;
        }
    }

    alert("Không tìm thấy tài khoản");
    return false;
}

function dang_ky(){
    let phone = document.getElementById("register-phone").value;
    let name = document.getElementById("register-name").value;
    let email = document.getElementById("register-email").value;
    let gender = document.getElementById("register-gender").value;
    let address = document.getElementById("register-address").value;
    let repassword = document.getElementById("register-confirm-password").value;
    let password = document.getElementById("register-password").value;
    if(password != repassword){
        alert("Mật khẩu không trùng khớp");
        return false;
    }

    let check = JSON.parse(localStorage.getItem("customer"));

    for(let i = 0 ; i<check.length ; i ++)
        if(phone == check[i].phone){
            alert("Số điện thoại này đã tồn tại");
            return false;
        }
    
    let a = {
    phone: phone,
    name: name,
    email:  email,
    sex: gender,
    address: address,
    password: password,
    status: 0,
    };

    console.log(a);
        
    let addCustomer = JSON.parse(localStorage.getItem("customer_storage"));
        addCustomer.push(a);

    localStorage.setItem("eheeh", JSON.stringify(addCustomer));
    localStorage.setItem("me", JSON.stringify(a));
    return false;
}



window.onload = ()=>{
let  me = JSON.parse(localStorage.getItem("me"));
    console.log(me);

//Code trong này luôn





}



