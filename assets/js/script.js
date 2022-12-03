const btnMenu = document.getElementById("btnMenu");
const navList = document.getElementById("navList");
const content = document.getElementById("content");
const footer  = document.getElementById("footer");

btnMenu.addEventListener("click", e => {
    if(navList.style.display !== "none") {
        navList.style.display = "none"; 
        content.style.display = "block";
        footer.style.display="block"; 
    } 
    else { 
        navList.style.display = "block";
        content.style.display = "none"; 
        footer.style.display = "none"; 
    }
})
