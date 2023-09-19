let stickys = document.getElementById("sticky");

window.addEventListener("scroll",()=>{
    let scrooly = window.scrollY;

    if(scrooly >=100){
        stickys.style.display="block";
    }
    else{
        stickys.style.display="none";
    }
});