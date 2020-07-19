<template>
    <div>
        <a href="javascript:void(0);" data-toggle="modal" data-target="#loginForm" data-backdrop="static">
            <i class="fas fa-sign-in-alt"></i>&nbsp;Đăng nhập
        </a>
    <!--    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">-->
    <!--        Launch demo modal-->
    <!--    </button>-->
        <!-- Modal -->
        <div class="modal fade" id="loginForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" v-if="!isRegister">Đăng nhập</h5>
                        <h5 class="modal-title" v-if="isRegister">Đăng ký</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body col-md-12">
                        <div></div>
                        <div class="" v-if="!isRegister">
                            <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                                <div class="container" style="padding: 0px;width: 100%;">
                                    <form style="padding-top: 10px;">
                                        <div class="form-group">
                                            <label for="username">Tên đăng nhập / Email</label>
                                            <input type="text" class="form-control" placeholder="Tên đăng nhập" id="username" v-model="username" ref="username">
                                        </div>
                                        <div class="form-group">
                                            <label for="password">Mật khẩu</label>
                                            <input type="password" class="form-control" placeholder="Mật khẩu" id="password" v-model="password" ref="password">
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group col-md-6 float-left text-left">
                                                Bạn chưa có tài khoản?
                                                    <a href="javascript:void(0)" @click="isRegister = true" style="color: #0f6cb2 !important">Đăng ký ngay</a>
                                            </div>
                                            <div class="form-group col-md-6 float-right text-right">
                                                <button type="button" class="btn btn-info btn-flat" v-on:click="login()">
                                                    <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="hidden"></i>&nbsp;Đăng nhập
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="" v-if="isRegister">
                            <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                                <div class="container" style="padding: 0px;width: 100%;">
                                    <form style="padding-top: 10px;">
                                        <div class="col-md-6 float-left">
                                            <div class="form-group">
                                                <label for="reg_username">Tên đăng nhập</label>
                                                <input type="text" class="form-control" placeholder="Tên đăng nhập" id="reg_username" v-model="username" ref="username">
                                            </div>
                                            <div :class="['form-group', isPasswordValid()]">
                                                <label for="reg_password">Mật khẩu</label>
                                                <input type="password" class="form-control" placeholder="Email" id="reg_password" v-model="password" ref="password">
                                            </div>
                                            <div :class="['form-group', isPasswordValid()]">
                                                <label for="reg_password2">Nhập lại mật khẩu</label>
                                                <input type="password" class="form-control" placeholder="Email" id="reg_password2" v-model="password2" ref="password2">
                                            </div>
                                            <div class="form-group">
                                                <label for="reg_fullname">Họ Tên</label>
                                                <input type="text" class="form-control" placeholder="Họ tên" id="reg_fullname" v-model="fullname" ref="fullname">
                                            </div>
                                            <div :class="['form-group', isPhoneValid()]">
                                                <label for="reg_fullname">Số điện thoại</label>
                                                <input type="text" class="form-control" placeholder="Số điện thoại" id="reg_phone" v-model="phone" ref="phone">
                                            </div>
                                        </div>
                                        <div class="col-md-6  float-left">
                                            <div class="form-group">
                                                <label for="city">Tỉnh / Thành phố</label>
                                                <v-select :options="city" :reduce="city => city.id" @input="changeCity" v-model="city_id"
                                                          placeholder="Thành phố" label="text" ref="city" id="city" class="form-group"></v-select>
                                            </div>
                                            <div class="form-group">
                                                <label for="district">Quận / Huyện</label>
                                                <v-select :options="district" :reduce="district => district.id" @input="changeDistrict"
                                                          v-model="district_id" placeholder="Quận huyện" label="text" ref="district"
                                                          id="district" class="form-group"></v-select>
                                            </div>
                                            <div class="form-group">
                                                <label for="village">Phường / Xã</label>
                                                <v-select :options="village" :reduce="village => village.id" @input="changeVillage"
                                                          v-model="village_id" placeholder="Phường xã" label="text" ref="village"
                                                          id="village" class="form-group">
                                                </v-select>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-check-inline">Giới tính</label>
                                                <div class="form-control">
                                                    <div class="form-check-inline">
                                                        <label class="form-check-label">
                                                            <input type="radio" class="form-check-input" name="gender" v-model="male"> Nam
                                                        </label>
                                                    </div>
                                                    <div class="form-check-inline">
                                                        <label class="form-check-label">
                                                            <input type="radio" class="form-check-input" name="gender" v-model="female"> Nữ
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="reg_birthday">Ngày sinh</label>
                                                <date-picker v-model="birthday" id="reg_birthday" :config="options" placeholder="dd/mm/yyyy"></date-picker>
                                            </div>
                                            <div :class="['form-group', isEmailValid()]">
                                                <label for="reg_fullname">Email</label>
                                                <input type="email" class="form-control" placeholder="Email" id="reg_email" v-model="email" ref="email">
                                            </div>
                                        </div>
                                        <div class="form-group col-md-12 float-left">
                                            <div class="col-md-6 float-left text-left mt-3 no-padding">
                                                <p>Bạn đã có tài khoản? <a href="javascript:void(0)" @click="isRegister = false" style="color: #0f6cb2 !important">Đăng nhập ngay</a></p>
                                            </div>
                                            <div class="col-md-6 float-right text-right">
                                                <button type="button" class="btn btn-primary btn-flat" v-on:click="register()">
                                                    <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="hidden"></i>&nbsp;Đăng ký
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
<!--                    <div class="modal-footer">-->
<!--                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
<!--                        <button type="button" class="btn btn-primary">Save changes</button>-->
<!--                    </div>-->
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

    export default {
        data() {
            return {
                username: '',
                password:'',
                password2:'',
                fullname: '',
                phone: '',
                male: '',
                female: '',
                email: '',
                email_reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                phone_reg : /^((09|03|07|08|05)+([0-9]{8})\b)$/,
                isFinished: false,
                hidden: false,
                hasLogin: false,
                isRegister: false,
                birthday: '',
                options: {
                    format: 'DD/MM/YYYY',
                    useCurrent: false,
                    locale: url + '/resources/views/web/assets/js/libs/vi.js'
                },
                city: [],
                city_id: '',
                district: [],
                district_id: '',
                village: [],
                village_id: '',
            }
        },
        components: {
            datePicker
        },
        created() {
            this.loadCity();
        },
        filters: {
        },
        methods: {
            login: function() {

            },
            register: function() {

            },
            loadCity: function() {
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
          showAlert() {
            this.$swal({
                title: '<strong>HTML <u>example</u></strong>',
                icon: 'info',
                html:
                    'You can use <b>bold text</b>, ' +
                    '<a href="//sweetalert2.github.io">links</a> ' +
                    'and other HTML tags',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                    '<i class="fa fa-thumbs-down"></i>',
                cancelButtonAriaLabel: 'Thumbs down',
                showClass: {
                    popup: 'swal2-show',
                    backdrop: 'swal2-backdrop-show',
                    icon: 'swal2-icon-show'
                },
                hideClass: {
                    popup: 'swal2-hide',
                    backdrop: 'swal2-backdrop-hide',
                    icon: 'swal2-icon-hide'
                },
                allowOutsideClick: false,
                allowEscapeKey: false
            });
          },

            isPhoneValid: function() {
                return (this.phone === "")? "" : (this.phone_reg.test(this.phone)) ? 'has-success' : 'has-error';
            },
            isEmailValid: function() {
                return (this.email === "")? "" : (this.email_reg.test(this.email)) ? 'has-success' : 'has-error';
            },
            isPasswordValid: function() {
                return this.password.length >= 6 ? 'has-success' : 'has-error';
            }
        },
    };
</script>
