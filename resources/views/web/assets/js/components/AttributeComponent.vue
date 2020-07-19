<template>
    <div class="list">
        <ul>
            <li>
                <div class="row">
                    <div class="col-md-12 col-lg-12" v-html="short_description"></div>
                </div>
            </li>
            <li>
                <div class="row">
                    <div class="col-md-3 col-lg-3">Màu sắc</div>
                    <div class="col-md-9 col-lg-9">
                        <div class="color-choose">
                            <div v-for="(c, idx) in colors" :key="idx">
                                <input type="radio" v-bind:id="c" name="color" v-bind:value="c" v-model="color">
                                <label v-bind:for="c">
                                    <img v-if="images[idx]" width="32px" v-bind:src="images[idx]"
                                         v-bind:id="idx+index_image" v-bind:title="c" @click="selectColor(idx, c)">
                                    <span class="btn" v-else v-text="c" @click="selectColor(idx, c)"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="row">
                    <div class="col-md-3 col-lg-3">Size</div>
                    <div class="col-md-9 col-lg-9">
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
            <div class="row mb-2">
                <div class="qty">
                    <span class="label">Số lượng :</span>
                </div>
                <div class="qty-count">
                    <div class="cart-quantity">
                        <div class="quant-input">
                            <input type="number" value="1" id="qty" min="1" v-model="qty">
                        </div>
                    </div>
                </div>
                <div class="qty">
                    <span class="label" id="remain_qty" style="font-size: 14px;"></span>
                </div>
            </div>
            <div class="row">
                <div class="add-btn">
                    <a href="javascript:void(0);" class="btn btn-primary"
                       v-on:click="addToCart()">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </a>
                </div>
                <div class="add-btn">
                    <a href="javascript:void(0);" class="btn btn-danger" style="color: white"
                       v-on:click="buyNow()">
                        <i class="fa fa-shopping-cart"></i> Mua ngay
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import slider from './ImageGalleryComponent';

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
                data: []
            }
        },
        mixins: [
            slider
        ],
        props: ['description'],
        created() {
            let id = document.querySelector('#product_id').getAttribute('value');
            axios.get(url + '/api/attributes/' + id)
                .then(response => {
                    this.attributes = response.data;
                    this.products = response.data.products;
                    console.log(response.data.products);
                    this.short_description = response.data.products[0].short_description;
                    let color = '';
                    let size = '';
                    let arr_colors = [];
                    let arr_sizes = [];
                    let arr_images = [];
                    response.data.products.forEach(function (item) {
                        if (color != item.color) {
                            arr_colors.push(item.color);
                            color = item.color;
                            if (item.image) {
                                let ext = item.image.substr(item.image.lastIndexOf('.') + 1);
                                let src = item.image.replace('.' + ext, '');
                                src = src + '.32x32.' + ext;
                                arr_images.push(src);
                            }
                        }
                        if (size != item.size) {
                            arr_sizes.push(item.size);
                            size = item.size;
                        }
                    });
                    this.colors = Array.from(new Set(arr_colors));
                    this.sizes = Array.from(new Set(arr_sizes));
                    this.images = Array.from(new Set(arr_images));
                    let total_image = this.all_images.length;
                    let total_color = this.colors.length;
                    this.index_image = total_image - total_color;
                });
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
            // viewMore: function () {
            //     if (this.isMore) {
            //         this.isMore = false;
            //         this.height = 'auto';
            //         this.position = 'inherit';
            //         this.icon = 'fa-chevron-circle-up';
            //         this.text = 'Thu gọn';
            //     } else {
            //         this.isMore = true;
            //         this.height = '130px';
            //         this.position = 'absolute';
            //         this.icon = 'fa-chevron-circle-down';
            //         this.text = 'Xem thêm';
            //     }
            // },
            selectSize: function (size) {
                let _self = this;
                this.products.forEach(function (item) {
                    if (_self.color == item.color && item.size == size) {
                        document.querySelector('#price').innerHTML = item.retail.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' <sup style="top: -10px; font-size: 16px;">đ</sup>';
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
            selectColor: function (index, color) {
                let all_images = this.all_images.length;
                let image = this.images.length;
                let idx = all_images - image;
                idx = idx + index;

                $(".thumbnail img").removeClass("active");
                $(".thumbnail img#" + idx).addClass("active");

                let img = this.all_images[idx];
                if (img) {
                    img = img.replace(".32x32", "");
                    $(".product-image-gallery img").prop("src", img);
                }
                this.setTitleImage();
                this.chooseImage(idx);
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
                        _self.quantities.push(item.quantity);
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
