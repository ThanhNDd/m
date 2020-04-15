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

