'use strict';
var app = angular.module("ContactsApp", ['ngRoute']); 

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/contacts', {
            templateUrl : '/static/partials/contacts.html',
            controller  : 'ContactListController'
        })
        .when('/contacts/:id/edit', {
            templateUrl : '/static/partials/contact_form.html',
            controller  : 'ContactFormController',
        })
        .when('/new-contact', {
            templateUrl : '/static/partials/contact_form.html',
            controller  : 'ContactFormController'
        })       
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
});
