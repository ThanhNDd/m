new Swiper('.swiper-flash-sale',{
    cssMode: true,
    mousewheel: true,
    keyboard: true,
});
new Swiper('.swiper1', {
    cssMode: true,
    mousewheel: true,
    keyboard: true,
    pagination: {
        el: '.swiper-pagination1',
        dynamicBullets: true,
        paginationClickable: true
    },
    autoplay: {
        delay: 5000,
    },
});
new Swiper('.swiper-category', {
    cssMode: true,
    mousewheel: true,
    keyboard: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        paginationClickable: true
    },
    autoplay: {
        delay: 5000,
    },
});

$(document).ready(function () {
    $('a[href="#tab-home"]').click(function(){
        set_active_tab('tab-home');
    });
    $('a[href="#tab-category"]').click(function(){
        set_active_tab('tab-category');
    });
    $('a[href="#tab-sale"]').click(function(){
        set_active_tab('tab-sale');
    });
    $('a[href="#tab-cart"]').click(function(){
        set_active_tab('tab-cart');
    });
    $('a[href="#tab-info"]').click(function(){
        set_active_tab('tab-info');
    });

    $(".panel-open").click(function () {
        $("#sidebar").addClass("panel-in");
        $("html").addClass("with-panel");
        $("html").addClass("with-panel-left-cover");
        $(".panel-backdrop").click(function() {
            $("#sidebar").removeClass("panel-in");
            $("html").removeClass("with-panel");
            $("html").removeClass("with-panel-left-cover");
        });
    });
    $(".detail").click(function () {
        $(".detail-sheet").addClass("modal-in");
        $("html").addClass("with-modal-sheet");
        $(".sheet-close").click(function() {
            $(".detail-sheet").removeClass("modal-in");
            $("html").removeClass("with-modal-sheet");
        });
    });



    // $('.color-choose input').on('click', function() {
    //     var headphonesColor = $(this).attr('data-image');
    //
    //     $('.active').removeClass('active');
    //     $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
    //     $(this).addClass('active');
    // });
});

function set_active_tab(id) {
    let idactive = $('.page').find('.tab-active').attr('id');
    $("[id="+idactive+"]").removeClass('tab-active');
    $('.page').find('[id='+id+']').addClass('tab-active');
    $('a[href="#'+idactive+'"]').removeClass('tab-link-active');
    $('a[href="#'+id+'"]').addClass('tab-link-active');
}
