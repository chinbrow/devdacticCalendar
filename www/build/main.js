webpackJsonp([1],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event-modal/event-modal.module": [
		406,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
    }
    HomePage.prototype.addEvent = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    HomePage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    HomePage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'From: ' + start + '<br>To: ' + end,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/luisgonzalez/Desktop/devdacticCalendar/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>\n        {{ viewTitle }}\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="addEvent()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n   \n  <ion-content>\n  <calendar [eventSource]="eventSource"\n          [calendarMode]="calendar.mode"\n          [currentDate]="calendar.currentDate"\n          (onEventSelected)="onEventSelected($event)"\n          (onTitleChanged)="onViewTitleChanged($event)"\n          (onTimeSelected)="onTimeSelected($event)"\n          step="30"\n          class="calendar">\n        </calendar>\n  </ion-content>'/*ion-inline-end:"/Users/luisgonzalez/Desktop/devdacticCalendar/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(342);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic2_calendar__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 152,
	"./af.js": 152,
	"./ar": 153,
	"./ar-dz": 154,
	"./ar-dz.js": 154,
	"./ar-kw": 155,
	"./ar-kw.js": 155,
	"./ar-ly": 156,
	"./ar-ly.js": 156,
	"./ar-ma": 157,
	"./ar-ma.js": 157,
	"./ar-sa": 158,
	"./ar-sa.js": 158,
	"./ar-tn": 159,
	"./ar-tn.js": 159,
	"./ar.js": 153,
	"./az": 160,
	"./az.js": 160,
	"./be": 161,
	"./be.js": 161,
	"./bg": 162,
	"./bg.js": 162,
	"./bm": 163,
	"./bm.js": 163,
	"./bn": 164,
	"./bn.js": 164,
	"./bo": 165,
	"./bo.js": 165,
	"./br": 166,
	"./br.js": 166,
	"./bs": 167,
	"./bs.js": 167,
	"./ca": 168,
	"./ca.js": 168,
	"./cs": 169,
	"./cs.js": 169,
	"./cv": 170,
	"./cv.js": 170,
	"./cy": 171,
	"./cy.js": 171,
	"./da": 172,
	"./da.js": 172,
	"./de": 173,
	"./de-at": 174,
	"./de-at.js": 174,
	"./de-ch": 175,
	"./de-ch.js": 175,
	"./de.js": 173,
	"./dv": 176,
	"./dv.js": 176,
	"./el": 177,
	"./el.js": 177,
	"./en-au": 178,
	"./en-au.js": 178,
	"./en-ca": 179,
	"./en-ca.js": 179,
	"./en-gb": 180,
	"./en-gb.js": 180,
	"./en-ie": 181,
	"./en-ie.js": 181,
	"./en-il": 182,
	"./en-il.js": 182,
	"./en-nz": 183,
	"./en-nz.js": 183,
	"./eo": 184,
	"./eo.js": 184,
	"./es": 185,
	"./es-do": 186,
	"./es-do.js": 186,
	"./es-us": 187,
	"./es-us.js": 187,
	"./es.js": 185,
	"./et": 188,
	"./et.js": 188,
	"./eu": 189,
	"./eu.js": 189,
	"./fa": 190,
	"./fa.js": 190,
	"./fi": 191,
	"./fi.js": 191,
	"./fo": 192,
	"./fo.js": 192,
	"./fr": 193,
	"./fr-ca": 194,
	"./fr-ca.js": 194,
	"./fr-ch": 195,
	"./fr-ch.js": 195,
	"./fr.js": 193,
	"./fy": 196,
	"./fy.js": 196,
	"./gd": 197,
	"./gd.js": 197,
	"./gl": 198,
	"./gl.js": 198,
	"./gom-latn": 199,
	"./gom-latn.js": 199,
	"./gu": 200,
	"./gu.js": 200,
	"./he": 201,
	"./he.js": 201,
	"./hi": 202,
	"./hi.js": 202,
	"./hr": 203,
	"./hr.js": 203,
	"./hu": 204,
	"./hu.js": 204,
	"./hy-am": 205,
	"./hy-am.js": 205,
	"./id": 206,
	"./id.js": 206,
	"./is": 207,
	"./is.js": 207,
	"./it": 208,
	"./it.js": 208,
	"./ja": 209,
	"./ja.js": 209,
	"./jv": 210,
	"./jv.js": 210,
	"./ka": 211,
	"./ka.js": 211,
	"./kk": 212,
	"./kk.js": 212,
	"./km": 213,
	"./km.js": 213,
	"./kn": 214,
	"./kn.js": 214,
	"./ko": 215,
	"./ko.js": 215,
	"./ky": 216,
	"./ky.js": 216,
	"./lb": 217,
	"./lb.js": 217,
	"./lo": 218,
	"./lo.js": 218,
	"./lt": 219,
	"./lt.js": 219,
	"./lv": 220,
	"./lv.js": 220,
	"./me": 221,
	"./me.js": 221,
	"./mi": 222,
	"./mi.js": 222,
	"./mk": 223,
	"./mk.js": 223,
	"./ml": 224,
	"./ml.js": 224,
	"./mn": 225,
	"./mn.js": 225,
	"./mr": 226,
	"./mr.js": 226,
	"./ms": 227,
	"./ms-my": 228,
	"./ms-my.js": 228,
	"./ms.js": 227,
	"./mt": 229,
	"./mt.js": 229,
	"./my": 230,
	"./my.js": 230,
	"./nb": 231,
	"./nb.js": 231,
	"./ne": 232,
	"./ne.js": 232,
	"./nl": 233,
	"./nl-be": 234,
	"./nl-be.js": 234,
	"./nl.js": 233,
	"./nn": 235,
	"./nn.js": 235,
	"./pa-in": 236,
	"./pa-in.js": 236,
	"./pl": 237,
	"./pl.js": 237,
	"./pt": 238,
	"./pt-br": 239,
	"./pt-br.js": 239,
	"./pt.js": 238,
	"./ro": 240,
	"./ro.js": 240,
	"./ru": 241,
	"./ru.js": 241,
	"./sd": 242,
	"./sd.js": 242,
	"./se": 243,
	"./se.js": 243,
	"./si": 244,
	"./si.js": 244,
	"./sk": 245,
	"./sk.js": 245,
	"./sl": 246,
	"./sl.js": 246,
	"./sq": 247,
	"./sq.js": 247,
	"./sr": 248,
	"./sr-cyrl": 249,
	"./sr-cyrl.js": 249,
	"./sr.js": 248,
	"./ss": 250,
	"./ss.js": 250,
	"./sv": 251,
	"./sv.js": 251,
	"./sw": 252,
	"./sw.js": 252,
	"./ta": 253,
	"./ta.js": 253,
	"./te": 254,
	"./te.js": 254,
	"./tet": 255,
	"./tet.js": 255,
	"./tg": 256,
	"./tg.js": 256,
	"./th": 257,
	"./th.js": 257,
	"./tl-ph": 258,
	"./tl-ph.js": 258,
	"./tlh": 259,
	"./tlh.js": 259,
	"./tr": 260,
	"./tr.js": 260,
	"./tzl": 261,
	"./tzl.js": 261,
	"./tzm": 262,
	"./tzm-latn": 263,
	"./tzm-latn.js": 263,
	"./tzm.js": 262,
	"./ug-cn": 264,
	"./ug-cn.js": 264,
	"./uk": 265,
	"./uk.js": 265,
	"./ur": 266,
	"./ur.js": 266,
	"./uz": 267,
	"./uz-latn": 268,
	"./uz-latn.js": 268,
	"./uz.js": 267,
	"./vi": 269,
	"./vi.js": 269,
	"./x-pseudo": 270,
	"./x-pseudo.js": 270,
	"./yo": 271,
	"./yo.js": 271,
	"./zh-cn": 272,
	"./zh-cn.js": 272,
	"./zh-hk": 273,
	"./zh-hk.js": 273,
	"./zh-tw": 274,
	"./zh-tw.js": 274
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 369;

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/luisgonzalez/Desktop/devdacticCalendar/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/luisgonzalez/Desktop/devdacticCalendar/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[319]);
//# sourceMappingURL=main.js.map