define(['require', 'jquery'],function (require, $) {
    'use strict';

        var getData = function(url, container, articleType) {
            var articleData = $.getJSON(url);

            articleData.done(function (data) {

                var start = 0, resultsPerPage = 2;

                var storyItems = $(container);

                var loadBtn = $('.load-more.btn');

                var dataInit = function() {
                    var html = [],
                        thisPagesArticles = data.slice(start, start + resultsPerPage);

                    var kind = articleType;

                    if (thisPagesArticles.length) {

                        thisPagesArticles.forEach(function (data) {
                            if(kind === 'rev') {
                                html.push('<li class="recent-story-item"><div class="story-image"><img src="http://' + data.image + '" /></div><div class="story-title"><h3>' + data.headline + '</h3></div></li>');
                            } else {
                                html.push('<li class="recent-story-item"><div class="story-image"><img src="' + data.image + '" /></div><div class="story-title"><h3>' + data.title + '</h3></div></li>');                            
                            }
                        });

                        $(storyItems).append(html.join(''));

                        start += resultsPerPage;

                    } else {
                        console.log('You loaded em all, son');
                    }
                };

                dataInit();

                $(loadBtn).on('click', function (e) {
                    dataInit();
                    e.preventDefault();
                });
             
            });
        };

        return {
            init: function(){
                getData('http://api.revcontent.com/v1/content/?key=706864a76525e1129a673f1ad4ec5dd5e26&pub_id=7068&source=17801&type=json&doc_offset=0&userip=71.100.99.99&ad_count=50', '.rev-items', 'rev');
                getData('scripts/component/load-articles/articles.json', '.recent-story-items', 'news');
            }
        };
});