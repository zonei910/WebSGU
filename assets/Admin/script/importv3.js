function stripHtml(html) {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = html;
    return temporaryElement.textContent || temporaryElement.innerText || "";
}

document.addEventListener("DOMContentLoaded", () => {
    const rowsPerPage = 5; // Number of rows to show per page
    let currentPage = 1;
    let products = [];
    let editingItemIndex = null;

    // Load JSON data from `data.json`
    function loadData() {
        try {
            // Embedded JSON data
            products = [
                {
                id: 1,
        name: "Đồng Hồ Vàng Sang Trọng",
        category: "watch",
        price: 47500000,
        description: `
            <span>Chất liệu: Vàng 18K</span><br>
            <span>Chuyển động: Tự động</span><br>
            <span>Có hả năng chống nước</span><br>
            <span>Chức năng: Ngày, Chức năng bấm giờ</span>
        `,
        images: [
            "assets/User/img/watch/1-1.jpg",
            "assets/User/img/watch/1-2.jpg",
            "assets/User/img/watch/1-3.jpg",
            "assets/User/img/watch/1-4.jpg"
        ]
    },
    {
        id: 2,
        name: "Đồng Hồ Đính Kim Cương",
        category: "watch",
        price: 71250000,
        description: `
            <span>Chất liệu: Vàng Trắng 14K</span><br>
            <span>Đá: Kim Cương Tròn 1.5 carat</span><br>
            <span>Chuyển động: Quartz</span><br>
            <span>Có hả năng chống nước</span>
        `,
        images: [
            "assets/User/img/watch/2-1.jpg",
            "assets/User/img/watch/2-2.jpg",
            "assets/User/img/watch/2-3.jpg",
            "assets/User/img/watch/2-4.jpg"
        ]
    },
    {
        id: 3,
        name: "Đồng Hồ Bạch Kim",
        category: "watch",
        price: 114000000,
        description: `
            <span>Chất liệu: Bạch Kim</span><br>
            <span>Chuyển động: Cơ học</span><br>
            <span>Chức năng: Chức năng bấm giờ, Ngày</span><br>
            <span>Có hả năng chống nước</span>
        `,
        images: [
            "assets/User/img/watch/3-1.jpg",
            "assets/User/img/watch/3-2.jpg",
            "assets/User/img/watch/3-3.jpg",
            "assets/User/img/watch/3-4.jpg"
        ]
    },
    {
        id: 4,
        name: "Đồng Hồ Vàng Hồng Sang Trọng",
        category: "watch",
        price: 80750000,
        description: `
            <span>Chất liệu: Vàng Hồng 18K</span><br>
            <span>Chuyển động: Tự động</span><br>
            <span>Đá: Kim Cương Accent</span><br>
            <span>Có hả năng chống nước</span>
        `,
        images: [
            "assets/User/img/watch/4-1.jpg",
            "assets/User/img/watch/4-2.jpg",
            "assets/User/img/watch/4-3.jpg",
            "assets/User/img/watch/4-4.jpg"
        ]
    },
    {
        id: 5,
        name: "Đồng Hồ Mặt Sapphire",
        category: "watch",
        price: 93100000,
        description: `
            <span>Chất liệu: Vàng 14K Vàng Vàng</span><br>
            <span>Đá: Mặt Sapphire Xanh</span><br>
            <span>Chuyển động: Cơ học Thụy Sĩ</span><br>
            <span>Khong chống nước</span>
        `,
        images: [
            "assets/User/img/watch/5-1.jpg",
            "assets/User/img/watch/5-2.jpg",
            "assets/User/img/watch/5-3.jpg",
            "assets/User/img/watch/5-4.jpg"
        ]
    },
    {
        id: 6,
        name: "Nhẫn Đính Hôn Kim Cương",
        category: "ring",
        price: 142500000,
        description: `
            <span>Chất liệu: Bạch Kim</span><br>
            <span>Đá: Kim Cương Tròn 2 Carat</span><br>
            <span>Size Nhẫn: 6</span><br>
            <span>Kiểu Dáng: Đặt Chân</span>
        `,
        images: [
            "assets/User/img/ring/1-1.jpg",
            "assets/User/img/ring/1-2.jpg",
            "assets/User/img/ring/1-3.jpg",
            "assets/User/img/ring/1-4.jpg"
        ]
    },
    {
        id: 7,
        name: "Nhẫn Vàng và Ruby",
        category: "ring",
        price: 80750000,
        description: `
            <span>Chất liệu: Vàng 18K</span><br>
            <span>Đá: Ruby Tròn 1.5 Carat</span><br>
            <span>Size Nhẫn: 7</span><br>
            <span>Kiểu Dáng: Bezel</span>
        `,
        images: [
            "assets/User/img/ring/2-1.jpg",
            "assets/User/img/ring/2-2.jpg",
            "assets/User/img/ring/2-3.jpg",
            "assets/User/img/ring/2-4.jpg"
        ]
    },
    {
        id: 8,
        name: "Nhẫn Solitaire Ngọc Lục Bảo",
        category: "ring",
        price: 90250000,
        description: `
            <span>Chất liệu: Vàng Trắng 18K</span><br>
            <span>Đá: Ngọc Lục Bảo 2 Carat</span><br>
            <span>Size Nhẫn: 6.5</span><br>
            <span>Kiểu Dáng: Đặt Chân</span>
        `,
        images: [
            "assets/User/img/ring/3-1.jpg",
            "assets/User/img/ring/3-2.jpg",
            "assets/User/img/ring/3-3.jpg",
            "assets/User/img/ring/3-4.jpg"
        ]
    },
    {
        id: 9,
        name: "Nhẫn Ngọc Lục Bảo và Kim Cương",
        category: "ring",
        price: 104500000,
        description: `
            <span>Chất liệu: Vàng Trắng 14K</span><br>
            <span>Đá: Ngọc Lục Bảo 1.2 Carat, Kim Cương 0.5 Carat</span><br>
            <span>Size Nhẫn: 8</span><br>
            <span>Kiểu Dáng: Kênh</span>
        `,
        images: [
            "assets/User/img/ring/4-1.jpg",
            "assets/User/img/ring/4-2.jpg",
            "assets/User/img/ring/4-3.jpg",
            "assets/User/img/ring/4-4.jpg"
        ]
    },
    {
        id: 10,
        name: "Bộ Nhẫn Cưới Bạch Kim",
        category: "ring",
        price: 161500000,
        description: `
            <span>Chất liệu: Bạch Kim</span><br>
            <span>Đá: Kim Cương Tròn 1 Carat</span><br>
            <span>Bộ Sản Phẩm: Nhẫn Đính Hôn và Nhẫn Cưới</span><br>
            <span>Kiểu Dáng: Đặt Chân</span>
        `,
        images: [
            "assets/User/img/ring/5-1.jpg",
            "assets/User/img/ring/5-2.jpg",
            "assets/User/img/ring/5-3.jpg",
            "assets/User/img/ring/5-4.jpg"
        ]
    },
    {
        id: 11,
        name: "Dây Chuyền Bạc Họa Tiết Móng Ngựa",
        category: "necklace",
        price: 750000,
        description: `
            <span>Metal: 925 Sterling Silver</span><br>
            <span>Stone: Blue Sapphire</span><br>
            <span>Length: 40mm</span><br>
            <span>Style: Drop Earrings</span>
        `,
        images: [
            "assets/User/img/necklace/11-1.jpg",
            "assets/User/img/necklace/11-2.jpg",
            "assets/User/img/necklace/11-3.jpg",
            "assets/User/img/necklace/11-4.jpg"
        ]
    },
    {
        id: 12,
        name: "Dây Chuyền Bạc Mặt Tròn",
        category: "necklace",
        price: 1200000,
        description: `
            <span>Metal: 14K White Gold</span><br>
            <span>Stone: Round Diamonds 0.5 carat</span><br>
            <span>Style: Stud</span><br>
            <span>Finish: Polished</span>
        `,
        images: [
            "assets/User/img/necklace/12-1.jpg",
            "assets/User/img/necklace/12-2.jpg",
            "assets/User/img/necklace/12-3.jpg",
            "assets/User/img/necklace/12-4.jpg"
        ]
    },
    {
        id: 13,
        name: "Dây Chuyền Bạc Trái Tim Nhỏ",
        category: "necklace",
        price: 550000,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Stone: Freshwater Pearl</span><br>
        <span>Style: Drop Earrings</span><br>
            <span>Length: 30mm</span>
        `,
        images: [
            "assets/User/img/necklace/13-1.jpg",
            "assets/User/img/necklace/13-2.jpg",
            "assets/User/img/necklace/13-3.jpg",
            "assets/User/img/necklace/13-4.jpg"
        ]
    },
    {
        id: 14,
        name: "Dây Chuyền Bạc Mặt Trăng",
        category: "necklace",
        price: 650000,
        description: `
            <span>Metal: 14K Rose Gold</span><br>
            <span>Diameter: 35mm</span><br>
            <span>Style: Hoop</span><br>
            <span>Finish: Matte</span>
        `,
        images: [
            "assets/User/img/necklace/14-1.jpg",
            "assets/User/img/necklace/14-2.jpg",
            "assets/User/img/necklace/14-3.jpg",
            "assets/User/img/necklace/14-4.jpg"
        ]
    },
    {
        id: 15,
        name: "Dây Chuyền Bạc Dancing Stone",
        category: "necklace",
        price: 450000,
    description: `
            <span>Metal: Silver</span><br>
            <span>Stones: Clear Crystals</span><br>
            <span>Length: 60mm</span><br>
            <span>Style: Chandelier</span>
        `,
        images: [
            "assets/User/img/necklace/15-1.jpg",
            "assets/User/img/necklace/15-2.jpg",
            "assets/User/img/necklace/15-3.jpg",
            "assets/User/img/necklace/15-3.jpg"
        ]
    },
    {
        id: 16,
        name: "Vòng Tay Vàng K10",
        category: "bracelet",
        price: 2000000,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: Rose</span><br>
            <span>Stones: Round Diamond 0.95</span><br>
            <span>18" Chain Included. Pendant Length: 1.25"</span>
        `,
        images: [
            "assets/User/img/bracelet/16-1.jpg",
            "assets/User/img/bracelet/16-2.jpg",
            "assets/User/img/bracelet/16-3.jpg",
            "assets/User/img/bracelet/16-4.jpg"
        ]
    },
    {
        id: 17,
        name: "Vòng Tay Trắng K10",
        category: "bracelet",
        price: 1500000,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: Yellow/Rose/Green</span><br>
            <span>Stones: Round Yellow Sapphire 0.23</span><br>
            <span>Round Diamond 0.09</span>
        `,
        images: [
            "assets/User/img/bracelet/17-1.jpg",
            "assets/User/img/bracelet/17-2.jpg",
            "assets/User/img/bracelet/17-3.jpg",
            "assets/User/img/bracelet/17-4.jpg"
        ]
    },
    {
        id: 18,
        name: "Vòng Tay Vàng K10",
        category: "bracelet",
        price: 2100000,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: White</span><br>
            <span>Emerald Cut Blue Sapphire 1.52</span><br>
            <span>Natural Diffused Ceylon Sapphire</span>
        `,
        images: [
            "assets/User/img/bracelet/18-1.jpg",
            "assets/User/img/bracelet/18-2.jpg",
            "assets/User/img/bracelet/18-3.jpg",
            "assets/User/img/bracelet/18-4.jpg"
        ]
    },
    {
        id: 19,
        name: "Vòng Tay Vàng Trắng K10",
        category: "bracelet",
        price: 2500000,
        description: `
            <span>Metal: 14K Gold</span><br>
            <span>Metal Color: White</span><br>
            <span>Emerald Cut Blue Sapphire 1.52</span><br>
            <span>Natural Diffused Ceylon Sapphire</span>
        `,
        images: [
            "assets/User/img/bracelet/19-1.jpg",
            "assets/User/img/bracelet/19-2.jpg",
            "assets/User/img/bracelet/19-3.jpg",
            "assets/User/img/bracelet/19-4.jpg"
        ]
    },
    {
        id: 20,
        name: "Vòng Tay Vàng K18",
        category: "bracelet",
        price: 1400000,
        description: `
            <span>Black Month | Sale off 10~20%</span><br>
            <span>Metal Color: Rose</span><br>
            <span>Emerald Cut Blue Sapphire 1.52</span><br>
            <span>Natural Diffused Ceylon Sapphire</span>
        `,
        images: [
            "assets/User/img/bracelet/20-1.jpg",
            "assets/User/img/bracelet/20-2.jpg",
            "assets/User/img/bracelet/20-3.jpg",
            "assets/User/img/bracelet/20-4.jpg"
        ]
    },
    {
        id: 21,
        name: "Bông Tai 2 Trái Tim Vàng Hồng",
        category: "earring",
        price: 4000000,
        description: `
            <span>Black Month | Sale off 10~20%</span><br>
            <span>Metal Color: Rose</span><br>
            <span>Emerald Cut Blue Sapphire 1.52</span><br>
            <span>Natural Diffused Ceylon Sapphire</span>
        `,
        images: [
            "assets/User/img/earrings/21-1.jpg",
            "assets/User/img/earrings/21-2.jpg",
            "assets/User/img/earrings/21-3.jpg",
            "assets/User/img/earrings/21-4.jpg"
        ]
    },
    {
        id: 22,
        name: "Bông Tai Bạc Bông Hoa",
        category: "earring",
        price: 3000000,
        description: `
            <span>Black Month | Sale off 10~20%</span><br>
            <span>Metal Color: Rose</span><br>
            <span>Emerald Cut Blue Sapphire 1.52</span><br>
            <span>Natural Diffused Ceylon Sapphire</span>
        `,
        images: [
            "assets/User/img/earrings/22-1.jpg",
            "assets/User/img/earrings/22-2.jpg",
            "assets/User/img/earrings/22-3.jpg",
            "assets/User/img/earrings/22-4.jpg"
        ]
    },

    {
        id: 23,
        name: "Bông Tai Bạc Đính Akoya",
        category: "earring",
        price: 3500000,
        description: `
            <span>Black Month | Sale off 10~20%</span><br>
            <span>Metal Color: Rose</span><br>
            <span>Emerald Cut Blue Sapphire 1.52</span><br>
            <span>Natural Diffused Ceylon Sapphire</span>
        `,
        images: [
            "assets/User/img/earrings/23-1.jpg",
            "assets/User/img/earrings/23-2.jpg",
            "assets/User/img/earrings/23-3.jpg",
            "assets/User/img/earrings/23-4.jpg"
        ]
    },

    {
        id: 24,
        name: "Bông Tai Bạc Hoa Cánh Bướm",
        category: "earring",
        price: 10000000,
        description: `
            <span>Black Month | Sale off 10~20%</span><br>
            <span>Metal Color: Rose</span><br>
            <span>Emerald Cut Blue Sapphire 1.52</span><br>
            <span>Natural Diffused Ceylon Sapphire</span>
        `,
        images: [
            "assets/User/img/earrings/24-1.jpg",
            "assets/User/img/earrings/24-2.jpg",
            "assets/User/img/earrings/24-3.jpg",
            "assets/User/img/earrings/24-4.jpg"
        ]
    },
    {
        id: 25,
        name: "Bông Tai Bac Mặt Trăng Khuyết",
        category: "earring",
        price: 12000000,
        description: `
            <span>Black Month | Sale off 10~20%</span><br>
            <span>Metal Color: Rose</span><br>
            <span>Emerald Cut Blue Sapphire 1.52</span><br>
            <span>Natural Diffused Ceylon Sapphire</span>
        `,
        images: [
            "assets/User/img/earrings/25-1.jpg",
            "assets/User/img/earrings/25-2.jpg",
            "assets/User/img/earrings/25-3.jpg",
            "assets/User/img/earrings/25-4.jpg"
        ]
    },
                // Add the rest of the JSON data here
            ];
            filteredProducts=null;
            displayPaginationButtons();
            displayPage(currentPage);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }
    // Function to display the product data for a specific page
    function displayPage(page) {
        const mainContent = document.getElementById("main-content");
        mainContent.innerHTML = ""; // Clear existing rows

        // Use filteredProducts if it's set, otherwise use the original products array
        const dataToDisplay = filteredProducts || products;

        // Calculate the start and end indices for the rows on the current page
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = Math.min(startIndex + rowsPerPage, dataToDisplay.length);

        // Generate the rows for the current page
        for (let i = startIndex; i < endIndex; i++) {
            const product = dataToDisplay[i];
            const productDiv = document.createElement("div");
            productDiv.classList.add("table");
            productDiv.innerHTML = `
                <img src="${product.images[0]}" width="20%">
                <div class="product-info">
                    <span>ID: ${product.id}</span>
                    <span>Name: ${product.name}</span>
                    <span>Category: ${product.category}</span>
                    <span>Price: ${product.price}</span>
                    <span>Description: ${stripHtml(product.description)}</span>
                </div>
                <div class="button-group">
                    <button class="edit-buttons1" onclick="openEditBlock(${i})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="edit-buttons2" onclick="confirmDelete(${i})"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            mainContent.appendChild(productDiv);
        }

        updateActiveButton(page);
    }

    // Function to handle search functionality
    function searchProducts() {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        const searchFilter = document.getElementById("searchFilter").value;

        // Filter products based on the search criteria
        filteredProducts = products.filter(product => {
            const value = product[searchFilter].toString().toLowerCase();
            return value.includes(searchInput);
        });

        // Update pagination and display the first page of filtered results
        currentPage = 1;
        displayPaginationButtons(filteredProducts);
        displayPage(currentPage);
    }
    
    // Function to display filtered results
    function displayFilteredResults(filteredProducts) {
        const mainContent = document.getElementById("main-content");
        mainContent.innerHTML = ""; // Clear existing rows

        filteredProducts.forEach((product, index) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("table");
            productDiv.innerHTML = `
                <img src="${product.images[0]}" width="20%">
                <div class="product-info">
                    <span>ID: ${product.id}</span>
                    <span>Name: ${product.name}</span>
                    <span>Category: ${product.category}</span>
                    <span>Price: ${product.price}</span>
                    <span>Description: ${product.description}</span>
                </div>
                <div class="button-group">
                    <button class="edit-buttons1" onclick="openEditBlock(${i})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="edit-buttons2" onclick="confirmDelete(${i})"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            mainContent.appendChild(productDiv);
        });
    }

    // Function to display pagination buttons
    function displayPaginationButtons(data = null) {
        const buttonGroup = document.querySelector(".pagination-buttons");
        buttonGroup.innerHTML = ""; // Clear existing buttons

        // Use the provided data (filtered or original) to calculate total pages
        const dataToPaginate = data || (filteredProducts || products);
        const totalPages = Math.ceil(dataToPaginate.length / rowsPerPage);

        // Create Previous button
        const prevButton = document.createElement("button");
        prevButton.classList.add("prev-page");
        prevButton.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
        prevButton.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                displayPage(currentPage);
            }
        });
        buttonGroup.appendChild(prevButton);

        // Create page number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.classList.add("page-button");
            pageButton.textContent = i;
            pageButton.addEventListener("click", () => {
                currentPage = i;
                displayPage(currentPage);
            });
            buttonGroup.appendChild(pageButton);
        }

        // Create Next button
        const nextButton = document.createElement("button");
        nextButton.classList.add("next-page");
        nextButton.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
        nextButton.addEventListener("click", () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayPage(currentPage);
            }
        });
        buttonGroup.appendChild(nextButton);
    }
    loadData();

    // Function to toggle search block visibility
    document.getElementById("searchButton").addEventListener("click", () => {
        const searchBlock = document.getElementById("searchBlock");
        searchBlock.style.display = searchBlock.style.display === "none" ? "block" : "none";
    });

    // Trigger search when the search button is clicked
    document.getElementById("searchSubmitButton").addEventListener("click", searchProducts);

    // Function to open the Edit block (for editing or adding an item)
    window.openEditBlock = function(index = null) {
        editingItemIndex = index;
        const editBlock = document.querySelector('.DisplayEditItemBlock');
        editBlock.style.display = 'flex';

        if (index !== null) {
            // Pre-fill form for editing
            const product = products[index];
            document.getElementById('idInput').value = product.id;
            document.getElementById('nameInput').value = product.name;
            document.getElementById('categoryInput').value = product.category;
            document.getElementById('priceInput').value = product.price; // Use lowercase 'price'
            document.getElementById('descInput').value = stripHtml(product.description); // Use lowercase 'description'
            document.getElementById('uploadedImage').src = product.images[0];
            document.getElementById('uploadedImage').style.display = 'block';
            document.getElementById('uploadText').style.display = 'none';
        } else {
            // Clear form for adding a new item
            document.getElementById('itemForm').reset();
            document.getElementById('uploadedImage').style.display = 'none';
            document.getElementById('uploadText').style.display = 'block';
        }
    };

    // Function to close the Edit block
    window.closeEditBlock = function() {
        document.querySelector('.DisplayEditItemBlock').style.display = 'none';
    };

    // Function to validate and update/add the item
    window.updateItem = function() {
        const id = document.getElementById('idInput').value.trim();
        const name = document.getElementById('nameInput').value.trim();
        const category = document.getElementById('categoryInput').value.trim();
        const price = document.getElementById('priceInput').value.trim();
        const desc = document.getElementById('descInput').value.trim();
        const imageUploaded = document.getElementById('uploadedImage').src !== '';

        if (!id || !name || !category || !price || !desc || !imageUploaded) {
            alert('Please fill in all fields and upload an image.');
            return false;
        }

        if (editingItemIndex !== null) {
            // Update existing item
            products[editingItemIndex] = {
                id,
                name,
                category,
                price, // Use lowercase 'price'
                description: desc, // Use lowercase 'description'
                images: [document.getElementById('uploadedImage').src]
            };
            alert('Item updated successfully!');
        } else {
            // Add a new item
            products.push({
                id,
                name,
                category,
                price, // Use lowercase 'price'
                description: desc, // Use lowercase 'description'
                images: [document.getElementById('uploadedImage').src]
            });
            alert('Item added successfully!');
        }

        displayPage(currentPage);
        closeEditBlock();
    };
    loadData();
    // Function to confirm deletion of a product
    window.confirmDelete = function(index) {
        const confirmation = confirm("Are you sure that you want to delete this?");
        if (confirmation) {
            products.splice(index, 1); // Remove the product from the array
            displayPage(currentPage);  // Refresh the page after deletion
            displayPaginationButtons(); // Update pagination if needed
        }
    };

    // Load initial data and set up pagination
    loadData();
});

// Event listener for the image file input
document.getElementById('imageInput').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('uploadedImage').src = e.target.result;
            document.getElementById('uploadedImage').style.display = 'block';
            document.getElementById('uploadText').style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});

