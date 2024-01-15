let stock = [];

function addItem() {
    let itemCode = document.getElementById("itemCode").value;
    let itemName = document.getElementById("itemName").value;
    let description = document.getElementById("description").value;
    let category = document.getElementById("category").value;
    let unitPrice = parseFloat(document.getElementById("unitPrice").value);
    let quantity = parseInt(document.getElementById("quantity").value);
    let dateBought = document.getElementById("dateBought").value;
    let supplier = document.getElementById("supplier").value;

    if (isNaN(unitPrice) || isNaN(quantity) || unitPrice < 0 || quantity < 0 || !dateBought || !supplier) {
        alert("Please enter valid information.");
        return;
    }

    let newItem = {
        itemCode: itemCode,
        itemName: itemName,
        description: description,
        category: category,
        unitPrice: unitPrice,
        quantity: quantity,
        dateBought: dateBought,
        supplier: supplier
    };

    stock.push(newItem);

    
    document.getElementById("addItemForm").reset();

    
    viewStock();
}

function viewStock() {
    let stockDisplay = document.getElementById("stockDisplay");
    stockDisplay.innerHTML = ""; 

    if (stock.length === 0) {
        stockDisplay.innerHTML = "Stock is empty.";
        return;
    }

    for (let i = 0; i < stock.length; i++) {
        let item = stock[i];
        stockDisplay.innerHTML += `
            <div class="accordion-item">
                <div class="accordion-button" onclick="toggleAccordion(${i})">
                    <strong>${item.itemName}</strong> - ${item.quantity} in stock
                </div>
                <div class="accordion-content" id="content-${i}">
                    <p><strong>Item Code:</strong> ${item.itemCode}</p>
                    <p><strong>Description:</strong> ${item.description}</p>
                    <p><strong>Category:</strong> ${item.category}</p>
                    <p><strong>Unit Price:</strong> $${item.unitPrice.toFixed(2)}</p>
                    <p><strong>Date Bought:</strong> ${item.dateBought}</p>
                    <p><strong>Supplier:</strong> ${item.supplier}</p>
                    <label for="updatedQuantity-${i}">Update Quantity:</label>
                    <input type="number" id="updatedQuantity-${i}" min="0" required>
                    <button onclick="updateQuantity(${i})">Update</button>
                    <button onclick="editItem(${i})">Edit</button>
                    <button onclick="removeItem(${i})">Remove</button>
                </div>
            </div>
        `;
    }
}

function toggleAccordion(index) {
    let content = document.getElementById(`content-${index}`);
    content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
}

function editItem(index) {
    let item = stock[index];
    document.getElementById("itemCode").value = item.itemCode;
    document.getElementById("itemName").value = item.itemName;
    document.getElementById("description").value = item.description;
    document.getElementById("category").value = item.category;
    document.getElementById("unitPrice").value = item.unitPrice;
    document.getElementById("quantity").value = item.quantity;
    document.getElementById("dateBought").value = item.dateBought;
    document.getElementById("supplier").value = item.supplier;

    stock.splice(index, 1); 

    
    viewStock();
}

function removeItem(index) {
    stock.splice(index, 1);

    
    viewStock();
}

function updateQuantity(index) {
    let updatedQuantity = parseInt(document.getElementById(`updatedQuantity-${index}`).value);

    if (!isNaN(updatedQuantity) && updatedQuantity >= 0) {
        stock[index].quantity = updatedQuantity;
        
        viewStock();
    } else {
        alert("Please enter a valid quantity.");
    }
}





