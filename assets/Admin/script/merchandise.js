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
            products = JSON.parse(localStorage.getItem("products"));
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
        mainContent.innerHTML = ""; // Clear existing content
    
        const dataToDisplay = filteredProducts || products; // Use filtered or original products
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = Math.min(startIndex + rowsPerPage, dataToDisplay.length);
    
        // Generate rows for the current pag
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
                    <span>Price: ${formatVND(product.price)}</span>
                    <span>Description: ${stripHtml(product.description)}</span>
                </div>
                <div class="button-group">
                    <button class="edit-buttons1" onclick="openEditBlock(${i})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="edit-buttons2" onclick="confirmDelete(${i})"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            mainContent.appendChild(productDiv);
        }
    }
    
    document.getElementById("searchInput").addEventListener("input", dynamicSearch);

    function dynamicSearch() {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchInput) ||
                product.category.toLowerCase().includes(searchInput) ||
                product.description.toLowerCase().includes(searchInput);
        });

        // If search input is empty, reset to original products
        if (searchInput === "") {
            filteredProducts = null;
        }

        // Reset pagination and display filtered results
        currentPage = 1;
        displayPaginationButtons(filteredProducts || products);
        displayPage(currentPage);
    }
    // Function to handle search functionality
    function searchProducts() {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        const searchFilter = document.getElementById("searchFilter").value;
    
        // Handle case where search filter is not valid
        if (searchFilter === "0" || !searchFilter) {
            alert("Please select a valid filter to search by.");
            return;
        }
    
        // Filter products based on the search criteria
        filteredProducts = products.filter(product => {
            const value = product[searchFilter]?.toString().toLowerCase();
            return value?.includes(searchInput);
        });
    
        if (filteredProducts.length === 0) {
            alert("No products found matching your search.");
        }
    
        // Update pagination and display the first page of filtered results
        currentPage = 1;
        displayPaginationButtons(filteredProducts);
        displayPage(currentPage);
    }
    function sortProducts() {
        const sortFilter = document.getElementById("searchFilter").value;
    
        // Reset to original state if "Sort by: " is selected
        if (sortFilter === "0") {
            filteredProducts = null; // Reset any filtered products
            displayPaginationButtons(products); // Reset pagination
            displayPage(currentPage); // Show original products
            return;
        }
    
        // Sorting logic
        const dataToSort = filteredProducts || products; // Sort filtered or all products
        switch (sortFilter) {
            case "id":
                dataToSort.sort((a, b) => b.id - a.id);
                break;
            case "name":
                dataToSort.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "category":
                dataToSort.sort((a, b) => a.category.localeCompare(b.category));
                break;
            case "low-price":
                dataToSort.sort((a, b) => a.price - b.price);
                break;
            case "high-price":
                dataToSort.sort((a, b) => b.price - a.price);
                break;
            case "recent":
                dataToSort.sort((a, b) => b.id - a.id);
                break;
            case "description":
                dataToSort.sort((a, b) => a.description.localeCompare(b.description));
                break;
            default:
                return;
        }
    
        // Re-render sorted products
        currentPage = 1;
        displayPaginationButtons(dataToSort);
        displayPage(currentPage);
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        loadData(); // Ensure products are loaded
        document.getElementById("searchFilter").addEventListener("change", sortProducts);
    });
    
    document.getElementById("searchSubmitButton").addEventListener("click", () => {
        searchProducts();
        sortProducts();
    });
    document.getElementById("searchFilter").addEventListener("change", () => {
        sortProducts(); // Trigger sorting
    });
    
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
                    <span>Price: ${formatVND(product.price)}</span>
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
        const buttonGroup = document.querySelector("#Display .merchandise .pagination-buttons");
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
        const overlay = document.getElementById("modalOverlay");
        const editBlock = overlay.querySelector(".DisplayEditItemBlock");
    
        overlay.style.display = "block"; // Show overlay
        editBlock.style.display = "flex"; // Show the block
    
        if (index !== null) {
            const product = products[index];
            document.getElementById('idInput').value = product.id;
            document.getElementById('nameInput').value = product.name;
            document.getElementById('categoryInput').value = product.category;
            document.getElementById('priceInput').value = product.price;
            document.getElementById('descInput').value = stripHtml(product.description);
            document.getElementById('uploadedImage').src = product.images[0];
            document.getElementById('uploadedImage').style.display = 'block';
            document.getElementById('uploadText').style.display = 'none';
        } else {
            document.getElementById('itemForm').reset();
            document.getElementById('uploadedImage').style.display = 'none';
            document.getElementById('uploadText').style.display = 'block';
        }
    };
    

    // Function to close the Edit block
    window.closeEditBlock = function() {
        const overlay = document.getElementById("modalOverlay");
        overlay.style.display = "none"; // Hide overlay
    };
    

    // Function to validate and update/add the item
    window.updateItem = function() {
        let id;
        const name = document.getElementById('nameInput').value.trim();
        const category = document.getElementById('categoryInput').value.trim();
        let price = document.getElementById('priceInput').value.trim();
        const desc = document.getElementById('descInput').value.trim();
        const imageUploaded = document.getElementById('uploadedImage').src !== '';

        if (!name || !category || !price || !desc || !imageUploaded) {
            alert('Vui lòng thêm ảnh');
            return false;
        }

        if (editingItemIndex !== null) {
            // Update existing item
            let gia = parseInt(price);
            price = gia;
            products[editingItemIndex] = {
                id,
                name,
                category,
                price, // Use lowercase 'price'
                description: desc, // Use lowercase 'description'
                images: [document.getElementById('uploadedImage').src]
            };
            localStorage.setItem("products", JSON.stringify(products));
            displayPage(1);
            alert('Sản phẩm thêm thành công');
        } else {
            // Add a new item
            let max = 0;
            for(let i = 0 ; i<products.length;i++){
                if(max < products[i].id) max = products[i].id;
            }
            let ma = parseInt(max) + 1;
            id = ma;
            let gia = parseInt(price);
            price = gia;
            products.push({
                id,
                name,
                category,
                price, // Use lowercase 'price'
                description: desc, // Use lowercase 'description'
                images: [document.getElementById('uploadedImage').src]
            });
            localStorage.setItem("products", JSON.stringify(products));
            alert('Sản phầm đã được thêm thành công');
            displayPage(1);
        }

        displayPage(currentPage);
        closeEditBlock();
    };
    loadData();
    // Function to confirm deletion of a product
    window.confirmDelete = function (index) {
        const dataToDisplay = filteredProducts || products; // Use filtered data if available
        const productToDelete = dataToDisplay[index]; // Identify product to delete
    
        // Find the product in the original list
        const originalIndex = products.findIndex(product => product.id === productToDelete.id);
        if (originalIndex === -1) {
            alert("Error: Could not find the product in the original list.");
            return;
        }
    
        // Confirm deletion
        const confirmation = confirm(`Are you sure you want to delete "${productToDelete.name}"?`);
        if (confirmation) {
            products.splice(originalIndex, 1); // Remove from original array
            if (filteredProducts) {
                filteredProducts.splice(index, 1); // Remove from filtered array
            }
    
            // Update UI
            displayPaginationButtons(filteredProducts || products);
            displayPage(currentPage);
        }
    };
    function confirmDelete(index) {
        const dataToDisplay = filteredProducts || products; // Use filtered products if active
        const productToDelete = dataToDisplay[index]; // Get the product to delete
    
        // Find the actual index in the original `products` array
        const originalIndex = products.findIndex(product => product.id === productToDelete.id);
    
        // Handle if product is not found (edge case)
        if (originalIndex === -1) {
            alert("Error: Could not find the product in the original list.");
            return;
        }
    
        // Confirm deletion
        const confirmation = confirm(`Are you sure you want to delete "${productToDelete.name}"?`);
        if (confirmation) {
            // Delete from original products array
            products.splice(originalIndex, 1);
    
            // If using filteredProducts, delete from the filtered list as well
            if (filteredProducts) {
                filteredProducts.splice(index, 1);
            }
    
            // Re-render the updated list
            displayPaginationButtons(filteredProducts || products);
            displayPage(currentPage);
        }
    }
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

