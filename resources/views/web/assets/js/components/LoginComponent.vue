<template>
    <div>
        <a href="javascript:void(0);" @click="openModal">
            <i class="fas fa-sign-in-alt"></i>&nbsp;Đăng nhập
        </a>
        <!--    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">-->
        <!--        Launch demo modal-->
        <!--    </button>-->
        <!-- Modal -->
        <div class="modal fade" id="loginForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
             aria-hidden="true">
            <div v-bind:class="['modal-dialog', isRegister ? 'modal-lg' : '', 'modal-dialog-centered']" role="document">
                <div class="modal-content">
<!--                    <form novalidate="true">-->
                        <div class="modal-header">
                            <h5 class="modal-title" v-if="isChangePassword && !isRegister">Đổi mật khẩu</h5>
                            <h5 class="modal-title" v-if="!isRegister && !isChangePassword">Đăng nhập</h5>
                            <h5 class="modal-title" v-if="isRegister && !isChangePassword">Đăng ký</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body col-md-12">
                            <div v-if="!isRegister && !isChangePassword">
                                <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                                    <div class="container" style="padding: 0px;width: 100%;">
                                        <form style="padding-top: 10px;">
                                            <div class="form-group">
                                                <label for="login_phone">Số điện thoại</label>
                                                <input type="text"
                                                       :class="['form-control', !is_valid_phone || !is_valid_phone_format ? 'form-control--error' : '']"
                                                       v-model="phone"
                                                       v-on:keydown.enter.prevent='checkPhone'
                                                       placeholder="Nhập số điện thoại"
                                                       id="login_phone" ref="phone"
                                                       readonly
                                                       autocomplete="off">
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_phone">
                                                    Trường này là bắt buộc
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                                       v-if="!is_valid_phone_format">Số điện thoại không đúng
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0"
                                                       v-if="!is_valid_phone_not_exist">Số điện thoại không tồn tại. Bạn có thể
                                                    <a href="javascript:void(0)" @click="switchRegisterForm" style="color: #0f6cb2 !important">Đăng ký</a> tài khoản mới.
                                                </p>
                                            </div>
                                            <div class="form-group" v-if="is_exist_phone">
                                                <label for="login_password">Mật khẩu</label>
                                                <input type="password"
                                                       :class="['form-control', !is_valid_password || !is_valid_password_length ? 'form-control--error' : '']"
                                                       placeholder="Mật khẩu"
                                                       id="login_password"
                                                       v-model="password"
                                                       ref="password"
                                                       readonly
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
                            <div v-if="isChangePassword">
                                <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                                    <div class="container" style="padding: 0px;width: 100%;">
                                        <form style="padding-top: 10px;">
                                            <div class="form-group" v-if="!is_send_email_change_pass_success">
                                                <label for="email_change_pwd">Email</label>
                                                <input type="text"
                                                       :class="['form-control', !is_valid_email || !is_valid_email_format ? 'form-control--error' : '']"
                                                       v-on:keydown.enter.prevent=''
                                                       v-model="email"
                                                       placeholder="Nhập email"
                                                       id="email_change_pwd"
                                                       ref="email"
                                                       readonly
                                                       autocomplete="off">
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_email">
                                                    Trường này là bắt buộc
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_email_format">
                                                    Email không đúng
                                                </p>
                                            </div>
                                            <div class="form-group" v-if="is_send_email_change_pass_success">
                                                <label for="verify_code">Email</label>
                                                <input type="text"
                                                       :class="['form-control', !is_valid_verify_code ? 'form-control--error' : '']"
                                                       v-on:keydown.enter.prevent=''
                                                       v-model="verify_code"
                                                       placeholder="Nhập mã xác nhận"
                                                       id="verify_code"
                                                       ref="verify_code"
                                                       readonly
                                                       autocomplete="off">
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_valid_verify_code">
                                                    Trường này là bắt buộc
                                                </p>
                                                <p class="mt-2 text--error d-inline-block col-md-12 no-padding mb-0" v-if="!is_correct_verify_code">
                                                    Mã xác nhận không đúng. Vui lòng thử lại
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="" v-if="isRegister">
                                <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                                    <div class="container" style="padding: 0px;width: 100%;">
                                        <div class="col-md-6 float-left">
                                            <div class="form-group">
                                                <label for="reg_fullname">Số điện thoại</label>
                                                <input type="text"
                                                       :class="['form-control', !is_valid_phone || !is_valid_phone_format ? 'form-control--error' : '']"
                                                       placeholder="Số điện thoại" id="reg_phone" v-model="phone"
                                                       ref="phone" autocomplete="off">
                                                <small class="mt-1 text--error d-inline-block" v-if="!is_valid_phone">
                                                    Trường này là bắt buộc
                                                </small>
                                                <small class="mt-1 text--error d-inline-block"
                                                       v-if="!is_valid_phone_format">Số điện thoại không đúng
                                                </small>
                                            </div>
                                            <div class="form-group">
                                                <label for="reg_password">Mật khẩu</label>
                                                <input type="password" value=""
                                                       :class="['form-control', !is_valid_password || !is_valid_password_length ? 'form-control--error' : '']"
                                                       placeholder="Mật khẩu" id="reg_password" v-model="password"
                                                       ref="password" autocomplete="off" readonly>
                                                <small class="mt-1 text--error d-inline-block"
                                                       v-if="!is_valid_password">Trường này là bắt buộc
                                                </small>
                                                <small class="mt-1 text--error d-inline-block"
                                                       v-if="!is_valid_password_length">Mật khẩu phải có ít nhất 6 ký tự
                                                </small>
                                            </div>
                                            <div class="form-group">
                                                <label for="reg_password2">Nhập lại mật khẩu</label>
                                                <input type="password"
                                                       :class="['form-control', !is_valid_password2 || !is_valid_diff_password ? 'form-control--error' : '']"
                                                       placeholder="Nhập lại mật khẩu" id="reg_password2"
                                                       v-model="password2" ref="password2" autocomplete="off" readonly>
                                                <small class="mt-1 text--error d-inline-block"
                                                       v-if="!is_valid_password2">Trường này là bắt buộc
                                                </small>
                                                <small class="mt-1 text--error d-inline-block"
                                                       v-if="!is_valid_diff_password">Mật khẩu nhập lại không khớp
                                                </small>
                                            </div>
                                            <div class="form-group">
                                                <label for="reg_fullname">Họ Tên</label>
                                                <input type="text"
                                                       :class="['form-control', !is_valid_name ? 'form-control--error' : '']"
                                                       placeholder="Họ tên" id="reg_fullname" v-model="fullname"
                                                       ref="fullname" autocomplete="off" readonly>
                                                <small class="mt-1 text--error d-inline-block" v-if="!is_valid_name">
                                                    Trường này là bắt buộc
                                                </small>
                                            </div>
                                            <div class="form-group">
                                                <label for="reg_email">Email</label>
                                                <input type="email"
                                                       :class="['form-control', !is_valid_email ? 'form-control--error' : '']"
                                                       placeholder="Email" id="reg_email" value="" v-model="email"
                                                       ref="email" autocomplete="off" readonly>
                                                <small class="mt-1 text--error d-inline-block" v-if="!is_valid_email">
                                                    Trường này là bắt buộc
                                                </small>
                                                <small class="mt-1 text--error d-inline-block" v-if="!is_valid_email_format">
                                                    Email không đúng
                                                </small>
                                            </div>
                                        </div>
                                        <div class="col-md-6  float-left">
                                            <div class="form-group">
                                                <label for="city">Tỉnh / Thành phố</label>
                                                <v-select :options="city" :reduce="city => city.id" @input="changeCity"
                                                          v-model="city_id"
                                                          placeholder="Thành phố" label="text" ref="city" id="city"
                                                          :class="[!is_valid_city ? 'form-control--error' : '']" readonly>
                                                </v-select>
                                                <small class="mt-1 text--error d-inline-block" v-if="!is_valid_city">
                                                    Trường này là bắt buộc
                                                </small>
                                            </div>
                                            <div class="form-group">
                                                <label for="district">Quận / Huyện</label>
                                                <v-select :options="district" :reduce="district => district.id"
                                                          @input="changeDistrict"
                                                          v-model="district_id" placeholder="Quận huyện" label="text"
                                                          ref="district"
                                                          id="district"
                                                          :class="[!is_valid_district ? 'form-control--error' : '']" readonly>
                                                </v-select>
                                                <small class="mt-1 text--error d-inline-block"
                                                       v-if="!is_valid_district">Trường này là bắt buộc
                                                </small>
                                            </div>
                                            <div class="form-group">
                                                <label for="village">Phường / Xã</label>
                                                <v-select :options="village" :reduce="village => village.id"
                                                          @input="changeVillage"
                                                          v-model="village_id" placeholder="Phường xã" label="text"
                                                          ref="village"
                                                          id="village"
                                                          :class="[!is_valid_village ? 'form-control--error' : '']" readonly>
                                                </v-select>
                                                <small class="mt-1 text--error d-inline-block" v-if="!is_valid_village">
                                                    Trường này là bắt buộc
                                                </small>
                                            </div>
                                            <div class="form-group">
                                                <label for="reg_address">Địa chỉ</label>
                                                <input type="text"
                                                       :class="['form-control', !is_valid_address ? 'form-control--error' : '']"
                                                       placeholder="Số nhà, ..." id="reg_address" v-model="address"
                                                       ref="address" autocomplete="off" readonly>
                                                <small class="mt-1 text--error d-inline-block" v-if="!is_valid_address">
                                                    Trường này là bắt buộc
                                                </small>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-check-inline">Giới tính</label>
                                                <div :class="['form-control', !is_valid_gender ? 'form-control--error' : '']">
                                                    <div class="form-check-inline">
                                                        <label class="form-check-label">
                                                            <input type="radio" class="form-check-input" name="gender"
                                                                   v-model="gender" value="Nam" readonly> Nam
                                                        </label>
                                                    </div>
                                                    <div class="form-check-inline">
                                                        <label class="form-check-label">
                                                            <input type="radio" class="form-check-input" name="gender"
                                                                   v-model="gender" value="Nữ" readonly> Nữ
                                                        </label>
                                                    </div>
                                                </div>
                                                <small class="mt-1 text--error d-inline-block" v-if="!is_valid_gender">
                                                    Trường này là bắt buộc
                                                </small>
                                            </div>
                                            <div class="form-group">
                                                <label for="reg_birthday">Ngày sinh</label>
                                                <date-picker v-model="birthday" id="reg_birthday" :config="options"
                                                             placeholder="dd/mm/yyyy"
                                                             :class="['form-control', !is_valid_birthday ? 'form-control--error' : '']"
                                                             autocomplete="off" readonly></date-picker>
                                                <small class="mt-1 text--error d-inline-block"
                                                       v-if="!is_valid_birthday">Trường này là bắt buộc
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="col-md-12 float-left no-padding" v-if="!isRegister && !isChangePassword">
                                <div class="form-group col-md-6 float-right text-right no-padding">
                                    <button type="button" class="btn btn-info btn-flat" v-on:click="login()">
                                        <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="hidden"></i>&nbsp;Đăng
                                        nhập
                                    </button>
                                </div>
                            </div>
                            <div class="form-group col-md-12 float-left" v-if="isRegister && !isChangePassword">
                                <div class="col-md-6 float-left text-left mt-3 no-padding">
                                    <p>Bạn đã có tài khoản? <a href="javascript:void(0)" @click="switchLoginForm"
                                                               style="color: #0f6cb2 !important">Đăng nhập ngay</a></p>
                                </div>
                                <div class="col-md-6 float-right text-right no-padding">
                                    <button type="button" class="btn btn-primary btn-flat" v-on:click="switchRegisterForm()">
                                        <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="hidden"></i>&nbsp;Đăng
                                        ký
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-12 float-left no-padding" v-if="isChangePassword">
                                <div class="col-md-6 float-left text-left mt-3 no-padding">
                                    <p>Bạn đã có tài khoản? <a href="javascript:void(0)" @click="switchLoginForm"
                                                               style="color: #0f6cb2 !important">Đăng nhập ngay</a></p>
                                </div>
                                <div class="form-group col-md-6 float-right text-right no-padding">
                                    <button type="button" class="btn btn-info btn-flat" v-on:click="sendEmail">
                                        <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="hidden"></i>&nbsp;Đổi mật khẩu
                                    </button>
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
    // Import this component
    import datePicker from 'vue-bootstrap-datetimepicker';
    // Import date picker css
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
    // import DisableAutocomplete from 'vue-disable-autocomplete';
    export default {
        data() {
            return {
                username: '',
                password: '',
                password2: '',
                fullname: '',
                phone: '',
                gender: '',
                email: '',
                email_reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                phone_reg: /^((09|03|07|08|05)+([0-9]{8})\b)$/,
                isFinished: false,
                hidden: false,
                hasLogin: false,
                isRegister: false,
                isChangePassword: false,
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
                submitStatus: null,
                is_valid_username: true,
                is_valid_password: true,
                is_valid_password_length: true,
                is_valid_password2: true,
                is_valid_diff_password: true,
                is_valid_name: true,
                is_valid_phone: true,
                is_valid_phone_format: true,
                is_valid_phone_not_exist: true,
                is_valid_email: true,
                is_valid_email_format: true,
                is_valid_city: true,
                is_valid_district: true,
                is_valid_village: true,
                is_valid_address: true,
                is_valid_gender: true,
                is_valid_birthday: true,
                is_exist_phone: false,
                is_correct_phone_or_password: true,
                is_send_email_change_pass_success: true,
                is_valid_verify_code: true,
                is_correct_verify_code: true,

            }
        },
        components: {
            datePicker,
            // DisableAutocomplete
        },
        created() {
            this.loadCity();
        },
        filters: {},
        watch: {
            username: function () {
                this.is_valid_username = this.username;
            },
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
                this.is_valid_phone = this.phone;
                if(this.phone.length > 0) {
                    this.is_valid_phone_format = this.phone_reg.test(this.phone);
                    if (!this.is_valid_phone_format) {
                        this.is_valid_phone_not_exist = true;
                        this.is_exist_phone = false;
                    }
                }
            },
            email: function () {
                this.is_valid_email = this.email;
                if(this.email.length > 0) {
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

        },
        methods: {
            openModal: function() {
                $("#login_phone").removeAttr("readonly");
                $("#loginForm").modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            login: function () {
                if(!this.checkLoginForm()) {
                    return;
                }
                axios.post(url + "/api/dang-nhap", {
                    phone: this.phone,
                    password: this.password
                }).then(response => {
                    if (response.data.status === 200) {
                        this.is_correct_phone_or_password = true;
                    }
                }).catch(e => {
                    console.log(e.response.status)
                    this.is_correct_phone_or_password = false;
                });
            },
            register: function () {
                let customer = [];
                customer.push({
                    "username": this.username,
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
                console.log(JSON.stringify(customer));
                axios.post(url + "/api/dang-ky", {
                    body: customer
                }).then(response => {
                    this.submit = false;
                    if (response.data === 201) {

                    } else {
                        this.$toast.error({
                            title: 'Lỗi',
                            message: 'Đã xảy ra lỗi.'
                        });
                    }
                })
            },
            checkPhone: function() {
                if(!this.phone || !this.phone_reg.test(this.phone)) {
                    return;
                }
                axios.get(url + "/api/check-exist-phone/"+this.phone)
                    .then(response => {
                    console.log(response.data);
                    if(response && response.data > 0) {
                        this.is_exist_phone = true;
                        setTimeout(function () {
                            $("#login_password").removeAttr("readonly");
                        },100);
                    } else {
                        this.is_valid_phone_not_exist = false;
                    }
                })
            },
            sendEmail: function() {
                if(!this.email || !this.email_reg.test(this.email)) {
                    return;
                }
                axios.post(url + "/api/send-email-change-password/",{
                    email: this.email
                }).then(response => {
                        console.log(response.data);
                        if(response) {

                        } else {

                        }
                    })
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
                    this.is_invalid_password = false;
                    is_invalid_form = false;
                } else if (this.password.length < 6) {
                    this.is_invalid_password_length = false;
                    is_invalid_form = false;
                }
                return is_invalid_form;
            },
            checkForm: function () {
                let is_invalid_form = true;
                if (this.name && this.phone && this.address && this.city && this.district && this.village && this.address) {
                    this.submit = true;
                    this.register();
                    is_invalid_form = true;
                }
                if (!this.username) {
                    this.is_valid_username = false;
                    is_invalid_form = false;
                }
                if (!this.password) {
                    this.is_invalid_password = false;
                    is_invalid_form = false;
                } else if (!this.password.length < 6) {
                    this.is_invalid_password_length = false;
                    is_invalid_form = false;
                }
                if (!this.password2) {
                    this.is_valid_password2 = false;
                    is_invalid_form = false;
                } else if (this.password2 !== this.password) {
                    this.is_valid_diff_password = false;
                    is_invalid_form = false;
                }
                if (!this.fullname) {
                    this.is_valid_name = false;
                    is_invalid_form = false;
                }
                if (!this.phone) {
                    this.is_valid_phone = false;
                    is_invalid_form = false;
                } else if (!this.phone_reg.test(this.phone)) {
                    this.is_valid_phone_format = false;
                    is_invalid_form = false;
                }
                if (!this.email) {
                    this.is_valid_email = false;
                    is_invalid_form = false;
                } else if(!this.email_reg.test(this.email)) {
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
            // showAlert() {
            //     this.$swal({
            //         title: '<strong>HTML <u>example</u></strong>',
            //         icon: 'info',
            //         html:
            //             'You can use <b>bold text</b>, ' +
            //             '<a href="//sweetalert2.github.io">links</a> ' +
            //             'and other HTML tags',
            //         showCloseButton: true,
            //         showCancelButton: true,
            //         focusConfirm: false,
            //         confirmButtonText:
            //             '<i class="fa fa-thumbs-up"></i> Great!',
            //         confirmButtonAriaLabel: 'Thumbs up, great!',
            //         cancelButtonText:
            //             '<i class="fa fa-thumbs-down"></i>',
            //         cancelButtonAriaLabel: 'Thumbs down',
            //         showClass: {
            //             popup: 'swal2-show',
            //             backdrop: 'swal2-backdrop-show',
            //             icon: 'swal2-icon-show'
            //         },
            //         hideClass: {
            //             popup: 'swal2-hide',
            //             backdrop: 'swal2-backdrop-hide',
            //             icon: 'swal2-icon-hide'
            //         },
            //         allowOutsideClick: false,
            //         allowEscapeKey: false
            //     });
            // },
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
                this.isChangePassword = true;
                this.is_valid_email = true;
                this.is_valid_email_format = true;
                this.email = '';
                setTimeout(function () {
                    $("#email_change_pwd").removeAttr("readonly");
                },100);
            },
            resetRegisterForm: function() {
                this.isRegister = true;
                this.isChangePassword = false;
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
                this.is_valid_password2_length = true;
                this.is_valid_name = true;
                this.is_valid_email = true;
                this.is_valid_email_format = true;
                this.is_valid_city = true;
                this.is_valid_district = true;
                this.is_valid_village = true;
                this.is_valid_address = true;
                this.is_valid_gender = true;
                this.is_valid_birthday = true;
                setTimeout(function () {
                    $("#reg_password").removeAttr("readonly");
                    $("#reg_password2").removeAttr("readonly");
                    $("#reg_fullname").removeAttr("readonly");
                    $("#reg_email").removeAttr("readonly");
                    $("#reg_address").removeAttr("readonly");
                    $("input[type=radio]").removeAttr("readonly");
                    $("#reg_birthday").removeAttr("readonly");
                },500);
            },
            resetLoginForm: function () {
                this.isRegister = false;
                this.phone = '';
                this.is_valid_phone = true;
                this.is_exist_phone = false;
                this.password = '';
                this.isChangePassword = false;
                this.is_valid_phone_format = true;
                this.is_valid_phone_not_exist = true;
                setTimeout(function () {
                    $("#login_phone").removeAttr("readonly");
                },100);
            }
        },
        mounted() {

        },
    };
</script>