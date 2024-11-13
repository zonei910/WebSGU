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
let buttonNext = document.querySelector('.buttonNext');
let numbers = document.querySelectorAll('.pagination .page-note')

let current = 0;
// add eventlisteners to the numberslist
numbers.forEach((number,numIndex) => {
    number.addEventListener("click", () => {
        //1. set the curent step to  the clicked number
        current = numIndex;
        //2. remove the "current" class from the prev number
        document.querySelector(".current").classList.remove('current');
        //3. add the "active" class to the clicked number link
        number.classList.add("current");
        // console.log(current);
        displayProducts(current,products);
    })
})

// add eventlisteners to the Next button
buttonNext.addEventListener('click', () => {
    if ( current === (numbers.length - 1))
        current = 0;
    else
        current += 1;
    document.querySelector(".current")?.classList.remove('current');
    numbers[current].classList.add("current");
    // console.log(current);
    displayProducts(current,products);
})



// ==================product==============
let products =Array.from(document.querySelectorAll('.grid__column3'));
// console.log(products);
// số sản phẩm mỗi trang
const itemsPerPage = 6;
let filteredProducts = products;

// hiển thị sản phẩm theo trang hien tai
function displayProducts(page, filteredProducts) {
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;

    console.log(`Displaying products for page ${page+1}`);
    console.log(`Showing products from index ${start} to ${end - 1}`);
    // Ẩn tất cả các sản phẩm trước khi hiển thị trang mới
    filteredProducts.forEach((product, index) => {
        if (index >= start && index < end) {
            product.style.display = 'block'; // Hiển thị sản phẩm trong phạm vi
            console.log(`Product at index ${index} is displayed.`);
        } else {
            product.style.display = 'none'; // Ẩn sản phẩm ngoài phạm vi
            console.log(`Product at index ${index} is hidden.`);
        }
    });
    // Cập nhật các nút phân trang
    updatePagination(page,filteredProducts);
}

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



// ============pagination tự động==============

function updatePagination(page, filteredProducts) {
     // Tính toán tổng số trang dựa trên số sản phẩm đã lọc
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    // Cập nhật số lượng các nút phân trang
    const paginationContainer = document.querySelector('.pagination'); 
    // console.log(paginationContainer);
    
    // Lấy danh sách các nút phân trang hiện tại
    const currentPageNotes = Array.from(paginationContainer.querySelectorAll('.pagination-item'));


    // Tìm nút "Next"
    let nextButton = paginationContainer.querySelector('.buttonNext');

    // Nếu số lượng nút phân trang cần thay đổi (thêm hoặc bớt), làm lại các nút phân trang
    if (currentPageNotes.length !== totalPages) {
         // Xóa các phần tử <li> cũ
        currentPageNotes.forEach(item => {
            if (!item.classList.contains('buttonNext')) {
                item.remove();
            }
        });
        
         // Tạo lại các phần tử <li> mới với các thẻ <a>(nếu cần)
        for (let i = 0; i < totalPages; i++) {
            const li = document.createElement('li');
            li.classList.add('pagination-item');

            const a = document.createElement('a');
            a.classList.add('page-note');
            a.href = '#';  // Đảm bảo rằng link sẽ không làm trang tải lại
            a.textContent = i + 1;

                // Lắng nghe sự kiện click trên các trang
            a.addEventListener('click', (event) => {
                event.preventDefault();  // Ngăn không cho trang reload
                current = i;  // Cập nhật trang hiện tại
                displayProducts(current, filteredProducts);  // Hiển thị lại sản phẩm
            });

            li.appendChild(a);
            paginationContainer.appendChild(li);
        }

        // Chỉ hiển thị nút "Next" nếu có hơn 1 trang
        if (totalPages > 1 && !nextButton) {
            nextButton = document.createElement('li');
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
                document.querySelector(".current")?.classList.remove('current');
                paginationContainer.querySelectorAll('.page-note')[current].classList.add('current');
                displayProducts(current, filteredProducts);
            });

            nextButton.appendChild(aNext);
            paginationContainer.appendChild(nextButton);
        }
    }
    // Cập nhật các nút phân trang (thêm lớp "current" cho trang hiện tại)
    const pageLinks = paginationContainer.querySelectorAll('.page-note');
    pageLinks.forEach((link, index) => {
        link.classList.remove('current');
        if (index === page) {
            link.classList.add('current');  // Làm nổi bật trang hiện tại
        }
    });
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

function chooseProducts(category) {
     // Lọc sản phẩm theo category
    const filteredProducts = products.filter(product => {
        const productCategory = product.getAttribute('data-category');
        if (category === 'all') {
            product.style.display = 'block';  // Hiển thị tất cả sản phẩm
            return true;
        } else if (category === productCategory) {
            product.style.display = 'block';  // Hiển thị sản phẩm có category phù hợp
            return true;
        } else {
            product.style.display = 'none';  // Ẩn các sản phẩm không phù hợp
            return false;
        }
    })

    current = 0;  // Đặt lại trang hiện tại về trang đầu tiên sau khi lọc
    displayProducts(current, filteredProducts);
}

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