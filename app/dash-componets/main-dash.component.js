"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_service_1 = require('../services/user.service');
var data_service_1 = require('../services/data.service');
var router_1 = require('@angular/router');
var ng_semantic_1 = require("ng-semantic");
var DashComponent = (function () {
    function DashComponent(router, userService, dataService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.dataService = dataService;
        this.sideBarVisable = false;
        this.showSidebar = function () {
            _this.sideBarVisable = !_this.sideBarVisable;
        };
    }
    DashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData('http://www.reddit.com/r/pics/top.json').subscribe(function (data) {
            _this.posts = data.children;
            console.log(_this.posts);
        }, function (error) { console.log(error); });
    };
    DashComponent = __decorate([
        core_1.Component({
            selector: 'dash-main',
            templateUrl: "./public/views/dash.componet.html",
            providers: [user_service_1.UserService, data_service_1.DataService],
            directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, data_service_1.DataService])
    ], DashComponent);
    return DashComponent;
}());
exports.DashComponent = DashComponent;
//# sourceMappingURL=main-dash.component.js.map