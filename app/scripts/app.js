/*global define */
define(function (require) {
    'use strict';

    // load dependencies
    var $ = require('jquery'),
        log = require('loglevel'),
        components = {},
        self = {};


    components.fixSocMedUtil = require('component/fixSocMedUtil');
    components.carousel = require('component/carousel');
    components.dropdown = require('component/dropdown');
    components.facebook = require('component/facebook');
    components.commentCountButton = require('component/commentCountButton');

    // API methods
    $.extend(self, {

       /**
        * App initialization
	     */
        init: function init() {
            log.setLevel(0);
            log.debug('Running jQuery %s', $().jquery);

            log.debug('');
            log.debug('Initializing components ...');

            for (var key in components) {
                try {
                    components[key].init();
                } catch (err) {
                    log.debug('initialization failed for component \'' + key + '\'');
                    log.error(err);
                }
            }
        }
    });

    return self;
});