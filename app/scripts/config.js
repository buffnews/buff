/* jshint -W098,-W079 */
var require = {
    baseUrl: '../bower_components',
    paths: {
        main: '../scripts/main',
        app: '../scripts/app',
        component: '../scripts/component',
        library: '../scripts/library',
        jquery: 'jquery/dist/jquery',
        slick: 'slick-carousel/slick/slick',
        loglevel: 'loglevel/dist/loglevel.min',
        picturefill: 'picturefill/dist/picturefill',
        'slick-carousel': 'slick-carousel/slick/slick.min'
    },
    shim: {
        slick: {
            deps: [
                'jquery'
            ],
            exports: [
                'slick'
            ]
        }
    },
    packages: [
        {

        }
    ]
};