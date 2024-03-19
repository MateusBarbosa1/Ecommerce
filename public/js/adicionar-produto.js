const button = document.getElementById("criar-produto");
const form = document.querySelector(".criar-produto form");
const filter_black = document.querySelector(".filter-black");
const button_update = document.querySelectorAll(".update-button");
const form_update = document.querySelector(".products form");

button.addEventListener("click", () => {
  form.style.display = "flex";
  filter_black.style.display = "flex";
});

filter_black.addEventListener("click", () => {
  form.style.display = "none";
  form_update.style.display = "none";
  filter_black.style.display = "none";
});

button_update.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".product");

    const nameProduct = product.querySelector(".product-name");
    const valorProduct = product.querySelector(".valor");
    const taxaProduct = product.querySelector(".valor2");
    const tipoProduct = product.querySelector(".tipo");

    const nameForm = document.getElementById("nome");
    const precoForm = document.getElementById("preco");
    const taxaForm = document.getElementById("taxa");
    const tipoForm = document.getElementById("tipo");

    nameForm.value = nameProduct.textContent;
    precoForm.value = valorProduct.textContent;
    taxaForm.value = taxaProduct.textContent;
    tipoForm.value = tipoProduct.textContent;

    form_update.style.display = "flex";
    filter_black.style.display = "flex";
  });
});
