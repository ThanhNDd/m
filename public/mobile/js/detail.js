!function(t){var a={};function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)s.d(e,i,function(a){return t[a]}.bind(null,i));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/",s(s.s=62)}({0:function(t,a,s){"use strict";function e(t,a,s,e,i,r,n,l){var o,c="function"==typeof t?t.options:t;if(a&&(c.render=a,c.staticRenderFns=s,c._compiled=!0),e&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),n?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=o):i&&(o=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),o)if(c.functional){c._injectStyles=o;var f=c.render;c.render=function(t,a){return o.call(a),f(t,a)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,o):[o]}return{exports:t,options:c}}s.d(a,"a",(function(){return e}))},46:function(t,a,s){"use strict";s.r(a);var e={data:function(){return{products:"",url:"",swiper:null}},created:function(){this.url=url,this.getProducts()},methods:{getProducts:function(){var t=this;axios.get(url+"/api/viewed-product").then((function(a){t.products=a.data}))}}},i=s(0),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.products.length>0?s("div",{staticClass:"container",staticStyle:{padding:"0 !important"}},[t._m(0),t._v(" "),s("div",{staticClass:"swiper-container swiper-flash-sale"},[s("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(a){return s("div",{staticClass:"swiper-slide",staticStyle:{"margin-right":"15px"}},[s("div",{staticClass:"content content-shadow-product"},[s("a",{attrs:{href:t._f("url_product")(t._f("change_to_slug")(a.name),a.id)}},[s("div",{staticClass:"image"},[s("img",{attrs:{src:t._f("format_image")(a.image),alt:a.name}})]),t._v(" "),s("div",{staticClass:"text"},[s("p",{staticClass:"title-product title-product-center",domProps:{textContent:t._s(a.name)}}),t._v(" "),s("div",{staticClass:"float-left col-md-12 col-lg-12 no-padding"},[s("i",{class:0==a.rating?"far fa-star":a.rating>=1?"fas fa-star":"fas fa-star-half-alt",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:a.rating>1?a.rating>=2?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:a.rating>2?a.rating>=3?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:a.rating>3?a.rating>=4?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:a.rating>4?a.rating>=5?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),a.reviews>0?s("span",{staticStyle:{"margin-left":"5px",color:"gray"}},[t._v("("+t._s(a.reviews)+")")]):t._e()]),t._v(" "),s("p",{staticClass:"price"},[t._v(t._s(t._f("formatPrice")(a.retail)))])])])])])})),0)])]):t._e()}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"section-title"},[a("h3",[this._v("Sản phẩm bạn đã xem")])])}],!1,null,null,null);a.default=r.exports},62:function(t,a,s){t.exports=s(63)},63:function(t,a,s){Vue.component("rating-component",s(80).default),Vue.component("attributes-component",s(81).default),Vue.component("relate-product-component",s(82).default),Vue.component("recommend-product-component",s(83).default),Vue.component("reviews-component",s(84).default),Vue.component("viewed-product-component",s(46).default);new Vue({el:"#detail",data:function(){return{products:[],type:"",description:"",rating:0,fullname:"",phone:"",email:"",content:"",email_reg:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,phone_reg:/^((09|03|07|08|05)+([0-9]{8})\b)$/,reload:0}},methods:{addToCart:function(t,a,s,e){var i=document.querySelector("input[name=color]:checked");if(null!=i){var r=document.querySelector("input[name=size]:checked");null!=r?(this.products=[],this.products.push({id:t,name:a,price:s,image:e,color:i.value,size:r.value}),this.storeInCart()):this.$toast.top("Bạn chưa chọn size")}else this.$toast.top("Bạn chưa chọn màu")},buyNow:function(t,a,s,e){this.type="buyNow",this.addToCart(t,a,s,e)},storeInCart:function(){var t=this;axios.post(url+"/api/cart",{body:this.products}).then((function(a){t.$toast.top("Đã thêm vào giỏ hàng"),document.querySelector(".cart_number").innerHTML='<span class="badge badge-danger">'+a.data.length+"</span>","buyNow"===t.type&&(window.location.href=url+"/thanh-toan.html")}))},cancelReview:function(){this.fullname="",this.phone="",this.email="",this.content="",this.rating=0,this.$refs.fullname.focus(),$("#form-review").removeClass("hidden"),$("#form-review-success").addClass("hidden")},isPhoneValid:function(){return""===this.phone?"":this.phone_reg.test(this.phone)?"has-success":"has-error"},isEmailValid:function(){return""===this.email?"":this.email_reg.test(this.email)?"has-success":"has-error"},submitReviews:function(t){var a=this;if(!this.validate())return!1;var s=[];s.push({name:this.fullname,phone:this.phone,email:this.email,content:this.content,rating:this.rating,product_id:t}),console.log(JSON.stringify(s)),axios.post(url+"/api/submit-reviews",{body:s}).then((function(t){console.log(t.data),201===t.data?($("#form-review").addClass("hidden"),$("#form-review-success").removeClass("hidden"),a.reload++):swal({title:"Đã xảy ra lỗi!",text:"Xin vui lòng thử lại sau!",icon:"error",button:"Đồng ý"})}))},validate:function(){return!!(this.fullname&&this.phone&&this.content&&this.rating)||(this.fullname?""===this.phone?(this.$toast.top("Bạn chưa nhập số điện thoại"),this.$refs.phone.focus(),!1):this.phone_reg.test(this.phone)?""===this.email||this.email_reg.test(this.email)?this.content?this.rating?void 0:(this.$toast.top("Bạn chưa chọn số sao"),!1):(this.$toast.top("Bạn chưa nhập nội dung nhận xét"),this.$refs.content.focus(),!1):(this.$toast.top("Email chưa đúng."),this.$refs.email.focus(),!1):(this.$toast.top("Số điện thoại chưa đúng."),this.$refs.phone.focus(),!1):(this.$toast.top("Bạn chưa nhập tên"),this.$refs.fullname.focus(),!1))},openPopupReview:function(){$(".rating-sheet").addClass("modal-in"),$("html").addClass("with-modal-sheet"),$(".sheet-close").click((function(){$(".rating-sheet").removeClass("modal-in"),$("html").removeClass("with-modal-sheet")}))}}});new Swiper(".swiper-detail-product",{cssMode:!0,mousewheel:!0,keyboard:!0,pagination:{el:".swiper-pagination-detail-product",dynamicBullets:!0,paginationClickable:!0},autoplay:{delay:5e3}})},80:function(t,a,s){"use strict";s.r(a);var e={data:function(){return{ratingAvg:"",totalReviews:0}},props:{product_id:Number,product_name:String},created:function(){this.getRatingAvg(),this.getTotalReviews()},methods:{getRatingAvg:function(){var t=this;axios.get(url+"/api/rating-avg/"+this.product_id).then((function(a){""!==a.data&&a.data>0&&(t.ratingAvg=a.data)}))},getTotalReviews:function(){var t=this;axios.get(url+"/api/total-reviews/"+this.product_id).then((function(a){""!==a.data&&a.data>0&&(t.totalReviews=a.data)}))}}},i=s(0),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"product-review segments"},[s("div",{staticClass:"row col-sm-12",staticStyle:{display:"inline-block"}},[s("div",{staticClass:"float-left"},[s("i",{class:0==t.ratingAvg?"far fa-star":t.ratingAvg>=1?"fas fa-star":"fas fa-star-half-alt",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:t.ratingAvg>1?t.ratingAvg>=2?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:t.ratingAvg>2?t.ratingAvg>=3?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:t.ratingAvg>3?t.ratingAvg>=4?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:t.ratingAvg>4?t.ratingAvg>=5?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}})]),t._v(" "),t.totalReviews>0?s("a",{staticClass:"float-left",attrs:{href:t._f("url_reviews")(t._f("change_to_slug")(this.product_name),this.product_id)}},[t._v("\n             (Xem "+t._s(t.totalReviews)+" nhận xét)\n        ")]):t._e()])])}),[],!1,null,null,null);a.default=r.exports},81:function(t,a,s){"use strict";s.r(a);var e={data:function(){return{attributes:[],color:"",height:"130px",position:"absolute",icon:"fa-chevron-circle-down",isMore:!0,text:"Xem thêm",weight:"",qty:0}},props:["description"],created:function(){var t=this,a=document.querySelector("#product_id").getAttribute("value");axios.get(url+"/api/attributes/"+a).then((function(a){if(t.attributes=a.data,t.attributes.size.length>0){var s=t.attributes.size[0].size,e=t.attributes.size[t.attributes.size.length-1].size;n.forEach((function(t){s==t.id&&(s=t.text.split("-")[0]),e==t.id&&(e=t.text.split("-")[1])})),t.weight=s+" - "+e}}))},filters:{format_material:function(t){var a="";return null!=t&&r.forEach((function(s){if(t==s.id)return a=s.text,!1})),a},format_origin:function(t){var a="";return null!=t&&i.forEach((function(s){if(t==s.id)return a=s.text,!1})),a}},methods:{viewMore:function(){this.isMore?(this.isMore=!1,this.height="auto",this.position="inherit",this.icon="fa-chevron-circle-up",this.text="Thu gọn"):(this.isMore=!0,this.height="130px",this.position="absolute",this.icon="fa-chevron-circle-down",this.text="Xem thêm")},selectSize:function(t){var a=this.weight;n.forEach((function(s){if(t==s.id)return a=s.text,!1})),this.weight=a}}},i=[{id:"-1",text:""},{id:"1",text:"Việt Nam"},{id:"2",text:"Trung Quốc"}],r=[{id:"-1",text:""},{id:"1",text:"Cotton"},{id:"2",text:"Kaki"},{id:"3",text:"Jeans"},{id:"4",text:"Thô"},{id:"5",text:"Voan"},{id:"6",text:"Lanh"},{id:"7",text:"đũi"},{id:"8",text:"Ren"},{id:"9",text:"PE"},{id:"10",text:"nylon"},{id:"11",text:"Nỉ"},{id:"12",text:"Len"}],n=[{id:"60",text:"3kg - 6kg"},{id:"73",text:"6kg - 8kg"},{id:"80",text:"8kg - 10kg"},{id:"90",text:"11kg - 13kg"},{id:"100",text:"14kg - 16kg"},{id:"110",text:"17kg - 18kg"},{id:"120",text:"19kg - 20kg"},{id:"130",text:"21kg - 23kg"},{id:"140",text:"24kg - 27kg"},{id:"150",text:"28kg - 32kg"},{id:"160",text:"33kg - 40kg"}],l=e,o=s(0),c=Object(o.a)(l,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"list"},[s("ul",[s("li",[s("a",{staticClass:"item-link item-content",attrs:{href:"javascript:void(0);"}},[s("div",{staticClass:"item-inner item-cell"},[s("div",{staticClass:"item-row"},[s("div",{staticClass:"item-cell "},[t._v("Màu sắc")]),t._v(" "),s("div",{staticClass:"item-cell"},[s("div",{staticClass:"color-choose"},t._l(t.attributes.colors,(function(a){return s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"radio",id:a.color,name:"color"},domProps:{value:a.color,checked:t._q(t.color,a.color)},on:{change:function(s){t.color=a.color}}}),t._v(" "),s("label",{attrs:{for:a.color}},[s("span",{style:t._f("format_color")(a.color)})])])})),0)])])])])]),t._v(" "),s("li",[s("a",{staticClass:"item-link item-content",attrs:{href:"javascript:void(0);"}},[s("div",{staticClass:"item-inner item-cell"},[s("div",{staticClass:"item-row"},[s("div",{staticClass:"item-cell "},[t._v("Size")]),t._v(" "),s("div",{staticClass:"item-cell"},[s("div",{staticClass:"size-choose"},t._l(t.attributes.size,(function(a){return s("div",[s("input",{attrs:{type:"radio",id:a.size,name:"size"},domProps:{value:a.size}}),t._v(" "),s("label",{attrs:{for:a.size}},[s("span",{domProps:{textContent:t._s(a.size)},on:{click:function(s){return t.selectSize(a.size)}}})])])})),0)])])])])]),t._v(" "),s("li",[s("a",{staticClass:"item-link item-content",attrs:{href:"javascript:void(0);"}},[s("div",{staticClass:"item-inner item-cell"},[s("div",{staticClass:"item-row"},[s("div",{staticClass:"item-cell "},[t._v("Cân nặng")]),t._v(" "),s("div",{staticClass:"item-cell"},[t._v(t._s(t.weight))])])])])]),t._v(" "),s("li",[s("a",{staticClass:"item-link item-content",attrs:{href:"javascript:void(0);"}},[s("div",{staticClass:"item-inner item-cell"},[s("div",{staticClass:"item-row"},[s("div",{staticClass:"item-cell "},[t._v("Chiều cao")]),t._v(" "),s("div",{staticClass:"item-cell"},[t._v(t._s(t.height))])])])])]),t._v(" "),t._m(0),t._v(" "),s("li",[s("a",{staticClass:"item-link item-content",attrs:{href:"javascript:void(0);"}},[s("div",{staticClass:"item-inner item-cell"},[s("div",{staticClass:"item-row"},[s("div",{staticClass:"item-cell "},[t._v("Chất liệu")]),t._v(" "),s("div",{staticClass:"item-cell"},[s("span",[t._v(t._s(t._f("format_material")(t.attributes.material)))])])])])])]),t._v(" "),s("li",[s("a",{staticClass:"item-link item-content",attrs:{href:"javascript:void(0);"}},[s("div",{staticClass:"item-inner item-cell"},[s("div",{staticClass:"item-row"},[s("div",{staticClass:"item-cell "},[t._v("Xuất xứ")]),t._v(" "),s("div",{staticClass:"item-cell"},[s("span",[t._v(t._s(t._f("format_origin")(t.attributes.origin)))])])])])])]),t._v(" "),t.description.length>0?s("li",[s("div",{staticStyle:{position:"relative","margin-bottom":"40px",overflow:"hidden"},style:{height:t.height}},[s("p",{staticStyle:{"font-size":"13px",color:"#333","margin-top":"10px","margin-bottom":"10px"}},[t._v("Mô tả")]),t._v(" "),s("div",{staticClass:"description",staticStyle:{"font-size":"13px",color:"#333"},domProps:{innerHTML:t._s(t.description)}}),t._v(" "),s("div",{staticStyle:{"font-size":"13px","text-align":"center",height:"50px",display:"table",width:"100%",bottom:"0"},style:{position:t.position}},[s("div",{staticStyle:{display:"table-cell",background:"linear-gradient(rgba(255, 255, 255, 0.7) 10%, rgb(255, 255, 255))","vertical-align":"middle"}},[s("a",{staticClass:"btn btn-info",staticStyle:{color:"#fff","font-size":"13px",background:"var(--main-color)"},attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.viewMore()}}},[t._v(t._s(t.text)+" "),s("i",{staticClass:"fas",class:t.icon})])])])])]):t._e()])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("a",{staticClass:"item-link item-content",attrs:{href:"javascript:void(0);"}},[a("div",{staticClass:"item-inner item-cell"},[a("div",{staticClass:"item-row"},[a("div",{staticClass:"item-cell "},[this._v("Số lượng")]),this._v(" "),a("div",{staticClass:"item-cell"},[a("div",{staticClass:"col-xl-9 col-lg-8 col-md-8 col-9"},[a("div",{staticClass:"custom-qty"},[a("button",{staticClass:"reduced items",attrs:{onclick:"var result = document.getElementById('qty1'); var qty1 = result.value; if( !isNaN( qty1 ) && qty1 > 1 ) result.value--;return false;",type:"button"}},[a("i",{staticClass:"fa fa-minus"})]),this._v(" "),a("input",{staticClass:"input-text qty",attrs:{type:"text",title:"Qty",value:"1",maxlength:"8",id:"qty1",name:"qty"}}),this._v(" "),a("button",{staticClass:"increase items",attrs:{onclick:"var result = document.getElementById('qty1'); var qty1 = result.value; if( !isNaN( qty1 )) result.value++;return false;",type:"button"}},[a("i",{staticClass:"fa fa-plus"})])])])])])])])])}],!1,null,null,null);a.default=c.exports},82:function(t,a,s){"use strict";s.r(a);var e={data:function(){return{products:"",isFinished:!1,row:0,rowperpage:10,url:"",submit:!1}},created:function(){this.url=url,this.getProducts()},methods:{getProducts:function(){var t=this,a=document.querySelector("#cat_id").getAttribute("value"),s=document.querySelector("#product_id").getAttribute("value"),e=document.querySelector("#type_id").getAttribute("value");this.submit=!0,axios.post(url+"/api/relate",{product_id:s,cat_id:a,type:e,row:this.row,rowperpage:this.rowperpage}).then((function(a){if(console.log(a.data),""!==a.data&&a.data.length>0)if(t.row+=t.rowperpage,t.products.length>0){t.buttonText="Loading ...";var s=t;setTimeout((function(){s.buttonText="Xem thêm";for(var t=0;t<a.data.length;t++)s.products.push(a.data[t]);s.submit=!1}),500)}else t.products=a.data,t.submit=!1;else t.buttonText="Không có thêm sản phẩm.",t.isFinished=!0,t.submit=!1}))}},mounted:function(){this.swiper=new window.Swiper(".swiper-container",{cssMode:!0,mousewheel:!0,keyboard:!0})}},i=s(0),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"related-products segments no-pd-b"},[t._m(0),t._v(" "),s("div",{staticClass:"swiper-container swiper-relate-product"},[s("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(a){return s("div",{staticClass:"swiper-slide",staticStyle:{"margin-right":"15px"}},[s("div",{staticClass:"content content-shadow-product"},[s("a",{attrs:{href:t._f("url_product")(t._f("change_to_slug")(a.name),a.id)}},[s("div",{staticClass:"image"},[s("img",{attrs:{src:t._f("format_image")(a.image),alt:a.name}})]),t._v(" "),s("div",{staticClass:"text"},[s("p",{staticClass:"title-product title-product-center",domProps:{textContent:t._s(a.name)}}),t._v(" "),s("div",{staticClass:"float-left col-md-12 col-lg-12 no-padding"},[s("i",{class:0==a.rating?"far fa-star":a.rating>=1?"fas fa-star":"fas fa-star-half-alt",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:a.rating>1?a.rating>=2?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:a.rating>2?a.rating>=3?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:a.rating>3?a.rating>=4?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:a.rating>4?a.rating>=5?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),a.reviews>0?s("span",{staticStyle:{"margin-left":"5px",color:"gray"}},[t._v("("+t._s(a.reviews)+")")]):t._e()]),t._v(" "),s("p",{staticClass:"price"},[t._v(t._s(t._f("formatPrice")(a.retail)))])])])])])})),0)])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"section-title"},[a("h3",[this._v("Sản phẩm tương tự")])])}],!1,null,null,null);a.default=r.exports},83:function(t,a,s){"use strict";s.r(a);var e={data:function(){return{products:[],url:"",swiper:null,isFinished:!1,row:0}},created:function(){this.url=url,this.getProducts(10)},methods:{getProducts:function(t){var a=this,s=document.querySelector("#cat_id").getAttribute("value"),e=document.querySelector("#product_id").getAttribute("value"),i=document.querySelector("#type_id").getAttribute("value");this.submit=!0,axios.post(url+"/api/recommend",{product_id:e,cat_id:s,type:i,row:this.row,rowperpage:t}).then((function(s){if(console.log(s.data),""!==s.data&&s.data.length>0)if(a.row+=t,a.products.length>0){a.buttonText="Loading ...";var e=a;setTimeout((function(){e.buttonText="Xem thêm";for(var t=0;t<s.data.length;t++)e.products.push(s.data[t]);e.submit=!1}),500)}else a.products=s.data,a.submit=!1;else a.buttonText="Không có thêm sản phẩm.",a.isFinished=!0,a.submit=!1}))}},mounted:function(){this.swiper=new window.Swiper(".swiper-container",{cssMode:!0,mousewheel:!0,keyboard:!0})}},i=s(0),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"recommended-you"},[t._m(0),t._v(" "),s("div",{staticClass:"swiper-container swiper-relate-product"},[s("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(a){return s("div",{staticClass:"swiper-slide",staticStyle:{"margin-right":"15px"}},[s("div",{staticClass:"content content-shadow-product"},[s("a",{attrs:{href:t._f("url_product")(t._f("change_to_slug")(a.name),a.id)}},[s("div",{staticClass:"image"},[s("img",{attrs:{src:t._f("format_image")(a.image),alt:a.name}})]),t._v(" "),s("div",{staticClass:"text"},[s("p",{staticClass:"title-product title-product-center",domProps:{textContent:t._s(a.name)}}),t._v(" "),s("div",{staticClass:"float-left col-md-12 col-lg-12 no-padding"},[s("i",{class:0==a.rating?"far fa-star":a.rating>=1?"fas fa-star":"fas fa-star-half-alt",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:a.rating>1?a.rating>=2?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:a.rating>2?a.rating>=3?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:a.rating>3?a.rating>=4?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),s("i",{class:a.rating>4?a.rating>=5?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#ffc107"}}),t._v(" "),a.reviews>0?s("span",{staticStyle:{"margin-left":"5px",color:"gray"}},[t._v("("+t._s(a.reviews)+")")]):t._e()]),t._v(" "),s("p",{staticClass:"price"},[t._v(t._s(t._f("formatPrice")(a.retail)))])])])])])})),0)])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"section-title"},[a("h3",[this._v("Có thể bạn quan tâm")])])}],!1,null,null,null);a.default=r.exports},84:function(t,a,s){"use strict";s.r(a);var e={data:function(){return{reviews:"",ratingAvg:0,ratingDetail:"",percent_5_star:0,number_5_star:0,percent_4_star:0,number_4_star:0,percent_3_star:0,number_3_star:0,percent_2_star:0,number_2_star:0,percent_1_star:0,number_1_star:0,url:"",total_rating:0,product_name:"",isFinished:!1,row:0,buttonText:"Xem thêm",submit:!1,hidden:!1}},props:["product_id"],created:function(){this.url=url,this.getAllReviews(3),this.getRatingAvg(),this.getRatingNumberDetail()},methods:{getRatingNumberDetail:function(){var t=this;axios.get(url+"/api/rating-number-detail/"+this.product_id).then((function(a){t.ratingDetail=a.data;for(var s=0;s<t.ratingDetail.length;s++){var e=t.ratingDetail[s],i=Number(e.rating);1==i?(t.total_rating+=Number(e.number),t.number_1_star=Number(e.number),t.percent_1_star=Number(e.percent)):2==i?(t.total_rating+=Number(e.number),t.number_2_star=Number(e.number),t.percent_2_star=Number(e.percent)):3==i?(t.total_rating+=Number(e.number),t.number_3_star=Number(e.number),t.percent_3_star=Number(e.percent)):4==i?(t.total_rating+=Number(e.number),t.number_4_star=Number(e.number),t.percent_4_star=Number(e.percent)):5==i&&(t.total_rating+=Number(e.number),t.number_5_star=Number(e.number),t.percent_5_star=Number(e.percent))}}))},getRatingAvg:function(){var t=this;axios.get(url+"/api/rating-avg/"+this.product_id).then((function(a){""!==a.data&&a.data>0&&(t.ratingAvg=a.data)}))},getAllReviews:function(t){var a=this;axios.post(url+"/api/reviews",{product_id:this.product_id,row:this.row,rowperpage:t}).then((function(s){if(console.log(s.data),""!==s.data&&s.data.length>0)if(a.row+=t,a.reviews.length>0){a.buttonText="Loading ...";var e=a;setTimeout((function(){e.buttonText="Xem thêm";for(var t=0;t<s.data.length;t++)e.reviews.push(s.data[t]);e.hidden=!1}),500)}else a.reviews=s.data,s.data.length>0&&(a.product_name=s.data[0].product_name),a.hidden=!1;else a.buttonText="Không có thêm đánh giá.",a.isFinished=!0,a.hidden=!1}))}}},i=s(0),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"product-review segments"},[s("div",{staticClass:"row col-sm-12",staticStyle:{margin:"0",display:"inline-block",width:"100%",padding:"0px 0px 20px 0px"}},[s("div",{staticClass:"rating-block float-left",staticStyle:{padding:"20px 5px",width:"49%","text-align":"center"}},[s("h2",{staticClass:"bold padding-bottom-7",staticStyle:{"padding-bottom":"5px","font-size":"40px"}},[t._v(t._s(t.ratingAvg))]),t._v(" "),s("button",{staticClass:"btn btn-sm",class:t.ratingAvg>=1?"btn-warning ":"btn-default btn-grey",attrs:{type:"button","aria-label":"Left Align"}},[s("i",{class:t.ratingAvg>=1?"fas fa-star":"fas fa-star-half-alt",staticStyle:{color:"#fff"}})]),t._v(" "),s("button",{staticClass:"btn btn-sm",class:t.ratingAvg>1?"btn-warning":"btn-default btn-grey",attrs:{type:"button","aria-label":"Left Align"}},[s("i",{class:t.ratingAvg>1?t.ratingAvg>=2?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#fff"}})]),t._v(" "),s("button",{staticClass:"btn btn-sm",class:t.ratingAvg>2?"btn-warning":"btn-default btn-grey",attrs:{type:"button","aria-label":"Left Align"}},[s("i",{class:t.ratingAvg>2?t.ratingAvg>=3?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#fff"}})]),t._v(" "),s("button",{staticClass:"btn btn-sm",class:t.ratingAvg>3?"btn-warning":"btn-default btn-grey",attrs:{type:"button","aria-label":"Left Align"}},[s("i",{class:t.ratingAvg>3?t.ratingAvg>=4?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#fff"}})]),t._v(" "),s("button",{staticClass:"btn btn-sm",class:t.ratingAvg>4?"btn-warning":"btn-default btn-grey",attrs:{type:"button","aria-label":"Left Align"}},[s("i",{class:t.ratingAvg>4?t.ratingAvg>=5?"fas fa-star":"fas fa-star-half-alt":"far fa-star",staticStyle:{color:"#fff"}})])]),t._v(" "),s("div",{staticClass:"rating-breakdown float-right",staticStyle:{width:"50%",padding:"0 5px"}},[s("div",{staticClass:"float-left"},[t._m(0),t._v(" "),s("div",{staticClass:"float-left",staticStyle:{width:"110px"}},[s("div",{staticClass:"progress",staticStyle:{height:"9px",margin:"8px 0"}},[s("div",{staticClass:"progress-bar bg-success",style:{width:t.percent_5_star+"%"},attrs:{role:"progressbar","aria-valuenow":"5","aria-valuemin":"0","aria-valuemax":"5"}},[s("span",{staticClass:"sr-only"},[t._v("80% Complete (danger)")])])])]),t._v(" "),s("div",{staticClass:"float-right",staticStyle:{"margin-left":"5px","margin-top":"5px"}},[t._v(t._s(t.number_5_star))])]),t._v(" "),s("div",{staticClass:"float-left"},[t._m(1),t._v(" "),s("div",{staticClass:"float-left",staticStyle:{width:"110px"}},[s("div",{staticClass:"progress",staticStyle:{height:"9px",margin:"8px 0"}},[s("div",{staticClass:"progress-bar bg-primary",style:{width:t.percent_4_star+"%"},attrs:{role:"progressbar","aria-valuenow":"5","aria-valuemin":"0","aria-valuemax":"5"}},[s("span",{staticClass:"sr-only"},[t._v("80% Complete (danger)")])])])]),t._v(" "),s("div",{staticClass:"float-right",staticStyle:{"margin-left":"5px","margin-top":"5px"}},[t._v(t._s(t.number_4_star))])]),t._v(" "),s("div",{staticClass:"float-left"},[t._m(2),t._v(" "),s("div",{staticClass:"float-left",staticStyle:{width:"110px"}},[s("div",{staticClass:"progress",staticStyle:{height:"9px",margin:"8px 0"}},[s("div",{staticClass:"progress-bar bg-info",style:{width:t.percent_3_star+"%"},attrs:{role:"progressbar","aria-valuenow":"5","aria-valuemin":"0","aria-valuemax":"5"}},[s("span",{staticClass:"sr-only"},[t._v("80% Complete (danger)")])])])]),t._v(" "),s("div",{staticClass:"float-right",staticStyle:{"margin-left":"5px","margin-top":"5px"}},[t._v(t._s(t.number_3_star))])]),t._v(" "),s("div",{staticClass:"float-left"},[t._m(3),t._v(" "),s("div",{staticClass:"float-left",staticStyle:{width:"110px"}},[s("div",{staticClass:"progress",staticStyle:{height:"9px",margin:"8px 0"}},[s("div",{staticClass:"progress-bar bg-warning",style:{width:t.percent_2_star+"%"},attrs:{role:"progressbar","aria-valuenow":"5","aria-valuemin":"0","aria-valuemax":"5"}},[s("span",{staticClass:"sr-only"},[t._v("80% Complete (danger)")])])])]),t._v(" "),s("div",{staticClass:"float-right",staticStyle:{"margin-left":"5px","margin-top":"5px"}},[t._v(t._s(t.number_2_star))])]),t._v(" "),s("div",{staticClass:"float-left"},[t._m(4),t._v(" "),s("div",{staticClass:"float-left",staticStyle:{width:"110px"}},[s("div",{staticClass:"progress",staticStyle:{height:"9px",margin:"8px 0"}},[s("div",{staticClass:"progress-bar bg-danger",style:{width:t.percent_1_star+"%"},attrs:{role:"progressbar","aria-valuenow":"5","aria-valuemin":"0","aria-valuemax":"5"}},[s("span",{staticClass:"sr-only"},[t._v("80% Complete (danger)")])])])]),t._v(" "),s("div",{staticClass:"float-right",staticStyle:{"margin-left":"5px","margin-top":"5px"}},[t._v(t._s(t.number_1_star))])])])]),t._v(" "),t.ratingAvg>0?s("div",t._l(t.reviews,(function(a){return s("div",[s("div",{staticClass:"content"},[s("div",{staticClass:"text"},[s("h6",[t._v(t._s(a.name))]),t._v(" "),s("ul",{staticClass:"rate-product"},[s("li",[s("i",{staticClass:"fa-star",class:a.rating>="1"?"fas":"far"})]),t._v(" "),s("li",[s("i",{staticClass:"fa-star",class:a.rating>="2"?"fas":"far"})]),t._v(" "),s("li",[s("i",{staticClass:"fa-star",class:a.rating>="3"?"fas":"far"})]),t._v(" "),s("li",[s("i",{staticClass:"fa-star",class:a.rating>="4"?"fas":"far"})]),t._v(" "),s("li",[s("i",{staticClass:"fa-star",class:a.rating>="5"?"fas":"far"})])]),t._v(" "),s("p",{staticClass:"date"},[t._v("\n                            "+t._s(t._f("moment")(a.created_date,"from","now"))+"\n                        ")]),t._v(" "),s("p",{domProps:{textContent:t._s(a.content)}})])]),t._v(" "),s("div",{staticClass:"divider-line-half"})])})),0):s("div",{staticClass:"center"},[s("i",{staticClass:"fas fa-comments",staticStyle:{"font-size":"60px",color:"rgba(185, 182, 182, 0.25)"}}),t._v(" "),s("p",{staticClass:"center"},[t._v("Hãy trở thành người đầu tiên đánh giá sản phẩm này.")])]),t._v(" "),t.total_rating>3?s("div",{staticClass:"view-all-review"},[s("a",{attrs:{href:t._f("url_reviews")(t._f("change_to_slug")(t.product_name),this.product_id)}},[t._v("Xem tất cả")])]):t._e()])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"float-left",staticStyle:{width:"30px","line-height":"1"}},[a("div",{staticStyle:{height:"9px",margin:"5px 0"}},[this._v("5 "),a("i",{staticClass:"far fa-star"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"float-left",staticStyle:{width:"30px","line-height":"1"}},[a("div",{staticStyle:{height:"9px",margin:"5px 0"}},[this._v("4 "),a("i",{staticClass:"far fa-star"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"float-left",staticStyle:{width:"30px","line-height":"1"}},[a("div",{staticStyle:{height:"9px",margin:"5px 0"}},[this._v("3 "),a("i",{staticClass:"far fa-star"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"float-left",staticStyle:{width:"30px","line-height":"1"}},[a("div",{staticStyle:{height:"9px",margin:"5px 0"}},[this._v("2 "),a("i",{staticClass:"far fa-star"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"float-left",staticStyle:{width:"30px","line-height":"1"}},[a("div",{staticStyle:{height:"9px",margin:"5px 0"}},[this._v("1 "),a("i",{staticClass:"far fa-star"})])])}],!1,null,null,null);a.default=r.exports}});