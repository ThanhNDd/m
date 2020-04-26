<div class="breadcrumb">
  <div class="container">
    <div class="breadcrumb-inner">
      <ul class="list-inline list-unstyled">
        <li><a href="{{url('')}}">Trang chủ</a></li>
        <li><a href="{{ $cat_uri ?? '#' }}">{{ $cat_title ?? '' }}</a></li>
        <li><a href="#">{{ $prod_title ?? '' }}</a></li>
      </ul>
    </div><!-- /.breadcrumb-inner -->
  </div><!-- /.container -->
</div><!-- /.breadcrumb -->
