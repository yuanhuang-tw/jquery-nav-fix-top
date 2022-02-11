$(window).load(function () {
  // 取得大圖到網頁最頂端的距離
  var mainLogoOffsetTop = $('#main-logo').offset().top;

  // 取得大圖的高度
  var mainLogoHeight = $('#main-logo').height(); 

  // 瀏覽器縮放大小的話，重新取得數據
  $(window).resize(function () {
    mainLogoOffsetTop = $('#main-logo').offset().top;
    mainLogoHeight = $('#main-logo').height();
  });

  // 瀏覽器滾動捲軸高度大於 #my-nav 的話，讓 nav 固定在網頁頂端
  $(document).scroll(function () {
    if ($(document).scrollTop() > (mainLogoOffsetTop + mainLogoHeight)) {
      $('#my-nav').addClass('nav-fix');
    } else {
      $('#my-nav').removeClass('nav-fix');
    }
  });
});