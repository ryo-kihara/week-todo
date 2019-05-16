$(function() {
  var input = $('#input');
  var btn = $('#btn');
  var main = $('main');
  var content = $('.content');
  var todo = '<div class="todo"></div>';
  var day = $('.day');
  var selectDay = $('.selectday');
  var week = $('.day-of-the-week');
  // var active = $('.active'); ミス
  var already = 0;

  // 今日の曜日
  var today = new Date().getDay();
  if (today === 0) {
    today = 7;
  }
  $('.day-of-the-week li:nth-child('+ today +')').addClass('selectday');
  $('main div:nth-child('+ today +')').addClass('active');


  // todo追加
  btn.click(function() {
    if (input.val() === "") {
      return false;
    }
    else {
      $(todo).text(input.val()).appendTo($('.active')).hide().fadeIn(500);
    }
  });

  // todo指定
  main.on('click', '.todo', function() {
    $(this).toggleClass('already');
  });

  // 曜日選択
  day.click(function() {
    for (var i = 0; i < day.length; i++) {
      if ($(day[i]).hasClass('day selectday')) {
        $(day[i]).removeClass('selectday');
      }
    }

    $(this).addClass('selectday');

    for (var i = 0; i < content.length; i++) {
      if($(content[i]).hasClass('content active')) {
        $(content[i]).removeClass('active');
      }
    }

    $('#' + $(this).data('id')).attr('class', 'content active');
  });

});
