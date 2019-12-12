$(document).ready(function(){
    //super slider
    $('#slides').superslides({
        play:5000,
        animation: 'fade',
        pagination: false
    });

    //navigation
    $("#navigation li a").click(function(e){
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate( {scrollTop: targetPosition-50},"slow");
    });
    //Typed Js
    var typed = new Typed('.typed',{
        strings: ['Web Developer','Flutter Developer','Mobile App Developer','Programming anguage developer'],
        typeSpeed: 60,
        showCursor:false,
        loop:true
    });
    //owl caruosel
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
        //onstep easy pie chart
     var skillsTopOffset = $(".skillsSection").offset().top;
     $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            //easy pie chart
            $('.chart').easyPieChart({
            easing:'easeInOut',
            barColor:'white',
            trackColor:false,
            scaleColor:false,
            lineWidth:4,
            size:152,
            OnStep(from, to, percent){
                $(this.el).find('.percent').text(Math.round(percent));

            }

        });

        }

     });

     //fancybox
     $("[data-fancybox]").fancybox();

     //isotop animation options
    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });


     //filtering isotope
    
    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

});