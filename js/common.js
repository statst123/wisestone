$(function () {
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    anchors: ['firstPage', 'secondPage', '3rdPage', 'lastPage'],
    menu: '#menu'
  });

  $(".bxslider1").bxSlider({
     pager: false,
  });

  $(".subbxslide").bxSlider({
    touchEnabled:false,
    pager: false
  });
});



$(function () {
  $('.btn_search').click(function () {
    $('.search').show().animate({
      width: '300px'
    }, 600 );
    $('.btn_search').hide(),
    $('.btn_close').show()
  });
  $('.btn_close').click(function () {
    $('.search').hide().animate({
      width: '0px'
    }, 600 )
    $('.btn_close').hide(),
    $('.btn_search').show()
  });

});
$(function () {
  $('.button').click(function(){
    $('.bottomslide').toggleClass('on')
  });
});


$(function () {

  var timer = setInterval(function () {

    var now = new Date();
    var day = now.getDate();
    var hr = now.getHours();
    var min = now.getMinutes();
    var nday, hNum, mNum;

    if ( day >= 10) {
      nday = day;
    } else {
      nday = '0' + day;
    }

    if (hr >= 10) {
      hNum = hr;
    } else { 
      hNum = '0' + hr;
    }

    if (min >= 10) {
      mNum = min;
    } else { 
      mNum = '0' + min;
    }

    $('.subwatch p span').eq(0).text(nday);
    $('.subwatch p span').eq(1).text(hNum);
    $('.subwatch p span').eq(2).text(mNum);
    $('figure p span').eq(0).text(hNum);
    $('figure p span').eq(1).text(mNum);
  }, 1000);
});

$(function () {
  var target = document.querySelectorAll('.conbt');
  var btnPopClose = document.querySelectorAll('.close')
  var targetID;

  // 팝업 열기
  for(var i = 0; i < target.length; i++){
    target[i].addEventListener('click', function(){
      targetID = this.getAttribute('href');
      document.querySelector(targetID).style.display = 'block';
    });
  }
  
  // 팝업 닫기
  for(var j = 0; j < target.length; j++){
    btnPopClose[j].addEventListener('click', function(){
      this.parentNode.parentNode.style.display = 'none';
    });
  }
  });


    $(window).load( function(){
      $('#load').slideUp(2000);
    });

    $(function () {
      $('.shopplace li').click(function (){
        $(this).toggleClass('on');
      });
    });
