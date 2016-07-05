"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login-component/login.component');
exports.routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map