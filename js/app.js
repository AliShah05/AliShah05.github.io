function Plantilia() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/Plantilia/', '_blank');
}

function AveFashion() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/Home/', '_blank');
}

function Delicious() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/Delicious/', '_blank');
}

function Photography() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/Photography/', '_blank');
}

function WebAgency() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://lo07uq69ltg6zzekoagmkw-on.drv.tw/WebAgency/', '_blank');
}

function Designer() {
  var answer = confirm("Готовы ли вы перейти по этой ссылке?");
  if (answer) window.open('https://xxxdesignerxxx.github.io/', '_blank');
}

jQuery(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.navbar').addClass('fixed');
    } else if ($(this).scrollTop() < 10) {
      $('.navbar').removeClass('fixed');
    }
  });
}); // MODAL 

var html = document.getElementById('html');
var css = document.getElementById('css');
var js = document.getElementById('js');
var gulp = document.getElementById('gulp');
var php = document.getElementById('php');
html.addEventListener('click', function () {
  swal("HTML", "Это стандартный язык разметки гипертекста в Интернете. Его основное предназначение – создавать интернет-страницы и обеспечивать нормальное расположение в документе списков, заголовков, таблиц, картинок и прочих материалов.");
});
css.addEventListener('click', function () {
  swal("CSS", "Формальный язык описания внешнего вида документа имеющий разные препроцессоры для упращенной работы такие как SCSS/SASS/LESS/STYLUS и другие.. CSS используется создателями веб-страниц для задания цветов, шрифтов, стилей, расположения отдельных блоков и других аспектов представления внешнего вида этих веб-страниц. ");
});
js.addEventListener('click', function () {
  swal("JavaScript", "Предназначен для написания сценариев для активных HTML-страниц. Язык JavaScript не имеет никакого отношения к языку Java. Java разработан фирмой SUN. Программа на JavaScript встраивается непосредственно в исходный текст HTML-документа и интерпретируется брaузером по мере загрузки этого документа.");
});
gulp.addEventListener('click', function () {
  swal("GULP ", "Это таск-менеджер для автоматического выполнения часто используемых задач (например, минификации, тестирования, объединения файлов), написанный на языке программирования JavaScript. Можно с уверенностью сказать, что Gulp и множество утилит, написанных для него, подходят для решения практически любой задачи при разработке проекта любой сложности – от небольшого сайта до крупного проекта.");
});
php.addEventListener('click', function () {
  swal("PHP", "Скриптовый язык программирования, созданный для генерации HTML-страниц на веб-сервере и работы с базами данных. Крайне прост для освоения, но вместе с тем способен удовлетворить запросы профессиональных программистов. Хотя PHP, главным образом, предназначен для работы в среде веб-серверов, область его применения не ограничивается только этим.");
}); // FIXED MENU

$(".burger-menu").click(function () {
  $(this).toggleClass('close-burger');
  $(".fixed-menu").toggleClass('focus-active');
  $(".nav-item").toggleClass('_active');
});
$(".fixed-menu>.menu-container>.nav-item>.nav-link>a").click(function () {
  $(".burger-menu").toggleClass('close-burger');
  $(".fixed-menu").toggleClass('focus-active');
  $(".nav-item").toggleClass('_active');
}); // Show HIDDEN

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 6;
      const animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        const animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  setTimeout(() => {
    animOnScroll();
  }, 1600);
} // ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————


class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '<>_\\/[]{}—=+*?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({
        from,
        to,
        start,
        end
      });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let {
        from,
        to,
        start,
        end,
        char
      } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }

        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

} // ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————


const phrases = ['ответственный', 'компитентный', 'быстро обучаемый', 'надежный'];
const el = document.querySelector('.text');
const fx = new TextScramble(el);
let counter = 0;

const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1500);
  });
  counter = (counter + 1) % phrases.length;
};

setTimeout(() => {
  next();
}, 2000);
filterSelection("all"); // Execute the function and show all columns

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = ""; // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected

  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
} // Show filtered elements


function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
} // Hide elements that are not selected


function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }

  element.className = arr1.join(" ");
} // Add active class to the current button (highlight it)


var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} // Email


$(document).ready(function () {
  //E-mail Ajax Send
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      //Change
      data: th.serialize()
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
}); // init

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave',
    duration: "190%" // this works just fine with duration 0 as well
    // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
    // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.

  }
}); // get all slides

var slides = document.querySelectorAll("section.panel"); // create scene for every slide

for (var i = 0; i < slides.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: slides[i]
  }).setPin(slides[i], {
    pushFollowers: false
  }).addTo(controller);
}