"use strict";

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {
  const productNames = [
    "bag",
    "banana",
    "bathroom",
    "boots",
    "breakfast",
    "bubblegum",
    "chair",
    "cthulhu",
    "dog-duck",
    "dragon",
    "pen",
    "pet-sweep",
    "scissors",
    "shark",
    "sweep",
    "tauntaun",
    "unicorn",
    "water-can",
    "wine-glass",
  ];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === "sweep") {
      this.allProducts.push(new Product(productNames[i], "png"));
    } else {
      this.allProducts.push(new Product(productNames[i]));
    }
  }
};

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
  let stringifyValue = JSON.stringify(this.allProducts);
  localStorage.setItem("allProducts", stringifyValue);
};

AppState.prototype.loadItems = function () {
  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load

  let retrievedProducts = localStorage.getItem("allProducts");
  let parseProducts = JSON.parse(retrievedProducts);

  if (retrievedProducts) {
    for (let i = 0; i < parseProducts.length; i++) {
      if (parseProducts[i].name === "sweep") {
        let reconstruir = new Product(parseProducts[i].name, "png");
        reconstruir.timesClicked = parseProducts[i].timesClicked;
        reconstruir.timesShown = parseProducts[i].timesShown;
        this.allProducts.push(reconstruir);
      } else {
        let reconstruir = new Product(parseProducts[i].name);
        reconstruir.timesClicked = parseProducts[i].timesClicked;
        reconstruir.timesShown = parseProducts[i].timesShown;
        this.allProducts.push(reconstruir);
      }
    }
  }

  this.instantiateProducts();

  const Data = localStorage.getItem("allProducts");
  if (Data !== null) {
    const acceder = JSON.parse(Data);
    this.allProducts.push(...acceder);
    console.log(this.allProducts);
  } else {
    this.instantiateProducts();
  }
};

function Product(name, fileExtension = "jpg") {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
