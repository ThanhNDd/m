<template>
  <!-- ============================================================= FOOTER ============================================================= -->
  <footer id="footer" class="footer color-bg">
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="address-block">
              <div class="module-body">
                <div class="logo col-md-12 no-padding">
                  <div class="image col-md-3 no-padding">
                    <a v-bind:href="url">
                      <img v-bind:src="url + '/public/web/images/icon.png'" alt="logo" style="width: 80px;">
                    </a>
                  </div>
                  <div class="title col-md-9 no-padding">
                    <a v-bind:href="url">
                      <a v-bind:href="url" class="logo-text">Shop Mẹ Ỉn</a>
                      <a v-bind:href="url" class="text">Thời Trang Trẻ Em</a>
                    </a>
                  </div>
                </div>
                <ul class="toggle-footer" style="">
                  <li class="media">
                    <div class="pull-left mr-2"> <span class="icon fa-stack fa-lg"> <i class="fa fa-map-marker fa-stack-1x fa-inverse"></i> </span> </div>
                    <div class="media-body">
                      <a href="javascript:void(0)">Số 227, Đ.Phố Huyện, TT.Quốc Oai, Hà Nội</a>
                    </div>
                  </li>
                  <li class="media">
                    <div class="pull-left mr-2"> <span class="icon fa-stack fa-lg"> <i class="fa fa-mobile fa-stack-1x fa-inverse"></i> </span> </div>
                    <div class="media-body">
                      <a href="javascript:void(0)">Hotline/Zalo: 0962.926.302</a>
                    </div>
                  </li>
                  <li class="media">
                    <div class="pull-left mr-2"> <span class="icon fa-stack fa-lg"> <i class="fa fa-envelope fa-stack-1x fa-inverse"></i> </span> </div>
                    <div class="media-body"><a href="javascript:void(0)">shopmein@gmail.com</a></div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- /.module-body -->
          </div>
          <!-- /.col -->

          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="module-heading">
              <h4 class="module-title">Hỗ trợ</h4>
            </div>
            <div class="module-body">
              <ul class='list-unstyled'>
                <li class="first">
                  <a v-bind:href="url + '/chinh-sach-van-chuyen.html'" title="Chính sách vận chuyển và giao nhận hàng">
                    <i class="fas fa-angle-double-right"></i>&nbsp;Chính sách vận chuyển và giao nhận hàng
                  </a>
                </li>
                <li>
                  <a v-bind:href="url + '/chinh-sach-doi-hang.html'" title="Chính sách đổi hàng, trả, hoàn tiền">
                    <i class="fas fa-angle-double-right"></i>&nbsp;Chính sách đổi hàng, trả, hoàn tiền
                  </a>
                </li>
                <li>
                  <a href="#" title="Câu hỏi thường gặp">
                    <i class="fas fa-angle-double-right"></i>&nbsp;Câu hỏi thường gặp
                  </a>
                </li>
                <li>
                  <a href="#" title="Hướng dẫn chọn size">
                    <i class="fas fa-angle-double-right"></i>&nbsp;Hướng dẫn chọn size
                  </a>
                </li>
                <li>
                  <a href="#" title="Liên hệ">
                    <i class="fas fa-angle-double-right"></i>&nbsp;Liên hệ
                  </a>
                </li>
                <li>
                  <a href="https://blog.shopmein.vn" title="Blog">
                    <i class="fas fa-angle-double-right"></i>&nbsp;Blog
                  </a>
                </li>
              </ul>
            </div>
            <!-- /.module-body -->
          </div>
          <!-- /.col -->

          <div class="col-xs-12 col-sm-6 col-md-3">
<!--            <lazy-component>-->
              <facebook-component></facebook-component>
<!--            </lazy-component>-->
          </div>
          <!-- /.col -->

          <div class="col-xs-12 col-sm-6 col-md-3 connect-social">
            <div class="module-heading">
              <h4 class="module-title" style="margin-left: 30px;">Kết nối</h4>
            </div>
            <div class="module-body">
<!--              <p style="color:#fff;margin-left: 30px;">-->
<!--                Shop Mẹ Ỉn - Chuyên cung cấp hàng thời trang quần áo, giày dép cho trẻ em. Cam kết hàng chất lượng, mẫu mã đa dạng. Giao hàng toàn quốc, thanh toán khi nhận hàng, đổi trả hàng nếu không vừa ý.-->
<!--              </p>-->
              <ul class="link">
                <li class="pull-left">
                  <a target="_blank" rel="nofollow" href="https://www.facebook.com/shopmein.vn" title="Facebook">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li class="pull-left">
                  <a target="_blank" rel="nofollow" href="https://m.me/shopmein.vn" title="Messenger">
                    <i class="fab fa-facebook-messenger"></i>
                  </a>
                </li>
                <li class="pull-left">
                  <a target="_blank" rel="nofollow" href="https://www.instagram.com/shopmein.vn" title="Instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="pull-left">
                  <a target="_blank" rel="nofollow" href="https://www.youtube.com/channel/UCUopGcFzb-pMlSIBKSIezRQ" title="Youtube">
                    <i class="fab fa-youtube-square"></i>
                  </a>
                </li>

              </ul>
            </div>
            <!-- /.module-body -->
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-bar">
      <div class="container">
        <div class="col-md-12 center no-padding copyright">
          Copyright &copy; <a target="_blank" v-bind:href="url">Shop Mẹ Ỉn</a>
        </div>
      </div>
      <ul class="keyword-search">
        <li><a v-bind:href="url" title="quần áo trẻ em">Quần áo trẻ em</a></li>
        <li><a v-bind:href="url" title="đầm bé gái">Váy bé gái</a></li>
        <li><a v-bind:href="url" title="vest bé trai">Vest bé trai</a></li>
        <li><a v-bind:href="url" title="quần áo bé gái">quần áo bé gái</a></li>
        <li><a v-bind:href="url" title="quần áo sành điệu cho bé gái">quần áo sành điệu cho bé gái</a></li>
        <li><a v-bind:href="url" title="quần áo bé trai">quần áo bé trai</a></li>
        <li><a v-bind:href="url" title="quần áo bé trai sành điệu">quần áo bé trai sành điệu</a></li>
      </ul>
    </div>
  </footer>
</template>
<script>
  import facebookComponent from "./facebookComponent";
  export default {
      data() {
          return {
              url: ''
          }
      },
      created() {
          this.url = url
      },
      components: {
          facebookComponent: () => import('./facebookComponent')
      },
      methods: {

      },
      mounted() {
      }
  }
</script>
