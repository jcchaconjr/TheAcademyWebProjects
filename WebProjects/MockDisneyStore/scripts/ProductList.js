class Product {
    constructor(productName, category, characterName, franchise, show) {
      this._productName = productName;
      this._category = new Array(category);
      this._characterName = characterName;
      this._franchise = franchise;
      this._show = new Array (show);
      this._inventoryCount = 0;

    }

    productName(product) {
        return this._productName;
    }

    category() {
        return this._category;
    }

    addCategory(newCategory) {
        this._category.push(newCategory);
    }

    characterName() {
        return this._characterName;
    }

    franchise() {
      return this._franchise;
    }

    show() {
        return this._show;
    }

    addShow(show) {
        this._show.push(show)
    }

    inventoryCount() {
        return this._inventoryCount;
    }
}

const ProductList = new Array;

// gets a product fromt eh lsit when you specify the Product Name
function getProduct(productName) {
    return ProductList.find((Product) => Product.productName === productName );
}

// Adds Product to the Product List - returns a Boolean...
function addProduct(product, catgory, characterName, franchise, show) {

    try {
        let newProduct = new Product(product, catgory, characterName, franchise, show);
        ProductList.push(newProduct);
        console.log("product successfully added to Product List");
        document.getElementById("resultMsg").innerHTML = "Product successfully added to Product List!"
        document.getElementById("invform").reset();
        return true;
    }
    catch {
        console.log("There was a problem adding the Product to the Product List. Please check that all entry items were correct.");
        return false;
    }
}
