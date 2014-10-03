Page Transitions Template
=========

Template for creating one page websites with page transitions, heavily inspired by the work of [Pedro Botelho](@botelho) for [Codrops](http://tympanus.net/codrops/).

[HTML5 Bolierplate](http://html5boilerplate.com/) included too.


You can see the kind of webpage that you get here

[Demo](http://tympanus.net/Development/PageTransitions/)


And explained in the original article by Pedro Boatelho

[Article on Codrops](http://tympanus.net/codrops/?p=15001)



Installation and usage
=========

The project functions already as a static webpage that you can see from your web browser just pointing it at the /index.html file but dynamic features can be added in a real project.

Pages must be marked in the HTML like this

```
<div id="pt-main" class="pt-perspective">
    <div class="pt-page">CONTENT</div>
    <div class="pt-page">CONTENT</div>
    <div class="pt-page">CONTENT</div>
</div>
```

Javascript functionality has been translated to CofeeScript but consumed as Javascript so it needs to be recompiled if changed.
_pagetransitions.coffee_ contains the library and _main.coffee_ shows a simple example of its use

```
pageTransitions = new PageTransitions( jQuery('#pt-main'), jQuery('.pt-page'))
jQuery('.flip').on 'click', -> pageTransitions.flip()
```
First we declare a _PageTransitions_ object that will manage the set of pages, then we use its _flip_ method to flip these pages.

The flip method is overcharged and accepts the following parameters
 1. Number of the page that comes in or the page itself.
 2. Number of the animation set to be used, a couple of animations passed as an object or nothing for a random animation.

The animation sets is stored in the _pagetransitions.coffee_ in the constant _animationSets_.



See it in action
==========

[Here](https://cdn.rawgit.com/abelta/PageTransitionsTemplate/master/index.html)



Licensing and terms of use
==========

License and terms of use are inherited from the original project and are as seen [here](http://tympanus.net/codrops/licensing/).