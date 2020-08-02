<template>
  <section class="section related-product" id="reviews_component" style="background: rgb(255, 255, 255);border-radius: 0 6px 6px 0;">
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
            <div v-if="isReviewed">
                <p>Bạn đã thực hiện đánh giá sản phẩm này</p>
            </div>
            <div id="rating" class="col-md-12" v-if="!reviews_success && !isReviewed">
                <div class="sheet-modal rating-sheet">
                    <div v-if="!isLogged" style="display:inline-block;text-align: center;width:100%" class="mt-4 mb-4">
                        <p style="display:inline-block;">Hãy </p>
                        <p style="display:inline-block;"><login-component></login-component></p>
                        <p style="display:inline-block;margin-right: 5px;">để thực hiện đánh giá sản phẩm</p>
                    </div>
                    <div v-else class="sheet-modal-inner segments">
<!--                        <div class="toolbar">-->
<!--                            <div class="toolbar-inner">-->
<!--                                <div class="left" style="font-size: 18px;margin: 5px;">Viết nhận xét</div>-->
<!--                            </div>-->
<!--                        </div>-->
                        <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                            <div class="container" id="form-review" style="padding: 0px;width: 100%;">
                                <form style="padding-top: 10px;">
                                    <input id="ratings-hidden" name="rating" type="hidden">
                                    <div class="form-group">
                                        <label for="content">Viết nhận xét</label>
                                        <textarea rows="3"
                                          :class="['form-control', !is_valid_content || !is_valid_content_length ? 'form-control--error' : '']"
                                          placeholder="Nội dung nhận xét" id="content" v-model="content" ref="content"></textarea>
                                        <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_content">
                                            Trường này là bắt buộc
                                        </p>
                                        <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="is_valid_content && !is_valid_content_length">
                                            Nội dung nhận xét tối thiểu phải gồm 20 ký tự
                                        </p>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="checkbox" v-model="purchased" id="purchased"> Đã mua sản phẩm này
                                        </label>
                                    </div>
                                    <div class="float-left">
                                        <star-rating
                                            :class="[!is_valid_rating ? 'form-control form-control--error' : '']"
                                            :item-size="30"
                                             border-color="#ffffff"
                                             inactive-color="#D8D8D8"
                                             active-color="#ffc107"
                                             v-model="rating"
                                        ></star-rating>
                                        <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_rating">
                                            Trường này là bắt buộc
                                        </p>
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
            <div id="form-review-success" v-if="reviews_success">
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
                        <h5 style="font-size: 14px;margin: 0px;font-weight: bold;">{{ review.name }}
                            <small style="color: green;font-style: italic;" v-if="review.purchased"><i class="fas fa-check-circle"></i> Đã mua hàng</small>
                        </h5>
                        <ul class="rate-product" style="display: inline-flex;">
                            <li><i v-bind:class="review.rating >= '1' ? 'fas' : 'far'" class="fa-star" ></i></li>
                            <li><i v-bind:class="review.rating >= '2' ? 'fas' : 'far'" class="fa-star" ></i></li>
                            <li><i v-bind:class="review.rating >= '3' ? 'fas' : 'far'" class="fa-star" ></i></li>
                            <li><i v-bind:class="review.rating >= '4' ? 'fas' : 'far'" class="fa-star" ></i></li>
                            <li><i v-bind:class="review.rating >= '5' ? 'fas' : 'far'" class="fa-star" ></i></li>
                        </ul>
                        <p class="date" style="display: inline-flex;font-style: italic;color: gray;margin: 0;font-size: 11px;">
                            {{ review.created_date | moment("from", "now") }}
                        </p>
                        <!--                    <i class="fas fa-thumbs-up like-button"></i>-->
                        <p v-text="review.content" style="font-size: 13px;margin: 0;line-height: 2;"></p>
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
    import login from './LoginComponent.vue';
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
                content: '',
                email_reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                phone_reg : /^((09|03|07|08|05)+([0-9]{8})\b)$/,
                reload: 0,
                isFinished: false,
                row: 0,
                buttonText: 'Xem thêm',
                submit: false,
                hidden: false,
                isLogged: true,
                customer_name: '',
                reviews_success: false,
                isReviewed: false,
                is_valid_content: true,
                is_valid_rating: true,
                is_valid_content_length: true,
                customer_id: '',
                purchased: false
            }
        },
        mixins: [
            login
        ],
        props: ['product_id'],
        components: {
            // StarRating
        },
        created() {
            this.url = url;
            this.checkLogged();
            this.getAllReviews(3);
            this.getRatingAvg();
            this.getRatingNumberDetail();
        },
        watch: {
            content: function () {
                this.is_valid_content = this.content;
                this.is_valid_content_length = this.is_valid_content && this.is_valid_content.length > 20;
            },
            rating: function() {
                this.is_valid_rating = this.rating;
            }
        },
        methods: {
            checkLogged: function() {
                axios.post(url + '/api/check-logged')
                    .then(response => {
                        if(response.data !== 'not_exist_user') {
                            this.isLogged = true;
                            this.customer_name = response.data.name;
                            this.customer_id = response.data.id;
                            this.checkReviewed();
                        } else {
                            this.isLogged = false;
                        }
                    }).catch(e =>{
                        this.isLogged = false;
                    });
            },
            checkReviewed: function() {
                axios.post(url + '/api/check-reviewed',{
                    customer_id: this.customer_id,
                    product_id: this.product_id
                }).then(response => {
                        if(response.data > 0) {
                            this.isReviewed = true;
                        }
                    }).catch(e =>{
                    this.isLogged = false;
                });
            },
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
                    "customer_id": this.customer_id,
                    "content" : this.content,
                    "rating" : this.rating,
                    "product_id": this.product_id,
                    "product_name": this.product_name,
                    "purchased": this.purchased
                });
                axios.post(url + "/api/submit-reviews", {
                    body: review
                }).then(response => {
                    if(response.status === 200) {
                        this.reviews_success = true;
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
                let is_valid_form = true;
                if(!this.content) {
                    this.is_valid_content = false;
                    is_valid_form = false;
                }
                if(!this.rating) {
                    this.is_valid_rating = false;
                    is_valid_form = false;
                }
                return is_valid_form;
            },
        },
    }

</script>
<style>
    .rating-block i.fa-star.far {
        color: rgb(255, 255, 255) !important;
    }
</style>