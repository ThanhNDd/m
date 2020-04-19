<div class="navbar navbar-home">
    <div class="navbar-inner">
        <div class="left">
            <a href="#" class="panel-open">
                <i class="fas fa-align-left"></i>
            </a>
        </div>
        <div class="title">
            <form class="searchbar searchbar-init" data-search-container=".search-list" data-search-in=".item-title">
                <div class="searchbar-inner">
                    <div class="searchbar-input-wrap">
                        <input type="search" placeholder="Bạn muốn tìm gì?">
                        <i class="searchbar-icon"></i>
                        <span class="input-clear-button"></span>
                    </div>
                    <span class="searchbar-disable-button">Cancel</span>
                </div>
            </form>
        </div>
        <div class="right">
            @if (isset($isDetail) && $isDetail)
                <a href="{{ url('/gio-hang.html') }}">
                    <i class="fas fa-shopping-cart"></i>
                    <div class="cart_detail">
                        <cart-number-component/>
                    </div>
                </a>
            @else
                <a href="{{ url('/thong-bao.html') }}">
                    <i class="fas fa-bell"></i>
                </a>
            @endif
        </div>
    </div>
</div>
