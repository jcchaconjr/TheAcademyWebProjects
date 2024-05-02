class Product {
    constructor(productName, category, characterName, franchise, show) {
      this.productName = productName;
      this.category = new Array(category);
      this.characterName = characterName;
      this.franchise = franchise;
      this.show = new Array(show);
      this.inventoryCount = 0;
    }

    addCategory(newCategory) {
        this._category.push(newCategory);
    }

    addShow(show) {
        this._show.push(show)
    }

}

const ProductList = new Array;

// gets a product fromt eh lsit when you specify the Product Name...
function getProduct(productName) {
    return ProductList.find((Product) => Product.productName === productName );
}

// Adds Product to the Product List - returns a Boolean...
function addProduct(product, catgory, characterName, franchise, show) {

    try {
        let newProduct = new Product(product, catgory, characterName, franchise, show);
        ProductList.push(newProduct);
        console.log("product successfully added to Product List");
        // Let's refresh the table;
        populateTable(ProductList);
        document.getElementById("resultMsg").innerHTML = "Product successfully added to Product List!"
        document.getElementById("invform").reset();
        return true;
    }
    catch {
        console.log("There was a problem adding the Product to the Product List. Please check that all entry items were correct.");
        return false;
    }
}

// This will build the code snippet to add to the Product List table... 
function populateTable(productList) {

    let tableStr = `<tr>\n<th>Product Name</th>\n<th>Category</th>\n<th>Character Name</th>\n<th>Franchise</th>\n<th>Movie/Show</th>\n</tr>`;

    try {
        for (let product of productList) {
            tableStr += "<tr><td>" + product.productName + "</td><td>" + product.category + "</td><td>" + product.characterName +
              "</td><td>" + product.franchise + "</td><td>" + product.show + "</td></tr>";
              console.log("Adding row to tableStr.");
        }
        document.getElementById("prod-fill").innerHTML = tableStr;
        console.log("Updated table!");
        return true;
    }
    catch {
        console.log("There was a problem populating the table.");
        return false;
    }
}
