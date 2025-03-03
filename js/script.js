let menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", (e) => {
   let sidebar = document.getElementsByClassName("sidebar")[0];
   sidebar.classList.toggle("hidden");
   e.stopPropagation(); 
});

document.addEventListener("click", (e) => {
   let sidebar = document.getElementsByClassName("sidebar")[0];
   if (!sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
      sidebar.classList.add("hidden"); 
   }
});


