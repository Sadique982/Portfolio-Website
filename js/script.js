function BWmode() {
   var element = document.body;
   element.classList.toggle("light-mode");

}
document.addEventListener('DOMContentLoaded', function () {
   var isLightModeToggled = localStorage.getItem('lightModeToggled') === 'true';
   var element = document.body;
   if (isLightModeToggled) {
      element.classList.add("light-mode");
   } else {
      element.classList.remove("light-mode");
   }
   element.addEventListener('click', function (event) {
      if (!event.target.closest('main') && event.target.closest('label')) {
         element.classList.toggle("light-mode");
         localStorage.setItem('lightModeToggled', element.classList.contains('light-mode'));
      }
   });
});
