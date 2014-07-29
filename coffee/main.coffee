pageTransitions = new PageTransitions( jQuery('#pt-main'), jQuery('.pt-page'))
jQuery('.flip').on 'click', -> pageTransitions.flip()