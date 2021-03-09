<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <title>Thời trang trẻ em</title>
    <style>
        .list {
            display: inline-flex;
            overflow-x: scroll;
            width: 98%;
            height: 215px;
            overflow-y: hidden;
        }
        .items {
            display: inline-block;
            float: left;
            border: 1px solid gainsboro;
            border-radius: 5px;
        }
        .images {
            background-size: cover !important;
            width: 110px;
            height: 110px;
            background-repeat: no-repeat !important;
            background-position: center !important;
        }
        .title {
            font-size: 14px;
            width: 100px;
            height: 40px;
            overflow: hidden;
        }
        .price {
            font-size: 13px;
            font-weight: bold;
        }
        .selected {
            color: #fff;
            background-color: #6c757d;
            border-color: #6c757d;
        }
        .unselected {
            color: #6c757d;
            border-color: #6c757d;
            background-color: #fff;
        }

        .c-pointer {
            cursor: pointer;
        }
        .fa-sort-up, .fa-sort-down{
            color: #a9a9a9!important;
        }
    </style>
</head>
<body>
    <div class="container col-md-8">
        <div class="product-info"></div>
        <div class="btn-order">
            <div class="form-group text-center">
                <!-- <button class="btn btn-secondary col-5" id="btn_close">Đóng</button> -->
                <button class="btn btn-success col-sm-12 col-md-5" id="btn_order">Đặt Hàng</button>
            </div>
        </div>
        <section>
            <h5>Xem thêm sản phẩm khác</h5>
            <div class="list mb-4"></div>
        </section>
        <section>
            <h5>Thông tin liên hệ</h5>
            <div class="form-info">
                <div class="form-group">
                    <label for="customer_name">Họ tên</label>
                    <input type="text" class="form-control" placeholder="Nhập họ tên" id="customer_name">
                </div>
                <div class="form-group">
                    <label for="customer_phone">Số điện thoại <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" placeholder="Nhập số điện thoại" id="customer_phone">
                </div>
                <div class="form-group">
                    <label for="customer_address">Địa chỉ <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" placeholder="Nhập địa chỉ" id="customer_address">
                </div>
            </div>
        </section>
        <section id="order_info">
            <h5>Thông tin đơn hàng</h5>
            <div class="order-info mb-4 table-responsive">
                <table class="table">
                    <tbody>
                        <tr>
                            <td class="pr-0 pl-0">
                                <span class="font-weight-bold">Bộ nhện quần jeans</span>
                            </td>
                            <td class="text-center">2</td>
                            <td class="text-right">470,000</td>
                        </tr>
                        <tr>
                            <td class="w-50">
                                <small class="text-gray font-italic">Màu:</small> <small>Vàng</small><br>
                                <small class="text-gray font-italic">Size:</small> <small>3 (12-13kg)</small><br>
                                <small class="text-gray font-italic">Giá:</small> <small>235,000</small></td>
                            <td class="w-25">
                                <div class="d-inline-block w-100 text-center text-secondary c-pointer">
                                    <i class="fas fa-sort-up"></i>
                                </div>
                                <span class=" d-inline-block w-100 text-center">1</span>
                                <div class="d-inline-block w-100 text-center text-secondary c-pointer">
                                    <i class="fas fa-sort-down"></i>
                                </div>
                            </td>
                            <td class="w-25 text-right">
                                <small>235,000</small><br>
                                <small class="d-inline-block w-100 mt-1 text-danger c-pointer">
                                    Xoá
                                </small>
                            </td>
                        </tr>
                        <tr>
                            <td class="w-50">
                                <small class="text-gray font-italic">Màu:</small> <small>Vàng</small><br>
                                <small class="text-gray font-italic">Size:</small> <small>3 (12-13kg)</small><br>
                                <small class="text-gray font-italic">Giá:</small> <small>235,000</small></td>
                            <td class="w-25">
                                <div class="d-inline-block w-100 text-center text-secondary c-pointer">
                                    <i class="fas fa-sort-up"></i>
                                </div>
                                <span class=" d-inline-block w-100 text-center">1</span>
                                <div class="d-inline-block w-100 text-center text-secondary c-pointer">
                                    <i class="fas fa-sort-down"></i>
                                </div>
                            </td>
                            <td class="w-25 text-right">
                                <small>235,000</small><br>
                                <small class="d-inline-block w-100 mt-1 text-danger c-pointer">
                                    Xoá
                                </small>
                            </td>
                        </tr>
                        <tr>
                            <td class="pr-0 pl-0">
                                <span class="font-weight-bold">Bộ nhện quần jeans</span>
                            </td>
                            <td class="text-center">2</td>
                            <td class="text-right">470,000</td>
                        </tr>
                        <tr>
                            <td class="w-50">
                                <small class="text-gray font-italic">Màu:</small> <small>Vàng</small><br>
                                <small class="text-gray font-italic">Size:</small> <small>3 (12-13kg)</small><br>
                                <small class="text-gray font-italic">Giá:</small> <small>235,000</small></td>
                            <td class="w-25">
                                <div class="d-inline-block w-100 text-center text-secondary c-pointer">
                                    <i class="fas fa-sort-up"></i>
                                </div>
                                <span class=" d-inline-block w-100 text-center">1</span>
                                <div class="d-inline-block w-100 text-center text-secondary c-pointer">
                                    <i class="fas fa-sort-down"></i>
                                </div>
                            </td>
                            <td class="w-25 text-right">
                                <small>235,000</small><br>
                                <small class="d-inline-block w-100 mt-1 text-danger c-pointer">
                                    Xoá
                                </small>
                            </td>
                        </tr>
                        <tr>
                            <td class="w-50">
                                <small class="text-gray font-italic">Màu:</small> <small>Vàng</small><br>
                                <small class="text-gray font-italic">Size:</small> <small>3 (12-13kg)</small><br>
                                <small class="text-gray font-italic">Giá:</small> <small>235,000</small></td>
                            <td class="w-25">
                                <div class="d-inline-block w-100 text-center text-secondary c-pointer">
                                    <i class="fas fa-sort-up"></i>
                                </div>
                                <span class=" d-inline-block w-100 text-center">1</span>
                                <div class="d-inline-block w-100 text-center text-secondary c-pointer">
                                    <i class="fas fa-sort-down"></i>
                                </div>
                            </td>
                            <td class="w-25 text-right">
                                <small>235,000</small><br>
                                <small class="d-inline-block w-100 mt-1 text-danger c-pointer">
                                    Xoá
                                </small>
                            </td>
                        </tr>
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="text-right pt-2 pb-2" colspan="2">
                                <span class="font-weight-bold">Tổng</span>
                            </td>
                            <td class="text-right pt-2 pb-2">
                                <span class="d-inline-block w-100">940,000</span>
                                <span class="font-italic d-inline-block w-100 pt-1" style="font-size: 60%;">(4 sản phẩm)</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-right pt-2 pb-2" colspan="2">
                                <span class="font-weight-bold">Phí ship</span>
                            </td>
                            <td class="text-right pt-2 pb-2">30,000</td>
                        </tr>
                        <tr>
                            <td class="text-right pt-2 pb-2" colspan="2">
                                <span class="font-weight-bold">Tổng thanh toán</span>
                            </td>
                            <td class="text-right pt-2 pb-2">970,000</td>
                        </tr>
                        <tr>
                            <td class="text-right pt-2 pb-2" colspan="3">
                                <button class="btn btn-danger col-sm-12 col-md-5" id="submit_order">Xác nhận Đặt Hàng</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    </div>
    <script>
        let products_data;
        $(document).ready(function(){
            let product_id = {{$product_id}};
            console.log(product_id);
            getDataByProductId(product_id);
            getRelateProducts(product_id);
        });

        function getDataByProductId(product_id) {
            return new Promise(function (resolve, reject) {
                $.get(`{{ env("APP_URL") }}/api/chat-bot/${product_id}`, function (res) {
                    // console.log(res.data);
                    if(res.data.length > 0) { 
                        products_data = res.data;
                        $.each(res.data, function (k, v) {
                            if (v.product_id == product_id) {
                                // console.log(v);
                                let slider = v.slider;
                                slider = JSON.parse(slider);

                                let data = `<div class="product">
                                            <div id="demo" class="carousel slide mt-4 mb-2" data-ride="carousel">`;
                                data += `<ul class="carousel-indicators">`;
                                let i = 0;
                                $.each(slider, function (k, v) {
                                    if (i == 0) {
                                        data += `<li data-target="#demo" data-slide-to="${i}" class="active"></li>`;
                                    } else {
                                        data += `<li data-target="#demo" data-slide-to="${i}"></li>`;
                                    }
                                    i++;
                                });
                                data += `</ul>`;
                                data += `<div class="carousel-inner" id="carousel_image">`;
                                i = 0;
                                $.each(slider, function (k, v) {
                                    if (i == 0) {
                                        data += `<div class="carousel-item active">
                                                <div
                                style="background: url('${v.src}');background-size: cover;width: 400px;height: 400px;background-repeat: no-repeat;background-position: center;">
                            </div>
                                            </div>`;
                                    } else {
                                        data += `<div class="carousel-item">
                                        <div
                                        style="background: url('${v.src}');background-size: cover;width: 400px;height: 400px;background-repeat: no-repeat;background-position: center;">
                                    </div>
                                            </div>`;
                                    }
                                    i++;
                                })
                                data += `</div>
                                                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                                    <span class="carousel-control-prev-icon"></span>
                                                </a>
                                                <a class="carousel-control-next" href="#demo" data-slide="next">
                                                    <span class="carousel-control-next-icon"></span>
                                                </a>
                                            </div>`;
                                data += `<div class="form mb-5">
                                                <input type="hidden" value="${v.product_id}" id="product_id">
                                                <h3 id="product_name">${v.name}</h3>`;
                                data += `<table class="table">
                                                <tbody>
                                                <tr>
                                                    <td class="font-weight-bold">Giá</td>
                                                    <td><span id="retail">${v.retail}</span> <sup>đ</sup></td>
                                                </tr>
                                                <tr>
                                                    <td class="font-weight-bold">Màu</td>
                                                    <td>
                                                    <div class="color-product">`;
                                for(key in v.colors) {
                                    data += `<button class="btn btn-outline-secondary m-1 color">${v.colors[key]}</button>`;
                                };
                                data += `       </div>
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td class="font-weight-bold">Size</td>
                                                    <td>
                                                    <div class="size-product">`;
                                for(key in v.sizes) {
                                    data += `<button class="btn btn-outline-secondary m-1 size" data-sku="">${v.sizes[key]}</button>`;
                                };
                                data += `           </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>`;
                                data += `<div class="form-group">
                                                    <label class="control-label col-sm-2 font-weight-bold" for="desc">Mô tả:</label>
                                                    <div class="col-sm-10">${v.description}</div>
                                                </div>`;
                                $(".product-info").html(data);
                                $(".btn-order").removeClass("d-none");
                                handleClickChooseColor();
                                handleClickChooseSize();
                                
                                // document.title = v.name;
                                resolve("done");
                            }
                        });
                        checkSelectedItem();
                    } else {
                        $(".product-info").html(`<p class="mt-4 text-danger text-center">Không tồn tại sản phẩm</p>`);
                        $(".btn-order").addClass("d-none");
                    }
                });
            });
        }

        function getRelateProducts(product_id) {
            return new Promise(function (resolve, reject) {
                $.get(`{{ env("APP_URL") }}/api/chat-bot/relate-product/${product_id}`, function (res) {
                    // console.log(res.data);
                    let data = "";
                    $.each(res.data, function (k, v) {
                        data += `<div class="items m-2 p-2">
                                        <input type="hidden" value="${v.product_id}">
                                        <div class="images" style="background: url('${v.image}');"></div>
                                        <div class="title mt-2 mb-2">${v.name}</div>
                                        <div class="price">${v.retail} <sup>đ</sup></div>
                                    </div>`;
                        
                    });
                    $(".list").html(data);
                    handleClickRelateProduct();
                });
                resolve("done");
            });
        }

        let table_data_orders = [];
        function handleClickChooseColor() {
            $( ".color-product" ).each(function(index) {
                $(".color").on('click',function(e){
                    let color_value = $(this).text();
                    // console.log(color_value);
                    let product_id = $("#product_id").val();
                    // console.log(product_id);
                    let product_name = $("#product_name").text();
                    // console.log(product_name);
                    let retail = $("#retail").text();
                    let color_data = {};
                    color_data[color_value] = [];
                    let detail = [];
                    detail.push(color_data);
                    let data = {
                        product_id: product_id,
                        name: product_name,
                        retail: retail,
                        detail: detail
                    };
                    if($(this).hasClass("selected")) {
                        $(this).removeClass("selected").addClass("unselected").blur();
                        $.each(table_data_orders, function(key, value){
                            if(value.product_id == product_id) {
                                let d = value.detail;
                                $.each(d, function(k, v){
                                    for(k1 in v) {
                                        if(k1 == color_value) {
                                            d.splice(k, 1);
                                        }
                                    }
                                });
                                table_data_orders[key].detail = d;
                            }
                        });
                    } else {
                        $(this).addClass("selected").removeClass("unselected").blur();
                        if (jQuery.isEmptyObject(table_data_orders)){
                            table_data_orders.push(data);
                        } else {
                            $.each(table_data_orders, function(key, value){
                                if(value.product_id == product_id) {
                                    let d = value.detail;
                                    if(d.length == 0) {
                                        // no exists data for detail
                                        d.push(color_data);
                                    } else {
                                        // existed data for detail
                                        // find size
                                        color_data = {};
                                        color_data[color_value] = [];
                                        let data = d[0];
                                        $.each(data, function(k, v) {
                                            $.each(v, function(k1, v1){
                                                let s = v1.size;
                                                // find size by raw data
                                                $.each(products_data[0].detail, function(key_detail, value_detail){
                                                    if(key_detail == color_value) {
                                                        $.each(value_detail, function(_k, _v) {
                                                            if(_v.size == s) {
                                                                let size_data = {
                                                                    image: _v.image,
                                                                    size: s,
                                                                    sku: _v.sku,
                                                                    quantity: 1
                                                                };
                                                                color_data[color_value].push(size_data);
                                                                return false;
                                                            }
                                                        });
                                                    }
                                                });
                                            });
                                        });
                                        d.push(color_data);
                                    }
                                    table_data_orders[key].detail = d;
                                } else {
                                    table_data_orders.push(data);
                                }
                            });
                            
                        }
                    }
                    console.log(JSON.stringify(table_data_orders));
                    // getColorSelected();
                });
            });
        }

        let handleClickChooseSize = function() {
            $( ".size-product" ).each(function(index) {
                $(".size").on('click',function(e){
                    let detail_product_data = products_data[0].detail;
                    let size_value = $(this).text();
                    // console.log(size_value);
                    let product_id = $("#product_id").val();
                    let that = $(this);
                    if($(this).hasClass("selected")) {
                        $(this).removeClass("selected").addClass("unselected").blur();
                        $.each(table_data_orders, function(key, value){
                            if(value.product_id == product_id) {
                                let d = value.detail;
                                $.each(d, function(k, color){
                                    // console.log(v);
                                    $.each(color, function(k1, obj){
                                        // let key_delete;
                                        $.each(obj, function(k2, v2){
                                            // console.log(v2.size);
                                            if(v2.size == size_value) {
                                                obj.splice(k2, 1);
                                                return false;
                                            }
                                        });
                                        
                                    });
                                });
                                table_data_orders[key].detail = d;
                            }
                        });
                    } else {
                        $.each(table_data_orders, function(key, value){
                            if(value.product_id == product_id) {
                                let d = value.detail;
                                if(d.length == 0) {
                                    toastr.error('Bạn chưa chọn màu');
                                    return;
                                }
                                that.addClass("selected").removeClass("unselected").blur();
                                $.each(d, function(k, v){
                                    for(k1 in v) {
                                        $.each(detail_product_data, function(key_detail, value_detail){
                                            if(k1 == key_detail) {
                                                for(k2 in value_detail) {
                                                    if(value_detail[k2].size == size_value) {
                                                        let size_data = {
                                                            image: value_detail[k2].image,
                                                            size: size_value,
                                                            sku: value_detail[k2].sku,
                                                            quantity: 1
                                                        };
                                                        v[k1].push(size_data);
                                                    }
                                                }
                                            }
                                        });
                                    }
                                });
                                table_data_orders[key].detail = d;
                            }
                        });
                        
                    }
                    console.log(JSON.stringify(table_data_orders));
                    // getColorSelected();
                });
            });
        }

        function checkSelectedItem() {
            if(table_data_orders.length == 0) {
                return;
            }
            let product_id = $("#product_id").val();
            $.each(table_data_orders, function(key1, value1){
                if(value1.product_id == product_id) {
                    let detail = value1.detail;
                    $.each(detail, function(key2, value2){
                        // for loop color value
                        $.each(value2, function(key3, value3){
                            // set selected for color
                            $(".color-product").each(function(key_color, value_color){
                                $($(value_color).children()).each(function(key_color1, value_color1){
                                    let button_color = $(this).text().trim();
                                    if(button_color == key3) {
                                        $(this).addClass("selected");
                                    }
                                });
                            });
                        });
                        // for loop size value
                        $.each(value2, function(key3, value3){
                            $.each(value3, function(key4, value4){
                                // set selected for size
                                $(".size-product").each(function(key5, value5){
                                    $($(value5).children()).each(function(key6, value6){
                                        let button_size = $(this).text();
                                        if(button_size == value4.size) {
                                            $(this).addClass("selected");
                                        }
                                    });
                                });
                            });
                        });
                    });
                }
            });
        }

        function handleClickRelateProduct() {
            $( ".items" ).each(function(index) {
                $(".images").on('click',function(e){
                    let product_id = $(this).prev("input").val();
                    getDataByProductId(product_id);
                    getRelateProducts(product_id);
                    scrollTop();
                    return false;
                });
                $(".title").on('click',function(e){
                    let product_id = $(this).prev().prev("input").val();
                    getDataByProductId(product_id);
                    getRelateProducts(product_id);
                    scrollTop();
                    return false;
                });
            });
        }
        function scrollTop() {
            let body = $("html, body");
            body.stop().animate({scrollTop:0}, 500, 'swing');
        }
    </script>
</body>
</html>