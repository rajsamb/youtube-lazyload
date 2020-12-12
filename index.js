'use strict';

module.exports = function() {
    var youtube = document.querySelectorAll( ".youtube" );
            
    for (var i = 0; i < youtube.length; i++) {
        
        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
        var fullscreen = youtube[i].dataset.fullscreen;
        
        var image = new Image();
        image.src = source;
        image.addEventListener("load", function() {
            youtube[ i ].appendChild( image );
        }(i));
    
        youtube[i].addEventListener("click", function() {

            var iframe = document.createElement("iframe");

            iframe.setAttribute("frameborder", "0");

            if (fullscreen === 'true') {
                iframe.setAttribute("allowfullscreen", true);
            }
            
            iframe.setAttribute("src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1");

            this.innerHTML = "";
            this.appendChild( iframe );
        });    
    };
}
