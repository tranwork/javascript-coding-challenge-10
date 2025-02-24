//Task 1: Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) {
        if (quantity > this.stock) {
            console.log(`Insufficient stock for ${this.name}`);
        } else {
            this.stock -= quantity;
        }
    }
}

// Test Case
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());
prod1.updateStock(3);
console.log(prod1.getDetails());


//Task 2: Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;

        if (quantity > product.stock) {
            console.log("Not enough stock available.");
        } else {
            product.updateStock(quantity);
        }
    }

    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    }
}

// Test Case
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());
console.log(prod1.getDetails());


//Task 3: Inventory Class
class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    }
}

// Test Case
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();


//Task 4: Implementing Order Management
class Inventory {
    constructor() {
        this.products = [];
        this.orders = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    }

    placeOrder(orderId, product, quantity) {
        if (quantity > product.stock) {
            console.log("Order cannot be placed due to insufficient stock.");
            return;
        }
        const order = new Order(orderId, product, quantity);
        this.orders.push(order);
    }

    listOrders() {
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    }
}

// Test Case
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails());


//Task 5: Implementing Product Restocking
class Inventory {
    restockProduct(productId, quantity) {
        let product = this.products.find(prod => prod.id === productId);
        if (product) {
            product.stock += quantity;
        } else {
            console.log("Product not found.");
        }
    }
}

// Test Case
inventory.restockProduct(101, 5);
console.log(prod1.getDetails());