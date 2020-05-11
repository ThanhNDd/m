import Lingallery from 'lingallery';

Vue.component('lingallery', Lingallery);

Vue.component('sidebar-component', require('./components/sidebarComponent.vue').default);
Vue.component('rating-component', require('./components/RatingComponent.vue').default);
Vue.component('status-component', require('./components/StatusComponent.vue').default);
Vue.component('attributes-component', require('./components/AttributeComponent.vue').default);
Vue.component('relate-product-component', require('./components/RelateProductComponent.vue').default);
// Vue.component('reviews-component', require('./components/ReviewsComponent.vue').default);
Vue.component('recommend-product-component', require('./components/RecommendComponent.vue').default);
Vue.component('recently-product-component', require('./components/RecentlyProductComponent.vue').default);


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
      phone_reg: /^((09|03|07|08|05)+([0-9]{8})\b)$/,
      reload: 0,
      items: []
    }
  },
  methods: {
    addToCart: function (id, name, price, image) {
      let color = document.querySelector('input[name=color]:checked');
      if (color == null) {
        this.$toast.error({
          title:'Lỗi',
          message:'Bạn chưa chọn màu'
        });
        return;
      }
      let size = document.querySelector('input[name=size]:checked');
      if (size == null) {
        this.$toast.error({
          title:'Lỗi',
          message:'Bạn chưa chọn size'
        });
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
      axios.post(url + "/api/cart", {
        body: this.products
      }).then(response => {
        this.$toast.success({
          title:'Thông báo',
          message:'Sản phẩm đã được thêm vào giỏ hàng'
        });
        document.querySelector('.cart_number').innerHTML = '<span class="badge badge-danger" style="background: #fdd922;color: #666;">' + response.data.length + '</span>';
        if (this.type === "buyNow") {
          window.location.href = url + "/thanh-toan.html";
        }
      })
    },
  }
});
