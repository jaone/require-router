define([
    'domReady',
], function(domReady) {
    var productDetailController = function() {
        domReady(function() {
            initialize();
        });
    };


    function initialize () {
       alert("this is Product Detail" )
    };

    return productDetailController;
});