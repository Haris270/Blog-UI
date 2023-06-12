let slideIndex = 0;
// carousel();

function Carousel() {
  let i;
  let currentImage = document.getElementsByClassName(
    "image-slide"
  ) as HTMLCollectionOf<HTMLElement>;
  for (i = 0; i < currentImage.length; i++) {
    currentImage[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > currentImage.length) {
    slideIndex = 1;
  }
  currentImage[slideIndex - 1].style.display = "block";
  setTimeout(Carousel, 2000);
}

export default Carousel;
