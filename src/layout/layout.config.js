import uiRoute from 'angular-ui-router';
import layoutCtrl from './Controller/layoutCtrl';
export default angular.module("App.layout",[uiRoute])
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('layout',{
            url:'/layout',
            template:require('./view/layout.html'),
            controller:'layoutCtrl',
            controllerAs:'vm'
    })
})
.controller('layoutCtrl',layoutCtrl)
.name;