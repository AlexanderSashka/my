document.addEventListener("click", function (e) {
  const targetElement = e.target;

  if (targetElement.closest(".header__menu-burger")) {
    document.documentElement.classList.toggle("menu-open");
    e.preventDefault();
  }
});
