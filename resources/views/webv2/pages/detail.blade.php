@extends('webv2.layout.layout')
@section('title', 'Thời trang trẻ em thu đông 2020 | Quần áo trẻ em thu đông 2020 | Quần áo bé trai, váy bé gái')
@section('content')
  @include('webv2.pages.breadcrum')
  <input type="hidden" id="cat_id" ref="categoryId" value="{{$product->category_id}}">
  <input type="hidden" id="product_id" ref="productId" value="{{$product->id}}">
  <input type="hidden" id="type_id" ref="typeId" value="{{$product->type}}">
<div class="body-content outer-top-xs" id="app">
  <div class='container'>
    <div class='row single-product'>
      <!-- /.sidebar -->
      <div class='col-md-12'>
        <div class="detail-block">
          <div class="row  wow fadeInUp">

            <div class="col-xs-12 col-sm-6 col-md-5 gallery-holder">
              <slider-gallery-component :product_name="'{{$product->name}}'"></slider-gallery-component>
            </div><!-- /.gallery-holder -->
            <div class='col-sm-6 col-md-7 product-info-block'>
              <div class="product-info">
                <h1 class="name">{{$product->name}}</h1>

{{--                <div class="rating-reviews m-t-20">--}}
{{--                  <div class="row">--}}
{{--                    <div class="col-sm-4 col-xs-4">--}}
{{--                      <div class="rating rateit-small"></div>--}}
{{--                    </div>--}}
{{--                    <div class="col-sm-8 col-xs-8">--}}
{{--                      <div class="reviews">--}}
{{--                        <a href="#" class="lnk">(13 Reviews)</a>--}}
{{--                      </div>--}}
{{--                    </div>--}}
{{--                  </div><!-- /.row -->--}}
{{--                </div><!-- /.rating-reviews -->--}}

                <div class="stock-container info-container m-t-10">
                  <div class="row">
                    <div class="col-sm-2 col-xs-2">
                      <div class="stock-box">
                        <span class="label">Tình trạng :</span>
                      </div>
                    </div>
                    <div class="col-sm-8 col-xs-8">
                      <div class="stock-box">
                        <status-component :product_id="{{$product->id}}"></status-component>
                      </div>
                    </div>
                  </div><!-- /.row -->
                </div><!-- /.stock-container -->
                <div class="stock-container info-container m-t-10">
                  <div class="row">
                    <div class="col-sm-2 col-xs-2">
                      <div class="stock-box">
                        <span class="label">Mã sản phẩm :</span>
                      </div>
                    </div>
                    <div class="col-sm-8 col-xs-8">
                      <div class="stock-box text-secondary">
                        {{$product->id}}
                      </div>
                    </div>
                  </div><!-- /.row -->
                </div>

{{--                <div class="description-container m-t-20">--}}
{{--                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.--}}
{{--                </div><!-- /.description-container -->--}}

                <div class="price-container info-container m-t-20">
                  <div class="row">


                    <div class="col-xs-12 col-sm-12 col-md-6">
                      <div class="price-box">
                        <span class="price" id="price">{{ $retail }}<sup style="top: -10px;font-size: 16px;"> đ</sup></span>
{{--                        <span class="price-strike">$900.00</span>--}}
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6">
                      <div class="favorite-button">
                        <a class="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Lưu vào yêu thích" href="#">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a class="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Add to Compare" href="#">
                          <i class="fa fa-signal"></i>
                        </a>
{{--                        <a class="btn btn-primary" data-toggle="tooltip" data-placement="right" title="E-mail" href="#">--}}
{{--                          <i class="fa fa-envelope"></i>--}}
{{--                        </a>--}}
                      </div>
                    </div>

                  </div><!-- /.row -->
                </div><!-- /.price-container -->
                <attributes-component></attributes-component>
{{--                <div class="quantity-container info-container">--}}
{{--                  <div class="row">--}}
{{--                    <div class="col-xs-4 col-sm-4">--}}
{{--                      <div class="cart-quantity">--}}
{{--                        <div class="quant-input">--}}
{{--                          <div class="arrows">--}}
{{--                            <div class="arrow plus gradient"><span class="ir"><i class="icon fa fa-sort-asc"></i></span></div>--}}
{{--                            <div class="arrow minus gradient"><span class="ir"><i class="icon fa fa-sort-desc"></i></span></div>--}}
{{--                          </div>--}}
{{--                          <input type="text" value="1">--}}
{{--                        </div>--}}
{{--                      </div>--}}
{{--                    </div>--}}
{{--                    <div class="col-xs-8 col-sm-8">--}}
{{--                      <a href="#" class="btn btn-primary"><i class="fa fa-shopping-cart inner-right-vs"></i> THÊM VÀO GIỎ</a>--}}
{{--                      <a href="#" class="btn btn-danger"><i class="fa fa-shopping-cart inner-right-vs"></i> MUA NGAY</a>--}}
{{--                    </div>--}}

{{--                  </div><!-- /.row -->--}}
{{--                </div><!-- /.quantity-container -->--}}

              </div><!-- /.product-info -->
            </div><!-- /.col-sm-7 -->
          </div><!-- /.row -->
        </div>

        <div class="product-tabs inner-bottom-xs  wow fadeInUp">
          <div class="row">
            <div class="col-sm-3">
              <ul id="product-tabs" class="nav nav-tabs nav-tab-cell">
                <li class="active"><a data-toggle="tab" href="#description">Description</a></li>
                <li><a data-toggle="tab" href="#review">Review</a></li>
                <li><a data-toggle="tab" href="#tags">Tags</a></li>
              </ul><!-- /.nav-tabs #product-tabs -->
            </div>
            <div class="col-sm-9">

              <div class="tab-content">

                <div id="description" class="tab-pane in active">
                  <div class="product-tab">
                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div><!-- /.tab-pane -->

                <div id="review" class="tab-pane">
                  <div class="product-tab">

                    <div class="product-reviews">
                      <h4 class="title">Customer Reviews</h4>

                      <div class="reviews">
                        <div class="review">
                          <div class="review-title"><span class="summary">We love this product</span><span class="date"><i class="fa fa-calendar"></i><span>1 days ago</span></span></div>
                          <div class="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam suscipit."</div>
                        </div>

                      </div><!-- /.reviews -->
                    </div><!-- /.product-reviews -->



                    <div class="product-add-review">
                      <h4 class="title">Write your own review</h4>
                      <div class="review-table">
                        <div class="table-responsive">
                          <table class="table">
                            <thead>
                            <tr>
                              <th class="cell-label">&nbsp;</th>
                              <th>1 star</th>
                              <th>2 stars</th>
                              <th>3 stars</th>
                              <th>4 stars</th>
                              <th>5 stars</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td class="cell-label">Quality</td>
                              <td><input type="radio" name="quality" class="radio" value="1"></td>
                              <td><input type="radio" name="quality" class="radio" value="2"></td>
                              <td><input type="radio" name="quality" class="radio" value="3"></td>
                              <td><input type="radio" name="quality" class="radio" value="4"></td>
                              <td><input type="radio" name="quality" class="radio" value="5"></td>
                            </tr>
                            <tr>
                              <td class="cell-label">Price</td>
                              <td><input type="radio" name="quality" class="radio" value="1"></td>
                              <td><input type="radio" name="quality" class="radio" value="2"></td>
                              <td><input type="radio" name="quality" class="radio" value="3"></td>
                              <td><input type="radio" name="quality" class="radio" value="4"></td>
                              <td><input type="radio" name="quality" class="radio" value="5"></td>
                            </tr>
                            <tr>
                              <td class="cell-label">Value</td>
                              <td><input type="radio" name="quality" class="radio" value="1"></td>
                              <td><input type="radio" name="quality" class="radio" value="2"></td>
                              <td><input type="radio" name="quality" class="radio" value="3"></td>
                              <td><input type="radio" name="quality" class="radio" value="4"></td>
                              <td><input type="radio" name="quality" class="radio" value="5"></td>
                            </tr>
                            </tbody>
                          </table><!-- /.table .table-bordered -->
                        </div><!-- /.table-responsive -->
                      </div><!-- /.review-table -->

                      <div class="review-form">
                        <div class="form-container">
                          <form role="form" class="cnt-form">

                            <div class="row">
                              <div class="col-sm-6">
                                <div class="form-group">
                                  <label for="exampleInputName">Your Name <span class="astk">*</span></label>
                                  <input type="text" class="form-control txt" id="exampleInputName" placeholder="">
                                </div><!-- /.form-group -->
                                <div class="form-group">
                                  <label for="exampleInputSummary">Summary <span class="astk">*</span></label>
                                  <input type="text" class="form-control txt" id="exampleInputSummary" placeholder="">
                                </div><!-- /.form-group -->
                              </div>

                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="exampleInputReview">Review <span class="astk">*</span></label>
                                  <textarea class="form-control txt txt-review" id="exampleInputReview" rows="4" placeholder=""></textarea>
                                </div><!-- /.form-group -->
                              </div>
                            </div><!-- /.row -->

                            <div class="action text-right">
                              <button class="btn btn-primary btn-upper">SUBMIT REVIEW</button>
                            </div><!-- /.action -->

                          </form><!-- /.cnt-form -->
                        </div><!-- /.form-container -->
                      </div><!-- /.review-form -->

                    </div><!-- /.product-add-review -->

                  </div><!-- /.product-tab -->
                </div><!-- /.tab-pane -->

                <div id="tags" class="tab-pane">
                  <div class="product-tag">

                    <h4 class="title">Product Tags</h4>
                    <form role="form" class="form-inline form-cnt">
                      <div class="form-container">

                        <div class="form-group">
                          <label for="exampleInputTag">Add Your Tags: </label>
                          <input type="email" id="exampleInputTag" class="form-control txt">


                        </div>

                        <button class="btn btn-upper btn-primary" type="submit">ADD TAGS</button>
                      </div><!-- /.form-container -->
                    </form><!-- /.form-cnt -->

                    <form role="form" class="form-inline form-cnt">
                      <div class="form-group">
                        <label>&nbsp;</label>
                        <span class="text col-md-offset-3">Use spaces to separate tags. Use single quotes (') for phrases.</span>
                      </div>
                    </form><!-- /.form-cnt -->

                  </div><!-- /.product-tab -->
                </div><!-- /.tab-pane -->

              </div><!-- /.tab-content -->
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.product-tabs -->

        <!-- ============================================== UPSELL PRODUCTS ============================================== -->
        <section class="section featured-product wow fadeInUp">
          <div class="section-title"><h3>Upsell products</h3></div>
          <div class="owl-carousel home-owl-carousel upsell-product custom-carousel owl-theme outer-top-xs">

            <div class="item item-carousel">
              <div class="products">

                <div class="product">
                  <div class="product-image">
                    <div class="image">
                      <a href="detail.html"><img  src="{!! url('public/webv2/assets/images/products/p1.jpg') !!}" alt=""></a>
                    </div><!-- /.image -->

                    <div class="tag sale"><span>sale</span></div>
                  </div><!-- /.product-image -->


                  <div class="product-info text-left">
                    <h3 class="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>

                    <div class="product-price">
				<span class="price">
					$650.99				</span>
                      <span class="price-before-discount">$800</span>

                    </div><!-- /.product-price -->

                  </div><!-- /.product-info -->
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button class="btn btn-primary icon" data-toggle="dropdown" type="button">
                            <i class="fa fa-shopping-cart"></i>
                          </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>

                        </li>

                        <li class="lnk wishlist">
                          <a class="add-to-cart" href="detail.html" title="Wishlist">
                            <i class="icon fa fa-heart"></i>
                          </a>
                        </li>

                        <li class="lnk">
                          <a class="add-to-cart" href="detail.html" title="Compare">
                            <i class="fa fa-signal"></i>
                          </a>
                        </li>
                      </ul>
                    </div><!-- /.action -->
                  </div><!-- /.cart -->
                </div><!-- /.product -->

              </div><!-- /.products -->
            </div><!-- /.item -->

            <div class="item item-carousel">
              <div class="products">

                <div class="product">
                  <div class="product-image">
                    <div class="image">
                      <a href="detail.html"><img  src="{!! url('public/webv2/assets/images/products/p2.jpg') !!}" alt=""></a>
                    </div><!-- /.image -->

                    <div class="tag sale"><span>sale</span></div>
                  </div><!-- /.product-image -->


                  <div class="product-info text-left">
                    <h3 class="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>

                    <div class="product-price">
				<span class="price">
					$650.99				</span>
                      <span class="price-before-discount">$800</span>

                    </div><!-- /.product-price -->

                  </div><!-- /.product-info -->
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button class="btn btn-primary icon" data-toggle="dropdown" type="button">
                            <i class="fa fa-shopping-cart"></i>
                          </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>

                        </li>

                        <li class="lnk wishlist">
                          <a class="add-to-cart" href="detail.html" title="Wishlist">
                            <i class="icon fa fa-heart"></i>
                          </a>
                        </li>

                        <li class="lnk">
                          <a class="add-to-cart" href="detail.html" title="Compare">
                            <i class="fa fa-signal"></i>
                          </a>
                        </li>
                      </ul>
                    </div><!-- /.action -->
                  </div><!-- /.cart -->
                </div><!-- /.product -->

              </div><!-- /.products -->
            </div><!-- /.item -->

            <div class="item item-carousel">
              <div class="products">

                <div class="product">
                  <div class="product-image">
                    <div class="image">
                      <a href="detail.html"><img  src="{!! url('public/webv2/assets/images/products/p3.jpg') !!}" alt=""></a>
                    </div><!-- /.image -->

                    <div class="tag hot"><span>hot</span></div>
                  </div><!-- /.product-image -->


                  <div class="product-info text-left">
                    <h3 class="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>

                    <div class="product-price">
				<span class="price">
					$650.99				</span>
                      <span class="price-before-discount">$800</span>

                    </div><!-- /.product-price -->

                  </div><!-- /.product-info -->
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button class="btn btn-primary icon" data-toggle="dropdown" type="button">
                            <i class="fa fa-shopping-cart"></i>
                          </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>

                        </li>

                        <li class="lnk wishlist">
                          <a class="add-to-cart" href="detail.html" title="Wishlist">
                            <i class="icon fa fa-heart"></i>
                          </a>
                        </li>

                        <li class="lnk">
                          <a class="add-to-cart" href="detail.html" title="Compare">
                            <i class="fa fa-signal"></i>
                          </a>
                        </li>
                      </ul>
                    </div><!-- /.action -->
                  </div><!-- /.cart -->
                </div><!-- /.product -->

              </div><!-- /.products -->
            </div><!-- /.item -->

            <div class="item item-carousel">
              <div class="products">

                <div class="product">
                  <div class="product-image">
                    <div class="image">
                      <a href="detail.html"><img  src="{!! url('public/webv2/assets/images/products/p4.jpg') !!}" alt=""></a>
                    </div><!-- /.image -->

                    <div class="tag new"><span>new</span></div>
                  </div><!-- /.product-image -->


                  <div class="product-info text-left">
                    <h3 class="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>

                    <div class="product-price">
				<span class="price">
					$650.99				</span>
                      <span class="price-before-discount">$800</span>

                    </div><!-- /.product-price -->

                  </div><!-- /.product-info -->
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button class="btn btn-primary icon" data-toggle="dropdown" type="button">
                            <i class="fa fa-shopping-cart"></i>
                          </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>

                        </li>

                        <li class="lnk wishlist">
                          <a class="add-to-cart" href="detail.html" title="Wishlist">
                            <i class="icon fa fa-heart"></i>
                          </a>
                        </li>

                        <li class="lnk">
                          <a class="add-to-cart" href="detail.html" title="Compare">
                            <i class="fa fa-signal"></i>
                          </a>
                        </li>
                      </ul>
                    </div><!-- /.action -->
                  </div><!-- /.cart -->
                </div><!-- /.product -->

              </div><!-- /.products -->
            </div><!-- /.item -->

            <div class="item item-carousel">
              <div class="products">

                <div class="product">
                  <div class="product-image">
                    <div class="image">
                      <a href="detail.html"><img  src="{!! url('public/webv2/assets/images/blank.gif') !!}" data-echo="{!! url('public/webv2/assets/images/products/p5.jpg') !!}" alt=""></a>
                    </div><!-- /.image -->

                    <div class="tag hot"><span>hot</span></div>
                  </div><!-- /.product-image -->


                  <div class="product-info text-left">
                    <h3 class="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>

                    <div class="product-price">
				<span class="price">
					$650.99				</span>
                      <span class="price-before-discount">$800</span>

                    </div><!-- /.product-price -->

                  </div><!-- /.product-info -->
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button class="btn btn-primary icon" data-toggle="dropdown" type="button">
                            <i class="fa fa-shopping-cart"></i>
                          </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>

                        </li>

                        <li class="lnk wishlist">
                          <a class="add-to-cart" href="detail.html" title="Wishlist">
                            <i class="icon fa fa-heart"></i>
                          </a>
                        </li>

                        <li class="lnk">
                          <a class="add-to-cart" href="detail.html" title="Compare">
                            <i class="fa fa-signal"></i>
                          </a>
                        </li>
                      </ul>
                    </div><!-- /.action -->
                  </div><!-- /.cart -->
                </div><!-- /.product -->

              </div><!-- /.products -->
            </div><!-- /.item -->

            <div class="item item-carousel">
              <div class="products">

                <div class="product">
                  <div class="product-image">
                    <div class="image">
                      <a href="detail.html"><img  src="{!! url('public/webv2/assets/images/blank.gif') !!}" data-echo="{!! url('public/webv2/assets/images/products/p6.jpg') !!}" alt=""></a>
                    </div><!-- /.image -->

                    <div class="tag new"><span>new</span></div>
                  </div><!-- /.product-image -->


                  <div class="product-info text-left">
                    <h3 class="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>

                    <div class="product-price">
				<span class="price">
					$650.99				</span>
                      <span class="price-before-discount">$800</span>

                    </div><!-- /.product-price -->

                  </div><!-- /.product-info -->
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button class="btn btn-primary icon" data-toggle="dropdown" type="button">
                            <i class="fa fa-shopping-cart"></i>
                          </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>

                        </li>

                        <li class="lnk wishlist">
                          <a class="add-to-cart" href="detail.html" title="Wishlist">
                            <i class="icon fa fa-heart"></i>
                          </a>
                        </li>

                        <li class="lnk">
                          <a class="add-to-cart" href="detail.html" title="Compare">
                            <i class="fa fa-signal"></i>
                          </a>
                        </li>
                      </ul>
                    </div><!-- /.action -->
                  </div><!-- /.cart -->
                </div><!-- /.product -->

              </div><!-- /.products -->
            </div><!-- /.item -->
          </div><!-- /.home-owl-carousel -->
        </section><!-- /.section -->
        <!-- ============================================== UPSELL PRODUCTS : END ============================================== -->

      </div><!-- /.col -->
      <div class="clearfix"></div>
    </div><!-- /.row -->
    <!-- ============================================== BRANDS CAROUSEL ============================================== -->
    <div id="brands-carousel" class="logo-slider wow fadeInUp">

      <div class="logo-slider-inner">
        <div id="brand-slider" class="owl-carousel brand-slider custom-carousel owl-theme">
          <div class="item m-t-15">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand1.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item m-t-10">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand2.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand3.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand4.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand5.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand6.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand2.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand4.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand1.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand5.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->
        </div><!-- /.owl-carousel #logo-slider -->
      </div><!-- /.logo-slider-inner -->

    </div><!-- /.logo-slider -->
    <!-- ============================================== BRANDS CAROUSEL : END ============================================== -->	</div><!-- /.container -->
</div><!-- /.body-content -->

@endsection
