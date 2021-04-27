const nextArrow = document.getElementById("nextArrow");
const previousArrow = document.getElementById("previousArrow");
previousArrow.style.display = "none";
const arrow = document.getElementsByClassName("arrowImg");
const images = document.querySelectorAll(".imgNext, .imgProject");
let i = 0;
let j = images.length - 1;

nextArrow.addEventListener("click", nextImg);

function nextImg() {

     previousArrow.style.display = "block";
     nextArrow.style.display = "block";

     if (i < images.length - 1) {
          const gsbphp = document.getElementById("gsbphp" + i);
          const gsbphp = [...document.querySelectorAll("#gsbphp")];
          for (let index=0; index < images.length; index++){
               const image = images[index];
               image.addEventListener('click', function(){
                    
               })
          }
          console.log(gsbphp);
          gsbphp.className = "imgNext";
          i++;
          const gsbphp1 = document.getElementById("gsbphp" + i);
          gsbphp1.className = "imgProject";
     }

     if (i === images.length - 1) {
          nextArrow.style.display = "none";
     }

}



previousArrow.addEventListener("click", previousImg);

function previousImg() {
     console.log(i);

     nextArrow.style.display = "block";

     if (i <= images.length - 1) {
          const gsbphp = document.getElementById("gsbphp" + i);
          gsbphp.className = "imgNext";
          i--;
          const gsbphp1 = document.getElementById("gsbphp" + i);
          gsbphp1.className = "imgProject";

     }

     if (i === 0) {
          previousArrow.style.display = "none";
     }

}


