export default function slicknavConfig() {
  $(function () {
    $("#menu").slicknav({
      label: "",
    });
    $('.slicknav_menu').prepend('<div class="logo"><a href="index.html"> <img src="./img/Logo.svg" title="Nome da empresa" alt="" class="img-responsive"></a></div>');
  });
}
