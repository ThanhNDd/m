@extends('webv2.layout.layout')
@section('title', 'Thời trang trẻ em thu đông 2020 | Quần áo trẻ em thu đông 2020 | Quần áo bé trai, váy bé gái')
@section('content')
  <div class="breadcrumb">
    <div class="container">
      <div class="breadcrumb-inner">
        <ul class="list-inline list-unstyled">
          <li><a href="{{url('')}}">Trang chủ</a></li>
          <li><a href="#">Giỏ hàng</a></li>
        </ul>
      </div><!-- /.breadcrumb-inner -->
    </div><!-- /.container -->
  </div><!-- /.breadcrumb -->

<div class="body-content outer-top-xs">
  <div class="container">
    <div class="row ">
      <items-cart-component></items-cart-component>
    </div> <!-- /.row -->
    <!-- ============================================== BRANDS CAROUSEL ============================================== -->
    @include('webv2.layout.brands')
    <!-- ============================================== BRANDS CAROUSEL : END ============================================== -->	</div><!-- /.container -->
</div><!-- /.body-content -->


@endsection
