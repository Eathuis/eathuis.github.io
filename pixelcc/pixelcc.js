
$(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 528
      });
    });

function popup() {
    alert("You're on that page, silly!");
}

function noemail() {
  alert("Email No Longer Exists.");
}

function offline() {
  alert("Forums Are Offline.")
}

window.onload = function() {
  document.getElementById("ClickImage").onclick = function(){
        var overlay = document.getElementById("overlay");
        var popup = document.getElementById("popup");
        overlay.style.display = "block";
        popup.style.display = "block";
    };
    
  document.getElementById("CloseBtn").onclick = function(){
        var overlay = document.getElementById("overlay");
        var popup = document.getElementById("popup");
        overlay.style.display = "none";
        popup.style.display = "none";      
  }
};
