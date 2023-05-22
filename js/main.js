const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});
const getDate = new Date().getFullYear();
document.write('&copy; copyright  '+getDate+' '+ 'Design work by Mike Kimutai');
document.getElementById('Date').display.textAlign = "center";

var navlist = document.getElementById("menus");
var close = document.getElementById("close");

navlist.addEventListener("click",function(){
  document.getElementById("navlist").style.display = "block";
  document.getElementById("menus").style.display = "none";
  document.getElementById("close").style.display = "block";
})

close.addEventListener("click",function(){
  document.getElementById("navlist").style.display = "none";
  document.getElementById("menus").style.display = "block";
  document.getElementById("close").style.display = "none";
})
