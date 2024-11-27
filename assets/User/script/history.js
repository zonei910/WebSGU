// function generateOrderId() {
//     return "DH" + Date.now(); // Ví dụ: DH1698771826271
// }

// function confirmOrder() {
//     const currentUser = JSON.parse(localStorage.getItem("currentUser"));

//     if (!currentUser) {
//         alert("Bạn cần đăng nhập để thanh toán!");
//         return;
//     }

//     const orderId = generateOrderId();
//     const order = {
//         id: orderId,
//         khachhang: currentUser.phone, // Hoặc bất kỳ thông tin định danh nào
//         sanpham: [...giohang], // Sao chép toàn bộ giỏ hàng
//         tongtien: giohang.reduce((sum, sp) => sum + parseInt(sp.gia) * sp.soLuong, 0),
//         trangthai: 0 // 0: Đang xử lý, 1: Đã xử lý
//     };

//     let orders = JSON.parse(localStorage.getItem("orders") || "[]");
//     orders.push(order);
//     localStorage.setItem("orders", JSON.stringify(orders));

//     // Xóa giỏ hàng sau khi đặt
//     giohang = [];
//     localStorage.setItem("giohang", JSON.stringify(giohang));

//     alert(`Đơn hàng của bạn (${orderId}) đã được tạo thành công!`);
//     showMyCart(); // Cập nhật giao diện
// }

// function getOrderDetails(madon) {
//     let orderDetails = JSON.parse(localStorage.getItem("orderDetails") || "[]");
//     return orderDetails.filter(item => item.madon === madon);  // Lọc chi tiết đơn hàng theo mã đơn
// }

// function getProductInfo(productId) {
//     let products = JSON.parse(localStorage.getItem("products") || "[]");
//     return products.find(product => product.id === productId) || {};  // Trả về thông tin sản phẩm
// }

function renderOrderHistory() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const donhang = JSON.parse(localStorage.getItem('donhang')) || [];
    
    // Lọc các đơn hàng của khách hàng hiện tại
    const userOrders = donhang.filter(order => order.phoneKH === currentUser.phone);
    let orderHtml = '';

    // Kiểm tra xem người dùng có đơn hàng không
    if (userOrders.length === 0) {
        orderHtml = `
            <div class="order-history-empty">
                <img src="./assets/User/img/download.png" alt="" class="empty-order-img">
                <p>Chưa có đơn hàng nào</p>
            </div>`;
    } else {
        userOrders.forEach(order => {
            let productHtml = '';
            let totalAmount = 0;

            // Duyệt qua các sản phẩm trong đơn hàng
            order.giohang.forEach(product => {
                let totalPrice = product.gia * product.soLuong;
                totalAmount += totalPrice;

                // Tạo HTML cho từng sản phẩm trong đơn hàng
                productHtml += `
                    <div class="order-history">
                        <div class="order-history-left">
                            <img src="${product.hinh}" alt="${product.ten}">
                            <div class="order-history-info">
                                <h4>${product.ten}</h4>
                                <p class="order-history-quantity">x${product.soLuong}</p>
                            </div>
                        </div>
                        <div class="order-history-right">
                            <div class="order-history-price">
                                <span class="order-history-current-price">${vnd(totalPrice)}</span>
                            </div>
                        </div>
                    </div>`;
            });

            // Trạng thái đơn hàng
            let statusText = order.status === 1 ? "Đã xử lý" : "Đang xử lý";
            let orderDate = order.ngaydat;
            let deliveryDate = order.ngayduyet !== 0 ? order.ngayduyet : "Chưa duyệt";

            // Tạo HTML cho đơn hàng
            orderHtml += `
                <div class="order-history-group">
                    ${productHtml}
                    <div class="order-history-control">
                        <div class="order-history-status">
                            <span class="order-history-status-sp ${statusText === 'Đã xử lý' ? 'complete' : 'no-complete'}">${statusText}</span>
                            <button id="order-history-detail" onclick="showOrderDetail('${order.id}')">
                                <i class="fa-regular fa-eye"></i> Xem chi tiết
                            </button>
                        </div>
                        <div class="order-history-total">
                            <span class="order-history-total-desc">Tổng tiền: </span>
                            <span class="order-history-toltal-price">${vnd(totalAmount)}</span>
                        </div>
                    </div>
                </div>`;
        });
    }

    // Cập nhật HTML vào phần hiển thị lịch sử đơn hàng
    const orderHistorySection = document.querySelector(".order_history .main_account");
    if (orderHistorySection) {
        orderHistorySection.innerHTML = `
            <div class="tittle-main_account">
                <h3>Quản lý đơn hàng của bạn</h3>
                <p>Xem chi tiết, trạng thái của những đơn hàng đã đặt</p>
            </div>
            ${orderHtml}`;
    }

    // Hiển thị phần lịch sử đơn hàng
    const orderHistoryDiv = document.querySelector(".order_history");
    if (orderHistoryDiv) {
        orderHistoryDiv.style.display = "block"; // Hiển thị phần lịch sử đơn hàng
    }
}

// Định dạng tiền tệ VND
function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

console.log(localStorage.getItem('donhang'));