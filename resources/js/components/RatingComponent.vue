<template>
    <div class="product-review segments">
        <div class="row col-sm-12" style="display: inline-block;">
            <div class="float-left">
                <i v-bind:class="ratingAvg == 0 ? 'far fa-star' : (ratingAvg >= 1 ? 'fas fa-star' : 'fas fa-star-half-alt')" style="color:#ffc107;"></i>
                <i v-bind:class="ratingAvg > 1 ? (ratingAvg >= 2 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                <i v-bind:class="ratingAvg > 2 ? (ratingAvg >= 3 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                <i v-bind:class="ratingAvg > 3 ? (ratingAvg >= 4 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                <i v-bind:class="ratingAvg > 4 ? (ratingAvg >= 5 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
            </div>
            <a class="float-left" v-bind:href="this.product_name | change_to_slug | url_reviews(this.product_id)" v-if="totalReviews > 0">
                &nbsp;(Xem {{totalReviews}} nhận xét)
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ratingAvg: '',
                totalReviews: 0
            }
        },
        props: {
            product_id: Number,
            product_name: String
        },
        created() {
            this.getRatingAvg();
            this.getTotalReviews()
        },
        methods: {
            getRatingAvg: function() {
                axios.get(url + '/api/rating-avg/'+this.product_id)
                    .then(response => {
                        if(response.data !== '' && response.data > 0) {
                            this.ratingAvg = response.data;
                        }
                    });
            },
            getTotalReviews: function () {
                axios.get(url + '/api/total-reviews/'+this.product_id)
                    .then(response => {
                        if(response.data !== '' && response.data > 0) {
                            this.totalReviews = response.data;
                        }
                    });
            }
        },
    }

</script>
