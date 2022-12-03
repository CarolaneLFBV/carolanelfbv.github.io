const btnMenu = document.getElementById("btnMenu");
const navList = document.getElementById("navList");
const content = document.getElementById("content");

btnMenu.addEventListener("click", e => {
    if(navList.style.display !== "none") {
        navList.style.display = "none"; 
        content.style.display = "block"; 
    } 
    else { 
        navList.style.display = "block";
        content.style.display = "none"; 
    }
})
