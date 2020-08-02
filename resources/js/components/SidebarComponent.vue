<template>
    <div>
        <div class="panel-backdrop"></div>
        <div class="panel panel-left panel-cover sidebar" id="sidebar">
            <div class="user-view">
                <img v-bind:src="url + '/public/mobile/images/icon.png'" alt="">
                <div class="title-name">
                    <h2 style="font-size: 24px;line-height: 1.5;margin: 0;font-family: Pony;color: white;">Shop Mẹ Ỉn</h2>
                    <p class="center" style="color: white;">Thời trang trẻ em</p>
                </div>
            </div>
            <div class="list media-list">
                <ul>
                    <li>
                        <a v-bind:href="url" class="item-link panel-close item-content">
                            <div class="item-media">
    <!--                            <i class="fas fa-home"></i>-->
                                <i class="fas fa-arrow-alt-circle-right"></i>
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">Trang chủ</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a v-bind:href="url +'/danh-muc/be-gai.html'" class="item-link panel-close item-content">
                            <div class="item-media">
    <!--                            <i class="fas fa-tshirt"></i>-->
                                <i class="fas fa-arrow-alt-circle-right"></i>
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">Thời trang bé gái</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a v-bind:href="url +'/danh-muc/be-trai.html'" class="item-link panel-close item-content">
                            <div class="item-media">
    <!--                            <i class="fas fa-tshirt"></i>-->
                                <i class="fas fa-arrow-alt-circle-right"></i>
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">Thời trang bé trai</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a v-bind:href="url +'/danh-muc/giay-dep.html'" class="item-link panel-close item-content">
                            <div class="item-media">
    <!--                            <i class="fas fa-credit-card"></i>-->
                                <i class="fas fa-arrow-alt-circle-right"></i>
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">Giày dép</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a v-bind:href="url +'/danh-muc/phu-kien.html'" class="item-link panel-close item-content">
                            <div class="item-media">
    <!--                            <i class="fas fa-hat-cowboy"></i>-->
                                <i class="fas fa-arrow-alt-circle-right"></i>
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">Phụ kiện</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a v-bind:href="url +'/khuyen-mai.html'" class="item-link panel-close item-content">
                            <div class="item-media">
    <!--                            <i class="fas fa-question"></i>-->
                                <i class="fas fa-arrow-alt-circle-right"></i>
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">Khuyến mãi</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a v-bind:href="url +'/chinh-sach-van-chuyen.html'" class="item-link panel-close item-content">
                            <div class="item-media">
    <!--                            <i class="fas fa-question"></i>-->
                                <i class="fas fa-arrow-alt-circle-right"></i>
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">Chính sách vận chuyển</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a v-bind:href="url +'/chinh-sach-doi-hang.html'" class="item-link panel-close item-content">
                            <div class="item-media">
    <!--                            <i class="fas fa-question"></i>-->
                                <i class="fas fa-arrow-alt-circle-right"></i>
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">Chính sách đổi hàng, trả, hoàn tiền</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://blog.shopmein.vn" class="item-link panel-close item-content">
                            <div class="item-media">
    <!--                            <i class="fas fa-question"></i>-->
                                <i class="fas fa-arrow-alt-circle-right"></i>
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">Blog</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
    <!--                    <a href="{{url('/login/')}}" class="item-link panel-close item-content">-->
    <!--                        <div class="item-media">-->
    <!--                            <i class="fas fa-sign-out-alt"></i>-->
    <!--                        </div>-->
    <!--                        <div class="item-inner">-->
    <!--                            <div class="item-title">Đăng nhập</div>-->
    <!--                        </div>-->
    <!--                    </a>-->
    <!--                    <div v-if="!isLogged">-->
                            <login-component></login-component>
    <!--                    </div>-->
    <!--                    <div v-else>-->

    <!--                    </div>-->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                url: '',
                // isLogged: false
            }
        },
        created() {
            this.url = url;
            // this.checkLogged();
        },
        methods: {
            // checkLogged: function() {
            //     axios.post(url + '/api/check-logged')
            //         .then(response => {
            //             if(response.data !== 'not_exist_user') {
            //                 this.isLogged = true;
            //                 this.customer_name = response.data.name;
            //                 this.customer_id = response.data.id;
            //             } else {
            //                 this.isLogged = false;
            //             }
            //         }).catch(e =>{
            //         this.isLogged = false;
            //     });
            // },
        }
    }
</script>
<style scoped>
    .list.media-list li div div.show {
        display: inline-block;
        padding-left: 12px;
    }
    .list.media-list li div .show i {
        color: var(--main-color);
    }
    .list.media-list li div .show a {
        font-size: 14px;
        font-weight: 500;
    }
</style>
