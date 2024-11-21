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

//================= login =============logout=============
function dangky(event) {
    event.preventDefault();
    // lay cac gia tri tu input de kiem tra
    let phone = document.getElementById('register-phone').value.trim();
    let name = document.getElementById('name').value.trim();
    let date = document.getElementById('dob').value.trim();
    let sex = document.getElementById('gender').value;
    let address = document.getElementById('address').value.trim();
    let password = document.getElementById('register-password').value.trim();
    let confirmpassword = document.getElementById('register-confirm-password').value.trim();

    // kiem tra nhap lai mat khau
    if ( password !== confirmpassword ){
        alert("Mật khẩu không khớp!");
        return false;
    }

    //lay thong tin ng dung tu local ra
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length === 0) {
        console.log("Danh sách người dùng hiện đang rỗng.");
    }

    // kiem tra sdt co trung
    if (users.some(user => user.phone === phone)) {
        alert("Số điện thoại đã được đăng ký!");
        return false;
    }

    // sử dụng localstorage vì không có php
    const user = {
        phone: phone,
        name: name, 
        dob: date, 
        gender: sex, 
        address: address, 
        password: password
    };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Đăng kí thành công!");
    tatDangKy();
    moDangNhap();
}

function dangnhap(event) {
    event.preventDefault();
    let userphone= document.getElementById("login-phone").value.trim();
    let userpassword = document.getElementById('login-password').value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.phone === userphone);

    if (user) {
        if (user.password === userpassword){
            // Nếu tìm thấy người dùng, hiển thị thông báo và cập nhật giao diện
            alert("Đăng nhập thành công");

            // Lưu trạng thái đăng nhập
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", JSON.stringify(user));

            // Hiển thị div user
            hienThiTaiKhoan(user);

            // Đóng form đăng nhập
            tatDangNhap();
            console.log("Chuyển hướng đến trang index...");
            window.location.href = "index.html";
        } else {
        // Nếu không tìm thấy người dùng, báo lỗi
        alert("Mật khẩu không đúng");
        }
    } else {
        alert("Số điện thoại không tồn tại");
    }
}

function dangxuat() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    // Ẩn giao diện người dùng đã đăng nhập
    const navbarUser = document.querySelector('.navbar_user');
    if (navbarUser) 
        navbarUser.style.display = 'none';

    // Hiển thị lại nút đăng nhập
    const navbarAccount = document.querySelector('.navbar_account');
    if (navbarAccount) 
        navbarAccount.style.display = 'block';
}

function hienThiTaiKhoan(user) {
    // Ẩn nút đăng nhập
    const navbarAccount = document.querySelector('.navbar_account');
    if (navbarAccount) {
        navbarAccount.style.display = 'none';
    }

    // Hiển thị giao diện người dùng đã đăng nhập
    const navbarUser = document.querySelector('.navbar_user');
    if (navbarUser) {
        navbarUser.style.display = 'flex';
        
        const userNameElement = navbarUser.querySelector('.navbar_user-name');
        if (userNameElement) {
            userNameElement.textContent = `Hi, ${user.name || 'Người dùng'}`;
        }
    }
}

function kiemTraDangNhap() {
    if (localStorage.getItem("isLoggedIn") === "true") {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        if (user) {
            hienThiTaiKhoan(user);
            tatDangNhap();
        }
    }
}
window.onload = kiemTraDangNhap;