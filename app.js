const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSidebar = document.querySelector("#close-sidebar");
btnOpenSidebar.addEventListener("click",function(){
    sidebar.style.display = "block";
    // sidebar.style.zIndex = "2";
})

btnCloseSidebar.addEventListener("click",function(){
    sidebar.style.display= "none"
})