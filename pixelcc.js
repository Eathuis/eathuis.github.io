function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

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
