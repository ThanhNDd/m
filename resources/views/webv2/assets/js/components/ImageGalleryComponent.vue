<template>
    <div>
        <div class="product-image-gallery">
            <a data-lightbox="image-1" v-bind:data-title="product_name" v-bind:href="img">
                <div class="img-responsive" v-bind:alt="product_name" v-bind:style="{'background-image': 'url('+img+')'}" v-bind:data-echo="img"></div>
            </a>
            <a data-lightbox="image-1" v-bind:data-title="product_name" v-for="(i) in all_images" v-if="i != img" v-bind:href="i" class="hidden">
                <div class="img-responsive" v-bind:style="{'background-image': 'url('+i+')'}" v-bind:data-echo="i"></div>
            </a>
        </div>
        <div class="thumbnail">
            <img v-for="(img, idx) in all_images" v-bind:src="img | format_image('64x64')" v-bind:alt="product_name" v-bind:id="idx" width="64px" @mouseover="chooseImage(idx)" @click="chooseImage(idx)" v-bind:class="activeIndex === idx ? 'active' : '' " alt="" title="">
        </div>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                img: '',
                all_images: [],
                activeIndex: 0,
                image_by_color: ''
            }
        },
        props: ['product_name'],
        created() {
            let id = document.querySelector('#product_id').getAttribute('value');
            axios.get(url + '/api/images/'+id)
                .then(response => {
                    this.all_images = response.data;
                    this.chooseImage(0);
                    this.setColorIndex();
                });
        },
        methods: {
            chooseImage: function (index) {
                // $(".thumbnail img").removeClass("active");
                document.querySelector('.thumbnail').scrollLeft = Number(60)*(index-1);
                // if(index != this.activeIndex) {
                $(".thumbnail").children("img").removeClass("active");
                // setTimeout(function () {
                    $(".thumbnail").children("[id="+index+"]").addClass("active");
                // },200);

                // } else {
                //     $(".thumbnail").children("[id="+index+"]").addClass("active");
                // }
                this.activeIndex = index;
                if(this.all_images[index]) {
                    this.img = this.all_images[index];
                }
                // this.setTitleImage();
            },
            setColorIndex: function () {
                let colors = $(".color-choose img").length;
                let images = this.all_images.length;
                let image_index = images - colors;
                $(".color-choose img").each(function () {
                    $(this).attr("id", image_index);
                    image_index++;
                });
            },
            setTitleImage: function () {
                let product_name = $(".product-info-block .product-info .name").text();
                if(!product_name) {
                    product_name = '';
                }
                $(".product-image-gallery img").prop("alt", product_name).prop("title", product_name);
            }
        },
        mounted() {
            this.$root.$on('slider', () => {
                this.chooseImage(this.activeIndex, this.image_by_color);
            });
        }
    };
</script>
<style>
    img {
        cursor: pointer;
    }
    img.active {
        border: 2px solid #56c5ce;
    }
    /*div#owl-single-product {*/
    /*    display: inline-block;*/
    /*    min-height: 400px;*/
    /*}*/
    /*#owl-single-product .thumbnail img{*/
    /*    width: 64px;*/
    /*}*/
    /*#owl-single-product .thumbnail img:hover {*/
    /*    border: 2px solid #509dde;*/
    /*}*/
    .thumbnail {
        scroll-behavior: smooth;
        display: inline-flex;
        overflow: hidden;
        border: none;
        float: left;
        width: 450px;
        padding-left: 0;
        padding-right: 0;
    }
    .thumbnail img {
        display: inline-block;
        margin: 5px;
    }
    /*.product-image-gallery {*/
    /*    height: 100%;*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*}*/

    .product-image-gallery div {
        width: 450px;
        height: 450px;
        background-size: contain;
        background-position: center;
        background-position-y: center;
        background-position-x: center;
        background-repeat: no-repeat;
    }

</style>
