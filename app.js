console.log("carga js");

document.addEventListener("DOMContentLoaded", init());

function init() {
  const productsItem = document.querySelector("#products");
  productsItem.addEventListener("click", function () {
    const productsWrapper = document.querySelector(".products__wrapper");
    productsWrapper.classList.toggle('hidden')
  });
}