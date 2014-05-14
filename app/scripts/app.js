/**
 * _blank Application file
 *
 * @file:   bolierplate.js
 * @author: me@mrsum.ru
 * @since:  09.05.2014
 * @file:   app.js
 */
define([
    'jquery',
    'backbone',
    'router',
    'messages'
], function($, Backbone, Router, Messages){

    var init = function(){

        Backbone.emulateHTTP = true;

        window._blank          = window._blank || {};
        window._blank.messages = Messages;
        window._blank.Router   = new Router();

        Backbone.history.start();
    };
    return {
        init: init
    };
});