$(function () {
    $('#brand-list').slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slideMargin: 15,
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    $('#feedback-content').slick({
        arrows: false,
        slidesToShow: 1,
        dots: true,
        infinite: true,
        asNavFor: '#feedback-list-img',
    });

    $('#feedback-list-img').slick({
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        asNavFor: '#feedback-content',
    });

    $('#banner-list').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        slidesToShow: 1,
        loop: true
    });

    $('.menu-toggle').on("click", function () {
        $('.menu').toggleClass("--active");
        $('.icon-toggle').toggleClass("--active")
    })

    $('#gridCheck').on("click", function () {
        $('.form-sign-up').toggleClass("--active");
    })

    $('.button-search').on("click", function () {
        $('.menu-search form').toggleClass("--active");
    })

    $('.menu-top-name').on("click", function () {
        $('.menu-top-submenu').toggleClass('--active');
        $('.menu-top-content--submenu').toggleClass('--active');
    })

    $('.button--subcribe-ejection').on("click", function (e) {
        e.preventDefault();
        Swal.fire({
            title: "<h3 class='color-blue font-weight-bold'>Thông báo</h3>",
            html: "<p>Bạn đã đặt lịch thành công <br> Thông tin được gửi vào <b>email</b>, vui lòng kiểm tra.</p>",
            imageUrl: './assets/img/icon_check_popup.png',
            confirmButtonText: 'Xác nhận',
            customClass: {
                confirmButton: 'button button--subcribe',
            }
        })
    })
});
