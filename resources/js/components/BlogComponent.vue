<template>
  <div class="blog segments-bottom segments no-pd-b">
    <div class="container">
      <div class="section-title">
        <h3>Blog
          <a href="https://blog.shopmein.vn" class="see-all-link" target="_blank">Xem thêm &raquo;</a>
        </h3>
      </div>
      <div class="row">
        <div class="col-50" v-for="post in posts">
          <div class="content content-shadow-product">
            <div class="image">
              <a v-bind:href="post.link" target="_blank" v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }">
                <img v-bind:data-src="post._embedded['wp:featuredmedia']['0'].source_url" alt="">
              </a>
            </div>
            <div class="text">
              <a v-bind:href="post.link" target="_blank">
                {{post.title.rendered}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: [],
                url: '',
                rowperpage: 2,
            }
        },
        created() {
            this.url = url;
            this.getProducts();
        },
        methods: {
            getProducts: function () {
                axios.post(url + '/blog', {
                  rowperpage: this.rowperpage,
                })
                    .then(response => {
                    console.log(response.data);
                    this.posts = response.data;
                });
            }
        },
    }
</script>
