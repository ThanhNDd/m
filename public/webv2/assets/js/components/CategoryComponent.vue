<template>
  <div class="search-result-container ">
    <div id="myTabContent" class="tab-content category-list ml-0 mr-0">
      <div class="tab-pane active " id="grid-container">
        <div class="category-product" v-if="products.length > 0">
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3" v-for="product in products">
              <div class="item">
                <div class="products">
                  <div class="product">
                    <div class="product-image">
                      <div class="image">
                        <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                          <div v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }">
                            <img v-bind:data-src="!product.image || product.image === '[]' ? product.variant_image : product.image | format_image('400x400')" v-bind:alt="product.name">
                          </div>
                        </a>
                      </div>
                    </div>
                    <!-- /.product-image -->
                    <div class="product-info text-left">
                      <h3 class="name">
                        <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                          {{product.name}}
                        </a>
                      </h3>
                      <div class="float-left col-md-12 col-lg-12 no-padding">
                        <i v-bind:class="product.rating == 0 ? 'far fa-star' : (product.rating >= 1 ? 'fas fa-star' : 'fas fa-star-half-alt')" style="color:#ffc107;"></i>
                        <i v-bind:class="product.rating > 1 ? (product.rating >= 2 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                        <i v-bind:class="product.rating > 2 ? (product.rating >= 3 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                        <i v-bind:class="product.rating > 3 ? (product.rating >= 4 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                        <i v-bind:class="product.rating > 4 ? (product.rating >= 5 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                        <span style="margin-left: 5px; color: gray;" v-if="product.reviews > 0">({{ product.reviews }})</span>
                      </div>
                      <div class="product-price">
                        <span class="price" v-html="$options.filters.formatPrice(product.retail)"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style="text-align: center" v-else>Không có sản phẩm nào</p>
      </div>
      <div class="tab-pane" id="list-container">
        <div class="category-product" v-if="products.length > 0">
          <div class="category-product-inner" v-for="product in products">
            <div class="products">
              <div class="product-list product">
                <div class="row product-list-rw">
                  <div class="col col-sm-3 col-lg-3">
                    <div class="product-image">
                      <div class="image">
                        <img v-bind:src="!product.image || product.image === '[]' ? product.variant_image : product.image | format_image" v-bind:alt="product.name">
                      </div>
                    </div>
                    <!-- /.product-image -->
                  </div>
                  <!-- /.col -->
                  <div class="col col-sm-9 col-lg-9">
                    <div class="product-info">
                      <h3 class="name">
                        <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                        {{product.name}}
                        </a>
                      </h3>
                      <div class="float-left col-md-12 col-lg-12 no-padding">
                        <i v-bind:class="product.rating == 0 ? 'far fa-star' : (product.rating >= 1 ? 'fas fa-star' : 'fas fa-star-half-alt')" style="color:#ffc107;"></i>
                        <i v-bind:class="product.rating > 1 ? (product.rating >= 2 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                        <i v-bind:class="product.rating > 2 ? (product.rating >= 3 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                        <i v-bind:class="product.rating > 3 ? (product.rating >= 4 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                        <i v-bind:class="product.rating > 4 ? (product.rating >= 5 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                        <span style="margin-left: 5px; color: gray;" v-if="product.reviews > 0">({{ product.reviews }})</span>
                      </div>
                      <div class="product-price">
                        <span class="price" v-html="$options.filters.formatPrice(product.retail)"></span>
                      </div>
                      <!-- /.product-price -->
                      <div class="description m-t-10">{{product.short_description}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style="text-align: center" v-else>Không có sản phẩm nào</p>
      </div>
    </div>
    <paginate v-if="products.length>0"
      :page-count="total"
      :page-range="pageRange"
      :margin-pages="2"
      :prev-text="prev"
      :next-text="next"
      :click-handler="getProducts"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-class="'page-item'"
      :prev-link-class="'page-link'"
       :next-class="'page-item'"
       :next-link-class="'page-link'">
    </paginate>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                products: '',
                isFinished: false,
                row: 0,
                rowperpage: 16,
                url: '',
                total: 0,
                pageRange: 3,
                prev: '<i class="fa fa-angle-left"></i>',
                next: '<i class="fa fa-angle-right"></i>'
            }
        },
        created() {
            this.url = url;
            this.getProducts(1, false);
            this.getTotal();
        },
        methods: {
            getTotal: function() {
                let pathname = window.location.pathname;
                pathname = pathname.split('/');
                pathname = pathname[pathname.length-1];
                axios.get(url + '/api/danh-muc/'+pathname)
                    .then(response => {
                    if(response.data > 0) {
                        this.total = Math.ceil(response.data / this.rowperpage);
                    }
                });
            },
            getProducts: function (pageNum, scroll = true) {
                let pathname = window.location.pathname;
                pathname = pathname.split('/');
                pathname = pathname[pathname.length-1];
                this.row = (pageNum -1) * this.rowperpage;
                axios.post(url + '/api/danh-muc/'+pathname, {
                    row: this.row,
                    rowperpage: this.rowperpage
                }).then(response => {
                  // console.log(response.data);
                    if (response.data !== '' && response.data.length > 0) {
                        this.products = response.data;
                        if(scroll) {
                            this.scrollToTop();
                        }
                    }
                });
            },
            scrollToTop() {
                window.scrollTo({
                    top: 170,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        },
    }
</script>
