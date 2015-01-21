/**
 * JS Modul Definition
 *
 * @author Ben Zörb @bezoerb https://github.com/bezoerb
 * @copyright    Copyright (c) 2014 ben
 * All rights reserved.
 */
define(['require', 'jquery'],function (require, $) {
    'use strict';

    var socMedUtil = {

        sticky: function() {

            //store the element
            var socMed = $('.socmed-util'),
                article = $('.article-content'),
                main = $('#main'),
                vTop = socMed.offset().top;

            var length = main.height() - socMed.height();

            $(window).scroll(function() {
                // what the y position of the scroll is
                var y = $(this).scrollTop();
                
                // whether that's below the form
                if (y >= vTop) {
                    // if so, ad the fixed class
                    socMed.addClass('sticky');
                    article.addClass('fixed-socmed');
                } else {
                    // otherwise remove it
                    socMed.removeClass('sticky');
                    article.removeClass('fixed-socmed');
                }
                
                if ($(this).scrollTop() > length) {

                   socMed.addClass('freeze');
                  
                } else {

                   socMed.removeClass('freeze');

                }

            });

        },

        resize: function() {
            $(window).resize(function() {
                socMedUtil.sticky();
            });
        }

    };

    return {
        init: function(){
            socMedUtil.sticky();
            socMedUtil.resize();
        }
    };
});