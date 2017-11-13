"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Assignment3_component_1 = require("./heroes/Assignment3/Assignment3.component");
var Assignment2_component_1 = require("./heroes/Assignment2/Assignment2.component");
var Assignment1_component_1 = require("./heroes/Assignment1/Assignment1.component");
var hero_search_service_1 = require("./heroes/search/hero-search.service");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./heroes/shared/in-memory-data.service");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./heroes/dashboard/dashboard.component");
var heroes_component_1 = require("./heroes/hero/heroes.component");
var hero_detail_component_1 = require("./heroes/hero-detail/hero-detail.component");
var hero_service_1 = require("./heroes/shared/hero.service");
var hero_search_component_1 = require("./heroes/search/hero-search.component");
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
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            Assignment1_component_1.Assignment1Component,
            Assignment2_component_1.Assignment2Component,
            Assignment3_component_1.Assignment3Component,
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            hero_search_component_1.HeroSearchComponent,
            Assignment3_component_1.Assignment3Component
        ],
        providers: [hero_service_1.HeroService, hero_search_service_1.HeroSearchService],
        bootstrap: [app_component_1.AppComponent, Assignment3_component_1.Assignment3Component]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map