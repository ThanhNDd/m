<template>
    <section class="section latest-blog outer-bottom-vs">
        <div class="section-title"><h3>Blog</h3></div>
        <div class="blog-slider-container outer-top-xs">
            <div class="owl-carousel blog-slider1 custom-carousel">
                <div class="item" v-for="post in posts">
                    <div class="blog-post">
                        <div class="blog-post-image">
                            <div class="image">
                                <a v-bind:href="post.link" target="_blank">
                                    <div :style="{'background-image':'url('+post._embedded['wp:featuredmedia']['0'].source_url+')'}"></div>
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
<!--                            <span class="info">By Jone Doe &nbsp;|&nbsp; 21 March 2016 </span>-->
                            <p class="text" v-html="post.excerpt.rendered.substring(0,150) +'...'"></p>
                            <a v-bind:href="post.link" target="_blank" class="lnk btn btn-primary">
                                Xem thêm
                            </a>
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
                posts: '',
                url: '',
                rowperpage: 4
            }
        },
        created() {
            this.url = url;
            this.getPosts(this.rowperpage);
        },
        // filters: {
        //     subStr: function(string) {
        //         return string.substring(0,150) + '...';
        //     }
        // },
        methods: {
            getPosts: function () {
                return new Promise((resolve, reject) => {
                    axios.post(url + '/api/blog', {
                        rowperpage: 4
                    }).then(response => {
                        this.posts = response.data;
                        resolve();
                    }).catch(error => reject(error));
                });
            }
        },
        mounted() {
            this.getPosts().then(() => {
                let owl = $(this);
                let  itemPerLine = owl.data('item');
                if(!itemPerLine){
                    itemPerLine = 2;
                }
                $('.blog-slider1').owlCarousel({
                    items : itemPerLine,
                    itemsDesktopSmall :[979,2],
                    itemsDesktop : [1199,2],
                    navigation : true,
                    pagination: false,
                    navigationText: ["", ""]
                });
            })
        }
    }
</script>
<style scoped>
    .blog-post-image .image a div {
        height: 212px;
        background-position-y: center;
        background-position-x: center;
        border-radius: 10px;
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .blog-slider-container .blog-slider1 .blog-post-info .name {
        font-size: 18px;
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        line-height: 1.4em;
    }
    .blog-slider-container .blog-slider1 .blog-post-info .name a {
        color: #555;
    }
    .blog-slider-container .blog-slider1 .blog-post-info .text {
        color: #434343;
        font-size: 13px;
    }
</style>