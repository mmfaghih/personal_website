let indexxx = 0;
displayImagesEducation();
function displayImagesEducation() {
  let iii;
  const imagesEducation = document.getElementsByClassName("mySlidesEducation");
  for (iii = 0; iii < imagesEducation.length; iii++) {
    imagesEducation[iii].style.display = "none";
  }
  indexxx++;
  if (indexxx > imagesEducation.length) {
    indexxx = 1;
  }
  imagesEducation[indexxx-1].style.display = "block";
  setTimeout(displayImagesEducation, 5000);
}
