/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BestSellerComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BestSellerComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      products: '',
      isFinished: false,
      row: 0,
      // Record selction position
      rowperpage: 6,
      // Number of records fetch at a time
      buttonText: 'Xem thêm',
      url: ''
    };
  },
  created: function created() {
    this.url = url;
    this.getProducts();
  },
  methods: {
    getProducts: function getProducts() {
      var _this = this;

      axios.post(url + '/api/best-seller', {
        row: this.row,
        rowperpage: this.rowperpage
      }).then(function (response) {
        if (response.data !== '' && response.data.length > 0) {
          _this.row += _this.rowperpage;
          var len = _this.products.length;

          if (len > 0) {
            _this.buttonText = "Loading ...";
            setTimeout(function () {
              this.buttonText = "Xem thêm"; // Loop on data and push in posts

              for (var i = 0; i < response.data.length; i++) {
                this.products.push(response.data[i]);
              }
            }, 500);
          } else {
            _this.products = response.data;
          }
        } else {
          _this.buttonText = "Không có thêm sản phẩm.";
          _this.isFinished = true;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BlogComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BlogComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      posts: [],
      url: '',
      rowperpage: 2
    };
  },
  created: function created() {
    this.url = url;
    this.getProducts();
  },
  methods: {
    getProducts: function getProducts() {
      var _this = this;

      axios.post(url + '/api/blog', {
        rowperpage: this.rowperpage
      }).then(function (response) {
        _this.posts = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlashSaleProductComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FlashSaleProductComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      products: '',
      isFinished: false,
      row: 0,
      // Record selction position
      rowperpage: 10,
      // Number of records fetch at a time
      buttonText: 'Xem thêm',
      url: '' // swiper: null

    };
  },
  created: function created() {
    this.url = url;
    this.getProducts();
  },
  methods: {
    getProducts: function getProducts() {
      var _this = this;

      axios.post(url + '/api/flash-sales', {
        row: this.row,
        rowperpage: this.rowperpage
      }).then(function (response) {
        if (response.data !== '' && response.data.length > 0) {
          _this.row += _this.rowperpage;
          var len = _this.products.length;

          if (len > 0) {
            _this.buttonText = "Loading ...";
            var that = _this;
            setTimeout(function () {
              that.buttonText = 'Xem thêm';

              for (var i = 0; i < response.data.length; i++) {
                that.products.push(response.data[i]);
              }
            }, 500);
          } else {
            _this.products = response.data;
          }
        } else {
          _this.buttonText = "Không có thêm sản phẩm.";
          _this.isFinished = true;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LatestProductComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LatestProductComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      products: '',
      isFinished: false,
      row: 0,
      // Record selction position
      rowperpage: 6,
      // Number of records fetch at a time
      buttonText: 'Xem thêm',
      url: '',
      submit: false
    };
  },
  created: function created() {
    this.url = url;
    this.getProducts();
  },
  methods: {
    getProducts: function getProducts() {
      var _this = this;

      this.submit = true;
      axios.post(url + '/api/products', {
        row: this.row,
        rowperpage: this.rowperpage
      }).then(function (response) {
        if (response.data !== '' && response.data.length > 0) {
          _this.row += _this.rowperpage;
          var len = _this.products.length;

          if (len > 0) {
            // this.buttonText = "Loading ...";
            var that = _this;
            setTimeout(function () {
              that.buttonText = 'Xem thêm';

              for (var i = 0; i < response.data.length; i++) {
                that.products.push(response.data[i]);
              }

              that.submit = false;
            }, 500);
          } else {
            _this.products = response.data;
            _this.submit = false;
          }
        } else {
          _this.buttonText = "Không có thêm sản phẩm.";
          _this.isFinished = true;
          _this.submit = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ViewedProductComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ViewedProductComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      products: '',
      url: ''
    };
  },
  created: function created() {
    this.url = url;
    this.getProducts(10);
  },
  methods: {
    getProducts: function getProducts(rowperpage) {
      var _this = this;

      axios.post(url + '/api/viewed-product', {
        row: 0,
        rowperpage: rowperpage
      }).then(function (response) {
        // console.log(response.data);
        _this.products = response.data; // if (response.data !== '' && response.data.length > 0) {
        //     let len = this.products.length;
        //     if (len > 0) {
        //         let that = this;
        //         setTimeout(function () {
        //             for (let i = 0; i < response.data.length; i++) {
        //                 that.products.push(response.data[i]);
        //             }
        //         }, 500);
        //     } else {
        //         this.products = response.data;
        //     }
        // }
      });
    }
  },
  mounted: function mounted() {// this.swiper = new window.Swiper('.swiper-container', {
    //     cssMode: true,
    //     mousewheel: true,
    //     keyboard: true,
    // })
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BestSellerComponent.vue?vue&type=template&id=78dc7a9f&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BestSellerComponent.vue?vue&type=template&id=78dc7a9f& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.products.length > 0
    ? _c("div", { staticClass: "latest-product segments no-pd-b" }, [
        _c("div", { staticClass: "container" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.products, function(product) {
              return _c("div", { staticClass: "col-50" }, [
                _c("div", { staticClass: "content content-shadow-product" }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: _vm._f("url_product")(
                          _vm._f("change_to_slug")(product.name),
                          product.id
                        )
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "lazy-container",
                              rawName: "v-lazy-container",
                              value: {
                                selector: "img",
                                error: _vm.url + "/public/web/images/404.jpg",
                                loading: ""
                              },
                              expression:
                                "{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }"
                            }
                          ],
                          staticClass: "image"
                        },
                        [
                          _c("img", {
                            attrs: {
                              "data-src": _vm._f("format_image")(
                                product.image,
                                "200x200"
                              ),
                              alt: product.name
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "text" }, [
                        _c(
                          "p",
                          { staticClass: "title-product title-product-center" },
                          [_vm._v(_vm._s(product.name))]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "float-left col-md-12 col-lg-12 no-padding"
                          },
                          [
                            _c("i", {
                              class:
                                product.rating == 0
                                  ? "far fa-star"
                                  : product.rating >= 1
                                  ? "fas fa-star"
                                  : "fas fa-star-half-alt",
                              staticStyle: { color: "#ffc107" }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              class:
                                product.rating > 1
                                  ? product.rating >= 2
                                    ? "fas fa-star"
                                    : "fas fa-star-half-alt"
                                  : "far fa-star",
                              staticStyle: { color: "#ffc107" }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              class:
                                product.rating > 2
                                  ? product.rating >= 3
                                    ? "fas fa-star"
                                    : "fas fa-star-half-alt"
                                  : "far fa-star",
                              staticStyle: { color: "#ffc107" }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              class:
                                product.rating > 3
                                  ? product.rating >= 4
                                    ? "fas fa-star"
                                    : "fas fa-star-half-alt"
                                  : "far fa-star",
                              staticStyle: { color: "#ffc107" }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              class:
                                product.rating > 4
                                  ? product.rating >= 5
                                    ? "fas fa-star"
                                    : "fas fa-star-half-alt"
                                  : "far fa-star",
                              staticStyle: { color: "#ffc107" }
                            }),
                            _vm._v(" "),
                            product.reviews > 0
                              ? _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      "margin-left": "5px",
                                      color: "gray"
                                    }
                                  },
                                  [_vm._v("(" + _vm._s(product.reviews) + ")")]
                                )
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "price",
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.$options.filters.formatPrice(product.retail)
                            )
                          }
                        })
                      ])
                    ]
                  )
                ])
              ])
            }),
            0
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h3", [_vm._v("Bán chạy nhất")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BlogComponent.vue?vue&type=template&id=66ef69a0&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BlogComponent.vue?vue&type=template&id=66ef69a0& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "blog segments-bottom segments no-pd-b" }, [
    _c("div", { staticClass: "container" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.posts, function(post) {
          return _c("div", { staticClass: "col-50" }, [
            _c("div", { staticClass: "content content-shadow-product" }, [
              _c("div", { staticClass: "image" }, [
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "lazy-container",
                        rawName: "v-lazy-container",
                        value: {
                          selector: "img",
                          error: _vm.url + "/public/web/images/404.jpg",
                          loading: ""
                        },
                        expression:
                          "{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }"
                      }
                    ],
                    attrs: { href: post.link, target: "_blank" }
                  },
                  [
                    _c("img", {
                      attrs: {
                        "data-src":
                          post._embedded["wp:featuredmedia"]["0"].source_url,
                        alt: ""
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text" }, [
                _c("a", { attrs: { href: post.link, target: "_blank" } }, [
                  _vm._v(
                    "\n              " +
                      _vm._s(post.title.rendered) +
                      "\n            "
                  )
                ])
              ])
            ])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h3", [
        _vm._v("Blog\n        "),
        _c(
          "a",
          {
            staticClass: "see-all-link",
            attrs: { href: "https://blog.shopmein.vn", target: "_blank" }
          },
          [_vm._v("Xem thêm »")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlashSaleProductComponent.vue?vue&type=template&id=4422962c&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FlashSaleProductComponent.vue?vue&type=template&id=4422962c& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.products.length > 0
    ? _c("div", { staticClass: "flash-sale segments no-pd-b" }, [
        _c(
          "div",
          {
            staticClass: "container",
            staticStyle: { padding: "0 !important" }
          },
          [
            _c("div", { staticClass: "section-title" }, [
              _c("h3", [
                _vm._v("Khuyến mãi\n        "),
                _c(
                  "a",
                  {
                    staticClass: "see-all-link",
                    attrs: { href: _vm.url + "/khuyen-mai.html" }
                  },
                  [_vm._v("Xem thêm »")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "swiper-container swiper-flash-sale" }, [
              _c(
                "div",
                { staticClass: "swiper-wrapper" },
                _vm._l(_vm.products, function(product) {
                  return _c(
                    "div",
                    {
                      staticClass: "swiper-slide",
                      staticStyle: { "margin-right": "15px" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "content content-shadow-product" },
                        [
                          _c(
                            "a",
                            {
                              attrs: {
                                href: _vm._f("url_product")(
                                  _vm._f("change_to_slug")(product.name),
                                  product.id
                                )
                              }
                            },
                            [
                              _c("div", { staticClass: "image" }, [
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "lazy-container",
                                        rawName: "v-lazy-container",
                                        value: {
                                          selector: "img",
                                          error:
                                            _vm.url +
                                            "/public/web/images/404.jpg",
                                          loading:
                                            _vm.url +
                                            "/public/web/images/loading.svg"
                                        },
                                        expression:
                                          "{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: url + '/public/web/images/loading.svg' }"
                                      }
                                    ]
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        "data-src": _vm._f("format_image")(
                                          !product.image ||
                                            product.image === "[]"
                                            ? product.variant_image
                                            : product.image,
                                          "150x150"
                                        ),
                                        alt: product.name
                                      }
                                    })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "text" }, [
                                _c("p", {
                                  staticClass:
                                    "title-product title-product-center",
                                  domProps: {
                                    textContent: _vm._s(product.name)
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "float-left col-md-12 col-lg-12 no-padding"
                                  },
                                  [
                                    _c("i", {
                                      class:
                                        product.rating == 0
                                          ? "far fa-star"
                                          : product.rating >= 1
                                          ? "fas fa-star"
                                          : "fas fa-star-half-alt",
                                      staticStyle: { color: "#ffc107" }
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      class:
                                        product.rating > 1
                                          ? product.rating >= 2
                                            ? "fas fa-star"
                                            : "fas fa-star-half-alt"
                                          : "far fa-star",
                                      staticStyle: { color: "#ffc107" }
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      class:
                                        product.rating > 2
                                          ? product.rating >= 3
                                            ? "fas fa-star"
                                            : "fas fa-star-half-alt"
                                          : "far fa-star",
                                      staticStyle: { color: "#ffc107" }
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      class:
                                        product.rating > 3
                                          ? product.rating >= 4
                                            ? "fas fa-star"
                                            : "fas fa-star-half-alt"
                                          : "far fa-star",
                                      staticStyle: { color: "#ffc107" }
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      class:
                                        product.rating > 4
                                          ? product.rating >= 5
                                            ? "fas fa-star"
                                            : "fas fa-star-half-alt"
                                          : "far fa-star",
                                      staticStyle: { color: "#ffc107" }
                                    }),
                                    _vm._v(" "),
                                    product.reviews > 0
                                      ? _c(
                                          "span",
                                          {
                                            staticStyle: {
                                              "margin-left": "5px",
                                              color: "gray"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "(" +
                                                _vm._s(product.reviews) +
                                                ")"
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c("p", {
                                  staticClass: "price sale-price",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$options.filters.formatPrice(
                                        product.retail
                                      )
                                    )
                                  }
                                }),
                                _vm._v(" "),
                                _c("p", {
                                  staticClass: "price",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$options.filters.formatSalePrice(
                                        product.discount,
                                        product.retail
                                      )
                                    )
                                  }
                                })
                              ])
                            ]
                          )
                        ]
                      )
                    ]
                  )
                }),
                0
              )
            ])
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LatestProductComponent.vue?vue&type=template&id=2bc05820&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LatestProductComponent.vue?vue&type=template&id=2bc05820& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.products.length > 0
    ? _c("div", { staticClass: "popular-product product segments no-pd-b" }, [
        _c("div", { staticClass: "container" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.products, function(product) {
              return _c("div", { staticClass: "col-50" }, [
                _c("div", { staticClass: "content content-shadow-product" }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: _vm._f("url_product")(
                          _vm._f("change_to_slug")(product.name),
                          product.id
                        )
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "lazy-container",
                              rawName: "v-lazy-container",
                              value: {
                                selector: "img",
                                error: _vm.url + "/public/web/images/404.jpg",
                                loading: ""
                              },
                              expression:
                                "{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }"
                            }
                          ],
                          staticClass: "image"
                        },
                        [
                          _c("img", {
                            attrs: {
                              "data-src": _vm._f("format_image")(
                                !product.image || product.image === "[]"
                                  ? product.variant_image
                                  : product.image,
                                "200x200"
                              ),
                              alt: product.name
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "text" }, [
                        _c("p", {
                          staticClass: "title-product title-product-center",
                          domProps: { textContent: _vm._s(product.name) }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "float-left col-md-12 col-lg-12 no-padding"
                          },
                          [
                            _c("i", {
                              class:
                                product.rating == 0
                                  ? "far fa-star"
                                  : product.rating >= 1
                                  ? "fas fa-star"
                                  : "fas fa-star-half-alt",
                              staticStyle: { color: "#ffc107" }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              class:
                                product.rating > 1
                                  ? product.rating >= 2
                                    ? "fas fa-star"
                                    : "fas fa-star-half-alt"
                                  : "far fa-star",
                              staticStyle: { color: "#ffc107" }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              class:
                                product.rating > 2
                                  ? product.rating >= 3
                                    ? "fas fa-star"
                                    : "fas fa-star-half-alt"
                                  : "far fa-star",
                              staticStyle: { color: "#ffc107" }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              class:
                                product.rating > 3
                                  ? product.rating >= 4
                                    ? "fas fa-star"
                                    : "fas fa-star-half-alt"
                                  : "far fa-star",
                              staticStyle: { color: "#ffc107" }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              class:
                                product.rating > 4
                                  ? product.rating >= 5
                                    ? "fas fa-star"
                                    : "fas fa-star-half-alt"
                                  : "far fa-star",
                              staticStyle: { color: "#ffc107" }
                            }),
                            _vm._v(" "),
                            product.reviews > 0
                              ? _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      "margin-left": "5px",
                                      color: "gray"
                                    }
                                  },
                                  [_vm._v("(" + _vm._s(product.reviews) + ")")]
                                )
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "price",
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.$options.filters.formatPrice(product.retail)
                            )
                          }
                        })
                      ])
                    ]
                  )
                ])
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row justify-content-center" }, [
            _c(
              "a",
              {
                staticClass: "view-more",
                class: [_vm.isFinished ? "finish" : "load-more"],
                attrs: { href: "javascript:void(0);" },
                on: {
                  click: function($event) {
                    return _vm.getProducts()
                  }
                }
              },
              [
                _vm.submit
                  ? _c("span", {
                      staticClass: "spinner-border spinner-border-sm"
                    })
                  : _vm._e(),
                _vm._v(" Xem thêm"),
                _c("i", { staticClass: "fas fa-caret-down" })
              ]
            )
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h3", [_vm._v("Hàng mới")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ViewedProductComponent.vue?vue&type=template&id=a3744bc6&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ViewedProductComponent.vue?vue&type=template&id=a3744bc6& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.products.length > 0
    ? _c(
        "div",
        { staticClass: "container", staticStyle: { padding: "0 !important" } },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "swiper-container" }, [
            _c(
              "div",
              { staticClass: "swiper-wrapper" },
              _vm._l(_vm.products, function(product) {
                return _c(
                  "div",
                  {
                    staticClass: "swiper-slide",
                    staticStyle: { "margin-right": "15px" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "content content-shadow-product" },
                      [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm._f("url_product")(
                                _vm._f("change_to_slug")(product.name),
                                product.id
                              )
                            }
                          },
                          [
                            _c("div", { staticClass: "image" }, [
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "lazy-container",
                                      rawName: "v-lazy-container",
                                      value: {
                                        selector: "img",
                                        error:
                                          _vm.url +
                                          "/public/web/images/404.jpg",
                                        loading:
                                          _vm.url +
                                          "/public/web/images/loading.svg"
                                      },
                                      expression:
                                        "{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: url + '/public/web/images/loading.svg' }"
                                    }
                                  ]
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      "data-src": _vm._f("format_image")(
                                        !product.image || product.image === "[]"
                                          ? product.variant_image
                                          : product.image,
                                        "150x150"
                                      ),
                                      alt: product.name
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "text" }, [
                              _c("p", {
                                staticClass:
                                  "title-product title-product-center",
                                domProps: { textContent: _vm._s(product.name) }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "float-left col-md-12 col-lg-12 no-padding"
                                },
                                [
                                  _c("i", {
                                    class:
                                      product.rating == 0
                                        ? "far fa-star"
                                        : product.rating >= 1
                                        ? "fas fa-star"
                                        : "fas fa-star-half-alt",
                                    staticStyle: { color: "#ffc107" }
                                  }),
                                  _vm._v(" "),
                                  _c("i", {
                                    class:
                                      product.rating > 1
                                        ? product.rating >= 2
                                          ? "fas fa-star"
                                          : "fas fa-star-half-alt"
                                        : "far fa-star",
                                    staticStyle: { color: "#ffc107" }
                                  }),
                                  _vm._v(" "),
                                  _c("i", {
                                    class:
                                      product.rating > 2
                                        ? product.rating >= 3
                                          ? "fas fa-star"
                                          : "fas fa-star-half-alt"
                                        : "far fa-star",
                                    staticStyle: { color: "#ffc107" }
                                  }),
                                  _vm._v(" "),
                                  _c("i", {
                                    class:
                                      product.rating > 3
                                        ? product.rating >= 4
                                          ? "fas fa-star"
                                          : "fas fa-star-half-alt"
                                        : "far fa-star",
                                    staticStyle: { color: "#ffc107" }
                                  }),
                                  _vm._v(" "),
                                  _c("i", {
                                    class:
                                      product.rating > 4
                                        ? product.rating >= 5
                                          ? "fas fa-star"
                                          : "fas fa-star-half-alt"
                                        : "far fa-star",
                                    staticStyle: { color: "#ffc107" }
                                  }),
                                  _vm._v(" "),
                                  product.reviews > 0
                                    ? _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "margin-left": "5px",
                                            color: "gray"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "(" + _vm._s(product.reviews) + ")"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", {
                                staticClass: "price",
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.$options.filters.formatPrice(
                                      product.retail
                                    )
                                  )
                                }
                              })
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                )
              }),
              0
            )
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h3", [_vm._v("Sản phẩm bạn đã xem")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/BestSellerComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/BestSellerComponent.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BestSellerComponent_vue_vue_type_template_id_78dc7a9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BestSellerComponent.vue?vue&type=template&id=78dc7a9f& */ "./resources/js/components/BestSellerComponent.vue?vue&type=template&id=78dc7a9f&");
/* harmony import */ var _BestSellerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BestSellerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/BestSellerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BestSellerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BestSellerComponent_vue_vue_type_template_id_78dc7a9f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BestSellerComponent_vue_vue_type_template_id_78dc7a9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BestSellerComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/BestSellerComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/BestSellerComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BestSellerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BestSellerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BestSellerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BestSellerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BestSellerComponent.vue?vue&type=template&id=78dc7a9f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/BestSellerComponent.vue?vue&type=template&id=78dc7a9f& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BestSellerComponent_vue_vue_type_template_id_78dc7a9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BestSellerComponent.vue?vue&type=template&id=78dc7a9f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BestSellerComponent.vue?vue&type=template&id=78dc7a9f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BestSellerComponent_vue_vue_type_template_id_78dc7a9f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BestSellerComponent_vue_vue_type_template_id_78dc7a9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/BlogComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/BlogComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogComponent_vue_vue_type_template_id_66ef69a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogComponent.vue?vue&type=template&id=66ef69a0& */ "./resources/js/components/BlogComponent.vue?vue&type=template&id=66ef69a0&");
/* harmony import */ var _BlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/BlogComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogComponent_vue_vue_type_template_id_66ef69a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogComponent_vue_vue_type_template_id_66ef69a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BlogComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/BlogComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/BlogComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BlogComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BlogComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BlogComponent.vue?vue&type=template&id=66ef69a0&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/BlogComponent.vue?vue&type=template&id=66ef69a0& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_template_id_66ef69a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BlogComponent.vue?vue&type=template&id=66ef69a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BlogComponent.vue?vue&type=template&id=66ef69a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_template_id_66ef69a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_template_id_66ef69a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FlashSaleProductComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/FlashSaleProductComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlashSaleProductComponent_vue_vue_type_template_id_4422962c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashSaleProductComponent.vue?vue&type=template&id=4422962c& */ "./resources/js/components/FlashSaleProductComponent.vue?vue&type=template&id=4422962c&");
/* harmony import */ var _FlashSaleProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlashSaleProductComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/FlashSaleProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlashSaleProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlashSaleProductComponent_vue_vue_type_template_id_4422962c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlashSaleProductComponent_vue_vue_type_template_id_4422962c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FlashSaleProductComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FlashSaleProductComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/FlashSaleProductComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FlashSaleProductComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlashSaleProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FlashSaleProductComponent.vue?vue&type=template&id=4422962c&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/FlashSaleProductComponent.vue?vue&type=template&id=4422962c& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleProductComponent_vue_vue_type_template_id_4422962c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FlashSaleProductComponent.vue?vue&type=template&id=4422962c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlashSaleProductComponent.vue?vue&type=template&id=4422962c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleProductComponent_vue_vue_type_template_id_4422962c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleProductComponent_vue_vue_type_template_id_4422962c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/LatestProductComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/LatestProductComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LatestProductComponent_vue_vue_type_template_id_2bc05820___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LatestProductComponent.vue?vue&type=template&id=2bc05820& */ "./resources/js/components/LatestProductComponent.vue?vue&type=template&id=2bc05820&");
/* harmony import */ var _LatestProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatestProductComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/LatestProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LatestProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LatestProductComponent_vue_vue_type_template_id_2bc05820___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LatestProductComponent_vue_vue_type_template_id_2bc05820___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LatestProductComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LatestProductComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/LatestProductComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LatestProductComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LatestProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LatestProductComponent.vue?vue&type=template&id=2bc05820&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/LatestProductComponent.vue?vue&type=template&id=2bc05820& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestProductComponent_vue_vue_type_template_id_2bc05820___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LatestProductComponent.vue?vue&type=template&id=2bc05820& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LatestProductComponent.vue?vue&type=template&id=2bc05820&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestProductComponent_vue_vue_type_template_id_2bc05820___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestProductComponent_vue_vue_type_template_id_2bc05820___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ViewedProductComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/ViewedProductComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewedProductComponent_vue_vue_type_template_id_a3744bc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewedProductComponent.vue?vue&type=template&id=a3744bc6& */ "./resources/js/components/ViewedProductComponent.vue?vue&type=template&id=a3744bc6&");
/* harmony import */ var _ViewedProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewedProductComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ViewedProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewedProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewedProductComponent_vue_vue_type_template_id_a3744bc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewedProductComponent_vue_vue_type_template_id_a3744bc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ViewedProductComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ViewedProductComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ViewedProductComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewedProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewedProductComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ViewedProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewedProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ViewedProductComponent.vue?vue&type=template&id=a3744bc6&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ViewedProductComponent.vue?vue&type=template&id=a3744bc6& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewedProductComponent_vue_vue_type_template_id_a3744bc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewedProductComponent.vue?vue&type=template&id=a3744bc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ViewedProductComponent.vue?vue&type=template&id=a3744bc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewedProductComponent_vue_vue_type_template_id_a3744bc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewedProductComponent_vue_vue_type_template_id_a3744bc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/home.js":
/*!******************************!*\
  !*** ./resources/js/home.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component('best-seller-component', __webpack_require__(/*! ./components/BestSellerComponent.vue */ "./resources/js/components/BestSellerComponent.vue")["default"]);
Vue.component('flash-sale-component', __webpack_require__(/*! ./components/FlashSaleProductComponent.vue */ "./resources/js/components/FlashSaleProductComponent.vue")["default"]);
Vue.component('latest-product-component', __webpack_require__(/*! ./components/LatestProductComponent.vue */ "./resources/js/components/LatestProductComponent.vue")["default"]);
Vue.component('viewed-product-component', __webpack_require__(/*! ./components/ViewedProductComponent.vue */ "./resources/js/components/ViewedProductComponent.vue")["default"]);
Vue.component('blog-component', __webpack_require__(/*! ./components/BlogComponent.vue */ "./resources/js/components/BlogComponent.vue")["default"]);
var home = new Vue({
  el: '#home',
  data: function data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ 2:
/*!************************************!*\
  !*** multi ./resources/js/home.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\m\resources\js\home.js */"./resources/js/home.js");


/***/ })

/******/ });