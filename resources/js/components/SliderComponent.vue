<template>
    <div class="d-inline-block col-md-12 no-padding">
        <div class="product-image-gallery d-inline-block col-md-12 no-padding">
            <img v-bind:src="img" width="auto" alt="" title="" class="d-inline-block col-md-12 no-padding">
        </div>
        <div class="thumbnail">
            <img v-for="(img, idx) in all_images" v-bind:src="img | format_image('64x64')" v-bind:id="idx" width="64px" @click="chooseImage(idx)"
                 v-bind:class="[ activeIndex === idx ? 'active' : '']" alt="" title="">
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                url: '',
                img: '',
                all_images: [],
                activeIndex: 0
            }
        },
        created() {
            this.url = url;
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
                document.querySelector('.thumbnail').scrollLeft = Number(68)*(index-6);
                if(index != this.activeIndex) {
                    $(".thumbnail").children("img").removeClass("active");
                    $(".thumbnail").children("[id="+index+"]").addClass("active");
                }
                this.img = this.all_images[index];
                this.setTitleImage();
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
                this.chooseImage(this.activeIndex);
            });
        }
    };
</script>
<style>
    img {
        cursor: pointer;
    }
    img.active {
        border: 2px solid #509dde;
    }
    #owl-single-product .thumbnail img {
        width: 64px;
    }
    #owl-single-product .thumbnail img:hover {
        border: 2px solid #509dde;
    }
    .thumbnail {
        scroll-behavior: smooth;
        display: inline-block;
        overflow: auto;
        border: none;
        white-space: nowrap;
        margin-top: 10px;
        width: 100%;
    }
    .thumbnail img {
        display: inline-block;
        margin-right: 5px;
    }

</style>
