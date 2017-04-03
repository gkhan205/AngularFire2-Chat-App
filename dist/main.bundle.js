webpackJsonp([1,4],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = (function () {
    function LoginPageComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    LoginPageComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        this.afService.loginWithGoogle().then(function (data) {
            // Send them to the homepage if they are logged in
            // this.afService.addUserInfo();
            _this.router.navigate(['']);
        });
    };
    LoginPageComponent.prototype.loginWithEmail = function (event, email, password) {
        var _this = this;
        event.preventDefault();
        this.afService.loginWithEmail(email, password).then(function () {
            _this.router.navigate(['']);
        })
            .catch(function (error) {
            if (error) {
                _this.error = error;
                console.log(_this.error);
            }
        });
    };
    LoginPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(556),
            styles: [__webpack_require__(543)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginPageComponent);
    return LoginPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__(317);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = (function () {
    function PostsComponent(postsService) {
        this.postsService = postsService;
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.postsService.getAllPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'posts',
            template: __webpack_require__(557),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */]) === 'function' && _a) || Object])
    ], PostsComponent);
    return PostsComponent;
    var _a;
}());
//# sourceMappingURL=posts.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
        this.post = [];
    }
    // Get all feeds from the API
    PostsService.prototype.getAllPosts = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(function (res) { return res.json(); });
    };
    PostsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PostsService);
    return PostsService;
    var _a;
}());
//# sourceMappingURL=posts.service.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPageComponent = (function () {
    function RegisterPageComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    //registers the user and logs them in
    RegisterPageComponent.prototype.register = function (event, name, email, password) {
        var _this = this;
        event.preventDefault();
        this.afService.registerUser(email, password).then(function (user) {
            _this.afService.saveUserInfoFromForm(user.uid, name, email).then(function () {
                _this.router.navigate(['']);
            })
                .catch(function (error) {
                _this.error = error;
            });
        })
            .catch(function (error) {
            _this.error = error;
            console.log(_this.error);
        });
    };
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(558),
            styles: [__webpack_require__(544)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RegisterPageComponent);
    return RegisterPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=register-page.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about',
            template: __webpack_require__(559)
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(afService) {
        this.afService = afService;
        this.messages = this.afService.messages;
    }
    HomeComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    HomeComponent.prototype.isYou = function (email) {
        if (email == this.afService.email)
            return true;
        else
            return false;
    };
    HomeComponent.prototype.isMe = function (email) {
        if (email == this.afService.email)
            return false;
        else
            return true;
    };
    HomeComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log('Scroll to bottom failed yo!');
        }
    };
    HomeComponent.prototype.sendMessage = function () {
        this.afService.sendMessage(this.newMessage);
        this.newMessage = '';
    };
    HomeComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], HomeComponent.prototype, "myScrollContainer", void 0);
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__(560),
            styles: [__webpack_require__(545)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 357;


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(479);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(afService, router) {
        // This asynchronously checks if our user is logged it and will automatically
        // redirect them to the Login page when the status changes.
        // This is just a small thing that Firebase does that makes it easy to use.
        var _this = this;
        this.afService = afService;
        this.router = router;
        this.afService.af.auth.subscribe(function (auth) {
            if (auth == null) {
                console.log("Not Logged in.");
                _this.router.navigate(['login']);
                _this.isLoggedIn = false;
            }
            else {
                console.log("Successfully Logged in.");
                // Set the Display Name and Email so we can attribute messages to them
                if (auth.google) {
                    _this.afService.displayName = auth.google.displayName;
                    _this.afService.email = auth.google.email;
                }
                else {
                    _this.afService.displayName = auth.auth.email;
                    _this.afService.email = auth.auth.email;
                }
                _this.isLoggedIn = true;
                _this.router.navigate(['']);
            }
        });
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(554),
            styles: [__webpack_require__(542)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_pagination__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_header_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_posts_posts_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_static_home_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_static_about_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_page_login_page_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_page_register_page_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_posts_posts_service__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_af__ = __webpack_require__(65);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var firebaseConfig = {
    apiKey: "AIzaSyA6i7UmsOUHJbF9G80a_TtVqAHwLX3eMaI",
    authDomain: "fir-chat-ca10c.firebaseapp.com",
    databaseURL: "https://fir-chat-ca10c.firebaseio.com",
    storageBucket: "fir-chat-ca10c.appspot.com",
    messagingSenderId: "330260328057"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_common_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_static_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_static_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_register_page_register_page_component__["a" /* RegisterPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__components_posts_posts_service__["a" /* PostsService */], __WEBPACK_IMPORTED_MODULE_15__providers_af__["a" /* AF */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_posts_posts_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_static_home_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_static_about_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_page_login_page_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_page_register_page_component__ = __webpack_require__(318);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var APP_ROUTES = [
    { path: 'posts', component: __WEBPACK_IMPORTED_MODULE_1__components_posts_posts_component__["a" /* PostsComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__components_static_about_component__["a" /* AboutComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_register_page_register_page_component__["a" /* RegisterPageComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_static_home_component__["a" /* HomeComponent */], pathMatch: 'full' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    HeaderComponent.prototype.logout = function () {
        this.afService.logout();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], HeaderComponent.prototype, "isLoggedIn", void 0);
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header',
            template: __webpack_require__(555)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(66)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(66)();
// imports


// module
exports.push([module.i, ".loginmodal-container {\r\n  padding: 30px;\r\n  max-width: 350px;\r\n  width: 100% !important;\r\n  background-color: #F7F7F7;\r\n  margin: 0 auto;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n  font-family: roboto;\r\n}\r\n.loginmodal-container h1 {\r\n  text-align: center;\r\n  font-size: 1.8em;\r\n  font-family: roboto;\r\n}\r\n.loginmodal-submit {\r\n  /* border: 1px solid #3079ed; */\r\n  width: 100%;\r\n  border: 0px;\r\n  color: #fff;\r\n  text-shadow: 0 1px rgba(0,0,0,0.1);\r\n  background-color: #4d90fe;\r\n  padding: 17px 0px;\r\n  font-family: roboto;\r\n  font-size: 21px;\r\n   background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed));\r\n}\r\n.loginmodal-submit:hover {\r\n  /* border: 1px solid #2f5bb7; */\r\n  border: 0px;\r\n  text-shadow: 0 1px rgba(0,0,0,0.3);\r\n  background-color: #357ae8;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\r\n}\r\n.loginmodal-container a {\r\n  text-decoration: none;\r\n  color: #666;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  display: inline-block;\r\n  opacity: 0.6;\r\n  -webkit-transition: opacity ease 0.5s;\r\n  transition: opacity ease 0.5s;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(66)();
// imports


// module
exports.push([module.i, ".registermodal-container {\r\n  padding: 30px;\r\n  max-width: 350px;\r\n  width: 100% !important;\r\n  background-color: #F7F7F7;\r\n  margin: 0 auto;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n  font-family: roboto;\r\n}\r\n.registermodal-container h1 {\r\n  text-align: center;\r\n  font-size: 1.8em;\r\n  font-family: roboto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(66)();
// imports


// module
exports.push([module.i, ".bs-example {\r\n  position: relative;\r\n  padding: 15px 15px 15px;\r\n  margin: 0 -15px 0px;\r\n  border-color: #e5e5e5 #eee #eee;\r\n  border-style: solid;\r\n  border-width: 1px 0;\r\n  background-color: #E1E2E3;\r\n  box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\r\n  height: 60vh;\r\n  overflow-y: scroll;\r\n}\r\n#messages {\r\n  background-color: #2d384a !important;\r\n}\r\n.author {\r\n  font-size: 12px;\r\n}\r\n.send-message {\r\n  color: #ffffff;\r\n  background-color: #4184f3;\r\n  text-decoration: none;\r\n  padding: 10px 20px 10px 20px;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  cursor: pointer;\r\n}\r\n.message-text {\r\n  display: block;\r\n  padding: 9.5px;\r\n  margin: 0 0 10px;\r\n  font-size: 13px;\r\n  line-height: 1.42857143;\r\n  color: #333;\r\n  word-break: break-all;\r\n  word-wrap: break-word;\r\n  background-color: #f5f5f5;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  width: 100%;\r\n}\r\np {\r\n  font-size: 16px;\r\n}\r\n.bubble{\r\n  background-color: #F2F2F2;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 6px #B2B2B2;\r\n  display: inline-block;\r\n  padding: 10px 18px;\r\n  position: relative;\r\n  vertical-align: top;\r\n}\r\n.bubble::before {\r\n  background-color: #F2F2F2;\r\n  content: \"\\A0\";\r\n  display: block;\r\n  height: 16px;\r\n  position: absolute;\r\n  top: 11px;\r\n  transform:         rotate( 29deg ) skew( -35deg );\r\n  -moz-transform:    rotate( 29deg ) skew( -35deg );\r\n  -ms-transform:     rotate( 29deg ) skew( -35deg );\r\n  -o-transform:      rotate( 29deg ) skew( -35deg );\r\n  -webkit-transform: rotate( 29deg ) skew( -35deg );\r\n  width:  20px;\r\n}\r\n.me {\r\n  display: inherit;\r\n  margin: 5px 45px 5px 20px;\r\n}\r\n.me::before {\r\n  box-shadow: -2px 2px 2px 0 rgba( 178, 178, 178, .4 );\r\n  left: -9px;\r\n}\r\n.you {\r\n  display: inherit;\r\n  margin: 5px 20px 5px 45px;\r\n}\r\n.you::before {\r\n  box-shadow: 2px -2px 2px 0 rgba( 178, 178, 178, .4 );\r\n  right: -9px;\r\n}\r\n.bs-example+.highlight, .bs-example+.zero-clipboard+.highlight {\r\n  margin: 0px -15px 15px;\r\n  border-width: 0 0 1px;\r\n  border-radius: 0;\r\n}\r\n.highlight {\r\n  padding: 9px 14px;\r\n  margin-bottom: 14px;\r\n  background-color: #f7f7f9;\r\n  border: 1px solid #e1e1e8;\r\n  border-radius: 4px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = "<header [isLoggedIn]=\"isLoggedIn\"></header>\n<div class=\"container\">\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\">AngularFire 2 Chat App</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav navbar-left\">\r\n        <li><a routerLink=\"posts\">All Posts</a></li>\r\n        <li><a routerLink=\"about\">About App</a></li>\r\n        <li *ngIf=\"isLoggedIn\"><a routerLink=\"/\">Let's Chat!</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"isLoggedIn == false\"><a routerLink=\"login\">Login</a></li>\r\n        <li *ngIf=\"isLoggedIn\"><a (click)=\"logout()\" style=\"cursor: pointer;\">Logout</a></li>\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>"

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"error\" class=\"alert alert-warning\" role=\"alert\">\n  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Error:</span>\n  {{error}}\n</div>\n<div class=\"modal-dialog\">\n  <div class=\"loginmodal-container\">\n    <h1>Login to Your Account</h1><br>\n    <form class=\"form-signin\" (submit)=\"loginWithEmail($event, email.value, password.value)\">\n      <label for=\"email\" class=\"sr-only\">Email address</label>\n      <input #email type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email address\">\n      <label for=\"password\" class=\"sr-only\">Password</label>\n      <input #password type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n      <br>\n      <button class=\"btn btn-md btn-primary btn-block\" type=\"submit\">Sign in</button>\n    </form>\n    <hr>\n    <button class=\"login loginmodal-submit\" (click)=\"loginWithGoogle()\">Login With Google</button>\n    <hr>\n    <a [routerLink]=\"['/register']\" style=\"cursor: pointer;\">Register Now</a>\n  </div>\n</div>"

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n\t<h2>All Posts coming from Sample API</h2>\r\n\t<hr>\r\n\r\n\t<div *ngFor=\"let post of posts | paginate: { itemsPerPage: 5, currentPage: p }\">\r\n\t\t<h4>{{post.title}}</h4>\r\n\t\t<p>{{post.body}}</p>\r\n\t\t<br>\r\n\t</div>\r\n\t<br>\r\n\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n</div>"

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"error\" class=\"alert alert-warning\" role=\"alert\">\n  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Error:</span>\n  {{error}}\n</div>\n<div class=\"modal-dialog\">\n  <div class=\"registermodal-container\">\n    <h1>Register</h1><br>\n    <form class=\"form-signin\" (submit)=\"register($event, name.value, email.value, password.value)\">\n      <label for=\"name\" class=\"sr-only\">Name</label>\n      <input #name type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Name\" required=\"\">\n      <label for=\"email\" class=\"sr-only\">Email address</label>\n      <input #email type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email address\" required=\"\" autofocus=\"\">\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n      <input #password type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n      <br>\n      <button  class=\"btn btn-md btn-primary btn-block\" type=\"submit\">Register</button>\n    </form>\n\n    <br><br>\n    <h4><a routerLink=\"/login\">Already Registered? Login here</a></h4>\n\n  </div>\n</div>"

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<h3>Angular 2 + Firebase Chat Application</h3>\r\n\r\n<p>Application created with Angular 2 &amp; Firebase. Also have used a sample API from jsonplaceholder.com for displaying posts. Used Ng2-Pagination for pagination</p>"

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8 col-md-offset-2\">\r\n      <div #scrollMe class=\"bs-example\" id=\"messages\">\r\n       <div *ngFor=\"let message of messages | async\">\r\n           <div class=\"bubble\" [class.you]=\"isYou(message.email)\" [class.me]=\"isMe(message.email)\">\r\n              <p>{{ message.message }}</p>\r\n              <div class=\"author\">\r\n                  {{ message.displayName }} | {{ message.timestamp | date:\"MM/dd/yy hh:mm a\" }}\r\n              </div>\r\n           </div>\r\n       </div>\r\n    </div>\r\n    \r\n      <figure class=\"highlight\">\r\n        \r\n        <!-- Point: 3 -->\r\n        <input type=\"textarea\" class=\"message-text\" [(ngModel)]=\"newMessage\" (keyup.enter)=\"sendMessage()\">\r\n        <a class=\"send-message\" (click)=\"sendMessage()\">SEND</a>\r\n        \r\n      </figure>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(358);


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(323);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AF; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AF = (function () {
    function AF(af) {
        this.af = af;
        this.messages = this.af.database.list('messages');
    }
    /**
     * Logs in the user
     * @returns {firebase.Promise<FirebaseAuthState>}
     */
    AF.prototype.loginWithGoogle = function () {
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup,
        });
    };
    /**
     * Logs out the current user
     */
    AF.prototype.logout = function () {
        return this.af.auth.logout();
    };
    /**
     * Saves a message to the Firebase Realtime Database
     * @param text
     */
    AF.prototype.sendMessage = function (text) {
        var message = {
            message: text,
            displayName: this.displayName,
            email: this.email,
            timestamp: Date.now()
        };
        this.messages.push(message);
    };
    /**
     * Calls the AngularFire2 service to register a new user
     * @param model
     * @returns {firebase.Promise<void>}
     */
    AF.prototype.registerUser = function (email, password) {
        console.log(email);
        return this.af.auth.createUser({
            email: email,
            password: password
        });
    };
    /**
     * Saves information to display to screen when user is logged in
     * @param uid
     * @param model
     * @returns {firebase.Promise<void>}
     */
    AF.prototype.saveUserInfoFromForm = function (uid, name, email) {
        return this.af.database.object('registeredUsers/' + uid).set({
            name: name,
            email: email,
        });
    };
    /**
    * Logs the user in using their Email/Password combo
    * @param email
    * @param password
    * @returns {firebase.Promise<FirebaseAuthState>}
    */
    AF.prototype.loginWithEmail = function (email, password) {
        return this.af.auth.login({
            email: email,
            password: password,
        }, {
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Password,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Password,
        });
    };
    AF = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], AF);
    return AF;
    var _a;
}());
//# sourceMappingURL=af.js.map

/***/ })

},[585]);
//# sourceMappingURL=main.bundle.js.map