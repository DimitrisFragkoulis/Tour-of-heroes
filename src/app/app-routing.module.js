"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var startpage_component_1 = require("./Demo/startpage/startpage.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Assignment1_component_1 = require("./Demo/Assignment1/Assignment1.component");
var Assignment2_component_1 = require("./Demo/Assignment2/Assignment2.component");
var Assignment3_component_1 = require("./Demo/Assignment3/Assignment3.component");
var Assignment4_component_1 = require("./Demo/Assignment4/Assignment4.component");
var routes = [
    { path: 'startpage', component: startpage_component_1.StartpageComponent },
    { path: '', redirectTo: '/startpage', pathMatch: 'full' },
    { path: 'Assignment1', component: Assignment1_component_1.Assignment1Component },
    { path: 'Assignment2', component: Assignment2_component_1.Assignment2Component },
    { path: 'Assignment3', component: Assignment3_component_1.Assignment3Component },
    { path: 'Assignment4', component: Assignment4_component_1.Assignment4Component }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map