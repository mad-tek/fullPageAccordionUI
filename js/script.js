$(document).ready(function(){
    
    var expandPanel = function(e) {
        if ($(e.target).hasClass("active-panel") || !$(e.target).hasClass("section") ) {
            
            //no trigger if selected a random div or if selected an already active panel
            e.preventDefault();
            
        } else {
            
            //trigger when selected an inactive panel
            var active = $(".active-panel");
            var target = $(e.target);
            
            //minimize previously active panel
            active.switchClass("active-panel", "panel", 700, "easeInOutExpo");
            
            //maximize selected panel
            target.switchClass("panel", "active-panel", 700, "easeInOutExpo");
            e.preventDefault();
            
        }
    };

    $(".section").on('click', expandPanel);
    
    
});
