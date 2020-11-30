<template>
    <div class="list attributs-container info-container m-t-20">
        <ul>
            <li v-if="short_description">
                <div class="row m-t-20">
                    <div class="col-md-12 col-lg-12" v-html="short_description"></div>
                </div>
            </li>
            <li>
                <div class="row m-t-20">
                    <div class="col-md-2 col-lg-2">Màu sắc</div>
                    <div class="col-md-10 col-lg-10">
                        <div class="color-choose">
                            <div v-for="(c, idx) in colors" :key="idx">
                                <input type="radio" v-bind:id="c" name="color" v-bind:value="c" v-model="color">
                                <label v-bind:for="c">
                                    <img v-if="images[idx]" width="35px" v-bind:src="images[idx]"
                                         v-bind:id="idx+index_image" v-bind:title="c" @click="selectColor(idx, c, images[idx])">
                                    <span class="btn" v-else v-text="c" @click="selectColor(idx, c, images[idx])"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="row m-t-20">
                    <div class="col-md-2 col-lg-2">Size</div>
                    <div class="col-md-10 col-lg-10">
                        <div class="size-choose">
                            <div v-for="(s, idx) in sizes">
                                <input type="radio" v-bind:id="s" name="size" v-bind:value="s" v-model="size"
                                       v-bind:disabled="quantities[idx] === 0">
                                <label v-bind:for="s">
                                    <span v-bind:class="quantities[idx] === 0 ? 'btn disabled' : 'btn'" v-text="s"
                                          @click="quantities[idx] !== 0 ? selectSize(s) : '' "></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
          <div class="quantity-container info-container">
            <div class="row">
              <div class="col-xs-4 col-sm-4">
                <div class="cart-quantity">
                  <div class="quant-input">
                    <div class="arrows">
                      <div class="arrow plus gradient"><span class="ir"><i class="icon fa fa-sort-asc"></i></span></div>
                      <div class="arrow minus gradient"><span class="ir"><i class="icon fa fa-sort-desc"></i></span></div>
                    </div>
                    <input type="text" value="1" id="qty" min="1" v-model="qty">
                  </div>
                </div>
              </div>
              <div class="col-xs-8 col-sm-8">
                <a href="javascript:void(0);" class="btn btn-primary" v-on:click="addToCart()"><i class="fa fa-shopping-cart inner-right-vs"></i> THÊM VÀO GIỎ</a>
                <a href="javascript:void(0);" class="btn btn-danger" v-on:click="buyNow()"><i class="fa fa-shopping-cart inner-right-vs"></i> MUA NGAY</a>
              </div>
            </div><!-- /.row -->
          </div><!-- /.quantity-container -->

          <div class="alert alert-warning" style="font-style: italic;font-size: 12px;">
              <i class="fa fa-truck"></i> Miễn phí vận chuyển khu vực Hà Nội với đơn hàng từ 250k.<br>
              <i class="fa fa-truck"></i> Miễn phí vận chuyển Toàn Quốc với đơn hàng từ 500k.
          </div>


    </div>
</template>

<script>
    import slider from './SliderGalleryComponent';

    export default {
        data() {
            return {
                attributes: [],
                color: "",
                size: '',
                height: '130px',
                position: 'absolute',
                icon: 'fa-chevron-circle-down',
                isMore: true,
                text: 'Xem thêm',
                weight: '',
                colors: [],
                sizes: [],
                images: [],
                short_description: '',
                products: [],
                quantities: [],
                checked: false,
                index_image: 0,
                id: '',
                name:'',
                price: '',
                image:'',
                sku:'',
                qty: 1,
                type: '',
                data: [],
                item_slider_size: 0
            }
        },
        mixins: [
            slider
        ],
        props: ['description'],
        created() {
            this.getAttributes();
        },
        filters: {
            format_material: function (value) {
                let data = "";
                if (value != null) {
                    select_material.forEach(function (item) {
                        if (value == item.id) {
                            data = item.text;
                            return false;
                        }
                    });
                }
                return data;
            },
            format_origin: function (value) {
                let data = "";
                if (value != null) {
                    select_origin.forEach(function (item) {
                        if (value == item.id) {
                            data = item.text;
                            return false;
                        }
                    });
                }
                return data;
            }
        },
        methods: {
            getAttributes: function() {
                let id = document.querySelector('#product_id').getAttribute('value');
                axios.get(url + '/api/attributes/' + id)
                    .then(response => {
                        this.attributes = response.data;
                        this.products = response.data.products;
                        this.short_description = response.data.products[0].short_description;
                        let color = '';
                        let size = '';
                        let arr_colors = [];
                        let arr_sizes = [];
                        // let arr_images = [];
                        let that = this;
                        this.item_slider_size = $('#owl-single-product1 .owl-wrapper-outer .owl-wrapper').find(".owl-item").length;
                        console.log("item_slider_size: "+this.item_slider_size);
                        let owl = $('#owl-single-product1').data('owlCarousel');
                        let idx = this.item_slider_size;
                        response.data.products.forEach(function (index, item) {
                            if (color != item.color) {
                                arr_colors.push(item.color);
                                color = item.color;
                                if (item.image) {
                                    that.images.push(item.image);
                                    let html = '<div id="#slide'+(idx + index)+'" class="single-product-gallery-item">' +
                                        '<a data-lightbox="image-1" data-title="'+color+'" href="'+item.image+'">' +
                                        '<img alt="'+color+'" src="'+item.image+'" data-echo="'+item.image+'" class="img-responsive"/>' +
                                        '</a>' +
                                        '</div>';
                                    owl.addItem(html);
                                }
                            }
                            if (size != item.size) {
                                arr_sizes.push(item.size);
                                size = item.size;
                            }
                        });
                        this.colors = Array.from(new Set(arr_colors));
                        this.sizes = Array.from(new Set(arr_sizes));
                        // this.images = Array.from(new Set(arr_images));
                        let total_image = this.all_images.length;
                        let total_color = this.colors.length;
                        this.index_image = total_image - total_color;








                    });
            },
            addToCart: function () {
                // let color = document.querySelector('input[name=color]:checked');
                if (!this.color) {
                    this.$toast.error({
                        title:'Lỗi',
                        message:'Bạn chưa chọn màu'
                    });
                    return;
                }
                // let size = document.querySelector('input[name=size]:checked');
                if (!this.size) {
                    this.$toast.error({
                        title:'Lỗi',
                        message:'Bạn chưa chọn size'
                    });
                    return;
                }
                // let qty = document.querySelector("#qty").value;
                if (!this.qty || this.qty < 0) {
                    this.qty = 1;
                }
                // let price = document.querySelector("#retail").value;
                // let sku = document.querySelector("#sku_selected").value;
                // let image = document.querySelector("#image_selected").value;
                this.data = [];
                this.data.push({
                    "id": this.id,
                    "sku": this.sku,
                    "name": this.name,
                    "price": this.price,
                    "image": this.image,
                    "color": this.color,
                    "size": this.size,
                    "qty": this.qty
                });
                this.storeInCart();
            },
            buyNow: function () {
                this.type = "buyNow";
                this.addToCart();
            },
            storeInCart: function () {
                axios.post(url + "/api/cart", {
                    body: this.data
                }).then(response => {
                    document.querySelector('.cart_number').innerHTML = '<span class="badge badge-danger" style="background: #fdd922;color: #666;">' + response.data.length + '</span>';
                    if (this.type === "buyNow") {
                        window.location.href = url + "/thanh-toan.html";
                    } else {
                        this.$toast.success({
                            title:'Thông báo',
                            message:'Sản phẩm đã được thêm vào giỏ hàng'
                        });
                    }
                })
            },
            selectSize: function (size) {
                let _self = this;
                this.products.forEach(function (item) {
                    if (_self.color == item.color && item.size == size) {
                        document.querySelector('#price').innerHTML = item.retail.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' <sup style="top: -10px; font-size: 16px;left: -4px;">đ</sup>';
                        // document.querySelector('#retail').value = item.retail;
                        // document.querySelector('#sku_selected').value = item.sku;
                        // document.querySelector('#image_selected').value = item.image;
                        _self.id = item.id;
                        _self.price = item.retail;
                        _self.sku = item.sku;
                        _self.name = item.name;
                        if(item.image) {
                            _self.image = item.image;
                        } else {
                            let image = item.product_image;
                            if(image) {
                                image = JSON.parse(image);
                                _self.image = image[0].src;
                            }
                        }
                    }
                });
            },
            selectColor: function (index, color, img) {
                // let all_images = this.all_images.length;
                // let image = this.images.length;
                // let idx = all_images - image;
                // idx = idx + index;
                index++;
                console.log(index);
                // let item_size = $('#owl-single-product1 .owl-wrapper-outer .owl-wrapper').find(".owl-item").length;
                console.log(this.item_slider_size);
                let next_item_index = this.item_slider_size+index;
                console.log(next_item_index);
                let html = '<div id="#slide'+(next_item_index)+'" class="single-product-gallery-item">' +
                            '<a data-lightbox="image-1" data-title="'+color+'" href="'+img+'">' +
                            '<img alt="'+color+'" src="'+img+'" data-echo="'+img+'" class="img-responsive"/>' +
                            '</a>' +
                            '</div>';
                let owl = $('#owl-single-product1').data('owlCarousel');
                owl.removeItem(next_item_index);
                setTimeout(function () {
                    owl.addItem(html);
                    owl.jumpTo(next_item_index);
                },100);


                // this.setTitleImage();
                // this.chooseImage(idx);
                this.checked = false;
                this.sizes = [];
                this.quantities = [];
                let _self = this;
                this.size = null;
                this.price = null;
                this.image = null;
                this.sku = null;
                this.name = null;
                this.id = null;
                this.products.forEach(function (item) {
                    if (item.color == color) {
                        _self.sizes.push(item.size);
                        _self.quantities.push(Number(item.quantity));
                    }
                });
            },
            setTitleImage: function () {
                let product_name = $(".product-info-block .product-info .name").text();
                if (!product_name) {
                    product_name = '';
                }
                $(".product-image-gallery img").prop("alt", product_name).prop("title", product_name);
            }
        },
        mounted() {

        }
    };
    let select_origin = [
        {
            id: '-1',
            text: ''
        },
        {
            id: '1',
            text: 'Việt Nam'
        },
        {
            id: '2',
            text: 'Trung Quốc'
        }
    ];

    let select_material = [
        {
            id: '-1',
            text: ''
        },
        {
            id: '1',
            text: 'Cotton'
        },
        {
            id: '2',
            text: 'Kaki'
        },
        {
            id: '3',
            text: 'Jeans'
        },
        {
            id: '4',
            text: 'Thô'
        },
        {
            id: '5',
            text: 'Voan'
        },
        {
            id: '6',
            text: 'Lanh'
        },
        {
            id: '7',
            text: 'đũi'
        },
        {
            id: '8',
            text: 'Ren'
        },
        {
            id: '9',
            text: 'PE'
        },
        {
            id: '10',
            text: 'nylon'
        },
        {
            id: '11',
            text: 'Nỉ'
        },
        {
            id: '12',
            text: 'Len'
        }
    ];

    let select_weight = [
        {
            id: '60',
            text: '3kg - 6kg'
        },
        {
            id: '73',
            text: '6kg - 8kg'
        },
        {
            id: '80',
            text: '8kg - 10kg'
        },
        {
            id: '90',
            text: '11kg - 13kg'
        },
        {
            id: '100',
            text: '14kg - 16kg'
        },
        {
            id: '110',
            text: '17kg - 18kg'
        },
        {
            id: '120',
            text: '19kg - 20kg'
        },
        {
            id: '130',
            text: '21kg - 23kg'
        },
        {
            id: '140',
            text: '24kg - 27kg'
        },
        {
            id: '150',
            text: '28kg - 32kg'
        },
        {
            id: '160',
            text: '33kg - 40kg'
        }
    ];
</script>
<style scoped>
  .color-choose div {
    display: inline-block;
  }

  .color-choose input[type="radio"] {
    display: none;
  }

  .color-choose input[type="radio"] + label span {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    padding: 2px 5px;
    margin: 5px 10px 0 0;
    font-size: 13px;
    font-weight: normal !important;
    border-radius: 4px;
    border: 2px solid #dee2e6;
    font-size: 13px;
    /*#56c5ce*/
  }

  .color-choose input[type="radio"]:checked + label img, .color-choose input[type="radio"]:checked + label span {
    border: 2px solid #56c5ce;
    /*box-shadow: 0 1px 5px 0 #005bbdbf;*/
    border-radius: 4px;
  }
  .color-choose img:hover {
    border: 2px solid #56c5ce;
    border-radius: 4px;
  }
  .color-choose img {
    cursor: pointer;
    margin-right: 10px;
    /*box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);*/
    border-radius: 4px;
  }

  .size-choose div {
    display: inline-block;
    margin: 0 5px 2px 0;
  }

  .size-choose input[type="radio"] {
    display: none;
  }

  .size-choose input[type="radio"] + label span {
    display: inline-block;
    margin: 5px 5px 0 0;
    vertical-align: middle;
    cursor: pointer;
    /*box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);*/
    padding: 7px 10px;
    text-align: center;
    font-weight: normal;
    border-radius: 4px;
    border: 2px solid #dee2e6;
    font-size: 13px;
  }
  .size-choose input[type="radio"] + label span:not(.disabled):hover,
  .color-choose input[type="radio"] + label span:not(.disabled):hover {
    border: 2px solid #56c5ce;
    border-radius: 4px;
    /*box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);*/
  }

  .size-choose input[type="radio"]:checked + label span  {
    border: 2px solid #56c5ce;
    outline: none;
    /*box-shadow: 0 1px 5px 0 #43484d85;*/
    border-radius: 4px;
  }
</style>
