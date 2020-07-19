<template>
  <section class="section related-product" style="background: rgb(255, 255, 255);border-radius: 0 6px 6px 0;">
    <div id="product-tabs-slider" class="scroll-tabs outer-top-vs">
      <div class="more-info-tab clearfix ">
        <h3 class="new-product-title pull-left">Nhận xét và đánh giá</h3>
      </div>
    </div>
    <div class="product-review segments" style="display: inline-block;width: 100%;">
        <div class="col-md-6 float-left">
            <div class="row col-md-12" style="margin: 0;display: inline-block;padding:45px 0px 20px 0px;">
                <div class="rating-block col-md-6 float-left" style="text-align: center;display: inline-block;">
                    <h1 class="bold padding-bottom-7" style="padding-bottom: 5px;margin-top: 0px;font-size: 50px;font-weight: 600;color: red;">{{ratingAvg}}</h1>
                    <button type="button" class="btn btn-sm" v-bind:class="ratingAvg >= 1 ? 'btn-warning ' : 'btn-default btn-grey'" aria-label="Left Align">
                        <i v-bind:class="ratingAvg >= 1 ? 'fas fa-star' : 'fas fa-star-half-alt'" style="color:#fff;"></i>
                    </button>
                    <button type="button" class="btn btn-sm" v-bind:class="ratingAvg > 1 ? 'btn-warning' : 'btn-default btn-grey'" aria-label="Left Align">
                        <i v-bind:class="ratingAvg > 1 ? (ratingAvg >= 2 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#fff;"></i>
                    </button>
                    <button type="button" class="btn btn-sm" v-bind:class="ratingAvg > 2 ? 'btn-warning' : 'btn-default btn-grey'" aria-label="Left Align">
                        <i v-bind:class="ratingAvg > 2 ? (ratingAvg >= 3 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#fff;"></i>
                    </button>
                    <button type="button" class="btn btn-sm" v-bind:class="ratingAvg > 3 ? 'btn-warning' : 'btn-default btn-grey'" aria-label="Left Align">
                        <i v-bind:class="ratingAvg > 3 ? (ratingAvg >= 4 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#fff;"></i>
                    </button>
                    <button type="button" class="btn btn-sm" v-bind:class="ratingAvg > 4 ? 'btn-warning' : 'btn-default btn-grey'" aria-label="Left Align">
                        <i v-bind:class="ratingAvg > 4 ? (ratingAvg >= 5 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#fff;"></i>
                    </button>
                </div>
                <div class="rating-breakdown col-md-6 float-left">
                    <div class="float-left">
                        <div class="float-left" style="width:30px; line-height:1;">
                            <div style="height:9px; margin:5px 0;">5 <i class="fas fa-star" style="color: #ffc107;"></i></div>
                        </div>
                        <div class="float-left" style="width:110px;">
                            <div class="progress" style="height:9px; margin:8px 0;">
                                <div class="progress-bar bg-success" v-bind:style="{'width':percent_5_star+ '%'}" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5">
                                    <span class="sr-only">80% Complete (danger)</span>
                                </div>
                            </div>
                        </div>
                        <div class="float-left" style="margin-left:5px;margin-top: 5px;">{{ number_5_star }}</div>
                    </div>
                    <div class="float-left">
                        <div class="float-left" style="width:30px; line-height:1;">
                            <div style="height:9px; margin:5px 0;">4 <i class="fas fa-star" style="color: #ffc107;"></i></div>
                        </div>
                        <div class="float-left" style="width:110px;">
                            <div class="progress" style="height:9px; margin:8px 0;">
                                <div class="progress-bar bg-primary" v-bind:style="{'width':percent_4_star+ '%'}" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5">
                                    <span class="sr-only">80% Complete (danger)</span>
                                </div>
                            </div>
                        </div>
                        <div class="float-left" style="margin-left:5px;margin-top: 5px;">{{ number_4_star }}</div>
                    </div>
                    <div class="float-left">
                        <div class="float-left" style="width:30px; line-height:1;">
                            <div style="height:9px; margin:5px 0;">3 <i class="fas fa-star" style="color: #ffc107;"></i></div>
                        </div>
                        <div class="float-left" style="width:110px;">
                            <div class="progress" style="height:9px; margin:8px 0;">
                                <div class="progress-bar bg-info" v-bind:style="{'width':percent_3_star+ '%'}" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5">
                                    <span class="sr-only">80% Complete (danger)</span>
                                </div>
                            </div>
                        </div>
                        <div class="float-left" style="margin-left:5px;margin-top: 5px;">{{ number_3_star }}</div>
                    </div>
                    <div class="float-left">
                        <div class="float-left" style="width:30px; line-height:1;">
                            <div style="height:9px; margin:5px 0;">2 <i class="fas fa-star" style="color: #ffc107;"></i></div>
                        </div>
                        <div class="float-left" style="width:110px;">
                            <div class="progress" style="height:9px; margin:8px 0;">
                                <div class="progress-bar bg-warning" v-bind:style="{'width':percent_2_star+ '%'}" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5">
                                    <span class="sr-only">80% Complete (danger)</span>
                                </div>
                            </div>
                        </div>
                        <div class="float-left" style="margin-left:5px;margin-top: 5px;">{{ number_2_star }}</div>
                    </div>
                    <div class="float-left">
                        <div class="float-left" style="width:30px; line-height:1;">
                            <div style="height:9px; margin:5px 0;">1 <i class="fas fa-star" style="color: #ffc107;margin-left: 3px;"></i></div>
                        </div>
                        <div class="float-left" style="width:110px;">
                            <div class="progress" style="height:9px; margin:8px 0;">
                                <div class="progress-bar bg-danger" v-bind:style="{'width':percent_1_star+ '%'}" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5">
                                    <span class="sr-only">80% Complete (danger)</span>
                                </div>
                            </div>
                        </div>
                        <div class="float-left" style="margin-left:5px;margin-top: 5px;">{{ number_1_star }}</div>
                    </div>
                </div>
            </div>
            <div id="rating" class="col-md-12">
                <div class="sheet-modal rating-sheet">
                    <div class="sheet-modal-inner segments login-form" v-if="!isRegister">
                        <div class="toolbar">
                            <div class="toolbar-inner">
                                <div class="left" style="font-size: 18px;margin: 5px;">Đăng nhập</div>
                            </div>
                        </div>
                        <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                            <div class="container" style="padding: 0px;width: 100%;">
                                <form style="padding-top: 10px;">
                                    <div class="form-group">
                                        <label for="username">Tên đăng nhập / Email</label>
                                        <input type="text" class="form-control" placeholder="Tên đăng nhập" id="username" v-model="username" ref="username">
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Mật khẩu</label>
                                        <input type="password" class="form-control" placeholder="Mật khẩu" id="password" v-model="password" ref="password">
                                    </div>
                                    <div class="form-group"><p>Bạn chưa có tài khoản? <a href="javascript:void(0)" @click="isRegister = true">Đăng ký ngay</a></p></div>
                                    <div style="text-align: center;">
                                        <button type="button" class="btn btn-info btn-flat" v-on:click="login()">
                                            <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="hidden"></i>&nbsp;Đăng nhập
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="sheet-modal-inner segments" v-if="isRegister">
                        <div class="toolbar">
                            <div class="toolbar-inner">
                                <div class="left" style="font-size: 18px;margin: 5px;">Đăng ký</div>
                            </div>
                        </div>
                        <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                            <div class="container" style="padding: 0px;width: 100%;">
                                <form style="padding-top: 10px;">
                                    <div class="form-group">
                                        <label for="reg_username">Tên đăng nhập</label>
                                        <input type="text" class="form-control" placeholder="Tên đăng nhập" id="reg_username" v-model="username" ref="username">
                                    </div>
                                    <div :class="['form-group', isPasswordValid()]">
                                        <label for="reg_password">Mật khẩu</label>
                                        <input type="password" class="form-control" placeholder="Email" id="reg_password" v-model="password" ref="password">
                                    </div>
                                    <div :class="['form-group', isPasswordValid()]">
                                        <label for="reg_password2">Nhập lại mật khẩu</label>
                                        <input type="password" class="form-control" placeholder="Email" id="reg_password2" v-model="password2" ref="password2">
                                    </div>
                                    <div class="form-group">
                                        <label for="reg_fullname">Họ Tên</label>
                                        <input type="text" class="form-control" placeholder="Họ tên" id="reg_fullname" v-model="fullname" ref="fullname">
                                    </div>
                                    <div :class="['form-group', isPhoneValid()]">
                                        <label for="reg_fullname">Số điện thoại</label>
                                        <input type="text" class="form-control" placeholder="Số điện thoại" id="reg_phone" v-model="phone" ref="phone">
                                    </div>
                                    <div class="form-group">
                                        <label for="reg_fullname">Giới tính</label>
                                        <input type="radio" class="form-control" name="gender" v-model="male" ref="male">
                                        <input type="radio" class="form-control" name="female" v-model="female" ref="female">
                                    </div>
                                    <div :class="['form-group', isEmailValid()]">
                                        <label for="reg_fullname">Email</label>
                                        <input type="email" class="form-control" placeholder="Email" id="reg_email" v-model="email" ref="email">
                                    </div>
                                    <div class="form-group">
                                        <p>Bạn đã có tài khoản? <a href="javascript:void(0)" @click="isRegister = false">Đăng nhập ngay</a></p>
                                    </div>
                                    <div style="text-align: center;">
                                        <button type="button" class="btn btn-primary btn-flat" v-on:click="register()">
                                            <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="hidden"></i>&nbsp;Đăng ký
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="sheet-modal-inner segments" v-if="hasLogin">
                        <div class="toolbar">
                            <div class="toolbar-inner">
                                <div class="left" style="font-size: 18px;margin: 5px;">Viết nhận xét</div>
                            </div>
                        </div>
                        <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                            <div class="container" id="form-review" style="padding: 0px;width: 100%;">
                                <form style="padding-top: 10px;">
                                    <input id="ratings-hidden" name="rating" type="hidden">
                                    <div class="form-group">
                                        <textarea rows="3" class="form-control" placeholder="Nội dung nhận xét" id="content" v-model="content" ref="content"></textarea>
                                    </div>
                                    <div class="float-left">
                                        <star-rating :item-size="30"
                                                     border-color="#ffffff"
                                                     inactive-color="#D8D8D8"
                                                     active-color="#ffc107"
                                                     v-model="rating"
                                        ></star-rating>
                                    </div>
                                    <div style="text-align: right;">
                                        <button type="button" class="btn btn-primary btn-flat" v-on:click="submitReviews()">
                                            <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="hidden"></i>&nbsp;Đồng ý
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="form-review-success" class="hidden">
                <div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;"><div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                    <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
                    <div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                    <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                </div>
                <div class="swal2-title" style="">Đăng nhận xét thành công!</div>
                <div class="swal2-text" style="text-align: center;width: 100%;">Cám ơn bạn đã nhận xét sản phẩm!</div>
            </div>
        </div>
        <div class="col-md-6 float-left">
            <div class="content">
                <h2 style="margin-top:10px;font-size: 18px;text-align: center;">Tất cả nhận xét <small style="color: gray;">({{reviews.length}} nhận xét)</small></h2>
                <div v-if="ratingAvg > 0" style="display: inline-block;width: 100%;max-height: 564px;margin: 10px 0px;overflow-y: auto;word-break: break-word;">
                    <div class="text" v-for="review in reviews" style="margin-bottom: 20px">
                        <h5 style="font-size: 13px;margin: 0px;font-weight: bold;">{{ review.name }}
                            <small style="color: green;font-style: italic;"><i class="fas fa-check-circle"></i> Đã mua hàng</small>
                        </h5>
                        <ul class="rate-product" style="display: inline-flex;">
                            <li><i v-bind:class="review.rating >= '1' ? 'fas' : 'far'" class="fa-star" ></i></li>
                            <li><i v-bind:class="review.rating >= '2' ? 'fas' : 'far'" class="fa-star" ></i></li>
                            <li><i v-bind:class="review.rating >= '3' ? 'fas' : 'far'" class="fa-star" ></i></li>
                            <li><i v-bind:class="review.rating >= '4' ? 'fas' : 'far'" class="fa-star" ></i></li>
                            <li><i v-bind:class="review.rating >= '5' ? 'fas' : 'far'" class="fa-star" ></i></li>
                        </ul>
                        <p class="date" style="display: inline-flex;font-style: italic;color: gray;margin: 0;font-size: 10px;">
                            {{ review.created_date | moment("from", "now") }}
                        </p>
                        <!--                    <i class="fas fa-thumbs-up like-button"></i>-->
                        <p v-text="review.content" style="font-size: 12px;    margin: 0;"></p>
                    </div>
                </div>
                <div v-else style="display: inline-block;width: 100%;text-align: center;">
                    <p><i class="fas fa-comments" style="font-size: 100px;color: #b9b6b640;"></i></p>
                    <p class="center">Hãy trở thành người đầu tiên đánh giá sản phẩm này.</p>
                </div>
            </div>
            <div class="row justify-content-center"v-if="total_rating > 3">
                <a href="javascript:void(0);" class="view-more" v-bind:class="[isFinished ? 'finish' : 'load-more']" @click='getAllReviews(5)'>
                    <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="hidden"></i> {{buttonText}} &nbsp;<i class="fa fa-caret-down"></i>
                </a>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
    // import {StarRating} from 'vue-rate-it';
    // Vue.component('star-rating', StarRating);
    export default {
        data() {
            return {
                reviews: '',
                ratingAvg: 0,
                ratingDetail: '',
                percent_5_star: 0,
                number_5_star: 0,
                percent_4_star: 0,
                number_4_star: 0,
                percent_3_star: 0,
                number_3_star: 0,
                percent_2_star: 0,
                number_2_star:0,
                percent_1_star:0,
                number_1_star:0,
                url: '',
                total_rating: 0,
                product_name: '',
                rating: 0,
                username: '',
                fullname: '',
                phone: '',
                email: '',
                content: '',
                email_reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                phone_reg : /^((09|03|07|08|05)+([0-9]{8})\b)$/,
                reload: 0,
                isFinished: false,
                row: 0,
                buttonText: 'Xem thêm',
                submit: false,
                hidden: false,
                hasLogin: false,
                isRegister: false,
                password:''
            }
        },
        props: ['product_id'],
        components: {
            // StarRating
        },
        created() {
            this.url = url;
            this.getAllReviews(3);
            this.getRatingAvg();
            this.getRatingNumberDetail();
        },
        methods: {
            getRatingNumberDetail: function() {
                axios.get(url + '/api/rating-number-detail/'+this.product_id)
                    .then(response => {
                        this.ratingDetail = response.data;
                        for(let i=0; i<this.ratingDetail.length; i++) {
                            let obj = this.ratingDetail[i];
                            let objRating = Number(obj.rating);
                            if(objRating == 1) {
                                this.total_rating += Number(obj.number);
                                this.number_1_star = Number(obj.number);
                                this.percent_1_star = Number(obj.percent);
                            } else if(objRating == 2) {
                                this.total_rating += Number(obj.number);
                                this.number_2_star = Number(obj.number);
                                this.percent_2_star = Number(obj.percent);
                            } else if(objRating == 3) {
                                this.total_rating += Number(obj.number);
                                this.number_3_star = Number(obj.number);
                                this.percent_3_star = Number(obj.percent);
                            } else if(objRating == 4) {
                                this.total_rating += Number(obj.number);
                                this.number_4_star = Number(obj.number);
                                this.percent_4_star = Number(obj.percent);
                            } else if(objRating == 5) {
                                this.total_rating += Number(obj.number);
                                this.number_5_star = Number(obj.number);
                                this.percent_5_star = Number(obj.percent);
                            }
                        }
                    });
            },
            getRatingAvg: function() {
                axios.get(url + '/api/rating-avg/'+this.product_id)
                    .then(response => {
                        if(response.data !== '' && response.data > 0) {
                            this.ratingAvg = response.data;
                        }
                    });
            },
            getAllReviews: function (rowperpage) {
                this.hidden = true;
                axios.post(url + '/api/reviews', {
                    product_id: this.product_id,
                    row: this.row,
                    rowperpage: rowperpage
                }).then(response => {
                    console.log(response.data);
                    if (response.data !== '' && response.data.length > 0) {
                        this.row += rowperpage;
                        let len = this.reviews.length;
                        if (len > 0) {
                            this.buttonText = "Loading ...";
                            let that = this;
                            setTimeout(function () {
                                that.buttonText = 'Xem thêm';
                                for (let i = 0; i < response.data.length; i++) {
                                    that.reviews.push(response.data[i]);
                                }
                                that.hidden = false;
                            }, 500);
                        } else {
                            this.reviews = response.data;
                            if(response.data.length > 0) {
                                this.product_name = response.data[0].product_name;
                            }
                            this.hidden = false;
                        }
                    } else {
                        this.buttonText = "Không có thêm đánh giá.";
                        this.isFinished = true;
                        this.hidden = false;
                    }
                });
            },
            reloadReviews: function (rowperpage) {
                this.hidden = true;
                axios.post(url + '/api/reviews', {
                    product_id: this.product_id,
                    row: this.row,
                    rowperpage: rowperpage
                }).then(response => {
                    console.log(response.data);
                    if (response.data !== '' && response.data.length > 0) {
                        this.reviews = response.data;
                    }
                });
            },
            submitReviews: function () {
                if(!this.validate()) {
                    return false;
                }
                this.submit = true;
                let review = [];
                review.push({
                    "name": this.fullname,
                    "phone": this.phone,
                    "email": this.email,
                    "content" : this.content,
                    "rating" : this.rating,
                    "product_id": this.product_id,
                    "product_name": this.product_name
                });
                console.log(JSON.stringify(review));
                axios.post(url + "/api/submit-reviews", {
                    body: review
                }).then(response => {
                    console.log(response.data);
                    if(response.data === 201) {
                        $("#rating").addClass('hidden');
                        $("#form-review-success").removeClass('hidden');
                        // this.reload++;
                        this.row = 0;
                        this.reviews = [];
                        this.reloadReviews(3);
                        this.getRatingAvg();
                        this.getRatingNumberDetail();
                    } else {
                        this.$toast.error({
                            title:'Đã xảy ra lỗi',
                            message:'Vui lòng thử lại sau!'
                        });
                    }
                    this.submit = false;
                })
            },
            validate: function () {
                if(this.fullname && this.phone && this.content && this.rating) {
                    return true;
                }
                if(!this.fullname) {
                    this.$refs.fullname.focus();
                    this.$toast.error({
                        title:'Lỗi',
                        message:'Bạn chưa nhập tên'
                    });
                    return false;
                }
                if(this.phone === '') {
                    this.$toast.error({
                        title:'Lỗi',
                        message:'Bạn chưa nhập số điện thoại'
                    });
                    this.$refs.phone.focus();
                    return false;
                }  else if(!this.phone_reg.test(this.phone)) {
                    this.$toast.error({
                        title:'Lỗi',
                        message:'Số điện thoại chưa đúng'
                    });
                    this.$refs.phone.focus();
                    return false;
                }
                if(this.email !== '' && !this.email_reg.test(this.email)) {
                    this.$toast.error({
                        title:'Lỗi',
                        message:'Email chưa đúng'
                    });
                    this.$refs.email.focus();
                    return false;
                }
                if(!this.content) {
                    this.$toast.error({
                        title:'Lỗi',
                        message:'Bạn chưa nhập nội dung nhận xét'
                    });
                    this.$refs.content.focus();
                    return false;
                }
                if(!this.rating) {
                    this.$toast.error({
                        title:'Lỗi',
                        message:'Bạn chưa chọn số sao'
                    });
                    return false;
                }
            },
            isPhoneValid: function() {
                return (this.phone === "")? "" : (this.phone_reg.test(this.phone)) ? 'has-success' : 'has-error';
            },
            isEmailValid: function() {
                return (this.email === "")? "" : (this.email_reg.test(this.email)) ? 'has-success' : 'has-error';
            },
            isPasswordValid: function() {
                return this.password.length >= 6 ? 'has-success' : 'has-error';
            }
        },
    }

</script>
