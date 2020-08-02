// import Lingallery from 'lingallery';

// Vue.component('lingallery', Lingallery);
Vue.component('rating-component', require('./components/RatingComponent.vue').default);
Vue.component('attributes-component', require('./components/AttributeComponent.vue').default);
Vue.component('relate-product-component', require('./components/RelateProductComponent.vue').default);
Vue.component('recommend-product-component', require('./components/RecommendComponent.vue').default);
Vue.component('reviews-component', require('./components/ReviewsComponent.vue').default);
Vue.component('viewed-product-component', require('./components/ViewedProductComponent.vue').default);
Vue.component('slider-component', require('./components/SliderComponent.vue').default);
Vue.component('form-reviews-component', require('./components/FormReviewsComponent.vue').default);
// Vue.component('sidebar-component', require('./components/sidebarComponent.vue').default);
// Vue.component('rating-component', require('./components/RatingComponent.vue').default);
// Vue.component('status-component', require('./components/StatusComponent.vue').default);
// Vue.component('attributes-component', require('./components/AttributeComponent.vue').default);
// Vue.component('relate-product-component', require('./components/RelateProductComponent.vue').default);
// // Vue.component('reviews-component', require('./components/ReviewsComponent.vue').default);
// Vue.component('recommend-product-component', require('./components/RecommendComponent.vue').default);
// Vue.component('recently-product-component', require('./components/RecentlyProductComponent.vue').default);


const detail = new Vue({
    el: '#detail',
    data() {
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
            phone_reg : /^((09|03|07|08|05)+([0-9]{8})\b)$/,
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
            isReviewed: false,
        }
    },
    created() {
        this.checkLogged();
        // this.checkReviewed();
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
        checkLogged: function() {
            axios.post(url + '/api/check-logged')
                .then(response => {
                    if(response.data !== 'not_exist_user') {
                        this.isLogged = true;
                        this.customer_name = response.data.name;
                        this.customer_id = response.data.id;
                        this.checkReviewed();
                    } else {
                        this.isLogged = false;
                        this.isReviewed = false;
                    }
                }).catch(e =>{
                this.isLogged = false;
            });
        },
        checkReviewed: function() {
            let product_id = $("#product_id").val();
            axios.post(url + '/api/check-reviewed',{
                customer_id: this.customer_id,
                product_id: product_id
            }).then(response => {
                if(response.data > 0) {
                    this.isReviewed = true;
                }
            }).catch(e =>{
                this.isReviewed = false;
            });
        },
        openPopupReview: function () {
            this.checkLogged();
            $(".rating-sheet").addClass("modal-in");
            $("html").addClass("with-modal-sheet");
            $(".sheet-close").click(function() {
                $(".rating-sheet").removeClass("modal-in");
                $("html").removeClass("with-modal-sheet");

            });
        },

        // checkReviewed: function() {
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
});
// new Swiper('.swiper-detail-product', {
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
