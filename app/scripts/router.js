define([
    'jquery',
    'backbone'
], function($, Backbone){
    return Backbone.Router.extend({
        routes: {
            '*undefined' : "index"
        },
        //index action
        'index' : function(){
            console.log("Welcome to _blank JS App")
        }
    });
});