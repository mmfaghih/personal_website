let index = 0;
displayImagesIntro();
function displayImagesIntro() {
  let i;
  const imagesIntro = document.getElementsByClassName("mySlidesIntro");
  for (i = 0; i < imagesIntro.length; i++) {
    imagesIntro[i].style.display = "none";
  }
  index++;
  if (index > imagesIntro.length) {
    index = 1;
  }
  imagesIntro[index-1].style.display = "block";
  setTimeout(displayImagesIntro, 5000);
}
