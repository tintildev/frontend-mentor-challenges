let nav = document.getElementById("nav__mobile");
let popup = document.getElementById("mobile__container");

nav.addEventListener("click", function(){
    if(popup.style.display == "block"){
        popup.style.display = "none";
    }else{
        popup.style.display = "block";
    }
    
})