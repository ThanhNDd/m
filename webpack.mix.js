let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

// mix.js('src/app.js', 'dist/').sass('src/app.scss', 'dist/');
  mix.styles([
    'public/mobile/css/bootstrap.min.css',
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
    mix.js(['resources/views/web/assets/js/app.js',
    ], 'public/web/js/webapp.js');
    mix.js(['resources/views/web/assets/js/detail.js',
    ], 'public/web/js/detail.js');



    // mix.styles([
    //   'resources/views/web/assets/css/bootstrap.min.css',
    //   'resources/views/web/assets/css/main.css',
    //   'resources/views/web/assets/css/blue.css',
    //   'resources/views/web/assets/css/owl.carousel.css',
    //   'resources/views/web/assets/css/owl.transitions.css',
    //   'resources/views/web/assets/css/animate.min.css',
    //   'resources/views/web/assets/css/rateit.css',
    //   'resources/views/web/assets/css/bootstrap-select.min.css',
    //   'public/mobile/css/font-awesome.min.css',
    //   'resources/views/web/assets/css/style.css',
    //   'public/mobile/css/vue-select.css',
    // ], 'public/web/css/webapp.css');
    mix.styles([
      'resources/views/web/assets/css/bootstrap.min.css',
      'resources/views/web/assets/css/main.min.css',
      'resources/views/web/assets/css/blue.min.css',
      'public/mobile/css/font-awesome.min.css',
      'resources/views/web/assets/css/style.css',
      'resources/views/web/assets/css/vue-select.css',
    ], 'public/web/css/webapp.css');

  mix.minify('resources/views/web/assets/js/app.js');
  mix.minify('resources/views/web/assets/js/detail.js');
  mix.minify('public/web/js/webapp.js');
  mix.minify('public/web/js/detail.js');
  // mix.minify('resources/views/web/assets/css/main.css');
  // mix.minify('resources/views/web/assets/css/blue.css');
  // mix.minify('resources/views/web/assets/css/style.css');
  mix.minify('public/web/css/webapp.css');

  mix.copyDirectory('resources/views/web/assets/css/images', 'public/web/css/images');
  mix.copyDirectory('resources/views/web/assets/images', 'public/web/images');
  mix.copyDirectory('resources/views/web/assets/fonts', 'public/web/fonts');



// mix.autoload({ jQuery: 'jquery', $: 'jquery', jquery: 'jquery' });

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.override(function (webpackConfig) {}) <-- Will be triggered once the webpack config object has been fully generated by Mix.
// mix.dump(); <-- Dump the generated webpack config object to the console.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
