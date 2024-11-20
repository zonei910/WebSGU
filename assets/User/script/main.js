//=================== Slider====================
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if ( (active + 1) > lengthItems )
        active = 0;
    else 
        active += 1;

    reloadSlider();
}

prev.onclick = function() {
    if ( (active - 1) < 0 )
        active = lengthItems;
    else    
        active -= 1;

    reloadSlider();
}

let refreshSlider = setInterval(() => {next.click()}, 7000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 7000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
});



//================= pagination==================
// let buttonNext = document.querySelector('.buttonNext');
// let numbers = document.querySelectorAll('.pagination .page-note')

let current = 0;
// // add eventlisteners to the numberslist
// numbers.forEach((number,numIndex) => {
//     number.addEventListener("click", () => {
//         //1. set the curent step to  the clicked number
//         current = numIndex;
//         //2. remove the "current" class from the prev number
//         document.querySelector(".current").classList.remove('current');
//         //3. add the "active" class to the clicked number link
//         number.classList.add("current");
//         // console.log(current);
//         displayProducts(current,products);
//     })
// })

// // add eventlisteners to the Next button
// buttonNext.addEventListener('click', () => {
//     if ( current === (numbers.length - 1))
//         current = 0;
//     else
//         current += 1;
//     document.querySelector(".current")?.classList.remove('current');
//     numbers[current].classList.add("current");
//     // console.log(current);
//     displayProducts(current,products);
// })

// Hàm lọc sản phẩm
// function chooseProducts(category) {
//     products.forEach(product => {
//         const productCategory = product.getAttribute('data-category');
//         if ( category === 'all'){
//             product.style.display = 'block';
//         }
//         else if (category === productCategory)  
//             product.style.display = 'block';
//         else
//             product.style.display = 'none';
// })
// }

// Cập nhật phân trang: làm nổi bật trang hiện tại
// function updatePagination(page) {
//     numbers.forEach((item, index) => {
//         item.classList.remove('current');
//         if (index === page)
//             item.classList.add('current');
//     })
// }
// Khởi tạo: hiển thị trang đầu tiên
// displayProducts(current);


// ==================product==============
document.addEventListener('DOMContentLoaded', () => {
// let products =Array.from(document.querySelectorAll('.grid__column3'));
const products = Product;
console.log(products);
// số sản phẩm mỗi trang
const itemsPerPage = 6;
let filteredProducts = products;

// hiển thị sản phẩm theo trang hien tai
function displayProducts(page, filteredProducts) {
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;

    console.log(`Displaying products for page ${page+1}`);
    console.log(`Showing products from index ${start} to ${end - 1}`);

    const productContainer = document.getElementById('product-container');
    const productsToDisplay = filteredProducts.slice(start, end);
    productContainer.innerHTML = '';


    // Ẩn tất cả các sản phẩm trước khi hiển thị trang mới
    // filteredProducts.forEach((product, index) => {
    //     if (index >= start && index < end) {
    //         product.style.display = 'block'; // Hiển thị sản phẩm trong phạm vi
    //         console.log(`Product at index ${index} is displayed.`);
    //     } else {
    //         product.style.display = 'none'; // Ẩn sản phẩm ngoài phạm vi
    //         console.log(`Product at index ${index} is hidden.`);
    //     }
    // });

//=============== tạo sản phẩm tự động ===============
    productsToDisplay.forEach(product => {
        const productHTML = document.createElement('div');
            productHTML.classList.add('grid__column3');
            productHTML.setAttribute('data-category', product.category);
            productHTML.setAttribute('data-id', product.id);

            productHTML.innerHTML = `
                <a href="#" class="home-product-item">
                    <div class="product-img">
                        <img src="${product.images[0]}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <span class="product-prices">${product.price === 0 ? 'Hàng tặng' : product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                </a>
            `;
            productContainer.appendChild(productHTML);
        });
        addClickEventToProducts()
    // Cập nhật các nút phân trang
    updatePagination(page,filteredProducts);
}
// =========== tìm kiếm sản phẩm lọc theo tên
    function searchProducts() {
        const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
        const priceCheckboxes = document.querySelectorAll('.check-box-list input[type="checkbox"]:checked');
        console.log('Từ khóa tìm kiếm:', searchTerm);

        // lọc theo tên
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );

        // lọc theo giá
        if (priceCheckboxes.length > 0) {
            filteredProducts = filteredProducts.filter(product => {
                return Array.from(priceCheckboxes).some(checkbox => {
                    const priceCondition = checkbox.getAttribute('data-price');
                    return eval(priceCondition.replace(/price:product/g, product.price));
                });
            });
        }

        console.log('Sản phẩm đã lọc:', filteredProducts);
        
        // Cập nhật tiêu đề tìm kiếm
        const title = document.querySelector('.title');
        if ((searchTerm === '' && priceCheckboxes.length === 0) || (filteredProducts.length > 0 && searchTerm === '')) {
            title.textContent = 'Tất cả sản phẩm';
        } else  {
            title.textContent = `Kết quả tìm kiếm cho: "${searchTerm}"`;
        }

        if (filteredProducts.length > 0) {
            displayProducts(0, filteredProducts); // Gọi hàm hiển thị sản phẩm
        } else {
            const productContainer = document.getElementById('product-container');
            productContainer.innerHTML = '<p>Không tìm thấy sản phẩm nào phù hợp!</p>';
        }

        // Hiển thị sản phẩm đã lọc (nếu có)
        // displayProducts(0, filteredProducts);
    }
    const buttonSearch = document.querySelector('.button_search');
    buttonSearch.addEventListener('click',searchProducts);

// ============pagination tự động==============

function updatePagination(page, filteredProducts) {
        // Tính toán tổng số trang dựa trên số sản phẩm đã lọc
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    // Cập nhật số lượng các nút phân trang
    const paginationContainer = document.querySelector('.pagination'); 
    // console.log(paginationContainer);
    
    // Reset nội dung pagination
    paginationContainer.innerHTML = ''; 

            // Tạo lại các phần tử <li> mới với các thẻ <a>(nếu cần)
        for (let numIndex = 0; numIndex < totalPages; numIndex++) {
            const li = document.createElement('li');
            li.classList.add('pagination-item');
            const a = document.createElement('a');
            a.classList.add('page-note');
            a.href = '#';  // Đảm bảo rằng link sẽ không làm trang tải lại
            a.textContent = numIndex + 1;

            // Đặt trang hiện tại
            if (numIndex === page) 
                a.classList.add('current');
            
            // Lắng nghe sự kiện click trên các trang
            a.addEventListener('click', (event) => {
                event.preventDefault();  // Ngăn không cho trang reload
                current = numIndex;  // Cập nhật trang hiện tại
                displayProducts(current, filteredProducts);  // Hiển thị lại sản phẩm
            });

            li.appendChild(a);
            paginationContainer.appendChild(li);
        }


            const nextButton = document.createElement('li');
            nextButton.classList.add('buttonNext');
            nextButton.id = 'Next';

            const aNext = document.createElement('a');
            aNext.classList.add('page-button');
            aNext.href = '#';   
            aNext.innerHTML = '<i class="fa-solid fa-arrow-right-long"></i>';

            // Lắng nghe sự kiện click cho nút Next
            aNext.addEventListener('click', () => {
                if (current < totalPages - 1) {
                    current += 1;
                }
                else 
                    current = 0;
                document.querySelector(".current")?.classList.remove('current');
                paginationContainer.querySelectorAll('.page-note')[current].classList.add('current');
                displayProducts(current, filteredProducts);
            });

            nextButton.appendChild(aNext);
            paginationContainer.appendChild(nextButton);
        
        // Cập nhật lại khả năng kích hoạt nút "Next"
    if (totalPages <= 1) {
        nextButton.style.display = 'none'; // Nếu chỉ có một trang, ẩn nút "Next"
    } else {
        nextButton.style.display = 'block'; // Nếu có nhiều hơn 1 trang, hiển thị nút "Next"
    }
}
// Khởi tạo: hiển thị trang đầu tiên
displayProducts(current,filteredProducts);


//=============== lọc theo sản phẩm==========
let choose = document.querySelectorAll('.sub_menu a');
let categoryTitle = document.querySelector('.tilte-product .title');

choose.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const category = link.getAttribute('data-category');
        const categoryName = link.textContent; 

        // Cập nhật tiêu đề
        if ( category === 'all')
            categoryTitle.textContent = `${categoryName} sản phẩm`;
        else    
            categoryTitle.textContent = `Sản phẩm ${categoryName}`;

        choose.forEach(item => item.parentElement.classList.remove('active'));
        link.parentElement.classList.add('active');
        console.log(`Category: ${category} is actived`);
         // Lọc sản phẩm và cập nhật phân trang
        chooseProducts(category);
    })
})

function chooseProducts(category) {
     // Lọc sản phẩm theo category
    const filteredProducts = products.filter(product => {
        // const productCategory = product.getAttribute('data-category');
        // if (category === 'all') {
        //     product.style.display = 'block';  // Hiển thị tất cả sản phẩm
        //     return true;
        // } else if (category === productCategory) {
        //     product.style.display = 'block';  // Hiển thị sản phẩm có category phù hợp
        //     return true;
        // } else {
        //     product.style.display = 'none';  // Ẩn các sản phẩm không phù hợp
        //     return false;
        // }
        return category === 'all' || category === product.category;;
    })

    console.log('Filtered products:', filteredProducts);
    current = 0;  // Đặt lại trang hiện tại về trang đầu tiên sau khi lọc
    displayProducts(current, filteredProducts);
}

});

//=================== search ===================
let search = document.querySelector('.navbar_search');

search.addEventListener('click', () => {
    let dropdownsearch= document.querySelector('.navbar_search-dropdown');
    if ( dropdownsearch.style.display === 'block' )
        dropdownsearch.style.display = 'none';
    else
        dropdownsearch.style.display = 'block';
})

// ======================cart ====================
let cart = document.querySelector('.navbar_cart');

cart.addEventListener('click', () => {
    let dropdowncart = document.querySelector('.navbar_cart-dropdown-nocart');
    if ( dropdowncart.style.display === 'block' )
        dropdowncart.style.display = 'none';
    else
        dropdowncart.style.display = 'block';
})

// =====================account ==================
let account = document.querySelector('.navbar_user');

account.addEventListener('click', () => {
    let dropdownaccount = document.querySelector('.navbar_user-items');
    if ( dropdownaccount.style.display === 'block' )
        dropdownaccount.style.display = 'none';
    else
        dropdownaccount.style.display = 'block';
})

// ==============menuicon==========
let menu = document.querySelector('.navbar_two');
let menuButton = document.querySelector('.navbar__menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('navbar__open');
})



//================= login =============logout=============
function dangky() {
    // lay cac gia tri tu input de kiem tra
    let phone = document.getElementById('phone').value;
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let sex = document.getElementById('sex').value;
    let address = document.getElementById('address').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirm-password').value;

    // kiem tra nhap lai mat khau
    if ( password !== confirmpassword )
        alert("Mật khẩu không khớp!");
    return false;

    // sử dụng localstorage vì không có php
    localStorage.setItem("userphone",phone);
    localStorage.setItem("username", name);
    localStorage.setItem("userpassword",password);

    alert("Đăng kí thành công!");

    // an form dangki va hien form dang nhap

    document.getElementById('register_form').style.display = "none";
    document.getElementById('login_form').style.display = "block";
}

function dangnhap() {
    let userphone= document.getElementById("userphone").value;
    let userpassword = document.getElementById('login_password');

    let registeredPhone = localStorage.getItem("userphone")
    let registeredpassword = localStorage.getItem("userpassword");

    if ( userphone === registeredPhone && userpassword === registeredpassword ){
        alert("Đăng nhập thành công");

        // Lưu trạng thái đăng nhập
        localStorage.setItem("isLoggedIn", "true");

         // hien thi div user
        document.getElementById("navbar_user").style.display = "block";
        // Cập nhật tên người dùng
        document.getElementById("navbar_user_name").innerText = `Hi, ${username}`;
    }
    else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng");
        return false;
    }
}

function dangxuat() {
    // Xóa trạng thái đăng nhập khỏi localStorage
    localStorage.removeItem("isLoggedIn");

    alert("Đã đăng xuất thành công!");
}

function kiemtradangnhap() {
    if (localStorage.getItem("isLoggedIn") === "true") {
        let username = localStorage.getItem("username");
        document.getElementById("navbar_user").style.display = "block";
        document.getElementById("navbar_user_name").innerText = `Hi, ${username}`;
        document.getElementById("login_form").style.display = "none";
    }
}

window.onload = kiemtradangnhap;
