(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/web/assets/js/components/BlogComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/web/assets/js/components/BlogComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      posts: [],
      url: '',
      rowperpage: 4
    };
  },
  created: function created() {
    this.url = url;
    this.getProducts();
  },
  filters: {
    subStr: function subStr(string) {
      return string.substring(0, 150) + '...';
    }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/web/assets/js/components/BlogComponent.vue?vue&type=template&id=446ca2b0&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/web/assets/js/components/BlogComponent.vue?vue&type=template&id=446ca2b0& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "section latest-blog outer-bottom-vs" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "blog-slider-container outer-top-xs" }, [
      _c(
        "div",
        {
          staticClass: "owl-carousel blog-slider custom-carousel",
          staticStyle: { opacity: "1", display: "block" }
        },
        _vm._l(_vm.posts, function(post) {
          return _c("div", { staticClass: "item" }, [
            _c("div", { staticClass: "blog-post" }, [
              _c("div", { staticClass: "blog-post-image" }, [
                _c("div", { staticClass: "image" }, [
                  _c("a", { attrs: { href: post.link, target: "_blank" } }, [
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
                        ]
                      },
                      [
                        _c("img", {
                          attrs: {
                            "data-src":
                              post._embedded["wp:featuredmedia"]["0"]
                                .source_url,
                            alt: ""
                          }
                        })
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "blog-post-info text-left" }, [
                _c("h3", { staticClass: "name" }, [
                  _c("a", { attrs: { href: post.link, target: "_blank" } }, [
                    _vm._v(
                      "\n                  " +
                        _vm._s(post.title.rendered) +
                        "\n                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("p", {
                  staticClass: "text",
                  domProps: {
                    innerHTML: _vm._s(
                      post.excerpt.rendered.substring(0, 150) + "..."
                    )
                  }
                })
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
    return _c("h3", { staticClass: "section-title" }, [
      _c(
        "a",
        { attrs: { href: "https://blog.shopmein.vn", target: "_blank" } },
        [_vm._v("\n        Blog\n      ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/views/web/assets/js/components/BlogComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/views/web/assets/js/components/BlogComponent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogComponent_vue_vue_type_template_id_446ca2b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogComponent.vue?vue&type=template&id=446ca2b0& */ "./resources/views/web/assets/js/components/BlogComponent.vue?vue&type=template&id=446ca2b0&");
/* harmony import */ var _BlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogComponent.vue?vue&type=script&lang=js& */ "./resources/views/web/assets/js/components/BlogComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogComponent_vue_vue_type_template_id_446ca2b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogComponent_vue_vue_type_template_id_446ca2b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/web/assets/js/components/BlogComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/web/assets/js/components/BlogComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/views/web/assets/js/components/BlogComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/web/assets/js/components/BlogComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/web/assets/js/components/BlogComponent.vue?vue&type=template&id=446ca2b0&":
/*!***************************************************************************************************!*\
  !*** ./resources/views/web/assets/js/components/BlogComponent.vue?vue&type=template&id=446ca2b0& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_template_id_446ca2b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogComponent.vue?vue&type=template&id=446ca2b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/web/assets/js/components/BlogComponent.vue?vue&type=template&id=446ca2b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_template_id_446ca2b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_template_id_446ca2b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);