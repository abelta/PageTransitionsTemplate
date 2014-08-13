// Generated by CoffeeScript 1.7.1
(function() {
  var PageTransitions;

  PageTransitions = (function() {
    var animationEndEventName, animationEndEventNames, animationSets, currentPage, dom, endCurrentPage, endPrevPage, isAnimating, onEndAnimation, pages, resetPage, support;

    isAnimating = false;

    dom = jQuery('#pt-main');

    pages = jQuery('.pt-page');

    support = Modernizr.cssanimations;

    currentPage = jQuery(pages).first()[0];

    endPrevPage = false;

    endCurrentPage = false;

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


    /*
     * @constructor
     */

    function PageTransitions() {
      var page, resetClass, _i, _len;
      resetClass = function(page) {
        return jQuery(page).data('originalClassList', jQuery(page).attr('class'));
      };
      for (_i = 0, _len = pages.length; _i < _len; _i++) {
        page = pages[_i];
        resetClass(page);
      }
      jQuery(currentPage).addClass('pt-page-current');
    }

    PageTransitions.prototype.currentPage = function() {
      console.log('currentPage', currentPage);
      return currentPage;
    };

    resetPage = function(outPage, inPage) {
      jQuery(outPage).attr('class', jQuery(outPage).data('originalClassList'));
      return jQuery(inPage).attr('class', "" + (jQuery(inPage).data('originalClassList')) + " pt-page-current");
    };

    onEndAnimation = function(outPage, inPage) {
      var endNextPage;
      endCurrentPage = false;
      endNextPage = false;
      resetPage(outPage, inPage);
      return isAnimating = false;
    };


    /*
     * Public method to flip a page with an animation.
     * @param page {Number|Object} Number of the page that comes in or page itself.
     * @param animation {Number|Object} Number of the animation set to be used, a couple of animations passed as an object or nothing for a random animation.
     */

    PageTransitions.prototype.flip = function(page, animation) {
      var inClass, nextPage, outClass, prevPage;
      console.log('FLIP');
      if (isAnimating) {
        return false;
      }
      isAnimating = true;
      page = (function() {
        var currentPageIndex, i;
        if (page != null) {
          if (page instanceof Number) {
            return pages[page];
          } else if (page instanceof Object) {
            return page;
          }
        } else {
          currentPageIndex = jQuery(pages).index(currentPage);
          if (currentPageIndex < pages.length - 1) {
            i = currentPageIndex + 1;
          } else {
            i = 0;
          }
          return pages[i];
        }
      })();
      prevPage = currentPage;
      currentPage = jQuery(page)[0];
      console.log('prevPage', prevPage);
      console.log('currentPage', currentPage);
      if (prevPage === currentPage) {
        onEndAnimation();
        return false;
      }
      if (typeof animation === 'object') {
        animation = animation;
      } else if (typeof animation === 'number') {
        animation = animationSets[animation];
      } else {
        animation = animationSets[Math.floor(Math.random() * animationSets.length)];
      }
      nextPage = jQuery(currentPage).addClass('pt-page-current');
      outClass = animation['out'];
      inClass = animation['in'];
      jQuery(prevPage).addClass(outClass).on(animationEndEventName, (function(_this) {
        return function() {
          jQuery(prevPage).off(animationEndEventName);
          endPrevPage = true;
          if (endCurrentPage) {
            return onEndAnimation(prevPage, currentPage);
          }
        };
      })(this));
      jQuery(currentPage).addClass(inClass).on(animationEndEventName, (function(_this) {
        return function() {
          jQuery(currentPage).off(animationEndEventName);
          endCurrentPage = true;
          if (endPrevPage) {
            return onEndAnimation(prevPage, currentPage);
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
