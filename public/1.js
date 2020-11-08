(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/web/assets/js/components/HotboyComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/web/assets/js/components/HotboyComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      products: '',
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

      axios.get(url + '/api/hot-boy-product').then(function (response) {
        if (response.data !== '' && response.data.length > 0) {
          _this.products = response.data;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/web/assets/js/components/HotboyComponent.vue?vue&type=template&id=1f1c6fd3&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/web/assets/js/components/HotboyComponent.vue?vue&type=template&id=1f1c6fd3& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    ? _c("div", { staticClass: "sidebar-widget outer-bottom-small" }, [
        _c("h3", { staticClass: "section-title" }, [
          _vm._v("Dành cho Hot Boys")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sidebar-widget-body outer-top-xs" }, [
          _c(
            "div",
            {
              staticClass:
                "owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs",
              staticStyle: { opacity: "1", display: "block" }
            },
            [
              _c("div", { staticClass: "item" }, [
                _c(
                  "div",
                  { staticClass: "products special-product" },
                  _vm._l(_vm.products, function(product) {
                    return _c("div", { staticClass: "product" }, [
                      _c("div", { staticClass: "product-micro" }, [
                        _c("div", { staticClass: "row product-micro-row" }, [
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
                                            loading: ""
                                          },
                                          expression:
                                            "{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }"
                                        }
                                      ]
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          "data-src": _vm._f("format_image")(
                                            product.image
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
                          _c("div", { staticClass: "product-info" }, [
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
                                    "\n                          " +
                                      _vm._s(product.name) +
                                      "\n                        "
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
                  0
                )
              ])
            ]
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/views/web/assets/js/components/HotboyComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/views/web/assets/js/components/HotboyComponent.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HotboyComponent_vue_vue_type_template_id_1f1c6fd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HotboyComponent.vue?vue&type=template&id=1f1c6fd3& */ "./resources/views/web/assets/js/components/HotboyComponent.vue?vue&type=template&id=1f1c6fd3&");
/* harmony import */ var _HotboyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HotboyComponent.vue?vue&type=script&lang=js& */ "./resources/views/web/assets/js/components/HotboyComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HotboyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HotboyComponent_vue_vue_type_template_id_1f1c6fd3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HotboyComponent_vue_vue_type_template_id_1f1c6fd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/web/assets/js/components/HotboyComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/web/assets/js/components/HotboyComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/views/web/assets/js/components/HotboyComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HotboyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HotboyComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/web/assets/js/components/HotboyComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HotboyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/web/assets/js/components/HotboyComponent.vue?vue&type=template&id=1f1c6fd3&":
/*!*****************************************************************************************************!*\
  !*** ./resources/views/web/assets/js/components/HotboyComponent.vue?vue&type=template&id=1f1c6fd3& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HotboyComponent_vue_vue_type_template_id_1f1c6fd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HotboyComponent.vue?vue&type=template&id=1f1c6fd3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/web/assets/js/components/HotboyComponent.vue?vue&type=template&id=1f1c6fd3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HotboyComponent_vue_vue_type_template_id_1f1c6fd3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HotboyComponent_vue_vue_type_template_id_1f1c6fd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);