"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Assignment4_component_1 = require("./Demo/Assignment4/Assignment4.component");
var Assignment3_component_1 = require("./Demo/Assignment3/Assignment3.component");
var Assignment2_component_1 = require("./Demo/Assignment2/Assignment2.component");
var Assignment1_component_1 = require("./Demo/Assignment1/Assignment1.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var startpage_component_1 = require("./Demo/startpage/startpage.component");
var data_service_1 = require("./Demo/service/data.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
        ],
        declarations: [
            Assignment1_component_1.Assignment1Component,
            Assignment2_component_1.Assignment2Component,
            Assignment3_component_1.Assignment3Component,
            Assignment4_component_1.Assignment4Component,
            app_component_1.AppComponent,
            startpage_component_1.StartpageComponent,
        ],
        providers: [data_service_1.DataService],
        bootstrap: [app_component_1.AppComponent, Assignment3_component_1.Assignment3Component,]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map