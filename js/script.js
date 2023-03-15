$(function(){
    /////////    NavBar
    $(`.header .links li a`).click(function(e){
        ///// Scroll To Element
        e.preventDefault();
        $(`html , body`).animate({
            scrollTop: $(`#` + $(this).data(`scroll`)).offset().top +1
        })
        /////// Add Active Class To Element and Remove from Others
        $(`.header .links li a`).removeClass(`active`)
        $(this).addClass(`active`)
    });
    ////////// Slider
    $(`.header .slider`).click(function(eve){
        eve.preventDefault();
        $(`.header .slider ul`).css("display","block").delay(3000).fadeOut(2000)
        $(this).css("color","#00a862")
    });

    /////////////// Home Content
    $(`.home-paragraph`).show(1500);
    $(`.home-btn`).fadeIn(2000);




    /////// Menu Popup
    $(`.menu-btn`).click(function(){
        $(`.popup`).fadeIn().delay(1000).fadeOut();
    });
    
    /////// Show Menu Popup
        // $(`.menu-btn`).click(function(){
        //     $(`.popup`).fadeIn().delay(1000).fadeOut();
        // });
    /////// Hide Menu Popup
        // $(`.popup`).click(function(){
        //     $(this).fadeOut();
        // });
        // $(`.popup .inner`).click(function(e){
        //     e.stopPropagation();
        // });

    /////////////// Scroll Function
    $(window).scroll(function(){
        if($(window).scrollTop() > 20){
            $(`header`).css({"backgroundColor":"white" , "color":"black"})
            $(`.header .links li a`).css("color","#222")
        }else{
            $(`header`).css("backgroundColor","#222222cc")
            $(`.header .links li a`).css("color","#fff")
        }

         /////////////Sync Navbar With Section
        $(`.block`).each(function(){
            if($(window).scrollTop() > $(this).offset().top){
                var blockID = $(this).attr(`id`);
                $(`.header li a`).removeClass(`active`)
                $(`.header li a[data-scroll = "`+ blockID +`"]`).addClass(`active`);
            }
        });

        ///////////// Specials
        if($(window).scrollTop() > ($(`.specials-content`).offset().top + $(`.specials-content`).outerHeight() - $(window).innerHeight())){
            $(`.product`).slideDown(2000);
        }
        ///////////// About
        if($(window).scrollTop() > ($(`.about`).offset().top + $(`.about`).outerHeight() - $(window).innerHeight())){
            $(`.about-img`).fadeIn(2000);
            $(`.about-item`).show(2000);
        }

         /////////// Counter
        if($(window).scrollTop() > ($(`.counter`).offset().top + $(`.counter`).outerHeight() - $(window).innerHeight())){
            $(`.counter-content div:first-child`).delay(1000).fadeIn(1000);
            $(`.counter-content div:nth-child(2)`).fadeIn(1000);
            $(`.counter-content div:last-child`).delay(1000).fadeIn(1000);
        }


        //////////// OwlCarousel  FeedBack , Updates
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            dotsEach: true,
            autoplay:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                770:{
                    items:2,
                },
            }
        })

        //////////// Gallery
        if($(window).scrollTop() > ($(`.gallery`).offset().top + $(`.gallery`).outerHeight() - $(window).innerHeight())){
                $(`.gallery-item`).fadeIn(2000)
        }
        //////////// menu
        if($(window).scrollTop() > ($(`.menu`).offset().top + $(`.menu`).outerHeight() - $(window).innerHeight())){
                $(`.items`).fadeIn(2000)
        }



        //////////////// Our-Team
        if($(window).scrollTop() > ($(`.team`).offset().top + $(`.team`).outerHeight() - $(window).innerHeight())){
            $(`.member`).fadeIn(2000);
        }

        /////////// Scroll To Top
        if($(window).scrollTop() > (window.innerHeight /2) ){
            $(`.up`).fadeIn()
        }else{
            $(`.up`).fadeOut()
        }
        $(`.up`).click(function(eve){
            eve.preventDefault();
            $(window).scrollTop(`0`)
        })
    });







    
});

