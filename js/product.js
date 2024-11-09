//=========== product img============
// let mainImg = document.querySelector('.main_img');
// let smallImgs = document.querySelectorAll('.small_img');

// smallImgs.forEach((img) => {
//     img.onclick = function() {
//         console.log('Thumbnail clicked:', img.src);
//         mainImg.src = img.src;
//     }
// })

// ==============detail products ==================
const Product = [
    {
        id: 1,
        name: "Yellow Gold Multi Sapphire & Diamond Ring",
        category: "ring",
        price:  1300000,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Rose</p>
            <p>Stones: Round Diamond 0.95</p>
            <p>18" Chain Included. Pendant Length: 1.25"</p>
        `,
        images: [
            "./assets/img/ring/1.png",
            "./assets/img/ring/2.png",
            "./assets/img/ring/3.png",
            "./assets/img/ring/4.png"
        ]
    },
    {
        id: 2,
        name: "Đồng hồ(Hàng tặng)",
        category: "watch",
        price: 0,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Yellow/Rose/Green</p>
            <p>Stones: Round Yellow Sapphire 0.23</p>
            <p>Round Diamond 0.09</p>
        `,
        images: [
            "./assets/img/watch/1.png",
            "./assets/img/watch/2.png",
            "./assets/img/watch/3.png",
            "./assets/img/watch/4.png"
        ]
    },
    {
        id: 3,
        name: "Vòng tay(Hàng tặng)",
        category: "bracelet",
        price: 0,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: White</p>
            <p>Emerald Cut Blue Sapphire 1.52</p>
            <p>Natural Diffused Ceylon Sapphire</p>
        `,
        images: [
            "./assets/img/bracelet/1.png",
            "./assets/img/bracelet/2.png",
            "./assets/img/bracelet/3.png",
            "./assets/img/bracelet/4.png"
        ]
    },
    {
        id: 4,
        name: "White Gold Diamond Palm Tree Necklace",
        category: "necklace",
        price: 460000,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: White</p>
            <p>Stones: Round Diamond 9.19</p>
            <p>Length: 7" Width:1/2"</p>
        `,
        images: [
            "./assets/img/necklace/1.png",
            "./assets/img/necklace/2.png",
            "./assets/img/necklace/3.png",
            "./assets/img/necklace/4.png"
        ]
    },
    {
        id: 5,
        name: "White Sapphire Band Ring",
        category: "ring",
        price: 760000,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Rose/Yellow/White</p>
            <p>Round Ruby 0.99</p>
            <p>Oval Emerald 1.02</p>
        `,
        images: [
            "./assets/img/ring/1.png",
            "./assets/img/ring/2.png",
            "./assets/img/ring/3.png",
            "./assets/img/ring/4.png"
        ]
    },
    {
        id: 6,
        name: "Vòng cổ(Hàng tặng)",
        category: "necklace",
        price: 0,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Rose/Yellow/White</p>
            <p>Round Emerald 0.99</p>
            <p>Oval Emerald 1.02</p>
        `,
        images: [
            "./assets/img/necklace/1.png",
            "./assets/img/necklace/2.png",
            "./assets/img/necklace/3.png",
            "./assets/img/necklace/4.png"
        ]
    },
    {
        id: 7,
        name: "Diamond Ring",
        category: "ring",
        price: 1400000,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Rose/Yellow/White</p>
            <p>Round Ruby 0.99</p>
            <p>Oval Emerald 1.02</p>
        `,
        images: [
            "./assets/img/ring/1.png",
            "./assets/img/ring/2.png",
            "./assets/img/ring/3.png",
            "./assets/img/ring/4.png"
        ]
    },
    {
        id: 8,
        name: "Vòng cổ(Hàng tặng)",
        category: "necklace",
        price: 0,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Rose/Yellow/White</p>
            <p>Round Emerald 0.99</p>
            <p>Oval Emerald 1.02</p>
        `,
        images: [
            "./assets/img/necklace/1.png",
            "./assets/img/necklace/2.png",
            "./assets/img/necklace/3.png",
            "./assets/img/necklace/4.png"
        ]
    },
    {
        id: 9,
        name: "Đồng hồ(Hàng tặng)",
        category: "watch",
        price: 0,
        description: `
            <p>Metal: 14K Gold</p>
            <p>Metal Color: Yellow/Rose/Green</p>
            <p>Stones: Round Yellow Sapphire 0.23</p>
            <p>Round Diamond 0.09</p>
        `,
        images: [
            "./assets/img/watch/1.png",
            "./assets/img/watch/2.png",
            "./assets/img/watch/3.png",
            "./assets/img/watch/4.png"
        ]
    },
];

// Hàm để hiển thị thông tin chi tiết sản phẩm khi click vào sản phẩm
function showProductDetail(productId) {
    // Tìm sản phẩm tương ứng trong mảng products
    const product = Product.find(p => p.id === productId);

    if (product) {
        // Cập nhật thông tin vào div chi tiết sản phẩm
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-price').innerText = product.price + '₫';

        // Hiển thị mô tả với các thẻ HTML
        document.getElementById('product-description').innerHTML = product.description;
        document.getElementById('product-main-img').src = product.images[0];

        // Hiển thị các ảnh nhỏ (nếu có)
        const smallImgContainer = document.getElementById('product-small-imgs');
        smallImgContainer.innerHTML = '';
        product.images.forEach(imgSrc => {
             // Tạo div nhỏ để bọc ảnh
            const smallImgCol = document.createElement('div');
            smallImgCol.classList.add('small_img-col');
            // Tạo thẻ img và thêm ảnh
            const imgElement = document.createElement('img');
            imgElement.classList.add('small_img');
            imgElement.src = imgSrc;
             // Thêm ảnh vào div nhỏ
            smallImgCol.appendChild(imgElement);
            // Thêm div này vào container
            smallImgContainer.appendChild(smallImgCol);
            
        });
        //hàm chuyển ảnh nhỏ sang ảnh chính
        let mainImg = document.querySelector('.main_img');
        let smallImgs = document.querySelectorAll('.small_img');

        smallImgs.forEach((img) => {
            img.onclick = function() {
                console.log('Thumbnail clicked:', img.src);
                mainImg.src = img.src;
            }
        })

         // Hiển thị div chi tiết sản phẩm
        let detail = document.querySelector('.detail_product');
        detail.style.display = 'block';
        document.querySelector('.product_info i').onclick = function() {
            detail.style.display = 'none';
        }
    }
}

// Lắng nghe sự kiện click trên các sản phẩmso
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.home-product-item').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            // Lấy id sản phẩm từ data-id
            const productId = item.closest('.grid__column3').getAttribute('data-id');

            if (productId)
            showProductDetail(parseInt(productId));
        });
    });
    console.log('Trang đã tải xong!');
});