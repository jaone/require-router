define([
    'domReady',
], function(domReady) {
    var indexController = function() {
        domReady(function() {
            initialize();
        });
    };

    function initialize () {
      console.log("this is Main" )
    };




    return indexController;
});