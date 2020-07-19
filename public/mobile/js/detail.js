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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AttributeComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AttributeComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      attributes: [],
      color: "",
      height: '130px',
      position: 'absolute',
      icon: 'fa-chevron-circle-down',
      isMore: true,
      text: 'Xem thêm',
      weight: '',
      qty: 0
    };
  },
  props: ['description'],
  created: function created() {
    var _this = this;

    var id = document.querySelector('#product_id').getAttribute('value');
    axios.get(url + '/api/attributes/' + id).then(function (response) {
      _this.attributes = response.data;

      if (_this.attributes.size.length > 0) {
        var first = _this.attributes.size[0].size;
        var last = _this.attributes.size[_this.attributes.size.length - 1].size;
        select_weight.forEach(function (item) {
          if (first == item.id) {
            first = item.text.split('-')[0];
          }

          if (last == item.id) {
            last = item.text.split('-')[1];
          }
        });
        _this.weight = first + " - " + last;
      }
    });
  },
  filters: {
    format_material: function format_material(value) {
      var data = "";

      if (value != null) {
        select_material.forEach(function (item) {
          if (value == item.id) {
            data = item.text;
            return false;
          }
        });
      }

      return data;
    },
    format_origin: function format_origin(value) {
      var data = "";

      if (value != null) {
        select_origin.forEach(function (item) {
          if (value == item.id) {
            data = item.text;
            return false;
          }
        });
      }

      return data;
    }
  },
  methods: {
    viewMore: function viewMore() {
      if (this.isMore) {
        this.isMore = false;
        this.height = 'auto';
        this.position = 'inherit';
        this.icon = 'fa-chevron-circle-up';
        this.text = 'Thu gọn';
      } else {
        this.isMore = true;
        this.height = '130px';
        this.position = 'absolute';
        this.icon = 'fa-chevron-circle-down';
        this.text = 'Xem thêm';
      }
    },
    selectSize: function selectSize(value) {
      var w = this.weight;
      select_weight.forEach(function (item) {
        if (value == item.id) {
          w = item.text;
          return false;
        }
      });
      this.weight = w;
    }
  }
});
var select_origin = [{
  id: '-1',
  text: ''
}, {
  id: '1',
  text: 'Việt Nam'
}, {
  id: '2',
  text: 'Trung Quốc'
}];
var select_material = [{
  id: '-1',
  text: ''
}, {
  id: '1',
  text: 'Cotton'
}, {
  id: '2',
  text: 'Kaki'
}, {
  id: '3',
  text: 'Jeans'
}, {
  id: '4',
  text: 'Thô'
}, {
  id: '5',
  text: 'Voan'
}, {
  id: '6',
  text: 'Lanh'
}, {
  id: '7',
  text: 'đũi'
}, {
  id: '8',
  text: 'Ren'
}, {
  id: '9',
  text: 'PE'
}, {
  id: '10',
  text: 'nylon'
}, {
  id: '11',
  text: 'Nỉ'
}, {
  id: '12',
  text: 'Len'
}];
var select_weight = [{
  id: '60',
  text: '3kg - 6kg'
}, {
  id: '73',
  text: '6kg - 8kg'
}, {
  id: '80',
  text: '8kg - 10kg'
}, {
  id: '90',
  text: '11kg - 13kg'
}, {
  id: '100',
  text: '14kg - 16kg'
}, {
  id: '110',
  text: '17kg - 18kg'
}, {
  id: '120',
  text: '19kg - 20kg'
}, {
  id: '130',
  text: '21kg - 23kg'
}, {
  id: '140',
  text: '24kg - 27kg'
}, {
  id: '150',
  text: '28kg - 32kg'
}, {
  id: '160',
  text: '33kg - 40kg'
}];

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RatingComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RatingComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ratingAvg: '',
      totalReviews: 0
    };
  },
  props: {
    product_id: Number,
    product_name: String
  },
  created: function created() {
    this.getRatingAvg();
    this.getTotalReviews();
  },
  methods: {
    getRatingAvg: function getRatingAvg() {
      var _this = this;

      axios.get(url + '/api/rating-avg/' + this.product_id).then(function (response) {
        if (response.data !== '' && response.data > 0) {
          _this.ratingAvg = response.data;
        }
      });
    },
    getTotalReviews: function getTotalReviews() {
      var _this2 = this;

      axios.get(url + '/api/total-reviews/' + this.product_id).then(function (response) {
        if (response.data !== '' && response.data > 0) {
          _this2.totalReviews = response.data;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RecommendComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RecommendComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
      products: [],
      url: '',
      swiper: null,
      isFinished: false,
      row: 0
    };
  },
  created: function created() {
    this.url = url;
    this.getProducts(10);
  },
  methods: {
    getProducts: function getProducts(rowperpage) {
      var _this = this;

      var cat_id = document.querySelector('#cat_id').getAttribute('value');
      var id = document.querySelector('#product_id').getAttribute('value');
      var type = document.querySelector('#type_id').getAttribute('value');
      this.submit = true;
      axios.post(url + '/api/recommend', {
        product_id: id,
        cat_id: cat_id,
        type: type,
        row: this.row,
        rowperpage: rowperpage
      }).then(function (response) {
        console.log(response.data);

        if (response.data !== '' && response.data.length > 0) {
          _this.row += rowperpage;
          var len = _this.products.length;

          if (len > 0) {
            _this.buttonText = "Loading ...";
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
  },
  mounted: function mounted() {
    this.swiper = new window.Swiper('.swiper-container', {
      cssMode: true,
      mousewheel: true,
      keyboard: true
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RelateProductComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RelateProductComponent.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      products: '',
      isFinished: false,
      row: 0,
      rowperpage: 10,
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

      var cat_id = document.querySelector('#cat_id').getAttribute('value');
      var id = document.querySelector('#product_id').getAttribute('value');
      var type = document.querySelector('#type_id').getAttribute('value');
      this.submit = true;
      axios.post(url + '/api/relate', {
        product_id: id,
        cat_id: cat_id,
        type: type,
        row: this.row,
        rowperpage: this.rowperpage
      }).then(function (response) {
        console.log(response.data);

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
  },
  mounted: function mounted() {
    this.swiper = new window.Swiper('.swiper-container', {
      cssMode: true,
      mousewheel: true,
      keyboard: true
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReviewsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReviewsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      reviews: '',
      ratingAvg: 0,
      ratingDetail: '',
      percent_5_star: 0,
      number_5_star: 0,
      percent_4_star: 0,
      number_4_star: 0,
      percent_3_star: 0,
      number_3_star: 0,
      percent_2_star: 0,
      number_2_star: 0,
      percent_1_star: 0,
      number_1_star: 0,
      url: '',
      total_rating: 0,
      product_name: '',
      isFinished: false,
      row: 0,
      buttonText: 'Xem thêm',
      submit: false,
      hidden: false
    };
  },
  props: ['product_id'],
  created: function created() {
    this.url = url;
    this.getAllReviews(3);
    this.getRatingAvg();
    this.getRatingNumberDetail();
  },
  methods: {
    getRatingNumberDetail: function getRatingNumberDetail() {
      var _this = this;

      axios.get(url + '/api/rating-number-detail/' + this.product_id).then(function (response) {
        _this.ratingDetail = response.data;

        for (var i = 0; i < _this.ratingDetail.length; i++) {
          var obj = _this.ratingDetail[i];
          var objRating = Number(obj.rating);

          if (objRating == 1) {
            _this.total_rating += Number(obj.number);
            _this.number_1_star = Number(obj.number);
            _this.percent_1_star = Number(obj.percent);
          } else if (objRating == 2) {
            _this.total_rating += Number(obj.number);
            _this.number_2_star = Number(obj.number);
            _this.percent_2_star = Number(obj.percent);
          } else if (objRating == 3) {
            _this.total_rating += Number(obj.number);
            _this.number_3_star = Number(obj.number);
            _this.percent_3_star = Number(obj.percent);
          } else if (objRating == 4) {
            _this.total_rating += Number(obj.number);
            _this.number_4_star = Number(obj.number);
            _this.percent_4_star = Number(obj.percent);
          } else if (objRating == 5) {
            _this.total_rating += Number(obj.number);
            _this.number_5_star = Number(obj.number);
            _this.percent_5_star = Number(obj.percent);
          }
        }
      });
    },
    getRatingAvg: function getRatingAvg() {
      var _this2 = this;

      axios.get(url + '/api/rating-avg/' + this.product_id).then(function (response) {
        if (response.data !== '' && response.data > 0) {
          _this2.ratingAvg = response.data;
        }
      });
    },
    getAllReviews: function getAllReviews(rowperpage) {
      var _this3 = this;

      axios.post(url + '/api/reviews', {
        product_id: this.product_id,
        row: this.row,
        rowperpage: rowperpage
      }).then(function (response) {
        console.log(response.data);

        if (response.data !== '' && response.data.length > 0) {
          _this3.row += rowperpage;
          var len = _this3.reviews.length;

          if (len > 0) {
            _this3.buttonText = "Loading ...";
            var that = _this3;
            setTimeout(function () {
              that.buttonText = 'Xem thêm';

              for (var i = 0; i < response.data.length; i++) {
                that.reviews.push(response.data[i]);
              }

              that.hidden = false;
            }, 500);
          } else {
            _this3.reviews = response.data;

            if (response.data.length > 0) {
              _this3.product_name = response.data[0].product_name;
            }

            _this3.hidden = false;
          }
        } else {
          _this3.buttonText = "Không có thêm đánh giá.";
          _this3.isFinished = true;
          _this3.hidden = false;
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      products: '',
      url: '',
      swiper: null
    };
  },
  created: function created() {
    this.url = url;
    this.getProducts();
  },
  methods: {
    getProducts: function getProducts() {
      var _this = this;

      axios.get(url + '/api/viewed-product').then(function (response) {
        _this.products = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AttributeComponent.vue?vue&type=template&id=6bd63a28&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AttributeComponent.vue?vue&type=template&id=6bd63a28& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "list" }, [
    _c("ul", [
      _c("li", [
        _c(
          "a",
          {
            staticClass: "item-link item-content",
            attrs: { href: "javascript:void(0);" }
          },
          [
            _c("div", { staticClass: "item-inner item-cell" }, [
              _c("div", { staticClass: "item-row" }, [
                _c("div", { staticClass: "item-cell " }, [_vm._v("Màu sắc")]),
                _vm._v(" "),
                _c("div", { staticClass: "item-cell" }, [
                  _c(
                    "div",
                    { staticClass: "color-choose" },
                    _vm._l(_vm.attributes.colors, function(attr) {
                      return _c("div", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.color,
                              expression: "color"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            id: attr.color,
                            name: "color"
                          },
                          domProps: {
                            value: attr.color,
                            checked: _vm._q(_vm.color, attr.color)
                          },
                          on: {
                            change: function($event) {
                              _vm.color = attr.color
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: attr.color } }, [
                          _c("span", {
                            style: _vm._f("format_color")(attr.color)
                          })
                        ])
                      ])
                    }),
                    0
                  )
                ])
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            staticClass: "item-link item-content",
            attrs: { href: "javascript:void(0);" }
          },
          [
            _c("div", { staticClass: "item-inner item-cell" }, [
              _c("div", { staticClass: "item-row" }, [
                _c("div", { staticClass: "item-cell " }, [_vm._v("Size")]),
                _vm._v(" "),
                _c("div", { staticClass: "item-cell" }, [
                  _c(
                    "div",
                    { staticClass: "size-choose" },
                    _vm._l(_vm.attributes.size, function(attr) {
                      return _c("div", [
                        _c("input", {
                          attrs: { type: "radio", id: attr.size, name: "size" },
                          domProps: { value: attr.size }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: attr.size } }, [
                          _c("span", {
                            domProps: { textContent: _vm._s(attr.size) },
                            on: {
                              click: function($event) {
                                return _vm.selectSize(attr.size)
                              }
                            }
                          })
                        ])
                      ])
                    }),
                    0
                  )
                ])
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            staticClass: "item-link item-content",
            attrs: { href: "javascript:void(0);" }
          },
          [
            _c("div", { staticClass: "item-inner item-cell" }, [
              _c("div", { staticClass: "item-row" }, [
                _c("div", { staticClass: "item-cell " }, [_vm._v("Cân nặng")]),
                _vm._v(" "),
                _c("div", { staticClass: "item-cell" }, [
                  _vm._v(_vm._s(_vm.weight))
                ])
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            staticClass: "item-link item-content",
            attrs: { href: "javascript:void(0);" }
          },
          [
            _c("div", { staticClass: "item-inner item-cell" }, [
              _c("div", { staticClass: "item-row" }, [
                _c("div", { staticClass: "item-cell " }, [_vm._v("Chiều cao")]),
                _vm._v(" "),
                _c("div", { staticClass: "item-cell" }, [
                  _vm._v(_vm._s(_vm.height))
                ])
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            staticClass: "item-link item-content",
            attrs: { href: "javascript:void(0);" }
          },
          [
            _c("div", { staticClass: "item-inner item-cell" }, [
              _c("div", { staticClass: "item-row" }, [
                _c("div", { staticClass: "item-cell " }, [_vm._v("Chất liệu")]),
                _vm._v(" "),
                _c("div", { staticClass: "item-cell" }, [
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm._f("format_material")(_vm.attributes.material))
                    )
                  ])
                ])
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            staticClass: "item-link item-content",
            attrs: { href: "javascript:void(0);" }
          },
          [
            _c("div", { staticClass: "item-inner item-cell" }, [
              _c("div", { staticClass: "item-row" }, [
                _c("div", { staticClass: "item-cell " }, [_vm._v("Xuất xứ")]),
                _vm._v(" "),
                _c("div", { staticClass: "item-cell" }, [
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm._f("format_origin")(_vm.attributes.origin))
                    )
                  ])
                ])
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _vm.description.length > 0
        ? _c("li", [
            _c(
              "div",
              {
                staticStyle: {
                  position: "relative",
                  "margin-bottom": "40px",
                  overflow: "hidden"
                },
                style: { height: _vm.height }
              },
              [
                _c(
                  "p",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      color: "#333",
                      "margin-top": "10px",
                      "margin-bottom": "10px"
                    }
                  },
                  [_vm._v("Mô tả")]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "description",
                  staticStyle: { "font-size": "13px", color: "#333" },
                  domProps: { innerHTML: _vm._s(_vm.description) }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "text-align": "center",
                      height: "50px",
                      display: "table",
                      width: "100%",
                      bottom: "0"
                    },
                    style: { position: _vm.position }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticStyle: {
                          display: "table-cell",
                          background:
                            "linear-gradient(rgba(255, 255, 255, 0.7) 10%, rgb(255, 255, 255))",
                          "vertical-align": "middle"
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-info",
                            staticStyle: {
                              color: "#fff",
                              "font-size": "13px",
                              background: "var(--main-color)"
                            },
                            attrs: { href: "javascript:void(0);" },
                            on: {
                              click: function($event) {
                                return _vm.viewMore()
                              }
                            }
                          },
                          [
                            _vm._v(_vm._s(_vm.text) + " "),
                            _c("i", { staticClass: "fas", class: _vm.icon })
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "item-link item-content",
          attrs: { href: "javascript:void(0);" }
        },
        [
          _c("div", { staticClass: "item-inner item-cell" }, [
            _c("div", { staticClass: "item-row" }, [
              _c("div", { staticClass: "item-cell " }, [_vm._v("Số lượng")]),
              _vm._v(" "),
              _c("div", { staticClass: "item-cell" }, [
                _c("div", { staticClass: "col-xl-9 col-lg-8 col-md-8 col-9" }, [
                  _c("div", { staticClass: "custom-qty" }, [
                    _c(
                      "button",
                      {
                        staticClass: "reduced items",
                        attrs: {
                          onclick:
                            "var result = document.getElementById('qty1'); var qty1 = result.value; if( !isNaN( qty1 ) && qty1 > 1 ) result.value--;return false;",
                          type: "button"
                        }
                      },
                      [_c("i", { staticClass: "fa fa-minus" })]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "input-text qty",
                      attrs: {
                        type: "text",
                        title: "Qty",
                        value: "1",
                        maxlength: "8",
                        id: "qty1",
                        name: "qty"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "increase items",
                        attrs: {
                          onclick:
                            "var result = document.getElementById('qty1'); var qty1 = result.value; if( !isNaN( qty1 )) result.value++;return false;",
                          type: "button"
                        }
                      },
                      [_c("i", { staticClass: "fa fa-plus" })]
                    )
                  ])
                ])
              ])
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RatingComponent.vue?vue&type=template&id=377faf76&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RatingComponent.vue?vue&type=template&id=377faf76& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "product-review segments" }, [
    _c(
      "div",
      {
        staticClass: "row col-sm-12",
        staticStyle: { display: "inline-block" }
      },
      [
        _c("div", { staticClass: "float-left" }, [
          _c("i", {
            class:
              _vm.ratingAvg == 0
                ? "far fa-star"
                : _vm.ratingAvg >= 1
                ? "fas fa-star"
                : "fas fa-star-half-alt",
            staticStyle: { color: "#ffc107" }
          }),
          _vm._v(" "),
          _c("i", {
            class:
              _vm.ratingAvg > 1
                ? _vm.ratingAvg >= 2
                  ? "fas fa-star"
                  : "fas fa-star-half-alt"
                : "far fa-star",
            staticStyle: { color: "#ffc107" }
          }),
          _vm._v(" "),
          _c("i", {
            class:
              _vm.ratingAvg > 2
                ? _vm.ratingAvg >= 3
                  ? "fas fa-star"
                  : "fas fa-star-half-alt"
                : "far fa-star",
            staticStyle: { color: "#ffc107" }
          }),
          _vm._v(" "),
          _c("i", {
            class:
              _vm.ratingAvg > 3
                ? _vm.ratingAvg >= 4
                  ? "fas fa-star"
                  : "fas fa-star-half-alt"
                : "far fa-star",
            staticStyle: { color: "#ffc107" }
          }),
          _vm._v(" "),
          _c("i", {
            class:
              _vm.ratingAvg > 4
                ? _vm.ratingAvg >= 5
                  ? "fas fa-star"
                  : "fas fa-star-half-alt"
                : "far fa-star",
            staticStyle: { color: "#ffc107" }
          })
        ]),
        _vm._v(" "),
        _vm.totalReviews > 0
          ? _c(
              "a",
              {
                staticClass: "float-left",
                attrs: {
                  href: _vm._f("url_reviews")(
                    _vm._f("change_to_slug")(this.product_name),
                    this.product_id
                  )
                }
              },
              [
                _vm._v(
                  "\n             (Xem " +
                    _vm._s(_vm.totalReviews) +
                    " nhận xét)\n        "
                )
              ]
            )
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RecommendComponent.vue?vue&type=template&id=b6951e68&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RecommendComponent.vue?vue&type=template&id=b6951e68& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "recommended-you" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "swiper-container swiper-relate-product" }, [
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
                    _c("div", { staticClass: "image" }, [
                      _c("img", {
                        attrs: {
                          src: _vm._f("format_image")(product.image, "150x150"),
                          alt: product.name
                        }
                      })
                    ]),
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
            ]
          )
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
      _c("h3", [_vm._v("Có thể bạn quan tâm")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RelateProductComponent.vue?vue&type=template&id=0855faf2&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RelateProductComponent.vue?vue&type=template&id=0855faf2& ***!
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
  return _c("div", { staticClass: "related-products segments no-pd-b" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "swiper-container swiper-relate-product" }, [
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
                    _c("div", { staticClass: "image" }, [
                      _c("img", {
                        attrs: {
                          src: _vm._f("format_image")(product.image, "150x150"),
                          alt: product.name
                        }
                      })
                    ]),
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
            ]
          )
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
      _c("h3", [_vm._v("Sản phẩm tương tự")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReviewsComponent.vue?vue&type=template&id=0bcae88d&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReviewsComponent.vue?vue&type=template&id=0bcae88d& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "product-review segments" }, [
    _c(
      "div",
      {
        staticClass: "row col-sm-12",
        staticStyle: {
          margin: "0",
          display: "inline-block",
          width: "100%",
          padding: "0px 0px 20px 0px"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "rating-block float-left",
            staticStyle: {
              padding: "20px 5px",
              width: "49%",
              "text-align": "center"
            }
          },
          [
            _c(
              "h2",
              {
                staticClass: "bold padding-bottom-7",
                staticStyle: { "padding-bottom": "5px", "font-size": "40px" }
              },
              [_vm._v(_vm._s(_vm.ratingAvg))]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm",
                class:
                  _vm.ratingAvg >= 1 ? "btn-warning " : "btn-default btn-grey",
                attrs: { type: "button", "aria-label": "Left Align" }
              },
              [
                _c("i", {
                  class:
                    _vm.ratingAvg >= 1 ? "fas fa-star" : "fas fa-star-half-alt",
                  staticStyle: { color: "#fff" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm",
                class:
                  _vm.ratingAvg > 1 ? "btn-warning" : "btn-default btn-grey",
                attrs: { type: "button", "aria-label": "Left Align" }
              },
              [
                _c("i", {
                  class:
                    _vm.ratingAvg > 1
                      ? _vm.ratingAvg >= 2
                        ? "fas fa-star"
                        : "fas fa-star-half-alt"
                      : "far fa-star",
                  staticStyle: { color: "#fff" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm",
                class:
                  _vm.ratingAvg > 2 ? "btn-warning" : "btn-default btn-grey",
                attrs: { type: "button", "aria-label": "Left Align" }
              },
              [
                _c("i", {
                  class:
                    _vm.ratingAvg > 2
                      ? _vm.ratingAvg >= 3
                        ? "fas fa-star"
                        : "fas fa-star-half-alt"
                      : "far fa-star",
                  staticStyle: { color: "#fff" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm",
                class:
                  _vm.ratingAvg > 3 ? "btn-warning" : "btn-default btn-grey",
                attrs: { type: "button", "aria-label": "Left Align" }
              },
              [
                _c("i", {
                  class:
                    _vm.ratingAvg > 3
                      ? _vm.ratingAvg >= 4
                        ? "fas fa-star"
                        : "fas fa-star-half-alt"
                      : "far fa-star",
                  staticStyle: { color: "#fff" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm",
                class:
                  _vm.ratingAvg > 4 ? "btn-warning" : "btn-default btn-grey",
                attrs: { type: "button", "aria-label": "Left Align" }
              },
              [
                _c("i", {
                  class:
                    _vm.ratingAvg > 4
                      ? _vm.ratingAvg >= 5
                        ? "fas fa-star"
                        : "fas fa-star-half-alt"
                      : "far fa-star",
                  staticStyle: { color: "#fff" }
                })
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "rating-breakdown float-right",
            staticStyle: { width: "50%", padding: "0 5px" }
          },
          [
            _c("div", { staticClass: "float-left" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "float-left", staticStyle: { width: "110px" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "progress",
                      staticStyle: { height: "9px", margin: "8px 0" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "progress-bar bg-success",
                          style: { width: _vm.percent_5_star + "%" },
                          attrs: {
                            role: "progressbar",
                            "aria-valuenow": "5",
                            "aria-valuemin": "0",
                            "aria-valuemax": "5"
                          }
                        },
                        [
                          _c("span", { staticClass: "sr-only" }, [
                            _vm._v("80% Complete (danger)")
                          ])
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "float-right",
                  staticStyle: { "margin-left": "5px", "margin-top": "5px" }
                },
                [_vm._v(_vm._s(_vm.number_5_star))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "float-left" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "float-left", staticStyle: { width: "110px" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "progress",
                      staticStyle: { height: "9px", margin: "8px 0" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "progress-bar bg-primary",
                          style: { width: _vm.percent_4_star + "%" },
                          attrs: {
                            role: "progressbar",
                            "aria-valuenow": "5",
                            "aria-valuemin": "0",
                            "aria-valuemax": "5"
                          }
                        },
                        [
                          _c("span", { staticClass: "sr-only" }, [
                            _vm._v("80% Complete (danger)")
                          ])
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "float-right",
                  staticStyle: { "margin-left": "5px", "margin-top": "5px" }
                },
                [_vm._v(_vm._s(_vm.number_4_star))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "float-left" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "float-left", staticStyle: { width: "110px" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "progress",
                      staticStyle: { height: "9px", margin: "8px 0" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "progress-bar bg-info",
                          style: { width: _vm.percent_3_star + "%" },
                          attrs: {
                            role: "progressbar",
                            "aria-valuenow": "5",
                            "aria-valuemin": "0",
                            "aria-valuemax": "5"
                          }
                        },
                        [
                          _c("span", { staticClass: "sr-only" }, [
                            _vm._v("80% Complete (danger)")
                          ])
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "float-right",
                  staticStyle: { "margin-left": "5px", "margin-top": "5px" }
                },
                [_vm._v(_vm._s(_vm.number_3_star))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "float-left" }, [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "float-left", staticStyle: { width: "110px" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "progress",
                      staticStyle: { height: "9px", margin: "8px 0" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "progress-bar bg-warning",
                          style: { width: _vm.percent_2_star + "%" },
                          attrs: {
                            role: "progressbar",
                            "aria-valuenow": "5",
                            "aria-valuemin": "0",
                            "aria-valuemax": "5"
                          }
                        },
                        [
                          _c("span", { staticClass: "sr-only" }, [
                            _vm._v("80% Complete (danger)")
                          ])
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "float-right",
                  staticStyle: { "margin-left": "5px", "margin-top": "5px" }
                },
                [_vm._v(_vm._s(_vm.number_2_star))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "float-left" }, [
              _vm._m(4),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "float-left", staticStyle: { width: "110px" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "progress",
                      staticStyle: { height: "9px", margin: "8px 0" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "progress-bar bg-danger",
                          style: { width: _vm.percent_1_star + "%" },
                          attrs: {
                            role: "progressbar",
                            "aria-valuenow": "5",
                            "aria-valuemin": "0",
                            "aria-valuemax": "5"
                          }
                        },
                        [
                          _c("span", { staticClass: "sr-only" }, [
                            _vm._v("80% Complete (danger)")
                          ])
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "float-right",
                  staticStyle: { "margin-left": "5px", "margin-top": "5px" }
                },
                [_vm._v(_vm._s(_vm.number_1_star))]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _vm.ratingAvg > 0
      ? _c(
          "div",
          _vm._l(_vm.reviews, function(review) {
            return _c("div", [
              _c("div", { staticClass: "content" }, [
                _c("div", { staticClass: "text" }, [
                  _c("h6", [_vm._v(_vm._s(review.name))]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "rate-product" }, [
                    _c("li", [
                      _c("i", {
                        staticClass: "fa-star",
                        class: review.rating >= "1" ? "fas" : "far"
                      })
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", {
                        staticClass: "fa-star",
                        class: review.rating >= "2" ? "fas" : "far"
                      })
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", {
                        staticClass: "fa-star",
                        class: review.rating >= "3" ? "fas" : "far"
                      })
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", {
                        staticClass: "fa-star",
                        class: review.rating >= "4" ? "fas" : "far"
                      })
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", {
                        staticClass: "fa-star",
                        class: review.rating >= "5" ? "fas" : "far"
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "date" }, [
                    _vm._v(
                      "\n                            " +
                        _vm._s(
                          _vm._f("moment")(review.created_date, "from", "now")
                        ) +
                        "\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { domProps: { textContent: _vm._s(review.content) } })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divider-line-half" })
            ])
          }),
          0
        )
      : _c("div", { staticClass: "center" }, [
          _c("i", {
            staticClass: "fas fa-comments",
            staticStyle: {
              "font-size": "60px",
              color: "rgba(185, 182, 182, 0.25)"
            }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "center" }, [
            _vm._v("Hãy trở thành người đầu tiên đánh giá sản phẩm này.")
          ])
        ]),
    _vm._v(" "),
    _vm.total_rating > 3
      ? _c("div", { staticClass: "view-all-review" }, [
          _c(
            "a",
            {
              attrs: {
                href: _vm._f("url_reviews")(
                  _vm._f("change_to_slug")(_vm.product_name),
                  this.product_id
                )
              }
            },
            [_vm._v("Xem tất cả")]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "float-left",
        staticStyle: { width: "30px", "line-height": "1" }
      },
      [
        _c("div", { staticStyle: { height: "9px", margin: "5px 0" } }, [
          _vm._v("5 "),
          _c("i", { staticClass: "far fa-star" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "float-left",
        staticStyle: { width: "30px", "line-height": "1" }
      },
      [
        _c("div", { staticStyle: { height: "9px", margin: "5px 0" } }, [
          _vm._v("4 "),
          _c("i", { staticClass: "far fa-star" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "float-left",
        staticStyle: { width: "30px", "line-height": "1" }
      },
      [
        _c("div", { staticStyle: { height: "9px", margin: "5px 0" } }, [
          _vm._v("3 "),
          _c("i", { staticClass: "far fa-star" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "float-left",
        staticStyle: { width: "30px", "line-height": "1" }
      },
      [
        _c("div", { staticStyle: { height: "9px", margin: "5px 0" } }, [
          _vm._v("2 "),
          _c("i", { staticClass: "far fa-star" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "float-left",
        staticStyle: { width: "30px", "line-height": "1" }
      },
      [
        _c("div", { staticStyle: { height: "9px", margin: "5px 0" } }, [
          _vm._v("1 "),
          _c("i", { staticClass: "far fa-star" })
        ])
      ]
    )
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
                              _c("img", {
                                attrs: {
                                  src: _vm._f("format_image")(
                                    product.image,
                                    "150x150"
                                  ),
                                  alt: product.name
                                }
                              })
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

/***/ "./resources/js/components/AttributeComponent.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/AttributeComponent.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AttributeComponent_vue_vue_type_template_id_6bd63a28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttributeComponent.vue?vue&type=template&id=6bd63a28& */ "./resources/js/components/AttributeComponent.vue?vue&type=template&id=6bd63a28&");
/* harmony import */ var _AttributeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttributeComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/AttributeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AttributeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttributeComponent_vue_vue_type_template_id_6bd63a28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AttributeComponent_vue_vue_type_template_id_6bd63a28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AttributeComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AttributeComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/AttributeComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AttributeComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AttributeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AttributeComponent.vue?vue&type=template&id=6bd63a28&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/AttributeComponent.vue?vue&type=template&id=6bd63a28& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributeComponent_vue_vue_type_template_id_6bd63a28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AttributeComponent.vue?vue&type=template&id=6bd63a28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AttributeComponent.vue?vue&type=template&id=6bd63a28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributeComponent_vue_vue_type_template_id_6bd63a28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributeComponent_vue_vue_type_template_id_6bd63a28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/RatingComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/RatingComponent.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RatingComponent_vue_vue_type_template_id_377faf76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RatingComponent.vue?vue&type=template&id=377faf76& */ "./resources/js/components/RatingComponent.vue?vue&type=template&id=377faf76&");
/* harmony import */ var _RatingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RatingComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/RatingComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RatingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RatingComponent_vue_vue_type_template_id_377faf76___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RatingComponent_vue_vue_type_template_id_377faf76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RatingComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RatingComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/RatingComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RatingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RatingComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RatingComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RatingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RatingComponent.vue?vue&type=template&id=377faf76&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/RatingComponent.vue?vue&type=template&id=377faf76& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RatingComponent_vue_vue_type_template_id_377faf76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RatingComponent.vue?vue&type=template&id=377faf76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RatingComponent.vue?vue&type=template&id=377faf76&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RatingComponent_vue_vue_type_template_id_377faf76___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RatingComponent_vue_vue_type_template_id_377faf76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/RecommendComponent.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/RecommendComponent.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecommendComponent_vue_vue_type_template_id_b6951e68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecommendComponent.vue?vue&type=template&id=b6951e68& */ "./resources/js/components/RecommendComponent.vue?vue&type=template&id=b6951e68&");
/* harmony import */ var _RecommendComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecommendComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/RecommendComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecommendComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecommendComponent_vue_vue_type_template_id_b6951e68___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecommendComponent_vue_vue_type_template_id_b6951e68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RecommendComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RecommendComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/RecommendComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RecommendComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RecommendComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RecommendComponent.vue?vue&type=template&id=b6951e68&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/RecommendComponent.vue?vue&type=template&id=b6951e68& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendComponent_vue_vue_type_template_id_b6951e68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RecommendComponent.vue?vue&type=template&id=b6951e68& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RecommendComponent.vue?vue&type=template&id=b6951e68&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendComponent_vue_vue_type_template_id_b6951e68___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendComponent_vue_vue_type_template_id_b6951e68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/RelateProductComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/RelateProductComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RelateProductComponent_vue_vue_type_template_id_0855faf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelateProductComponent.vue?vue&type=template&id=0855faf2& */ "./resources/js/components/RelateProductComponent.vue?vue&type=template&id=0855faf2&");
/* harmony import */ var _RelateProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelateProductComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/RelateProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RelateProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RelateProductComponent_vue_vue_type_template_id_0855faf2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RelateProductComponent_vue_vue_type_template_id_0855faf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RelateProductComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RelateProductComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/RelateProductComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelateProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RelateProductComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RelateProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelateProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RelateProductComponent.vue?vue&type=template&id=0855faf2&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/RelateProductComponent.vue?vue&type=template&id=0855faf2& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelateProductComponent_vue_vue_type_template_id_0855faf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RelateProductComponent.vue?vue&type=template&id=0855faf2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RelateProductComponent.vue?vue&type=template&id=0855faf2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelateProductComponent_vue_vue_type_template_id_0855faf2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelateProductComponent_vue_vue_type_template_id_0855faf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ReviewsComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ReviewsComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReviewsComponent_vue_vue_type_template_id_0bcae88d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReviewsComponent.vue?vue&type=template&id=0bcae88d& */ "./resources/js/components/ReviewsComponent.vue?vue&type=template&id=0bcae88d&");
/* harmony import */ var _ReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ReviewsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReviewsComponent_vue_vue_type_template_id_0bcae88d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReviewsComponent_vue_vue_type_template_id_0bcae88d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ReviewsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ReviewsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ReviewsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ReviewsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReviewsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ReviewsComponent.vue?vue&type=template&id=0bcae88d&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ReviewsComponent.vue?vue&type=template&id=0bcae88d& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewsComponent_vue_vue_type_template_id_0bcae88d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ReviewsComponent.vue?vue&type=template&id=0bcae88d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReviewsComponent.vue?vue&type=template&id=0bcae88d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewsComponent_vue_vue_type_template_id_0bcae88d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewsComponent_vue_vue_type_template_id_0bcae88d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/detail.js":
/*!********************************!*\
  !*** ./resources/js/detail.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// import Lingallery from 'lingallery';
// Vue.component('lingallery', Lingallery);
Vue.component('rating-component', __webpack_require__(/*! ./components/RatingComponent.vue */ "./resources/js/components/RatingComponent.vue")["default"]);
Vue.component('attributes-component', __webpack_require__(/*! ./components/AttributeComponent.vue */ "./resources/js/components/AttributeComponent.vue")["default"]);
Vue.component('relate-product-component', __webpack_require__(/*! ./components/RelateProductComponent.vue */ "./resources/js/components/RelateProductComponent.vue")["default"]);
Vue.component('recommend-product-component', __webpack_require__(/*! ./components/RecommendComponent.vue */ "./resources/js/components/RecommendComponent.vue")["default"]);
Vue.component('reviews-component', __webpack_require__(/*! ./components/ReviewsComponent.vue */ "./resources/js/components/ReviewsComponent.vue")["default"]);
Vue.component('viewed-product-component', __webpack_require__(/*! ./components/ViewedProductComponent.vue */ "./resources/js/components/ViewedProductComponent.vue")["default"]); // Vue.component('sidebar-component', require('./components/sidebarComponent.vue').default);
// Vue.component('rating-component', require('./components/RatingComponent.vue').default);
// Vue.component('status-component', require('./components/StatusComponent.vue').default);
// Vue.component('attributes-component', require('./components/AttributeComponent.vue').default);
// Vue.component('relate-product-component', require('./components/RelateProductComponent.vue').default);
// // Vue.component('reviews-component', require('./components/ReviewsComponent.vue').default);
// Vue.component('recommend-product-component', require('./components/RecommendComponent.vue').default);
// Vue.component('recently-product-component', require('./components/RecentlyProductComponent.vue').default);

var detail = new Vue({
  el: '#detail',
  data: function data() {
    return {
      products: [],
      type: '',
      description: '',
      rating: 0,
      fullname: '',
      phone: '',
      email: '',
      content: '',
      email_reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      phone_reg: /^((09|03|07|08|05)+([0-9]{8})\b)$/,
      reload: 0,
      submit: false
    };
  },
  methods: {
    addToCart: function addToCart(id, name, price, image) {
      var color = document.querySelector('input[name=color]:checked');

      if (color == null) {
        this.$toast.top('Bạn chưa chọn màu');
        return;
      }

      var size = document.querySelector('input[name=size]:checked');

      if (size == null) {
        this.$toast.top('Bạn chưa chọn size');
        return;
      }

      this.products = [];
      this.products.push({
        "id": id,
        "name": name,
        "price": price,
        "image": image,
        "color": color.value,
        "size": size.value
      });
      this.storeInCart();
    },
    buyNow: function buyNow(id, name, price, image) {
      this.type = "buyNow";
      this.addToCart(id, name, price, image);
    },
    storeInCart: function storeInCart() {
      var _this = this;

      axios.post(url + "/api/cart", {
        body: this.products
      }).then(function (response) {
        _this.$toast.top('Đã thêm vào giỏ hàng');

        document.querySelector('.cart_number').innerHTML = '<span class="badge badge-danger">' + response.data.length + '</span>';

        if (_this.type === "buyNow") {
          window.location.href = url + "/thanh-toan.html";
        }
      });
    },
    cancelReview: function cancelReview() {
      this.fullname = '';
      this.phone = '';
      this.email = '';
      this.content = '';
      this.rating = 0;
      this.$refs.fullname.focus();
      $("#form-review").removeClass('hidden');
      $("#form-review-success").addClass('hidden');
    },
    isPhoneValid: function isPhoneValid() {
      return this.phone === "" ? "" : this.phone_reg.test(this.phone) ? 'has-success' : 'has-error';
    },
    isEmailValid: function isEmailValid() {
      return this.email === "" ? "" : this.email_reg.test(this.email) ? 'has-success' : 'has-error';
    },
    submitReviews: function submitReviews(product_id, product_name) {
      var _this2 = this;

      if (!this.validate()) {
        return false;
      }

      this.submit = true;
      var review = [];
      review.push({
        "name": this.fullname,
        "phone": this.phone,
        "email": this.email,
        "content": this.content,
        "rating": this.rating,
        "product_id": product_id,
        "product_name": product_name
      });
      console.log(JSON.stringify(review));
      axios.post(url + "/api/submit-reviews", {
        body: review
      }).then(function (response) {
        console.log(response.data);
        _this2.submit = false;

        if (response.data === 201) {
          $("#form-review").addClass('hidden');
          $("#form-review-success").removeClass('hidden');
          _this2.reload++;
        } else {
          _this2.$toast.top('Đã xảy ra lỗi!');
        }
      });
    },
    validate: function validate() {
      if (this.fullname && this.phone && this.content && this.rating) {
        return true;
      }

      if (!this.fullname) {
        this.$toast.top('Bạn chưa nhập tên');
        this.$refs.fullname.focus();
        return false;
      }

      if (this.phone === '') {
        this.$toast.top('Bạn chưa nhập số điện thoại');
        this.$refs.phone.focus();
        return false;
      } else if (!this.phone_reg.test(this.phone)) {
        this.$toast.top('Số điện thoại chưa đúng.');
        this.$refs.phone.focus();
        return false;
      }

      if (this.email !== '' && !this.email_reg.test(this.email)) {
        this.$toast.top('Email chưa đúng.');
        this.$refs.email.focus();
        return false;
      }

      if (!this.content) {
        this.$toast.top('Bạn chưa nhập nội dung nhận xét');
        this.$refs.content.focus();
        return false;
      }

      if (!this.rating) {
        this.$toast.top('Bạn chưa chọn số sao');
        return false;
      }
    },
    openPopupReview: function openPopupReview() {
      $(".rating-sheet").addClass("modal-in");
      $("html").addClass("with-modal-sheet");
      $(".sheet-close").click(function () {
        $(".rating-sheet").removeClass("modal-in");
        $("html").removeClass("with-modal-sheet");
      });
    }
  }
});
new Swiper('.swiper-detail-product', {
  cssMode: true,
  mousewheel: true,
  keyboard: true,
  pagination: {
    el: '.swiper-pagination-detail-product',
    dynamicBullets: true,
    paginationClickable: true
  },
  autoplay: {
    delay: 5000
  }
});

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/detail.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\m\resources\js\detail.js */"./resources/js/detail.js");


/***/ })

/******/ });