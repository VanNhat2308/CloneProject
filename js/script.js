// sidebar
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

//faq


let numbers = document.getElementsByClassName("number");
let answers = document.getElementsByClassName("answer");

[...numbers].forEach((e, idx) => {
   e.addEventListener("click", () => {
      [...numbers].forEach(a => a.classList.remove("active"));
      [...answers].forEach(a => a.classList.remove("active"));

      e.classList.add("active");
      if (answers[idx]) {
         answers[idx].classList.add("active");
      }
   });
});
