// Generated by CoffeeScript 1.7.1
(function() {
  var PageTransitions,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  PageTransitions = (function() {
    var animationEndEventName, animationEndEventNames, animationSets, currentPage, dom, endCurrentPage, endNextPage, isAnimating, onEndAnimation, pages, resetPage, support;

    isAnimating = false;

    dom = jQuery('#pt-main');

    pages = jQuery('.pt-page');

    support = Modernizr.cssanimations;

    currentPage = jQuery(pages).first();

    endCurrentPage = false;

    endNextPage = false;

    animationEndEventNames = {
      'WebkitAnimation': 'webkitAnimationEnd',
      'OAnimation': 'oAnimationEnd',
      'msAnimation': 'MSAnimationEnd',
      'animation': 'animationend'
    };

    animationEndEventName = animationEndEventNames[Modernizr.prefixed('animation')];

    animationSets = [
      {
        out: 'pt-page-moveToLeft',
        "in": 'pt-page-moveFromRight'
      }, {
        out: 'pt-page-moveToRight',
        "in": 'pt-page-moveFromLeft'
      }, {
        out: 'pt-page-moveToTop',
        "in": 'pt-page-moveFromBottom'
      }, {
        out: 'pt-page-moveToBottom',
        "in": 'pt-page-moveFromTop'
      }, {
        out: 'pt-page-fade',
        "in": 'pt-page-moveFromRight pt-page-ontop'
      }, {
        out: 'pt-page-fade',
        "in": 'pt-page-moveFromLeft pt-page-ontop'
      }, {
        out: 'pt-page-fade',
        "in": 'pt-page-moveFromBottom pt-page-ontop'
      }, {
        out: 'pt-page-fade',
        "in": 'pt-page-moveFromTop pt-page-ontop'
      }, {
        out: 'pt-page-moveToLeftFade',
        "in": 'pt-page-moveFromRightFade'
      }, {
        out: 'pt-page-moveToRightFade',
        "in": 'pt-page-moveFromLeftFade'
      }, {
        out: 'pt-page-moveToTopFade',
        "in": 'pt-page-moveFromBottomFade'
      }, {
        out: 'pt-page-moveToBottomFade',
        "in": 'pt-page-moveFromTopFade'
      }, {
        out: 'pt-page-moveToLeftEasing pt-page-ontop',
        "in": 'pt-page-moveFromRight'
      }, {
        out: 'pt-page-moveToRightEasing pt-page-ontop',
        "in": 'pt-page-moveFromLeft'
      }, {
        out: 'pt-page-moveToTopEasing pt-page-ontop',
        "in": 'pt-page-moveFromBottom'
      }, {
        out: 'pt-page-moveToBottomEasing pt-page-ontop',
        "in": 'pt-page-moveFromTop'
      }, {
        out: 'pt-page-scaleDown',
        "in": 'pt-page-moveFromRight pt-page-ontop'
      }, {
        out: 'pt-page-scaleDown',
        "in": 'pt-page-moveFromLeft pt-page-ontop'
      }, {
        out: 'pt-page-scaleDown',
        "in": 'pt-page-moveFromBottom pt-page-ontop'
      }, {
        out: 'pt-page-scaleDown',
        "in": 'pt-page-moveFromTop pt-page-ontop'
      }, {
        out: 'pt-page-scaleDown',
        "in": 'pt-page-scaleUpDown pt-page-delay300'
      }, {
        out: 'pt-page-scaleDownUp',
        "in": 'pt-page-scaleUp pt-page-delay300'
      }, {
        out: 'pt-page-moveToLeft pt-page-ontop',
        "in": 'pt-page-scaleUp'
      }, {
        out: 'pt-page-moveToRight pt-page-ontop',
        "in": 'pt-page-scaleUp'
      }, {
        out: 'pt-page-moveToTop pt-page-ontop',
        "in": 'pt-page-scaleUp'
      }, {
        out: 'pt-page-moveToBottom pt-page-ontop',
        "in": 'pt-page-scaleUp'
      }, {
        out: 'pt-page-scaleDownCenter',
        "in": 'pt-page-scaleUpCenter pt-page-delay400'
      }, {
        out: 'pt-page-rotateRightSideFirst',
        "in": 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop'
      }, {
        out: 'pt-page-rotateLeftSideFirst',
        "in": 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop'
      }, {
        out: 'pt-page-rotateTopSideFirst',
        "in": 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop'
      }, {
        out: 'pt-page-rotateBottomSideFirst',
        "in": 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop'
      }, {
        out: 'pt-page-flipOutRight',
        "in": 'pt-page-flipInLeft pt-page-delay500'
      }, {
        out: 'pt-page-flipOutLeft',
        "in": 'pt-page-flipInRight pt-page-delay500'
      }, {
        out: 'pt-page-flipOutTop',
        "in": 'pt-page-flipInBottom pt-page-delay500'
      }, {
        out: 'pt-page-flipOutBottom',
        "in": 'pt-page-flipInTop pt-page-delay500'
      }, {
        out: 'pt-page-rotateFall pt-page-ontop',
        "in": 'pt-page-scaleUp'
      }, {
        out: 'pt-page-rotateOutNewspaper',
        "in": 'pt-page-rotateInNewspaper pt-page-delay500'
      }, {
        out: 'pt-page-rotatePushLeft',
        "in": 'pt-page-moveFromRight'
      }, {
        out: 'pt-page-rotatePushRight',
        "in": 'pt-page-moveFromLeft'
      }, {
        out: 'pt-page-rotatePushTop',
        "in": 'pt-page-moveFromBottom'
      }, {
        out: 'pt-page-rotatePushBottom',
        "in": 'pt-page-moveFromTop'
      }, {
        out: 'pt-page-rotatePushLeft',
        "in": 'pt-page-rotatePullRight pt-page-delay180'
      }, {
        out: 'pt-page-rotatePushRight',
        "in": 'pt-page-rotatePullLeft pt-page-delay180'
      }, {
        out: 'pt-page-rotatePushTop',
        "in": 'pt-page-rotatePullBottom pt-page-delay180'
      }, {
        out: 'pt-page-rotatePushBottom',
        "in": 'pt-page-rotatePullTop pt-page-delay180'
      }, {
        out: 'pt-page-rotateFoldLeft',
        "in": 'pt-page-moveFromRightFade'
      }, {
        out: 'pt-page-rotateFoldRight',
        "in": 'pt-page-moveFromLeftFade'
      }, {
        out: 'pt-page-rotateFoldTop',
        "in": 'pt-page-moveFromBottomFade'
      }, {
        out: 'pt-page-rotateFoldBottom',
        "in": 'pt-page-moveFromTopFade'
      }, {
        out: 'pt-page-moveToRightFade',
        "in": 'pt-page-rotateUnfoldLeft'
      }, {
        out: 'pt-page-moveToLeftFade',
        "in": 'pt-page-rotateUnfoldRight'
      }, {
        out: 'pt-page-moveToBottomFade',
        "in": 'pt-page-rotateUnfoldTop'
      }, {
        out: 'pt-page-moveToTopFade',
        "in": 'pt-page-rotateUnfoldBottom'
      }, {
        out: 'pt-page-rotateRoomLeftOut pt-page-ontop',
        "in": 'pt-page-rotateRoomLeftIn'
      }, {
        out: 'pt-page-rotateRoomRightOut pt-page-ontop',
        "in": 'pt-page-rotateRoomRightIn'
      }, {
        out: 'pt-page-rotateRoomTopOut pt-page-ontop',
        "in": 'pt-page-rotateRoomTopIn'
      }, {
        out: 'pt-page-rotateRoomBottomOut pt-page-ontop',
        "in": 'pt-page-rotateRoomBottomIn'
      }, {
        out: 'pt-page-rotateCubeLeftOut pt-page-ontop',
        "in": 'pt-page-rotateCubeLeftIn'
      }, {
        out: 'pt-page-rotateCubeRightOut pt-page-ontop',
        "in": 'pt-page-rotateCubeRightIn'
      }, {
        out: 'pt-page-rotateCubeTopOut pt-page-ontop',
        "in": 'pt-page-rotateCubeTopIn'
      }, {
        out: 'pt-page-rotateCubeBottomOut pt-page-ontop',
        "in": 'pt-page-rotateCubeBottomIn'
      }, {
        out: 'pt-page-rotateCarouselLeftOut pt-page-ontop',
        "in": 'pt-page-rotateCarouselLeftIn'
      }, {
        out: 'pt-page-rotateCarouselRightOut pt-page-ontop',
        "in": 'pt-page-rotateCarouselRightIn'
      }, {
        out: 'pt-page-rotateCarouselTopOut pt-page-ontop',
        "in": 'pt-page-rotateCarouselTopIn'
      }, {
        out: 'pt-page-rotateCarouselBottomOut pt-page-ontop',
        "in": 'pt-page-rotateCarouselBottomIn'
      }, {
        out: 'pt-page-rotateSidesOut',
        "in": 'pt-page-rotateSidesIn pt-page-delay200'
      }, {
        out: 'pt-page-rotateSlideOut',
        "in": 'pt-page-rotateSlideIn'
      }
    ];

    function PageTransitions() {
      this.flip = __bind(this.flip, this);
      var page, resetClass, _i, _len;
      console.log('pageTransitions#constructor');
      resetClass = function(page) {
        console.log('pagetransitions#constructor#resetClass');
        return jQuery(page).data('originalClassList', jQuery(page).attr('class'));
      };
      for (_i = 0, _len = pages.length; _i < _len; _i++) {
        page = pages[_i];
        resetClass(page);
      }
      jQuery(currentPage).addClass('pt-page-current');
    }

    resetPage = function(outPage, inPage) {
      console.log('resetPage');
      jQuery(outPage).attr('class', jQuery(outPage).data('originalClassList'));
      return jQuery(inPage).attr('class', "" + (jQuery(inPage).data('originalClassList')) + " pt-page-current");
    };

    onEndAnimation = function(outPage, inPage) {
      console.log('onEndAnimation');
      endCurrentPage = false;
      endNextPage = false;
      resetPage(outPage, inPage);
      return isAnimating = false;
    };

    PageTransitions.prototype.flip = function(page, animation) {
      var inClass, nextPage, outClass;
      console.log('pageTransitions#flip');
      if (isAnimating) {
        return false;
      }
      isAnimating = true;
      console.log('page', page);
      page = (function(_this) {
        return function() {
          var currentPageIndex, i;
          if (page != null) {
            if (page instanceof Number) {
              return pages[page];
            } else if (page instanceof Object) {
              return page;
            }
          } else {
            console.log("currentPageIndex", currentPageIndex);
            currentPageIndex = jQuery(pages).index(currentPage);
            if (currentPageIndex > pages.length) {
              i = 0;
            } else {
              i = currentPageIndex + 1;
            }
            console.log("currentPageIndex", currentPageIndex);
            return pages[i];
          }
        };
      })(this)();
      currentPage = page;
      console.log('page', page);
      if (animation instanceof Object) {
        animation = animation;
      } else if (animation instanceof Number) {
        animation = animationSets[animation];
      } else {
        animation = animationSets[Math.floor(Math.random() * animationSets.length)];
      }
      console.log('animation', animation);
      nextPage = jQuery(currentPage).addClass('pt-page-current');
      outClass = animation['out'];
      inClass = animation['in'];
      jQuery(currentPage).addClass(outClass).on(animationEndEventName, (function(_this) {
        return function() {
          jQuery(currentPage).off(animationEndEventName);
          endCurrentPage = true;
          if (endNextPage) {
            return onEndAnimation(currentPage, nextPage);
          }
        };
      })(this));
      jQuery(nextPage).addClass(inClass).on(animationEndEventName, (function(_this) {
        return function() {
          jQuery(nextPage).off(animationEndEventName);
          endNextPage = true;
          if (endCurrentPage) {
            return onEndAnimation(currentPage, nextPage);
          }
        };
      })(this));
      if (!support) {
        return onEndAnimation(currentPage, nextPage);
      }
    };

    return PageTransitions;

  })();

  window.PageTransitions = PageTransitions;

}).call(this);