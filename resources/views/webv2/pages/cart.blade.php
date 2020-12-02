@extends('webv2.layout.layout')
@section('title', 'Thời trang trẻ em thu đông 2020 | Quần áo trẻ em thu đông 2020 | Quần áo bé trai, váy bé gái')
@section('content')
  @include('webv2.pages.breadcrum')

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
