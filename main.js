$(function() {
  var input = $('#input');
  var btn = $('#btn');
  var main = $('main');
  var content = $('.content');
  var todo = '<div class="todo"></div>';
  var day = $('.day');
  var selectDay = $('.selectday');
  var deletion = $('.deletion');
  var achive = $('.achive');
  var deleteAll = $('.deleteAll');
  var inputbtn = $('.inputbtn');
  var activeDay;
  var achiveCount = 0;
  // var active = $('.active'); ミス

  // 今日の曜日
  var todayNumber = new Date().getDay();
  if (todayNumber === 0) {
    todayNumber = 7;
  }
  $('.day-of-the-week li:nth-child('+ todayNumber +')').addClass('selectday');
  $('main div:nth-child('+ todayNumber +')').addClass('active');
  activeDay = $('#' + $('main div:nth-child('+ todayNumber +')').attr('id'));

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
    activeDay = $('#' + $(this).data('id'));

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
    activeDay.attr('class', 'content active');
  });

  // 削除
  deletion.click(function() {
    activeDay.children('.todo.already').remove();
  });

  // 達成度計算
  achive.click(function() {
    achiveCount++;
    console.log(achiveCount);
    var percent = '<p class="percent"></p>';

    if (achiveCount % 2 === 0) {
      $(this).children('.percent').remove();
      $(this).append('<i class="fas fa-percent"></i>');
    }
    else if (achiveCount % 2 === 1) {
      var score = (activeDay.children('.todo.already').length / activeDay.children('.todo').length) * 100;
      if (isNaN(score)) {
        return false;
      }
      $(this).children('i').remove();
      $(percent).text(Math.ceil(score)).appendTo($(this)).hide().fadeIn(500);
    }
  });

  // 全削除
  deleteAll.click(function() {
    activeDay.children('.todo').remove();
  });

  // 入力
  inputbtn.click(function() {
    input.toggle();
    btn.toggle();
  });

});
