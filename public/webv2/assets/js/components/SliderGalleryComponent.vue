<template>
    <div class="product-item-holder size-big single-product-gallery small-gallery">
        <div id="owl-single-product1">
            <div class="single-product-gallery-item" v-bind:id="'slide'+(idx+1)" v-for="(img, idx) in all_images">
                <a v-bind:data-lightbox="'image-'+(idx+1)" data-title="Gallery" v-bind:href="img">
                    <img class="img-responsive" alt="" v-bind:src="img" v-bind:data-echo="img" />
                </a>
            </div><!-- /.single-product-gallery-item -->
        </div><!-- /.single-product-slider -->
        <div class="single-product-gallery-thumbs gallery-thumbs">
            <div id="owl-single-product-thumbnails1">
                <div class="item" v-for="(img, idx) in all_images">
                    <a class="horizontal-thumb active" data-target="#owl-single-product1" data-slide="1" v-bind:href="'#slide'+(idx+1)">
                        <img class="img-responsive" width="85" alt="" v-bind:src="img" v-bind:data-echo="img" />
                    </a>
                </div>
            </div><!-- /#owl-single-product-thumbnails -->
        </div><!-- /.gallery-thumbs -->
    </div><!-- /.single-product-gallery -->
</template>

<script>

    export default {
        data() {
            return {
                img: '',
                all_images: '',
                activeIndex: 0,
                url: '',
            }
        },
        created() {
            this.url = url;
            this.getImages();
        },
        methods: {
            getImages: function () {
                return new Promise((resolve, reject) => {
                    let id = document.querySelector('#product_id').getAttribute('value');
                    // this.submit = true;
                    axios.get(url + '/api/images/'+id, {
                        row: this.row,
                        rowperpage: 10
                    }).then(response => {
                        this.all_images = response.data;
                        resolve();
                    }).catch(error => reject(error));
                });
            },
        },
        mounted() {
            this.getImages().then(() => {
                $('#owl-single-product1').owlCarousel({
                    items:1,
                    itemsTablet:[768,2],
                    itemsDesktop : [1199,1]

                });
                $('#owl-single-product-thumbnails1').owlCarousel({
                    items: 5,
                    pagination: true,
                    rewindNav: true,
                    itemsTablet : [768, 4],
                    itemsDesktop : [1199,3]
                });
            })
        }
    };
</script>
<style>
    .single-product #owl-single-product-thumbnails1 .owl-controls {
        position: absolute;
        text-align: center;
        top: auto;
        width: 100%;
        margin-top: 20px;
    }
    .single-product #owl-single-product-thumbnails1 .owl-controls .owl-pagination .owl-page {
        display: inline-block;
    }
    #owl-single-product-thumbnails1 .owl-controls .owl-pagination .owl-page.active span {
        background: #94b4dd !important;
    }
    .single-product #owl-single-product-thumbnails1 .owl-controls .owl-pagination .owl-page span {
        background: none repeat scroll 0 0 #ddd;
        border: medium none;
        border-radius: 3px;
        display: block;
        height: 10px;
        margin: 0 2px;
        -webkit-transition: all 200ms ease-out 0s;
        -moz-transition: all 200ms ease-out 0s;
        -o-transition: all 200ms ease-out 0s;
        transition: all 200ms ease-out 0s;
        width: 10px;
        cursor: pointer;
    }
    .single-product #owl-single-product-thumbnails1 .owl-controls .owl-pagination .owl-page {
        display: inline-block;
    }
    .single-product #owl-single-product-thumbnails1 .owl-controls .owl-pagination .owl-page span {
        background: none repeat scroll 0 0 #ddd;
        border: medium none;
        border-radius: 3px;
        display: block;
        height: 10px;
        margin: 0 2px;
        -webkit-transition: all 200ms ease-out 0s;
        -moz-transition: all 200ms ease-out 0s;
        -o-transition: all 200ms ease-out 0s;
        transition: all 200ms ease-out 0s;
        width: 10px;
        cursor: pointer;
    }

</style>
