(self["webpackChunkfasten_connect_portal"] = self["webpackChunkfasten_connect_portal"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/developers/developers.component */ 972);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/auth-signin/auth-signin.component */ 2771);
/* harmony import */ var _pages_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/auth-signup/auth-signup.component */ 2862);
/* harmony import */ var _pages_auth_signup_organization_auth_signup_organization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/auth-signup-organization/auth-signup-organization.component */ 3515);
/* harmony import */ var _pages_auth_signup_plan_auth_signup_plan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/auth-signup-plan/auth-signup-plan.component */ 9502);
/* harmony import */ var _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-guards/is-authenticated-auth-guard */ 6056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [
    { path: 'auth/signin', component: _pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_2__.AuthSigninComponent },
    { path: 'auth/signup', component: _pages_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_3__.AuthSignupComponent },
    { path: 'auth/signup/org', component: _pages_auth_signup_organization_auth_signup_organization_component__WEBPACK_IMPORTED_MODULE_4__.AuthSignupOrganizationComponent },
    { path: 'auth/signup/plan', component: _pages_auth_signup_plan_auth_signup_plan_component__WEBPACK_IMPORTED_MODULE_5__.AuthSignupPlanComponent },
    { path: '', redirectTo: '/developers', pathMatch: 'full' },
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, canActivate: [_auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_6__.IsAuthenticatedAuthGuard] },
    { path: 'developers', component: _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_0__.DevelopersComponent, canActivate: [_auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_6__.IsAuthenticatedAuthGuard] },
    //must be at bottom of list
    { path: '**', redirectTo: 'developers' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);







function AppComponent_app_header_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
} }
function AppComponent_app_footer_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-footer");
} }
class AppComponent {
    constructor(router, 
    // private toastService: ToastService,
    modalService) {
        this.router = router;
        this.modalService = modalService;
        this.title = 'fastenhealth';
        this.showHeader = false;
        this.showFooter = true;
    }
    ngOnInit() {
        // navbar backdrop for mobile only
        const navbarBackdrop = document.createElement('div');
        navbarBackdrop.classList.add('az-navbar-backdrop');
        document.querySelector('body')?.appendChild(navbarBackdrop);
        //determine if we should show the header
        this.router.events.subscribe(event => this.routerEvent(event));
    }
    routerEvent(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
            //modify header
            if (event.url?.startsWith('/auth') || event.url?.startsWith('/desktop')) {
                this.showHeader = false;
            }
            else {
                // console.log("NU")
                this.showHeader = true;
            }
            // close all open modals when route change
            this.modalService.dismissAll();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [[4, "ngIf"], [1, "az-content-wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_app_header_1_Template, 1, 0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_app_footer_4_Template, 1, 0, "app-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showFooter);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2976:
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiMode": () => (/* binding */ ApiMode),
/* harmony export */   "CredentialStatus": () => (/* binding */ CredentialStatus),
/* harmony export */   "URL_PATTERN": () => (/* binding */ URL_PATTERN),
/* harmony export */   "WebhookStatus": () => (/* binding */ WebhookStatus)
/* harmony export */ });
const URL_PATTERN = /^(?:(http(s)?)?(sftp)?(ftp)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
var ApiMode;
(function (ApiMode) {
    ApiMode["Live"] = "live";
    ApiMode["Test"] = "test";
})(ApiMode || (ApiMode = {}));
var CredentialStatus;
(function (CredentialStatus) {
    CredentialStatus["Active"] = "active";
    CredentialStatus["Inactive"] = "inactive";
})(CredentialStatus || (CredentialStatus = {}));
var WebhookStatus;
(function (WebhookStatus) {
    WebhookStatus["Active"] = "active";
    WebhookStatus["Inactive"] = "inactive";
})(WebhookStatus || (WebhookStatus = {}));


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 2898);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/developers/developers.component */ 972);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/auth-signin/auth-signin.component */ 2771);
/* harmony import */ var _pages_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/auth-signup/auth-signup.component */ 2862);
/* harmony import */ var _pages_auth_signup_organization_auth_signup_organization_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/auth-signup-organization/auth-signup-organization.component */ 3515);
/* harmony import */ var _pages_auth_signup_plan_auth_signup_plan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/auth-signup-plan/auth-signup-plan.component */ 9502);
/* harmony import */ var _directives_password_confirm_validator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/password-confirm-validator.directive */ 6465);
/* harmony import */ var _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth-guards/is-authenticated-auth-guard */ 6056);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth-interceptor.service */ 2993);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-image-cropper */ 649);
/* harmony import */ var _components_logo_cropper_logo_cropper_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/logo-cropper/logo-cropper.component */ 7993);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-charts */ 1208);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-moment */ 728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);





























class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.fas, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_16__.far);
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FaIconLibrary)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HTTP_INTERCEPTORS,
            useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_13__.AuthInterceptorService,
            multi: true,
            deps: [_services_auth_service__WEBPACK_IMPORTED_MODULE_12__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router]
        },
        _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_11__.IsAuthenticatedAuthGuard,
    ], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_24__.NgChartsModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__.InfiniteScrollModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FontAwesomeModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_26__.ImageCropperModule,
        ngx_moment__WEBPACK_IMPORTED_MODULE_27__.MomentModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_4__.DevelopersComponent,
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent,
        _pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_6__.AuthSigninComponent,
        _pages_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_7__.AuthSignupComponent,
        _pages_auth_signup_organization_auth_signup_organization_component__WEBPACK_IMPORTED_MODULE_8__.AuthSignupOrganizationComponent,
        _pages_auth_signup_plan_auth_signup_plan_component__WEBPACK_IMPORTED_MODULE_9__.AuthSignupPlanComponent,
        _components_logo_cropper_logo_cropper_component__WEBPACK_IMPORTED_MODULE_14__.LogoCropperComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _directives_password_confirm_validator_directive__WEBPACK_IMPORTED_MODULE_10__.PasswordConfirmValidatorDirective,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_24__.NgChartsModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__.InfiniteScrollModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FontAwesomeModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_26__.ImageCropperModule,
        ngx_moment__WEBPACK_IMPORTED_MODULE_27__.MomentModule] }); })();


/***/ }),

/***/ 6056:
/*!************************************************************!*\
  !*** ./src/app/auth-guards/is-authenticated-auth-guard.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsAuthenticatedAuthGuard": () => (/* binding */ IsAuthenticatedAuthGuard)
/* harmony export */ });
/* harmony import */ var _home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class IsAuthenticatedAuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    var _this = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let jwtPayload = yield _this.authService.GetJWTPayload();
      //check if the user is authenticated, if not, redirect to login
      if (!jwtPayload) {
        return yield _this.router.navigate(['/auth/signin']);
      } else if (jwtPayload.org_id == '' || jwtPayload.org_id == null) {
        console.log("User is not associated with an organization, redirecting to org signup", jwtPayload);
        return yield _this.router.navigate(['/auth/signup/org']);
      }
      // continue as normal
      return true;
    })();
  }
}
IsAuthenticatedAuthGuard.ɵfac = function IsAuthenticatedAuthGuard_Factory(t) {
  return new (t || IsAuthenticatedAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
IsAuthenticatedAuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: IsAuthenticatedAuthGuard,
  factory: IsAuthenticatedAuthGuard.ɵfac
});

/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _environments_versions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/versions */ 8496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class FooterComponent {
    constructor() {
        this.appVersion = _environments_versions__WEBPACK_IMPORTED_MODULE_0__.versionInfo.version;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 1, consts: [[1, "az-footer", "ht-40", "page-footer", "fixed-bottom"], [1, "container", "ht-100p", "pd-t-0-f"], [1, "d-sm-flex", "justify-content-center", "justify-content-sm-between", "py-2", "w-100"], [1, "text-muted", "text-center", "text-sm-left", "d-block", "d-sm-inline-block"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], ["href", "https://www.fastenhealth.com/"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Fasten Health: Your Journey, Your Records, Your Control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Copyright \u00A9 Fasten 2022 | ", ctx.appVersion, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/connect.service */ 4543);
/* harmony import */ var _services_portal_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/portal-config.service */ 2608);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);








const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function () { return ["fas", "table-columns"]; };
const _c2 = function () { return ["fas", "code"]; };
const _c3 = function (a0) { return { "on": a0 }; };
class HeaderComponent {
    constructor(authService, connectService, portalConfigService, router) {
        this.authService = authService;
        this.connectService = connectService;
        this.portalConfigService = portalConfigService;
        this.router = router;
    }
    ngOnInit() {
        this.portalConfigService.ConfigSubject.subscribe((config) => {
            console.log("Configuration changed:", config);
            if (config.user && config.user.org_id && !config.org) {
                console.log("attempt to download org information, and store in config");
                this.connectService.getOrg(config.user.org_id).subscribe((org) => {
                    console.log("org:", org);
                    this.portalConfigService.config = { org: org };
                });
            }
        });
    }
    toggleHeaderMenu(event) {
        event.preventDefault();
        document.querySelector('body')?.classList.toggle('az-header-menu-show');
    }
    closeMenu(e) {
        e.target.closest('.dropdown')?.classList.remove('show');
        e.target.closest('.dropdown .dropdown-menu')?.classList.remove('show');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_1__.ConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_portal_config_service__WEBPACK_IMPORTED_MODULE_2__.PortalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 75, vars: 15, consts: [[1, "bg-danger", "text-white", "pd-5", 3, "hidden"], [1, "text-white", "float-right"], [1, "az-header"], [1, "container"], [1, "az-header-left"], ["routerLink", "/", 1, "az-logo"], ["href", "#", "id", "azMenuShow", 1, "az-header-menu-icon", "d-lg-none", 3, "click"], [1, "az-header-menu"], [1, "az-header-menu-header"], ["href", "#", 1, "close", 3, "click"], [1, "nav"], ["ngbDropdown", "", 1, "nav-item", 3, "ngClass"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link"], ["dashboard", "routerLinkActive"], [3, "icon"], ["routerLink", "/developers", "routerLinkActive", "active", 1, "nav-link"], ["developers", "routerLinkActive"], [1, "pd-l-20"], [1, "mg-l-10", "az-toggle", "az-toggle-danger", 3, "ngClass", "click"], [1, "az-header-right"], ["ngbDropdown", "", 1, "dropdown", "az-header-notification"], ["id", "notificationsDropdown", "ngbDropdownToggle", "", 1, "new"], [1, "far", "fa-sm", "fa-bell"], ["ngbDropdownMenu", "", "aria-labelledby", "notificationsDropdown", 1, "dropdown-menu"], [1, "az-dropdown-header", "mg-b-20", "d-sm-none"], [1, "az-header-arrow", 3, "click"], [1, "icon", "ion-md-arrow-back"], [1, "az-notification-title"], [1, "az-notification-text"], [1, "dropdown-footer"], ["routerLink", "/background-jobs"], ["ngbDropdown", "", 1, "dropdown", "az-profile-menu"], ["id", "profileDropdown", "ngbDropdownToggle", "", 1, "az-img-user"], [1, "fas", "fa-sm", "fa-cog"], ["ngbDropdownMenu", "", "aria-labelledby", "profileDropdown", 1, "dropdown-menu"], [1, "az-dropdown-header", "d-sm-none"], [1, "az-header-profile", "cursor-pointer", 3, "routerLink"], [1, "az-img-user"], ["src", "assets/logo/logo-text.png", "alt", ""], [1, "dropdown-item", "cursor-pointer"], [1, "fas", "fa-user-circle", 2, "font-size", "medium"], [1, "fas", "fa-hospital", 2, "font-size", "medium"], [1, "fas", "fa-life-ring", 2, "font-size", "medium"], [1, "fas", "fa-power-off", 2, "font-size", "medium"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Test Mode Enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "You're using test data. You will only be able to access sandbox accounts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " fasten");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener($event) { return ctx.toggleHeaderMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7)(14, "div", 8)(15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " fasten");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener($event) { return ctx.toggleHeaderMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ul", 10)(21, "li", 11)(22, "a", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\u00A0 Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li", 11)(27, "a", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\u00A0 Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "li", 17)(32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_32_listener() { return ctx.portalConfigService.toggleApiMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 19)(35, "div", 20)(36, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 23)(39, "div", 24)(40, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_40_listener($event) { return ctx.closeMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "h6", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Background Jobs & Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 29)(47, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "View History");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 31)(50, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 34)(53, "div", 35)(54, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_54_listener($event) { return ctx.closeMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 36)(57, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Test Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Adminstrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " Profile Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, " Org Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " Get Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.portalConfigService.config$.apiMode == "live");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, _r0 == null ? null : _r0.isActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, _r1 == null ? null : _r1.isActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx.portalConfigService.config$.apiMode == "test"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/patient-profile");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent], styles: [".az-toggle-danger.on[_ngcontent-%COMP%] {\n  background-color: #dc3545 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF6LXRvZ2dsZS1kYW5nZXIub24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 7993:
/*!*******************************************************************!*\
  !*** ./src/app/components/logo-cropper/logo-cropper.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoCropperComponent": () => (/* binding */ LogoCropperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-image-cropper */ 649);




class LogoCropperComponent {
    constructor(activeModal, modalService, sanitizer) {
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        //image cropper
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.submitLogoLoading = false;
    }
    ngOnInit() {
    }
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
    }
    imageCropped(event) {
        this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl);
        // event.blob can be used to upload the cropped image
    }
    imageLoaded(image) {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    onSubmit() {
        console.log(this.croppedImage);
        this.activeModal.close(this.croppedImage);
    }
}
LogoCropperComponent.ɵfac = function LogoCropperComponent_Factory(t) { return new (t || LogoCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer)); };
LogoCropperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoCropperComponent, selectors: [["app-logo-cropper"]], decls: 18, vars: 4, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-12"], ["type", "file", "accept", ".png,.jpeg,.jpg", 3, "change"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-indigo", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function LogoCropperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Organization Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoCropperComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fasten Connect requires a logo for display when connecting providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LogoCropperComponent_Template_input_change_11_listener($event) { return ctx.fileChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "image-cropper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function LogoCropperComponent_Template_image_cropper_imageCropped_12_listener($event) { return ctx.imageCropped($event); })("imageLoaded", function LogoCropperComponent_Template_image_cropper_imageLoaded_12_listener($event) { return ctx.imageLoaded($event); })("cropperReady", function LogoCropperComponent_Template_image_cropper_cropperReady_12_listener() { return ctx.cropperReady(); })("loadImageFailed", function LogoCropperComponent_Template_image_cropper_loadImageFailed_12_listener() { return ctx.loadImageFailed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoCropperComponent_Template_button_click_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Save Logo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoCropperComponent_Template_button_click_16_listener() { return ctx.activeModal.dismiss("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChangedEvent", ctx.imageChangedEvent)("maintainAspectRatio", true)("aspectRatio", 1 / 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submitLogoLoading);
    } }, dependencies: [ngx_image_cropper__WEBPACK_IMPORTED_MODULE_3__.ImageCropperComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLWNyb3BwZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6465:
/*!********************************************************************!*\
  !*** ./src/app/directives/password-confirm-validator.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordConfirmValidatorDirective": () => (/* binding */ PasswordConfirmValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class PasswordConfirmValidatorDirective {
    validate(control) {
        const password = control.get('password');
        const passwordConfirm = control.get('password_confirm');
        return password && passwordConfirm && password.value !== passwordConfirm.value
            ? { password_confirm: true }
            : null;
    }
}
PasswordConfirmValidatorDirective.ɵfac = function PasswordConfirmValidatorDirective_Factory(t) { return new (t || PasswordConfirmValidatorDirective)(); };
PasswordConfirmValidatorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PasswordConfirmValidatorDirective, selectors: [["", "passwordConfirmValidator", ""]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
                useExisting: PasswordConfirmValidatorDirective,
                multi: true,
            },
        ])] });


/***/ }),

/***/ 1306:
/*!***********************************************!*\
  !*** ./src/app/models/fasten/organization.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Organization": () => (/* binding */ Organization)
/* harmony export */ });
class Organization {
    constructor() {
        this.id = "";
        this.name = "";
        this.logo_uri = "";
        this.privacy_policy_uri = "";
        this.website_uri = "";
        this.terms_and_conditions_uri = "";
        this.company_size = "";
        this.plan = "";
    }
}


/***/ }),

/***/ 8821:
/*!***************************************!*\
  !*** ./src/app/models/fasten/user.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor() {
        //not sent to the server
        this.password_confirm = "";
        this.agree_terms = false;
    }
}


/***/ }),

/***/ 4158:
/*!*****************************************!*\
  !*** ./src/app/models/portal-config.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "portalConfigDefaults": () => (/* binding */ portalConfigDefaults)
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.constants */ 2976);
/**
 * AppConfig interface. Update this interface to strictly type your config
 * object.
 */

/**
 * Default configuration for the entire application. This object is used by
 * "PortalConfigService" to set the default configuration.
 */
const portalConfigDefaults = {
    apiMode: _app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Test
};


/***/ }),

/***/ 2771:
/*!************************************************************!*\
  !*** ./src/app/pages/auth-signin/auth-signin.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSigninComponent": () => (/* binding */ AuthSigninComponent)
/* harmony export */ });
/* harmony import */ var _models_fasten_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/fasten/user */ 8821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);







function AuthSigninComponent_h4_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please sign in to continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AuthSigninComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AuthSigninComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AuthSigninComponent_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email must be a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AuthSigninComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AuthSigninComponent_div_15_div_1_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AuthSigninComponent_div_15_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AuthSigninComponent_div_15_div_3_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors["email"]);
} }
function AuthSigninComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AuthSigninComponent_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must be at least 8 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AuthSigninComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AuthSigninComponent_div_21_div_1_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AuthSigninComponent_div_21_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
} }
function AuthSigninComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.errorMsg, " ");
} }
const _c0 = function () { return { "height": "560px" }; };
class AuthSigninComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.existingUser = new _models_fasten_user__WEBPACK_IMPORTED_MODULE_0__.User();
        this.errorMsg = "";
    }
    ngOnInit() { }
    signinSubmit() {
        this.submitted = true;
        this.loading = true;
        this.authService.Signin(this.existingUser.email, this.existingUser.password)
            .then(() => {
            this.loading = false;
            this.router.navigateByUrl('/dashboard');
        })
            .catch((err) => {
            this.loading = false;
            if (err?.name) {
                this.errorMsg = "email or password is incorrect";
            }
            else {
                this.errorMsg = "an unknown error occurred during sign-in";
            }
            // const toastNotification = new ToastNotification()
            // toastNotification.type = ToastType.Error
            // toastNotification.message = this.errorMsg
            // this.toastService.show(toastNotification)
        });
    }
}
AuthSigninComponent.ɵfac = function AuthSigninComponent_Factory(t) { return new (t || AuthSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthSigninComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthSigninComponent, selectors: [["app-auth-signin"]], decls: 33, vars: 9, consts: [[1, "az-signin-wrapper"], [1, "az-card-signin", 3, "ngStyle"], [1, "az-logo"], [1, "az-signin-header"], [4, "ngIf"], [3, "ngSubmit"], ["userForm", "ngForm"], [1, "form-group"], ["name", "email", "required", "", "email", "", "minlength", "4", "type", "text", "placeholder", "Enter your username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["name", "password", "required", "", "minlength", "8", "type", "password", "placeholder", "Enter your password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "submit", 1, "btn", "btn-az-primary", "btn-block", 3, "disabled"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], [1, "az-signin-footer"], ["ngbTooltip", "not yet implemented"], ["routerLink", "/auth/signup"], [1, "alert", "alert-danger"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"]], template: function AuthSigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "fasten");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AuthSigninComponent_h4_7_Template, 2, 0, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AuthSigninComponent_Template_form_ngSubmit_8_listener() { return ctx.signinSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AuthSigninComponent_Template_input_ngModelChange_13_listener($event) { return ctx.existingUser.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AuthSigninComponent_div_15_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AuthSigninComponent_Template_input_ngModelChange_19_listener($event) { return ctx.existingUser.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AuthSigninComponent_div_21_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AuthSigninComponent_div_24_Template, 4, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15)(26, "p")(27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Create an Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.existingUser.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.invalid && (_r2.dirty || _r2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.existingUser.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r1.form.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMsg);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXNpZ25pbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3515:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/auth-signup-organization/auth-signup-organization.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignupOrganizationComponent": () => (/* binding */ AuthSignupOrganizationComponent)
/* harmony export */ });
/* harmony import */ var _models_fasten_organization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/fasten/organization */ 1306);
/* harmony import */ var _components_logo_cropper_logo_cropper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/logo-cropper/logo-cropper.component */ 7993);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/connect.service */ 4543);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);









function AuthSignupOrganizationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const img_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "https://cdn.fastenhealth.com/logos/sources/", img_r13, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function AuthSignupOrganizationComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Organization Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Organization Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupOrganizationComponent_div_19_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AuthSignupOrganizationComponent_div_19_div_2_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors["minlength"]);
} }
function AuthSignupOrganizationComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Website is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Website must be a valid url. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupOrganizationComponent_div_23_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AuthSignupOrganizationComponent_div_23_div_2_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["pattern"]);
} }
function AuthSignupOrganizationComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Privacy Policy Url is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Privacy Policy must be a valid url. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupOrganizationComponent_div_27_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AuthSignupOrganizationComponent_div_27_div_2_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["pattern"]);
} }
function AuthSignupOrganizationComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Terms & Conditions must be a valid url. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupOrganizationComponent_div_31_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["pattern"]);
} }
function AuthSignupOrganizationComponent_div_49_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Company Size is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupOrganizationComponent_div_49_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["required"]);
} }
function AuthSignupOrganizationComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r12.errorMsg, " ");
} }
class AuthSignupOrganizationComponent {
    constructor(connectService, router, modalService) {
        this.connectService = connectService;
        this.router = router;
        this.modalService = modalService;
        this.gridImages = [
            "f8f9ce28-d79b-4b54-9f7d-3f0aaba88c2c.png",
            "89bb6993-b806-49a2-84e2-6e70705c504a.png",
            "9fcc4529-7dc9-4c66-9198-574f978c8bb7.png",
            "68952002-f17e-4086-aae5-841241b194dd.png",
            "767b97b9-4538-433f-ab7a-14ccb0053323.png",
            "74078880-4084-430e-bc6c-223e5990cef8.png",
            "10668246-1077-4c1d-a6ce-0557c9476e77.png",
            "f7e4fc08-c6f6-426b-be98-d60aa36d3b8b.png",
            "65308856-beaa-46a0-9775-20c6c9322add.png",
            "6e901e85-8f45-4c60-8d1f-12621aad07f1.png",
            "e675376d-03de-4e66-8196-eaccda536ad5.png",
            "a36fd256-2751-464f-b6d7-418279595b1e.png",
            "c623f37e-6399-4a13-909f-3d9886130673.png",
            "467592a3-7f5f-4258-909e-a99ca971ce15.png",
            "5ad8a5ab-6570-4f1e-8002-30a051ec52c2.png",
            "ddbef50d-3940-4411-9dea-6bf759704c6e.png",
            "fc2dcde0-0848-4b09-aeaf-bfef58120de9.png",
            "347c0df7-5817-470e-8b28-2802f90461f6.png",
            "ec5bc181-5466-4ebd-9e42-471593b8d104.png",
            "d3b1eba5-ec53-4e6d-9600-9510afbc4dda.png",
            "16483fad-5c24-4766-ad53-bd78551f0768.png",
            "ae8026ed-e74b-4bf3-9f53-458c250420ba.png",
            "907d39f4-6b30-46cd-b0c8-f525c636c933.png",
            "6b076b97-18f7-452d-9f09-20dffb01729f.png",
            "c7feccc5-ad10-4aeb-91b0-12b6b93feeba.png",
            "c66a7c1e-21f2-44aa-9486-cdfb5ad699ba.png",
            "82af2366-1d27-4665-ba99-e5a60a75205a.png",
            "2289e832-64da-47d9-82ef-1f4e15ccf627.png",
            "26768525-2b04-4715-9159-3679598289a3.png",
            "80af4067-77e9-4c13-b617-4f370dc14d3f.png",
            "ec6c5f06-d7f8-4eac-8e2f-6cda4536d8ab.png",
            "93ee1d70-6eaa-487b-84d1-cc18bcda253f.png",
            "6d5ba4db-4b63-4277-bb80-dc278dbe28bd.png",
            "b22e4e71-1121-4fca-b158-efbb906918e9.png",
            "49fd46d0-05ce-4c7d-923c-3891935f6947.png",
            "19652f82-98b9-44e6-9964-e426192a723d.png",
            "314a06fc-4efc-4e34-8048-565455e4f3e1.png",
            "8123cfc7-53b6-45d6-ace3-b64d4bd3234b.png",
            "35159b16-a1b5-45ba-9d4f-83f471d5f44b.png",
            "d6c0016f-aaec-4764-ac28-7a6eda64b693.png",
            "d09c7811-213b-4c19-9154-48e57174f239.png",
            "2bcdcc4c-0f13-4edb-85f4-2c9f4f948df0.png",
            "4a4720a0-0efc-4b63-a83d-a8cc5b1c15ad.png",
            "98f680b2-15c4-4854-902b-ed6b69425164.png",
            "32283b0a-3c36-4f92-b9c2-dd2edf3a3db1.png",
            "d56e9e82-3f62-4ce8-8a55-27da90fbe183.png",
            "4fc37973-195c-4e25-8751-331a3b88e685.png",
            "fb0bb8fa-8336-4b26-bdc5-7f8a432c1d94.png",
            "7ca2d9d1-d300-479d-ab85-f956b6ef60de.png",
            "4fd8bb55-bb2d-4748-a134-bbab7a22e4db.png",
            "63cde119-f9d8-468d-900a-1976211739f8.png",
            "e8290a84-88a1-4eac-a5b4-b2c63146b2c9.png",
            "13b592f9-5c8b-4f90-aa54-5ab57a29ea89.png",
            "0398ce8e-9200-430c-a654-f2057bc9a2d4.png",
            "92b1d310-99a1-4de2-99b6-975eaf5a3744.png",
            "418d563f-bd82-473f-a738-cd9775db4e56.png",
            "8fb52893-1e93-4fea-adba-838e9b42e4d2.png",
            "acec8466-8b0a-4adc-9929-561b7136fccb.png",
            "3d01addb-1103-49ca-9c74-3027112e4aa8.png",
            "5f5973bf-d11c-4f99-9b86-b1303cea3503.png",
            "1317665c-e5c4-48b8-b3a5-2a90aa0283d7.png",
            "48f2153e-6f4a-4da5-99a5-775a888c218a.png",
            "34451b52-0f65-4e1a-91aa-5f2b1420f4b7.png",
            "d3a10e7c-63c1-4309-b801-e42ce6e575d5.png",
            "4c74937f-c30d-49c8-993e-c5a133f92414.png",
            "5c4c748f-acd5-4fc8-b6cd-a37f629709fb.png",
            "0293e1f1-291e-48ad-a5d0-cc7fcb062603.png",
            "407f63d2-8fc7-42dd-9a46-23c76693789b.png",
            "6d5de058-cc60-4f07-89db-bcc6817bb115.png",
            "a1c9be32-3539-4390-bf01-828d5fb9f57d.png",
            "562c8d0a-e524-49d7-81c2-70b34b4b9a15.png",
            "8023b832-eaca-414a-9a53-c2fe423087d2.png",
            "e8e73128-7722-4514-9684-1c17d43d880e.png",
            "24cb81a7-dd2b-4b07-808b-f6611fea0393.png",
            "5266bc57-58db-4171-8d73-a2a40ff380d2.png",
            "9752c0a1-49f5-4842-8554-bfa3a6a3c3b4.png",
            "df4a6dd3-672f-4547-8ade-609df28dcda9.png",
            "921bb517-fdc9-4ca2-b9fc-a9e17e6cb8fc.png",
            "e3f229a1-8637-49b1-abaa-84d228aff34a.png",
            "53f22687-4635-4bff-99e2-2eacdc402359.png",
            "c7fe32b2-97c6-45f7-90f8-47213c9b85f1.png",
            "a7a87c72-1d8a-42d6-b0a4-c72b7dd8933a.png",
            "2630415e-1871-437a-84de-52ad7ce88f3e.png",
            "b53ff282-4725-45f7-a436-89f77320f062.png",
        ];
        this.loading = false;
        this.urlPattern = _app_constants__WEBPACK_IMPORTED_MODULE_2__.URL_PATTERN;
        this.submitted = false;
        this.newOrg = new _models_fasten_organization__WEBPACK_IMPORTED_MODULE_0__.Organization();
        this.errorMsg = "";
        this.croppedImage = '';
    }
    ngOnInit() {
    }
    signupOrgSubmit() {
        this.loading = true;
        this.submitted = true;
        this.newOrg.logo_uri = "https://example.com"; //TODO: placeholder logo url.
        console.log("starting signup process...", this.newOrg);
        this.connectService.createOrg(this.newOrg).subscribe((resp) => {
            console.log("Organization Created", resp);
            this.router.navigate(['/dashboard']);
        }, (err) => {
            console.error("Error creating Organization", err);
            this.errorMsg = err.error.message;
            this.loading = false;
        });
    }
    openLogoCropper() {
        this.modalService.open(_components_logo_cropper_logo_cropper_component__WEBPACK_IMPORTED_MODULE_1__.LogoCropperComponent).result.then((result) => {
            this.croppedImage = result;
        }, (reason) => {
            console.log(`Dismissed`, reason);
        });
    }
}
AuthSignupOrganizationComponent.ɵfac = function AuthSignupOrganizationComponent_Factory(t) { return new (t || AuthSignupOrganizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal)); };
AuthSignupOrganizationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AuthSignupOrganizationComponent, selectors: [["app-auth-signup-organization"]], decls: 53, vars: 17, consts: [[1, "row", 2, "overflow", "hidden", "height", "95vh"], ["class", "col-1 nopadding", 4, "ngFor", "ngForOf"], [1, "floating-signup", "outer-div"], [1, "inner-div"], [1, "az-signin-wrapper"], [1, "az-card-signin"], [1, "az-logo"], [1, "az-signin-header"], ["height", "150px", 1, "cursor-pointer", "mx-auto", "d-block", 3, "src", "click"], [3, "ngSubmit"], ["orgForm", "ngForm"], [1, "form-group"], ["name", "name", "required", "", "minlength", "2", "type", "text", "placeholder", "Organization Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["name", "website_uri", "required", "", "autocapitalize", "none", "placeholder", "Website", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["website_uri", "ngModel"], ["name", "privacy_policy_uri", "required", "", "placeholder", "Privacy Policy Url", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["privacy_policy_uri", "ngModel"], ["name", "terms_and_conditions_uri", "placeholder", "Terms & Conditions Url", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["terms_and_conditions_uri", "ngModel"], ["name", "company_size", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["company_size", "ngModel"], ["value", "", "disabled", "", "selected", ""], ["value", "1_10"], ["value", "10_100"], ["value", "100_500"], ["value", "500_2000"], ["value", "2000_5000"], ["value", "5000_plus"], ["type", "submit", 1, "btn", "btn-az-primary", "btn-block", 3, "disabled"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], [1, "col-1", "nopadding"], [1, "d-flex", "h-100"], [1, "mx-auto", "my-auto"], [1, "rounded", "img-fluid", "opacity-20", 3, "src"], [1, "alert", "alert-danger"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"]], template: function AuthSignupOrganizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupOrganizationComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "fasten");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Let's Get Started!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Tell us about your Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuthSignupOrganizationComponent_Template_img_click_13_listener() { return ctx.openLogoCropper(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AuthSignupOrganizationComponent_Template_form_ngSubmit_14_listener() { return ctx.signupOrgSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11)(17, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupOrganizationComponent_Template_input_ngModelChange_17_listener($event) { return ctx.newOrg.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, AuthSignupOrganizationComponent_div_19_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 11)(21, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupOrganizationComponent_Template_input_ngModelChange_21_listener($event) { return ctx.newOrg.website_uri = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, AuthSignupOrganizationComponent_div_23_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 11)(25, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupOrganizationComponent_Template_input_ngModelChange_25_listener($event) { return ctx.newOrg.privacy_policy_uri = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, AuthSignupOrganizationComponent_div_27_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 11)(29, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupOrganizationComponent_Template_input_ngModelChange_29_listener($event) { return ctx.newOrg.terms_and_conditions_uri = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, AuthSignupOrganizationComponent_div_31_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 11)(33, "select", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupOrganizationComponent_Template_select_ngModelChange_33_listener($event) { return ctx.newOrg.company_size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Company Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "1-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "11-100");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "101-500");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "501-2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "2001-5000");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "5000+");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, AuthSignupOrganizationComponent_div_49_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Save Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, AuthSignupOrganizationComponent_div_52_Template, 4, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](30);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.gridImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.croppedImage || "assets/images/missing_logo.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newOrg.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.invalid && (_r2.dirty || _r2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newOrg.website_uri)("pattern", ctx.urlPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newOrg.privacy_policy_uri)("pattern", ctx.urlPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newOrg.terms_and_conditions_uri)("pattern", ctx.urlPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newOrg.company_size);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r10.invalid && (_r10.dirty || _r10.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r1.form.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMsg);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], styles: [".circle[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #00d53b;\n  margin: 10px;\n  border-radius: 50%;\n}\n\n.circle-inner[_ngcontent-%COMP%] {\n  color: white;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  height: 100px;\n  width: 100px;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtc2lnbnVwLW9yZ2FuaXphdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImF1dGgtc2lnbnVwLW9yZ2FuaXphdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGQ1M2I7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2lyY2xlLWlubmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 9502:
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth-signup-plan/auth-signup-plan.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignupPlanComponent": () => (/* binding */ AuthSignupPlanComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AuthSignupPlanComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthSignupPlanComponent.ɵfac = function AuthSignupPlanComponent_Factory(t) { return new (t || AuthSignupPlanComponent)(); };
AuthSignupPlanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthSignupPlanComponent, selectors: [["app-auth-signup-plan"]], decls: 2, vars: 0, template: function AuthSignupPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "auth-signup-plan works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXNpZ251cC1wbGFuLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2862:
/*!************************************************************!*\
  !*** ./src/app/pages/auth-signup/auth-signup.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignupComponent": () => (/* binding */ AuthSignupComponent)
/* harmony export */ });
/* harmony import */ var _models_fasten_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/fasten/user */ 8821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _directives_password_confirm_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/password-confirm-validator.directive */ 6465);







function AuthSignupComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const img_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "https://cdn.fastenhealth.com/logos/sources/", img_r13, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function AuthSignupComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuthSignupComponent_div_18_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AuthSignupComponent_div_18_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors["minlength"]);
} }
function AuthSignupComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_22_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email must be a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuthSignupComponent_div_22_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AuthSignupComponent_div_22_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AuthSignupComponent_div_22_div_3_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["email"]);
} }
function AuthSignupComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password must be at least 8 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuthSignupComponent_div_26_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AuthSignupComponent_div_26_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["minlength"]);
} }
function AuthSignupComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password confirmation does not match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuthSignupComponent_div_30_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["password_confirm"]);
} }
function AuthSignupComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " You must agree to the Privacy Policy and Terms of Use. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuthSignupComponent_div_42_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["required"]);
} }
function AuthSignupComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r12.errorMsg, " ");
} }
class AuthSignupComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.gridImages = [
            "f8f9ce28-d79b-4b54-9f7d-3f0aaba88c2c.png",
            "89bb6993-b806-49a2-84e2-6e70705c504a.png",
            "9fcc4529-7dc9-4c66-9198-574f978c8bb7.png",
            "68952002-f17e-4086-aae5-841241b194dd.png",
            "767b97b9-4538-433f-ab7a-14ccb0053323.png",
            "74078880-4084-430e-bc6c-223e5990cef8.png",
            "10668246-1077-4c1d-a6ce-0557c9476e77.png",
            "f7e4fc08-c6f6-426b-be98-d60aa36d3b8b.png",
            "65308856-beaa-46a0-9775-20c6c9322add.png",
            "6e901e85-8f45-4c60-8d1f-12621aad07f1.png",
            "e675376d-03de-4e66-8196-eaccda536ad5.png",
            "a36fd256-2751-464f-b6d7-418279595b1e.png",
            "c623f37e-6399-4a13-909f-3d9886130673.png",
            "467592a3-7f5f-4258-909e-a99ca971ce15.png",
            "5ad8a5ab-6570-4f1e-8002-30a051ec52c2.png",
            "ddbef50d-3940-4411-9dea-6bf759704c6e.png",
            "fc2dcde0-0848-4b09-aeaf-bfef58120de9.png",
            "347c0df7-5817-470e-8b28-2802f90461f6.png",
            "ec5bc181-5466-4ebd-9e42-471593b8d104.png",
            "d3b1eba5-ec53-4e6d-9600-9510afbc4dda.png",
            "16483fad-5c24-4766-ad53-bd78551f0768.png",
            "ae8026ed-e74b-4bf3-9f53-458c250420ba.png",
            "907d39f4-6b30-46cd-b0c8-f525c636c933.png",
            "6b076b97-18f7-452d-9f09-20dffb01729f.png",
            "c7feccc5-ad10-4aeb-91b0-12b6b93feeba.png",
            "c66a7c1e-21f2-44aa-9486-cdfb5ad699ba.png",
            "82af2366-1d27-4665-ba99-e5a60a75205a.png",
            "2289e832-64da-47d9-82ef-1f4e15ccf627.png",
            "26768525-2b04-4715-9159-3679598289a3.png",
            "80af4067-77e9-4c13-b617-4f370dc14d3f.png",
            "ec6c5f06-d7f8-4eac-8e2f-6cda4536d8ab.png",
            "93ee1d70-6eaa-487b-84d1-cc18bcda253f.png",
            "6d5ba4db-4b63-4277-bb80-dc278dbe28bd.png",
            "b22e4e71-1121-4fca-b158-efbb906918e9.png",
            "49fd46d0-05ce-4c7d-923c-3891935f6947.png",
            "19652f82-98b9-44e6-9964-e426192a723d.png",
            "314a06fc-4efc-4e34-8048-565455e4f3e1.png",
            "8123cfc7-53b6-45d6-ace3-b64d4bd3234b.png",
            "35159b16-a1b5-45ba-9d4f-83f471d5f44b.png",
            "d6c0016f-aaec-4764-ac28-7a6eda64b693.png",
            "d09c7811-213b-4c19-9154-48e57174f239.png",
            "2bcdcc4c-0f13-4edb-85f4-2c9f4f948df0.png",
            "4a4720a0-0efc-4b63-a83d-a8cc5b1c15ad.png",
            "98f680b2-15c4-4854-902b-ed6b69425164.png",
            "32283b0a-3c36-4f92-b9c2-dd2edf3a3db1.png",
            "d56e9e82-3f62-4ce8-8a55-27da90fbe183.png",
            "4fc37973-195c-4e25-8751-331a3b88e685.png",
            "fb0bb8fa-8336-4b26-bdc5-7f8a432c1d94.png",
            "7ca2d9d1-d300-479d-ab85-f956b6ef60de.png",
            "4fd8bb55-bb2d-4748-a134-bbab7a22e4db.png",
            "63cde119-f9d8-468d-900a-1976211739f8.png",
            "e8290a84-88a1-4eac-a5b4-b2c63146b2c9.png",
            "13b592f9-5c8b-4f90-aa54-5ab57a29ea89.png",
            "0398ce8e-9200-430c-a654-f2057bc9a2d4.png",
            "92b1d310-99a1-4de2-99b6-975eaf5a3744.png",
            "418d563f-bd82-473f-a738-cd9775db4e56.png",
            "8fb52893-1e93-4fea-adba-838e9b42e4d2.png",
            "acec8466-8b0a-4adc-9929-561b7136fccb.png",
            "3d01addb-1103-49ca-9c74-3027112e4aa8.png",
            "5f5973bf-d11c-4f99-9b86-b1303cea3503.png",
            "1317665c-e5c4-48b8-b3a5-2a90aa0283d7.png",
            "48f2153e-6f4a-4da5-99a5-775a888c218a.png",
            "34451b52-0f65-4e1a-91aa-5f2b1420f4b7.png",
            "d3a10e7c-63c1-4309-b801-e42ce6e575d5.png",
            "4c74937f-c30d-49c8-993e-c5a133f92414.png",
            "5c4c748f-acd5-4fc8-b6cd-a37f629709fb.png",
            "0293e1f1-291e-48ad-a5d0-cc7fcb062603.png",
            "407f63d2-8fc7-42dd-9a46-23c76693789b.png",
            "6d5de058-cc60-4f07-89db-bcc6817bb115.png",
            "a1c9be32-3539-4390-bf01-828d5fb9f57d.png",
            "562c8d0a-e524-49d7-81c2-70b34b4b9a15.png",
            "8023b832-eaca-414a-9a53-c2fe423087d2.png",
            "e8e73128-7722-4514-9684-1c17d43d880e.png",
            "24cb81a7-dd2b-4b07-808b-f6611fea0393.png",
            "5266bc57-58db-4171-8d73-a2a40ff380d2.png",
            "9752c0a1-49f5-4842-8554-bfa3a6a3c3b4.png",
            "df4a6dd3-672f-4547-8ade-609df28dcda9.png",
            "921bb517-fdc9-4ca2-b9fc-a9e17e6cb8fc.png",
            "e3f229a1-8637-49b1-abaa-84d228aff34a.png",
            "53f22687-4635-4bff-99e2-2eacdc402359.png",
            "c7fe32b2-97c6-45f7-90f8-47213c9b85f1.png",
            "a7a87c72-1d8a-42d6-b0a4-c72b7dd8933a.png",
            "2630415e-1871-437a-84de-52ad7ce88f3e.png",
            "b53ff282-4725-45f7-a436-89f77320f062.png",
        ];
        this.loading = false;
        this.submitted = false;
        this.newUser = new _models_fasten_user__WEBPACK_IMPORTED_MODULE_0__.User();
        this.errorMsg = "";
    }
    ngOnInit() {
    }
    signupSubmit() {
        this.loading = true;
        this.submitted = true;
        this.authService.Signup(this.newUser).then((tokenResp) => {
            this.loading = false;
            console.log(tokenResp);
            //after creating a user, proceed to create an organization
            this.router.navigateByUrl('/auth/signup/org');
        }, (err) => {
            this.loading = false;
            console.error("an error occured while signup", err);
            if (err.name === 'conflict') {
                // "batman" already exists, choose another username
                this.errorMsg = "username already exists";
            }
            else if (err.name === 'forbidden') {
                // invalid username
                this.errorMsg = "invalid username";
            }
            else {
                this.errorMsg = "an unknown error occurred during sign-up";
            }
            // TODO:
            // const toastNotificaiton = new ToastNotification()
            // toastNotificaiton.type = ToastType.Error
            // toastNotificaiton.message = this.errorMsg
            // this.toastService.show(toastNotificaiton)
        });
    }
}
AuthSignupComponent.ɵfac = function AuthSignupComponent_Factory(t) { return new (t || AuthSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthSignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AuthSignupComponent, selectors: [["app-auth-signup"]], decls: 46, vars: 13, consts: [[1, "row", 2, "overflow", "hidden", "height", "95vh"], ["class", "col-1 nopadding", 4, "ngFor", "ngForOf"], [1, "floating-signup", "outer-div"], [1, "inner-div"], [1, "az-signin-wrapper"], [1, "az-card-signin"], [1, "az-logo"], [1, "az-signin-header"], ["passwordConfirmValidator", "", 3, "ngSubmit"], ["userForm", "ngForm"], [1, "form-group"], ["name", "name", "required", "", "minlength", "2", "type", "text", "placeholder", "First Name & Last Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["name", "email", "required", "", "email", "", "minlength", "4", "type", "email", "autocapitalize", "none", "placeholder", "Email Address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["name", "password", "required", "", "minlength", "8", "type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["name", "password_confirm", "required", "", "type", "password", "placeholder", "Confirm Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password_confirm", "ngModel"], [1, "form-group", "form-check"], ["name", "agree_terms", "type", "checkbox", "id", "agreeTermsCheck", "required", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["agree_terms", "ngModel"], ["for", "agreeTermsCheck", 1, "form-check-label"], ["href", "https://policy.fastenhealth.com/privacy_policy.html"], ["href", "https://policy.fastenhealth.com/terms.html"], ["type", "submit", 1, "btn", "btn-az-primary", "btn-block", 3, "disabled"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], [1, "col-1", "nopadding"], [1, "d-flex", "h-100"], [1, "mx-auto", "my-auto"], [1, "rounded", "img-fluid", "opacity-20", 3, "src"], [1, "alert", "alert-danger"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"]], template: function AuthSignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuthSignupComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "fasten");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Let's Get Started!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Create your Fasten Connect account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AuthSignupComponent_Template_form_ngSubmit_13_listener() { return ctx.signupSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AuthSignupComponent_Template_input_ngModelChange_16_listener($event) { return ctx.newUser.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AuthSignupComponent_div_18_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 10)(20, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AuthSignupComponent_Template_input_ngModelChange_20_listener($event) { return ctx.newUser.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, AuthSignupComponent_div_22_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 10)(24, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AuthSignupComponent_Template_input_ngModelChange_24_listener($event) { return ctx.newUser.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AuthSignupComponent_div_26_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 10)(28, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AuthSignupComponent_Template_input_ngModelChange_28_listener($event) { return ctx.newUser.password_confirm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AuthSignupComponent_div_30_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 20)(32, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AuthSignupComponent_Template_input_ngModelChange_32_listener($event) { return ctx.newUser.agree_terms = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " I have read and agree to the Fasten Connect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, AuthSignupComponent_div_42_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, AuthSignupComponent_div_45_Template, 4, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](25);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.gridImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newUser.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.invalid && (_r2.dirty || _r2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newUser.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newUser.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newUser.password_confirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors["password_confirm"]) && (_r8.dirty || _r8.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newUser.agree_terms);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r10.invalid && (_r10.dirty || _r10.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r1.form.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMsg);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxRequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _directives_password_confirm_validator_directive__WEBPACK_IMPORTED_MODULE_2__.PasswordConfirmValidatorDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXNpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ 1208);


class DashboardComponent {
    constructor() {
        this.bounceRateChartData = [{
                label: 'This week',
                data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, 27.9, 28.4, 25.4, 23.2, 18.2, 14, 12.7, 11, 13.7, 9.7, 12.6, 10.9, 12.7, 13.8, 12.9, 13.8, 10.2, 5.8, 7.6, 8.8, 5.6, 5.6, 6.3, 4.2, 3.6, 5.4, 6.5, 8.1, 10.9, 7.6, 9.7, 10.9, 9.5, 5.4, 4.9, .7, 2.3, 5.5, 10, 10.6, 8.3, 8.4, 8.5, 5.8],
                borderWidth: 2,
                fill: true
            }];
        this.bounceRateChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51'];
        this.bounceRateChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    display: false,
                    gridLines: {
                        drawBorder: false,
                        display: true,
                        drawTicks: false,
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                        min: 0,
                        max: 40,
                        stepSize: 10,
                    }
                },
                x: {
                    display: false,
                    position: 'bottom',
                    gridLines: {
                        drawBorder: false,
                        display: false,
                        drawTicks: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 10,
                        fontColor: "#a7afb7",
                        padding: 10,
                    }
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0
                }
            },
            tooltips: {
                backgroundColor: 'rgba(2, 171, 254, 1)',
            },
            backgroundColor: 'rgba(0, 204, 212, .2)',
            borderColor: 'rgb(0, 204, 212)',
        };
        //  Total users chart
        this.usersBarChartData = [{
                label: '# of Votes',
                data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, 27.9, 28.4, 25.4, 23.2, 18.2, 14, 12.7, 11, 13.7, 9.7, 12.6, 10.9, 12.7, 13.8],
                borderWidth: 1,
                fill: false
            }];
        this.usersBarChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
        this.usersBarChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    display: false,
                    ticks: {
                        display: false,
                    },
                    gridLines: {
                        drawBorder: false,
                        display: false
                    }
                },
                x: {
                    display: false,
                    barThickness: 5.5,
                    ticks: {
                        display: false,
                    },
                    gridLines: {
                        drawBorder: false,
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            backgroundColor: '#007bff',
            borderColor: '#007bff'
        };
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 194, vars: 8, consts: [[1, "az-content", "az-content-dashboard"], [1, "container"], [1, "az-content-body"], [1, "az-dashboard-one-title"], [1, "az-dashboard-title"], [1, "az-content-header-right"], [1, "media"], [1, "media-body"], [1, "row", "row-sm", "mg-b-20", "mg-lg-b-0"], [1, "col-lg-5", "col-xl-4"], [1, "row", "row-sm"], [1, "col-md-6", "col-lg-12", "mg-b-20", "mg-md-b-0", "mg-lg-b-20"], [1, "col-sm-6"], [1, "card", "card-dashboard-two"], [1, "card-header"], [1, "icon", "ion-md-trending-up", "tx-success"], [1, "card-body"], [1, "bounce-rate-chart-wrapper"], ["baseChart", "", 3, "type", "datasets", "labels", "options"], [1, "col-sm-6", "mg-t-20", "mg-sm-t-0"], [1, "icon", "ion-md-trending-down", "tx-danger"], [1, "users-bar-chart-wrapper"], [1, "col-md-6", "col-lg-12"], [1, "card", "card-dashboard-five"], [1, "card-title"], [1, "card-text"], [1, "card-body", "row", "row-sm"], [1, "col-6", "d-sm-flex", "align-items-center"], [1, "card-chart", "bg-primary"], ["data-peity", "{\"fill\": [\"#fff\"], \"width\": 20, \"height\": 20 }", 1, "peity-bar", 2, "display", "none"], ["height", "20", "width", "20", 1, "peity"], ["data-value", "6", "fill", "#fff", "x", "0.4", "y", "2.8571428571428577", "width", "3.2", "height", "17.142857142857142"], ["data-value", "4", "fill", "#fff", "x", "4.4", "y", "8.571428571428573", "width", "3.1999999999999993", "height", "11.428571428571427"], ["data-value", "7", "fill", "#fff", "x", "8.4", "y", "0", "width", "3.1999999999999993", "height", "20"], ["data-value", "5", "fill", "#fff", "x", "12.4", "y", "5.7142857142857135", "width", "3.1999999999999993", "height", "14.285714285714286"], ["data-value", "7", "fill", "#fff", "x", "16.4", "y", "0", "width", "3.200000000000003", "height", "20"], [1, "card-chart", "bg-purple"], ["data-peity", "{\"fill\": [\"#fff\"], \"width\": 21, \"height\": 20 }", 1, "peity-bar", 2, "display", "none"], ["height", "20", "width", "21", 1, "peity"], ["data-value", "7", "fill", "#fff", "x", "0.42000000000000004", "y", "0", "width", "3.3600000000000003", "height", "20"], ["data-value", "4", "fill", "#fff", "x", "4.62", "y", "8.571428571428573", "width", "3.3599999999999994", "height", "11.428571428571427"], ["data-value", "5", "fill", "#fff", "x", "8.82", "y", "5.7142857142857135", "width", "3.3599999999999994", "height", "14.285714285714286"], ["data-value", "7", "fill", "#fff", "x", "13.020000000000001", "y", "0", "width", "3.3599999999999977", "height", "20"], ["data-value", "2", "fill", "#fff", "x", "17.22", "y", "14.285714285714286", "width", "3.360000000000003", "height", "5.7142857142857135"], [1, "col-lg-7", "col-xl-8", "mg-t-20", "mg-lg-t-0"], [1, "card", "card-table-one"], [1, "az-content-text", "mg-b-20"], [1, "table-responsive"], [1, "table"], [1, "wd-5p"], [1, "wd-45p"], ["src", "https://cdn.fastenhealth.com/logos/sources/e16b9952-8885-4905-b2e3-b0f04746ed5c.png", 2, "width", "2em"], ["src", "https://cdn.fastenhealth.com/logos/sources/41b42645-350f-475e-b21b-e7a1276fca4f.png", 2, "width", "2em"], ["src", "https://cdn.fastenhealth.com/logos/sources/a0c9ecff-a470-47b9-aa32-debfa2441005.png", 2, "width", "2em"], ["src", "https://cdn.fastenhealth.com/logos/sources/5863477c-a178-41fc-b9f4-c881f9e8dbca.png", 2, "width", "2em"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mar 24, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6)(15, "div", 7)(16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "div", 10)(23, "div", 11)(24, "div", 10)(25, "div", 12)(26, "div", 13)(27, "div", 14)(28, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "33.50% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "18.02%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "API Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16)(36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "canvas", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19)(39, "div", 13)(40, "div", 14)(41, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "86 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "0.86%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Webhooks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16)(49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "canvas", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22)(52, "div", 23)(53, "div", 14)(54, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Connections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Total number of authorized patient connections for this billing period.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26)(59, "div", 27)(60, "div", 28)(61, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "6,4,7,5,7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "rect", 31)(65, "rect", 32)(66, "rect", 33)(67, "rect", 34)(68, "rect", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div")(70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Unique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "33");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 27)(75, "div", 36)(76, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "7,4,5,7,2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "rect", 39)(80, "rect", 40)(81, "rect", 41)(82, "rect", 42)(83, "rect", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div")(85, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 44)(90, "div", 45)(91, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Authorized Connections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Recently connected healthcare insitutions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 47)(96, "table", 48)(97, "thead")(98, "tr")(99, "th", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Portal Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Synced Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Patient Auth ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tbody")(110, "tr")(111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td")(114, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Epic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td")(117, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "134");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " (1.51%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "6f3f3770-ad00-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr")(125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td")(128, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "eClincalWorks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td")(131, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "290");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " (3.30%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "ae5e7f40-4e7c-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "tr")(139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td")(142, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Medicare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td")(145, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "250");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " (3.00%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "b3af4ab6-9275-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "tr")(153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td")(156, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Epic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td")(159, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "216");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " (2.79%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "baccf6e8-f020-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tr")(167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td")(170, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Epic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td")(173, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "216");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " (2.79%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "61a193cc-33ed-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "tr")(181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td")(184, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "United Healthcare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td")(187, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "197");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " (2.12%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "6a79f333-9408-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("datasets", ctx.bounceRateChartData)("labels", ctx.bounceRateChartLabels)("options", ctx.bounceRateChartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "bar")("datasets", ctx.usersBarChartData)("labels", ctx.usersBarChartLabels)("options", ctx.usersBarChartOptions);
    } }, dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__.BaseChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 972:
/*!**********************************************************!*\
  !*** ./src/app/pages/developers/developers.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevelopersComponent": () => (/* binding */ DevelopersComponent)
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/connect.service */ 4543);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _services_portal_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/portal-config.service */ 2608);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-moment */ 728);








function DevelopersComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16, 17)(2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DevelopersComponent_div_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r4.hidden = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Credential Created!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Make sure to copy your Private Key now. You won\u2019t be able to see it again! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "strong", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Public Id:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "strong", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Private Key:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.newCredential.org_credential.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.newCredential.private_key);
} }
const _c0 = function (a0, a1) { return { "badge-success": a0, "badge-danger": a1 }; };
function DevelopersComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 14)(2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const cred_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c0, cred_r7.status === "active", cred_r7.status === "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cred_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cred_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cred_r7.private_key || "REDACTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 5, cred_r7.created_at, "LL"));
} }
function DevelopersComponent_ng_template_62_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Redirect Url is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DevelopersComponent_ng_template_62_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Redirect Url must be a valid url. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DevelopersComponent_ng_template_62_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DevelopersComponent_ng_template_62_div_18_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DevelopersComponent_ng_template_62_div_18_div_2_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r9.errors == null ? null : _r9.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r9.errors == null ? null : _r9.errors["pattern"]);
} }
function DevelopersComponent_ng_template_62_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r11.createOrgCredentialError, " ");
} }
function DevelopersComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Create Credential");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DevelopersComponent_ng_template_62_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const modal_r8 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r8.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 25)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Credentials you have generated that can be used to access the Fasten Connect API ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form")(10, "div", 26)(11, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Redirect Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 29)(16, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DevelopersComponent_ng_template_62_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.redirectUri = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DevelopersComponent_ng_template_62_div_18_Template, 3, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, DevelopersComponent_ng_template_62_div_19_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 33)(21, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DevelopersComponent_ng_template_62_Template_button_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const modal_r8 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.createOrgCredential(modal_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pattern", ctx_r3.urlPattern)("ngModel", ctx_r3.redirectUri);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.createOrgCredentialError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.createOrgCredentialLoading);
} }
class DevelopersComponent {
    constructor(connectService, modalService, portalConfig) {
        this.connectService = connectService;
        this.modalService = modalService;
        this.portalConfig = portalConfig;
        this.urlPattern = _app_constants__WEBPACK_IMPORTED_MODULE_0__.URL_PATTERN;
        this.orgCredentials = {
            [_app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Live]: [],
            [_app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Test]: [],
        };
        this.createOrgCredentialLoading = false;
        this.redirectUri = "";
        this.createOrgCredentialError = '';
        this.newCredential = null;
    }
    ngOnInit() {
        this.connectService.getOrgCredentials(this.portalConfig.config$.user?.org_id).subscribe((data) => {
            for (let cred of data) {
                this.orgCredentials[cred.api_mode].push(cred);
            }
        });
    }
    createOrgCredential(modal) {
        this.createOrgCredentialLoading = true;
        this.createOrgCredentialError = '';
        if (!this.portalConfig.config$.org?.id) {
            this.createOrgCredentialLoading = false;
            this.createOrgCredentialError = "Unknown Organization ID";
            return;
        }
        this.connectService.createOrgCredentials(this.portalConfig.config$.org.id, this.portalConfig.config$.apiMode, this.redirectUri).subscribe((result) => {
            console.log("Added Remote Dashboard", result);
            this.createOrgCredentialLoading = false;
            this.orgCredentials[result.org_credential.api_mode].push(result.org_credential);
            this.newCredential = result;
            modal.close(result);
        }, (error) => {
            console.log("Error Adding Org Credential", error);
            this.createOrgCredentialLoading = false;
            this.createOrgCredentialError = JSON.stringify(error);
        }, () => {
            console.log("Completed Adding Org Credential");
            this.createOrgCredentialLoading = false;
        });
    }
    showCreateOrgCredentialModal(content) {
        this.redirectUri = '';
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
        });
    }
}
DevelopersComponent.ɵfac = function DevelopersComponent_Factory(t) { return new (t || DevelopersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_1__.ConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_portal_config_service__WEBPACK_IMPORTED_MODULE_2__.PortalConfigService)); };
DevelopersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DevelopersComponent, selectors: [["app-developers"]], decls: 64, vars: 2, consts: [[1, "mg-t-10", "container"], [1, "mg-l-auto", "nav", "nav-pills", "flex-column", "flex-md-row"], ["data-bs-toggle", "tab", "href", "#", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "href", "#", 1, "nav-link"], [1, "card", "mg-t-20"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], ["type", "button", 1, "btn", "btn-link", "float-right"], ["type", "button", 1, "btn", "btn-outline-indigo", "float-right", 3, "click"], [1, "card-body"], ["class", "alert alert-success mg-t-10", "role", "alert", 4, "ngIf"], [1, "table", "mg-t-10"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-indigo", "float-right"], ["scope", "row"], ["createOrgCredentialModal", ""], ["role", "alert", 1, "alert", "alert-success", "mg-t-10"], ["credWarning", ""], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "mg-r-10"], [1, "badge", 3, "ngClass"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["for", "redirectUri"], ["ngbTooltip", "required", 1, "text-danger"], [1, "input-group"], ["required", "", "id", "redirectUri", "placeholder", "https://example.com/...", "name", "redirectUri", "type", "url", 1, "form-control", 3, "pattern", "ngModel", "ngModelChange"], ["redirectUriField", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-indigo", 3, "disabled", "click"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function DevelopersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "API Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " API Credentials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Learn more about API authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 4)(12, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Credentials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DevelopersComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](63); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.showCreateOrgCredentialModal(_r2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Create Credentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8)(17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Create a key that unlocks full API access, enabling extensive interaction with your account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, DevelopersComponent_div_19_Template, 18, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "table", 10)(21, "thead")(22, "tr")(23, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Public Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Private Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, DevelopersComponent_tr_32_Template, 11, 11, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 4)(34, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Webhooks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Create Webhook");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 8)(39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Set up your webhook endpoint to receive live events from Stripe or learn more about Webhooks.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "table", 10)(42, "thead")(43, "tr")(44, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Error Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "tbody")(53, "tr")(54, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "https://www.fastenhealth.com/v1/webhook");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "1 event");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, DevelopersComponent_ng_template_62_Template, 23, 5, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!ctx.newCredential);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.orgCredentials[ctx.portalConfig.config$.apiMode]);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltip, ngx_moment__WEBPACK_IMPORTED_MODULE_7__.DateFormatPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZlbG9wZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2993:
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);







// based on https://stackoverflow.com/questions/46017245/how-to-handle-unauthorized-requestsstatus-with-401-or-403-with-new-httpclient
class AuthInterceptorService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    handleAuthError(err) {
        //handle your auth error or rethrow
        if (err.status === 401 || err.status === 403) {
            //navigate /delete cookies or whatever
            this.authService.Signout();
            this.router.navigateByUrl(`/auth/signin`);
            // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(err.message); // or EMPTY may be appropriate here
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err);
    }
    intercept(req, next) {
        console.log("Intercepting Request", req);
        //only intercept requests to the fasten API & lighthouse, all other requests should be sent as-is
        let reqUrl = new URL(req.url);
        let lighthouseUrl = new URL(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.lighthouse_api_endpoint_base);
        let apiUrl = new URL(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base);
        if (!((reqUrl.origin == apiUrl.origin && reqUrl.pathname.startsWith(apiUrl.pathname)) ||
            (reqUrl.origin == lighthouseUrl.origin && reqUrl.pathname.startsWith(lighthouseUrl.pathname)))) {
            return next.handle(req);
        }
        // Clone the request and ensure that cookies are sent
        const authReq = req.clone({ withCredentials: true });
        // catch the error, make specific functions for catching specific errors and you can chain through them with more catch operators
        return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(x => this.handleAuthError(x))); //here use an arrow function, otherwise you may get "Cannot read property 'navigate' of undefined" on angular 4.4.2/net core 2/webpack 2.70
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
AuthInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService),
/* harmony export */   "FASTEN_AUTH_COOKIE_NAME": () => (/* binding */ FASTEN_AUTH_COOKIE_NAME)
/* harmony export */ });
/* harmony import */ var _home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _models_fasten_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/fasten/user */ 8821);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jose */ 8042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _portal_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portal-config.service */ 2608);








const FASTEN_AUTH_COOKIE_NAME = 'fasten_connect_auth';
class AuthService {
  constructor(_httpClient, portalConfigService) {
    this._httpClient = _httpClient;
    this.portalConfigService = portalConfigService;
    this.IsAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
  }
  /**
   * Signup  (and Signin) both require an "online" user.
   * @param newUser
   * @constructor
   */
  Signup(newUser) {
    var _this = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let resp = yield _this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.connect_api_endpoint_base}/auth/signup`, newUser, {
        withCredentials: true
      }).toPromise();
      console.log(resp);
      return resp;
    })();
  }
  Signin(email, pass) {
    var _this2 = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let currentUser = new _models_fasten_user__WEBPACK_IMPORTED_MODULE_1__.User();
      currentUser.email = email;
      currentUser.password = pass;
      let resp = yield _this2._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.connect_api_endpoint_base}/auth/login`, currentUser, {
        withCredentials: true
      }).toPromise();
      return resp;
    })();
  }
  Signout() {
    var _this3 = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.publishAuthenticationState(false);
      return _this3.deleteCookie(FASTEN_AUTH_COOKIE_NAME);
      // // let remotePouchDb = new PouchDB(this.getRemoteUserDb(localStorage.getItem("current_user")), {skip_setup: true});
      // if(this.pouchDb){
      //   await this.pouchDb.logOut()
      // }
      // await this.Close()
    })();
  }
  GetJWTPayload() {
    var _this4 = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let authToken = _this4.getCookie(FASTEN_AUTH_COOKIE_NAME);
      if (!authToken) {
        return null;
      }
      let jwks = jose__WEBPACK_IMPORTED_MODULE_3__.createRemoteJWKSet(new URL(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.jwks_uri));
      let issuerHost = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.connect_api_endpoint_base;
      try {
        //audience and issuer must be the same. This token is only valid on the fasten connect api
        const {
          payload,
          protectedHeader
        } = yield jose__WEBPACK_IMPORTED_MODULE_3__.jwtVerify(authToken, jwks, {
          issuer: issuerHost,
          audience: issuerHost
        });
        // @ts-ignore
        _this4.portalConfigService.config = {
          user: payload
        };
        return payload;
      } catch (e) {
        console.error(e);
        return null;
      }
    })();
  }
  IsAuthenticated() {
    var _this5 = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let payload = yield _this5.GetJWTPayload();
      let isAuthenticated = payload != null;
      _this5.publishAuthenticationState(isAuthenticated);
      return isAuthenticated;
    })();
  }
  //https://stackoverflow.com/questions/34298133/angular-cookies
  getCookie(name) {
    const ca = decodeURIComponent(document.cookie).split(';');
    const caLen = ca.length;
    const cookieName = `${name}=`;
    let c;
    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }
  deleteCookie(name) {
    this.setCookie(name, '', -1);
  }
  setCookie(name, value, expireDays, path = '') {
    const d = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    const cpath = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}; SameSite=Lax`;
  }
  publishAuthenticationState(authenticated) {
    if (this.IsAuthenticatedSubject.value != authenticated) {
      this.IsAuthenticatedSubject.next(authenticated);
    }
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_portal_config_service__WEBPACK_IMPORTED_MODULE_4__.PortalConfigService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4543:
/*!*********************************************!*\
  !*** ./src/app/services/connect.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectService": () => (/* binding */ ConnectService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ConnectService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    /**
     * Create a new organization and associate it with the current User
     * @param newOrg
     * @constructor
     */
    createOrg(newOrg) {
        let resp = this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org`, newOrg);
        console.log(resp);
        return resp;
    }
    getOrg(orgId) {
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            console.log("Organization", response);
            return response.data;
        }));
    }
    createOrgCredentials(orgId, apiMode, redirectUrl) {
        return this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/credentials`, {
            api_mode: apiMode,
            redirect_uri: redirectUrl
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            console.log("Organization Credential", response);
            return response.data;
        }));
    }
    getOrgCredentials(orgId) {
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/credentials`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            console.log("Organization Credentials", response);
            return response.data;
        }));
    }
    createOrgWebhooks(orgId, apiMode, redirectUrl) {
        let resp = this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/webhooks`, {
            api_mode: apiMode,
            redirect_url: redirectUrl
        });
        console.log(resp);
        return resp;
    }
}
ConnectService.ɵfac = function ConnectService_Factory(t) { return new (t || ConnectService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ConnectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConnectService, factory: ConnectService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2608:
/*!***************************************************!*\
  !*** ./src/app/services/portal-config.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalConfigService": () => (/* binding */ PortalConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _models_portal_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/portal-config */ 4158);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class PortalConfigService {
    constructor() {
        this._defaultConfig = _models_portal_config__WEBPACK_IMPORTED_MODULE_0__.portalConfigDefaults;
        this.ConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(this._defaultConfig);
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------
    /**
     * Setter & getter for config
     */
    set config(value) {
        // get the current config, merge the new values, and then submit.
        const mergedSettings = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({}, this.ConfigSubject.getValue(), value);
        // Store the value
        if (JSON.stringify(mergedSettings) !== JSON.stringify(this.ConfigSubject.getValue())) {
            console.log('updating settings:', mergedSettings);
            this.ConfigSubject.next(mergedSettings);
        }
    }
    get config$() {
        console.log('using cached settings:', this.ConfigSubject.getValue());
        return this.ConfigSubject.getValue();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Resets the config to the default
     */
    reset() {
        // Set the config
        this.config = this._defaultConfig;
    }
    toggleApiMode() {
        this.config = {
            apiMode: this.config$.apiMode === 'live' ? _app_constants__WEBPACK_IMPORTED_MODULE_2__.ApiMode.Test : _app_constants__WEBPACK_IMPORTED_MODULE_2__.ApiMode.Live
        };
    }
}
PortalConfigService.ɵfac = function PortalConfigService_Factory(t) { return new (t || PortalConfigService)(); };
PortalConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PortalConfigService, factory: PortalConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    name: "development",
    //specify the lighthouse base that we're going to use to authenticate against all our source/providers. Must not have trailing slash
    lighthouse_api_endpoint_base: 'https://lighthouse.fastenhealth.com',
    //used to specify the api server that we're going to use (can be relative or absolute). Must not have trailing slash
    // connect_api_endpoint_base: 'https://api.connect-dev.fastenhealth.com/v1',
    // if relative, must start with /
    connect_api_endpoint_base: 'https://api.connect-dev.fastenhealth.com/v1',
    jwks_uri: 'https://cdn.fastenhealth.com/jwks/fasten-connect/dev.json',
};


/***/ }),

/***/ 8496:
/*!**************************************!*\
  !*** ./src/environments/versions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "versionInfo": () => (/* binding */ versionInfo)
/* harmony export */ });
// this file is automatically generated by git.version.ts script
const versionInfo = {
    version: 'dev',
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.name != "local") {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-ps": 6235,
	"./ar-ps.js": 6235,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku-kmr": 9619,
	"./ku-kmr.js": 9619,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map