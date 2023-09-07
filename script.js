const formOpenBtn=document.querySelector("#form_open"),
home=document.querySelector(".home"),
formContainer=document.querySelector(".form_container"),
formCloseBtn=document.querySelector(".form_close"),
signupBtn=document.querySelector("#signup"),
loginBtn=document.querySelector("#login"),
pwShowHide=document.querySelectorAll(".pw_hide");
menuBars=document.querySelector("#menu-bars");

window.onscroll=() =>{
    home.classList.remove("show")
    menu.classList.remove('fa-times')
    liNav.classList.remove('active')
}

formOpenBtn.addEventListener("click",()=> home.classList.add("show"))
formCloseBtn.addEventListener("click",()=> home.classList.remove("show"))

pwShowHide.forEach(icon=>{
    icon.addEventListener("click",()=>{
        let getPwInput=icon.parentElement.querySelector("input")
        if(getPwInput.type === "password"){
            getPwInput.type="text";
            icon.classList.replace("fa-eye-slash","fa-eye")
        }else{
            getPwInput.type="password";
            icon.classList.replace("fa-eye","fa-eye-slash")
        }
    })
})



signupBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    formContainer.classList.add("active")
})
loginBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    formContainer.classList.remove("active")
})

let liNav=document.querySelector('.li_nav')
let menu=document.querySelector('#menu-bars')

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times')
    liNav.classList.toggle('active')
})

