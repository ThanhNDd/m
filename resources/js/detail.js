// import Lingallery from 'lingallery';

// Vue.component('lingallery', Lingallery);
Vue.component('rating-component', require('./components/RatingComponent.vue').default);
Vue.component('attributes-component', require('./components/AttributeComponent.vue').default);
Vue.component('relate-product-component', require('./components/RelateProductComponent.vue').default);
Vue.component('recommend-product-component', require('./components/RecommendComponent.vue').default);
Vue.component('reviews-component', require('./components/ReviewsComponent.vue').default);
Vue.component('viewed-product-component', require('./components/ViewedProductComponent.vue').default);
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
      submit: false
    }
  },
  methods: {
    addToCart: function (id, name, price, image) {
      let color = document.querySelector('input[name=color]:checked');
      if (color == null) {
        this.$toast.top('Bạn chưa chọn màu');
        return;
      }
      let size = document.querySelector('input[name=size]:checked');
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
        "size": size.value,
      });
      this.storeInCart();
    },
    buyNow: function (id, name, price, image) {
      this.type = "buyNow";
      this.addToCart(id, name, price, image);
    },
    storeInCart: function () {
      axios.post(url +"/api/cart", {
        body: this.products
      }).then(response => {
        this.$toast.top('Đã thêm vào giỏ hàng');
        document.querySelector('.cart_number').innerHTML = '<span class="badge badge-danger">' + response.data.length + '</span>';
        if(this.type === "buyNow") {
          window.location.href =  url +  "/thanh-toan.html";
        }
      })
    },
    cancelReview: function () {
      this.fullname = '';
      this.phone = '';
      this.email = '';
      this.content = '';
      this.rating = 0;
      this.$refs.fullname.focus();
      $("#form-review").removeClass('hidden');
      $("#form-review-success").addClass('hidden');
    },
    isPhoneValid: function() {
      return (this.phone === "")? "" : (this.phone_reg.test(this.phone)) ? 'has-success' : 'has-error';
    },
    isEmailValid: function() {
      return (this.email === "")? "" : (this.email_reg.test(this.email)) ? 'has-success' : 'has-error';
    },
    submitReviews: function (product_id) {
      if(!this.validate()) {
        return false;
      }
      this.submit = true;
      let review = [];
      review.push({
        "name": this.fullname,
        "phone": this.phone,
        "email": this.email,
        "content" : this.content,
        "rating" : this.rating,
        "product_id": product_id
      });
      console.log(JSON.stringify(review));
      axios.post(url + "/api/submit-reviews", {
        body: review
      }).then(response => {
        console.log(response.data);
        this.submit = false;
        if(response.data === 201) {
          $("#form-review").addClass('hidden');
          $("#form-review-success").removeClass('hidden');
          this.reload++;
        } else {
          swal({
            title: "Đã xảy ra lỗi!",
            text: "Xin vui lòng thử lại sau!",
            icon: "error",
            button: "Đồng ý",
          });
        }
      })
    },
    validate: function () {
      if(this.fullname && this.phone && this.content && this.rating) {
        return true;
      }
      if(!this.fullname) {
        this.$toast.top('Bạn chưa nhập tên');
        this.$refs.fullname.focus();
        return false;
      }
      if(this.phone === '') {
        this.$toast.top('Bạn chưa nhập số điện thoại');
        this.$refs.phone.focus();
        return false;
      }  else if(!this.phone_reg.test(this.phone)) {
        this.$toast.top('Số điện thoại chưa đúng.');
        this.$refs.phone.focus();
        return false;
      }
      if(this.email !== '' && !this.email_reg.test(this.email)) {
        this.$toast.top('Email chưa đúng.');
        this.$refs.email.focus();
        return false;
      }
      if(!this.content) {
        this.$toast.top('Bạn chưa nhập nội dung nhận xét');
        this.$refs.content.focus();
        return false;
      }
      if(!this.rating) {
        this.$toast.top('Bạn chưa chọn số sao');
        return false;
      }
    },
    openPopupReview: function () {
      $(".rating-sheet").addClass("modal-in");
      $("html").addClass("with-modal-sheet");
      $(".sheet-close").click(function() {
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
    delay: 5000,
  },
});
