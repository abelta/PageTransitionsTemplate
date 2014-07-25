class PageTransitions


    isAnimating = false
    dom = jQuery('#pt-main')
    pages = jQuery('.pt-page')
    support = Modernizr.cssanimations
    currentPage = jQuery(pages).first()
    endCurrentPage = false
    endNextPage = false
    animationEndEventNames = 
        'WebkitAnimation' : 'webkitAnimationEnd',
        'OAnimation' : 'oAnimationEnd',
        'msAnimation' : 'MSAnimationEnd',
        'animation' : 'animationend'
    animationEndEventName = animationEndEventNames[ Modernizr.prefixed('animation') ]

    animationSets = [
        {out: 'pt-page-moveToLeft', in: 'pt-page-moveFromRight'}
        {out: 'pt-page-moveToRight', in: 'pt-page-moveFromLeft'}
        {out: 'pt-page-moveToTop', in: 'pt-page-moveFromBottom'}
        {out: 'pt-page-moveToBottom', in: 'pt-page-moveFromTop'}
        {out: 'pt-page-fade', in: 'pt-page-moveFromRight pt-page-ontop'}
        {out: 'pt-page-fade', in: 'pt-page-moveFromLeft pt-page-ontop'}
        {out: 'pt-page-fade', in: 'pt-page-moveFromBottom pt-page-ontop'}
        {out: 'pt-page-fade', in: 'pt-page-moveFromTop pt-page-ontop'}
        {out: 'pt-page-moveToLeftFade', in: 'pt-page-moveFromRightFade'}
        {out: 'pt-page-moveToRightFade', in: 'pt-page-moveFromLeftFade'}
        {out: 'pt-page-moveToTopFade', in: 'pt-page-moveFromBottomFade'}
        {out: 'pt-page-moveToBottomFade', in: 'pt-page-moveFromTopFade'}
        {out: 'pt-page-moveToLeftEasing pt-page-ontop', in: 'pt-page-moveFromRight'}
        {out: 'pt-page-moveToRightEasing pt-page-ontop', in: 'pt-page-moveFromLeft'}
        {out: 'pt-page-moveToTopEasing pt-page-ontop', in: 'pt-page-moveFromBottom'}
        {out: 'pt-page-moveToBottomEasing pt-page-ontop', in: 'pt-page-moveFromTop'}
        {out: 'pt-page-scaleDown', in: 'pt-page-moveFromRight pt-page-ontop'}
        {out: 'pt-page-scaleDown', in: 'pt-page-moveFromLeft pt-page-ontop'}
        {out: 'pt-page-scaleDown', in: 'pt-page-moveFromBottom pt-page-ontop'}
        {out: 'pt-page-scaleDown', in: 'pt-page-moveFromTop pt-page-ontop'}
        {out: 'pt-page-scaleDown', in: 'pt-page-scaleUpDown pt-page-delay300'}
        {out: 'pt-page-scaleDownUp', in: 'pt-page-scaleUp pt-page-delay300'}
        {out: 'pt-page-moveToLeft pt-page-ontop', in: 'pt-page-scaleUp'}
        {out: 'pt-page-moveToRight pt-page-ontop', in: 'pt-page-scaleUp'}
        {out: 'pt-page-moveToTop pt-page-ontop', in: 'pt-page-scaleUp'}
        {out: 'pt-page-moveToBottom pt-page-ontop', in: 'pt-page-scaleUp'}
        {out: 'pt-page-scaleDownCenter', in: 'pt-page-scaleUpCenter pt-page-delay400'}
        {out: 'pt-page-rotateRightSideFirst', in: 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop'}
        {out: 'pt-page-rotateLeftSideFirst', in: 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop'}
        {out: 'pt-page-rotateTopSideFirst', in: 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop'}
        {out: 'pt-page-rotateBottomSideFirst', in: 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop'}
        {out: 'pt-page-flipOutRight', in: 'pt-page-flipInLeft pt-page-delay500'}
        {out: 'pt-page-flipOutLeft', in: 'pt-page-flipInRight pt-page-delay500'}
        {out: 'pt-page-flipOutTop', in: 'pt-page-flipInBottom pt-page-delay500'}
        {out: 'pt-page-flipOutBottom', in: 'pt-page-flipInTop pt-page-delay500'}
        {out: 'pt-page-rotateFall pt-page-ontop', in: 'pt-page-scaleUp'}
        {out: 'pt-page-rotateOutNewspaper', in: 'pt-page-rotateInNewspaper pt-page-delay500'}
        {out: 'pt-page-rotatePushLeft', in: 'pt-page-moveFromRight'}
        {out: 'pt-page-rotatePushRight', in: 'pt-page-moveFromLeft'}
        {out: 'pt-page-rotatePushTop', in: 'pt-page-moveFromBottom'}
        {out: 'pt-page-rotatePushBottom', in: 'pt-page-moveFromTop'}
        {out: 'pt-page-rotatePushLeft', in: 'pt-page-rotatePullRight pt-page-delay180'}
        {out: 'pt-page-rotatePushRight', in: 'pt-page-rotatePullLeft pt-page-delay180'}
        {out: 'pt-page-rotatePushTop', in: 'pt-page-rotatePullBottom pt-page-delay180'}
        {out: 'pt-page-rotatePushBottom', in: 'pt-page-rotatePullTop pt-page-delay180'}
        {out: 'pt-page-rotateFoldLeft', in: 'pt-page-moveFromRightFade'}
        {out: 'pt-page-rotateFoldRight', in: 'pt-page-moveFromLeftFade'}
        {out: 'pt-page-rotateFoldTop', in: 'pt-page-moveFromBottomFade'}
        {out: 'pt-page-rotateFoldBottom', in: 'pt-page-moveFromTopFade'}
        {out: 'pt-page-moveToRightFade', in: 'pt-page-rotateUnfoldLeft'}
        {out: 'pt-page-moveToLeftFade', in: 'pt-page-rotateUnfoldRight'}
        {out: 'pt-page-moveToBottomFade', in: 'pt-page-rotateUnfoldTop'}
        {out: 'pt-page-moveToTopFade', in: 'pt-page-rotateUnfoldBottom'}
        {out: 'pt-page-rotateRoomLeftOut pt-page-ontop', in: 'pt-page-rotateRoomLeftIn'}
        {out: 'pt-page-rotateRoomRightOut pt-page-ontop', in: 'pt-page-rotateRoomRightIn'}
        {out: 'pt-page-rotateRoomTopOut pt-page-ontop', in: 'pt-page-rotateRoomTopIn'}
        {out: 'pt-page-rotateRoomBottomOut pt-page-ontop', in: 'pt-page-rotateRoomBottomIn'}
        {out: 'pt-page-rotateCubeLeftOut pt-page-ontop', in: 'pt-page-rotateCubeLeftIn'}
        {out: 'pt-page-rotateCubeRightOut pt-page-ontop', in: 'pt-page-rotateCubeRightIn'}
        {out: 'pt-page-rotateCubeTopOut pt-page-ontop', in: 'pt-page-rotateCubeTopIn'}
        {out: 'pt-page-rotateCubeBottomOut pt-page-ontop', in: 'pt-page-rotateCubeBottomIn'}
        {out: 'pt-page-rotateCarouselLeftOut pt-page-ontop', in: 'pt-page-rotateCarouselLeftIn'}
        {out: 'pt-page-rotateCarouselRightOut pt-page-ontop', in: 'pt-page-rotateCarouselRightIn'}
        {out: 'pt-page-rotateCarouselTopOut pt-page-ontop', in: 'pt-page-rotateCarouselTopIn'}
        {out: 'pt-page-rotateCarouselBottomOut pt-page-ontop', in: 'pt-page-rotateCarouselBottomIn'}
        {out: 'pt-page-rotateSidesOut', in: 'pt-page-rotateSidesIn pt-page-delay200'}
        {out: 'pt-page-rotateSlideOut', in: 'pt-page-rotateSlideIn'}
    ]

    constructor:  ->
        console.log 'pageTransitions#constructor'
        #console.log '@dom', @dom
        #console.log '@pages', @pages

        resetClass = (page) ->
            console.log 'pagetransitions#constructor#resetClass'
            jQuery(page).data 'originalClassList', jQuery(page).attr('class')

        resetClass page for page in pages
        jQuery(currentPage).addClass( 'pt-page-current' )


    resetPage = (outPage, inPage) ->
        console.log 'resetPage'
        #console.log 'this', this
        jQuery(outPage).attr 'class', jQuery(outPage).data('originalClassList')
        jQuery(inPage).attr 'class', "#{jQuery(inPage).data('originalClassList')} pt-page-current"


    onEndAnimation = (outPage, inPage) ->
        console.log 'onEndAnimation'
        #console.log 'this', this
        endCurrentPage = false
        endNextPage = false
        resetPage outPage, inPage
        isAnimating = false
        


    flip: (page, animation) ->
        console.log 'pageTransitions#flip'
        return false if isAnimating
        isAnimating = true
        console.log 'page', page
        page = do ->
            if page?
                if page instanceof Number
                    pages[page]
                else if page instanceof Object # DOM or jQuery element.
                    page
            else
                currentPageIndex = jQuery(pages).index(currentPage)
                console.log "currentPageIndex", currentPageIndex
                #if currentPageIndex >= pages.length-1 then i = 0
                #else i = currentPageIndex+1

                if currentPageIndex < pages.length-1 then i = currentPageIndex+1
                else i = 0
                console.log "currentPageIndex", currentPageIndex
                console.log 'i', i
                pages[i]
        currentPage = page
        console.log 'page', page
        if animation instanceof Object
            animation = animation
        else if animation instanceof Number
            animation = animationSets[ animation ]
        else animation = animationSets[ Math.floor(Math.random()*animationSets.length) ]
        console.log 'animation', animation
        #nextPage = jQuery(page).addClass( 'pt-page-current' )
        nextPage = jQuery(currentPage).addClass( 'pt-page-current' )
        outClass = animation['out']
        inClass = animation['in']

        jQuery( currentPage ).addClass( outClass ).on animationEndEventName, =>
            jQuery( currentPage ).off animationEndEventName
            endCurrentPage = true
            onEndAnimation currentPage, nextPage if endNextPage

        jQuery( nextPage ).addClass( inClass ).on animationEndEventName, =>
            jQuery( nextPage ).off animationEndEventName
            endNextPage = true
            onEndAnimation currentPage, nextPage if endCurrentPage

        onEndAnimation currentPage, nextPage unless support    




window.PageTransitions = PageTransitions
    