document.addEventListener("DOMContentLoaded", () => {
    const rowsPerPage = 5; // Number of rows to show per page
    let currentPage = 1;
    let products = [];
    let editingItemIndex = null;

    // Load JSON data from `data.json`
    async function loadData() {
        try {
            const response = await fetch("data.json");
            products = await response.json();
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
        const endIndex = Math.min(startIndex + rowsPerPage, Product.length);
        // Generate the rows for the current page
        for (let i = startIndex; i < endIndex; i++) {
            const product = Product[i];
            const productDiv = document.createElement("div");
            productDiv.classList.add("table");
            productDiv.innerHTML = `
                <img src="${product.img}" width="20%">
                <div class="product-info">
                    <span>ID: ${product.id}</span><br>
                    <span>Name: ${product.name}</span><br>
                    <span>Price: ${product.Price}</span><br>
                    <span>Quantity: ${product.Quantity}</span><br>
                    <span>Description: ${product.Description}</span>
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
                <img src="${product.img}" width="20%">
                <div class="product-info">
                    <span>ID: ${product.id}</span>
                    <span>Name: ${product.name}</span>
                    <span>Price: ${product.Price}</span>
                    <span>Quantity: ${product.Quantity}</span>
                    <span>Description: ${product.Description}</span>
                </div>
                <div class="button-group">
                    <button class="edit-buttons1" onclick="openEditBlock(${index})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="edit-buttons2" onclick="confirmDelete(${index})"><i class="fa-solid fa-trash"></i></button>
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
            document.getElementById('priceInput').value = product.Price;
            document.getElementById('descInput').value = product.Description;
            document.getElementById('uploadedImage').src = product.img;
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
                Price: price,
                Quantity: products[editingItemIndex].Quantity || 0,
                Description: desc,
                img: document.getElementById('uploadedImage').src
            };
            alert('Item updated successfully!');
        } else {
            // Add a new item
            products.push({
                id,
                name,
                category,
                Price: price,
                Quantity: 0,
                Description: desc,
                img: document.getElementById('uploadedImage').src
            });
            alert('Item added successfully!');
        }

        displayPage(currentPage);
        closeEditBlock();
    };

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

//Các lỗi: Mảng ban đầu nó trống trơn đến khi mình muốn tìm kiếm cái gì đó
//Muốn cập nhật thì phải ấn tìm kiếm một lần nữa, nhất là sau khi xoá sản phẩm