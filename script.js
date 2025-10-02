document.addEventListener("DOMContentLoaded", () =>{
    const menuBtn = document.querySelector(".hamburgesa")
    const enlaces = document.querySelector("#enlaces")

    menuBtn.addEventListener("click",()=> {
        enlaces.classList.toggle("activo")
    })
})