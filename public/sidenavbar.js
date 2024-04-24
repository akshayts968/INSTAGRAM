// TYPING
let input = document.querySelector(".comment-input");
input.addEventListener("input",(val)=>{
    let post = input.nextElementSibling;
    if(val.target.value){
        post.style.display = "flex";
    }
    else{
        post.style.display = "none";
    }
 console.log( val.target.value);
});


function post(obj){
    let input = obj.previousElementSibling;
    console.log(input);
    input.value = "";
}


let func_show_con = false;
function func_show(){
    let func =  document.querySelector(".more-funcs");
    if(func_show_con){
       func.style.display = "none";
    }else{
        func.style.display = "flex";
    }
    func_show_con = !func_show_con;
}

let dot3 = false;
function dotT3(){
    let div = document.querySelector(".more-details-post");
    console.log(div);
    console.log("HAI");
    if(dot3){
        div.style.display="none";
    }else{
        div.style.display="flex";
    }
    dot3=!dot3;
}