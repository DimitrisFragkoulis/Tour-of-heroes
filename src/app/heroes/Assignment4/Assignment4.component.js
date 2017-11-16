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
var user_service_1 = require("./../shared/user.service");
var core_1 = require("@angular/core");
var Assignment4Component = (function () {
    function Assignment4Component(userService) {
        this.userService = userService;
        this.profile = {};
    }
    Assignment4Component.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getData()
            .subscribe(function (data) {
            _this.profile = data;
        });
    };
    return Assignment4Component;
}());
Assignment4Component = __decorate([
    core_1.Component({
        selector: 'Assignment4',
        templateUrl: './Assignment4.component.html',
        styleUrls: ['./Assignment4.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], Assignment4Component);
exports.Assignment4Component = Assignment4Component;
//# sourceMappingURL=Assignment4.component.js.map