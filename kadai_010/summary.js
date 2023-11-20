$(function(){
  // 文字の色を変える
  $('#change-color').on('click',function(){
    $('#target').css("color","red");
  });
  // 文字の内容を変える
  $('#change-text').on('click',function(){
    $('#target').text("Hello!");
  });
  // フェードアウトする
  $('#fade-out').on('click',function(){
    $('#target').fadeOut();
  });
  // フェードインする
  $('#fade-in').on('click',function(){
    $('#target').fadeIn();
  });
});