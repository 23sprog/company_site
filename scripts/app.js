let $ =document
let hamBtn = $.querySelector(".hamburger__btn")
let mobileMenu = $.querySelector(".menu-mobile")
let hamCheckbox

hamBtn.addEventListener("click",()=>{
    hamCheckbox = $.querySelector(".hamburger__checkbox").checked
    console.log(hamCheckbox);
    if (hamCheckbox) {
        mobileMenu.style.left = "-23rem"
    }else{
        
        mobileMenu.style.left = "0"
    }
})