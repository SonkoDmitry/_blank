/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        validate : {
            deps: [
                'jquery'
            ]
        }
    },
    paths: {
        jquery:     '../bower_components/jquery/jquery',
        backbone:   '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        validate :  '../bower_components/jquery.validation/dist/jquery.validate.min'
    }
});

require([
    'backbone', 'app'
], function (Backbone, App) {
    $(function(){
        App.init();
    });
});