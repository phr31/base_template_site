export default function menuScroll() {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let cabecalho = document.querySelector("header");
    let altura = cabecalho.style.height;

    if (window.screen.width < 767) {
      if (scroll < 50 && scroll >= 0) {
        $("main").css("margin-top", altura);
      } else {
        $("main").css("margin-top", "0");
      }
    }

    if (window.screen.width > 767) {
      if (scroll < 50 && scroll >= 0) {
        $("header").addClass("background-header");
        $("header .main-menu").removeClass("background-header");

        $("main").css("margin-top", altura);
      } else {
        $("header").removeClass("background-header");
        $("header .main-menu").addClass("background-header");
        $("main").css("margin-top", "0");
      }
    }
  });
}
