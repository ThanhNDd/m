<template>
    <div class="product-review segments">
        <div class="row col-sm-12" style="margin: 0;display: inline-block;width: 100%;padding:0px 0px 20px 0px;">
            <div class="rating-block float-left" style="padding: 20px 5px;width: 49%;text-align: center;">
                <h2 class="bold padding-bottom-7" style="padding-bottom: 5px;font-size: 40px;">{{ratingAvg}}</h2>
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
            <div class="rating-breakdown float-right" style="width: 50%;padding: 0 5px;">
                <div class="float-left">
                    <div class="float-left" style="width:30px; line-height:1;">
                        <div style="height:9px; margin:5px 0;">5 <i class="far fa-star"></i></div>
                    </div>
                    <div class="float-left" style="width:110px;">
                        <div class="progress" style="height:9px; margin:8px 0;">
                            <div class="progress-bar bg-success" v-bind:style="{'width':percent_5_star+ '%'}" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5">
                                <span class="sr-only">80% Complete (danger)</span>
                            </div>
                        </div>
                    </div>
                    <div class="float-right" style="margin-left:5px;margin-top: 5px;">{{ number_5_star }}</div>
                </div>
                <div class="float-left">
                    <div class="float-left" style="width:30px; line-height:1;">
                        <div style="height:9px; margin:5px 0;">4 <i class="far fa-star"></i></div>
                    </div>
                    <div class="float-left" style="width:110px;">
                        <div class="progress" style="height:9px; margin:8px 0;">
                            <div class="progress-bar bg-primary" v-bind:style="{'width':percent_4_star+ '%'}" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5">
                                <span class="sr-only">80% Complete (danger)</span>
                            </div>
                        </div>
                    </div>
                    <div class="float-right" style="margin-left:5px;margin-top: 5px;">{{ number_4_star }}</div>
                </div>
                <div class="float-left">
                    <div class="float-left" style="width:30px; line-height:1;">
                        <div style="height:9px; margin:5px 0;">3 <i class="far fa-star"></i></div>
                    </div>
                    <div class="float-left" style="width:110px;">
                        <div class="progress" style="height:9px; margin:8px 0;">
                            <div class="progress-bar bg-info" v-bind:style="{'width':percent_3_star+ '%'}" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5">
                                <span class="sr-only">80% Complete (danger)</span>
                            </div>
                        </div>
                    </div>
                    <div class="float-right" style="margin-left:5px;margin-top: 5px;">{{ number_3_star }}</div>
                </div>
                <div class="float-left">
                    <div class="float-left" style="width:30px; line-height:1;">
                        <div style="height:9px; margin:5px 0;">2 <i class="far fa-star"></i></div>
                    </div>
                    <div class="float-left" style="width:110px;">
                        <div class="progress" style="height:9px; margin:8px 0;">
                            <div class="progress-bar bg-warning" v-bind:style="{'width':percent_2_star+ '%'}" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5">
                                <span class="sr-only">80% Complete (danger)</span>
                            </div>
                        </div>
                    </div>
                    <div class="float-right" style="margin-left:5px;margin-top: 5px;">{{ number_2_star }}</div>
                </div>
                <div class="float-left">
                    <div class="float-left" style="width:30px; line-height:1;">
                        <div style="height:9px; margin:5px 0;">1 <i class="far fa-star"></i></div>
                    </div>
                    <div class="float-left" style="width:110px;">
                        <div class="progress" style="height:9px; margin:8px 0;">
                            <div class="progress-bar bg-danger" v-bind:style="{'width':percent_1_star+ '%'}" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5">
                                <span class="sr-only">80% Complete (danger)</span>
                            </div>
                        </div>
                    </div>
                    <div class="float-right" style="margin-left:5px;margin-top: 5px;">{{ number_1_star }}</div>
                </div>
            </div>
        </div>
        <div  v-if="ratingAvg > 0">
            <div v-for="review in reviews">
                <div class="content">
                    <img v-bind:src="url + '/public/images/user-buyer2.png'" alt="">
                    <div class="text">
                        <h6>{{ review.name }}</h6>
                        <ul class="rate-product">
                            <li><i v-bind:class="review.rating >= '1' ? 'fas' : 'far'" class="fa-star" ></i></li>
                            <li><i v-bind:class="review.rating >= '2' ? 'fas' : 'far'" class="fa-star" ></i></li>
                            <li><i v-bind:class="review.rating >= '3' ? 'fas' : 'far'" class="fa-star" ></i></li>
                            <li><i v-bind:class="review.rating >= '4' ? 'fas' : 'far'" class="fa-star" ></i></li>
                            <li><i v-bind:class="review.rating >= '5' ? 'fas' : 'far'" class="fa-star" ></i></li>
                        </ul>
                        <p class="date">
                            {{ review.created_date | moment("from", "now") }}
                        </p>
                        <!--                    <i class="fas fa-thumbs-up like-button"></i>-->
                        <p v-text="review.content"></p>
                    </div>
                </div>
                <!-- divider -->
                <div class="divider-line-half"></div>
            </div>
        </div>
        <div v-else>
            <p class="center">Hãy trở thành người đầu tiên đánh giá sản phẩm này.</p>
        </div>
        <!-- end divider -->
        <!-- view all reviews -->
        <div class="view-all-review" v-if="total_rating > 3">
            <a v-bind:href="product_name | change_to_slug | url_reviews(this.product_id)">Xem tất cả</a>
        </div>
        <!-- end view all reviews -->
    </div>
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
                product_name: ''
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
                            this.product_name = response.data[0].name;
                        }
                    });
            },
        },
    }

</script>
