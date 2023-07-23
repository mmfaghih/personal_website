let indexx = 0;
displayImagesWork();
function displayImagesWork() {
  let ii;
  const imagesWork = document.getElementsByClassName("mySlidesWork");
  for (ii = 0; ii < imagesWork.length; ii++) {
    imagesWork[ii].style.display = "none";
  }
  indexx++;
  if (indexx > imagesWork.length) {
    indexx = 1;
  }
  imagesWork[indexx-1].style.display = "block";
  setTimeout(displayImagesWork, 5000);
}
