<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <link rel="stylesheet" href="{!! url('public/landing/vue-select.css') !!}">
    <link rel="stylesheet" href="{!! url('public/landing/font-awesome.min.css') !!}">
    
    <title>Thời trang trẻ em</title>
    <script>
        let url = `{{env("APP_URL")}}`;
        let source = `{{$source}}`;
    </script>
</head>
<body>
    <div class="container" id="landing">
        <product-info-component :product_id="{{$product_id}}"></product-info-component>
    </div>
    <script src="{!! asset('landing/app.js') !!}"></script>
</body>
</html>