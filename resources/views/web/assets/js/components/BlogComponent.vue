<template>
  <section class="section latest-blog outer-bottom-vs">
    <h3 class="section-title">Blog</h3>
    <div class="blog-slider-container outer-top-xs">
      <div class="owl-carousel blog-slider custom-carousel" style="opacity: 1; display: block;">
        <div class="item" v-for="post in posts">
          <div class="blog-post">
            <div class="blog-post-image">
              <div class="image">
                <a v-bind:href="post.link">
                  <img v-bind:src="post._embedded['wp:featuredmedia']['0'].source_url" alt="">
                </a>
              </div>
            </div>
            <!-- /.blog-post-image -->
            <div class="blog-post-info text-left">
              <h3 class="name">
                <a v-bind:href="post.link">
                  {{post.title.rendered}}
                </a>
              </h3>
              <p class="text">
                {{post.excerpt.rendered}}
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
            }
        },
        created() {
            this.url = url;
            this.getProducts();
        },
        methods: {
            getProducts: function () {
                axios.get('https://blog.shopmein.vn/wp-json/wp/v2/posts?_embed&per_page=3',{
                    headers: {
                        'Access-Control-Allow-Headers': '*'
                    }
                })
                    .then(response => {
                    console.log(response.data);
                    this.posts = response.data;
                });
            }
        },
    }
</script>
