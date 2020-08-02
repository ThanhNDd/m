<template>
    <div id="myPageContent" class="d-inline-block float-right no-padding col-md-12">
        <section id="home" class="d-inline-block float-right col-md-12">
            <div id="textSlider" class="row float-right">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 slideCol float-right no-padding">
                    <div class="scroller float-right">
                        <div class="inner_">
                            <p>Miễn phí vận chuyển khu vực Hà Nội với đơn từ 250k</p>
                            <p>Miễn phí vận chuyển Toàn Quốc với đơn từ 500k</p>
                            <p>Kiểm tra hàng trước khi thanh toán</p>
                            <p>Đổi trả nhanh chóng dễ dàng trong vòng 7 ngày</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {
            this.url = url;
        },
    }
</script>
<style scoped>
    /* Slider */
    #textSlider.row {
        /*position: absolute;*/
        /*top: 0%;*/
        /*left: 1%;*/
        /*transform: translate(-50%, -50%);*/
        width: 100% !important;
    }

    #textSlider div {
        color: #FFF;
    }

    .iamCol p:nth-child(2) {
        margin-top: -20pt !important;
    }

    .slideCol {
        text-align: right;
        /*overflow: hidden;*/
        display: block;
        /*white-space: nowrap;*/
    }

    .slideCol p {
        margin: 0 !important;
    }

    .scroller {
        height: 27px;
        line-height: 27px;
        overflow: hidden;
    }

    .scroller .inner_ {
        animation: 10s normal infinite running scroll;
    }

    @keyframes scroll {
        0% {
            margin-top: 0px;
        }
        15% {
            margin-top: 0px;
        }

        25% {
            margin-top: -27px;
        }
        40% {
            margin-top: -27px;
        }

        50% {
            margin-top: -54px;
        }
        65% {
            margin-top: -54px;
        }

        75% {
            margin-top: -81px;
        }
        90% {
            margin-top: -81px;
        }

        100% {
            margin-top: 0px;
        }
    }


    /*==========  Mobile First Method  ==========*/

    /* Custom, iPhone Retina */
    @media only screen and (min-width: 320px) and (max-width: 479px) {
        #textSlider.row {
            margin-right: 0px !important;
            margin-left: 0px !important;
        }

        .iamCol p {
            display: inline !important;
        }

        .slideCol {
            /*font-size: 25pt;*/
            text-align: center;
            margin-top: -20px;
        }
    }

    /* Extra Small Devices, Phones */
    @media only screen and (min-width: 480px) and (max-width: 765px) {
        #textSlider.row {
            margin-right: 0px !important;
            margin-left: 0px !important;
        }

        .iamCol p {
            display: inline !important;
        }

        .slideCol {
            /*font-size: 38pt;*/
            text-align: center;
            margin-top: -20px;
        }
    }

    /* Small Devices, Tablets */
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        #textSlider.row {
            margin-right: 0px !important;
            margin-left: 0px !important;
        }

        .iamCol p {
            display: inline !important;
        }

        .slideCol {
            /*font-size: 50pt;*/
            text-align: center;
            margin-top: 5px;
        }
    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        #textSlider.row {
            margin-right: 0px !important;
            margin-left: 0px !important;
        }

        .slideCol {
            /*font-size: 55pt;*/
            text-align: left;
        }
    }
</style>