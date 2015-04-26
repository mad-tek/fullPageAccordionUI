$(function(){
    
    var expand = function(e) {
        if ($(event.target).hasClass("active-panel")) {
            
            //no trigger if selected an already active panel
            e.preventDefault();
            
        } else {
            
            //trigger when selected an inactive panel
            var active = $(".active-panel");
            var target = $(event.target);
            
            //minimize previously active panel
            active.removeClass("active-panel");
            active.addClass("panel", 500, "easeInOutExpo");
            
            //maximize selected panel
            target.removeClass("panel");
            target.addClass("active-panel", 500, "easeInOutExpo");
            e.preventDefault();
            
        };
    };

    $(document).on('click', expand);
    
    
});