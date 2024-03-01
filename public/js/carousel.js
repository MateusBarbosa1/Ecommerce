document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".slide");
  let index = 0;

  function changeImage() {
    images.forEach((image) => {
      image.classList.remove("first");
    });
    index = (index + 1) % images.length;
    images[index].classList.add("first");
  }

  setInterval(changeImage, 3000); // Muda a imagem a cada 2 segundos
});
