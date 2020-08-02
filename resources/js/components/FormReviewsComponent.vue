<template>
    <div class="product-review segments" id="form_reviews">
        <div v-if="isReviewed">
            <p>Bạn đã thực hiện đánh giá sản phẩm này</p>
        </div>
        <div v-else :class="['sheet-modal rating-sheet', is_show_popup ? 'modal-in' : '']">
            <div class="toolbar">
                <div class="toolbar-inner">
                    <div class="left">Viết nhận xét</div>
                    <div class="right">
                        <a href="javascript:void(0);" class="link sheet-close" v-on:click="cancelReview()"><i class="fas fa-check"></i></a>
                    </div>
                </div>
            </div>
            <div class="sheet-modal-inner segments">
                <div v-if="!isLogged" style="display:inline-block;text-align: center;width:100%" class="mt-4 mb-4">
                    <p style="display:inline-block;">Hãy </p>
                    <p style="display:inline-block;"><login-component></login-component></p>
                    <p style="display:inline-block;margin-right: 5px;">để thực hiện đánh giá sản phẩm</p>
                </div>
                <div v-else class="page-content" style="background: #fff;padding-bottom: 20px;">
                    <div v-if="!reviews_success" class="container" id="form-review">
                        <form style="padding-top: 10px;">
                            <input id="ratings-hidden" name="rating" type="hidden">
                            <div class="form-group">
                                <label for="content">Nội dung nhận xét</label>
                                <textarea rows="3"
                                          :class="['form-control', !is_valid_content || !is_valid_content_length ? 'form-control--error' : '']"
                                          placeholder="Nội dung nhận xét" id="content" v-model="content" ref="content"></textarea>
                                <p class="text-left mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_content">
                                    Trường này là bắt buộc
                                </p>
                                <p class="text-left mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="is_valid_content && !is_valid_content_length">
                                    Nội dung nhận xét tối thiểu phải gồm 20 ký tự
                                </p>
                            </div>
                            <div class="text-right">
                                <div class="col-md-12 d-inline-block text-left no-padding mb-2">
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
                                    <p class="text-left mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_rating">
                                        Trường này là bắt buộc
                                    </p>
                                </div>
                                <div class="float-right">
                                    <button type="button" class="btn btn-primary" v-on:click="submitReviews()" :disabled="show_loading">
                                        <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="show_loading"></i>&nbsp;Đồng ý
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div v-else id="form-review-success">
                        <div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;"><div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                            <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
                            <div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                            <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                        </div>
                        <div class="swal2-title" style="">Đăng nhận xét thành công!</div>
                        <div class="swal2-text" style="text-align: center;width: 100%;">Cám ơn bạn đã nhận xét sản phẩm!</div>
                        <div class="swal2-footer" style="text-align: center;margin-top: 0;">
                            <div class="swal2-button-container" style="width: 50%;margin: auto;">
                                <button class="link sheet-close btn btn-danger" v-on:click="cancelReview()">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLogged: false,
                is_valid_rating: true,
                purchased: false,
                is_valid_content: true,
                is_valid_content_length: true,
                reviews_success: false,
                customer_id: '',
                isReviewed: false,
                rating: 0,
                content: '',
                show_loading: false,
                is_show_popup: false
            }
        },
        props: ['product_id', 'product_name'],
        created() {
            this.checkLogged();
        },
        watch: {
            content: function () {
                this.is_valid_content = this.content ? true : false;
                this.is_valid_content_length = this.content && this.content.length > 20;
            },
            rating: function() {
                this.is_valid_rating = this.rating;
            }
        },
        methods: {
            // check logged form reviews
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
                            this.isReviewed = false;
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
            submitReviews: function () {
                if(!this.validate()) {
                    return false;
                }
                this.show_loading = true;
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
                    this.show_loading = false;
                    if(response.status === 200) {
                        this.reviews_success = true;
                        this.row = 0;
                        this.reviews = [];
                        let that = this;
                        $.each(this.$root.$children, function(k, v){
                            let id = this.$el.id;
                            if(id === 'reviews_component') {
                                that.$root.$children[k].reloadReviews(3);
                                that.$root.$children[k].getRatingAvg();
                                that.$root.$children[k].getRatingNumberDetail();
                            }
                        });

                    } else {
                        this.$toast.error({
                            title:'Đã xảy ra lỗi',
                            message:'Vui lòng thử lại sau!'
                        });
                    }
                }).catch(e => {
                    this.show_loading = false;
                });
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
            cancelReview: function () {
                this.content = '';
                this.rating = 0;
                this.is_valid_rating = true;
                this.purchased = false;
                this.is_valid_content = true;
                this.is_valid_content_length = true;
                this.is_show_popup = false;
            },
        },
    }

</script>
