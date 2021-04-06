let mix = require('laravel-mix');

mix.styles([
  'public/mobile/css/vue-select.css',
  'public/mobile/css/framework7.bundle.min.css',
  'public/mobile/css/font-awesome.min.css',
  'public/mobile/css/style.css',
  'public/mobile/css/swiper.min.css',
], 'public/mobile/css/all.css');

mix.js([
  'resources/js/app.js',
  'resources/js/main.js',
], 'public/mobile/js/apps.js');
mix.js(['resources/js/detail.js'], 'public/mobile/js/detail.js');
mix.js(['resources/js/home.js'], 'public/mobile/js/home.js');

mix.minify('public/mobile/css/all.css');
mix.minify('public/mobile/js/apps.js');
mix.minify('public/mobile/js/detail.js');
mix.minify('public/mobile/js/home.js');


// web
mix.js(['resources/views/web/assets/js/app.js', ], 'public/web/js/webapp.js');
mix.js(['resources/views/web/assets/js/detail.js', ], 'public/web/js/detail.js');



mix.styles([
  'resources/views/web/assets/css/bootstrap.min.css',
  'resources/views/web/assets/css/main.css',
  'resources/views/web/assets/css/blue.min.css',
  'public/mobile/css/font-awesome.min.css',
  'resources/views/web/assets/css/style.css',
  'resources/views/web/assets/css/vue-select.css',
], 'public/web/css/webapp.css');

mix.minify('public/web/js/webapp.js');
mix.minify('public/web/js/detail.js');
mix.minify('public/web/css/webapp.css');

mix.copyDirectory('resources/views/web/assets/css/images', 'public/web/css/images');
mix.copyDirectory('resources/views/web/assets/images', 'public/web/images');
mix.copyDirectory('resources/views/web/assets/fonts', 'public/web/fonts');

mix.copyDirectory('resources/views/webv2/assets', 'public/webv2/assets');
mix.js(['resources/views/webv2/assets/js/app.js', 'resources/views/webv2/assets/js/libs/scripts.js', ], 'public/webv2/js/app.js');


mix.js(['resources/views/landing/js/app.js'], 'public/landing/app.js');
