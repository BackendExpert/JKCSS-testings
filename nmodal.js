var openModals = document.querySelectorAll(".modal-open");

openModals.forEach(function(btn) {
  btn.onclick = function() {
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});

var closebtn = document.querySelectorAll('.close-btn');

closebtn.forEach(function(btn){
  btn.onclick = function(){
    var modal = (btn.closest(".modal").style.display = "none");
  }
});