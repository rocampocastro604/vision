(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add styles to this file, and also import other style files */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  \r\n  <h1>OptiCart Demo</h1>\r\n  \r\n  <video hidden id=\"vid\" width=\"300\" height=\"300\"></video>\r\n  <canvas id=\"canvas\"></canvas>\r\n  <p id=\"eltexto\"></p>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow-models/coco-ssd */ "./node_modules/@tensorflow-models/coco-ssd/dist/coco-ssd.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

//import COCO-SSD model as cocoSSD

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'TF-ObjectDetection';
        this.detectFrame = function (video, model) {
            model.detect(video).then(function (predictions) {
                _this.renderPredictions(predictions);
                requestAnimationFrame(function () {
                    _this.detectFrame(video, model);
                });
            });
        };
        this.renderPredictions = function (predictions) {
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            canvas.width = 300;
            canvas.height = 300;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            // Font options.
            var font = "16px sans-serif";
            ctx.font = font;
            ctx.textBaseline = "top";
            ctx.drawImage(_this.video, 0, 0, 300, 300);
            predictions.forEach(function (prediction) {
                var x = prediction.bbox[0];
                var y = prediction.bbox[1];
                var width = prediction.bbox[2];
                var height = prediction.bbox[3];
                // Draw the bounding box.
                ctx.strokeStyle = "#00ff1a";
                ctx.lineWidth = 2;
                ctx.strokeRect(x, y, width, height);
                // Draw the label background.
                ctx.fillStyle = "#00ff1a";
                var textWidth = ctx.measureText(prediction.class).width;
                var textHeight = parseInt(font, 10); // base 10
                ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
            });
            predictions.forEach(function (prediction) {
                var x = prediction.bbox[0];
                var y = prediction.bbox[1];
                var cont_bottle = 0;
                var cont_person = 0;
                // Draw the text last to ensure it's on top.
                ctx.fillStyle = "#000000";
                ctx.fillText(prediction.class, x, y);
                console.log(prediction.class);
                if (prediction.class == "bottle") {
                    //console.log(prediction.class)
                    cont_bottle = cont_bottle + 1;
                    console.log(cont_bottle);
                    if (cont_bottle = 25) {
                        //window.location.href = "https://www.google.com/search?q=milk&tbm=isch&ved=2ahUKEwj-vLmPgMflAhUCgVkKHeVKDu4Q2-cCegQIABAA&oq=milk&gs_l=img.3..0i67l7j0j0i67l2.11433.11861..12057...0.0..0.132.512.0j4......0....1..gws-wiz-img.......35i39.VDRVZfIfiVY&ei=4ha7Xf7DEYKC5gLllbnwDg&bih=648&biw=1280&rlz=1C1CHZL_esCO698CO698"; 
                        window.location.href = "https://opticart.000webhostapp.com/?product=carton-de-leche";
                    }
                }
                else if (prediction.class == "cell phone") {
                    cont_person = cont_person + 1;
                    console.log(cont_person);
                    if (cont_person = 25) {
                        //window.location.href = "https://www.google.com/search?q=cheese&rlz=1C1CHZL_esCO698CO698&sxsrf=ACYBGNRin_ABRQth9cNE4ctO9QApniP4pw:1572542172355&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi5h8-MgMflAhWorFkKHVI_BYYQ_AUIEigB&biw=1280&bih=648";
                        window.location.href = "https://opticart.000webhostapp.com/?product=queso";
                    }
                    else {
                        console.log("Not sure");
                    }
                    ;
                }
                ;
            });
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.webcam_init();
        this.predictWithCocoModel();
    };
    AppComponent.prototype.predictWithCocoModel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_1__["load"]('lite_mobilenet_v2')];
                    case 1:
                        model = _a.sent();
                        this.detectFrame(this.video, model);
                        console.log('model loaded');
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.webcam_init = function () {
        var _this = this;
        this.video = document.getElementById("vid");
        navigator.mediaDevices
            .getUserMedia({
            audio: false,
            video: {
                facingMode: "user",
            }
        })
            .then(function (stream) {
            _this.video.srcObject = stream;
            _this.video.onloadedmetadata = function () {
                _this.video.play();
            };
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tolen\Documents\GitHub\vision\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map