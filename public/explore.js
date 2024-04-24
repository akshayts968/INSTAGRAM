let hi = false;
function hide(){
    let div = document.querySelector(".post-view-div");
if(hi){
    
    div.style.display = "none";
}
else{
    div.style.display = "flex";

}
hi=!hi;
}