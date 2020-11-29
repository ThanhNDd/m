<template>
    <div>
        <a class="open-login-modal" v-if="!isLogged" href="javascript:void(0);" @click="open_login_modal">
            <i class="fas fa-sign-in-alt"></i>&nbsp;Đăng nhập
        </a>
        <div v-else class="dropdown dropdown-cart show">
            <i class="fas fa-user-circle"></i>
            <a href="javascript:void(0)" data-toggle="dropdown" class="dropdown-toggle customer-logged" aria-expanded="true">
                &nbsp;{{customer_name}}
            </a>
            <ul class="dropdown-menu" x-placement="bottom-start">
<!--                <li><a v-bind:href="url + '/thong-tin-chi-tiet.html'"><i class="fas fa-info-circle"></i>&nbsp;Thông tin chi tiết</a></li>-->
                <li><a href="javascript:void(0)" @click="logout"><i class="fas fa-sign-out-alt"></i>&nbsp;Đăng xuất</a></li>
            </ul>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="loginForm" tabindex="-1" role="dialog">
            <div v-bind:class="['modal-dialog', isRegister && isVerifySMSCodeSuccess ? 'modal-lg' : '']" role="document">
                <div class="modal-content">
<!--                    <form novalidate="true">-->
                        <div class="modal-header">
                            <h5 class="modal-title" v-if="isLoginSuccess">Thông báo</h5>
                            <h5 class="modal-title" v-if="isLogin">Đăng nhập</h5>
                            <h5 class="modal-title" v-if="isRegister">Đăng ký</h5>
                            <h5 class="modal-title" v-if="isSendEmailVerifyCode">Gửi yêu cầu đổi mật khẩu</h5>
                            <h5 class="modal-title" v-if="isVerifyCode">Nhập mã xác thực</h5>
                            <h5 class="modal-title" v-if="isNewPassword">Nhập mật khẩu mới</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body col-md-12">
                            <div v-if="isLoginSuccess">
                                <div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;">
                                    <div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                                    <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
                                    <div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                                    <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                                </div>
                                <h2 class="swal2-title" id="swal2-title">Đăng nhập thành công!</h2>
                            </div>
                            <div v-if="isRegisterSuccess">
                                <div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;">
                                    <div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                                    <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
                                    <div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                                    <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                                </div>
                                <h2 class="swal2-title">Đăng ký thành công!</h2>
                            </div>
                            <div v-if="isChangedPasswordSuccess">
                                <div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;">
                                    <div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                                    <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
                                    <div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                                    <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                                </div>
                                <h2 class="swal2-title">Đổi mật khẩu thành công!</h2>
                            </div>
                            <div v-if="isLogin">
                                <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                                    <div class="container" style="padding: 0px;width: 100%;">
                                        <form style="padding-top: 10px;display: inline-block;width: 100%;text-align: left;">
                                            <div class="form-group">
                                                <label for="login_phone">Số điện thoại</label>
                                                <input type="text"
                                                       :class="['form-control', !is_valid_phone || !is_valid_phone_format ? 'form-control--error' : '']"
                                                       v-model="phone"
                                                       v-on:keydown.enter.prevent='checkPhone'
                                                       placeholder="Nhập số điện thoại"
                                                       id="login_phone" ref="phone"
                                                       readonly
                                                       :disabled="show_loading"
                                                       autocomplete="off">
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                                   v-if="!is_valid_phone">
                                                    Trường này là bắt buộc
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                                       v-if="!is_valid_phone_format">Số điện thoại không đúng
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                                       v-if="is_valid_phone_not_exist">Số điện thoại không tồn tại. Bạn có thể
                                                    <a href="javascript:void(0)" @click="switchRegisterForm" style="color: #0f6cb2 !important">Đăng ký</a> tài khoản mới.
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                                   v-if="is_user_inactive">Số điện thoại đã bị khóa. Vui lòng nhập số điện thoại khác
                                                </p>
                                            </div>
                                            <div class="form-group" v-if="is_exist_phone">
                                                <label for="login_password">Mật khẩu</label>
                                                <input type="password"
                                                       :class="['form-control', !is_valid_password || !is_valid_password_length ? 'form-control--error' : '']"
                                                       placeholder="Mật khẩu"
                                                       v-on:keydown.enter.prevent='login'
                                                       id="login_password"
                                                       v-model="password"
                                                       ref="password"
                                                       readonly
                                                       :disabled="show_loading"
                                                       autocomplete="off">
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                                       v-if="!is_valid_password">Trường này là bắt buộc
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                                       v-if="!is_valid_password_length">Mật khẩu phải có ít nhất 6 ký tự
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                                   v-if="!is_correct_phone_or_password">Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0">
                                                    Bạn quên mật khẩu?
                                                    <a href="javascript:void(0)" @click="switchChangePassword" style="color: #0f6cb2 !important">
                                                        Đổi mật khẩu
                                                    </a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
<!--                            <div v-if="isSendEmailVerifyCode">-->
<!--                                <div class="page-content" style="background: #fff;padding-bottom: 20px;">-->
<!--                                    <div class="container" style="padding: 0px;width: 100%;">-->
<!--                                        <form style="padding-top: 10px;">-->
<!--                                            <div class="form-group">-->
<!--                                                <label for="email_change_pwd">Email</label>-->
<!--                                                <input type="text"-->
<!--                                                       :class="['form-control', !is_valid_email || !is_valid_email_format ? 'form-control&#45;&#45;error' : '']"-->
<!--                                                       v-on:keydown.enter.prevent='sendEmail'-->
<!--                                                       v-model="verify_email"-->
<!--                                                       placeholder="Nhập email"-->
<!--                                                       id="email_change_pwd"-->
<!--                                                       ref="email"-->
<!--                                                       readonly-->
<!--                                                       :disabled="show_loading"-->
<!--                                                       autocomplete="off">-->
<!--                                                <p class="mt-2 text&#45;&#45;error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_verify_email">-->
<!--                                                    Trường này là bắt buộc-->
<!--                                                </p>-->
<!--                                                <p class="mt-2 text&#45;&#45;error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_verify_email_format">-->
<!--                                                    Email không đúng-->
<!--                                                </p>-->
<!--                                                <p class="mt-2 text&#45;&#45;error d-inline-block col-md-12 no-padding mb-0" v-if="!is_send_email_change_pass_error">-->
<!--                                                    Đã xảy ra lỗi khi thực hiện gửi mail. Bạn vui lòng kiểm tra lại địa chỉ email, rồi thử lại.-->
<!--                                                </p>-->
<!--                                            </div>-->
<!--                                        </form>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div v-if="isVerifyCode">-->
<!--                                <div class="page-content" style="background: #fff;padding-bottom: 20px;">-->
<!--                                    <div class="container" style="padding: 0px;width: 100%;">-->
<!--                                        <form style="padding-top: 10px;">-->
<!--                                            <div class="form-group">-->
<!--                                                <p class="d-inline-block col-md-12 no-padding mb-2" style="line-height: 1.5;font-style: italic;">-->
<!--                                                    Một mã xác nhận vừa được gửi tới email của bạn. Bạn vui lòng nhập mã xác nhận đã nhận được vào đây.-->
<!--                                                </p>-->
<!--                                                <label for="verify_code">Mã xác nhận</label>-->
<!--                                                <input type="text"-->
<!--                                                       :class="['form-control', !is_valid_verify_code ? 'form-control&#45;&#45;error' : '']"-->
<!--                                                       v-on:keydown.enter.prevent='verifyCode'-->
<!--                                                       v-model="verify_code"-->
<!--                                                       placeholder="Nhập mã xác nhận"-->
<!--                                                       id="verify_code"-->
<!--                                                       ref="verify_code"-->
<!--                                                       readonly-->
<!--                                                       :disabled="show_loading"-->
<!--                                                       autocomplete="off">-->
<!--                                                <p class="mt-2 text&#45;&#45;error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_verify_code">-->
<!--                                                    Trường này là bắt buộc-->
<!--                                                </p>-->
<!--                                                <p class="mt-2 text&#45;&#45;error d-inline-block col-md-12 no-padding mb-0" v-if="!is_correct_verify_code">-->
<!--                                                    Mã xác nhận không đúng. Vui lòng thử lại-->
<!--                                                </p>-->
<!--                                            </div>-->
<!--                                        </form>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
                            <div v-show="isNewPassword">
                                <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                                    <div class="container" style="padding: 0px;width: 100%;">
                                        <div v-if="!isVerifySMSCodeSuccess">
                                            <div class="form-group d-inline-block col-md-12 no-padding text-left">
                                                <input type="text"
                                                       :class="['form-control', !is_valid_phone || !is_valid_phone_format ? 'form-control--error' : '']"
                                                       placeholder="Số điện thoại" id="change_pass_phone" v-model="phone"
                                                       :disabled="show_loading"
                                                       ref="phone" autocomplete="off">
                                                <p class="mt-1 text--error d-inline-block" v-if="!is_valid_phone">
                                                    Trường này là bắt buộc
                                                </p>
                                                <p class="mt-1 text--error d-inline-block"
                                                   v-if="!is_valid_phone_format">Số điện thoại không đúng
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                                   v-if="is_sending_sms_failure">Không gửi được mã xác nhận. Vui lòng kiểm tra lại số điện thoại.
                                                </p>
                                            </div>
                                            <div v-if="!hasVerifySMSCode">
                                                <div id="recaptcha-container-changepass"></div>
                                            </div>
                                            <p class="mt-2 mb-2 text-left text--error d-inline-block col-md-12 no-padding mb-0"
                                               v-if="!is_valid_captcha">Bạn chưa nhập mã captcha.
                                            </p>
                                            <button v-if="isSendingVerifySMSCode" @click="sendingSMS" class="btn btn-flat btn-danger" v-bind:disabled="show_loading">
                                                <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="show_loading"></i>&nbsp;Gửi mã xác thực
                                            </button>
                                            <div v-if="hasVerifySMSCode" class="form-group d-inline-block col-md-12 no-padding text-left mt-3">
                                                <input type="text"
                                                       :class="['form-control', !is_valid_sms_code || !is_correct_verify_sms_code ? 'form-control--error' : '']"
                                                       placeholder="Nhập mã xác thực" v-model="verify_sms_code"
                                                       :disabled="show_loading"
                                                       id="verify_sms_code_change_pass"
                                                       autocomplete="off">
                                                <p class="mt-1 text--error d-inline-block" v-if="!is_valid_sms_code">
                                                    Trường này là bắt buộc
                                                </p>
                                                <p class="mt-1 text--error d-inline-block"
                                                   v-if="!is_correct_verify_sms_code">Mã xác thực không đúng.
                                                </p>
                                                <p class="mt-1 d-inline-block">
                                                    Bạn không nhận được mã xác thực? <a href="javascipt:void(0)" style="color: #0f6cb2 !important" @click="sendingSMS">Gửi lại</a>
                                                </p>
                                            </div>
                                            <button v-if="hasVerifySMSCode" class="btn btn-flat btn-danger" v-bind:disabled="show_loading" @click="verifyCodeSMS">
                                                <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="show_loading"></i>&nbsp;Xác nhận
                                            </button>
                                        </div>
                                        <div v-else>
                                            <div class="form-group text-left">
                                                <label for="new_password">Mật khẩu mới</label>
                                                <input type="password"
                                                       :class="['form-control', !is_valid_new_password || !is_valid_new_password_length ? 'form-control--error' : '']"
                                                       v-on:keydown.enter.prevent=''
                                                       v-model="new_password"
                                                       placeholder="Nhập password mới"
                                                       id="new_password"
                                                       ref="new_password"
                                                       :disabled="show_loading"
                                                       autocomplete="off">
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_new_password">
                                                    Trường này là bắt buộc
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_new_password_length">
                                                    Mật khẩu phải lớn hơn 6 ký tự
                                                </p>
                                            </div>
                                            <div class="form-group text-left">
                                                <label for="new_password2">Nhập lại mật khẩu mới</label>
                                                <input type="password"
                                                       :class="['form-control', !is_valid_new_password2 || !is_valid_new_password2_length ? 'form-control--error' : '']"
                                                       v-on:keydown.enter.prevent=''
                                                       v-model="new_password2"
                                                       placeholder="Nhập lại password"
                                                       id="new_password2"
                                                       ref="new_password2"
                                                       :disabled="show_loading"
                                                       autocomplete="off">
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_new_password2">
                                                    Trường này là bắt buộc
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_new_password2_incorrect">
                                                    Mật khẩu nhập lại không khớp
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-show="isRegister">
                                <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                                    <p class="text--error col-md-12" v-if="has_error_register">
                                        Đã xảy ra lỗi. Vui lòng kiểm tra lại các thông tin của bạn!
                                    </p>
                                    <div class="d-inline-block col-md-12 no-padding">
                                        <div :class="['form-group d-inline-block text-left float-left', isVerifySMSCodeSuccess ? 'col-md-6' : 'col-md-12']">
                                            <div class="form-group d-inline-block col-md-12 no-padding text-left">
                                                <label for="reg_phone">Số điện thoại</label>
                                                <input type="text"
                                                       :class="['form-control', !is_valid_phone || !is_valid_phone_format ? 'form-control--error' : '']"
                                                       placeholder="Số điện thoại" id="reg_phone" v-model="phone"
                                                       :disabled="show_loading || isVerifySMSCodeSuccess"
                                                       ref="phone" autocomplete="off">
                                                <p v-if="isVerifySMSCodeSuccess" class="mt-1 d-inline-block text-success text-left col-md-12 no-padding mt-0">
                                                    <i class="fas fa-check-circle"></i>&nbsp;Số điện thoại đã được xác thực
                                                </p>
                                                <p class="mt-1 text--error d-inline-block" v-if="!is_valid_phone">
                                                    Trường này là bắt buộc
                                                </p>
                                                <p class="mt-1 text--error d-inline-block"
                                                   v-if="!is_valid_phone_format">Số điện thoại không đúng
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                                   v-if="is_sending_sms_failure">Không gửi được mã xác nhận. Vui lòng kiểm tra lại số điện thoại.
                                                </p>
                                            </div>
                                            <div v-if="!hasVerifySMSCode">
                                                <div id="recaptcha-container"></div>
                                            </div>
                                            <p class="mt-2 mb-2 text-left text--error d-inline-block col-md-12 no-padding mb-0"
                                               v-if="!is_valid_captcha">Bạn chưa nhập mã captcha.
                                            </p>
                                            <button v-if="isSendingVerifySMSCode" @click="sendingSMS" class="btn btn-flat btn-danger" v-bind:disabled="show_loading">
                                                <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="show_loading"></i>&nbsp;Gửi mã xác thực
                                            </button>
                                            <div v-if="hasVerifySMSCode" class="form-group d-inline-block col-md-12 no-padding text-left mt-3">
                                                <label for="verify_code">Mã xác thực</label>
                                                <input type="text"
                                                       :class="['form-control', !is_valid_sms_code || !is_correct_verify_sms_code ? 'form-control--error' : '']"
                                                       placeholder="Nhập mã xác thực" v-model="verify_sms_code"
                                                       id="verify_code"
                                                       :disabled="show_loading"
                                                       autocomplete="off">
                                                <p class="mt-1 text--error d-inline-block" v-if="!is_valid_sms_code">
                                                    Trường này là bắt buộc
                                                </p>
                                                <p class="mt-1 text--error d-inline-block"
                                                   v-if="!is_correct_verify_sms_code">Mã xác thực không đúng.
                                                </p>
                                                <p class="mt-1 d-inline-block">
                                                    Bạn không nhận được mã xác thực? <a href="javascipt:void(0)" style="color: #0f6cb2 !important" @click="sendingSMS">Gửi lại</a>
                                                </p>
                                            </div>
                                            <button v-if="hasVerifySMSCode" class="btn btn-flat btn-danger" v-bind:disabled="show_loading" @click="verifyCodeSMS">
                                                <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="show_loading"></i>&nbsp;Xác nhận
                                            </button>
<!--                                        <div v-if="isVerifySMSCodeSuccess" class="col-md-6 d-inline-block no-padding">-->
                                            <div v-if="isVerifySMSCodeSuccess">
                                                <div class="form-group d-inline-block col-md-12 no-padding text-left">
                                                    <label for="reg_password">Password</label>
                                                    <input type="password"
                                                           :class="['form-control', !is_valid_password || !is_valid_password_length ? 'form-control--error' : '']"
                                                           v-on:keydown.enter.prevent=''
                                                           v-model="password"
                                                           placeholder="Nhập password"
                                                           id="reg_password"
                                                           ref="reg_password"
                                                           readonly
                                                           :disabled="show_loading"
                                                           autocomplete="off">
                                                    <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_password">
                                                        Trường này là bắt buộc
                                                    </p>
                                                    <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_password_length">
                                                        Password phải lớn hơn 6 ký tự
                                                    </p>
                                                </div>
                                                <div class="form-group d-inline-block col-md-12 no-padding text-left">
                                                    <label for="reg_password2">Nhập lại Password</label>
                                                    <input type="password"
                                                           :class="['form-control', !is_valid_password2 || !is_valid_diff_password ? 'form-control--error' : '']"
                                                           v-on:keydown.enter.prevent=''
                                                           v-model="password2"
                                                           placeholder="Nhập lại password"
                                                           id="reg_password2"
                                                           ref="reg_password2"
                                                           readonly
                                                           :disabled="show_loading"
                                                           autocomplete="off">
                                                    <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_password2">
                                                        Trường này là bắt buộc
                                                    </p>
                                                    <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_diff_password">
                                                        Mật khẩu nhập lại không khớp
                                                    </p>
                                                </div>
                                                <div class="form-group d-inline-block col-md-12 no-padding text-left">
                                                    <label for="reg_fullname">Họ Tên</label>
                                                    <input type="text"
                                                           :class="['form-control', !is_valid_name ? 'form-control--error' : '']"
                                                           placeholder="Họ tên" id="reg_fullname" v-model="fullname"
                                                           :disabled="show_loading"
                                                           ref="fullname" autocomplete="off" readonly>
                                                    <p class="mt-1 text--error d-inline-block" v-if="!is_valid_name">
                                                        Trường này là bắt buộc
                                                    </p>
                                                </div>
                                                <div class="form-group d-inline-block col-md-12 no-padding text-left">
                                                    <label for="reg_email">Email</label>
                                                    <input type="email"
                                                           :class="['form-control', !is_valid_email || is_existed_email ? 'form-control--error' : '']"
                                                           placeholder="Email" id="reg_email"
                                                           v-model="email"
                                                           @blur="checkEmail"
                                                           :disabled="show_loading"
                                                           ref="email" autocomplete="off" readonly>
                                                    <!--                                    <p class="mt-1 d-inline-block" style="line-height: 1.5;margin: 0;font-style: italic;">-->
                                                    <!--                                        Mã xác thực sẽ được gửi vào email để kích hoạt tài khoản. Vui lòng nhập chính xác địa chỉ email.-->
                                                    <!--                                    </p>-->
                                                    <!--                                    <p class="mt-1 text&#45;&#45;error d-inline-block" v-if="!is_valid_email">-->
                                                    <!--                                        Trường này là bắt buộc-->
                                                    <!--                                    </p>-->
                                                    <p class="mt-1 text--error d-inline-block" v-if="!is_valid_email_format">
                                                        Email không đúng
                                                    </p>
                                                    <p class="mt-1 text--error d-inline-block" v-if="is_existed_email">
                                                        Email đã tồn tại. Vui lòng sử dụng email khác.
                                                    </p>
                                                </div>
                                                <div class="form-group d-inline-block col-md-12 no-padding text-left">
                                                    <label class="form-check-inline">Giới tính</label>
                                                    <div :class="['form-control', !is_valid_gender ? 'form-control--error' : '']">
                                                        <div class="form-check-inline">
                                                            <label class="form-check-label">
                                                                <input type="radio" class="form-check-input" name="gender"
                                                                       v-model="gender" value="Nam" readonly
                                                                       :disabled="show_loading"> Nam
                                                            </label>
                                                        </div>
                                                        <div class="form-check-inline">
                                                            <label class="form-check-label">
                                                                <input type="radio" class="form-check-input" name="gender"
                                                                       v-model="gender" value="Nữ" readonly
                                                                       :disabled="show_loading"> Nữ
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <p class="mt-1 text--error d-inline-block" v-if="!is_valid_gender">
                                                        Trường này là bắt buộc
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="isVerifySMSCodeSuccess" class="form-group d-inline-block col-md-6 text-left float-left">
                                            <div class="form-group d-inline-block col-md-12 no-padding text-left">
                                                <label for="city">Tỉnh / Thành phố</label>
                                                <v-select :options="city" :reduce="city => city.id" @input="changeCity"
                                                          v-model="city_id"
                                                          placeholder="Thành phố" label="text" ref="city" id="city"
                                                          :disabled="show_loading"
                                                          :class="[!is_valid_city ? 'form-control--error' : '']" readonly>
                                                </v-select>
                                                <p class="mt-1 text--error d-inline-block" v-if="!is_valid_city">
                                                    Trường này là bắt buộc
                                                </p>
                                            </div>
                                            <div class="form-group d-inline-block col-md-12 no-padding text-left">
                                                <label for="district">Quận / Huyện</label>
                                                <v-select :options="district" :reduce="district => district.id"
                                                          @input="changeDistrict"
                                                          v-model="district_id" placeholder="Quận huyện" label="text"
                                                          ref="district"
                                                          id="district"
                                                          :disabled="show_loading"
                                                          :class="[!is_valid_district ? 'form-control--error' : '']" readonly>
                                                </v-select>
                                                <p class="mt-1 text--error d-inline-block"
                                                   v-if="!is_valid_district">Trường này là bắt buộc
                                                </p>
                                            </div>
                                            <div class="form-group d-inline-block col-md-12 no-padding text-left">
                                                <label for="village">Phường / Xã</label>
                                                <v-select :options="village" :reduce="village => village.id"
                                                          @input="changeVillage"
                                                          v-model="village_id" placeholder="Phường xã" label="text"
                                                          ref="village"
                                                          id="village"
                                                          :disabled="show_loading"
                                                          :class="[!is_valid_village ? 'form-control--error' : '']" readonly>
                                                </v-select>
                                                <p class="mt-1 text--error d-inline-block" v-if="!is_valid_village">
                                                    Trường này là bắt buộc
                                                </p>
                                            </div>
                                            <div class="form-group d-inline-block col-md-12 no-padding text-left">
                                                <label for="reg_address">Địa chỉ</label>
                                                <input type="text"
                                                       :class="['form-control', !is_valid_address ? 'form-control--error' : '']"
                                                       placeholder="Số nhà, ..." id="reg_address" v-model="address"
                                                       :disabled="show_loading"
                                                       ref="address" autocomplete="off" readonly>
                                                <p class="mt-1 text--error d-inline-block" v-if="!is_valid_address">
                                                    Trường này là bắt buộc
                                                </p>
                                            </div>
                                            <div class="form-group d-inline-block col-md-12 no-padding text-left">
                                                <label for="reg_birthday">Ngày sinh</label>
                                                <date-picker v-model="birthday" id="reg_birthday" :config="options"
                                                             placeholder="dd/mm/yyyy"
                                                             :class="['form-control', !is_valid_birthday ? 'form-control--error' : '']"
                                                             autocomplete="off" readonly
                                                             :disabled="show_loading">
                                                </date-picker>
                                                <p class="mt-1 text--error d-inline-block"
                                                   v-if="!is_valid_birthday">Trường này là bắt buộc
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="col-md-12 float-left no-padding" v-if="show_btn_login">
                                <div class="form-group col-md-6 float-right text-right no-padding">
                                    <button type="button" class="btn btn-info btn-flat" v-on:click="login()" :disbaled="show_loading">
                                        <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="show_loading"></i>&nbsp;Đăng nhập
                                    </button>
                                </div>
                            </div>
                            <div class="form-group col-md-12 float-left" v-if="show_btn_register">
                                <div class="col-md-6 float-left text-left mt-3 no-padding">
                                    <p>Bạn đã có tài khoản? <a href="javascript:void(0)" @click="switchLoginForm"
                                                               style="color: #0f6cb2 !important">Đăng nhập ngay</a></p>
                                </div>
                                <div class="col-md-6 float-right text-right no-padding">
                                    <button type="button" class="btn btn-primary btn-flat" v-on:click="register()" :disbaled="show_loading">
                                        <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="show_loading"></i>&nbsp;Đăng ký
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-12 float-left no-padding" v-if="show_btn_change_pass">
                                <div class="col-md-6 float-left text-left mt-3 no-padding">
                                    <p>Bạn đã có tài khoản? <a href="javascript:void(0)" @click="switchLoginForm"
                                                               style="color: #0f6cb2 !important">Đăng nhập ngay</a></p>
                                </div>
                                <div class="form-group col-md-6 float-right text-right no-padding">
                                    <button type="button" class="btn btn-info btn-flat" v-on:click="changePassword" :disabled="show_loading">
                                        <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="show_loading"></i>&nbsp;Đổi mật khẩu
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-12 no-padding" v-if="isLoginSuccess">
                                <div class="form-group col-md-6 float-right text-right no-padding">
                                    <button type="button" class="btn btn-primary btn-flat" data-dismiss="modal">Đóng</button>
                                </div>
                            </div>
                        </div>
<!--                    </form>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase';
    // Import this component
    import datePicker from 'vue-bootstrap-datetimepicker';
    // Import date picker css
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
    export default {
        data() {
            return {
                password: '',
                password2: '',
                fullname: '',
                phone: '',
                gender: '',
                verify_email: '',
                email: '',
                email_reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                phone_reg: /^((09|03|07|08|05)+([0-9]{8})\b)$/,
                isFinished: false,
                hidden: false,
                hasLogin: false,

                isLogin: true,
                isRegister: false,
                isChangePassword: false,
                isSendEmailVerifyCode: false,
                isVerifyCode: false,
                isVerifySMSCode: false,
                isSendingVerifySMSCode: true,
                isVerifySMSCodeSuccess: false,
                isNewPassword: false,
                hasVerifySMSCode: false,

                birthday: '',
                options: {
                    format: 'DD/MM/YYYY',
                    useCurrent: false,
                },
                city: [],
                city_id: '',
                district: [],
                district_id: '',
                village: [],
                village_id: '',
                address: '',
                verify_code: '',
                verify_sms_code: '',
                new_password: '',
                new_password2: '',
                submitStatus: null,
                isLogged: false,
                is_valid_username: true,
                is_valid_password: true,
                is_valid_password_length: true,
                is_valid_password2: true,
                is_valid_diff_password: true,
                is_valid_name: true,
                is_valid_phone: true,
                is_valid_phone_format: true,
                is_valid_phone_not_exist: false,
                is_valid_email: true,
                is_valid_email_format: true,
                is_valid_verify_email: true,
                is_valid_verify_email_format: true,
                is_existed_email: false,
                is_valid_city: true,
                is_valid_district: true,
                is_valid_village: true,
                is_valid_address: true,
                is_valid_gender: true,
                is_valid_birthday: true,
                is_exist_phone: false,
                is_correct_phone_or_password: true,
                is_send_email_change_pass_success: false,
                is_send_email_change_pass_error: true,
                is_correct_verify_sms_code: true,
                is_valid_sms_code: true,
                is_correct_verify_code: true,
                show_loading: false,
                hasVerifyCode: false,
                is_new_password: false,
                is_valid_new_password: true,
                is_valid_new_password_length: true,
                is_valid_new_password2: true,
                is_valid_new_password2_length: true,
                is_valid_new_password2_incorrect: true,
                isChangedPasswordSuccess: false,
                isLoginSuccess: false,
                is_user_inactive: false,
                isRegisterSuccess: false,
                has_error_register: false,
                is_valid_payment_method: true,
                payment_method: '',
                customer_name: '',
                is_sending_sms_failure: false,
                is_valid_captcha: true,
                recaptcha: false,
                show_btn_login: false,
                show_btn_register: false,
                show_btn_change_pass: false,
                show_btn_login_success: false,
            }
        },
        components: {
            datePicker
        },
        created() {
            this.url = url;
            this.loadCity();
            this.checkLogged();
        },
        filters: {},
        watch: {
            password: function () {
                this.is_valid_password = this.password;
                if(this.password.length > 0) {
                    this.is_valid_password_length = this.password.length >= 6;
                }
            },
            password2: function () {
                this.is_valid_password2 = this.password2;
                if(this.password2.length > 0) {
                    this.is_valid_diff_password = this.password === this.password2;
                }
            },
            fullname: function () {
                this.is_valid_name = this.fullname;
            },
            phone: function () {
                this.is_user_inactive = false;
                if(this.phone) {
                    this.is_valid_phone = true;
                } else {
                    this.is_valid_phone = false
                }
                if(this.phone.length > 0) {
                    this.is_valid_phone_format = this.phone_reg.test(this.phone);
                    if (!this.is_valid_phone_format) {
                        this.is_valid_phone_not_exist = false;
                        this.is_exist_phone = false;
                    } else {
                        this.checkPhone();
                    }
                } else {
                    this.is_valid_phone_format = true;
                }
            },
            verify_email: function () {
                this.is_valid_email = this.verify_email;
                if(this.verify_email.length > 0) {
                    this.is_valid_verify_email_format = this.email_reg.test(this.verify_email);
                }
            },
            email: function () {
                if(this.email) {
                    this.is_existed_email = false;
                }
                if(this.email && this.email.length > 0) {
                    this.is_valid_email_format = this.email_reg.test(this.email);
                }
            },
            city_id: function () {
                this.is_valid_city = this.city_id;
            },
            district_id: function () {
                this.is_valid_district = this.district_id;
            },
            village_id: function () {
                this.is_valid_village = this.village_id;
            },
            address: function () {
                this.is_valid_address = this.address;
            },
            gender: function () {
                this.is_valid_gender = this.gender;
            },
            birthday: function () {
                this.is_valid_birthday = this.birthday;
            },
            verify_code: function () {
                this.is_valid_verify_code = this.verify_code;
            },
            new_password: function () {
                this.is_valid_new_password = this.new_password;
                if(this.new_password.length > 0) {
                    this.is_valid_new_password_length = this.new_password.length >= 6;
                }
            },
            new_password2: function () {
                this.is_valid_new_password2 = this.new_password2;
                if(this.new_password2.length > 0) {
                    this.is_valid_new_password2_incorrect = this.new_password === this.new_password2;
                }
            },
        },
        methods: {
            recapchaVerifierChangePass: function() {
                let that = this;
                window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container-changepass', {
                    'size': 'normal',
                    'callback': function(response) {
                        console.log(response);
                        that.is_valid_captcha = true;
                        that.recaptcha = true;
                    },
                    'expired-callback': function(response) {
                        console.log(response);
                        that.is_valid_captcha = false;
                        that.recaptcha = false;
                    }
                });
                window.recaptchaVerifier.render();
            },
            recapchaVerifier: function() {
                let that = this;
                window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
                    'size': 'normal',
                    'callback': function(response) {
                        console.log(response);
                        that.is_valid_captcha = true;
                        that.recaptcha = true;
                    },
                    'expired-callback': function(response) {
                        console.log(response);
                        that.is_valid_captcha = false;
                        that.recaptcha = false;
                    }
                });
                window.recaptchaVerifier.render();
            },
            sendingSMS: function() {
                if(!this.phone) {
                    this.is_valid_phone = false;
                    return;
                } else if(!this.phone_reg.test(this.phone)) {
                    this.is_valid_phone = true;
                    this.is_valid_phone_format = false;
                    return;
                } else {
                    this.is_valid_phone = true;
                    this.is_valid_phone_format = true;
                }
                if(!this.recaptcha) {
                    this.is_valid_captcha = false;
                    return;
                }
                let phoneNumber = this.phone;
                phoneNumber = phoneNumber.replace("0","+84");
                this.show_loading = true;
                this.sendSMS(phoneNumber);
            },
            sendSMS: function(phoneNumber) {
                let that = this;
                let appVerifier = window.recaptchaVerifier;
                firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                    .then(function (confirmationResult) {
                        that.show_loading = false;
                        window.confirmationResult = confirmationResult;
                        that.hasVerifySMSCode = true;
                        that.verify_sms_code = '';
                        that.isSendingVerifySMSCode = false;
                    }).catch(function (error) {
                        that.show_loading = false;
                        console.log("Error; SMS not sent");
                        console.log(error);
                        that.is_sending_sms_failure = true;
                        that.isSendingVerifySMSCode = true;
                    });
            },
            verifyCodeSMS: function() {
                if(!this.verify_sms_code) {
                    this.is_valid_sms_code = false;
                    return;
                }
                this.is_valid_sms_code = !this.verify_sms_code ? false : true;
                let code = this.verify_sms_code;
                let that = this;
                this.show_loading = true;
                confirmationResult.confirm(code).then(function (result) {
                    that.show_loading = false;
                    // let user = result.user;
                    that.isVerifySMSCodeSuccess = true;
                    that.hasVerifySMSCode = false;
                    setTimeout(function () {
                        $("#reg_password").removeAttr("readonly");
                        $("#reg_password2").removeAttr("readonly");
                        $("#reg_fullname").removeAttr("readonly");
                        $("#reg_email").removeAttr("readonly");
                        $("#reg_address").removeAttr("readonly");
                        $("input[type=radio]").removeAttr("readonly");
                        $("#reg_birthday").removeAttr("readonly");
                    },500);
                    that.showButton();
                }).catch(function (error) {
                    that.show_loading = false;
                    console.log("bad verification code");
                    console.log(error);
                    that.is_correct_verify_sms_code = false;
                    that.showButton();
                });
            },
            open_login_modal: function() {
                this.isLoginSuccess = false;
                this.phone = '';
                this.is_exist_phone = false;
                this.isLogin = true;
                this.isRegister = false;
                this.isChangePassword = false;
                this.isSendEmailVerifyCode = false;
                this.isVerifyCode = false;
                this.isNewPassword = false;
                this.is_valid_phone_not_exist = false;
                this.is_valid_phone = true;
                setTimeout(function () {
                    $("#login_phone").removeAttr("readonly");
                }, 200);
                $("#loginForm").modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            login: function () {
                if(!this.checkLoginForm()) {
                    return;
                }
                this.show_loading = true;
                axios.post(url + "/api/dang-nhap", {
                    phone: this.phone,
                    password: this.password
                }).then(response => {
                    this.show_loading = false;
                    if (response.status === 200) {
                        this.isLogin = false;
                        this.isRegister = false;
                        this.isSendEmailVerifyCode = false;
                        this.isVerifyCode = false;
                        this.isNewPassword = false;
                        this.isLoginSuccess = true;
                        this.isRegisterSuccess = false;
                        this.isChangedPasswordSuccess = false;
                        this.isLogged = true;
                        this.checkLogged();
                        // if(this.$root.$el.id === 'detail') {
                        //     this.$root.checkLogged();
                        // }
                        this.reCheckLogged();
                        this.resetShowingBtn();
                        setTimeout(function () {
                            $("#loginForm").modal('hide');
                        },2000);
                    }
                }).catch(e => {
                    this.show_loading = false;
                    this.is_correct_phone_or_password = false;
                    if(e.response && e.response.data && e.response.data === "user_inactive") {
                        this.is_user_inactive = true;
                    }
                });
            },
            logout: function () {
                axios.post(url + '/api/logout')
                    .then(response => {
                        this.isLogged = false;
                        this.isLoginSuccess = false;
                        // if(this.$root.$el.id === 'detail') {
                        //     this.$root.checkLogged();
                        // }
                        this.reCheckLogged();
                    }).catch(e =>{
                    this.isLogged = false;
                });
            },
            reCheckLogged: function() {
                let that = this;
                $.each(this.$root.$children, function(k, v){
                    let id = this.$el.id;
                    if(id === 'reviews_component' || id === 'checkout_component') {
                        that.$root.$children[k].checkLogged();
                    }
                });
            },
            register: function () {
                if(!this.checkForm()) {
                    return;
                }
                let customer = [];
                customer.push({
                    "password": this.password,
                    "password2": this.password2,
                    "fullname": this.fullname,
                    "phone": this.phone,
                    "email": this.email,
                    "city": this.city_id,
                    "district": this.district_id,
                    "village": this.village_id,
                    "address": this.address,
                    "birthday": this.birthday,
                    "gender": this.gender
                });
                this.show_loading = true;
                axios.post(url + "/api/dang-ky", {
                    body: customer
                }).then(response => {
                    this.show_loading = false;
                    if (response.status === 200) {
                        this.isLogin = true;
                        this.is_exist_phone = true;
                        this.isRegister = false;
                        // this.isSendEmailVerifyCode = false;
                        // this.isVerifyCode = true;
                        this.isNewPassword = false;
                        this.isLoginSuccess = false;
                        this.isChangedPasswordSuccess = false;
                        this.isRegisterSuccess = true;
                        setTimeout(function () {
                            $("#login_phone").removeAttr("readonly");
                            $("#login_password").removeAttr("readonly");
                        },100);
                        this.showButton();
                    }
                }).catch(e => {
                    this.show_loading = true;
                    this.has_error_register = true;
                    this.$toast.error({
                        title: 'Lỗi',
                        message: 'Đã xảy ra lỗi.'
                    });
                })
            },
            checkLogged: function() {
                axios.post(url + '/api/check-logged')
                    .then(response => {
                        if(response.data !== 'not_exist_user') {
                            this.isLogged = true;
                            this.customer_id = response.data.id;
                            this.customer_name = response.data.name;
                            this.customer_phone = response.data.phone;
                            this.customer_address = response.data.address;
                            this.customer_email = response.data.email;
                            this.customer_city = response.data.city_id;
                        } else {
                            this.isLogged = false;
                        }
                    }).catch(e =>{
                    this.isLogged = false;
                });
            },
            checkPhone: function() {
                if(!this.phone || !this.phone_reg.test(this.phone)) {
                    return;
                }
                this.show_loading = true;
                axios.get(url + "/api/check-exist-phone/"+this.phone)
                    .then(response => {
                        this.show_loading = false;
                        this.isChangedPasswordSuccess = false;
                        if(response.data === 'success') {
                            this.is_exist_phone = true;
                            setTimeout(function () {
                                $("#login_password").removeAttr("readonly");
                            },100);
                        } else {
                            this.is_valid_phone_not_exist = true;
                            this.is_exist_phone = false;
                        }
                        this.showButton();
                    }).catch(e => {
                    this.show_loading = false;
                    this.is_exist_phone = false;
                    if(e.response.data === "user_inactive") {
                        this.is_user_inactive = true;
                    } else {
                        this.is_valid_phone_not_exist = true;
                    }
                });
            },
            checkEmail: function() {
                if(!this.email || !this.email_reg.test(this.email)) {
                    this.is_valid_email_format = false;
                    return;
                }
                // this.show_loading = true;
                axios.get(url + "/api/check-exist-email/"+this.email)
                    .then(response => {
                        if(response.data === 'email_existed') {
                            this.is_existed_email = true;
                        } else {
                            this.is_existed_email = false;
                        }
                    })
            },
            // sendEmail: function() {
            //     if(!this.verify_email || !this.email_reg.test(this.verify_email)) {
            //         this.is_valid_email = false;
            //         return;
            //     }
            //     this.show_loading = true;
            //     axios.post(url + "/api/send-email-change-password",{
            //         email: this.verify_email,
            //         phone: this.phone
            //     }).then(response => {
            //         this.show_loading = false;
            //         if(response.status === 200) {
            //             this.isLogin = false;
            //             this.isRegister = false;
            //             this.isSendEmailVerifyCode = false;
            //             this.isVerifyCode = true;
            //             this.isNewPassword = false;
            //             this.is_send_email_change_pass_error = true;
            //         }
            //     }).catch(e => {
            //         this.show_loading = false;
            //         this.is_send_email_change_pass_error = false;
            //     });
            // },
            // verifyCode: function() {
            //     if(!this.verify_code) {
            //         return;
            //     }
            //     this.show_loading = true;
            //     axios.post(url + "/api/verify-code",{
            //         verifyCode: this.verify_code,
            //         phone: this.phone
            //     }).then(response => {
            //         this.show_loading = false;
            //         if(response.status === 200) {
            //             this.isLogin = false;
            //             this.isRegister = false;
            //             this.isSendEmailVerifyCode = false;
            //             this.isVerifyCode = false;
            //             this.isNewPassword = true;
            //             this.is_correct_verify_code = true;
            //             this.is_new_password = true;
            //             setTimeout(function () {
            //                 $("#new_password2").removeAttr("readonly");
            //             },100);
            //         }
            //     }).catch(e => {
            //         this.show_loading = false;
            //         this.is_correct_verify_code = false;
            //     });
            // },
            changePassword: function() {
                if(!this.checkNewPasswordForm()) {
                    return;
                }
                this.show_loading = true;
                axios.post(url + "/api/change-password",{
                    password: this.new_password,
                    password2: this.new_password2,
                    phone: this.phone
                }).then(response => {
                    this.show_loading = false;
                    if(response.status === 200) {
                        this.isLogin = true;
                        this.is_exist_phone = true;
                        this.isRegister = false;
                        this.isSendEmailVerifyCode = false;
                        this.isVerifyCode = false;
                        this.isNewPassword = false;
                        this.isChangedPasswordSuccess = true;
                        setTimeout(function () {
                            $("#login_phone").removeAttr("readonly");
                            $("#login_password").removeAttr("readonly");
                        },100);
                        this.showButton();
                    }
                }).catch(e => {
                    this.show_loading = false;
                    this.is_correct_verify_code = false;
                });
            },
            checkNewPasswordForm: function () {
                let is_invalid_form = true;
                if (!this.new_password) {
                    this.is_valid_new_password = false;
                    is_invalid_form = false;
                } else if (this.new_password.length < 6) {
                    this.is_valid_new_password_length = false;
                    is_invalid_form = false;
                }
                if (!this.new_password2) {
                    this.is_valid_new_password2 = false;
                    is_invalid_form = false;
                } else if (this.new_password !== this.new_password2) {
                    this.is_valid_new_password2_incorrect = false;
                    is_invalid_form = false;
                }
                return is_invalid_form;
            },
            checkLoginForm: function () {
                let is_invalid_form = true;
                if (this.phone && this.password) {
                    return true;
                }
                if (!this.phone) {
                    this.is_valid_phone = false;
                    is_invalid_form = false;
                }
                if (!this.password) {
                    this.is_valid_password = false;
                    is_invalid_form = false;
                } else if (this.password.length < 6) {
                    this.is_valid_password_length = false;
                    is_invalid_form = false;
                }
                return is_invalid_form;
            },
            checkForm: function () {
                let is_invalid_form = true;
                if (!this.password) {
                    this.is_valid_password = false;
                    is_invalid_form = false;
                } else if (this.password.length < 6) {
                    this.is_valid_password_length = false;
                    is_invalid_form = false;
                }
                if (!this.password2) {
                    this.is_valid_password2 = false;
                    is_invalid_form = false;
                } else if (this.password !== this.password2) {
                    this.is_valid_diff_password = false;
                    is_invalid_form = false;
                }
                if (!this.fullname) {
                    this.is_valid_name = false;
                    is_invalid_form = false;
                }
                // if (!this.email) {
                //     this.is_valid_email = false;
                //     is_invalid_form = false;
                // } else
                if(this.email && !this.email_reg.test(this.email)) {
                    this.is_valid_email_format = false;
                    is_invalid_form = false;
                }
                if (!this.city_id) {
                    this.is_valid_city = false;
                    is_invalid_form = false;
                }
                if (!this.district_id) {
                    this.is_valid_district = false;
                    is_invalid_form = false;
                }
                if (!this.village_id) {
                    this.is_valid_village = false;
                    is_invalid_form = false;
                }
                if (!this.address) {
                    this.is_valid_address = false;
                    is_invalid_form = false;
                }
                if (!this.gender) {
                    this.is_valid_gender = false;
                    is_invalid_form = false;
                }
                if (!this.birthday) {
                    this.is_valid_birthday = false;
                    is_invalid_form = false;
                }
                if(this.is_existed_email) {
                    is_invalid_form = false;
                }
                return is_invalid_form;
            },
            loadCity: function () {
                axios.get(url + '/api/zone/city')
                    .then(response => {
                        this.city = JSON.parse(response.data).results;
                    });
            },
            changeCity: function (val) {
                this.city_id = val;
                axios.get(url + '/api/zone/district/' + val)
                    .then(response => {
                        this.district = JSON.parse(response.data).results;
                        this.district_id = null;
                        this.village_id = null;
                    });
            },
            changeDistrict: function (val) {
                this.district_id = val;
                axios.get(url + '/api/zone/village/' + val)
                    .then(response => {
                        this.village = JSON.parse(response.data).results;
                        this.village_id = null;
                    });
            },
            changeVillage: function (val) {
                this.village_id = val;
            },
            showButton: function() {
                this.resetShowingBtn();
                this.showBtnLogin();
                this.showBtnRegister();
                this.showBtnChangePass();
            },
            showBtnLogin: function() {
                let is_showing = false;
                if(this.isLogin) {
                    if(this.is_exist_phone) {
                        is_showing = true;
                    }
                }
                this.show_btn_login = is_showing;
            },
            showBtnRegister: function() {
                let is_showing = false;
                if(this.isRegister) {
                    if(this.isVerifySMSCodeSuccess) {
                        is_showing = true;
                    }
                }
                this.show_btn_register = is_showing;
            },
            showBtnChangePass: function() {
                let is_showing = false;
                if(this.isNewPassword) {
                    if(this.isVerifySMSCodeSuccess) {
                        is_showing = true;
                    }
                }
                this.show_btn_change_pass = is_showing;
            },
            resetShowingBtn: function() {
                this.show_btn_login = false;
                this.show_btn_register = false;
                this.show_btn_login_success = false;
                this.show_btn_change_pass = false;
            },
            switchLoginForm: function () {
                this.resetLoginForm();
            },
            switchRegisterForm: function () {
                this.resetRegisterForm();
            },
            switchChangePassword: function() {
                this.resetChangePasswordForm();
            },
            resetChangePasswordForm: function() {
                // this.isChangePassword = true;
                this.isNewPassword = true;
                this.isLogin = false;
                this.isRegisterSuccess = false;
                this.isRegister = false;
                this.isVerifySMSCodeSuccess = false;
                this.isChangedPasswordSuccess = false;
                this.isRegisterSuccess = false;
                this.is_exist_phone = false;
                // this.isSendEmailVerifyCode = true;
                // this.isVerifyCode = false;

                this.isVerifySMSCodeSuccess = false;
                this.is_valid_phone = true;
                this.is_valid_phone_format = true;
                this.show_loading = false;
                this.is_sending_sms_failure = false;
                this.hasVerifySMSCode = false;
                this.isSendingVerifySMSCode = true;
                this.is_valid_sms_code = true;
                this.is_correct_verify_sms_code = true;
                this.verify_sms_code = '';
                setTimeout(function () {
                    $("#change_pass_phone").removeAttr("readonly");
                    $("#verify_sms_code_change_pass").removeAttr("readonly");
                },100);
                this.recapchaVerifierChangePass();
                this.showButton();
            },
            resetRegisterForm: function() {
                this.isRegister = true;
                this.isLogin = false;
                this.isVerifySMSCodeSuccess = false;
                this.isChangedPasswordSuccess = false;
                this.isRegisterSuccess = false;
                this.isSendEmailVerifyCode = false;
                this.isVerifyCode = false;
                this.isNewPassword = false;
                this.isVerifySMSCodeSuccess = false;
                this.is_exist_phone = false;
                this.isRegisterSuccess = false;
                this.isChangedPasswordSuccess = false;

                this.is_valid_phone_not_exist = false;
                this.has_error_register = false;
                // this.phone = '';
                this.password = '';
                this.password2 = '';
                this.fullname = '';
                this.email = '';
                this.city_id  ='';
                this.district_id = '';
                this.village_id = '';
                this.address = '';
                this.gender = '';
                this.birthday = '';
                this.is_valid_phone = true;
                this.is_valid_phone_format = true;
                this.is_valid_password = true;
                this.is_valid_password_length = true;
                this.is_valid_password2 = true;
                this.is_valid_name = true;
                this.is_valid_email = true;
                this.is_valid_email_format = true;
                this.is_valid_city = true;
                this.is_valid_district = true;
                this.is_valid_village = true;
                this.is_valid_address = true;
                this.is_valid_gender = true;
                this.is_valid_birthday = true;
                this.isVerifySMSCodeSuccess = false;
                this.hasVerifySMSCode = false;
                this.is_sending_sms_failure = false;
                this.isSendingVerifySMSCode = true;
                setTimeout(function () {
                    $("#reg_password").removeAttr("readonly");
                    $("#reg_password2").removeAttr("readonly");
                    $("#reg_fullname").removeAttr("readonly");
                    $("#reg_email").removeAttr("readonly");
                    $("#reg_address").removeAttr("readonly");
                    $("input[type=radio]").removeAttr("readonly");
                    $("#reg_birthday").removeAttr("readonly");
                },500);
                this.recapchaVerifier();
                this.showButton();
            },
            resetLoginForm: function () {
                this.isLogin = true;
                this.isRegister = false;
                this.isVerifySMSCodeSuccess = false;
                this.isChangedPasswordSuccess = false;
                this.isRegisterSuccess = false;
                this.isSendEmailVerifyCode = false;
                this.isVerifyCode = false;
                this.isNewPassword = false;
                this.phone = '';
                this.is_valid_phone = true;
                this.is_exist_phone = false;
                this.password = '';
                this.is_valid_phone_format = true;
                this.is_valid_phone_not_exist = false;
                setTimeout(function () {
                    $("#login_phone").removeAttr("readonly");
                },100);
                this.showButton();
            }
        },
        mounted() {
            this.$root.$on('login', () => {
                this.open_login_modal();
            });
        }
    };
</script>
<style>
    ul.dropdown-menu.show {
        margin-top: 10px;
        padding: 0px;
    }
    ul.dropdown-menu.show li a {
        color: #0f6cb2;
    }
    ul.dropdown-menu.show li:hover a{
        color: white;
    }
    ul.dropdown-menu.show li:hover {
        background: #0f6cb2;
    }
    ul.dropdown-menu.show li {
        display: inline-block;
        width: 100%;
        padding: 10px;
    }


</style>