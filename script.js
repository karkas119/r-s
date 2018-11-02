$(function () {
    var links = $('.first_page_logo');
    var menu = $('.menu_main');
    var second = $('.second_page');

//скрипт для меню бургер
    links.on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
        e.stopPropagation();
        links.toggleClass('first_page_logo_close a');

    });
    menu.on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
        links.toggleClass('first_page_logo_close a');
    });
    $(document).click(function (e) {
        if (e.target !== menu[0] && !menu.has(e.target).length) {
            menu.hide();
            e.stopPropagation();
            links.removeClass('first_page_logo_close a');
        }
    });
    //анимация второй страницы
    $(window).scroll(function (e) {
        if ($(window).scrollTop() > 500) {
            second.addClass('second_page_show');
            $('.second_page_text').delay(1000).queue(function () {
                $('.second_page_text').addClass('second_page_text_show');
            });
            e.stopPropagation();
        }
    });

    //анимация третьей страницы
    $(window).scroll(function (e) {
       if ($(window).scrollTop() > 1100) {
           $('.third_page').addClass('third_page_show');
           e.stopPropagation();
       }
    });



    //делаем эффект печати
    var a = new String;
    a = $('.first_page_name').text();
    $('.first_page_name').text('');
    var c=a.length;
    j=0;
    setInterval(function(){
        if(j<c){
            $('.first_page_name').text($('.first_page_name').text()+a[j]);
            j=j+1;
        }
        else {$('.first_page_name').removeClass('after')}
    },100);



    //плавные переходы по страницам
    $('a[href*="#"]').on('click.smoothscroll', function (e) {
        var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');
        if (theHref && location.href.replace(/#.*/, '') != theHref) return;
        var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
        if (!$target.length) return;
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: $target.offset().top - 0}, 1300, 'swing', function () {
            window.location.hash = hash;
        });
    });
});