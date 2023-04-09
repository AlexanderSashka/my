
document.addEventListener("click", function (e) {
	const targetElement = e.target;

	if (targetElement.closest('.header__burger-menu')) {
		document.documentElement.classList.toggle('menu-open');
		e.preventDefault();
	}

})