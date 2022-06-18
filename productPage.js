document.querySelector("#add-to-cart").addEventListener("click", myFun);
let cartData = JSON.parse(localStorage.getItem("buyCartData")) || [];
const currentPageData = JSON.parse(localStorage.getItem("currentPageData"));

document.getElementById("title").innerText = currentPageData.name;
document.getElementById("imageId").setAttribute("src", currentPageData.img);
document.getElementById("pera").innerText = currentPageData.details;
document.getElementById("subtitle").innerText = currentPageData.category;
document.getElementById("rate").innerText = currentPageData.price;
document.getElementById("trate").innerText = currentPageData.price;

function myFun() {
  if (cartDatapresent(cartData, currentPageData.name) == true) {
    alert("This item is already in cart!");
  } else {
    cartData.push(currentPageData);
    localStorage.setItem("buyCartData", JSON.stringify(cartData));
    alert("Item successfully added to cart");
  }
}

document.querySelector("#by").addEventListener("click", buyFun);
function buyFun() {
  let cartData = JSON.parse(localStorage.getItem("buyCartData")) || [];
  if (cartDatapresent(cartData, currentPageData.name) === false) {
    cartData.push(currentPageData);
    localStorage.setItem("buyCartData", JSON.stringify(cartData));
  } else {
    // alert("Item already in cart");
  }
  location.href = "cart.html";
}

function cartDatapresent(cartData, name) {
  for (let i = 0; i < cartData.length; i++) {
    if (cartData[i].name === name) {
      return true;
    }
  }
  return false;
}
