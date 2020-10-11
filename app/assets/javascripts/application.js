// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require moment
//= require fullcalendar
//= require jquery_ujs
//= require jquery-ui
// require turbolinks
//= require_tree .

// For fullcalendar
$(function () {
  if ($('#calendar').length) {
    function Calendar() {
      return $('#calendar').fullCalendar({
      });
    }
    function clearCalendar() {
      $('#calendar').html('');
    }
    $(document).on('turbolinks:load', function () {
      Calendar();
    });
    $(document).on('turbolinks:before-cache', clearCalendar);
  }
});

$(function(){
  $(".btn-gnavi#wrapper").on("click", function(){
      // ハンバーガーメニューの位置を設定
    var rightVal = 0;
    // console.log(rightVal);
    if($(this).hasClass("open")) {
      // 位置を移動させメニューを開いた状態にする
      rightVal = -300;
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).removeClass("open");
    } else {
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).addClass("open");
    }
    $("#global-navi").stop().animate({
      right: rightVal
    }, 200);
  });
});

$(function () {
  // サイドサブメニューアコーディオン
  $('#tag_search_title').on('click', function(){
      var $subNav = $("#tag_search");
      if ($subNav.is(':visible')) {
        $subNav.velocity('slideUp', {duration: 200});
        $(this).children('ul').removeClass('is-active');
      }
      else {
        $subNav.velocity('slideDown', {duration: 200});
        $(this).children('ul').addClass('is-active');
      }
      return false;
  });

  $('#nav-toggle').on('click', function() {
      $('body').toggleClass('close');
  });

  $('.scroll').perfectScrollbar();
});
