(function($) {
  
  var Spinner = function(el, options) {
    this.el = el;
    this.items = this.el.children();
    this.space = (Math.PI * 2) / this.items.length;
    this.start = 0;

    // Read size of images
    var loaded = this.items.length,
      spinner = this;
    this.items.each(function() {
      var el = $(this),
        img = el.find('img'),
        newImg = new Image();
      newImg.src = img.attr('src');
      newImg.onload = function() {
        el.data('height', newImg.height);
        el.data('width', newImg.width);
        img.css({
          minHeight: newImg.height + 'px',
          minWidth: newImg.width + 'px'
        });
        el.css({
          marginLeft: newImg.width / -2,
          marginTop: newImg.height / -2
        });
        --loaded === 0 && spinner.positionItems();
      };
    });

    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    $(window).on('keydown', $.proxy(this.keydown, this));
    $('.container').on('swipeRight', $.proxy(this.next, this))
      .on('swipeLeft', $.proxy(this.prev, this));
  };

  Spinner.prototype.positionItems = function() {
    // Find the center item
    var space = this.space,
      // Find the start position
      pos = this.start;

    this.items.each(function() {
      var el = $(this),
        cos = Math.cos(pos),
        offsetX = (Math.sin(pos) * 300).toFixed(0),
        offsetY = (cos * 120).toFixed(0),
        size = ((cos + 2) / 3).toFixed(2);

      el.css({
        '-webkit-transform': 'scale(' + size + ') ' +
          'translate3D(' + offsetX + 'px, ' + offsetY + 'px, 0)',
        opacity: size,
        zIndex: Math.floor(cos * 100)
      });

      el.toggleClass('center', cos === 1);

      pos += space;
    });
  };

  Spinner.prototype.next = function() {
    this.start += this.space;
    this.positionItems();
  };

  Spinner.prototype.prev = function() {
    this.start -= this.space;
    this.positionItems();
  };

  Spinner.prototype.keydown = function(e) {
    if (e.keyCode === 37) {
      this.prev();
    } else if (e.keyCode === 39) {
      this.next();
    }
  };

  // jQuery plugin definition
  $.fn.spinner = function(options) {
    new Spinner(this, options);
  };

}(window.jQuery || window.Zepto));