// ハンバーガーメニュー
$(function(){
  $('.hamburger-btn').on('click', function(){
    $('.nav-list').toggleClass('is-active');
  });
}());