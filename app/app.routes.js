"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login-component/login.component');
var main_dash_component_1 = require('./dash-componets/main-dash.component');
exports.routes = [
    {
        path: '',
        redirectTo: 'dash',
        pathMatch: 'full'
    },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dash', component: main_dash_component_1.DashComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map