$(function(){

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

document.cookie = "key=.form__label; path=/; domain:github.com; max-age=0; secure; samesite=none;";