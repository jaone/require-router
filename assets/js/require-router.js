define([
  ],function () {

  var pathName = window.location.pathname,
      currentPath = '/',
      defaultCtrl = "";

  var Router = {

     defaultController : function defaultController (value) {
        
        defaultCtrl = value;

        return Router; 
    },
    
    setRoute: function setRoute(routes) {
      if (pathName != currentPath) {

          for (var i = 0, currentRoute; currentRoute = routes[i++];) {

                 var regexx = new RegExp(currentRoute.path);

                 if (regexx.test(pathName))
                     Router.loadController(currentRoute.controller);
             }
        }
        else {
             Router.loadController(defaultCtrl)
        }

        return Router;
    },

    loadController : function loadController (controllerName) {
        require(['order!controller/' + controllerName], function (controller) {
            controller();
        });

        return Router; 
    }   

  };

  return Router;
});