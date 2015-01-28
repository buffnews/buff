/* jshint ignore:start */
define(['require', 'jquery', 'slick'],function (require, $, slick) {
    'use strict';

    return {
        init: function(){
            
            var arrows = {
                prev: $('.prev'),
                next: $('.next')
            };

            $('.items-to-scroll').slick({
                slide: 'li',
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                prevArrow: arrows.prev,
                nextArrow: arrows.next,
                responsive: [
                    {
                        breakpoint: 959,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            arrows: true,
                            prevArrow: arrows.prev,
                            nextArrow: arrows.next
                        }
                    },
                    {
                        breakpoint: 601,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            arrows: true,
                            prevArrow: arrows.prev,
                            nextArrow: arrows.next
                        }
                    },
                ]
            });
        }
    };
});
/* jshint ignore:end */