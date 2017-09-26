require.config({
    baseUrl: 'assets/js',
    paths: {
        jquery    : 'lib/jquery-1.11.2',
        router    : 'require-router',
        domReady  : 'lib/require-plugins/domReady',
        order     : 'lib/require-plugins/order',
        text      : 'lib/require-plugins/text'
    },
    shim : {
        bootstrap : {
            deps : ['jquery']
        },

        slick : {
            deps : ['jquery' ]
        }
    }
});

require(['order!router','order!jquery','order!domReady' ], function(Router,$,domReady){

    Router
    .setRoute (
        [   
             {
                 path: '/product-list.html',
                 controller: 'productList.Controller'
             },
             {
                path: '/index.html',
                controller: 'main.Controller'
             },
             {
                 path: '/product-detail.html',
                 controller: 'productDetail.Controller'
             },
             {
                path: '/Home/*',
                controller: 'main.Controller'
             }
             

        ]
    )

});