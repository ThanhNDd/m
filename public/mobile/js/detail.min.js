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
/* harmony import */ var _SliderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderComponent */ "./resources/js/components/SliderComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '',
      attributes: [],
      color: "",
      size: '',
      height: '130px',
      position: 'absolute',
      icon: 'fa-chevron-circle-down',
      isMore: true,
      text: 'Xem thêm',
      weight: '',
      colors: [],
      sizes: [],
      images: [],
      short_description: '',
      description: '',
      products: [],
      quantities: [],
      checked: false,
      index_image: 0,
      id: '',
      name: '',
      price: '',
      image: '',
      sku: '',
      qty: 1,
      type: '',
      data: []
    };
  },
  mixins: [_SliderComponent__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    var _this = this;

    this.url = url;
    var id = document.querySelector('#product_id').getAttribute('value');
    axios.get(url + '/api/attributes/' + id).then(function (response) {
      _this.attributes = response.data;
      _this.products = response.data.products;
      _this.short_description = response.data.products[0].short_description;
      _this.description = response.data.products[0].description;
      var color = '';
      var size = '';
      var arr_colors = [];
      var arr_sizes = [];
      var that = _this;
      response.data.products.forEach(function (item) {
        if (color != item.color) {
          arr_colors.push(item.color);
          color = item.color;

          if (item.image) {
            that.images.push(item.image);
          }
        }

        if (size != item.size) {
          arr_sizes.push(item.size);
          size = item.size;
        }
      });
      _this.colors = Array.from(new Set(arr_colors));
      _this.sizes = Array.from(new Set(arr_sizes));
      var total_image = _this.all_images.length;
      var total_color = _this.colors.length;
      _this.index_image = total_image - total_color;
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
    minusQty: function minusQty() {
      var qty1 = $('#qty1').val();

      if (qty1) {
        qty1 = Number(qty1);
      }

      if (!isNaN(qty1) && Number(qty1) > 1) {
        qty1--;
        $('#qty1').val(qty1);
        this.qty = qty1;
      }
    },
    plusQty: function plusQty() {
      var qty1 = $('#qty1').val();

      if (qty1) {
        qty1 = Number(qty1);
      }

      if (!isNaN(qty1) && Number(qty1) > 0) {
        qty1++;
        $('#qty1').val(qty1);
        this.qty = qty1;
      }
    },
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
    // selectSize: function (value) {
    //     let w = this.weight;
    //     select_weight.forEach(function(item) {
    //         if(value == item.id) {
    //             w = item.text;
    //             return false;
    //         }
    //     });
    //     this.weight = w;
    // }
    addToCart: function addToCart() {
      // let color = document.querySelector('input[name=color]:checked');
      if (!this.color) {
        // this.$toast.error({
        //     title:'Lỗi',
        //     message:'Bạn chưa chọn màu'
        // });
        this.$toast.top('Bạn chưa chọn màu');
        return;
      } // let size = document.querySelector('input[name=size]:checked');


      if (!this.size) {
        // this.$toast.error({
        //     title:'Lỗi',
        //     message:'Bạn chưa chọn size'
        // });
        this.$toast.top('Bạn chưa chọn size');
        return;
      } // let qty = document.querySelector("#qty").value;


      if (!this.qty || this.qty < 0) {
        this.qty = 1;
      } // let price = document.querySelector("#retail").value;
      // let sku = document.querySelector("#sku_selected").value;
      // let image = document.querySelector("#image_selected").value;


      this.data = [];
      this.data.push({
        "id": this.id,
        "sku": this.sku,
        "name": this.name,
        "price": this.price,
        "image": this.image,
        "color": this.color,
        "size": this.size,
        "qty": this.qty
      });
      this.storeInCart();
    },
    buyNow: function buyNow() {
      this.type = "buyNow";
      this.addToCart();
    },
    storeInCart: function storeInCart() {
      var _this2 = this;

      axios.post(url + "/api/cart", {
        body: this.data
      }).then(function (response) {
        document.querySelector('.cart_number').innerHTML = '<span class="badge badge-danger">' + response.data.length + '</span>';

        if (_this2.type === "buyNow") {
          window.location.href = url + "/thanh-toan.html";
        } else {
          _this2.$toast.top('Sản phẩm đã được thêm vào giỏ hàng');
        }
      });
    },
    selectSize: function selectSize(size) {
      var _self = this;

      this.products.forEach(function (item) {
        if (_self.color == item.color && item.size == size) {
          document.querySelector('#price').innerHTML = item.retail.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' <sup style="top: -10px; font-size: 16px;">đ</sup>';
          _self.id = item.id;
          _self.price = item.retail;
          _self.sku = item.sku;
          _self.name = item.name;

          if (item.image) {
            _self.image = item.image;
          } else {
            var image = item.product_image;

            if (image) {
              image = JSON.parse(image);
              _self.image = image[0].src;
            }
          }
        }
      });
    },
    selectColor: function selectColor(index, color) {
      var all_images = this.all_images.length;
      var image = this.images.length;
      var idx = all_images - image;
      idx = idx + index;
      $(".thumbnail img").removeClass("active");
      $(".thumbnail img#" + idx).addClass("active");
      var img = this.all_images[idx];

      if (img) {
        $(".product-image-gallery img").prop("src", img);
      }

      this.setTitleImage();
      this.chooseImage(idx);
      this.checked = false;
      this.sizes = [];
      this.quantities = [];

      var _self = this;

      this.size = null;
      this.price = null;
      this.image = null;
      this.sku = null;
      this.name = null;
      this.id = null;
      this.products.forEach(function (item) {
        if (item.color == color) {
          _self.sizes.push(item.size);

          _self.quantities.push(Number(item.quantity));
        }
      });
    },
    setTitleImage: function setTitleImage() {
      var product_name = $(".product-info-block .product-info .name").text();

      if (!product_name) {
        product_name = '';
      }

      $(".product-image-gallery img").prop("alt", product_name).prop("title", product_name);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormReviewsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormReviewsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLogged: false,
      is_valid_rating: true,
      purchased: false,
      is_valid_content: true,
      is_valid_content_length: true,
      reviews_success: false,
      customer_id: '',
      isReviewed: false,
      rating: 0,
      content: '',
      show_loading: false,
      is_show_popup: false
    };
  },
  props: ['product_id', 'product_name'],
  created: function created() {
    this.checkLogged();
  },
  watch: {
    content: function content() {
      this.is_valid_content = this.content ? true : false;
      this.is_valid_content_length = this.content && this.content.length > 20;
    },
    rating: function rating() {
      this.is_valid_rating = this.rating;
    }
  },
  methods: {
    // check logged form reviews
    checkLogged: function checkLogged() {
      var _this = this;

      axios.post(url + '/api/check-logged').then(function (response) {
        if (response.data !== 'not_exist_user') {
          _this.isLogged = true;
          _this.customer_name = response.data.name;
          _this.customer_id = response.data.id;

          _this.checkReviewed();
        } else {
          _this.isLogged = false;
          _this.isReviewed = false;
        }
      })["catch"](function (e) {
        _this.isLogged = false;
      });
    },
    checkReviewed: function checkReviewed() {
      var _this2 = this;

      axios.post(url + '/api/check-reviewed', {
        customer_id: this.customer_id,
        product_id: this.product_id
      }).then(function (response) {
        if (response.data > 0) {
          _this2.isReviewed = true;
        }
      })["catch"](function (e) {
        _this2.isLogged = false;
      });
    },
    submitReviews: function submitReviews() {
      var _this3 = this;

      if (!this.validate()) {
        return false;
      }

      this.show_loading = true;
      var review = [];
      review.push({
        "customer_id": this.customer_id,
        "content": this.content,
        "rating": this.rating,
        "product_id": this.product_id,
        "product_name": this.product_name,
        "purchased": this.purchased
      });
      axios.post(url + "/api/submit-reviews", {
        body: review
      }).then(function (response) {
        _this3.show_loading = false;

        if (response.status === 200) {
          _this3.reviews_success = true;
          _this3.row = 0;
          _this3.reviews = [];
          var that = _this3;
          $.each(_this3.$root.$children, function (k, v) {
            var id = this.$el.id;

            if (id === 'reviews_component') {
              that.$root.$children[k].reloadReviews(3);
              that.$root.$children[k].getRatingAvg();
              that.$root.$children[k].getRatingNumberDetail();
            }
          });
        } else {
          _this3.$toast.error({
            title: 'Đã xảy ra lỗi',
            message: 'Vui lòng thử lại sau!'
          });
        }
      })["catch"](function (e) {
        _this3.show_loading = false;
      });
    },
    validate: function validate() {
      var is_valid_form = true;

      if (!this.content) {
        this.is_valid_content = false;
        is_valid_form = false;
      }

      if (!this.rating) {
        this.is_valid_rating = false;
        is_valid_form = false;
      }

      return is_valid_form;
    },
    cancelReview: function cancelReview() {
      this.content = '';
      this.rating = 0;
      this.is_valid_rating = true;
      this.purchased = false;
      this.is_valid_content = true;
      this.is_valid_content_length = true;
      this.is_show_popup = false;
    }
  }
});

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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      products: [],
      url: '',
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
  mounted: function mounted() {// this.swiper = new window.Swiper('.swiper-container', {
    //     cssMode: true,
    //     mousewheel: true,
    //     keyboard: true,
    // })
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
  mounted: function mounted() {// this.swiper = new Swiper('.swiper-container');
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
    },
    reloadReviews: function reloadReviews(rowperpage) {
      var _this4 = this;

      this.hidden = true;
      axios.post(url + '/api/reviews', {
        product_id: this.product_id,
        row: this.row,
        rowperpage: rowperpage
      }).then(function (response) {
        if (response.data !== '' && response.data.length > 0) {
          _this4.reviews = response.data;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SliderComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SliderComponent.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      url: '',
      img: '',
      all_images: [],
      activeIndex: 0
    };
  },
  created: function created() {
    var _this = this;

    this.url = url;
    var id = document.querySelector('#product_id').getAttribute('value');
    axios.get(url + '/api/images/' + id).then(function (response) {
      _this.all_images = response.data;

      _this.chooseImage(0);

      _this.setColorIndex();
    });
  },
  methods: {
    chooseImage: function chooseImage(index) {
      // $(".thumbnail img").removeClass("active");
      document.querySelector('.thumbnail').scrollLeft = Number(68) * (index - 6);

      if (index != this.activeIndex) {
        $(".thumbnail").children("img").removeClass("active");
        $(".thumbnail").children("[id=" + index + "]").addClass("active");
      }

      this.img = this.all_images[index];
      this.setTitleImage();
    },
    setColorIndex: function setColorIndex() {
      var colors = $(".color-choose img").length;
      var images = this.all_images.length;
      var image_index = images - colors;
      $(".color-choose img").each(function () {
        $(this).attr("id", image_index);
        image_index++;
      });
    },
    setTitleImage: function setTitleImage() {
      var product_name = $(".product-info-block .product-info .name").text();

      if (!product_name) {
        product_name = '';
      }

      $(".product-image-gallery img").prop("alt", product_name).prop("title", product_name);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$root.$on('slider', function () {
      _this2.chooseImage(_this2.activeIndex);
    });
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SliderComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SliderComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg {\n    cursor: pointer;\n}\nimg.active {\n    border: 2px solid #509dde;\n}\n#owl-single-product .thumbnail img {\n    width: 64px;\n}\n#owl-single-product .thumbnail img:hover {\n    border: 2px solid #509dde;\n}\n.thumbnail {\n    scroll-behavior: smooth;\n    display: inline-block;\n    overflow: auto;\n    border: none;\n    white-space: nowrap;\n    margin-top: 10px;\n    width: 100%;\n}\n.thumbnail img {\n    display: inline-block;\n    margin-right: 5px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SliderComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SliderComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SliderComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SliderComponent.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


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
                _c(
                  "div",
                  { staticClass: "item-cell", staticStyle: { width: "30%" } },
                  [_vm._v("Màu sắc")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "item-cell" }, [
                  _c(
                    "div",
                    { staticClass: "color-choose" },
                    _vm._l(_vm.colors, function(c, idx) {
                      return _c("div", { key: idx }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.color,
                              expression: "color"
                            }
                          ],
                          attrs: { type: "radio", id: c, name: "color" },
                          domProps: { value: c, checked: _vm._q(_vm.color, c) },
                          on: {
                            change: function($event) {
                              _vm.color = c
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: c } }, [
                          _vm.images[idx]
                            ? _c("img", {
                                attrs: {
                                  width: "32px",
                                  src: _vm.images[idx],
                                  id: idx + _vm.index_image,
                                  title: c
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.selectColor(idx, c)
                                  }
                                }
                              })
                            : _c("span", {
                                staticClass: "btn",
                                domProps: { textContent: _vm._s(c) },
                                on: {
                                  click: function($event) {
                                    return _vm.selectColor(idx, c)
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
                _c(
                  "div",
                  { staticClass: "item-cell", staticStyle: { width: "30%" } },
                  [_vm._v("Size")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "item-cell" }, [
                  _c(
                    "div",
                    { staticClass: "size-choose" },
                    _vm._l(_vm.sizes, function(s, idx) {
                      return _c("div", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.size,
                              expression: "size"
                            }
                          ],
                          attrs: {
                            type: "radio",
                            id: s,
                            name: "size",
                            disabled: _vm.quantities[idx] === 0
                          },
                          domProps: { value: s, checked: _vm._q(_vm.size, s) },
                          on: {
                            change: function($event) {
                              _vm.size = s
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: s } }, [
                          _c("span", {
                            class:
                              _vm.quantities[idx] === 0
                                ? "btn disabled"
                                : "btn",
                            domProps: { textContent: _vm._s(s) },
                            on: {
                              click: function($event) {
                                _vm.quantities[idx] !== 0
                                  ? _vm.selectSize(s)
                                  : ""
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
                _c(
                  "div",
                  { staticClass: "item-cell", staticStyle: { width: "30%" } },
                  [_vm._v("Số lượng")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "item-cell" }, [
                  _c("div", { staticClass: "custom-qty" }, [
                    _c(
                      "button",
                      {
                        staticClass: "reduced items",
                        attrs: { type: "button" },
                        on: { click: _vm.minusQty }
                      },
                      [_c("i", { staticClass: "fa fa-minus" })]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.qty,
                          expression: "qty"
                        }
                      ],
                      staticClass: "input-text qty",
                      attrs: {
                        type: "text",
                        title: "Qty",
                        value: "1",
                        id: "qty1",
                        name: "qty"
                      },
                      domProps: { value: _vm.qty },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.qty = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "increase items",
                        attrs: { type: "button" },
                        on: { click: _vm.plusQty }
                      },
                      [_c("i", { staticClass: "fa fa-plus" })]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(0)
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
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "wrap-action-product-d" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticStyle: { "margin-left": "5px" } }, [
            _c("div", { staticClass: "content-message" }, [
              _c("a", { attrs: { href: _vm.url } }, [
                _c("i", { staticClass: "fas fa-home" })
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "content-button" }, [
            _c(
              "a",
              {
                staticClass: "button secondary-button",
                attrs: { href: "javascript:void(0);" },
                on: {
                  click: function($event) {
                    return _vm.addToCart()
                  }
                }
              },
              [
                _c("i", { staticClass: "fas fa-cart-arrow-down" }),
                _vm._v(" Thêm vào giỏ\n                    ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "content-button" }, [
            _c(
              "a",
              {
                staticClass: "button secondary-button",
                staticStyle: { color: "white" },
                attrs: { href: "javascript:void(0);" },
                on: {
                  click: function($event) {
                    return _vm.buyNow()
                  }
                }
              },
              [
                _c("i", { staticClass: "fas fa-cart-plus" }),
                _vm._v(" Mua ngay\n                    ")
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "qty mt-2" }, [
      _c("span", {
        staticClass: "label",
        staticStyle: { "font-size": "14px", color: "gray" },
        attrs: { id: "remain_qty" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "content-message" }, [
        _c(
          "a",
          { attrs: { href: "https://m.me/shopmein.vn", target: "_blank" } },
          [_c("i", { staticClass: "fas fa-comment" })]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormReviewsComponent.vue?vue&type=template&id=27f3fdf1&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormReviewsComponent.vue?vue&type=template&id=27f3fdf1& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "product-review segments", attrs: { id: "form_reviews" } },
    [
      _vm.isReviewed
        ? _c("div", [
            _c("p", [_vm._v("Bạn đã thực hiện đánh giá sản phẩm này")])
          ])
        : _c(
            "div",
            {
              class: [
                "sheet-modal rating-sheet",
                _vm.is_show_popup ? "modal-in" : ""
              ]
            },
            [
              _c("div", { staticClass: "toolbar" }, [
                _c("div", { staticClass: "toolbar-inner" }, [
                  _c("div", { staticClass: "left" }, [_vm._v("Viết nhận xét")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "right" }, [
                    _c(
                      "a",
                      {
                        staticClass: "link sheet-close",
                        attrs: { href: "javascript:void(0);" },
                        on: {
                          click: function($event) {
                            return _vm.cancelReview()
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-check" })]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "sheet-modal-inner segments" }, [
                !_vm.isLogged
                  ? _c(
                      "div",
                      {
                        staticClass: "mt-4 mb-4",
                        staticStyle: {
                          display: "inline-block",
                          "text-align": "center",
                          width: "100%"
                        }
                      },
                      [
                        _c("p", { staticStyle: { display: "inline-block" } }, [
                          _vm._v("Hãy ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticStyle: { display: "inline-block" } },
                          [_c("login-component")],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticStyle: {
                              display: "inline-block",
                              "margin-right": "5px"
                            }
                          },
                          [_vm._v("để thực hiện đánh giá sản phẩm")]
                        )
                      ]
                    )
                  : _c(
                      "div",
                      {
                        staticClass: "page-content",
                        staticStyle: {
                          background: "#fff",
                          "padding-bottom": "20px"
                        }
                      },
                      [
                        !_vm.reviews_success
                          ? _c(
                              "div",
                              {
                                staticClass: "container",
                                attrs: { id: "form-review" }
                              },
                              [
                                _c(
                                  "form",
                                  { staticStyle: { "padding-top": "10px" } },
                                  [
                                    _c("input", {
                                      attrs: {
                                        id: "ratings-hidden",
                                        name: "rating",
                                        type: "hidden"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "content" } },
                                        [_vm._v("Nội dung nhận xét")]
                                      ),
                                      _vm._v(" "),
                                      _c("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.content,
                                            expression: "content"
                                          }
                                        ],
                                        ref: "content",
                                        class: [
                                          "form-control",
                                          !_vm.is_valid_content ||
                                          !_vm.is_valid_content_length
                                            ? "form-control--error"
                                            : ""
                                        ],
                                        attrs: {
                                          rows: "3",
                                          placeholder: "Nội dung nhận xét",
                                          id: "content"
                                        },
                                        domProps: { value: _vm.content },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.content = $event.target.value
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      !_vm.is_valid_content
                                        ? _c(
                                            "p",
                                            {
                                              staticClass:
                                                "text-left mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                Trường này là bắt buộc\n                            "
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.is_valid_content &&
                                      !_vm.is_valid_content_length
                                        ? _c(
                                            "p",
                                            {
                                              staticClass:
                                                "text-left mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                Nội dung nhận xét tối thiểu phải gồm 20 ký tự\n                            "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-right" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-md-12 d-inline-block text-left no-padding mb-2"
                                        },
                                        [
                                          _c("label", [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.purchased,
                                                  expression: "purchased"
                                                }
                                              ],
                                              attrs: {
                                                type: "checkbox",
                                                id: "purchased"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.purchased
                                                )
                                                  ? _vm._i(
                                                      _vm.purchased,
                                                      null
                                                    ) > -1
                                                  : _vm.purchased
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a = _vm.purchased,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = null,
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        (_vm.purchased = $$a.concat(
                                                          [$$v]
                                                        ))
                                                    } else {
                                                      $$i > -1 &&
                                                        (_vm.purchased = $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          ))
                                                    }
                                                  } else {
                                                    _vm.purchased = $$c
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(
                                              " Đã mua sản phẩm này\n                                "
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "float-left" },
                                        [
                                          _c("star-rating", {
                                            class: [
                                              !_vm.is_valid_rating
                                                ? "form-control form-control--error"
                                                : ""
                                            ],
                                            attrs: {
                                              "item-size": 30,
                                              "border-color": "#ffffff",
                                              "inactive-color": "#D8D8D8",
                                              "active-color": "#ffc107"
                                            },
                                            model: {
                                              value: _vm.rating,
                                              callback: function($$v) {
                                                _vm.rating = $$v
                                              },
                                              expression: "rating"
                                            }
                                          }),
                                          _vm._v(" "),
                                          !_vm.is_valid_rating
                                            ? _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "text-left mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                    Trường này là bắt buộc\n                                "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "float-right" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass: "btn btn-primary",
                                              attrs: {
                                                type: "button",
                                                disabled: _vm.show_loading
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.submitReviews()
                                                }
                                              }
                                            },
                                            [
                                              _vm.show_loading
                                                ? _c("i", {
                                                    staticClass:
                                                      "fa fa-spinner fa-spin",
                                                    staticStyle: {
                                                      "font-size": "20px"
                                                    }
                                                  })
                                                : _vm._e(),
                                              _vm._v(
                                                " Đồng ý\n                                "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ]
                            )
                          : _c(
                              "div",
                              { attrs: { id: "form-review-success" } },
                              [
                                _vm._m(0),
                                _vm._v(" "),
                                _c("div", { staticClass: "swal2-title" }, [
                                  _vm._v("Đăng nhận xét thành công!")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "swal2-text",
                                    staticStyle: {
                                      "text-align": "center",
                                      width: "100%"
                                    }
                                  },
                                  [_vm._v("Cám ơn bạn đã nhận xét sản phẩm!")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "swal2-footer",
                                    staticStyle: {
                                      "text-align": "center",
                                      "margin-top": "0"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "swal2-button-container",
                                        staticStyle: {
                                          width: "50%",
                                          margin: "auto"
                                        }
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "link sheet-close btn btn-danger",
                                            on: {
                                              click: function($event) {
                                                return _vm.cancelReview()
                                              }
                                            }
                                          },
                                          [_vm._v("Đóng")]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                      ]
                    )
              ])
            ]
          )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "swal2-icon swal2-success swal2-icon-show",
        staticStyle: { display: "flex" }
      },
      [
        _c("div", {
          staticClass: "swal2-success-circular-line-left",
          staticStyle: { "background-color": "rgb(255, 255, 255)" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "swal2-success-line-tip" }),
        _vm._v(" "),
        _c("span", { staticClass: "swal2-success-line-long" }),
        _vm._v(" "),
        _c("div", { staticClass: "swal2-success-ring" }),
        _vm._v(" "),
        _c("div", {
          staticClass: "swal2-success-fix",
          staticStyle: { "background-color": "rgb(255, 255, 255)" }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "swal2-success-circular-line-right",
          staticStyle: { "background-color": "rgb(255, 255, 255)" }
        })
      ]
    )
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
  return _vm.products.length > 0
    ? _c("div", { staticClass: "recommended-you" }, [
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
                                      _vm.url + "/public/web/images/404.jpg",
                                    loading:
                                      _vm.url + "/public/web/images/loading.svg"
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
    : _vm._e()
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
  return _vm.products.length > 0
    ? _c("div", { staticClass: "related-products segments no-pd-b" }, [
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
                                      _vm.url + "/public/web/images/404.jpg",
                                    loading:
                                      _vm.url + "/public/web/images/loading.svg"
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
    : _vm._e()
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
  return _c(
    "div",
    {
      staticClass: "product-review segments",
      attrs: { id: "reviews_component" }
    },
    [
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
                    _vm.ratingAvg >= 1
                      ? "btn-warning "
                      : "btn-default btn-grey",
                  attrs: { type: "button", "aria-label": "Left Align" }
                },
                [
                  _c("i", {
                    class:
                      _vm.ratingAvg >= 1
                        ? "fas fa-star"
                        : "fas fa-star-half-alt",
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
                  {
                    staticClass: "float-left",
                    staticStyle: { width: "110px" }
                  },
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
                  {
                    staticClass: "float-left",
                    staticStyle: { width: "110px" }
                  },
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
                  {
                    staticClass: "float-left",
                    staticStyle: { width: "110px" }
                  },
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
                  {
                    staticClass: "float-left",
                    staticStyle: { width: "110px" }
                  },
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
                  {
                    staticClass: "float-left",
                    staticStyle: { width: "110px" }
                  },
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
                    _c(
                      "h6",
                      { staticStyle: { margin: "0", "font-size": "12px" } },
                      [
                        _vm._v(
                          _vm._s(review.name) + "\n                            "
                        ),
                        review.purchased
                          ? _c(
                              "small",
                              {
                                staticStyle: {
                                  color: "green",
                                  "font-style": "italic"
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-check-circle" }),
                                _vm._v(" Đã mua hàng")
                              ]
                            )
                          : _vm._e()
                      ]
                    ),
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
                    _c("p", {
                      domProps: { textContent: _vm._s(review.content) }
                    })
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
    ]
  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SliderComponent.vue?vue&type=template&id=5e4b60fe&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SliderComponent.vue?vue&type=template&id=5e4b60fe& ***!
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
  return _c("div", { staticClass: "d-inline-block col-md-12 no-padding" }, [
    _c(
      "div",
      {
        staticClass: "product-image-gallery d-inline-block col-md-12 no-padding"
      },
      [
        _c("img", {
          staticClass: "d-inline-block col-md-12 no-padding",
          attrs: { src: _vm.img, width: "auto", alt: "", title: "" }
        })
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "thumbnail" },
      _vm._l(_vm.all_images, function(img, idx) {
        return _c("img", {
          class: [_vm.activeIndex === idx ? "active" : ""],
          attrs: {
            src: _vm._f("format_image")(img, "64x64"),
            id: idx,
            width: "64px",
            alt: "",
            title: ""
          },
          on: {
            click: function($event) {
              return _vm.chooseImage(idx)
            }
          }
        })
      }),
      0
    )
  ])
}
var staticRenderFns = []
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

/***/ "./resources/js/components/FormReviewsComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/FormReviewsComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormReviewsComponent_vue_vue_type_template_id_27f3fdf1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormReviewsComponent.vue?vue&type=template&id=27f3fdf1& */ "./resources/js/components/FormReviewsComponent.vue?vue&type=template&id=27f3fdf1&");
/* harmony import */ var _FormReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormReviewsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/FormReviewsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormReviewsComponent_vue_vue_type_template_id_27f3fdf1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormReviewsComponent_vue_vue_type_template_id_27f3fdf1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FormReviewsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FormReviewsComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/FormReviewsComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FormReviewsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormReviewsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FormReviewsComponent.vue?vue&type=template&id=27f3fdf1&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/FormReviewsComponent.vue?vue&type=template&id=27f3fdf1& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormReviewsComponent_vue_vue_type_template_id_27f3fdf1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FormReviewsComponent.vue?vue&type=template&id=27f3fdf1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormReviewsComponent.vue?vue&type=template&id=27f3fdf1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormReviewsComponent_vue_vue_type_template_id_27f3fdf1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormReviewsComponent_vue_vue_type_template_id_27f3fdf1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/SliderComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/SliderComponent.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SliderComponent_vue_vue_type_template_id_5e4b60fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderComponent.vue?vue&type=template&id=5e4b60fe& */ "./resources/js/components/SliderComponent.vue?vue&type=template&id=5e4b60fe&");
/* harmony import */ var _SliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SliderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SliderComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SliderComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/SliderComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SliderComponent_vue_vue_type_template_id_5e4b60fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SliderComponent_vue_vue_type_template_id_5e4b60fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SliderComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SliderComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/SliderComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SliderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SliderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SliderComponent.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/SliderComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SliderComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SliderComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/SliderComponent.vue?vue&type=template&id=5e4b60fe&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/SliderComponent.vue?vue&type=template&id=5e4b60fe& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_template_id_5e4b60fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SliderComponent.vue?vue&type=template&id=5e4b60fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SliderComponent.vue?vue&type=template&id=5e4b60fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_template_id_5e4b60fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_template_id_5e4b60fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
Vue.component('viewed-product-component', __webpack_require__(/*! ./components/ViewedProductComponent.vue */ "./resources/js/components/ViewedProductComponent.vue")["default"]);
Vue.component('slider-component', __webpack_require__(/*! ./components/SliderComponent.vue */ "./resources/js/components/SliderComponent.vue")["default"]);
Vue.component('form-reviews-component', __webpack_require__(/*! ./components/FormReviewsComponent.vue */ "./resources/js/components/FormReviewsComponent.vue")["default"]); // Vue.component('sidebar-component', require('./components/sidebarComponent.vue').default);
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
      submit: false,
      isLogged: false,
      // is_valid_rating: true,
      // purchased: false,
      // is_valid_content: true,
      // is_valid_content_length: true,
      // reviews_success: false,
      customer_id: '',
      // product_name: '',
      // product_id: '',
      isReviewed: false
    };
  },
  created: function created() {
    this.checkLogged(); // this.checkReviewed();
  },
  // watch: {
  //   content: function () {
  //     this.is_valid_content = this.content;
  //     this.is_valid_content_length = this.is_valid_content && this.is_valid_content.length > 20;
  //   },
  //   rating: function() {
  //     this.is_valid_rating = this.rating;
  //   }
  // },
  methods: {
    checkLogged: function checkLogged() {
      var _this = this;

      axios.post(url + '/api/check-logged').then(function (response) {
        if (response.data !== 'not_exist_user') {
          _this.isLogged = true;
          _this.customer_name = response.data.name;
          _this.customer_id = response.data.id;

          _this.checkReviewed();
        } else {
          _this.isLogged = false;
          _this.isReviewed = false;
        }
      })["catch"](function (e) {
        _this.isLogged = false;
      });
    },
    checkReviewed: function checkReviewed() {
      var _this2 = this;

      var product_id = $("#product_id").val();
      axios.post(url + '/api/check-reviewed', {
        customer_id: this.customer_id,
        product_id: product_id
      }).then(function (response) {
        if (response.data > 0) {
          _this2.isReviewed = true;
        }
      })["catch"](function (e) {
        _this2.isReviewed = false;
      });
    },
    openPopupReview: function openPopupReview() {
      this.checkLogged();
      $(".rating-sheet").addClass("modal-in");
      $("html").addClass("with-modal-sheet");
      $(".sheet-close").click(function () {
        $(".rating-sheet").removeClass("modal-in");
        $("html").removeClass("with-modal-sheet");
      });
    } // checkReviewed: function() {
    //   axios.post(url + '/api/check-reviewed',{
    //     customer_id: this.customer_id,
    //     product_id: this.product_id
    //   }).then(response => {
    //     if(response.data > 0) {
    //       this.isReviewed = true;
    //     }
    //   }).catch(e =>{
    //     this.isLogged = false;
    //   });
    // },
    // addToCart: function (id, name, price, image) {
    //   let color = document.querySelector('input[name=color]:checked');
    //   if (color == null) {
    //     this.$toast.top('Bạn chưa chọn màu');
    //     return;
    //   }
    //   let size = document.querySelector('input[name=size]:checked');
    //   if (size == null) {
    //     this.$toast.top('Bạn chưa chọn size');
    //     return;
    //   }
    //   this.products = [];
    //   this.products.push({
    //     "id": id,
    //     "name": name,
    //     "price": price,
    //     "image": image,
    //     "color": color.value,
    //     "size": size.value,
    //   });
    //   this.storeInCart();
    // },
    // buyNow: function (id, name, price, image) {
    //   this.type = "buyNow";
    //   this.addToCart(id, name, price, image);
    // },
    // storeInCart: function () {
    //   axios.post(url +"/api/cart", {
    //     body: this.products
    //   }).then(response => {
    //     this.$toast.top('Đã thêm vào giỏ hàng');
    //     document.querySelector('.cart_number').innerHTML = '<span class="badge badge-danger">' + response.data.length + '</span>';
    //     if(this.type === "buyNow") {
    //       window.location.href =  url +  "/thanh-toan.html";
    //     }
    //   })
    // },
    // cancelReview: function () {
    //   this.fullname = '';
    //   this.phone = '';
    //   this.email = '';
    //   this.content = '';
    //   this.rating = 0;
    //   this.$refs.fullname.focus();
    //   $("#form-review").removeClass('hidden');
    //   $("#form-review-success").addClass('hidden');
    // },
    // isPhoneValid: function() {
    //   return (this.phone === "")? "" : (this.phone_reg.test(this.phone)) ? 'has-success' : 'has-error';
    // },
    // isEmailValid: function() {
    //   return (this.email === "")? "" : (this.email_reg.test(this.email)) ? 'has-success' : 'has-error';
    // },
    // submitReviews: function () {
    //   if(!this.validate()) {
    //     return false;
    //   }
    //   this.submit = true;
    //   let review = [];
    //   review.push({
    //     "customer_id": this.customer_id,
    //     "content" : this.content,
    //     "rating" : this.rating,
    //     "product_id": this.product_id,
    //     "product_name": this.product_name,
    //     "purchased": this.purchased
    //   });
    //   axios.post(url + "/api/submit-reviews", {
    //     body: review
    //   }).then(response => {
    //     if(response.status === 200) {
    //       this.reviews_success = true;
    //       this.row = 0;
    //       this.reviews = [];
    //       this.reloadReviews(3);
    //       this.getRatingAvg();
    //       this.getRatingNumberDetail();
    //     } else {
    //       this.$toast.error({
    //         title:'Đã xảy ra lỗi',
    //         message:'Vui lòng thử lại sau!'
    //       });
    //     }
    //     this.submit = false;
    //   })
    // },
    // validate: function () {
    //   let is_valid_form = true;
    //   if(!this.content) {
    //     this.is_valid_content = false;
    //     is_valid_form = false;
    //   }
    //   if(!this.rating) {
    //     this.is_valid_rating = false;
    //     is_valid_form = false;
    //   }
    //   return is_valid_form;
    // },

  }
}); // new Swiper('.swiper-detail-product', {
//   cssMode: true,
//   mousewheel: true,
//   keyboard: true,
//   pagination: {
//     el: '.swiper-pagination-detail-product',
//     dynamicBullets: true,
//     paginationClickable: true
//   },
//   autoplay: {
//     delay: 5000,
//   },
// });

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/detail.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/m/resources/js/detail.js */"./resources/js/detail.js");


/***/ })

/******/ });