@extends('theme.layout.layout')
@section('title', !empty($prod_title) ? $prod_title : 'Không tồn tại sản phẩm')
@section('content')
    @if(empty($product))
        <div id="app"></div>
        <div id="detail" xmlns:v-on="http://www.w3.org/1999/xhtml">
            <div id="detail-product" class="page">
                <div class="view view-main view-init ios-edges">
                    @include('theme.layout.header')
                    @include('theme.layout.tabbar')
                    <div class="page-content">
                        <div class="product-details segments">
                            <div class="container">
                                <div class="content">
                                    <h5 class="center">Không tồn tại sản phẩm</h5>
                                    <div class="divider-space-content"></div>
                                    <a href="{{url('')}}" class="button primary-button">
                                        <i class="fas fa-arrow-alt-circle-left"></i> Quay về trang chủ
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @else
        <div id="app"></div>
        <div id="detail" xmlns:v-on="http://www.w3.org/1999/xhtml">
            <div id="detail-product" class="page">
                <div class="view view-main view-init ios-edges">
                    @include('theme.layout.header')
                    @include('theme.layout.breadcrum')
                    <div class="page-content">
                        <div class="product-details segments">
                            <div class="container">
                                <!-- wrap content product details -->
                                <div class="wrapper-content">
                                    <input type="hidden" id="cat_id" ref="categoryId" value="{{$product->category_id}}">
                                    <input type="hidden" id="product_id" ref="productId" value="{{$product->id}}">
                                    <input type="hidden" id="type_id" ref="typeId" value="{{$product->type}}">
                                    <div class="slider-p-details">
                                        <div class="swiper-container swiper-detail-product">
                                            <div class="swiper-wrapper">
                                                @foreach (json_decode($product->image) as $image)
                                                    <div class="swiper-slide">
                                                        <div class="content">
                                                            <div class="mask"></div>
                                                            <img
                                                                src="{{ url($image->type == 'upload' ? env('IMAGE_URL').$image->src : $image->src) }}"
                                                                alt="{{ $product->name }}" title="{{ $product->name }}">
                                                        </div>
                                                    </div>
                                                @endforeach

                                            </div>
                                            <div class="swiper-pagination swiper-pagination-detail-product"></div>
                                        </div>
                                    </div>
                                    <div class="wrap-title-product wrap-c-margin">
                                        <h4>{{ $product->name }}</h4>
                                        <p class="price">{{ number_format($product->retail).' đ' }}</p>
                                    </div>
                                    <div class="wrap-info">
                                        <attributes-component :description="'{{ $product->description }}'"/>
                                    </div>
                                </div>
                                <div>
                                    <relate-product-component/>
                                </div>
                                <!-- product review -->
                                <div>
                                    <div class="row section-title">
                                        <h3 style="width: 100%;">Đánh giá sản phẩm
                                            <span class="see-all-link btn btn-sm btn-warning ratingbtn"
                                                  style="color: #333;width:auto;" @click="openPopupReview">
                                                <i class="fas fa-pen-nib"></i> Viết nhận xét
                                            </span>
                                        </h3>
                                    </div>
                                    <reviews-component :product_id="{{ $product->id }}" :key="reload"/>
                                </div>
                                <div>
                                    <recommend-product-component/>
                                </div>
                                <!-- end recommended for you -->
                            </div>
                        </div>
                        <!-- end product details -->
                        <!-- action product details -->
                        <div class="wrap-action-product-d">
                            <div class="container">
                                <div class="row">
                                    <div class="col-20">
                                        <div class="content-message">
                                            <a href="javascript:void(0);"><i class="fas fa-comment"></i></a>
                                        </div>
                                    </div>
                                    @foreach (json_decode($product->image) as $image)
                                        @if ($loop->first)
                                    <div class="col-40">
                                        <div class="content-button">
                                            <a href="javascript:void(0);" class="button secondary-button"
                                               v-on:click="addToCart('{{$product->id}}', '{{$product->name}}', '{{$product->retail}}', '{{ url($image->type == 'upload' ? env('IMAGE_URL').$image->src : $image->src) }}')">
                                                <i class="fas fa-cart-arrow-down"></i> Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <div class="col-40">
                                        <div class="content-button">
                                            <a href="javascript:void(0);" class="button secondary-button"
                                               v-on:click="buyNow('{{$product->id}}', '{{$product->name}}', '{{$product->retail}}', '{{ url($image->type == 'upload' ? env('IMAGE_URL').$image->src : $image->src) }}')">
                                                <i class="fas fa-cart-plus"></i> Mua ngay
                                            </a>
                                        </div>
                                    </div>
                                        @endif
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        <!-- end action product details -->
                    </div>
                </div>
            </div>
            <!-- description sheet modal -->
            <div class="sheet-modal detail-sheet">
                <div class="toolbar">
                    <div class="toolbar-inner">
                        <div class="left">Bảng chọn size</div>
                        <div class="right">
                            <a href="javascript:void(0);" class="link sheet-close"><i class="fas fa-check"></i></a>
                        </div>
                    </div>
                </div>
                <div class="sheet-modal-inner segments">
                    <div class="page-content">
                        <div class="container">
                            <h3 class="center">Bảng chọn size cho bé</h3>
                            <div class="table-responsive">
                                <h5>1. Size quần áo</h5>
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tuổi</th>
                                        <th>Chiều cao (cm)</th>
                                        <th>Cân nặng (kg)</th>
                                        <th>Size</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Anna</td>
                                        <td>Pitt</td>
                                        <td>35</td>
                                        <td>New York</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="table-responsive">
                                <h5>2. Size giày dép</h5>
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tuổi</th>
                                        <th>Chiều cao (cm)</th>
                                        <th>Cân nặng (kg)</th>
                                        <th>Size</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Anna</td>
                                        <td>Pitt</td>
                                        <td>35</td>
                                        <td>New York</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end description sheet modal -->
            <div id="rating" >
                <div class="sheet-modal rating-sheet">
                    <div class="toolbar">
                        <div class="toolbar-inner">
                            <div class="left">Viết nhận xét</div>
                            <div class="right">
                                <a href="javascript:void(0);" class="link sheet-close" v-on:click="cancelReview()"><i class="fas fa-check"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="sheet-modal-inner segments">
                        <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                            <div class="container" id="form-review">
                                <form style="padding-top: 10px;">
                                    <input id="ratings-hidden" name="rating" type="hidden">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Họ tên" id="fullname" autofocus v-model="fullname" ref="fullname">
                                    </div>
                                    <div :class="['form-group', isPhoneValid()]">
                                        <input type="text" class="form-control" placeholder="Số điện thoại" id="phone" v-model="phone" ref="phone">
                                    </div>
                                    <div :class="['form-group', isEmailValid()]">
                                        <input type="email" class="form-control" placeholder="Email" id="email" v-model="email" ref="email">
                                    </div>
                                    <div class="form-group">
                                        <textarea rows="3" class="form-control" placeholder="Nội dung nhận xét" id="content" v-model="content" ref="content"></textarea>
                                    </div>
                                    <div class="text-right">
                                        <star-rating :item-size="30"
                                                     border-color="#ffffff"
                                                     inactive-color="#D8D8D8"
                                                     active-color="#ffc107"
                                                     v-model="rating"
                                        ></star-rating>
                                        <div class="float-right">
                                            <button type="button" class="btn btn-primary" v-on:click="submitReviews('{{$product->id}}')">Đồng ý</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div id="form-review-success" class="hidden">
                                <div class="swal-icon swal-icon--success">
                                    <span class="swal-icon--success__line swal-icon--success__line--long"></span>
                                    <span class="swal-icon--success__line swal-icon--success__line--tip"></span>
                                    <div class="swal-icon--success__ring"></div>
                                    <div class="swal-icon--success__hide-corners"></div>
                                    </div>
                                <div class="swal-title" style="">Đăng nhận xét thành công!</div>
                                <div class="swal-text" style="text-align: center;width: 100%;">Cám ơn bạn đã nhận xét sản phẩm!</div>
                                <div class="swal-footer" style="text-align: center;margin-top: 0;">
                                    <div class="swal-button-container">
                                        <button class="link sheet-close btn btn-danger" v-on:click="cancelReview()">Đóng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endif
@endsection

@section("script")
    <script>
        const detail = new Vue({
            el: '#detail',
            data() {
                return {
                    products: [],
                    type: '',
                    description: '',
                    rating: 0,
                    fullname: '',
                    phone: '',
                    email: '',
                    content: '',
                    email_reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                    phone_reg : /^((09|03|07|08|05)+([0-9]{8})\b)$/,
                    reload: 0
                }
            },
            methods: {
                addToCart: function (id, name, price, image) {
                    let color = document.querySelector('input[name=color]:checked');
                    if (color == null) {
                        this.$toast.top('Bạn chưa chọn màu');
                        return;
                    }
                    let size = document.querySelector('input[name=size]:checked');
                    if (size == null) {
                        this.$toast.top('Bạn chưa chọn size');
                        return;
                    }
                    this.products = [];
                    this.products.push({
                        "id": id,
                        "name": name,
                        "price": price,
                        "image": image,
                        "color": color.value,
                        "size": size.value,
                    });
                    this.storeInCart();
                },
                buyNow: function (id, name, price, image) {
                    this.type = "buyNow";
                    this.addToCart(id, name, price, image);
                },
                storeInCart: function () {
                    axios.post(url +"/api/cart", {
                        body: this.products
                    }).then(response => {
                        this.$toast.top('Đã thêm vào giỏ hàng');
                        document.querySelector('.cart_number').innerHTML = '<span class="badge badge-danger">' + response.data.length + '</span>';
                        if(this.type === "buyNow") {
                            window.location.href =  window.location.protocol + '//' + window.location.hostname + ":" + window.location.port +  "/checkout";
                        }
                    })
                },
                cancelReview: function () {
                    this.fullname = '';
                    this.phone = '';
                    this.email = '';
                    this.content = '';
                    this.rating = 0;
                    this.$refs.fullname.focus();
                    $("#form-review").removeClass('hidden');
                    $("#form-review-success").addClass('hidden');
                },
                isPhoneValid: function() {
                    return (this.phone === "")? "" : (this.phone_reg.test(this.phone)) ? 'has-success' : 'has-error';
                },
                isEmailValid: function() {
                    return (this.email === "")? "" : (this.email_reg.test(this.email)) ? 'has-success' : 'has-error';
                },
                submitReviews: function (product_id) {
                    if(!this.validate()) {
                        return false;
                    }
                    let review = [];
                    review.push({
                        "name": this.fullname,
                        "phone": this.phone,
                        "email": this.email,
                        "content" : this.content,
                        "rating" : this.rating,
                        "product_id": product_id
                    });
                    console.log(JSON.stringify(review));
                    axios.post(url + "/api/submit-reviews", {
                        body: review
                    }).then(response => {
                        console.log(response.data);
                        if(response.data === 201) {
                            $("#form-review").addClass('hidden');
                            $("#form-review-success").removeClass('hidden');
                            this.reload++;
                        } else {
                            swal({
                                title: "Đã xảy ra lỗi!",
                                text: "Xin vui lòng thử lại sau!",
                                icon: "error",
                                button: "Đồng ý",
                            });
                        }
                    })
                },
                validate: function () {
                    if(this.fullname && this.phone && this.content && this.rating) {
                        return true;
                    }
                    if(!this.fullname) {
                        this.$toast.top('Bạn chưa nhập tên');
                        this.$refs.fullname.focus();
                        return false;
                    }
                    if(this.phone === '') {
                        this.$toast.top('Bạn chưa nhập số điện thoại');
                        this.$refs.phone.focus();
                        return false;
                    }  else if(!this.phone_reg.test(this.phone)) {
                        this.$toast.top('Số điện thoại chưa đúng.');
                        this.$refs.phone.focus();
                        return false;
                    }
                    if(this.email !== '' && !this.email_reg.test(this.email)) {
                        this.$toast.top('Email chưa đúng.');
                        this.$refs.email.focus();
                        return false;
                    }
                    if(!this.content) {
                        this.$toast.top('Bạn chưa nhập nội dung nhận xét');
                        this.$refs.content.focus();
                        return false;
                    }
                    if(!this.rating) {
                        this.$toast.top('Bạn chưa chọn số sao');
                        return false;
                    }
                },
                openPopupReview: function () {
                    $(".rating-sheet").addClass("modal-in");
                    $("html").addClass("with-modal-sheet");
                    $(".sheet-close").click(function() {
                        $(".rating-sheet").removeClass("modal-in");
                        $("html").removeClass("with-modal-sheet");

                    });
                }
            }
        });
        new Swiper('.swiper-detail-product', {
            cssMode: true,
            mousewheel: true,
            keyboard: true,
            pagination: {
                el: '.swiper-pagination-detail-product',
                dynamicBullets: true,
                paginationClickable: true
            },
            autoplay: {
                delay: 5000,
            },
        });
    </script>
@endsection
