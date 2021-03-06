@extends('theme.layout.layout')
@section('title', 'Đánh giá cho sản phẩm '.$product->name)
@section('content')
    <div id="app"></div>
    <div id="reviews" class="view view-reviews ios-edges" xmlns:v-bind="http://www.w3.org/1999/xhtml">
        <div class="page">
            @include('theme.layout.tabbar')
            <sidebar-component></sidebar-component>
            <div class="navbar navbar-page">
                <div class="navbar-inner sliding">
                    <div class="left">
                        <a v-bind:href="product_name | change_to_slug | url_product(product_id)" class="link back">
                            <i class="fas fa-arrow-left"></i>
                        </a>
                    </div>
                    <div class="title">
                        {{ count($reviews) }} đánh giá cho sản phẩm {{ $product->name }}
                    </div>
                    <div class="right"></div>
                    <div class="subnavbar">
                        <div class="subnavbar-inner">
                            <div class="all-rating">
                                <ul>
                                    <li><i class="{{ $rating_avg >= 1 ? 'fas fa-star' : 'far fa-star' }}" ></i></li>
                                    <li><i class="{{ $rating_avg > 1 ? ($rating_avg >= 2 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' }}" ></i></li>
                                    <li><i class="{{ $rating_avg > 2 ? ($rating_avg >= 3 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' }}" ></i></li>
                                    <li><i class="{{ $rating_avg > 3 ? ($rating_avg >= 4 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' }}" ></i></li>
                                    <li><i class="{{ $rating_avg > 4 ? ($rating_avg == 5 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' }}" ></i></li>
                                    <li class="rating-total">{{$rating_avg}}<span> ({{ count($reviews) }})</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-content hide-navbar-on-scroll">
                <!-- all reviews -->
                <div class="all-reviews product-review segments">
                    <div class="container">
                        @foreach($reviews as $review => $value)
                        <div class="content">
                            <img src="{{ url('public/images/user-buyer2.png') }}" alt="">
                            <div class="text">
                                <h6>{{ $value->name }}</h6>
                                <ul class="rate-product">
                                    <li><i class="{{ $value->rating >= 1 ? 'fas' : 'far' }} fa-star" ></i></li>
                                    <li><i class="{{ $value->rating >= 2 ? 'fas' : 'far' }} fa-star" ></i></li>
                                    <li><i class="{{ $value->rating >= 3 ? 'fas' : 'far' }} fa-star" ></i></li>
                                    <li><i class="{{ $value->rating >= 4 ? 'fas' : 'far' }} fa-star" ></i></li>
                                    <li><i class="{{ $value->rating >= 5 ? 'fas' : 'far' }} fa-star" ></i></li>
                                </ul>
                                <p class="date">
                                    <all-reviews-component :created_date="'{{$value->created_date}}'"/>
                                </p>
                                <p>{{ $value->content }}</p>
                            </div>
                        </div>
                        <!-- divider -->
                        <div class="divider-line-half"></div>
                        <!-- end divider -->
                        @endforeach
                    </div>
                </div>
                <!-- end all reviews -->
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script>
        new Vue({
            el: '#reviews',
            data() {
                return {
                    url: '',
                    product_name: '',
                    product_id: ''
                }
            },
            created: function() {
                this.url = url;
                this.product_name = '{{$product->name}}';
                this.product_id = '{{$product->id}}';
            },
        });
    </script>
@endsection
