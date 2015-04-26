$(function(){
    

    
    var expand = function(e) {
        //minimize previously active panel
        $(".active-panel").toggleClass("active-panel").addClass("panel");
        //maximize selected panel
        $(event.target).toggleClass("panel").addClass("active-panel");
        e.preventDefault();
    };
    
    
    $(document).on('click', expand);
    
    
});