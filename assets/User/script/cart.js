// Lấy giỏ hàng từ storage hoặc mảng rỗng
var giohang = JSON.parse(localStorage.getItem('giohang') || '[]'); 

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
        if (giohang[i][1] === tensp) {
            giohang[i][3]++;
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
        if (giohang[i][1] === tensp) {
            if (giohang[i][3]>1){
                giohang[i][3]--;
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
