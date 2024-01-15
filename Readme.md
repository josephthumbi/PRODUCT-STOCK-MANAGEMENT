

# Electronics Stock Management System

This web application is a simple stock management system for electronic products. It allows users to dynamically add, view, edit, and remove items from their stock. The application is built using HTML, CSS, and JavaScript.

## Table of Contents

1. [Features](#features)
2. [Development Process](#development-process)
    - [Setup](#setup)
    - [Project Structure](#project-structure)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
3. [How It Works](#how-it-works)
4. [Usage](#usage)


## Features

- Add new items with details such as item code, name, description, category, unit price, quantity, date bought, and supplier.
- View the stock in an accordion format, displaying details for each item.
- Dynamically update the quantity of items.
- Edit existing items, including updating information and quantities.
- Remove items from the stock.

## Development Process

### Setup

1. Clone the repository to your local machine:

   bash
   git clone https://github.com/your-username/electronics-stock-management.git
   

2. Open the project in your preferred code editor.

### Project Structure

The project follows a simple structure:

- `index.html`: The main HTML file.
- `style.css`: Stylesheet for the application.
- `Main.js`: JavaScript file containing the core functionality.

### HTML

The HTML file (`index.html`) includes sections for adding items, viewing stock, and displaying the stock. It utilizes form elements for user input.

### CSS

The CSS file (`style.css`) provides styling for the application, including background images, color schemes, and formatting for input fields and other elements.

### JavaScript

The JavaScript file (`Main.js`) contains the core functionality of the stock management system. Functions handle adding items, viewing stock, toggling accordion items, editing items, removing items, and updating quantities.

## How It Works

1. **Adding Items:**
   - Users fill out the "Add Item" form with details for a new electronic product.
   - Upon clicking the "Add Item" button, the information is added to the stock array, and the stock display is updated.

2. **Viewing Stock:**
   - Users can click the "View Stock" button to see the current stock.
   - The stock is displayed in an accordion format, allowing users to view details for each item.

3. **Updating Quantity:**
   - Users can dynamically update the quantity of items by entering a new quantity and clicking the "Update" button.

4. **Editing Items:**
   - Users can edit existing items by clicking the "Edit" button.
   - The form is populated with the item's details, allowing users to make changes.

5. **Removing Items:**
   - Users can remove items from the stock by clicking the "Remove" button.
   - The item is removed from the stock, and the stock display is updated.

## Usage

To use the stock management system, follow these steps:

1. Open `index.html` in a web browser.
2. Fill out the "Add Item" form with the details of a new electronic product.
3. Click the "Add Item" button to add the item to the stock.
4. Click the "View Stock" button to see the current stock.
5. Use the provided buttons to update quantities, edit items, or remove items as needed.



