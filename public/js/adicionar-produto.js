const button = document.getElementById("criar-produto");
const form = document.querySelector(".criar-produto form");
const filter_black = document.querySelector(".filter-black");

button.addEventListener("click", () => {
  form.style.display = "flex";
  filter_black.style.display = "flex";
});

filter_black.addEventListener("click", () => {
  form.style.display = "none";
  filter_black.style.display = "none";
});
