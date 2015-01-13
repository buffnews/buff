/*global $:false, jQuery:false */
/*jshint unused:false*/

'use strict';

jQuery(function ($) {

    var helpers = {

        fixSocmedBar: function() {

            //store the element
            var socMed = $('.socmed-util'),
                article = $('.article-content'),
                variant = $('#recent-stories-carousel').height() + 20,
                vTop = socMed.offset().top - parseFloat(socMed.css('margin-top').replace(/auto/, 0));

            $(window).scroll(function (event) {
                // what the y position of the scroll is
                var y = $(this).scrollTop();
                
                // whether that's below the form
                if (y >= vTop) {
                    // if so, ad the fixed class
                    socMed.addClass('fix');
                    article.addClass('fixed-socmed');
                } else {
                    // otherwise remove it
                    socMed.removeClass('fix');
                    article.removeClass('fixed-socmed');
                }
                
            });

        },

        init: function() {
            helpers.fixSocmedBar();
        }

    };

    // Initialize on DOM ready
    $(helpers.init);

});