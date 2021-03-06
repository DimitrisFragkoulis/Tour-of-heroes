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
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var Assignment3Component = (function () {
    function Assignment3Component(location) {
        this.location = location;
    }
    Assignment3Component.prototype.ngOnInit = function () {
        this.color = [
            { colorId: 1, name: "Red" },
            { colorId: 2, name: "Blue" },
            { colorId: 3, name: "Black" }
        ];
    };
    Assignment3Component.prototype.selectByName = function (name) {
        this.selectedColor = this.color.find(function (color) { return color.name === name; });
    };
    return Assignment3Component;
}());
Assignment3Component = __decorate([
    core_1.Component({
        selector: 'Assignment3',
        templateUrl: './Assignment3.component.html',
        styleUrls: ['./Assignment3.component.css']
    }),
    __metadata("design:paramtypes", [common_1.Location])
], Assignment3Component);
exports.Assignment3Component = Assignment3Component;
var Color = (function () {
    function Color() {
    }
    return Color;
}());
exports.Color = Color;
//# sourceMappingURL=Assignment3.component.js.map