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

    // Kiểm tra trùng số điện thoại admin
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin && admin.phone === phone) {
        alert("Số điện thoại này đã được sử dụng bởi tài khoản admin!");
        return;
    }

    //lay thong tin ng dung tu local ra
    let Customer = JSON.parse(localStorage.getItem('users')) || [];
    if (Customer.length === 0) {
        console.log("Danh sách người dùng hiện đang rỗng.");
    }

    // kiem tra sdt co trung của user
    if (Customer.some(user => user.phone === phone)) {
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

    Customer.push(user);
    localStorage.setItem('users', JSON.stringify(Customer));
    alert("Đăng kí thành công!");
    tatDangKy();
    moDangNhap();
}

function dangnhap(event) {
    event.preventDefault();
    let userphone= document.getElementById("login-phone").value.trim();
    let userpassword = document.getElementById('login-password').value.trim();

    // Kiểm tra tài khoản admin
    const admin = JSON.parse(localStorage.getItem('admin'));
    if (userphone === admin.phone) {
        if (userpassword === admin.password) {
            // Nếu login thành công với tài khoản admin
            alert("Đăng nhập Admin thành công");

            // Lưu trạng thái đăng nhập
            // localStorage.setItem("isLoggedIn", "true");
            // localStorage.setItem("currentUser", JSON.stringify(admin));

            // Chuyển hướng tới trang admin hoặc trang chính
            window.location.href = "admin.html";  // Chuyển hướng tới trang admin
            return;
        } else {
            alert("Mật khẩu không đúng");
            return;
        }
    }

    // kiem tra tai khoan user
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

// function kiemTraDangNhap() {
//     if (localStorage.getItem("isLoggedIn") === "true") {
//         const user = JSON.parse(localStorage.getItem("currentUser"));
//         if (user) {
//             hienThiTaiKhoan(user);
//             tatDangNhap();
//         }
//     }
// }
// window.onload = kiemTraDangNhap;    
// ===========taotk admin==============
window.onload = function() {
    if (localStorage.getItem("isLoggedIn") === "true") {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        if (user) {
            hienThiTaiKhoan(user);
            tatDangNhap();
        }
    }

    const admin = JSON.parse(localStorage.getItem('admin'));
    if (!admin) {
        const newAdmin = {
            phone: '12345678',
            name: 'Admin',
            password: '12345',
        };
    localStorage.setItem('admin', JSON.stringify(newAdmin));
    console.log("Tài khoản admin đã được tạo:", newAdmin);
    } else {
        console.log("Tài khoản admin đã tồn tại:", admin);
    }
}

//==============tài khoản của tôii========================//
function hienThiThongTin() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        document.getElementById("infoname").value = currentUser.name || "";
        document.getElementById("infophone").value = currentUser.phone || "";
        document.getElementById("infoaddress").value = currentUser.address || "";
    } 
    // else {
    //     alert("Không tìm thấy thông tin tài khoản!");
    // }
}

function changeInformation() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // if (!currentUser) {
    //     alert("Bạn cần đăng nhập để cập nhật thông tin!");
    //     return;
    // }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const index = users.findIndex(user => user.phone === currentUser.phone);

    if (index === -1) {
        alert("Không tìm thấy tài khoản trong danh sách người dùng!");
        return;
    }

    // lay giá trị của các ô ng dùng nhập để chỉnh sửa
    const newName = document.getElementById("infoname").value.trim();
    const newAddress = document.getElementById("infoaddress").value.trim();

    // cap nhap thong tin ngdung da thay doi
    users[index].name = newName;
    users[index].address = newAddress;

    // Cập nhật lại trong localStorage
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(users[index]));

    alert("Thông tin tài khoản đã được cập nhật!");
}

function changePassword() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // if (!currentUser) {
    //     alert("Bạn cần đăng nhập để đổi mật khẩu!");
    //     return;
    // }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const index = users.findIndex(user => user.phone === currentUser.phone);


    if (index === -1) {
        alert("Không tìm thấy tài khoản trong danh sách người dùng!");
        return;
    }

    const currentPassword = document.getElementById("password-cur-info").value.trim();
    const newPassword = document.getElementById("password-after-info").value.trim();
    const confirmPassword = document.getElementById("password-comfirm-info").value.trim();


    if (currentPassword !== currentUser.password) {
        document.querySelector(".password-cur-info-error").textContent = "Mật khẩu hiện tại không chính xác!";
        return;
    } else {
        document.querySelector(".password-cur-info-error").textContent = "";
    }

    if (newPassword.length < 6) {
        document.querySelector(".password-after-info-error").textContent = "Mật khẩu mới phải ít nhất 6 ký tự!";
        return;
    } else {
        document.querySelector(".password-after-info-error").textContent = "";
    }
    if (newPassword !== confirmPassword) {
        document.querySelector(".password-after-comfirm-error").textContent = "Mật khẩu xác nhận không khớp!";
        return;
    } else {
        document.querySelector(".password-after-comfirm-error").textContent = "";
    }

     // Cập nhật mật khẩu
    users[index].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(users[index]));

    // làm mới ô điền mật khẩu
    document.getElementById("password-cur-info").value = "";
    document.getElementById("password-after-info").value = "";
    document.getElementById("password-comfirm-info").value = "";
}
// Tự động hiển thị thông tin khi mở form thông tin tài khoản
document.addEventListener("DOMContentLoaded", hienThiThongTin);

//================sự kiện click vào tài khoản của tôi
function chuyenFormThongTin() {
    const accountContainer = document.querySelector(".container_account");
    if (accountContainer) {
        accountContainer.style.display = "block"; 
    }

    const slider = document.querySelector('.slider');
    if (slider) {
        slider.style.display = "none";
    }

    const container = document.querySelector('.container');
    if (container) {
        container.style.display = "none";
    }
}