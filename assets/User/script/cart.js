// Lấy giỏ hàng từ storage hoặc mảng rỗng
var giohang = JSON.parse(localStorage.getItem('giohang') || '[]'); 



//click vào nút "Thêm vào giỏ"
document.getElementById('add-to-cart').addEventListener('click', function() {

    var soLuong = parseInt(document.getElementById('product-quantity').value);
    var ten = document.getElementById('product-name').innerText;
    var gia = document.getElementById('product-price').innerText.replace('đ', '').trim(); // Loại bỏ ký tự "đ"
    var hinh = document.getElementById('product-main-img').src;
    let product = JSON.parse(localStorage.getItem("products"));
    let id;
    for(let i = 0 ; i < product.length ; i ++){
        if(product[i].name == ten){
            id = product[i].id;
        }
    }


    var sp = {
        hinh: hinh,
        id: id,
        ten: ten,
        gia: gia,
        soLuong: soLuong,
    }

    // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
    var kt = false;
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i].ten === ten) {
            giohang[i].soLuong = parseInt(giohang[i].soLuong) + soLuong;
            kt = true;
            break;
        }
    }

    if (!kt) {
        giohang.push(sp);
    }

    // Cập nhật lại giỏ hàng
    localStorage.setItem('giohang', JSON.stringify(giohang));
    showcountsp();
    showMyCart();

    

});

function showcountsp() {
    var soLuongSP = giohang.length;
    document.getElementById('cart-count').innerText = soLuongSP;
}

function tangsp(x){
    var tr = x.parentNode.parentNode;
    var tensp = tr.children[1].innerText;

    // Tangw sản phẩm trong mảng giohang
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i].ten === tensp) {
            giohang[i].soLuong++;
            break;
        }
    }

    // Cập nhật lại giỏ hàng
    localStorage.setItem('giohang', JSON.stringify(giohang));
    showcountsp();
    showMyCart();
}

function giamsp(x){
    var tr = x.parentNode.parentNode;
    var tensp = tr.children[1].innerText;

    // Tangw sản phẩm trong mảng giohang
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i].ten === tensp) {
            if (parseInt(giohang[i].soLuong)>1){
                giohang[i].soLuong--;
            }
            else xoasp(x);
            break;
        }
    }

    // Cập nhật lại giỏ hàng
    localStorage.setItem('giohang', JSON.stringify(giohang));
    showcountsp();
    showMyCart();
}

function xoasp(x) {
    var tr = x.parentNode.parentNode;
    var tensp = tr.children[1].innerText;
    tr.remove(); // Xóa dòng trong bảng

    // Xóa sản phẩm trong mảng giohang
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i].ten === tensp) {
            giohang.splice(i, 1);
            break;
        }
    }

    // Cập nhật lại :>
    localStorage.setItem('giohang', JSON.stringify(giohang));
    showMyCart();
}

// Hàm xóa tất cả sản phẩm trong giỏ
function deleteAll() {
    giohang = []; // Xóa heest
    localStorage.setItem('giohang', JSON.stringify(giohang));
    showMyCart();
}

// Hiển thị giỏ hàng
function showMyCart() {
    var tt = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        let gia = parseInt(giohang[i].gia.replace('đ', '').trim()); // Xóa ký tự "đ"
        console.log(gia);
        let thanhtien = gia * parseInt(giohang[i].soLuong);
        
        tong += thanhtien;
        tt += '<tr>' +
            '<td><img class="cart-item-img" src="' + giohang[i].hinh + '" alt=""></td>' +
            '<td>' + giohang[i].ten + '</td>' +
            '<td>' + giohang[i].soLuong + '</td>' +
            '<td>' + giohang[i].gia + 'đ</td>' +
            '<td>' + thanhtien + 'đ</td>' +
            '<td>' +
                '<button onclick="xoasp(this)">Xóa</button>' +
                '<button onclick="tangsp(this)">Tăng</button>' +
                '<button onclick="giamsp(this)">Giảm</button>' +
            '</td>' +
            '</tr>';
    }
    tt += '<tr class="row-end">' +
        '<th colspan="4">Tổng đơn giá</th>' +
        '<th colspan="2"><div>' + tong + 'đ</div></th>' +
        '</tr>';
    document.getElementById('myCart').innerHTML = tt;
    showcountsp();
}

// Hiển thị hoặc ẩn giỏ hàng
function hienthiGiohang() {
    
    let x = document.getElementById('giohang');

    let currentDisplay = window.getComputedStyle(x).display;
    
    if (currentDisplay === 'none') {
        x.style.display = 'block'; 
    } else {
        x.style.display = 'none';
    }

    // if (noCart) {
    //     noCart.style.display = 'none';
    // }
    
    showMyCart(); 
}

//bonus thêm :> khắc phục lỗi bên trên 
function closeCart(){
    document.getElementById("giohang").style.display='none';
}

// Mở phần thanh toán
function openPayment() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
        alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!");
        moDangNhap();
        return; // Dừng lại nếu chưa đăng nhập
    }else{

    let currentUser  = JSON.parse(localStorage.getItem("currentUser"));
    currentUser.giohang = JSON.parse(localStorage.getItem("giohang"));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href="payment.html";
    }
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
    document.getElementById('showProductPaying').innerHTML = tt;
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
