const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(['resources/js/app.js',
        'public/js/swiper.min.js',
    ], 'public/js/apps.js')
	.styles([
		'public/css/bootstrap.min.css',
		'public/css/vue-select.css',
		'public/css/framework7.bundle.min.css',
		'public/css/font-awesome.min.css',
		'public/css/style.css',
        'public/css/swiper.min.css',
	], 'public/css/all.css');

mix.js(['resources/js/app.js',
    'resources/views/web/assets/js/bootstrap.min.js',
    'resources/views/web/assets/js/bootstrap-hover-dropdown.min.js',
    'resources/views/web/assets/js/owl.carousel.min.js',
    'resources/views/web/assets/js/echo.min.js',
    'resources/views/web/assets/js/jquery.easing-1.3.min.js',
    'resources/views/web/assets/js/bootstrap-slider.min.js',
    'resources/views/web/assets/js/jquery.rateit.min.js',
    'resources/views/web/assets/js/lightbox.min.js',
    'resources/views/web/assets/js/bootstrap-select.min.js',
    'resources/views/web/assets/js/wow.min.js',
    'resources/views/web/assets/js/scripts.js',
], 'resources/js/webapp.js')
    .styles([
        'resources/views/web/assets/css/bootstrap.min.css',
        'resources/views/web/assets/css/main.css',
        'resources/views/web/assets/css/blue.css',
        'resources/views/web/assets/css/owl.carousel.css',
        'resources/views/web/assets/css/owl.transitions.css',
        'resources/views/web/assets/css/animate.min.css',
        'resources/views/web/assets/css/rateit.css',
        'resources/views/web/assets/css/bootstrap-select.min.css',
        'resources/views/web/assets/css/font-awesome.css',
    ], 'resources/views/web/assets/css/webapp.css');

