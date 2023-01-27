const productsul = document.querySelector("#productsul"); //products-i meji ul-nery
const products = document.querySelector("#products"); // filtri meji producty
const main = document.querySelector("#main");
const basket = document.querySelector("#basket"); //gnelu knopka
const container = document.querySelector(".container"); //apranq
const buttons = document.getElementsByClassName("buttonCss");
const shoes = document.querySelector("#shoesID");
const clothes = document.querySelector("#clothesID");
const perfume = document.querySelector("#perfumeID");
const accessories = document.querySelector("#accessoriesID");

const allProducts = [
  {
    type: "shoes",
    gender: "male",
    image: "./foto/koshik3.jpg",
    price: "9950 AMD (֏)",
    name: "SHOES",
    onclick: false,
  },
  {
    type: "shoes",
    gender: "male",
    image: "./foto/koshik2.jpg",
    price: "12500 AMD (֏)",
    name: "SHOES",
    onclick: false,
  },
  {
    type: "shoes",
    gender: "male",
    image: "./foto/koshik4.jpg",
    price: "8000 AMD (֏)",
    name: "SHOES",
    onclick: false,
  },
  {
    type: "accessories",
    gender: "female",
    image: "./foto/aknoc3.jpg",
    price: "22500 AMD (֏)",
    name: "SUNGLASSES",
    onclick: false,
  },
  {
    type: "accessories",
    gender: "male",
    image: "./foto/aknoc4.jpg",
    price: "4500 AMD (֏)",
    name: "SUNGLASSES",
    onclick: false,
  },
  {
    type: "accessories",
    gender: "male",
    image: "./Foto/accessories 2.jpeg",
    price: "6700 AMD (֏)",
    name: "SUNGLASSES",
    onclick: false,
  },
  {
    type: "accessories",
    gender: "male",
    image: "./foto/glxarksev.jpg",
    price: "9850 AMD (֏)",
    name: "HAT",
    onclick: false,
  },
  {
    type: "accessories",
    gender: "female",
    image: "./foto/glxark2.jpg",
    price: "38000 AMD (֏)",
    name: "HAT",
    onclick: false,
  },
  {
    type: "accessories",
    gender: "female",
    image: "./foto/glxark.jpg",
    price: "12000 AMD (֏)",
    name: "HAT",
    onclick: false,
  },
];

visual(allProducts);

products.addEventListener("click", () => vue());
basket.addEventListener("click", () => basketclick());
shoes.addEventListener("click",function (){typeSelector("shoes")});
clothes.addEventListener("click",function() {typeSelector("clothes")});
perfume.addEventListener("click",function() {typeSelector("perfume")});
accessories.addEventListener("click",function() {typeSelector("accessories")});

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.onclick = function () {
    if (allProducts[i].onclick === false) {
      allProducts[i].onclick = true;
    } else {
      allProducts[i].onclick = false;
    }
  };
}

function typeSelector(type) {
  main.innerHTML = "";
  let newarr3 = allProducts.filter((el) => el.type == type);
  visual(newarr3);
  basket.addEventListener(
    "click",
    () =>
      function () {
        basketclick(newarr3);
      }
  );
}

function vue() {
   visual(allProducts);
   if (productsul.style.display == "none") {
     productsul.style.display = "block";
   } else {
     productsul.style.display = "none";
   }
 }

 function visual(arr) {
  main.textContent = "";
  for (i = 0; i < arr.length; i++) {
    let div = document.createElement("div");
    let image = document.createElement("img"); //nkary stexcel
    let price = document.createElement("span"); // giny stexcel
    let button = document.createElement("button"); //button stexcel
    let name = document.createElement("p"); //anuny stexcel
    let pricebutton = document.createElement("div");
    pricebutton.classList.add("pricebutton"); //pricebutton-i hamar
    div.classList.add("container");
    image.classList.add("imageCss"); //css- hamar
    button.classList.add("buttonCss"); //css-i hamar
    price.classList.add("priceCss"); //css-i hamar
    name.classList.add("nameCss");
    image.src = arr[i].image;
    price.textContent = arr[i].price;
    button.textContent = "";
    name.textContent = arr[i].name;
    pricebutton.append(price, button);
    div.append(image, pricebutton, name);
    main.appendChild(div);
  }
}

function basketclick(arr) {
   main.textContent = "";
   arr = allProducts.filter((element) => element.onclick === true);
   visual(arr);
 }