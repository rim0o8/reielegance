// activeClassによってモザイク処理などw

(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item")
    };
    var activeClass="timeline-item--active"
    var img=".timeline__img"

    selectors.item.eq(0).addClass(activeClass);


    var itemLength = selectors.item.length;


    $(window).on('load scroll',function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (pos <= max - 40 && pos >= min) {
          
          selectors.id.css( // 背景を今のselectors.itemの画像に変更
            "background-image",
            "url(" +
              $(this)
                .find(img)
                .attr("src") +
              ")"
          );

          selectors.item.removeClass(activeClass);
          $(this).addClass(activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();

