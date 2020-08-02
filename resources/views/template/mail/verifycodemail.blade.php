<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
        .container {
            max-width: 1140px;
        }
        b, strong {
            font-weight: bolder;
        }
    </style>
</head>
<body>
    <div class="container">
        <p>Chào bạn <strong>{{$mailContent['fullname']}}</strong>,</p>
        <p>Chúng tôi vừa nhận được yêu cầu đổi mật khẩu của bạn. Bạn vui lòng sử dụng mã xác nhận dưới đây để hoàn tất quá trình đổi mật khẩu</p>
        <p>Mã xác nhận: </p>
        <p style="display: inline-block;padding: 15px;border: 1px solid gray;background: #dadada;margin: 0;">
            {{$mailContent['verify_code']}}
        </p>
        <p style="color:red;font-style: italic;">Mã xác nhận có hiệu lực đến {{$mailContent['valid_password_time']}} (trong vòng 15 phút).</p>
        <p>Trân trọng,</p>
        <hr style="border-top: 1px dashed gray;">
        <small style="display: inline-block;width: 100%;"><strong>Shop Mẹ Ỉn</strong> - Thời trang trẻ em</small>
        <small style="display: inline-block;width: 100%;">Địa chỉ: Số 227 - Phố Huyện - TT.Quốc Oai - Hà Nội</small>
        <small style="display: inline-block;width: 100%;">Hotline / Zalo: 0962926302</small>
        <small style="display: inline-block;width: 100%;">Website: https://shopmein.vn</small>
    </div>
</body>
</html>
