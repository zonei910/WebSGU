// Lấy giỏ hàng từ storage hoặc mảng rỗng
var giohang = JSON.parse(sessionStorage.getItem('giohang') || '[]'); 

//click vào nút "Thêm vào giỏ"
document.getElementById('add-to-cart').addEventListener('click', function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
        alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!");
        return; // Dừng lại nếu chưa đăng nhập
    }

    var soLuong = parseInt(document.getElementById('product-quantity').value);

    var ten = document.getElementById('product-name').innerText;
    var gia = document.getElementById('product-price').innerText.replace('đ', '').trim(); // Loại bỏ ký tự "đ"
    var hinh = document.getElementById('product-main-img').src;

    var sp = [hinh, ten, gia, soLuong];

    // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
    var kt = false;
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i][1] === ten) {
            giohang[i][3] = parseInt(giohang[i][3]) + soLuong;
            kt = true;
            break;
        }
    }


    if (!kt) {
        giohang.push(sp);
    }

    // Cập nhật lại giỏ hàng
    sessionStorage.setItem('giohang', JSON.stringify(giohang));
    showcountsp();
    showMyCart();
});

function showcountsp() {
    var soLuongSP = giohang.length;
    document.getElementById('cart-count').innerText = soLuongSP;
}

function xoasp(x) {
    var tr = x.parentNode.parentNode;
    var tensp = tr.children[1].innerText;
    tr.remove(); // Xóa dòng trong bảng

    // Xóa sản phẩm trong mảng giohang
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i][1] === tensp) {
            giohang.splice(i, 1);
            break;
        }
    }

    // Cập nhật lại :>
    sessionStorage.setItem('giohang', JSON.stringify(giohang));
    showMyCart();
}

// Hàm xóa tất cả sản phẩm trong giỏ
function deleteAll() {
    giohang = []; // Xóa heest
    sessionStorage.setItem('giohang', JSON.stringify(giohang));
    showMyCart();
}

// Hiển thị giỏ hàng
function showMyCart() {
    var tt = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        let thanhtien = parseInt(giohang[i][2]) * parseInt(giohang[i][3]);
        tong += thanhtien;
        tt += '<tr>' +
            '<td><img class="cart-item-img" src="' + giohang[i][0] + '" alt=""></td>' +
            '<td>' + giohang[i][1] + '</td>' +
            '<td>' + giohang[i][3] + '</td>' +
            '<td>' + giohang[i][2] + 'đ</td>' +
            '<td>' + thanhtien + 'đ</td>' +
            '<td><button onclick="xoasp(this)">Xóa</button></td>' +
            '</tr>';
    }
    tt += '<tr class="row-end">' +
        '<th colspan="4">Tổng đơn giá</th>' +
        '<th colspan="2"><div>' + tong + 'đ</div></th>' +
        '</tr>';
    document.getElementById('myCart').innerHTML = tt;
    showcountsp();
}

// Hiển thị hoặc ẩn giỏ hàng  !!!!!!!   Hàm này không tìm ra lỗi nhưng vẫn lỗi ( click giohang không đóng lại giỏ ) 
function hienthiGiohang() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
        alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!");
        return; // Dừng lại nếu chưa đăng nhập
    }
    let x = document.getElementById('giohang');

    let currentDisplay = window.getComputedStyle(x).display;
    
    if (currentDisplay === 'none') {
        x.style.display = 'block'; 
    } else {
        x.style.display = 'none';
    }

    if (noCart) {
        noCart.style.display = 'none';
    }
    
    showMyCart(); 
}

//bonus thêm :> khắc phục lỗi bên trên 
function closeCart(){
    document.getElementById("giohang").style.display='none';
}





// Mở phần thanh toán
function openPayment() {
    window.location.href="payment.html";
    // document.getElementById("giohang").style.display = 'none'; 
    // document.getElementById("payment").style.display = 'block'; 
    // Hiển thị sản phẩm đã chọn trong form thanh toán
    // showThanhToan(); 
}

// Hiển thị thông tin thanh toán
function showThanhToan() {
    var tt = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        let thanhtien = parseInt(giohang[i][2]) * parseInt(giohang[i][3]);
        tong += thanhtien;
        tt += '<tr>' +
            '<td><img class="cart-item-img" src="' + giohang[i][0] + '" alt=""></td>' +
            '<td>' + giohang[i][1] + '</td>' +
            '<td>' + giohang[i][3] + '</td>' +
            '<td>' + giohang[i][2] + 'đ</td>' +
            '<td>' + thanhtien + 'đ</td>' +
            '</tr>';
    }
    tt += '<tr class="row-end">' +
        '<th colspan="4">Tổng đơn giá</th>' +
        '<th><div>' + tong + 'đ</div></th>' +
        '</tr>';
    document.getElementById('paying').innerHTML = tt;
}

//bỏ form thanh toán và quay lại giỏ hàng
function cancelPayment() {
    document.getElementById("payment").style.display = 'none'; // Ẩn form thanh toán
    document.getElementById("giohang").style.display = 'block'; // Hiển thị lại giỏ hàng
}

// Hàm gọi khi trang được tải lại để hiển thị số lượng sản phẩm trong giỏ hàng
document.addEventListener("DOMContentLoaded", function() {
    showcountsp(); 
    showMyCart();
});


// người dùng hiện tại storage
// let currentUser = JSON.parse(localStorage.getItem("currentUser"));
// if (currentUser) {
//     // Lấy số điện thoại
//     let sdt = currentUser.phone;

//     let customers = JSON.parse(localStorage.getItem("Customer"));
//     const user = customers.find(user => user.phone === sdt);

//     // Nếu tìm thấy người dùng thì thêm giohang vào nó
//     if (user) {
//         user.giohang = giohang; 

//         // Cập nhật lại mảng Customer trong bộ nhớ
//         localStorage.setItem("Customer", JSON.stringify(customers));  // Lưu lại mảng Customer vào localStorage

//         // Kiểm tra lại người dùng đã có giohang
//         alert("Đã thêm giỏ hàng vào người dùng: " + JSON.stringify(user));
//     } else {
//         alert("Không tìm thấy người dùng với số điện thoại: " + sdt);
//     }
// } else {
//     alert("Không có người dùng hiện tại trong localStorage.");
// }