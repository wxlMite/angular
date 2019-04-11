import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import route from './route';
import layout from './layout/layout.config';
const app=angular.module('App',[
    uiRouter,
    layout
    
]);
app.config(route);
export default app;