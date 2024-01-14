function BWmode() {
   var element = document.body;
   element.classList.toggle("light-mode");
   localStorage.setItem("theme", element.classList.contains("light-mode") ? "light" : "dark");
   updateToggleIcon();
}

function updateToggleIcon() {
   var moon = document.querySelector(".container .moon");
   var sun = document.querySelector(".container .sun");
   if (document.body.classList.contains("light-mode")) {
       moon.style.display = "block";
       sun.style.display = "none";
   } else {
       moon.style.display = "none";
       sun.style.display = "block";
   }
}

window.onload = function() {
   var storedTheme = localStorage.getItem("theme");
   if (storedTheme === "light") {
       document.body.classList.add("light-mode");
   }
   updateToggleIcon();
};
