<!DOCTYPE html>
<html lang="en" class="ios device-pixel-ratio-1 device-desktop device-windows">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="default">
	<meta http-equiv="Content-Security-Policy" content="default-src * 'self' 'unsafe-inline' 'unsafe-eval' data: gap:">
	<meta name="csrf-token" content="{{ csrf_token() }}" />

	<link rel="icon" href="{{ url('public/images/favicon.png') }}">
	<title>@yield('title') | Shop Mẹ Ỉn - Thời trang trẻ em cao cấp</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="{!! url('public/css/all.css') !!}">
</head>
<body>
	<div class="framework7-root">
		<div class="panel-backdrop"></div>
	    @include('theme.layout.sidebar')
        @yield('content')
	</div>
</div>
    <script>
        const url = "{{url('')}}";
    </script>
    <script src="{!! url('public/js/apps.js') !!}"></script>
    <script src="{!! url('public/js/swiper.min.js') !!}"></script>
	@yield('script')
</body>
</html>
