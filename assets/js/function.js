// テキストアニメーション（遅延付き）
$(function () {
  setTimeout(() => {
    $('.txt').addClass('animate');
  }, 100);
});

$(function () {
  setTimeout(() => {
    $('.txt-copy').addClass('animate');
  }, 100);
});

// スクロール時のアニメーション
$(function () {
  $(window).on('scroll', function () {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('.fade-up, .fade-down, .fadein-blur').each(function () {
      const position = $(this).offset().top;
      if (scroll > position - windowHeight + 180) {
        if ($(this).hasClass('fade-up')) {
          $(this).addClass('fadein-up-active');
        }
      }
    });
  });
});


// case
const swiper1 = new Swiper('.case-slider .swiper', {
  // ループを無効にする（最後の一枚で止まるようになります）
  loop: true,
  rewind: false,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// offer
const swiper2 = new Swiper('.price-slider .swiper', {
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


$(function () {
  const $btn = $('.floating-btn');
  const $floatStart = $('.float-start');
  const floatEnd = document.querySelector('.float-end');

  // 1. スクロールによる表示・非表示の判定
  if ($floatStart.length) {
    const troubleTop = $floatStart.offset().top;

    $(window).on('scroll', function () {
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      // 下の判定エリアに入っていない時だけ、通常の表示判定を行う
      if (!$btn.hasClass('hide')) {
        if (scroll + windowHeight > troubleTop + 100) {
          $btn.addClass('visible');
        } else {
          $btn.removeClass('visible');
        }
      }
    });
  }

  // 2. float-end付近の表示制御
  if (floatEnd) {
    $(window).on('scroll', function () {
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      // float-end要素のトップ位置（から50px手前）を取得
      const floatEndTop = $(floatEnd).offset().top - 50;
      // 「画面の下端」が「float-endの50px手前」を越えたら隠す
      // 越えている間はずっと hide がつくので、通り過ぎても出てきません
      if (scroll + windowHeight > floatEndTop) {
        $btn.addClass('hide');
      } else {
        $btn.removeClass('hide');
      }
    });
  }
});