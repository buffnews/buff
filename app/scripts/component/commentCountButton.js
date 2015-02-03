define(['require', 'jquery'],function (require, $) {
    'use strict';

        var displayMessage = function() {

            var els = {
                count: $('.fb_comments_count').text(),
                number: $('.message .number'),
                message: $('.comment-count-button .message')
            };

            var messages = {
                isComments: '<p><i class="fa fa-comments-o"></i> There are currently ' + els.count + ' comments. <span class="alert">Read them now!</span></p>',
                noComments: '<p>There are currently no comments. Add yours now!</p>'
            };

            (function() {
                if (els.count !== '0') {
                    els.message.append(messages.isComments);
                } else {
                    els.message.append(messages.noComments);
                }
            })();

        };

        var scrollToComments = function() {
            var els = {
                doc: $('html,body'),
                wall: $('#comment-wall')
            };

            $(els.doc).animate({
               scrollTop: $(els.wall).offset().top - 120
            });
        };

        var showComments = function() {
            
            var els = {
                button: $('.comment-count-button'),
                wall: $('.comment-wall')
            };

            els.button.click(function() {
                els.wall.css('height', 'auto');
                scrollToComments();
            });
        };

        return {
            init: function(){
                // need to delay init of displayMessage so that facebook loads in the comments.
                setTimeout(function() {
                    displayMessage();
                }, 1500);

                showComments();
            }
        };
});