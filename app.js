$(function(){

    let add = $('.add');
    let remove = $('.remove');
    let toggle = $('.toggle');
    let box = $('.box');

    
    add.on('click', function(){
        box.animate({
            'opacity': '1',
            'height': '500px',
            'width': '500px',
            
            
        });
        
    });

    remove.on('click',function(){
        box.animate({
            'opacity': '0',
            'height': '100px',
            'width': '200px',
            
            
        });
        
    });

    toggle.on('click',function(){
        box.fadeToggle();
        
    }); 


}); 