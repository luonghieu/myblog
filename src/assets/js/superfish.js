
/*
 * Superfish v1.6.9 - jQuery menu widget
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 */

(function ($) {
  $.fn.superfish = function (op) {
    var sf = $.fn.superfish
    var c = sf.c
    var $arrow = $('<span class="' + c.arrowClass + '"> &#187;</span>')
    var over = function () {
      var $this = $(this)
      var o = getOptions($this)

      clearTimeout(o.sfTimer)
      $this.showSuperfishUl().siblings().hideSuperfishUl()
    }
    var out = function (e) {
      var $this = $(this)
      var o = getOptions($this)

      if (e.type === 'click' || sf.ios) {
        $.proxy(close, $this, o)()
      } else {
        clearTimeout(o.sfTimer)
        o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay)
      }
    }
    var close = function (o) {
      o.retainPath = ($.inArray(this[0], o.$path) > -1)
      this.hideSuperfishUl()

      if (!this.parents('.' + o.hoverClass).length) {
        o.onIdle.call(getMenu(this))
        if (o.$path.length) {
          $.proxy(over, o.$path)()
        }
      }
    }
    var getMenu = function ($el) {
      return $el.closest('.' + c.menuClass)
    }
    var getOptions = function ($el) {
      return getMenu($el).data('sf-options')
    }
    var applyTouchAction = function ($menu) {
      // needed by MS pointer events
      $menu.css('ms-touch-action', 'none')
    }
    var applyHandlers = function ($menu, o) {
      var targets = 'li:has(ul)'

      if (!o.useClick) {
        if ($.fn.hoverIntent && !o.disableHI) {
          $menu.hoverIntent(over, out, targets)
        } else {
          $menu
            .on('mouseenter', targets, over)
            .on('mouseleave', targets, out)
        }
      }
      var touchstart = 'MSPointerDown'

      if (!sf.ios) {
        touchstart += ' touchstart'
      }
      if (sf.wp7) {
        touchstart += ' mousedown'
      }
      $menu
        .on('focusin', 'li', over)
        .on('focusout', 'li', out)
        .on('click', 'a', o, clickHandler)
        .on(touchstart, 'a', touchHandler)
    }
    var touchHandler = function (e) {
      var $this = $(this)
      var $ul = $this.siblings('ul')

      if ($ul.length > 0 && $ul.is(':hidden')) {
        $this.data('follow', false)
        if (e.type === 'MSPointerDown') {
          $this.trigger('focus')
          return false
        }
      }
    }
    var clickHandler = function (e) {
      var $a = $(this)
      var o = e.data
      var $submenu = $a.siblings('ul')
      var follow = $a.data('follow') !== false

      if ($submenu.length && (o.useClick || !follow)) {
        e.preventDefault()
        if ($submenu.is(':hidden')) {
          $.proxy(over, $a.parent('li'))()
        } else if (o.useClick && follow) {
          $.proxy(out, $a.parent('li'), e)()
        }
      }
    }
    var setPathToCurrent = function ($menu, o) {
      return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
        .addClass(o.hoverClass + ' ' + c.bcClass)
        .filter(function () {
          return ($(this).children('ul').hide().show().length)
        }).removeClass(o.pathClass)
    }
    var addArrows = function ($li, o) {
      if (o.autoArrows) {
        $li.children('a').each(function () {
          addArrow($(this))
        })
      }
    }
    var addArrow = function ($a) {
      $a.addClass(c.anchorClass).append($arrow.clone())
    }

    sf.getOptions = getOptions

    return this.addClass(c.menuClass).each(function () {
      var $this = $(this)
      var o = $.extend({}, sf.defaults, op)
      var $liHasUl = $this.find('li:has(ul)')

      o.$path = setPathToCurrent($this, o)

      $this.data('sf-options', o)

      addArrows($liHasUl, o)
      applyTouchAction($this)
      applyHandlers($this, o)

      $liHasUl.not('.' + c.bcClass).hideSuperfishUl(true)

      o.onInit.call(this)
    })
  }

  var sf = $.fn.superfish
  sf.o = []
  sf.op = {}

  sf.c = {
    bcClass: 'sf-breadcrumb',
    menuClass: 'sf-js-enabled',
    anchorClass: 'sf-with-ul',
    arrowClass: 'sf-sub-indicator'
  }
  sf.defaults = {
    hoverClass: 'sfHover',
    pathClass: 'overrideThisToUse',
    pathLevels: 1,
    delay: 800,
    animation: { opacity: 'show' },
    animationOut: { opacity: 'hide' },
    speed: 'normal',
    speedOut: 'fast',
    autoArrows: true,
    disableHI: false,		// true disables hoverIntent detection
    useClick: false,
    onInit: $.noop, // callback functions
    onBeforeShow: $.noop,
    onShow: $.noop,
    onBeforeHide: $.noop,
    onHide: $.noop,
    onIdle: $.noop
  }
  sf.ios = /iPhone|iPad|iPod/i.test(navigator.userAgent)
  sf.wp7 = (function () {
    var style = document.documentElement.style
    return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent))
  })()
  $.fn.extend({
    hideSuperfishUl: function (instant) {
      if (this.length) {
        var $this = this
        var o = sf.getOptions($this)
        var not = (o.retainPath === true) ? o.$path : ''
        var $ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children('ul')
        var speed = o.speedOut

        if (instant) {
          $ul.show()
          speed = 0
        }
        o.retainPath = false
        o.onBeforeHide.call($ul)
        $ul.stop(true, true).animate(o.animationOut, speed, function () {
          var $this = $(this)
          o.onHide.call($this)
          if (o.useClick) {
            $this.siblings('a').data('follow', false)
          }
        })
      }
      return this
    },
    showSuperfishUl: function () {
      var o = sf.getOptions(this)
      var $this = this.addClass(o.hoverClass)
      var $ul = $this.children('ul')

      o.onBeforeShow.call($ul)
      $ul.stop(true, true).animate(o.animation, o.speed, function () {
        o.onShow.call($ul)
        $this.children('a').data('follow', true)
      })
      return this
    }
  })

  if (sf.ios) {
    // iOS click won't bubble to body, attach to closest possible
    $(window).load(function () {
      $('body').children().on('click', $.noop)
    })
  }
})(jQuery)
