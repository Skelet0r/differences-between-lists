angular.module('employees')
.config(function($stateProvider, $urlRouterProvider)
{

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home',
    {
        name: 'home',
        url: '/home',
        component: 'home'
    })
	.state('comparative',
    {
        name: 'comparative',
        url: '/comparative',
        component: 'comparative'
    });
});