(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });


    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Pagination
    $(function () {
        const rowsPerPage = 10
        const rows = $(".dataframe tbody tr")
        const rowsCount = rows.length
        const pageCount = Math.ceil(rowsCount / rowsPerPage)
        const numbers = $('#numbers')

        for (let i = 0; i < pageCount; i++) {
            numbers.append('<li><a href="#">' + (i + 1) + '</a></li>')
        }

        $('#numbers li:first-child a').addClass('active')
        displayRows(1)
        $('#numbers li a').click(function (e) {
            let $this = $(this)
            e.preventDefault()
            $('#numbers li a').removeClass('active')
            $this.addClass('active')
            displayRows($this.text())
        })

        function displayRows(index) {
            let start = (index - 1) * rowsPerPage
            let end = start + rowsPerPage
            rows.hide()
            rows.slice(start, end).show()
        }
    });

})(jQuery);