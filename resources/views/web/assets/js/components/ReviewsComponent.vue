<template>
  <section class="section related-product" style="background: rgb(255, 255, 255);border-radius: 0 6px 6px 0;">
    <div id="product-tabs-slider" class="scroll-tabs outer-top-vs">
      <div class="more-info-tab clearfix ">
        <h3 class="new-product-title pull-left">Nhận xét và đánh giá</h3>
      </div>
    </div>
    <div class="product-review segments" style="display: inline-block;">
        <div class="row col-md-6" style="margin: 0;display: inline-block;padding:45px 0px 20px 0px;">
            <div class="rating-block col-md-6 float-left" style="padding: 20px 5px;text-align: center;display: inline-block;">
                <h1 class="bold padding-bottom-7" style="padding-bottom: 5px;margin-top: 0px;font-size: 50px;font-weight: 600;color: red;">{{ratingAvg}}/5</h1>
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
            <div class="rating-breakdown col-md-6 float-left" style="padding: 0px 5px;">
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
        <div id="rating" class="col-md-6 float-left">
          <div class="sheet-modal rating-sheet">
            <div class="toolbar">
              <div class="toolbar-inner">
                <div class="left" style="font-size: 18px;margin: 5px;">Viết nhận xét</div>
              </div>
            </div>
            <div class="sheet-modal-inner segments">
              <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                <div class="container" id="form-review" style="padding: 0px;">
                  <form style="padding-top: 10px;">
                    <input id="ratings-hidden" name="rating" type="hidden">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Họ tên" id="fullname" v-model="fullname" ref="fullname">
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
                    <div class="float-left">
                      <star-rating :item-size="30"
                                   border-color="#ffffff"
                                   inactive-color="#D8D8D8"
                                   active-color="#ffc107"
                                   v-model="rating"
                      ></star-rating>
                    </div>
                    <div style="text-align: right;">
                      <button type="button" class="btn btn-primary" v-on:click="submitReviews()">Đồng ý</button>
                    </div>
                  </form>
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
            </div>
          </div>
        </div>
          <div v-if="ratingAvg > 0" style="display: inline-block;width: 100%;">
              <div class="content" v-for="review in reviews" style="display: inline-block;width: 100%;padding: 0 20px;border-top: 1px solid #80808036;">
                  <div class="text">
                      <h5>{{ review.name }}</h5>
                      <ul class="rate-product" style="display: inline-flex;">
                          <li><i v-bind:class="review.rating >= '1' ? 'fas' : 'far'" class="fa-star" ></i></li>
                          <li><i v-bind:class="review.rating >= '2' ? 'fas' : 'far'" class="fa-star" ></i></li>
                          <li><i v-bind:class="review.rating >= '3' ? 'fas' : 'far'" class="fa-star" ></i></li>
                          <li><i v-bind:class="review.rating >= '4' ? 'fas' : 'far'" class="fa-star" ></i></li>
                          <li><i v-bind:class="review.rating >= '5' ? 'fas' : 'far'" class="fa-star" ></i></li>
                      </ul>
                      <p class="date" style="display: inline-flex;font-style: italic;color: gray;">
                          {{ review.created_date | moment("from", "now") }}
                      </p>
                      <!--                    <i class="fas fa-thumbs-up like-button"></i>-->
                      <p v-text="review.content" style="font-size: 14px;"></p>
                  </div>
              </div>
              <!-- divider -->
              <div class="divider-line-half"></div>
          </div>
          <div v-else style="display: inline-block;width: 100%;text-align: center;">
              <p><i class="fas fa-comments" style="font-size: 100px;color: #b9b6b640;"></i></p>
              <p class="center">Hãy trở thành người đầu tiên đánh giá sản phẩm này.</p>
          </div>
          <!-- end divider -->
          <!-- view all reviews -->
          <div class="view-all-review" v-if="total_rating > 3">
              <a v-bind:href="product_name | change_to_slug | url_reviews(this.product_id)">Xem tất cả</a>
<!--            <button class="btn btn-primary">Xem tất cả</button>-->
          </div>
          <!-- end view all reviews -->
      </div>
  </section>
</template>

<script>
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
                fullname: '',
                phone: '',
                email: '',
                content: '',
                email_reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                phone_reg : /^((09|03|07|08|05)+([0-9]{8})\b)$/,
                reload: 0
            }
        },
        props: ['product_id'],
        created() {
            this.url = url;
            this.getAllReviews();
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
            getAllReviews: function () {
                axios.get(url + '/api/reviews/'+this.product_id)
                    .then(response => {
                        this.reviews = response.data;
                        if(response.data.length > 0) {
                            this.product_name = response.data[0].product_name;
                        }
                    });
            },
            submitReviews: function () {
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
                    "product_id": this.product_id
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
            isPhoneValid: function() {
                return (this.phone === "")? "" : (this.phone_reg.test(this.phone)) ? 'has-success' : 'has-error';
            },
            isEmailValid: function() {
                return (this.email === "")? "" : (this.email_reg.test(this.email)) ? 'has-success' : 'has-error';
            }
        },
    }

</script>
