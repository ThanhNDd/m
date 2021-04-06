(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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
      buttonText: 'Xem thêm',
      url: '',
      submit: false
    };
  },
  created: function created() {
    this.url = url;
    this.getProducts(5);
  },
  methods: {
    getProducts: function getProducts(rowperpage) {
      var _this = this;

      this.submit = true;
      axios.post(url + '/api/viewed-product', {
        row: this.row,
        rowperpage: rowperpage
      }).then(function (response) {
        if (response.data !== '' && response.data.length > 0) {
          _this.row += rowperpage;
          var len = _this.products.length;

          if (len > 0) {
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
    },
    scrollToTop: function scrollToTop() {
      var top = $('#load_more_recently').offset().top;
      top = top - 100;
      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue?vue&type=template&id=42122ba6&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue?vue&type=template&id=42122ba6& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "section featured-product" }, [
    _vm.products.length > 0
      ? _c(
          "div",
          {
            staticClass: "scroll-tabs outer-top-vs",
            attrs: { id: "product-tabs-slider" }
          },
          [_vm._m(0)]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "tab-content outer-top-xs" }, [
      _c(
        "div",
        {
          ref: "product_carousel",
          staticClass: "tab-pane in active",
          attrs: { id: "all" }
        },
        [
          _c("div", { staticClass: "product-slider" }, [
            _c(
              "div",
              {
                staticClass:
                  "owl-carousel home-owl-carousel custom-carousel owl-theme",
                staticStyle: {
                  opacity: "1",
                  display: "block",
                  "padding-left": "0px"
                }
              },
              [
                _vm._l(_vm.products, function(product) {
                  return _c("div", { staticClass: "item item-carousel" }, [
                    _c("div", { staticClass: "products" }, [
                      _c("div", { staticClass: "product" }, [
                        _c("div", { staticClass: "product-image" }, [
                          _c("div", { staticClass: "image" }, [
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
                                            : product.image
                                        ),
                                        alt: product.name
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "product-info text-left" }, [
                          _c("h3", { staticClass: "name" }, [
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
                                _vm._v(
                                  "\n                      " +
                                    _vm._s(product.name) +
                                    "\n                    "
                                )
                              ]
                            )
                          ]),
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
                          _c(
                            "div",
                            {
                              staticClass:
                                "product-price float-left col-md-12 col-lg-12 no-padding"
                            },
                            [
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
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                }),
                _vm._v(" "),
                _vm.products.length === 5
                  ? _c(
                      "div",
                      {
                        staticClass: "row justify-content-center",
                        attrs: { id: "load_more_recently" }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "view-more",
                            class: [_vm.isFinished ? "finish" : "load-more"],
                            attrs: { href: "javascript:void(0);" },
                            on: {
                              click: function($event) {
                                return _vm.getProducts(10)
                              }
                            }
                          },
                          [
                            _vm.submit
                              ? _c("i", {
                                  staticClass: "fa fa-spinner fa-spin",
                                  staticStyle: { "font-size": "20px" }
                                })
                              : _vm._e(),
                            _vm._v(" Xem thêm  "),
                            _c("i", { staticClass: "fa fa-caret-down" })
                          ]
                        )
                      ]
                    )
                  : _vm._e()
              ],
              2
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "more-info-tab clearfix " }, [
      _c("h3", { staticClass: "new-product-title pull-left" }, [
        _vm._v("Sản phẩm đã xem")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecentlyProductComponent_vue_vue_type_template_id_42122ba6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecentlyProductComponent.vue?vue&type=template&id=42122ba6& */ "./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue?vue&type=template&id=42122ba6&");
/* harmony import */ var _RecentlyProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecentlyProductComponent.vue?vue&type=script&lang=js& */ "./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecentlyProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecentlyProductComponent_vue_vue_type_template_id_42122ba6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecentlyProductComponent_vue_vue_type_template_id_42122ba6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/webv2/assets/js/components/RecentlyProductComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RecentlyProductComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue?vue&type=template&id=42122ba6&":
/*!****************************************************************************************************************!*\
  !*** ./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue?vue&type=template&id=42122ba6& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyProductComponent_vue_vue_type_template_id_42122ba6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RecentlyProductComponent.vue?vue&type=template&id=42122ba6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/webv2/assets/js/components/RecentlyProductComponent.vue?vue&type=template&id=42122ba6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyProductComponent_vue_vue_type_template_id_42122ba6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyProductComponent_vue_vue_type_template_id_42122ba6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);