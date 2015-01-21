/**
 * JS Module Definition
 *
 * @author Ben Zörb @bezoerb https://github.com/bezoerb
 * @copyright    Copyright (c) 2014 ben
 * All rights reserved.
 */
define(['require', 'jquery'],function (require, $) {
    'use strict';

    return {
        init: function(){
            $('.dropdown-btn').on('click', function() {
                $($(this).data('target')).toggleClass('active');
            });

            $('.dropdown').hover(
              function() {
                // do nothing
              }, function() {
                // remove active class on mouseout
                $(this).removeClass('active');
              }
            );
        }
    };
});