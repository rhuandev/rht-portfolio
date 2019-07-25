var menu = document.getElementById("menu");

function openMenu(x) {
  if (menu.style.left = "-215px") {
	menu.classList.toggle("open");
    x.classList.toggle("change");
  }else {
    menu.classList.toggle("open");
    x.classList.toggle("change");
  }
}