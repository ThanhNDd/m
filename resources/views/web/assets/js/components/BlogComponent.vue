<template>
  <section class="section latest-blog outer-bottom-vs">
    <h3 class="section-title">
      <a href="https://blog.shopmein.vn" target="_blank">
        Blog
      </a>
    </h3>
    <div class="blog-slider-container outer-top-xs">
      <div class="owl-carousel blog-slider custom-carousel" style="opacity: 1; display: block;">
        <div class="item" v-for="post in posts">
          <div class="blog-post">
            <div class="blog-post-image">
              <div class="image">
                <a v-bind:href="post.link" target="_blank">
                  <div v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: url + '/public/web/images/loading.svg' }">
                    <img v-bind:src="post._embedded['wp:featuredmedia']['0'].source_url" alt="">
                  </div>
                </a>
              </div>
            </div>
            <!-- /.blog-post-image -->
            <div class="blog-post-info text-left">
              <h3 class="name">
                <a v-bind:href="post.link" target="_blank">
                  {{post.title.rendered}}
                </a>
              </h3>
              <p class="text" v-html="post.excerpt.rendered.substring(0,150) +'...'">
              </p>
            </div>
            <!-- /.blog-post-info -->
          </div>
          <!-- /.blog-post -->
        </div>
        <!-- /.item -->
      </div>
      <!-- /.owl-carousel -->
    </div>
    <!-- /.blog-slider-container -->
  </section>
</template>

<script>
    export default {
        data() {
            return {
                posts: [],
                url: '',
                rowperpage: 3
            }
        },
        created() {
            this.url = url;
            this.getProducts();
        },
        filters: {
            subStr: function(string) {
                return string.substring(0,150) + '...';
            }
        },
        methods: {
            getProducts: function () {
                axios.post(url + '/blog', {
                  rowperpage: this.rowperpage
                }).then(response => {
                    console.log(response.data);
                    this.posts = response.data;
                });
            }
        }
    }
</script>
