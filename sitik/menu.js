function myFunction() {
   var x = document.getElementById("menu");
   var y = document.getElementById("menub");
   if (x.style.display === "none") {
     x.style.display = "block";
     y.innerHTML = "<i class='bx bx-collapse-horizontal'></i>"

   } else {
     x.style.display = "none";
     y.innerHTML = "<i class='bx bx-menu'></i>"
   }
 }
 var prevScrollpos = window.pageYOffset;
 window.onscroll = function() {
 var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
     document.getElementById("navbar").style.top = "0";
   } else {
     document.getElementById("navbar").style.top = "-100%";
     document.getElementById("menub").style.innerHTML = ""
   }
   prevScrollpos = currentScrollPos;
 }

