<div class="toolbar tabbar tabbar-labels toolbar-bottom">
    <div class="toolbar-inner">
        <a href="{{ url('/trang-chu.html') }}" class="tab-link {{ isset($is_active) && $is_active == 'home' ? 'tab-link-active' : '' }}">
            <i class="fas fa-home"></i>
            <span class="tabbar-label">Home</span>
        </a>
        <a href="{{ url('/danh-muc.html') }}" class="tab-link {{ isset($is_active) && $is_active == 'categories' ? 'tab-link-active' : ''}}">
            <i class="fas fa-list-alt"></i>
            <span class="tabbar-label">Danh mục</span>
        </a>
        <a href="{{ url('/khuyen-mai.html') }}" class="tab-link {{ isset($is_active) && $is_active == 'sales' ? 'tab-link-active' : '' }}">
            <i class="fas fa-gift"></i>
            <span class="tabbar-label">Khuyến mãi</span>
        </a>
        <a href="{{ url('/gio-hang.html') }}" class="tab-link {{ isset($is_active) && $is_active == 'cart' ? 'tab-link-active' : ''}}" style="position: relative;">
            <i class="fas fa-shopping-cart"></i>
            <span class="tabbar-label">Giỏ hàng</span>
                <cart-number-component/>
        </a>
        <a href="{{ url('/gioi-thieu.html') }}" class="tab-link {{ isset($is_active) && $is_active == 'info' ? 'tab-link-active' : '' }}">
            <i class="fas fa-info-circle"></i>
            <span class="tabbar-label">Giới thiệu</span>
        </a>
    </div>
</div>
