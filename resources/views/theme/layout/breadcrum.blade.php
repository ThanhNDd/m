<div class="subnavbar">
    <div class="subnavbar-inner">
        <div class="breadcrums">
          <a href="{{url('')}}">Trang chủ</a> &raquo;
          <a href="{{url('/danh-muc.html')}}">Danh mục</a> &raquo;
          <a href="{{ $cat_uri ?? '#' }}">{{ $cat_title ?? '' }}</a> &raquo;
          <a href="#">{{ $prod_title ?? '' }}</a>
        </div>
    </div>
</div>
