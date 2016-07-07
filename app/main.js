"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map