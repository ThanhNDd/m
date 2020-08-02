<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="keywords" content="">
    <meta name="robots" content="all">

    <link rel="icon" href="{{ url('public/web/images/icon.png') }}">
    <title>@yield('title') | Shop Mẹ Ỉn - Thời trang trẻ em cao cấp</title>

    <link rel="stylesheet" href="{!! url('public/web/css/webapp.css') !!}">
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
    @else
        <meta property="og:image" content="{{url('public/web/images/icon.png') }}"/>
    @endif
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Barlow:200,300,300i,400,400i,500,500i,600,700,800" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
</head>
<body class="cnt-home">
    @include('web.layout.fbsdk')
{{--    @include('web.layout.header')--}}
    @yield('content')
{{--    @include('web.layout.footer')--}}
{{--    <div>--}}
{{--      <footer-component></footer-component>--}}
{{--    </div>--}}
<script>
    const url = "{{url('')}}";
</script>

<!-- ============================================================= FOOTER : END============================================================= -->
<!-- JavaScripts placed at the end of the document so the pages load faster -->
    <script src="{{url('public/web/js/webapp.min.js') }}"></script>
    @yield('script')
</body>

</html>
