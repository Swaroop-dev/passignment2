window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

var modal = document.getElementById("myModal");
var modal = document.getElementById("myModal");
var modalHeaderTxt = document.getElementById("modal_h1");

function showModal(header_txt) {
  modalHeaderTxt.innerHTML = header_txt;
  modal.style.display = "block";
}
var span = document.getElementById("close");

span.onclick = function () {
  modal.style.display = "none";
};
