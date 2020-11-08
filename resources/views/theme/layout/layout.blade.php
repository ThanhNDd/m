<!DOCTYPE html>
<html lang="en" class="ios device-pixel-ratio-1 device-desktop device-windows">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta http-equiv="Content-Security-Policy" content="default-src * 'self' 'unsafe-inline' 'unsafe-eval' data: gap:">
	  <meta name="csrf-token" content="{{ csrf_token() }}" />
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
        <meta property="og:image" content="{{url('public/web/images/icon.png') }}"/>
    @endif
    <link rel="icon" href="{{ url('public/mobile/images/icon.png') }}">
    <title>@yield('title') | Shop Mẹ Ỉn - Thời trang trẻ em cao cấp</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{!! url('resources/views/web/assets/css/bootstrap.min.css') !!}">
    <link rel="stylesheet" href="{!! url('public/mobile/css/all.css') !!}">
</head>
<body>
	@include('theme.layout.fbsdk')
    @include('theme.layout.gg')
	<div class="framework7-root">
{{--			<div class="panel-backdrop"></div>--}}
{{--			@include('theme.layout.sidebar')--}}
{{--        <sidebar-component></sidebar-component>--}}
			@yield('content')
	</div>
    <script>
        const url = "{{url('')}}";
    </script>
    <script src="{!! url('public/mobile/js/jquery-3.4.1.min.js') !!}"></script>
    <script src="{!! url('public/mobile/js/bootstrap.min.js') !!}"></script>
{{--    <script src="{!! url('public/mobile/js/swiper.min.js') !!}"></script>--}}
    <script src="{!! url('public/mobile/js/apps.js') !!}"></script>
	  @yield('script')
</body>
</html>
