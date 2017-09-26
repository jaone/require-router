define([
    'domReady',
    'slick',
    'bootstrap'
], function(domReady) {
    var productListController = function() {
        domReady(function() {
            initialize();
        });
    };

    function initialize () {
       alert("this is Product List" )
    };

    return productListController;
});