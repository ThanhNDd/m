<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="keywords" content="">
  <meta name="robots" content="all">
  <link rel="icon" href="{{ url('public/web/images/icon.png') }}">
  <title>@yield('title') | Shop Mẹ Ỉn - Thời trang trẻ em cao cấp</title>

{{--  <link rel="stylesheet" href="{!! url('public/webv2/css/webapp.css') !!}">--}}
  <meta property="og:url" content="{{Request::url()}}"/>
  <meta property="og:type"          content="website" />
  <meta property="og:title" content="{{!empty($product) ? $product->name.' | Shop Mẹ Ỉn - Thời trang trẻ em' : 'Shop Mẹ Ỉn - Thời trang trẻ em' }}"/>
  <meta property="og:description"
        content="{{!empty($product) && !empty($product->short_description) ? $product->short_description : 'Shop Mẹ Ỉn chuyên cung cấp hàng trẻ em thời trang cao cấp.' }}"/>
  @if(!empty($product) && !empty(json_decode($product->image)))
    @foreach (json_decode($product->image) as $image)
      @if ($loop->first)
        <meta property="og:image" content="{{$image->src}}"/>
      @endif
    @endforeach
  @elseif (!empty($product) && !empty($product->variant_image))
    <meta property="og:image" content="{{$product->variant_image}}"/>
  @else
    <meta property="og:image" content="{{url('public/webv2/images/icon.png') }}"/>
@endif

  <!-- Bootstrap Core CSS -->
  <link rel="stylesheet" href="{!! url('public/webv2/assets/css/bootstrap.min.css') !!}">
  <link rel="stylesheet" href="{!! url('public/webv2/assets/css/bootstrap-select.min.css') !!}">
  <!-- Customizable CSS -->
  <link rel="stylesheet" href="{!! url('public/webv2/assets/css/main.css') !!}">
  <link rel="stylesheet" href="{!! url('public/webv2/assets/css/blue.css') !!}">
  <link rel="stylesheet" href="{!! url('public/webv2/assets/css/owl.carousel.css') !!}">
  <link rel="stylesheet" href="{!! url('public/webv2/assets/css/owl.transitions.css') !!}">
  <link rel="stylesheet" href="{!! url('public/webv2/assets/css/animate.min.css') !!}">
  <link rel="stylesheet" href="{!! url('public/webv2/assets/css/rateit.css') !!}">
  <link rel="stylesheet" href="{!! url('public/webv2/assets/css/lightbox.css') !!}">


  <!-- Icons/Glyphs -->
  <link rel="stylesheet" href="{!! url('public/webv2/assets/css/font-awesome.css') !!}">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet">
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800' rel='stylesheet' type='text/css'>
  <link href="https://fonts.googleapis.com/css?family=Mouse+Memoirs" rel="stylesheet">
  <style>
    @yield('style')
  </style>

</head>
<body class="cnt-home">
<div id="appv2">
  <!-- ============================================== HEADER ============================================== -->
  @include('webv2.layout.header')
  <!-- ============================================== HEADER : END ============================================== -->
  <!-- /.breadcrumb -->

  @yield('content')
  <!-- /#top-banner-and-menu -->
</div>
<!-- ============================================================= FOOTER ============================================================= -->
@include('webv2.layout.footer')
<!-- ============================================================= FOOTER : END============================================================= -->
<script>
  const url = "{{url('')}}";
</script>
<!-- JavaScripts placed at the end of the document so the pages load faster -->
<script src="{!! url('public/webv2/js/app.js') !!}"></script>
<script src="{!! url('public/webv2/assets/js/libs/jquery-1.11.1.min.js') !!}"></script>
<script src="{!! url('public/webv2/assets/js/libs/bootstrap.min.js') !!}"></script>
<script src="{!! url('public/webv2/assets/js/libs/bootstrap-select.min.js') !!}"></script>
<script src="{!! url('public/webv2/assets/js/libs/bootstrap-hover-dropdown.min.js') !!}"></script>
<script src="{!! url('public/webv2/assets/js/libs/owl.carousel.min.js') !!}"></script>
<script src="{!! url('public/webv2/assets/js/libs/echo.min.js') !!}"></script>
<script src="{!! url('public/webv2/assets/js/libs/jquery.easing-1.3.min.js') !!}"></script>
<script src="{!! url('public/webv2/assets/js/libs/bootstrap-slider.min.js') !!}"></script>
<script src="{!! url('public/webv2/assets/js/libs/jquery.rateit.min.js') !!}"></script>
<script type="text/javascript" src="{!! url('public/webv2/assets/js/libs/lightbox.min.js') !!}"></script>
<script src="{!! url('public/webv2/assets/js/libs/wow.min.js') !!}"></script>
{{--<script src="{!! url('public/webv2/assets/js/libs/scripts.js') !!}"></script>--}}

@yield('script')
</body>
</html>
