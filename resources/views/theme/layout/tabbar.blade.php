<div class="toolbar tabbar tabbar-labels toolbar-bottom">
    <div class="toolbar-inner">
        <a href="{{ url('/') }}" class="tab-link {{ isset($is_active) && $is_active == 'home' ? 'tab-link-active' : '' }}">
            <i class="fas fa-home"></i>
            <span class="tabbar-label">Home</span>
        </a>
        <a href="{{ url('/categories') }}" class="tab-link {{ isset($is_active) && $is_active == 'categories' ? 'tab-link-active' : ''}}">
            <i class="fas fa-list-alt"></i>
            <span class="tabbar-label">Danh mục</span>
        </a>
        <a href="{{ url('/sales') }}" class="tab-link {{ isset($is_active) && $is_active == 'sales' ? 'tab-link-active' : '' }}">
            <i class="fas fa-gift"></i>
            <span class="tabbar-label">Khuyến mãi</span>
        </a>
        <a href="{{ url('/cart') }}" class="tab-link {{ isset($is_active) && $is_active == 'cart' ? 'tab-link-active' : ''}}" style="position: relative;">
            <i class="fas fa-shopping-cart"></i>
            <span class="tabbar-label">Giỏ hàng</span>
{{--            <span style="position: absolute;right: 10px;top: 3px;border-radius: 10px;height: 19px;">--}}
                <cart-number-component/>
{{--            </span>--}}
        </a>
        <a href="{{ url('/info') }}" class="tab-link {{ isset($is_active) && $is_active == 'info' ? 'tab-link-active' : '' }}">
            <i class="fas fa-info-circle"></i>
            <span class="tabbar-label">Giới thiệu</span>
        </a>
    </div>
</div>
