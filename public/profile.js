function changePRT(obj) {
   let sp = obj.querySelector(".post");
   if(sp){
    let div = document.querySelector(".posts-div");
    div.style.display = "flex";
    let div2 = document.querySelector(".reels-div");
    div2.style.display = "none";
   }
   else if( obj.querySelector(".reel")){
    let div = document.querySelector(".reels-div");
    let div2 = document.querySelector(".posts-div");
    div2.style.display = "none";
    div.style.display = "flex";
   }
   let aSp = document.querySelectorAll(".bar");
   aSp.forEach(element => {
    element.classList.remove("overline");
   });
   obj.classList.add("overline");
}