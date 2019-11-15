$(function(){

  // $("h1").css("opacity", "0");
  $("h1").animate({ opacity: 1}, 2500);

  // パララックス
  $(window).scroll(function() {
    let $scroll = $(this).scrollTop();
    let posR = "right " + $scroll * 1.5 + "px";
    let posL = "left " + $scroll * 1.8 + "px";
    let bg_position = posR + " , " + posL;
    // bodyのcssに反映
    $('body').css({ "background-position": bg_position});
  });

  // 画面上に戻るボタン
  let $scroll_top = $(".scroll-top");
  $scroll_top.css({
    opacity: 0,
    transform: "translateY(20px)",
    transition: "500ms"
  });
  $(window).scroll( () => {
    if ($(this).scrollTop() > 800) { //画面上部から800px以上離れた
      $scroll_top.css({
        opacity: 1,
        transform: "translateY(0)"
      })
    } else {
      $scroll_top.css({
        opacity: 0,
        transform: "translateY(20px)",
        transition: "500ms"
      });
    }
  });
  // 画面上に戻る処理
  $scroll_top.click( () => {
    $("html").animate({ scrollTop: 0}, 300);
  });

  // pictureの画像をバラバラに配置する
  let $grid = $(".grid").imagesLoaded( function(){
      $grid.masonry({
        itemSelector: ".grid-item",
        columnWidth: 50,
        gutter: 5
      })
    });

  // メニューボタン処理
  let $g_nav_btn = $("#g-nav-btn");
  let $g_nav_cls = $("#g-nav-cls");
  let $g_nav_box = $("#g-nav-box");

  $g_nav_btn.click( () => {
    $g_nav_btn.fadeOut("fast");
    $g_nav_box.fadeIn('slow');
  });

  $g_nav_cls.click( () => {
    $g_nav_box.fadeOut('fast');
    $g_nav_btn.fadeIn("slow");
  });


  // smooth-scrolling
  $('a[href^="#"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 500, "swing");
    return false;
  });

  // contact処理
  let $btn = $('button[name="btn"]');
  $btn.click( () => {

    let $name = $('input[name="name"]').val();
    let $comment = $('textarea[name="comment"]').val();

    if ( ($name) && ($comment) ) {

      $('#myModal').fadeIn();

      $('#name').text("名前："+$name);

      let $email = $('input[name="email"]').val();
      if ($email) { $('#email').text("E-mail:"+$email) };

      let $area = $('[name="area"] option:selected').val();
      if ($area) { $('#area').text("地域："+$area) };

      // gender
      let $gender = $('[name="gender"]:checked').val();

      if ($gender == 'man') {
        $('#gender').text("性別：男性");
      } else if ($gender == 'woman') {
        $('#gender').text("性別：女性");
      };

      // known
      let known = 'なんで知った：';
      let $knownby1 = $('[name="knownby1"]:checked').val();
      let $knownby2 = $('[name="knownby2"]:checked').val();

      if (($knownby1) && ($knownby2)) {
        known = known + 'Web,雑誌';
        $('#known').text(known);

      } else if (($knownby1) && !($knownby2)) {
        known = known + 'Web';
        $('#known').text(known);

      } else if (!($knownby1) && ($knownby2)) {
        known = known + '雑誌';
        $('#known').text(known);
      } else {
        $('#known').text('');
      };

      $('#comment').text("コメント："+$comment);

    } else if ( !($name) && !($comment) ) {
      $('#reqName').text('名前を入力してください。');
      $('#reqCom').text('コメントを入力してください。');

    } else if ( !($name) && ($comment) ) {
      $('#reqName').text('名前を入力してください。');
      $('#reqCom').text('');

    } else if ( ($name) && !($comment) ) {
      $('#reqName').text('');
      $('#reqCom').text('コメントを入力してください。');
    };

  });

  let $close = $('.close');
  $close.click( () => {
    $('#myModal').fadeOut();

  });

});