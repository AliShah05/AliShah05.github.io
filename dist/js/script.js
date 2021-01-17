// Link 
function Next() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/NEXT/', '_blank');
}

function Plantilia() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/Plantilia/', '_blank');
}

function ActiveBox() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/activebox/', '_blank');
}

function AveFashion() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/Home/', '_blank');
}

function MoGo() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/Mogo/', '_blank');
}

function Delicious() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/Delicious/', '_blank');
}

function BetaPortfolio() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/Portfolio/#portfolio', '_blank');
}

function Photography() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/Photography/', '_blank');
}

function WebAgency() {
  var answer = confirm("Данный сайт был поврежден при загрузки его в интернет и некоторые блоки сместились");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/WebAgency/', '_blank');
}

$(document).ready(function () {
  $(document).delegate('.open', 'click', function (event) {
    $(this).addClass('oppenned');
    event.stopPropagation();
  });
  $(document).delegate('body', 'click', function (event) {
    $('.open').removeClass('oppenned');
  });
  $(document).delegate('.cls', 'click', function (event) {
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });
});
$(document).ready(function () {
  var $slider = $(".slider"),
      $slideBGs = $(".slide__bg"),
      diff = 0,
      curSlide = 0,
      numOfSlides = $(".slide").length - 1,
      animating = false,
      animTime = 500,
      autoSlideTimeout,
      autoSlideDelay = 6000,
      $pagination = $(".slider-pagi");

  function createBullets() {
    for (var i = 0; i < numOfSlides + 1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-" + i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  }

  ;
  createBullets();

  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  }

  ;

  function changeSlides(instant) {
    if (!instant) {
      animating = false;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-" + curSlide).addClass("active");
      setTimeout(function () {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }

    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-" + curSlide).addClass("active");
    $slider.css("transform", "translate3d(" + -curSlide * 100 + "%,0,0)");
    $slideBGs.css("transform", "translate3d(" + curSlide * 50 + "%,0,0)");
    diff = 0;
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function (e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;
    $(document).on("mousemove touchmove", function (e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if (!curSlide && diff < 0 || curSlide === numOfSlides && diff > 0) diff /= 2;
      $slider.css("transform", "translate3d(" + (-curSlide * 100 - diff) + "%,0,0)");
      $slideBGs.css("transform", "translate3d(" + (curSlide * 50 + diff / 2) + "%,0,0)");
    });
  });
  $(document).on("mouseup touchend", function (e) {
    $(document).off("mousemove touchmove");
    if (animating) return;

    if (!diff) {
      changeSlides(true);
      return;
    }

    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }

    if (diff <= -8) {
      navigateLeft();
    }

    if (diff >= 8) {
      navigateRight();
    }
  });
  $(document).on("click", ".slider-control", function () {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  $(document).on("click", ".slider-pagi__elem", function () {
    curSlide = $(this).data("page");
    changeSlides();
  });
}); // Slider 3D

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  }
}); // Mobile slider

var swiper = new Swiper('.swiper-container-mobile', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});