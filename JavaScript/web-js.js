// Setting icon Toggle
$(document).ready(function(){
    $(".set-icon").click(function(){
        $(".set-menu").slideDown(1);
        $(".set-icon").hide(1);
        $(".set-icon-2").show(1);
    });

    $(".set-icon-2").click(function(){
        $(".set-menu").slideUp(1);
        $(".set-icon-2").hide(1);
        $(".set-icon").show(1);
    });
});

$(document).ready(function(){
    $(".navi-menu").click(function(){
        $(".navbar").animate({width: "3.5%"});
        $('.navbar').hide(1);
        $(".navbar-2").animate({width: "3.5%"});
        $('.navbar-2').show(10);
        $('.trend-bar').animate({left:"-180px",width:"90%"});
        $('#trend-previous').animate({left:"4.2%"});
        $('.for-you-container').animate({left:"6.2%",width:"91%"});
        $('.new-releases-container').animate({left:"6.2%",width:"91%"});
        $('.play-icon').animate({left:"20px"});
    });
    
    $(".navi-menu-2").click(function(){
        $('.navbar-2').hide(1);
        $('.navbar').show(10);
        $(".navbar").animate({width: "15%"});
        $('.trend-bar').animate({left:"0",width:"80%"});
        $('#trend-previous').animate({left:"16%"});
        $('.for-you-container').animate({left:"18%",width:"80%"});
        $('.new-releases-container').animate({left:"18%",width:"80%"});
        $('.play-icon').animate({left:"0px"});

    });
    
});

$(document).ready(function(){
    $(".trend-container").draggable({
        axis: "x",
        stop: function (event, ui) {
        $(this).draggable("option", "revert", false); // Disable revert
        }
    });
});

function scrollRight() {
    var container = document.getElementById('trendbar');
    container.scrollLeft += 320; // Adjust the scrolling distance as needed
}
$(document).ready(function() {
    $(".scroll-trigger").click(function() {
        $("#trendbar").animate({scrollLeft: '-=320'}, 1);
    });
});
