(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n    <div class=\"container\">\n\n        <div class=\"col-md-6\" id=\"img2\">\n            <img src=\"../../assets/img/icon-nobg.png\" />\n        </div>\n\n        <ion-button (click)=\"openSystem()\" class=\"gopage\" expand=\"full\" size=\"large\" color=\"warning\">... Enter ...</ion-button>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: #ffffff;\n}\n\n.container {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background: #fc4a1a;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #f7b733, #ffffff);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  margin: 0px;\n  padding: 0px;\n  /*\n  background: url(../../assets/img/covid-bg-3.jpg) no-repeat center center fixed;\n  */\n  background-size: cover;\n}\n\n.gopage {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  margin: 0px;\n  background: #ffffff;\n}\n\n#img2 {\n  position: absolute;\n  margin-top: 50%;\n  width: 60% !important;\n  height: auto !important;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 50%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcd29ya1xca21hcmtldC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLCtCQUFBO0VBQ0EscURBQUE7RUFDQSxxRUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0E7O0dBQUE7RUFNQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmYzRhMWE7XG4gICAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2Y3YjczMywgI2ZmZmZmZik7XG4gICAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZjdiNzMzLCAjZmZmZmZmKTtcbiAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIC8qXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvY292aWQtYmctMy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAgICovXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5nb3BhZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4jaW1nMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmM0YTFhO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2Y3YjczMywgI2ZmZmZmZik7XG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmN2I3MzMsICNmZmZmZmYpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIC8qXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2NvdmlkLWJnLTMuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgKi9cbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5nb3BhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbiNpbWcyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA1MCU7XG4gIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");





let HomePage = class HomePage {
    constructor(iab, statusBar, geolocation) {
        this.iab = iab;
        this.statusBar = statusBar;
        this.geolocation = geolocation;
        //this.openSystem();
    }
    ngOnInit() {
        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
    }
    //openBlank() {
    //const options: InAppBrowserOptions = {
    //location: 'no',//Or 'no' 
    //hidden: 'no', //Or  'yes'
    //zoom: 'no',//Android only ,shows browser zoom controls 
    //hideurlbar: 'yes',//Or 'no'
    //}
    //this.iab.create('https://jehmuaymarket.com/site/index', '_self', options);
    //}
    openSystem() {
        const options = {
            location: 'no',
            hidden: 'no',
            zoom: 'no',
            hideurlbar: 'yes',
        };
        this.iab.create('https://jehmuaymarket.com/site/index', '_self', options);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map