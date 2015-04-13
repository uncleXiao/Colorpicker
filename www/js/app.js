angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','starter.filters','starter.directives','ngAnimate'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
        })


            .state('tab.pick', {
                url: '/pick',
                views: {
                    'tab-pick': {
                        templateUrl: 'templates/tab-pick.html',
                        controller: 'pickCtrl'
                    }
                }
            })

            .state('tab.upload', {
                url: '/upload',
                views: {
                    'tab-upload': {
                        templateUrl: 'templates/tab-upload.html',
                        controller: 'uploadCtrl'
                    }
                }
            })
            .state('tab.about', {
                url: '/about',
                views: {
                    'tab-about': {
                        templateUrl: 'templates/tab-about.html',
                        controller: 'aboutCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/tab/pick');

    });
