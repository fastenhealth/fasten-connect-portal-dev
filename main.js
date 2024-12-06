(self["webpackChunkfasten_connect_portal"] = self["webpackChunkfasten_connect_portal"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/developers/developers.component */ 972);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 24789);
/* harmony import */ var _pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/auth-signin/auth-signin.component */ 2771);
/* harmony import */ var _pages_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/auth-signup/auth-signup.component */ 32862);
/* harmony import */ var _pages_auth_signup_organization_auth_signup_organization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/auth-signup-organization/auth-signup-organization.component */ 83515);
/* harmony import */ var _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-guards/is-authenticated-auth-guard */ 16056);
/* harmony import */ var _pages_org_settings_org_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/org-settings/org-settings.component */ 16226);
/* harmony import */ var _pages_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/account-settings/account-settings.component */ 84411);
/* harmony import */ var _pages_webhook_logs_webhook_logs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/webhook-logs/webhook-logs.component */ 33007);
/* harmony import */ var _pages_org_billing_org_billing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/org-billing/org-billing.component */ 57167);
/* harmony import */ var _pages_org_team_org_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/org-team/org-team.component */ 95957);
/* harmony import */ var _pages_auth_reset_request_auth_reset_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/auth-reset-request/auth-reset-request.component */ 38540);
/* harmony import */ var _pages_auth_reset_auth_reset_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/auth-reset/auth-reset.component */ 48453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
















const routes = [
    { path: 'auth/signin', component: _pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_2__.AuthSigninComponent },
    { path: 'auth/signup', component: _pages_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_3__.AuthSignupComponent },
    { path: 'auth/invite', component: _pages_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_3__.AuthSignupComponent },
    { path: 'auth/signup/org', component: _pages_auth_signup_organization_auth_signup_organization_component__WEBPACK_IMPORTED_MODULE_4__.AuthSignupOrganizationComponent },
    { path: 'auth/reset/request', component: _pages_auth_reset_request_auth_reset_request_component__WEBPACK_IMPORTED_MODULE_11__.AuthResetRequestComponent },
    { path: 'auth/reset', component: _pages_auth_reset_auth_reset_component__WEBPACK_IMPORTED_MODULE_12__.AuthResetComponent },
    { path: '', redirectTo: '/developers', pathMatch: 'full' },
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, canActivate: [_auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_5__.IsAuthenticatedAuthGuard] },
    { path: 'developers', component: _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_0__.DevelopersComponent, canActivate: [_auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_5__.IsAuthenticatedAuthGuard] },
    { path: 'developers/webhooks/:webhookId/logs', component: _pages_webhook_logs_webhook_logs_component__WEBPACK_IMPORTED_MODULE_8__.WebhookLogsComponent, canActivate: [_auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_5__.IsAuthenticatedAuthGuard] },
    { path: 'org/settings', component: _pages_org_settings_org_settings_component__WEBPACK_IMPORTED_MODULE_6__.OrgSettingsComponent, canActivate: [_auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_5__.IsAuthenticatedAuthGuard] },
    { path: 'org/billing', component: _pages_org_billing_org_billing_component__WEBPACK_IMPORTED_MODULE_9__.OrgBillingComponent, canActivate: [_auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_5__.IsAuthenticatedAuthGuard] },
    { path: 'org/team', component: _pages_org_team_org_team_component__WEBPACK_IMPORTED_MODULE_10__.OrgTeamComponent, canActivate: [_auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_5__.IsAuthenticatedAuthGuard] },
    { path: 'account/settings', component: _pages_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_7__.AccountSettingsComponent, canActivate: [_auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_5__.IsAuthenticatedAuthGuard] },
    //must be at bottom of list
    { path: '**', redirectTo: 'developers' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 43646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 64662);







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
/* harmony export */   "CRUDMode": () => (/* binding */ CRUDMode),
/* harmony export */   "CredentialStatus": () => (/* binding */ CredentialStatus),
/* harmony export */   "EventTypes": () => (/* binding */ EventTypes),
/* harmony export */   "STRONG_PASSWORD_PATTERN": () => (/* binding */ STRONG_PASSWORD_PATTERN),
/* harmony export */   "URL_PATTERN": () => (/* binding */ URL_PATTERN),
/* harmony export */   "WebhookDeliveryStatus": () => (/* binding */ WebhookDeliveryStatus),
/* harmony export */   "WebhookStatus": () => (/* binding */ WebhookStatus)
/* harmony export */ });
const URL_PATTERN = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
// https://medium.com/@ojiofor/angular-reactive-forms-strong-password-validation-8dbcce92eb6c
//     Minimum Length: A strong password should have a minimum length, typically at least 8 characters.
//     Uppercase Letters: It should contain at least one uppercase letter.
//     Lowercase Letters: It should contain at least one lowercase letter.
//     Numbers: It should contain at least one number.
//     Special Characters: It should contain at least one special character (e.g., !, @, #, $).
const STRONG_PASSWORD_PATTERN = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
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
var WebhookDeliveryStatus;
(function (WebhookDeliveryStatus) {
    WebhookDeliveryStatus["Success"] = "success";
    WebhookDeliveryStatus["Failure"] = "failure";
})(WebhookDeliveryStatus || (WebhookDeliveryStatus = {}));
var CRUDMode;
(function (CRUDMode) {
    CRUDMode["Create"] = "create";
    CRUDMode["Update"] = "update";
    CRUDMode["Delete"] = "delete";
})(CRUDMode || (CRUDMode = {}));
var EventTypes;
(function (EventTypes) {
    EventTypes["EventTypesPatientEHIExportFailed"] = "patient.ehi_export_failed";
    EventTypes["EventTypesPatientEHIExportSuccess"] = "patient.ehi_export_success";
    EventTypes["EventTypesPatientAuthorizationRevoked"] = "patient.authorization_revoked";
    EventTypes["EventTypesWebhookTest"] = "webhook.test";
})(EventTypes || (EventTypes = {}));


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 2898);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-highlightjs */ 97101);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-infinite-scroll */ 47364);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 43646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ 64662);
/* harmony import */ var _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/developers/developers.component */ 972);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 24789);
/* harmony import */ var _pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/auth-signin/auth-signin.component */ 2771);
/* harmony import */ var _pages_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/auth-signup/auth-signup.component */ 32862);
/* harmony import */ var _pages_auth_signup_organization_auth_signup_organization_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/auth-signup-organization/auth-signup-organization.component */ 83515);
/* harmony import */ var _directives_password_confirm_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/password-confirm-validator.directive */ 36465);
/* harmony import */ var _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-guards/is-authenticated-auth-guard */ 16056);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth-interceptor.service */ 32993);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-image-cropper */ 10649);
/* harmony import */ var _components_logo_cropper_logo_cropper_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/logo-cropper/logo-cropper.component */ 57993);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-moment */ 20728);
/* harmony import */ var _pages_org_settings_org_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/org-settings/org-settings.component */ 16226);
/* harmony import */ var _pages_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/account-settings/account-settings.component */ 84411);
/* harmony import */ var _components_org_credentials_editor_org_credentials_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/org-credentials-editor/org-credentials-editor.component */ 39302);
/* harmony import */ var _components_org_webhooks_editor_org_webhooks_editor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/org-webhooks-editor/org-webhooks-editor.component */ 57751);
/* harmony import */ var _pages_webhook_logs_webhook_logs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/webhook-logs/webhook-logs.component */ 33007);
/* harmony import */ var _pages_org_billing_org_billing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/org-billing/org-billing.component */ 57167);
/* harmony import */ var _pages_org_team_org_team_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/org-team/org-team.component */ 95957);
/* harmony import */ var _components_org_team_invite_org_team_invite_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/org-team-invite/org-team-invite.component */ 93172);
/* harmony import */ var _pages_auth_reset_request_auth_reset_request_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/auth-reset-request/auth-reset-request.component */ 38540);
/* harmony import */ var _pages_auth_reset_auth_reset_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/auth-reset/auth-reset.component */ 48453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 22560);







































class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.fas, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_25__.far);
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__.FaIconLibrary)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HTTP_INTERCEPTORS,
            useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__.AuthInterceptorService,
            multi: true,
            deps: [_services_auth_service__WEBPACK_IMPORTED_MODULE_11__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_29__.Router]
        },
        _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_10__.IsAuthenticatedAuthGuard,
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_30__.HIGHLIGHT_OPTIONS,
            useValue: {
                fullLibraryLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_index_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js */ 7722)),
            }
        }
    ], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_34__.NgChartsModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_35__.InfiniteScrollModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__.FontAwesomeModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_36__.ImageCropperModule,
        ngx_moment__WEBPACK_IMPORTED_MODULE_37__.MomentModule,
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_30__.HighlightModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_4__.DevelopersComponent,
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent,
        _pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_6__.AuthSigninComponent,
        _pages_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_7__.AuthSignupComponent,
        _pages_auth_signup_organization_auth_signup_organization_component__WEBPACK_IMPORTED_MODULE_8__.AuthSignupOrganizationComponent,
        _components_logo_cropper_logo_cropper_component__WEBPACK_IMPORTED_MODULE_13__.LogoCropperComponent,
        _pages_org_settings_org_settings_component__WEBPACK_IMPORTED_MODULE_14__.OrgSettingsComponent,
        _pages_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_15__.AccountSettingsComponent,
        _components_org_credentials_editor_org_credentials_editor_component__WEBPACK_IMPORTED_MODULE_16__.OrgCredentialsEditorComponent,
        _components_org_webhooks_editor_org_webhooks_editor_component__WEBPACK_IMPORTED_MODULE_17__.OrgWebhooksEditorComponent,
        _pages_webhook_logs_webhook_logs_component__WEBPACK_IMPORTED_MODULE_18__.WebhookLogsComponent,
        _pages_org_billing_org_billing_component__WEBPACK_IMPORTED_MODULE_19__.OrgBillingComponent,
        _pages_org_team_org_team_component__WEBPACK_IMPORTED_MODULE_20__.OrgTeamComponent,
        _components_org_team_invite_org_team_invite_component__WEBPACK_IMPORTED_MODULE_21__.OrgTeamInviteComponent,
        _pages_auth_reset_request_auth_reset_request_component__WEBPACK_IMPORTED_MODULE_22__.AuthResetRequestComponent,
        _pages_auth_reset_auth_reset_component__WEBPACK_IMPORTED_MODULE_23__.AuthResetComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _directives_password_confirm_validator_directive__WEBPACK_IMPORTED_MODULE_9__.PasswordConfirmValidatorDirective,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_34__.NgChartsModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_35__.InfiniteScrollModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__.FontAwesomeModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_36__.ImageCropperModule,
        ngx_moment__WEBPACK_IMPORTED_MODULE_37__.MomentModule,
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_30__.HighlightModule] }); })();


/***/ }),

/***/ 16056:
/*!************************************************************!*\
  !*** ./src/app/auth-guards/is-authenticated-auth-guard.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsAuthenticatedAuthGuard": () => (/* binding */ IsAuthenticatedAuthGuard)
/* harmony export */ });
/* harmony import */ var _home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);





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

/***/ 64662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _environments_versions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/versions */ 28496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class FooterComponent {
    constructor() {
        this.appVersion = _environments_versions__WEBPACK_IMPORTED_MODULE_0__.versionInfo.version;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 1, consts: [[1, "az-footer", "ht-40", "page-footer", "fixed-bottom"], [1, "container", "ht-100p", "pd-t-0-f"], [1, "d-sm-flex", "justify-content-center", "justify-content-sm-between", "py-2", "w-100"], [1, "text-muted", "text-center", "text-sm-left", "d-block", "d-sm-inline-block"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], ["href", "https://www.fastenhealth.com/connect"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Fasten Connect: Unified API For Medical Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Copyright \u00A9 Fasten Health, Inc. 2022 | ", ctx.appVersion, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 43646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/connect.service */ 84543);
/* harmony import */ var _services_portal_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/portal-config.service */ 32608);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);








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
    signOut(event) {
        this.authService.Signout().then(r => {
            return this.router.navigate(['/auth/signin']);
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_1__.ConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_portal_config_service__WEBPACK_IMPORTED_MODULE_2__.PortalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 71, vars: 17, consts: [[1, "bg-danger", "text-white", "pd-5", 3, "hidden"], [1, "text-white", "float-right"], [1, "az-header"], [1, "container"], [1, "az-header-left"], ["routerLink", "/"], ["src", "assets/images/banner-transparent-trim.png", "alt", "fasten", 1, "az-logo", "az-img-logo"], ["href", "#", "id", "azMenuShow", 1, "az-header-menu-icon", "d-lg-none", 3, "click"], [1, "az-header-menu"], [1, "az-header-menu-header"], ["src", "assets/images/banner-transparent-trim.png", "alt", "fasten", 1, "az-img-logo"], ["href", "#", 1, "close", 3, "click"], [1, "nav"], ["ngbDropdown", "", 1, "nav-item", 3, "ngClass"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link"], ["dashboard", "routerLinkActive"], [3, "icon"], ["routerLink", "/developers", "routerLinkActive", "active", 1, "nav-link"], ["developers", "routerLinkActive"], [1, "pd-l-20"], [1, "mg-l-10", "az-toggle", "az-toggle-danger", 3, "ngClass", "click"], [1, "az-header-right"], ["ngbDropdown", "", 1, "dropdown", "az-header-notification"], ["id", "notificationsDropdown", "ngbDropdownToggle", "", 1, "new"], [1, "far", "fa-sm", "fa-bell"], ["ngbDropdownMenu", "", "aria-labelledby", "notificationsDropdown", 1, "dropdown-menu"], [1, "az-dropdown-header", "mg-b-20", "d-sm-none"], [1, "az-header-arrow", 3, "click"], [1, "icon", "ion-md-arrow-back"], [1, "az-notification-title"], [1, "az-notification-text"], [1, "dropdown-footer"], ["routerLink", "/background-jobs"], ["ngbDropdown", "", 1, "dropdown", "az-profile-menu"], ["id", "profileDropdown", "ngbDropdownToggle", "", 1, "az-img-user", "cursor-pointer"], ["src", "/assets/images/profile-image.svg", "alt", ""], ["ngbDropdownMenu", "", "aria-labelledby", "profileDropdown", 1, "dropdown-menu"], [1, "az-dropdown-header", "d-sm-none"], [1, "az-header-profile", "cursor-pointer", 3, "routerLink"], [1, "az-img-user"], ["alt", "", 3, "src"], ["routerLink", "account/settings", 1, "dropdown-item", "cursor-pointer"], [1, "fas", "fa-user-circle", 2, "font-size", "medium"], ["routerLink", "org/settings", 1, "dropdown-item", "cursor-pointer"], [1, "fas", "fa-hospital", 2, "font-size", "medium"], [1, "dropdown-item", "cursor-pointer"], [1, "fas", "fa-life-ring", 2, "font-size", "medium"], [1, "dropdown-item", "cursor-pointer", 3, "click"], [1, "fas", "fa-power-off", 2, "font-size", "medium"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Test Mode Enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "You're using test data. You will only be able to access sandbox accounts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener($event) { return ctx.toggleHeaderMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener($event) { return ctx.toggleHeaderMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ul", 12)(19, "li", 13)(20, "a", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u00A0 Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li", 13)(25, "a", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u00A0 Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li", 19)(30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_30_listener() { return ctx.portalConfigService.toggleApiMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 21)(33, "div", 22)(34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 25)(37, "div", 26)(38, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_38_listener($event) { return ctx.closeMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Background Jobs & Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 31)(45, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "View History");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 33)(48, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 36)(51, "div", 37)(52, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_52_listener($event) { return ctx.closeMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 38)(55, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " Profile Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Org Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Get Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_68_listener($event) { return ctx.signOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.portalConfigService.config$.apiMode == "live");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, _r0 == null ? null : _r0.isActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, _r1 == null ? null : _r1.isActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c3, ctx.portalConfigService.config$.apiMode == "test"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/patient-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.portalConfigService.config$.org == null ? null : ctx.portalConfigService.config$.org.logo_uri, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.portalConfigService.config$.user == null ? null : ctx.portalConfigService.config$.user.name);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent], styles: [".az-toggle-danger.on[_ngcontent-%COMP%] {\n  background-color: #dc3545 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF6LXRvZ2dsZS1kYW5nZXIub24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 57993:
/*!*******************************************************************!*\
  !*** ./src/app/components/logo-cropper/logo-cropper.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoCropperComponent": () => (/* binding */ LogoCropperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-image-cropper */ 10649);




class LogoCropperComponent {
    constructor(activeModal, modalService, sanitizer) {
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        //image cropper
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.croppedImageEvent = null;
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
        this.croppedImageEvent = event;
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
        this.activeModal.close(this.croppedImageEvent);
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

/***/ 39302:
/*!***************************************************************************************!*\
  !*** ./src/app/components/org-credentials-editor/org-credentials-editor.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgCredentialsEditorComponent": () => (/* binding */ OrgCredentialsEditorComponent)
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/connect.service */ 84543);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);






function OrgCredentialsEditorComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Redirect Url is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrgCredentialsEditorComponent_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Redirect Url must be a valid url starting with https:// ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrgCredentialsEditorComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OrgCredentialsEditorComponent_div_24_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OrgCredentialsEditorComponent_div_24_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.errors == null ? null : _r0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.errors == null ? null : _r0.errors["pattern"]);
} }
function OrgCredentialsEditorComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.submitOrgCredentialError, " ");
} }
function OrgCredentialsEditorComponent_ng_container_28_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 22);
} }
function OrgCredentialsEditorComponent_ng_container_28_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 22);
} }
function OrgCredentialsEditorComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrgCredentialsEditorComponent_ng_container_28_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.deleteOrgCredential()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrgCredentialsEditorComponent_ng_container_28_span_3_Template, 1, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrgCredentialsEditorComponent_ng_container_28_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.updateOrgCredential()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, OrgCredentialsEditorComponent_ng_container_28_span_6_Template, 1, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.deleteOrgCredentialLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !(_r0.dirty || _r1.dirty) || ctx_r4.submitOrgCredentialLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.submitOrgCredentialLoading);
} }
function OrgCredentialsEditorComponent_ng_container_29_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 22);
} }
function OrgCredentialsEditorComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrgCredentialsEditorComponent_ng_container_29_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.createOrgCredential()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrgCredentialsEditorComponent_ng_container_29_span_3_Template, 1, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r5.submitOrgCredentialLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.submitOrgCredentialLoading);
} }
class OrgCredentialsEditorComponent {
    constructor(connectService, activeModal) {
        this.connectService = connectService;
        this.activeModal = activeModal;
        this.urlPattern = _app_constants__WEBPACK_IMPORTED_MODULE_0__.URL_PATTERN;
        this.editorMode = 'create';
        this.org = null;
        this.apiMode = _app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Test;
        this.orgCredential = null; //only set when editing
        this.submitOrgCredentialLoading = false;
        this.deleteOrgCredentialLoading = false;
        this.redirectUri = "";
        this.note = "";
        this.submitOrgCredentialError = '';
    }
    ngOnInit() {
        if (this.editorMode === 'edit' && this.orgCredential) {
            this.redirectUri = this.orgCredential.redirect_uri;
            this.note = this.orgCredential.note;
        }
    }
    deleteOrgCredential() {
        if (confirm("Are you sure you'd like to delete these API Credentials?") == true) {
            this.deleteOrgCredentialLoading = true;
            if (!this.orgCredential?.id) {
                this.deleteOrgCredentialLoading = false;
                this.submitOrgCredentialError = "Unknown Organization Credential ID";
                return;
            }
            this.connectService.deleteOrgCredential(this.org.id, this.orgCredential.id).subscribe((result) => {
                console.log("Deleted Org Credential", result);
                this.deleteOrgCredentialLoading = false;
                this.activeModal.close(result);
            }, (error) => {
                console.log("Error Updating Org Credential", error);
                this.deleteOrgCredentialLoading = false;
                this.submitOrgCredentialError = JSON.stringify(error);
            }, () => {
                console.log("Completed Deleting Org Credential");
                this.deleteOrgCredentialLoading = false;
            });
        }
    }
    updateOrgCredential() {
        this.submitOrgCredentialLoading = true;
        this.submitOrgCredentialError = '';
        if (!this.orgCredential?.id) {
            this.submitOrgCredentialLoading = false;
            this.submitOrgCredentialError = "Unknown Organization Credential ID";
            return;
        }
        if (this.redirectUri == this.orgCredential.redirect_uri) {
            this.submitOrgCredentialLoading = false;
            this.submitOrgCredentialError = "Redirect URI has not changed";
        }
        this.connectService.updateOrgCredential(this.org.id, this.orgCredential.id, this.redirectUri, this.note).subscribe((result) => {
            console.log("Updated Org Credential", result);
            this.submitOrgCredentialLoading = false;
            this.activeModal.close(result);
        }, (error) => {
            console.log("Error Updating Org Credential", error);
            this.submitOrgCredentialLoading = false;
            this.submitOrgCredentialError = JSON.stringify(error);
        }, () => {
            console.log("Completed Updating Org Credential");
            this.submitOrgCredentialLoading = false;
        });
    }
    createOrgCredential() {
        this.submitOrgCredentialLoading = true;
        this.submitOrgCredentialError = '';
        if (!this.org?.id) {
            this.submitOrgCredentialLoading = false;
            this.submitOrgCredentialError = "Unknown Organization ID";
            return;
        }
        this.connectService.createOrgCredentials(this.org.id, this.apiMode, this.redirectUri, this.note).subscribe((result) => {
            console.log("Added Org Credential", result);
            this.submitOrgCredentialLoading = false;
            this.activeModal.close(result);
        }, (error) => {
            console.log("Error Adding Org Credential", error);
            this.submitOrgCredentialLoading = false;
            this.submitOrgCredentialError = JSON.stringify(error);
        }, () => {
            console.log("Completed Adding Org Credential");
            this.submitOrgCredentialLoading = false;
        });
    }
}
OrgCredentialsEditorComponent.ɵfac = function OrgCredentialsEditorComponent_Factory(t) { return new (t || OrgCredentialsEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_1__.ConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal)); };
OrgCredentialsEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OrgCredentialsEditorComponent, selectors: [["app-org-credentials-editor"]], inputs: { editorMode: "editorMode", org: "org", apiMode: "apiMode", orgCredential: "orgCredential" }, decls: 30, vars: 8, consts: [[1, "modal-header"], ["id", "modal-credential-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], ["for", "redirectUri"], ["ngbTooltip", "required", 1, "text-danger"], [1, "input-group"], ["required", "", "id", "redirectUri", "placeholder", "https://example.com/...", "name", "redirectUri", "type", "url", 1, "form-control", 3, "pattern", "ngModel", "ngModelChange"], ["redirectUriField", "ngModel"], ["for", "note"], ["id", "note", "placeholder", "Additional Note", "name", "note", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["noteField", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "modal-footer"], [2, "display", "block", "width", "100%"], [4, "ngIf"], [1, "alert", "alert-danger"], ["type", "button", 1, "float-left", "btn", "btn-outline-danger", 3, "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "float-right", "btn", "btn-outline-indigo", 3, "disabled", "click"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["type", "button", 1, "btn", "btn-outline-indigo", 3, "disabled", "click"]], template: function OrgCredentialsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrgCredentialsEditorComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " API Credentials are used by your application to access the Fasten Connect API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form")(10, "div", 5)(11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Redirect Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrgCredentialsEditorComponent_Template_input_ngModelChange_16_listener($event) { return ctx.redirectUri = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5)(19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8)(22, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrgCredentialsEditorComponent_Template_input_ngModelChange_22_listener($event) { return ctx.note = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, OrgCredentialsEditorComponent_div_24_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, OrgCredentialsEditorComponent_div_25_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 15)(27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, OrgCredentialsEditorComponent_ng_container_28_Template, 7, 3, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, OrgCredentialsEditorComponent_ng_container_29_Template, 4, 2, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.editorMode == "create" ? "Create" : "Update", " Credential ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pattern", ctx.urlPattern)("ngModel", ctx.redirectUri);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.invalid && (_r0.dirty || _r0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitOrgCredentialError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editorMode == "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editorMode == "create");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmctY3JlZGVudGlhbHMtZWRpdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 93172:
/*!*************************************************************************!*\
  !*** ./src/app/components/org-team-invite/org-team-invite.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgTeamInviteComponent": () => (/* binding */ OrgTeamInviteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_portal_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/portal-config.service */ 32608);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/connect.service */ 84543);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);






function OrgTeamInviteComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrgTeamInviteComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OrgTeamInviteComponent_div_20_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.errors == null ? null : _r0.errors["required"]);
} }
function OrgTeamInviteComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.submitOrgInviteError, " ");
} }
function OrgTeamInviteComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 19);
} }
class OrgTeamInviteComponent {
    constructor(portalConfig, connectService, activeModal) {
        this.portalConfig = portalConfig;
        this.connectService = connectService;
        this.activeModal = activeModal;
        this.org = null;
        this.teamMemberEmail = '';
        this.submitOrgInviteLoading = false;
        this.submitOrgInviteError = '';
    }
    ngOnInit() {
    }
    sendOrgTeamInvite() {
        this.submitOrgInviteLoading = true;
        this.submitOrgInviteError = '';
        if (!this.portalConfig.config$.org?.id) {
            this.submitOrgInviteLoading = false;
            this.submitOrgInviteError = "Unknown Organization ID";
            return;
        }
        this.connectService.sendOrgInvite(this.portalConfig.config$.org?.id, this.teamMemberEmail).subscribe((result) => {
            this.submitOrgInviteLoading = false;
            this.activeModal.close(true);
        }, (error) => {
            console.log("Error Adding Org Webhook", error);
            this.submitOrgInviteLoading = false;
            this.submitOrgInviteError = JSON.stringify(error);
        });
    }
}
OrgTeamInviteComponent.ɵfac = function OrgTeamInviteComponent_Factory(t) { return new (t || OrgTeamInviteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_portal_config_service__WEBPACK_IMPORTED_MODULE_0__.PortalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_1__.ConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal)); };
OrgTeamInviteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OrgTeamInviteComponent, selectors: [["app-org-team-invite"]], inputs: { org: "org" }, decls: 27, vars: 5, consts: [[1, "modal-header"], ["id", "modal-webhook-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["role", "alert", 1, "alert", "alert-warning", "mg-t-10"], [1, "mb-3"], ["for", "emailAddress"], ["ngbTooltip", "required", 1, "text-danger"], [1, "input-group"], ["required", "", "id", "emailAddress", "placeholder", "team_member@example.com", "name", "emailAddress", "type", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["emailAddressField", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "modal-footer"], [2, "display", "block", "width", "100%"], ["type", "button", 1, "btn", "btn-outline-indigo", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function OrgTeamInviteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Invite Team Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrgTeamInviteComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Fasten Health high discourages email address from free domains such as Gmail due to access to sensitive information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form")(12, "div", 6)(13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Member Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9)(18, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrgTeamInviteComponent_Template_input_ngModelChange_18_listener($event) { return ctx.teamMemberEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, OrgTeamInviteComponent_div_20_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, OrgTeamInviteComponent_div_21_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13)(23, "div", 14)(24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrgTeamInviteComponent_Template_button_click_24_listener() { return ctx.sendOrgTeamInvite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, OrgTeamInviteComponent_span_26_Template, 1, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.teamMemberEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.invalid && (_r0.dirty || _r0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitOrgInviteError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.submitOrgInviteLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitOrgInviteLoading);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmctdGVhbS1pbnZpdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 57751:
/*!*********************************************************************************!*\
  !*** ./src/app/components/org-webhooks-editor/org-webhooks-editor.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgWebhooksEditorComponent": () => (/* binding */ OrgWebhooksEditorComponent)
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/connect.service */ 84543);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);






function OrgWebhooksEditorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Testing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " If you don't have an environment to receive webhooks, you can use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "requestbin.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " to test. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrgWebhooksEditorComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Endpoint Url is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrgWebhooksEditorComponent_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Endpoint Url must be a valid url starting with https:// ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrgWebhooksEditorComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OrgWebhooksEditorComponent_div_20_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OrgWebhooksEditorComponent_div_20_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["pattern"]);
} }
function OrgWebhooksEditorComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.submitOrgWebhookError, " ");
} }
function OrgWebhooksEditorComponent_ng_container_32_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 26);
} }
function OrgWebhooksEditorComponent_ng_container_32_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 26);
} }
function OrgWebhooksEditorComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrgWebhooksEditorComponent_ng_container_32_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.deleteOrgWebhook()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrgWebhooksEditorComponent_ng_container_32_span_3_Template, 1, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrgWebhooksEditorComponent_ng_container_32_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.updateOrgWebhook()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, OrgWebhooksEditorComponent_ng_container_32_span_6_Template, 1, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.deleteOrgWebhookLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r1.dirty && !_r3.dirty || ctx_r5.submitOrgWebhookLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.submitOrgWebhookLoading);
} }
function OrgWebhooksEditorComponent_ng_container_33_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 26);
} }
function OrgWebhooksEditorComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrgWebhooksEditorComponent_ng_container_33_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.createOrgWebhook()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrgWebhooksEditorComponent_ng_container_33_span_3_Template, 1, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r6.submitOrgWebhookLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.submitOrgWebhookLoading);
} }
const _c0 = function (a0) { return { "on": a0 }; };
class OrgWebhooksEditorComponent {
    constructor(connectService, activeModal) {
        this.connectService = connectService;
        this.activeModal = activeModal;
        this.urlPattern = _app_constants__WEBPACK_IMPORTED_MODULE_0__.URL_PATTERN;
        this.editorMode = 'create';
        this.org = null;
        this.apiMode = _app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Test;
        this.orgWebhook = null; //only set when editing
        this.submitOrgWebhookLoading = false;
        this.deleteOrgWebhookLoading = false;
        this.endpointUri = "";
        this.submitOrgWebhookError = '';
        this.active = true;
    }
    ngOnInit() {
        if (this.editorMode === 'edit' && this.orgWebhook) {
            this.endpointUri = this.orgWebhook.endpoint_uri;
            this.active = this.orgWebhook.status === 'active';
        }
    }
    deleteOrgWebhook() {
        if (confirm("Are you sure you'd like to delete this Webhook?") == true) {
            this.deleteOrgWebhookLoading = true;
            if (!this.orgWebhook?.id) {
                this.deleteOrgWebhookLoading = false;
                this.submitOrgWebhookError = "Unknown Organization Webhook ID";
                return;
            }
            this.connectService.deleteOrgWebhook(this.org.id, this.orgWebhook.id).subscribe((result) => {
                console.log("Deleted Org Webhook", result);
                this.deleteOrgWebhookLoading = false;
                this.activeModal.close(result);
            }, (error) => {
                console.log("Error Updating Org Webhook", error);
                this.deleteOrgWebhookLoading = false;
                this.submitOrgWebhookError = JSON.stringify(error);
            }, () => {
                console.log("Completed Deleting Org Webhook");
                this.deleteOrgWebhookLoading = false;
            });
        }
    }
    updateOrgWebhook() {
        this.submitOrgWebhookLoading = true;
        this.submitOrgWebhookError = '';
        if (!this.orgWebhook?.id) {
            this.submitOrgWebhookLoading = false;
            this.submitOrgWebhookError = "Unknown Organization Webhook ID";
            return;
        }
        if (this.endpointUri == this.orgWebhook.endpoint_uri && this.active == (this.orgWebhook.status === 'active')) {
            this.submitOrgWebhookLoading = false;
            this.submitOrgWebhookError = "Webhook settings have not changed";
        }
        this.connectService.updateOrgWebhook(this.org.id, this.orgWebhook.id, this.endpointUri, this.active ? 'active' : 'inactive').subscribe((result) => {
            console.log("Updated Org Webhook", result);
            this.submitOrgWebhookLoading = false;
            this.activeModal.close(result);
        }, (error) => {
            console.log("Error Updating Org Webhook", error);
            this.submitOrgWebhookLoading = false;
            this.submitOrgWebhookError = JSON.stringify(error);
        }, () => {
            console.log("Completed Updating Org Webhook");
            this.submitOrgWebhookLoading = false;
        });
    }
    createOrgWebhook() {
        this.submitOrgWebhookLoading = true;
        this.submitOrgWebhookError = '';
        if (!this.org?.id) {
            this.submitOrgWebhookLoading = false;
            this.submitOrgWebhookError = "Unknown Organization ID";
            return;
        }
        this.connectService.createOrgWebhooks(this.org.id, this.apiMode, this.endpointUri, this.active ? 'active' : 'inactive').subscribe((result) => {
            this.submitOrgWebhookLoading = false;
            this.activeModal.close(result);
        }, (error) => {
            console.log("Error Adding Org Webhook", error);
            this.submitOrgWebhookLoading = false;
            this.submitOrgWebhookError = JSON.stringify(error);
        }, () => {
            console.log("Completed Adding Org Webhook");
            this.submitOrgWebhookLoading = false;
        });
    }
}
OrgWebhooksEditorComponent.ɵfac = function OrgWebhooksEditorComponent_Factory(t) { return new (t || OrgWebhooksEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_1__.ConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal)); };
OrgWebhooksEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OrgWebhooksEditorComponent, selectors: [["app-org-webhooks-editor"]], inputs: { editorMode: "editorMode", org: "org", apiMode: "apiMode", orgWebhook: "orgWebhook" }, decls: 34, vars: 12, consts: [[1, "modal-header"], ["id", "modal-webhook-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "alert alert-warning mg-t-10", "role", "alert", 4, "ngIf"], [1, "mb-3"], ["for", "endpointUri"], ["ngbTooltip", "required", 1, "text-danger"], [1, "input-group"], ["required", "", "id", "endpointUri", "placeholder", "https://example.com/...", "name", "endpointUri", "type", "url", 1, "form-control", 3, "pattern", "ngModel", "ngModelChange"], ["endpointUriField", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "az-toggle", 3, "ngClass"], ["for", "webhook-active"], ["id", "webhook-active", "name", "webhook-active", "type", "checkbox", 1, "", 2, "display", "none", 3, "ngModel", "ngModelChange"], ["webhookActiveField", "ngModel"], [1, "modal-footer"], [2, "display", "block", "width", "100%"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-warning", "mg-t-10"], ["target", "_blank", "href", "https://public.requestbin.com/r"], [1, "alert", "alert-danger"], ["type", "button", 1, "float-left", "btn", "btn-outline-danger", 3, "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "float-right", "btn", "btn-outline-indigo", 3, "disabled", "click"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["type", "button", 1, "btn", "btn-outline-indigo", 3, "disabled", "click"]], template: function OrgWebhooksEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrgWebhooksEditorComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Webhooks allow Fasten Connect to notify you once patient medical records have been retrieved and are ready for download. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OrgWebhooksEditorComponent_div_10_Template, 7, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form")(12, "div", 6)(13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Endpoint Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9)(18, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrgWebhooksEditorComponent_Template_input_ngModelChange_18_listener($event) { return ctx.endpointUri = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, OrgWebhooksEditorComponent_div_20_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Webhook Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 13)(25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrgWebhooksEditorComponent_Template_input_ngModelChange_27_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, OrgWebhooksEditorComponent_div_29_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 17)(31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, OrgWebhooksEditorComponent_ng_container_32_Template, 7, 3, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, OrgWebhooksEditorComponent_ng_container_33_Template, 4, 2, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.editorMode == "create" ? "Create" : "Update", " Webhook");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.apiMode == "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pattern", ctx.urlPattern)("ngModel", ctx.endpointUri);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.active));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitOrgWebhookError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editorMode == "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editorMode == "create");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmctd2ViaG9va3MtZWRpdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 36465:
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


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

/***/ 41306:
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

/***/ 98821:
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

/***/ 24158:
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

/***/ 84411:
/*!**********************************************************************!*\
  !*** ./src/app/pages/account-settings/account-settings.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSettingsComponent": () => (/* binding */ AccountSettingsComponent)
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_portal_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/portal-config.service */ 32608);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/connect.service */ 84543);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _directives_password_confirm_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/password-confirm-validator.directive */ 36465);









function AccountSettingsComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Your current password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccountSettingsComponent_div_22_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["required"]);
} }
function AccountSettingsComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " A new password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_div_28_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " The new password must be at least 8 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_div_28_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " The new password must contain at least one uppercase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_div_28_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " The new password must contain at least one lowercase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_div_28_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " The new password must contain at least one digit. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_div_28_ng_container_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " The new password must contain at least special character. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_div_28_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccountSettingsComponent_div_28_ng_container_3_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AccountSettingsComponent_div_28_ng_container_3_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AccountSettingsComponent_div_28_ng_container_3_div_3_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AccountSettingsComponent_div_28_ng_container_3_div_4_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r18.passChangeUpdate.newPass == null ? null : ctx_r18.passChangeUpdate.newPass.match("^(?=.*[A-Z])")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r18.passChangeUpdate.newPass == null ? null : ctx_r18.passChangeUpdate.newPass.match("(?=.*[a-z])")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r18.passChangeUpdate.newPass == null ? null : ctx_r18.passChangeUpdate.newPass.match("(.*[0-9].*)")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r18.passChangeUpdate.newPass == null ? null : ctx_r18.passChangeUpdate.newPass.match("(?=.*[!@#$%^&*])")));
} }
function AccountSettingsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccountSettingsComponent_div_28_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AccountSettingsComponent_div_28_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AccountSettingsComponent_div_28_ng_container_3_Template, 5, 4, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors["pattern"]);
} }
function AccountSettingsComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " The new passwords do not match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccountSettingsComponent_div_34_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors["password_confirm"]);
} }
function AccountSettingsComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 31);
} }
function AccountSettingsComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r8.passChangeErrorMsg, " ");
} }
function AccountSettingsComponent_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_div_57_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_div_57_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email must be a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccountSettingsComponent_div_57_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AccountSettingsComponent_div_57_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AccountSettingsComponent_div_57_div_3_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["email"]);
} }
function AccountSettingsComponent_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Your current password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountSettingsComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccountSettingsComponent_div_63_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r12.errors == null ? null : _r12.errors["required"]);
} }
function AccountSettingsComponent_span_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 31);
} }
class AccountSettingsComponent {
    constructor(portalConfig, authService, connectService, router) {
        this.portalConfig = portalConfig;
        this.authService = authService;
        this.connectService = connectService;
        this.router = router;
        this.strong_password_pattern = _app_constants__WEBPACK_IMPORTED_MODULE_0__.STRONG_PASSWORD_PATTERN;
        this.passChangeLoading = false;
        this.emailChangeLoading = false;
        this.passChangeErrorMsg = "";
        this.emailChangeErrorMsg = "";
        this.passChangeUpdate = {
            oldPass: "",
            newPass: "",
            newPassConfirm: ""
        };
        this.emailChangeUpdate = {
            oldEmail: this.portalConfig.config$.user?.email || "",
            newEmail: "",
            password: ""
        };
    }
    ngOnInit() {
    }
    passChangeSubmit() {
        this.passChangeLoading = true;
        this.connectService.updateUser(this.passChangeUpdate.oldPass, this.portalConfig.config$.user?.email || "", "", this.passChangeUpdate.newPass).subscribe((user) => {
            console.log("Password Updated", user);
            this.passChangeLoading = false;
            this.passChangeErrorMsg = "";
            this.authService.Signout().then(() => {
                return this.router.navigateByUrl('/auth/signin?action=password-changed');
            }).catch((err) => {
                console.error("Error signing out after password change", err);
            });
        }, (err) => {
            console.error("Error updating Password", err);
            this.passChangeErrorMsg = err.error.message;
            this.passChangeLoading = false;
        });
    }
    emailChangeSubmit() {
        this.emailChangeLoading = true;
        this.connectService.updateUser(this.emailChangeUpdate.password, this.emailChangeUpdate.oldEmail, this.emailChangeUpdate.newEmail, "").subscribe((user) => {
            console.log("Email Updated", user);
            this.emailChangeLoading = false;
            this.emailChangeErrorMsg = "";
            this.authService.Signout().then(() => {
                return this.router.navigateByUrl('/auth/signin?action=email-changed');
            }).catch((err) => {
                console.error("Error signing out after email change", err);
            });
        }, (err) => {
            console.error("Error updating Email", err);
            this.emailChangeErrorMsg = err.error.message;
            this.emailChangeLoading = false;
        });
    }
}
AccountSettingsComponent.ɵfac = function AccountSettingsComponent_Factory(t) { return new (t || AccountSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_portal_config_service__WEBPACK_IMPORTED_MODULE_1__.PortalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
AccountSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AccountSettingsComponent, selectors: [["app-account-settings"]], decls: 67, vars: 19, consts: [[1, "mg-t-20", "container"], [1, "mg-b-20"], [1, "az-dashboard-text"], [1, "row"], [1, "col-md-10", "col-lg-8", "col-xl-6"], [1, "card", "mg-t-20"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], ["passwordConfirmValidator", "", 3, "ngSubmit"], ["passChangeForm", "ngForm"], [1, "card-body"], [1, "form-group"], [1, "az-content-label", "tx-11", "tx-medium", "tx-gray-600"], ["type", "password", "name", "old_password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["old_password", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["name", "new_password", "required", "", "minlength", "8", "type", "password", 1, "form-control", 3, "pattern", "ngModel", "ngModelChange"], ["new_password", "ngModel"], ["name", "new_password_confirm", "required", "", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["new_password_confirm", "ngModel"], [1, "btn", "btn-az-primary", "btn-block", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], [3, "ngSubmit"], ["emailChangeForm", "ngForm"], ["type", "text", "required", "required", "readonly", "", 1, "form-control", 3, "value"], ["required", "", "email", "", "minlength", "4", "type", "email", "name", "email", "autocapitalize", "none", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "password", "required", "", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "alert", "alert-danger"], [4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"]], template: function AccountSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Update Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AccountSettingsComponent_Template_form_ngSubmit_12_listener() { return ctx.passChangeSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9)(15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Use this form to change the password you use to login to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 10)(18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AccountSettingsComponent_Template_input_ngModelChange_20_listener($event) { return ctx.passChangeUpdate.oldPass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AccountSettingsComponent_div_22_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 10)(24, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AccountSettingsComponent_Template_input_ngModelChange_26_listener($event) { return ctx.passChangeUpdate.newPass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AccountSettingsComponent_div_28_Template, 4, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 10)(30, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Confirm new Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AccountSettingsComponent_Template_input_ngModelChange_32_listener($event) { return ctx.passChangeUpdate.newPassConfirm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, AccountSettingsComponent_div_34_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Save New Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, AccountSettingsComponent_span_37_Template, 1, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, AccountSettingsComponent_div_38_Template, 4, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 4)(40, "div", 5)(41, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " Update Email Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "form", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AccountSettingsComponent_Template_form_ngSubmit_43_listener() { return ctx.emailChangeSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 9)(46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Use this form to change the email address associated with your account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 10)(49, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Current Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 10)(53, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "New Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AccountSettingsComponent_Template_input_ngModelChange_55_listener($event) { return ctx.emailChangeUpdate.newEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, AccountSettingsComponent_div_57_Template, 4, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 10)(59, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Verify Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AccountSettingsComponent_Template_input_ngModelChange_61_listener($event) { return ctx.emailChangeUpdate.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, AccountSettingsComponent_div_63_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, " Update Email Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, AccountSettingsComponent_span_66_Template, 1, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](44);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](56);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.portalConfig.config$ == null ? null : ctx.portalConfig.config$.user == null ? null : ctx.portalConfig.config$.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.portalConfig.config$ == null ? null : ctx.portalConfig.config$.user == null ? null : ctx.portalConfig.config$.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.passChangeUpdate.oldPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pattern", ctx.strong_password_pattern)("ngModel", ctx.passChangeUpdate.newPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.passChangeUpdate.newPassConfirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r0.form.valid || ctx.passChangeLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passChangeLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passChangeErrorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.emailChangeUpdate.oldEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.emailChangeUpdate.newEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r10.invalid && (_r10.dirty || _r10.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.emailChangeUpdate.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r9.form.valid || ctx.emailChangeLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.emailChangeLoading);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _directives_password_confirm_validator_directive__WEBPACK_IMPORTED_MODULE_4__.PasswordConfirmValidatorDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 38540:
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth-reset-request/auth-reset-request.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthResetRequestComponent": () => (/* binding */ AuthResetRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);





function AuthResetRequestComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthResetRequestComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email must be a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthResetRequestComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AuthResetRequestComponent_div_15_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AuthResetRequestComponent_div_15_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["email"]);
} }
function AuthResetRequestComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.errorMsg, " ");
} }
function AuthResetRequestComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.successMsg, " ");
} }
class AuthResetRequestComponent {
    constructor(authService) {
        this.authService = authService;
        this.email = '';
        this.loading = false;
        this.errorMsg = "";
        this.successMsg = "";
    }
    ngOnInit() {
    }
    onSubmit() {
        this.loading = true;
        this.authService.UserResetRequest(this.email).then((resp) => {
            console.log("User Password Reset Request Created", resp);
            this.errorMsg = "";
            this.successMsg = "Password reset request sent. Check your email for further instructions.";
            this.loading = false;
        }, (err) => {
            console.error("Error submitting password reset request", err);
            this.errorMsg = "An error occurred while submitting password reset request.\nPlease try again later or contact support for assistance.";
            this.successMsg = "";
            this.loading = false;
        });
    }
}
AuthResetRequestComponent.ɵfac = function AuthResetRequestComponent_Factory(t) { return new (t || AuthResetRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthResetRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthResetRequestComponent, selectors: [["app-auth-reset-request"]], decls: 25, vars: 5, consts: [[1, "az-signin-wrapper"], [1, "az-card-signin"], ["src", "assets/images/banner-transparent-trim.png", "alt", "fasten", 1, "az-img-logo"], [1, "az-signin-header"], [3, "ngSubmit"], ["resetForm", "ngForm"], [1, "form-group"], ["type", "email", "id", "email", "required", "", "name", "email", "placeholder", "Enter your email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["emailCtrl", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-az-primary", "btn-block", 3, "disabled"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], ["class", "alert alert-success mt-3", "role", "alert", 4, "ngIf"], [1, "az-signin-footer"], ["routerLink", "/auth/signin"], [1, "alert", "alert-danger"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"], ["role", "alert", 1, "alert", "alert-success", "mt-3"]], template: function AuthResetRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Please enter your email to receive a password reset link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AuthResetRequestComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AuthResetRequestComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AuthResetRequestComponent_div_15_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AuthResetRequestComponent_div_18_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AuthResetRequestComponent_div_19_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13)(21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Remembered your password? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMsg);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXJlc2V0LXJlcXVlc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 48453:
/*!**********************************************************!*\
  !*** ./src/app/pages/auth-reset/auth-reset.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthResetComponent": () => (/* binding */ AuthResetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);





function AuthResetComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthResetComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password must be at least 8 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthResetComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AuthResetComponent_div_15_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AuthResetComponent_div_15_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["minlength"]);
} }
function AuthResetComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Confirm password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthResetComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AuthResetComponent_div_21_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors["required"]);
} }
function AuthResetComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.errorMsg, " ");
} }
class AuthResetComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.password = "";
        this.confirmPassword = "";
        this.loading = false;
        this.resetToken = "";
        this.errorMsg = "";
    }
    ngOnInit() {
        const urlParams = new URLSearchParams(window.location.search);
        this.resetToken = urlParams.get('token');
    }
    onSubmit() {
        if (this.password != this.confirmPassword) {
            this.errorMsg = "passwords do not match";
            return;
        }
        if (!this.resetToken) {
            this.errorMsg = "no reset token provided";
            return;
        }
        this.loading = true;
        this.authService.UserReset(this.password, this.resetToken)
            .then(() => {
            this.loading = false;
            this.router.navigateByUrl('/dashboard');
        })
            .catch((err) => {
            this.loading = false;
            this.errorMsg = "an error occurred during password reset";
            console.log(err);
        });
    }
}
AuthResetComponent.ɵfac = function AuthResetComponent_Factory(t) { return new (t || AuthResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthResetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthResetComponent, selectors: [["app-auth-reset"]], decls: 26, vars: 6, consts: [[1, "az-signin-wrapper"], [1, "az-card-signin"], ["src", "assets/images/banner-transparent-trim.png", "alt", "fasten", 1, "az-img-logo"], [1, "az-signin-header"], [3, "ngSubmit"], ["resetForm", "ngForm"], [1, "form-group"], ["required", "", "minlength", "8", "type", "password", "id", "password", "name", "password", "placeholder", "Enter your new password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passwordCtrl", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "password", "id", "confirmPassword", "required", "", "name", "confirmPassword", "placeholder", "Confirm your new password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passwordConfirmCtrl", "ngModel"], ["type", "submit", 1, "btn", "btn-az-primary", "btn-block", 3, "disabled"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], [1, "az-signin-footer"], [1, "alert", "alert-danger"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"]], template: function AuthResetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Please enter your new password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AuthResetComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AuthResetComponent_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AuthResetComponent_div_15_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AuthResetComponent_Template_input_ngModelChange_19_listener($event) { return ctx.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AuthResetComponent_div_21_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AuthResetComponent_div_24_Template, 4, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXJlc2V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _models_fasten_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/fasten/user */ 98821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);






function AuthSigninComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.message, "\n");
} }
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AuthSigninComponent_div_15_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AuthSigninComponent_div_15_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AuthSigninComponent_div_15_div_3_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors["email"]);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AuthSigninComponent_div_21_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AuthSigninComponent_div_21_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors["minlength"]);
} }
function AuthSigninComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 22);
} }
function AuthSigninComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.errorMsg, " ");
} }
const _c0 = function () { return { "height": "560px" }; };
class AuthSigninComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loading = false;
        this.showMessage = false;
        this.submitted = false;
        this.existingUser = new _models_fasten_user__WEBPACK_IMPORTED_MODULE_0__.User();
        this.errorMsg = "";
        this.message = "";
    }
    ngOnInit() {
        const urlParams = new URLSearchParams(window.location.search);
        this.setMessage(urlParams.get('action') || "");
    }
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
    setMessage(action) {
        if (action === "email-changed") {
            this.showMessage = true;
            this.message = "Email successfully changed! Please sign in with your new email.";
        }
        else if (action === "password-changed") {
            this.showMessage = true;
            this.message = "Password successfully changed! Please sign in with your new password.";
        }
    }
}
AuthSigninComponent.ɵfac = function AuthSigninComponent_Factory(t) { return new (t || AuthSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthSigninComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthSigninComponent, selectors: [["app-auth-signin"]], decls: 34, vars: 11, consts: [["class", "az-signin-message", 4, "ngIf"], [1, "az-signin-wrapper"], [1, "az-card-signin", 3, "ngStyle"], ["src", "assets/images/banner-transparent-trim.png", "alt", "fasten", 1, "az-img-logo"], [1, "az-signin-header"], [4, "ngIf"], [3, "ngSubmit"], ["userForm", "ngForm"], [1, "form-group"], ["name", "email", "required", "", "email", "", "minlength", "4", "type", "text", "placeholder", "Enter your username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["name", "password", "required", "", "minlength", "8", "type", "password", "placeholder", "Enter your password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "submit", 1, "btn", "btn-az-primary", "btn-block", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], [1, "az-signin-footer"], ["routerLink", "/auth/reset/request"], ["routerLink", "/auth/signup"], [1, "az-signin-message"], [1, "alert", "alert-danger"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"]], template: function AuthSigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AuthSigninComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AuthSigninComponent_h4_7_Template, 2, 0, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AuthSigninComponent_Template_form_ngSubmit_8_listener() { return ctx.signinSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AuthSigninComponent_Template_input_ngModelChange_13_listener($event) { return ctx.existingUser.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AuthSigninComponent_div_15_Template, 4, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AuthSigninComponent_Template_input_ngModelChange_19_listener($event) { return ctx.existingUser.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AuthSigninComponent_div_21_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AuthSigninComponent_span_24_Template, 1, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AuthSigninComponent_div_25_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17)(27, "p")(28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Create an Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.existingUser.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.existingUser.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r2.form.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMsg);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXNpZ25pbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 83515:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/auth-signup-organization/auth-signup-organization.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignupOrganizationComponent": () => (/* binding */ AuthSignupOrganizationComponent)
/* harmony export */ });
/* harmony import */ var _models_fasten_organization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/fasten/organization */ 41306);
/* harmony import */ var _components_logo_cropper_logo_cropper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/logo-cropper/logo-cropper.component */ 57993);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/connect.service */ 84543);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);











function AuthSignupOrganizationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const img_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "https://cdn.fastenhealth.com/logos/sources/", img_r14, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function AuthSignupOrganizationComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Organization Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Organization Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupOrganizationComponent_div_18_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AuthSignupOrganizationComponent_div_18_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors["minlength"]);
} }
function AuthSignupOrganizationComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Website is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Website must be a valid url starting with https:// ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupOrganizationComponent_div_22_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AuthSignupOrganizationComponent_div_22_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["pattern"]);
} }
function AuthSignupOrganizationComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Privacy Policy Url is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Privacy Policy must be a valid url starting with https:// ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupOrganizationComponent_div_26_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AuthSignupOrganizationComponent_div_26_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["pattern"]);
} }
function AuthSignupOrganizationComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Terms & Conditions must be a valid url starting with https:// ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupOrganizationComponent_div_30_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["pattern"]);
} }
function AuthSignupOrganizationComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Company Size is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupOrganizationComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupOrganizationComponent_div_48_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["required"]);
} }
function AuthSignupOrganizationComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 39);
} }
function AuthSignupOrganizationComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r13.errorMsg, " ");
} }
class AuthSignupOrganizationComponent {
    constructor(connectService, router, modalService, sanitizer) {
        this.connectService = connectService;
        this.router = router;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
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
        this.croppedImageEvent = null;
    }
    ngOnInit() {
    }
    signupOrgSubmit() {
        this.loading = true;
        this.submitted = true;
        this.newOrg.logo_uri = "https://example.com"; //TODO: placeholder logo url.
        console.log("starting signup process...", this.newOrg);
        this.connectService.createOrg(this.newOrg, this.croppedImageEvent?.blob).subscribe((resp) => {
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
            this.croppedImageEvent = result;
            this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(this.croppedImageEvent?.objectUrl);
        }, (reason) => {
            console.log(`Dismissed`, reason);
        });
    }
}
AuthSignupOrganizationComponent.ɵfac = function AuthSignupOrganizationComponent_Factory(t) { return new (t || AuthSignupOrganizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer)); };
AuthSignupOrganizationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AuthSignupOrganizationComponent, selectors: [["app-auth-signup-organization"]], decls: 53, vars: 19, consts: [[1, "row", 2, "overflow", "hidden", "height", "95vh"], ["class", "col-1 nopadding", 4, "ngFor", "ngForOf"], [1, "floating-signup", "outer-div"], [1, "inner-div"], [1, "az-signin-wrapper"], [1, "az-card-signin"], ["src", "assets/images/banner-transparent-trim.png", "alt", "fasten", 1, "az-img-logo", "mg-b-20"], [1, "az-signin-header"], ["height", "150px", 1, "cursor-pointer", "mx-auto", "d-block", "rounded-circle", "border", 3, "src", "click"], [3, "ngSubmit"], ["orgForm", "ngForm"], [1, "form-group"], ["name", "name", "required", "", "minlength", "2", "type", "text", "placeholder", "Organization Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["name", "website_uri", "required", "", "autocapitalize", "none", "placeholder", "Website", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["website_uri", "ngModel"], ["name", "privacy_policy_uri", "required", "", "placeholder", "Privacy Policy Url", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["privacy_policy_uri", "ngModel"], ["name", "terms_and_conditions_uri", "placeholder", "Terms & Conditions Url", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["terms_and_conditions_uri", "ngModel"], ["name", "company_size", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["company_size", "ngModel"], ["value", "", "disabled", "", "selected", ""], ["value", "1_10"], ["value", "10_100"], ["value", "100_500"], ["value", "500_2000"], ["value", "2000_5000"], ["value", "5000_plus"], ["type", "submit", "ngbTooltip", "Logo is required", "placement", "top", 1, "btn", "btn-az-primary", "btn-block", 3, "disabled", "disableTooltip"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], [1, "col-1", "nopadding"], [1, "d-flex", "h-100"], [1, "mx-auto", "my-auto"], [1, "rounded", "img-fluid", "opacity-20", 3, "src"], [1, "alert", "alert-danger"], [4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"]], template: function AuthSignupOrganizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupOrganizationComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Let's Get Started!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Tell us about your Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuthSignupOrganizationComponent_Template_img_click_12_listener() { return ctx.openLogoCropper(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AuthSignupOrganizationComponent_Template_form_ngSubmit_13_listener() { return ctx.signupOrgSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 11)(16, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupOrganizationComponent_Template_input_ngModelChange_16_listener($event) { return ctx.newOrg.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, AuthSignupOrganizationComponent_div_18_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11)(20, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupOrganizationComponent_Template_input_ngModelChange_20_listener($event) { return ctx.newOrg.website_uri = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, AuthSignupOrganizationComponent_div_22_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 11)(24, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupOrganizationComponent_Template_input_ngModelChange_24_listener($event) { return ctx.newOrg.privacy_policy_uri = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AuthSignupOrganizationComponent_div_26_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 11)(28, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupOrganizationComponent_Template_input_ngModelChange_28_listener($event) { return ctx.newOrg.terms_and_conditions_uri = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, AuthSignupOrganizationComponent_div_30_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 11)(32, "select", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupOrganizationComponent_Template_select_ngModelChange_32_listener($event) { return ctx.newOrg.company_size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Company Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "1-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "11-100");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "101-500");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "501-2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "2001-5000");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "5000+");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, AuthSignupOrganizationComponent_div_48_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " Save Organization ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, AuthSignupOrganizationComponent_span_51_Template, 1, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, AuthSignupOrganizationComponent_div_52_Template, 4, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.gridImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r1.form.valid || !ctx.croppedImageEvent || ctx.loading)("disableTooltip", !!ctx.croppedImageEvent);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMsg);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip], styles: [".circle[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #00d53b;\n  margin: 10px;\n  border-radius: 50%;\n}\n\n.circle-inner[_ngcontent-%COMP%] {\n  color: white;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  height: 100px;\n  width: 100px;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtc2lnbnVwLW9yZ2FuaXphdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImF1dGgtc2lnbnVwLW9yZ2FuaXphdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGQ1M2I7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2lyY2xlLWlubmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 32862:
/*!************************************************************!*\
  !*** ./src/app/pages/auth-signup/auth-signup.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignupComponent": () => (/* binding */ AuthSignupComponent)
/* harmony export */ });
/* harmony import */ var _models_fasten_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/fasten/user */ 98821);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _directives_password_confirm_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/password-confirm-validator.directive */ 36465);








function AuthSignupComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const img_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "https://cdn.fastenhealth.com/logos/sources/", img_r14, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function AuthSignupComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupComponent_div_17_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AuthSignupComponent_div_17_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors["minlength"]);
} }
function AuthSignupComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Email must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_21_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Email must be a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupComponent_div_21_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AuthSignupComponent_div_21_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AuthSignupComponent_div_21_div_3_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["email"]);
} }
function AuthSignupComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password must be at least 8 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_25_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password must contain at least one uppercase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_25_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password must contain at least one lowercase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_25_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password must contain at least one digit. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_25_ng_container_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password must contain at least special character. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_25_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupComponent_div_25_ng_container_3_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AuthSignupComponent_div_25_ng_container_3_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AuthSignupComponent_div_25_ng_container_3_div_3_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AuthSignupComponent_div_25_ng_container_3_div_4_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r22.newUser.password == null ? null : ctx_r22.newUser.password.match("^(?=.*[A-Z])")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r22.newUser.password == null ? null : ctx_r22.newUser.password.match("(?=.*[a-z])")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r22.newUser.password == null ? null : ctx_r22.newUser.password.match("(.*[0-9].*)")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r22.newUser.password == null ? null : ctx_r22.newUser.password.match("(?=.*[!@#$%^&*])")));
} }
function AuthSignupComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupComponent_div_25_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AuthSignupComponent_div_25_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AuthSignupComponent_div_25_ng_container_3_Template, 5, 4, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["pattern"]);
} }
function AuthSignupComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password confirmation does not match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupComponent_div_29_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["password_confirm"]);
} }
function AuthSignupComponent_div_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " You must agree to the Privacy Policy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignupComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupComponent_div_38_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["required"]);
} }
function AuthSignupComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 34);
} }
function AuthSignupComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r13.errorMsg, " ");
} }
class AuthSignupComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.strong_password_pattern = _app_constants__WEBPACK_IMPORTED_MODULE_1__.STRONG_PASSWORD_PATTERN;
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
        this.inviteToken = "";
    }
    ngOnInit() {
        const urlParams = new URLSearchParams(window.location.search);
        this.inviteToken = urlParams.get('token');
    }
    signupSubmit() {
        this.loading = true;
        this.submitted = true;
        let signupFn = null;
        if (this.inviteToken) {
            signupFn = this.authService.SignupWithInvite(this.newUser, this.inviteToken);
        }
        else {
            signupFn = this.authService.Signup(this.newUser);
        }
        signupFn.then((tokenResp) => {
            this.loading = false;
            console.log(tokenResp);
            if (this.inviteToken) {
                //if we are signing up with an invite, we should redirect to the dashboard
                this.router.navigateByUrl('/dashboard');
            }
            else {
                //after creating a user, proceed to create an organization
                this.router.navigateByUrl('/auth/signup/org');
            }
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
AuthSignupComponent.ɵfac = function AuthSignupComponent_Factory(t) { return new (t || AuthSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AuthSignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AuthSignupComponent, selectors: [["app-auth-signup"]], decls: 43, vars: 15, consts: [[1, "row", 2, "overflow", "hidden", "height", "95vh"], ["class", "col-1 nopadding", 4, "ngFor", "ngForOf"], [1, "floating-signup", "outer-div"], [1, "inner-div"], [1, "az-signin-wrapper"], [1, "az-card-signin"], ["src", "assets/images/banner-transparent-trim.png", "alt", "fasten", 1, "az-img-logo"], [1, "az-signin-header"], ["passwordConfirmValidator", "", 3, "ngSubmit"], ["userForm", "ngForm"], [1, "form-group"], ["name", "name", "required", "", "minlength", "2", "type", "text", "placeholder", "First Name & Last Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["name", "email", "required", "", "email", "", "minlength", "4", "type", "email", "autocapitalize", "none", "placeholder", "Email Address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["name", "password", "required", "", "minlength", "8", "type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["password", "ngModel"], ["name", "password_confirm", "required", "", "type", "password", "placeholder", "Confirm Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password_confirm", "ngModel"], [1, "form-group", "form-check"], ["name", "agree_terms", "type", "checkbox", "id", "agreeTermsCheck", "required", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["agree_terms", "ngModel"], ["for", "agreeTermsCheck", 1, "form-check-label"], ["href", "https://policy.fastenhealth.com/connect/privacy_policy.html"], ["type", "submit", 1, "btn", "btn-az-primary", "btn-block", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], [1, "col-1", "nopadding"], [1, "d-flex", "h-100"], [1, "mx-auto", "my-auto"], [1, "rounded", "img-fluid", "opacity-20", 3, "src"], [1, "alert", "alert-danger"], [4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"]], template: function AuthSignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthSignupComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Let's Get Started!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Create your Fasten Connect account");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AuthSignupComponent_Template_form_ngSubmit_12_listener() { return ctx.signupSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10)(15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupComponent_Template_input_ngModelChange_15_listener($event) { return ctx.newUser.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, AuthSignupComponent_div_17_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 10)(19, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupComponent_Template_input_ngModelChange_19_listener($event) { return ctx.newUser.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AuthSignupComponent_div_21_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 10)(23, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupComponent_Template_input_ngModelChange_23_listener($event) { return ctx.newUser.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AuthSignupComponent_div_25_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 10)(27, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupComponent_Template_input_ngModelChange_27_listener($event) { return ctx.newUser.password_confirm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, AuthSignupComponent_div_29_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 20)(31, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AuthSignupComponent_Template_input_ngModelChange_31_listener($event) { return ctx.newUser.agree_terms = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " I have read and agree to the Fasten Connect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, AuthSignupComponent_div_38_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " Create Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, AuthSignupComponent_span_41_Template, 1, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, AuthSignupComponent_div_42_Template, 4, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](24);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](28);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.gridImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newUser.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.invalid && (_r2.dirty || _r2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newUser.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newUser.password)("pattern", ctx.strong_password_pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newUser.password_confirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors["password_confirm"]) && (_r8.dirty || _r8.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newUser.agree_terms);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r10.invalid && (_r10.dirty || _r10.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r1.form.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMsg);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxRequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _directives_password_confirm_validator_directive__WEBPACK_IMPORTED_MODULE_3__.PasswordConfirmValidatorDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXNpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 24789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ 31208);


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
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 201, vars: 8, consts: [[1, "az-content", "az-content-dashboard"], [1, "container"], [1, "az-content-body"], [1, "az-dashboard-one-title"], [1, "az-dashboard-title"], [1, "az-content-header-right"], [1, "media"], [1, "media-body"], ["role", "alert", 1, "alert", "alert-warning"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "row", "row-sm", "mg-b-20", "mg-lg-b-0"], [1, "col-lg-5", "col-xl-4"], [1, "row", "row-sm"], [1, "col-md-6", "col-lg-12", "mg-b-20", "mg-md-b-0", "mg-lg-b-20"], [1, "col-sm-6"], [1, "blurred", "card", "card-dashboard-two"], [1, "card-header"], [1, "icon", "ion-md-trending-up", "tx-success"], [1, "card-body"], [1, "bounce-rate-chart-wrapper"], ["baseChart", "", 3, "type", "datasets", "labels", "options"], [1, "col-sm-6", "mg-t-20", "mg-sm-t-0"], [1, "icon", "ion-md-trending-down", "tx-danger"], [1, "users-bar-chart-wrapper"], [1, "col-md-6", "col-lg-12"], [1, "blurred", "card", "card-dashboard-five"], [1, "card-title"], [1, "card-text"], [1, "card-body", "row", "row-sm"], [1, "col-6", "d-sm-flex", "align-items-center"], [1, "card-chart", "bg-primary"], ["data-peity", "{\"fill\": [\"#fff\"], \"width\": 20, \"height\": 20 }", 1, "peity-bar", 2, "display", "none"], ["height", "20", "width", "20", 1, "peity"], ["data-value", "6", "fill", "#fff", "x", "0.4", "y", "2.8571428571428577", "width", "3.2", "height", "17.142857142857142"], ["data-value", "4", "fill", "#fff", "x", "4.4", "y", "8.571428571428573", "width", "3.1999999999999993", "height", "11.428571428571427"], ["data-value", "7", "fill", "#fff", "x", "8.4", "y", "0", "width", "3.1999999999999993", "height", "20"], ["data-value", "5", "fill", "#fff", "x", "12.4", "y", "5.7142857142857135", "width", "3.1999999999999993", "height", "14.285714285714286"], ["data-value", "7", "fill", "#fff", "x", "16.4", "y", "0", "width", "3.200000000000003", "height", "20"], [1, "card-chart", "bg-purple"], ["data-peity", "{\"fill\": [\"#fff\"], \"width\": 21, \"height\": 20 }", 1, "peity-bar", 2, "display", "none"], ["height", "20", "width", "21", 1, "peity"], ["data-value", "7", "fill", "#fff", "x", "0.42000000000000004", "y", "0", "width", "3.3600000000000003", "height", "20"], ["data-value", "4", "fill", "#fff", "x", "4.62", "y", "8.571428571428573", "width", "3.3599999999999994", "height", "11.428571428571427"], ["data-value", "5", "fill", "#fff", "x", "8.82", "y", "5.7142857142857135", "width", "3.3599999999999994", "height", "14.285714285714286"], ["data-value", "7", "fill", "#fff", "x", "13.020000000000001", "y", "0", "width", "3.3599999999999977", "height", "20"], ["data-value", "2", "fill", "#fff", "x", "17.22", "y", "14.285714285714286", "width", "3.360000000000003", "height", "5.7142857142857135"], [1, "col-lg-7", "col-xl-8", "mg-t-20", "mg-lg-t-0"], [1, "blurred", "card", "card-table-one"], [1, "az-content-text", "mg-b-20"], [1, "table-responsive"], [1, "table"], [1, "wd-5p"], [1, "wd-45p"], ["src", "https://cdn.fastenhealth.com/logos/sources/e16b9952-8885-4905-b2e3-b0f04746ed5c.png", 2, "width", "2em"], ["src", "https://cdn.fastenhealth.com/logos/sources/41b42645-350f-475e-b21b-e7a1276fca4f.png", 2, "width", "2em"], ["src", "https://cdn.fastenhealth.com/logos/sources/a0c9ecff-a470-47b9-aa32-debfa2441005.png", 2, "width", "2em"], ["src", "https://cdn.fastenhealth.com/logos/sources/5863477c-a178-41fc-b9f4-c881f9e8dbca.png", 2, "width", "2em"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8)(21, "button", 9)(22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Under Construction!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " The Dashboard is still under development. We will notify you once you can start using it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11)(28, "div", 12)(29, "div", 13)(30, "div", 14)(31, "div", 13)(32, "div", 15)(33, "div", 16)(34, "div", 17)(35, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "33.50% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "18.02%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "API Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19)(43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "canvas", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22)(46, "div", 16)(47, "div", 17)(48, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "86 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "0.86%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Webhooks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19)(56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "canvas", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25)(59, "div", 26)(60, "div", 17)(61, "h6", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Connections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Total number of authorized patient connections for this billing period.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29)(66, "div", 30)(67, "div", 31)(68, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "6,4,7,5,7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "svg", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "rect", 34)(72, "rect", 35)(73, "rect", 36)(74, "rect", 37)(75, "rect", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div")(77, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Unique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "33");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 30)(82, "div", 39)(83, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "7,4,5,7,2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "svg", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "rect", 42)(87, "rect", 43)(88, "rect", 44)(89, "rect", 45)(90, "rect", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div")(92, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 47)(97, "div", 48)(98, "h6", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Authorized Connections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Recently connected healthcare insitutions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 50)(103, "table", 51)(104, "thead")(105, "tr")(106, "th", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "th", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Portal Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Synced Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Patient Auth ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "tbody")(117, "tr")(118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td")(121, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Epic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td")(124, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "134");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " (1.51%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "6f3f3770-ad00-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "tr")(132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td")(135, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "eClincalWorks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td")(138, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "290");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " (3.30%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "ae5e7f40-4e7c-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "tr")(146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td")(149, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Medicare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td")(152, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "250");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " (3.00%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "b3af4ab6-9275-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "tr")(160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td")(163, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Epic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td")(166, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "216");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " (2.79%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "baccf6e8-f020-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "tr")(174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td")(177, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Epic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td")(180, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "216");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " (2.79%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "61a193cc-33ed-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "tr")(188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td")(191, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "United Healthcare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td")(194, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "197");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " (2.12%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "6a79f333-9408-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("datasets", ctx.bounceRateChartData)("labels", ctx.bounceRateChartLabels)("options", ctx.bounceRateChartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "bar")("datasets", ctx.usersBarChartData)("labels", ctx.usersBarChartLabels)("options", ctx.usersBarChartOptions);
    } }, dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__.BaseChartDirective], styles: [".blurred[_ngcontent-%COMP%] {\n  \n  filter: blur(3px);\n  \n  filter: url(\"/assets/blur.svg#gaussian_blur\");\n  \n  -webkit-filter: blur(3px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG9DQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQ0FBQTtFQUNBLDZDQUFBO0VBRUEseURBQUE7RUFDQSx5QkFBQTtBQUZGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVycmVkIHtcblxuICAvKiBBbnkgYnJvd3NlciB3aGljaCBzdXBwb3J0cyBDU1MzICovXG4gIGZpbHRlcjogYmx1cigzcHgpO1xuXG4gIC8qIEZpcmVmb3ggdmVyc2lvbiAzNCBhbmQgZWFybGllciAqL1xuICBmaWx0ZXI6IHVybChcIi9hc3NldHMvYmx1ci5zdmcjZ2F1c3NpYW5fYmx1clwiKTtcblxuICAvKiBXZWJraXQgaW4gQ2hyb21lIDUyLCBTYWZhcmkgOSwgT3BlcmEgMzksIGFuZCBlYXJsaWVyICovXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XG59XG4iXX0= */"] });


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
/* harmony import */ var _components_org_credentials_editor_org_credentials_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/org-credentials-editor/org-credentials-editor.component */ 39302);
/* harmony import */ var _components_org_webhooks_editor_org_webhooks_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/org-webhooks-editor/org-webhooks-editor.component */ 57751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/connect.service */ 84543);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _services_portal_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/portal-config.service */ 32608);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-moment */ 20728);










function DevelopersComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12, 13)(2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DevelopersComponent_div_17_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r3.hidden = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Credential Created!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Make sure to copy your Private Key now. You won\u2019t be able to see it again! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "strong", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Public Id:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "strong", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Private Key:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.newCredential.org_credential.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.newCredential.private_key);
} }
function DevelopersComponent_tr_31_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 22);
} if (rf & 2) {
    const cred_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbTooltip", cred_r6.note);
} }
const _c0 = function (a0, a1) { return { "badge-success": a0, "badge-danger": a1 }; };
function DevelopersComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 17)(2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mousedown", function DevelopersComponent_tr_31_Template_i_mousedown_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const cred_r6 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.copyPublicId(cred_r6)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, DevelopersComponent_tr_31_i_7_Template, 1, 1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td")(9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td")(15, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DevelopersComponent_tr_31_Template_i_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const cred_r6 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.showOrgCredentialEditorModal("edit", cred_r6)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const cred_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](9, _c0, cred_r6.status === "active", cred_r6.status === "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](cred_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", cred_r6.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", cred_r6 == null ? null : cred_r6.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](cred_r6.private_key || "REDACTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 6, cred_r6.created_at, "LL"));
} }
function DevelopersComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 17)(2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td")(7, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td")(13, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DevelopersComponent_tr_53_Template_i_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const webhook_r12 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.showOrgWebhookEditorModal("edit", webhook_r12)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const webhook_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c0, webhook_r12.status === "active", webhook_r12.status === "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](webhook_r12.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](webhook_r12.endpoint_uri);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbTooltip", webhook_r12 == null ? null : webhook_r12.event_types == null ? null : webhook_r12.event_types.join(", "));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", webhook_r12 == null ? null : webhook_r12.event_types == null ? null : webhook_r12.event_types.length, " event(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/developers/webhooks/" + webhook_r12.id + "/logs");
} }
class DevelopersComponent {
    constructor(connectService, modalService, portalConfig) {
        this.connectService = connectService;
        this.modalService = modalService;
        this.portalConfig = portalConfig;
        this.orgCredentials = {
            [_app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Live]: [],
            [_app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Test]: [],
        };
        this.newCredential = null;
        this.orgWebhooks = {
            [_app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Live]: [],
            [_app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Test]: [],
        };
    }
    ngOnInit() {
        this.connectService.getOrgCredentials(this.portalConfig.config$.user?.org_id).subscribe((data) => {
            for (let cred of data) {
                this.orgCredentials[cred.api_mode].push(cred);
            }
        });
        this.connectService.getOrgWebhooks(this.portalConfig.config$.user?.org_id).subscribe((data) => {
            for (let hook of data) {
                this.orgWebhooks[hook.api_mode].push(hook);
            }
        });
    }
    showOrgCredentialEditorModal(editorMode, orgCredential) {
        let orgCredentialEditorModal = this.modalService.open(_components_org_credentials_editor_org_credentials_editor_component__WEBPACK_IMPORTED_MODULE_1__.OrgCredentialsEditorComponent, { ariaLabelledBy: 'modal-basic-title' });
        orgCredentialEditorModal.componentInstance.org = this.portalConfig.config$.org;
        orgCredentialEditorModal.componentInstance.apiMode = this.portalConfig.config$.apiMode;
        orgCredentialEditorModal.componentInstance.editorMode = editorMode;
        if (editorMode === 'edit') {
            orgCredentialEditorModal.componentInstance.orgCredential = orgCredential;
        }
        orgCredentialEditorModal.result.then((result) => {
            console.log(`Closed with:`, result);
            if (editorMode == 'create') {
                this.orgCredentials[result.org_credential.api_mode].push(result.org_credential);
                this.newCredential = result;
            }
            else {
                //find the credential and update it or delete it
                let apiMode = result.org_credential.api_mode;
                for (let i = 0; i < this.orgCredentials[apiMode].length; i++) {
                    if (this.orgCredentials[apiMode][i].id == result.org_credential.id) {
                        if (result.action == _app_constants__WEBPACK_IMPORTED_MODULE_0__.CRUDMode.Delete) {
                            this.orgCredentials[apiMode].splice(i, 1);
                            break;
                        }
                        else {
                            //update the credential
                            this.orgCredentials[apiMode][i] = result.org_credential;
                            break;
                        }
                    }
                }
            }
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
        });
    }
    copyPublicId(credential) {
        navigator.clipboard.writeText(credential.id);
    }
    showOrgWebhookEditorModal(editorMode, orgWebhook) {
        let orgWebhookEditorModal = this.modalService.open(_components_org_webhooks_editor_org_webhooks_editor_component__WEBPACK_IMPORTED_MODULE_2__.OrgWebhooksEditorComponent, { ariaLabelledBy: 'modal-basic-title' });
        orgWebhookEditorModal.componentInstance.org = this.portalConfig.config$.org;
        orgWebhookEditorModal.componentInstance.apiMode = this.portalConfig.config$.apiMode;
        orgWebhookEditorModal.componentInstance.editorMode = editorMode;
        if (editorMode === 'edit') {
            orgWebhookEditorModal.componentInstance.orgWebhook = orgWebhook;
        }
        orgWebhookEditorModal.result.then((result) => {
            console.log(`Closed with:`, result);
            let apiMode = result.org_webhook.api_mode;
            if (editorMode == 'create') {
                this.orgWebhooks[apiMode].push(result.org_webhook);
            }
            else {
                apiMode = orgWebhook?.api_mode;
                //find the webhook and update it
                for (let i = 0; i < this.orgWebhooks[apiMode].length; i++) {
                    if (this.orgWebhooks[apiMode][i].id == result.org_webhook.id) {
                        if (result.action == _app_constants__WEBPACK_IMPORTED_MODULE_0__.CRUDMode.Delete) {
                            this.orgWebhooks[apiMode].splice(i, 1);
                            break;
                        }
                        else {
                            //update the webhook
                            this.orgWebhooks[apiMode][i] = result.org_webhook;
                            break;
                        }
                    }
                }
            }
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
        });
    }
}
DevelopersComponent.ɵfac = function DevelopersComponent_Factory(t) { return new (t || DevelopersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_portal_config_service__WEBPACK_IMPORTED_MODULE_4__.PortalConfigService)); };
DevelopersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DevelopersComponent, selectors: [["app-developers"]], decls: 54, vars: 3, consts: [[1, "mg-t-10", "container"], [1, "mg-l-auto", "nav", "nav-pills", "flex-column", "flex-md-row"], ["data-bs-toggle", "tab", "href", "#", 1, "nav-link", "active"], [1, "card", "mg-t-20"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], ["href", "https://docs.connect.fastenhealth.com", "target", "_blank", 1, "btn", "card-link", "float-right"], ["type", "button", 1, "btn", "btn-outline-indigo", "float-right", 3, "click"], [1, "card-body"], ["class", "alert alert-success mg-t-10", "role", "alert", 4, "ngIf"], [1, "table", "mg-t-10"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-success", "mg-t-10"], ["credWarning", ""], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "mg-r-10"], ["scope", "row"], [1, "badge", 3, "ngClass"], ["ngbTooltip", "Copy to Clipboard", 1, "mg-l-2", "cursor-pointer", "fas", "fa-clipboard", 3, "mousedown"], ["class", "mg-l-2 cursor-pointer fas fa-info-circle", 3, "ngbTooltip", 4, "ngIf"], ["placement", "top", "ngbTooltip", "Edit / Delete", 1, "fas", "fa-ellipsis-v", "pl-2", "pr-2", "float-right", "cursor-pointer", 3, "click"], [1, "mg-l-2", "cursor-pointer", "fas", "fa-info-circle", 3, "ngbTooltip"], [3, "ngbTooltip"], [3, "routerLink"], ["ngbTooltip", "View Logs", 1, "mg-l-2", "cursor-pointer", "fas", "fa-list"]], template: function DevelopersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "API Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " API Credentials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Learn more about API authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3)(10, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Credentials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DevelopersComponent_Template_button_click_12_listener() { return ctx.showOrgCredentialEditorModal("create"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Create Credentials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 7)(15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Create a key that unlocks full API access, enabling extensive interaction with your account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, DevelopersComponent_div_17_Template, 18, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "table", 9)(19, "thead")(20, "tr")(21, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Public Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Private Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, DevelopersComponent_tr_31_Template, 16, 12, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 3)(33, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Webhooks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DevelopersComponent_Template_button_click_35_listener() { return ctx.showOrgWebhookEditorModal("create"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Create Webhook");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 7)(38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Set up your webhook endpoint to receive events from Fasten Connect or learn more about Webhooks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "table", 9)(41, "thead")(42, "tr")(43, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Delivery Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, DevelopersComponent_tr_53_Template, 14, 9, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !!ctx.newCredential);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.orgCredentials[ctx.portalConfig.config$.apiMode]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.orgWebhooks[ctx.portalConfig.config$.apiMode]);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, ngx_moment__WEBPACK_IMPORTED_MODULE_9__.DateFormatPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZlbG9wZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 57167:
/*!************************************************************!*\
  !*** ./src/app/pages/org-billing/org-billing.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgBillingComponent": () => (/* binding */ OrgBillingComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_portal_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/portal-config.service */ 32608);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/connect.service */ 84543);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);






function OrgBillingComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Invoices & Payment Methods ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Visit the Billing Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 12)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Your account is active. You can view invoices and payment methods in the billing portal.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r1.stripe_customer_portal, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function OrgBillingComponent_div_10_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Plan Changed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Your plan changed recently. It may take up to 24 hours to reflect plan changes in your organization profile. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function OrgBillingComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Inactive Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 12)(6, "div", 7)(7, "div", 13)(8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "No plan selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Please contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "support@fastenhealth.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " to activate your account. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Inactive accounts may be purged after 30 days. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, OrgBillingComponent_div_10_div_17_Template, 4, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.recentlyChanged);
} }
class OrgBillingComponent {
    constructor(portalConfig, connectService) {
        this.portalConfig = portalConfig;
        this.connectService = connectService;
        this.stripe_customer_portal = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stripe_customer_portal;
        this.loading = false;
        this.recentlyChanged = false;
    }
    ngOnInit() {
        //read query string parameters
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get('session_id');
        if (sessionId) {
            this.recentlyChanged = true;
        }
    }
}
OrgBillingComponent.ɵfac = function OrgBillingComponent_Factory(t) { return new (t || OrgBillingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_portal_config_service__WEBPACK_IMPORTED_MODULE_1__.PortalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService)); };
OrgBillingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OrgBillingComponent, selectors: [["app-org-billing"]], decls: 11, vars: 2, consts: [[1, "mg-t-10", "container"], [1, "mg-l-auto", "nav", "nav-pills", "flex-column", "flex-md-row"], ["data-bs-toggle", "tab", "routerLink", "/org/settings", 1, "nav-link"], ["data-bs-toggle", "tab", "routerLink", "/org/team", 1, "nav-link"], ["data-bs-toggle", "tab", "routerLink", "/org/billing", 1, "nav-link", "active"], ["activePlan", ""], ["class", "row", 4, "ngIf", "ngIfElse"], [1, "row"], [1, "col-12"], [1, "card", "mg-t-20"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-link", "float-right", 3, "href"], [1, "card-body"], [1, "col-12", "tx-gray-700"], ["href", "mailto:support@fastenhealth.com"], ["class", "alert alert-info mg-b-30", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-info", "mg-b-30"]], template: function OrgBillingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, OrgBillingComponent_ng_template_8_Template, 10, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, OrgBillingComponent_div_10_Template, 18, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.portalConfig.config$.org == null ? null : ctx.portalConfig.config$.org.plan) != "paid")("ngIfElse", _r0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmctYmlsbGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 16226:
/*!**************************************************************!*\
  !*** ./src/app/pages/org-settings/org-settings.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgSettingsComponent": () => (/* binding */ OrgSettingsComponent)
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.constants */ 2976);
/* harmony import */ var _models_fasten_organization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/fasten/organization */ 41306);
/* harmony import */ var _components_logo_cropper_logo_cropper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/logo-cropper/logo-cropper.component */ 57993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_portal_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/portal-config.service */ 32608);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/connect.service */ 84543);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);











function OrgSettingsComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Organization Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrgSettingsComponent_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Organization Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrgSettingsComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, OrgSettingsComponent_div_31_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, OrgSettingsComponent_div_31_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["minlength"]);
} }
function OrgSettingsComponent_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Website is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrgSettingsComponent_div_44_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Website must be a valid url starting with https:// ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrgSettingsComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, OrgSettingsComponent_div_44_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, OrgSettingsComponent_div_44_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors["pattern"]);
} }
function OrgSettingsComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Privacy Policy Url is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrgSettingsComponent_div_50_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Privacy Policy must be a valid url starting with https:// ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrgSettingsComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, OrgSettingsComponent_div_50_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, OrgSettingsComponent_div_50_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors["pattern"]);
} }
function OrgSettingsComponent_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Terms & Conditions must be a valid url starting with https:// ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrgSettingsComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, OrgSettingsComponent_div_56_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors["pattern"]);
} }
function OrgSettingsComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 31);
} }
function OrgSettingsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r10.errorMsg, " ");
} }
class OrgSettingsComponent {
    constructor(portalConfig, connectService, modalService, sanitizer) {
        this.portalConfig = portalConfig;
        this.connectService = connectService;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.loading = false;
        this.urlPattern = _app_constants__WEBPACK_IMPORTED_MODULE_0__.URL_PATTERN;
        this.submitted = false;
        this.updateOrg = new _models_fasten_organization__WEBPACK_IMPORTED_MODULE_1__.Organization();
        this.errorMsg = "";
        this.croppedImage = '';
        this.croppedImageEvent = null;
    }
    ngOnInit() {
        this.portalConfig.ConfigSubject.subscribe((config) => {
            this.updateOrg = { ...config.org };
        });
    }
    updateOrgSubmit() {
        this.loading = true;
        this.submitted = true;
        console.log("starting update process...", this.updateOrg);
        this.connectService.updateOrg(this.portalConfig.config$.org?.id, this.updateOrg, this.croppedImageEvent?.blob).subscribe((org) => {
            console.log("Organization Updated", org);
            this.loading = false;
            //update the org in the portal config
            this.portalConfig.config = { org: org };
        }, (err) => {
            console.error("Error updating Organization", err);
            this.errorMsg = err.error.message;
            this.loading = false;
        });
    }
    openLogoCropper() {
        this.modalService.open(_components_logo_cropper_logo_cropper_component__WEBPACK_IMPORTED_MODULE_2__.LogoCropperComponent).result.then((result) => {
            this.croppedImageEvent = result;
            this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(this.croppedImageEvent?.objectUrl);
        }, (reason) => {
            console.log(`Dismissed`, reason);
        });
    }
}
OrgSettingsComponent.ɵfac = function OrgSettingsComponent_Factory(t) { return new (t || OrgSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_portal_config_service__WEBPACK_IMPORTED_MODULE_3__.PortalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_4__.ConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer)); };
OrgSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: OrgSettingsComponent, selectors: [["app-org-settings"]], decls: 61, vars: 16, consts: [[1, "mg-t-10", "container"], [1, "mg-l-auto", "nav", "nav-pills", "flex-column", "flex-md-row"], ["data-bs-toggle", "tab", "routerLink", "/org/settings", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "routerLink", "/org/team", 1, "nav-link"], ["data-bs-toggle", "tab", "routerLink", "/org/billing", 1, "nav-link"], [1, "row"], [1, "col-12"], [1, "card", "mg-t-20"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-body"], [3, "ngSubmit"], ["orgForm", "ngForm"], [1, "col-6"], [1, "form-group"], [1, "az-content-label", "tx-11", "tx-medium", "tx-gray-600"], ["name", "name", "required", "", "minlength", "2", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, ""], ["height", "150px", "alt", "", 1, "cursor-pointer", "mx-auto", "d-block", "rounded-circle", "border", 3, "src", "click"], ["name", "website_uri", "required", "", "autocapitalize", "none", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["website_uri", "ngModel"], ["name", "privacy_policy_uri", "required", "", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["privacy_policy_uri", "ngModel"], ["name", "terms_and_conditions_uri", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["terms_and_conditions_uri", "ngModel"], ["type", "submit", 1, "btn", "btn-az-primary", "float-right", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "alert alert-danger mt-5", "role", "alert", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["role", "alert", 1, "alert", "alert-danger", "mt-5"]], template: function OrgSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 9)(14, "form", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function OrgSettingsComponent_Template_form_ngSubmit_14_listener() { return ctx.updateOrgSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Use this form to update information about your Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 5)(19, "div", 12)(20, "div", 13)(21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Organization ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "pre")(24, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 13)(27, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Organization Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OrgSettingsComponent_Template_input_ngModelChange_29_listener($event) { return ctx.updateOrg.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, OrgSettingsComponent_div_31_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 13)(33, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Organization Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 18)(37, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrgSettingsComponent_Template_img_click_37_listener() { return ctx.openLogoCropper(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 12)(39, "div", 13)(40, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Organization Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OrgSettingsComponent_Template_input_ngModelChange_42_listener($event) { return ctx.updateOrg.website_uri = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, OrgSettingsComponent_div_44_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 13)(46, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Privacy Policy Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OrgSettingsComponent_Template_input_ngModelChange_48_listener($event) { return ctx.updateOrg.privacy_policy_uri = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, OrgSettingsComponent_div_50_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 13)(52, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Terms & Conditions Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OrgSettingsComponent_Template_input_ngModelChange_54_listener($event) { return ctx.updateOrg.terms_and_conditions_uri = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, OrgSettingsComponent_div_56_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, " Save Changes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, OrgSettingsComponent_span_59_Template, 1, 0, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, OrgSettingsComponent_div_60_Template, 4, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](30);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](43);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](49);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.updateOrg.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.updateOrg.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.croppedImage || ctx.updateOrg.logo_uri || "assets/images/missing_logo.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.updateOrg.website_uri)("pattern", ctx.urlPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.updateOrg.privacy_policy_uri)("pattern", ctx.urlPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.updateOrg.terms_and_conditions_uri)("pattern", ctx.urlPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r7.invalid && (_r7.dirty || _r7.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !(_r0.dirty && _r0.form.valid) || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorMsg);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], styles: [".card-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 30px 0 rgba(207, 207, 207, 0.5);\n}\n\nul.list-arrow[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nul.list-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 14px;\n}\n\nul.list-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  background-image: url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%235b47fb' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-right-circle'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 16 16 12 12 8'%3E%3C/polyline%3E%3Cline x1='8' y1='12' x2='16' y2='12'%3E%3C/line%3E%3C/svg%3E\");\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: absolute;\n  left: -35px;\n  top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZy1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlEQUFBO0FBQ0Y7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxYkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFFRiIsImZpbGUiOiJvcmctc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDJweCAzMHB4IDAgcmdiYSgyMDcsIDIwNywgMjA3LCAwLjUpO1xufVxuXG5cbnVsLmxpc3QtYXJyb3cge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxudWwubGlzdC1hcnJvdyBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cbnVsLmxpc3QtYXJyb3cgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUwQSUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzViNDdmYicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItYXJyb3ctcmlnaHQtY2lyY2xlJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTIgMTYgMTYgMTIgMTIgOCclM0UlM0MvcG9seWxpbmUlM0UlM0NsaW5lIHgxPSc4JyB5MT0nMTInIHgyPScxNicgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTM1cHg7XG4gIHRvcDogMnB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 95957:
/*!******************************************************!*\
  !*** ./src/app/pages/org-team/org-team.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgTeamComponent": () => (/* binding */ OrgTeamComponent)
/* harmony export */ });
/* harmony import */ var _components_org_team_invite_org_team_invite_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/org-team-invite/org-team-invite.component */ 93172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/connect.service */ 84543);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _services_portal_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/portal-config.service */ 32608);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);







const _c0 = function (a0, a1) { return { "badge-success": a0, "badge-warning": a1 }; };
function OrgTeamComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 14)(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](4, _c0, member_r1.status === "active", member_r1.status === "pending"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](member_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](member_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](member_r1.email);
} }
class OrgTeamComponent {
    constructor(connectService, modalService, portalConfig) {
        this.connectService = connectService;
        this.modalService = modalService;
        this.portalConfig = portalConfig;
        this.teamMembers = [];
    }
    ngOnInit() {
        this.connectService.getOrgTeam(this.portalConfig.config$.user?.org_id).subscribe((data) => {
            this.teamMembers = data;
        });
    }
    openOrgTeamInviteModal() {
        this.modalService.open(_components_org_team_invite_org_team_invite_component__WEBPACK_IMPORTED_MODULE_0__.OrgTeamInviteComponent).result.then((result) => {
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            console.log(`Dismissed`, reason);
        });
    }
}
OrgTeamComponent.ɵfac = function OrgTeamComponent_Factory(t) { return new (t || OrgTeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_1__.ConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_portal_config_service__WEBPACK_IMPORTED_MODULE_2__.PortalConfigService)); };
OrgTeamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OrgTeamComponent, selectors: [["app-org-team"]], decls: 30, vars: 1, consts: [[1, "mg-t-10", "container"], [1, "mg-l-auto", "nav", "nav-pills", "flex-column", "flex-md-row"], ["data-bs-toggle", "tab", "routerLink", "/org/settings", 1, "nav-link"], ["data-bs-toggle", "tab", "routerLink", "/org/team", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "routerLink", "/org/billing", 1, "nav-link"], [1, "row"], [1, "col-12"], [1, "card", "mg-t-20"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-outline-indigo", "float-right", "text-indigo", 3, "click"], [1, "card-body"], [1, "table", "mg-t-10"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "badge", 3, "ngClass"]], template: function OrgTeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Team Members ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrgTeamComponent_Template_button_click_13_listener() { return ctx.openOrgTeamInviteModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Invite new Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Invite your colleagues to join your team.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "table", 11)(19, "thead")(20, "tr")(21, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, OrgTeamComponent_tr_29_Template, 8, 7, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.teamMembers);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmctdGVhbS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 33007:
/*!**************************************************************!*\
  !*** ./src/app/pages/webhook-logs/webhook-logs.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebhookLogsComponent": () => (/* binding */ WebhookLogsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/connect.service */ 84543);
/* harmony import */ var _services_portal_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/portal-config.service */ 32608);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ 97101);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-moment */ 20728);








const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function (a0, a1) { return { "badge-success": a0, "badge-danger": a1 }; };
const _c2 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
function WebhookLogsComponent_a_54_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebhookLogsComponent_a_54_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const delivery_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.selectedWebhookDelivery = delivery_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const delivery_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, (ctx_r2.selectedWebhookDelivery == null ? null : ctx_r2.selectedWebhookDelivery.timestamp_event_id) == (delivery_r9 == null ? null : delivery_r9.timestamp_event_id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](13, _c1, (delivery_r9 == null ? null : delivery_r9.status) === "success", (delivery_r9 == null ? null : delivery_r9.status) === "failure"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](16, _c2, (delivery_r9 == null ? null : delivery_r9.status) === "success", (delivery_r9 == null ? null : delivery_r9.status) === "failure"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", delivery_r9.event_payload.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 6, delivery_r9 == null ? null : delivery_r9.created_at, "YYYY-MM-DD HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 9, delivery_r9 == null ? null : delivery_r9.created_at));
} }
function WebhookLogsComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " No webhook deliveries yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function WebhookLogsComponent_button_57_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebhookLogsComponent_button_57_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.showAllDeliveries = !ctx_r12.showAllDeliveries); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.showAllDeliveries ? "Show Less" : "Show More");
} }
const _c3 = function () { return ["https"]; };
function WebhookLogsComponent_pre_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "code", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c3))("highlight", (ctx_r5.selectedWebhookDelivery == null ? null : ctx_r5.selectedWebhookDelivery.http_response) || "");
} }
const _c4 = function () { return ["json"]; };
function WebhookLogsComponent_pre_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "code", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c4))("highlight", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r6.selectedWebhookDelivery == null ? null : ctx_r6.selectedWebhookDelivery.event_payload));
} }
function WebhookLogsComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Waiting for delivery... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class WebhookLogsComponent {
    constructor(connectService, portalConfig, route) {
        this.connectService = connectService;
        this.portalConfig = portalConfig;
        this.route = route;
        this.showAllDeliveries = false;
        this.webhookDeliveries = [];
        this.webhook = null;
        this.selectedWebhookDelivery = null;
    }
    ngOnInit() {
        let webhookId = this.route.snapshot.paramMap.get('webhookId');
        if (!webhookId) {
            return;
        }
        this.connectService.getOrgWebhookDeliveries(this.portalConfig.config$.user?.org_id, webhookId).subscribe((data) => {
            console.log("Webhook Deliveries", data);
            this.webhookDeliveries = (data.deliveries || []).reverse();
            this.webhook = data.webhook;
            if (this.webhookDeliveries.length > 0) {
                this.selectedWebhookDelivery = this.webhookDeliveries[0];
            }
        });
    }
    copySecretToken(secretToken) {
        if (!secretToken) {
            return;
        }
        navigator.clipboard.writeText(secretToken);
    }
}
WebhookLogsComponent.ɵfac = function WebhookLogsComponent_Factory(t) { return new (t || WebhookLogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_0__.ConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_portal_config_service__WEBPACK_IMPORTED_MODULE_1__.PortalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
WebhookLogsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WebhookLogsComponent, selectors: [["app-webhook-logs"]], decls: 70, vars: 26, consts: [[1, "mg-t-10", "container", "mg-b-35"], [1, "mg-l-auto", "nav", "nav-pills", "flex-column", "flex-md-row"], ["data-bs-toggle", "tab", 1, "nav-link", 3, "routerLink"], ["data-bs-toggle", "tab", "href", "#", 1, "nav-link", "active"], [1, "card", "mg-t-20"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-body"], [1, "table-responsive"], [1, "table", "mg-b-0"], ["scope", "row"], [1, "badge", 3, "ngClass"], [3, "ngbTooltip"], [1, "cursor-pointer", 3, "click"], ["revealBtn", ""], [1, "fas", "fa-lock"], ["hidden", ""], ["secret", ""], ["ngbTooltip", "Copy to Clipboard", 1, "mg-l-2", "cursor-pointer", "fas", "fa-clipboard", 3, "mousedown"], [1, "container"], [1, "row"], [1, "col-6", "bd-r"], [1, "list-group"], ["class", "cursor-pointer list-group-item list-group-item-action bd-x-0 bd-y-0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "btn btn-outline-indigo btn-block", 3, "click", 4, "ngIf"], [1, "col-6"], [4, "ngIf", "ngIfElse"], ["waitingResponse", ""], [1, "cursor-pointer", "list-group-item", "list-group-item-action", "bd-x-0", "bd-y-0", 3, "ngClass", "click"], [1, "badge", "mg-r-2", 3, "ngClass"], [1, "fas", 3, "ngClass"], [1, "float-right", 3, "ngbTooltip"], ["role", "alert", 1, "alert", "alert-info", "mg-t-10"], [1, "btn", "btn-outline-indigo", "btn-block", 3, "click"], [3, "languages", "highlight"]], template: function WebhookLogsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "API Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "table", 8)(12, "thead")(13, "tr")(14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "API Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Listening For");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Signing Secret");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Last Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "tbody")(25, "tr")(26, "th", 9)(27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "td")(32, "code", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "td")(35, "a", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebhookLogsComponent_Template_a_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](40); _r0.hidden = true; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r1.hidden = false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "reveal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function WebhookLogsComponent_Template_i_mousedown_42_listener() { return ctx.copySecretToken(ctx.webhook == null ? null : ctx.webhook.secret_token); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "amDateFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 4)(47, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Delivery Logs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 6)(50, "div", 18)(51, "div", 19)(52, "div", 20)(53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, WebhookLogsComponent_a_54_Template, 8, 19, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](55, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, WebhookLogsComponent_div_56_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, WebhookLogsComponent_button_57_Template, 2, 1, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 25)(59, "div")(60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Response");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, WebhookLogsComponent_pre_62_Template, 2, 3, "pre", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div")(65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, WebhookLogsComponent_pre_67_Template, 3, 5, "pre", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, WebhookLogsComponent_ng_template_68_Template, 2, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "developers/");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.webhook == null ? null : ctx.webhook.endpoint_uri, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](23, _c1, (ctx.webhook == null ? null : ctx.webhook.status) === "active", (ctx.webhook == null ? null : ctx.webhook.status) === "inactive"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.webhook == null ? null : ctx.webhook.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.webhook == null ? null : ctx.webhook.api_mode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbTooltip", ctx.webhook == null ? null : ctx.webhook.event_types == null ? null : ctx.webhook.event_types.join(", "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.webhook == null ? null : ctx.webhook.event_types == null ? null : ctx.webhook.event_types.length, " event(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.webhook == null ? null : ctx.webhook.secret_token, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](45, 16, ctx.webhook == null ? null : ctx.webhook.updated_at, "LL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.showAllDeliveries ? ctx.webhookDeliveries : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](55, 19, ctx.webhookDeliveries, 0, 15));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.webhookDeliveries.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((ctx.webhookDeliveries == null ? null : ctx.webhookDeliveries.length) || 0) > 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !!ctx.selectedWebhookDelivery)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !!ctx.selectedWebhookDelivery)("ngIfElse", _r7);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltip, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__.Highlight, _angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, ngx_moment__WEBPACK_IMPORTED_MODULE_7__.DateFormatPipe, ngx_moment__WEBPACK_IMPORTED_MODULE_7__.TimeAgoPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWJob29rLWxvZ3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 32993:
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);







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

/***/ 37556:
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
/* harmony import */ var _home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _models_fasten_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/fasten/user */ 98821);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jose */ 78042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _portal_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portal-config.service */ 32608);








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
  SignupWithInvite(newUser, inviteToken) {
    var _this = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let queryParams = {
        "token": inviteToken
      };
      let resp = yield _this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.connect_api_endpoint_base}/auth/invite`, newUser, {
        withCredentials: true,
        params: queryParams
      }).toPromise();
      console.log(resp);
      return resp;
    })();
  }
  /**
   * Signup  (and Signin) both require an "online" user.
   * @param newUser
   * @constructor
   */
  Signup(newUser) {
    var _this2 = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let resp = yield _this2._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.connect_api_endpoint_base}/auth/signup`, newUser, {
        withCredentials: true
      }).toPromise();
      console.log(resp);
      return resp;
    })();
  }
  Signin(email, pass) {
    var _this3 = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let currentUser = new _models_fasten_user__WEBPACK_IMPORTED_MODULE_1__.User();
      currentUser.email = email;
      currentUser.password = pass;
      let resp = yield _this3._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.connect_api_endpoint_base}/auth/login`, currentUser, {
        withCredentials: true
      }).toPromise();
      return resp;
    })();
  }
  Signout() {
    var _this4 = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.publishAuthenticationState(false);
      return _this4.deleteCookie(FASTEN_AUTH_COOKIE_NAME);
      // // let remotePouchDb = new PouchDB(this.getRemoteUserDb(localStorage.getItem("current_user")), {skip_setup: true});
      // if(this.pouchDb){
      //   await this.pouchDb.logOut()
      // }
      // await this.Close()
    })();
  }
  // User has requested a password reset. This is the first step in the process.
  UserResetRequest(userEmail) {
    var _this5 = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let payload = {
        "email": userEmail
      };
      let resp = yield _this5._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.connect_api_endpoint_base}/auth/reset/request`, payload, {}).toPromise();
      console.log(resp);
      return resp;
    })();
  }
  // Complete the password reset process. This is the second step in the process.
  UserReset(newPassword, inviteToken) {
    var _this6 = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let queryParams = {
        "token": inviteToken
      };
      let payload = {
        "password": newPassword
      };
      let resp = yield _this6._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.connect_api_endpoint_base}/auth/reset`, payload, {
        withCredentials: true,
        params: queryParams
      }).toPromise();
      console.log(resp);
      return resp;
    })();
  }
  GetJWTPayload() {
    var _this7 = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let authToken = _this7.getCookie(FASTEN_AUTH_COOKIE_NAME);
      if (!authToken) {
        return null;
      }
      let jwks = jose__WEBPACK_IMPORTED_MODULE_3__.createRemoteJWKSet(new URL(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.jwks_uri));
      let issuerHost = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.connect_api_jwt_issuer_host;
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
        _this7.portalConfigService.config = {
          user: payload
        };
        return payload;
      } catch (e) {
        console.error("failed to verify jwt:", e, issuerHost);
        return null;
      }
    })();
  }
  IsAuthenticated() {
    var _this8 = this;
    return (0,_home_runner_work_fasten_connect_portal_fasten_connect_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let payload = yield _this8.GetJWTPayload();
      let isAuthenticated = payload != null;
      _this8.publishAuthenticationState(isAuthenticated);
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
    this.setCookie(name, '', -99999); // - 1 was not far back enough to actually remove the cookie, this sets the time before the epoch and will cause the cookie to be deleted.
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

/***/ 84543:
/*!*********************************************!*\
  !*** ./src/app/services/connect.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectService": () => (/* binding */ ConnectService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





class ConnectService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    updateUser(oldPass, oldEmail, newEmail, newPass = "") {
        const userUpdateJson = JSON.stringify({
            email: oldEmail,
            password: oldPass,
            newEmail: newEmail,
            newPassword: newPass
        });
        return this._httpClient.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/user`, userUpdateJson)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Updated User", response);
            return response.data;
        }));
    }
    /**
     * Create a new organization and associate it with the current User
     * @param newOrg
     * @param logoBlob
     * @constructor
     */
    createOrg(newOrg, logoBlob) {
        const formData = new FormData();
        //add the org data to the form data
        const orgJson = JSON.stringify(newOrg);
        const orgJsonBlob = new Blob([orgJson], {
            type: 'application/json'
        });
        formData.append("org", orgJsonBlob);
        formData.append("logo", logoBlob);
        let resp = this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org`, formData);
        console.log(resp);
        return resp;
    }
    updateOrg(orgId, updateOrg, logoBlob) {
        const formData = new FormData();
        //add the org data to the form data
        const orgJson = JSON.stringify(updateOrg);
        const orgJsonBlob = new Blob([orgJson], {
            type: 'application/json'
        });
        formData.append("org", orgJsonBlob);
        if (logoBlob) {
            formData.append("logo", logoBlob);
        }
        return this._httpClient.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}`, formData)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Updated Organization", response);
            return response.data;
        }));
    }
    getOrg(orgId) {
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Organization", response);
            return response.data;
        }));
    }
    sendOrgInvite(orgId, recipientEmail) {
        return this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/invite`, {
            recipient_email_address: recipientEmail,
            org_id: orgId
        });
    }
    getOrgTeam(orgId) {
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/team`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Organization Team", response);
            return response.data;
        }));
    }
    createOrgCredentials(orgId, apiMode, redirectUrl, note) {
        return this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/credentials`, {
            api_mode: apiMode,
            redirect_uri: redirectUrl,
            note: note
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Organization Credential", response);
            response.data.action = _app_constants__WEBPACK_IMPORTED_MODULE_1__.CRUDMode.Create;
            return response.data;
        }));
    }
    updateOrgCredential(orgId, orgCredentialId, redirectUrl, note) {
        return this._httpClient.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/credentials/${orgCredentialId}`, {
            redirect_uri: redirectUrl,
            note: note
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Organization Credential", response);
            return { action: _app_constants__WEBPACK_IMPORTED_MODULE_1__.CRUDMode.Update, org_credential: response.data };
        }));
    }
    deleteOrgCredential(orgId, orgCredentialId) {
        return this._httpClient.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/credentials/${orgCredentialId}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Deleted Organization Credential", response);
            return { action: _app_constants__WEBPACK_IMPORTED_MODULE_1__.CRUDMode.Delete, org_credential: response.data };
        }));
    }
    getOrgCredentials(orgId) {
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/credentials`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Organization Credentials", response);
            return response.data;
        }));
    }
    createOrgWebhooks(orgId, apiMode, endpointUri, status) {
        return this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/webhooks`, {
            api_mode: apiMode,
            endpoint_uri: endpointUri,
            status: status
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Organization Credential", response);
            return { action: _app_constants__WEBPACK_IMPORTED_MODULE_1__.CRUDMode.Create, org_webhook: response.data };
        }));
    }
    deleteOrgWebhook(orgId, orgWebhookId) {
        return this._httpClient.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/webhooks/${orgWebhookId}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Deleted Organization Webhook", response);
            return { action: _app_constants__WEBPACK_IMPORTED_MODULE_1__.CRUDMode.Delete, org_webhook: response.data };
        }));
    }
    updateOrgWebhook(orgId, orgWebhookId, endpointUri, status) {
        return this._httpClient.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/webhooks/${orgWebhookId}`, {
            endpoint_uri: endpointUri,
            status: status
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Organization Webhook", response);
            return { action: _app_constants__WEBPACK_IMPORTED_MODULE_1__.CRUDMode.Update, org_webhook: response.data };
        }));
    }
    getOrgWebhooks(orgId) {
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/webhooks`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Organization Webhooks", response);
            return response.data;
        }));
    }
    getOrgWebhookDeliveries(orgId, orgWebhookId) {
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/webhooks/${orgWebhookId}/deliveries`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Webhooks Deliveries", response);
            return response.data;
        }));
    }
}
ConnectService.ɵfac = function ConnectService_Factory(t) { return new (t || ConnectService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ConnectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ConnectService, factory: ConnectService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 32608:
/*!***************************************************!*\
  !*** ./src/app/services/portal-config.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalConfigService": () => (/* binding */ PortalConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _models_portal_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/portal-config */ 24158);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





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

/***/ 92340:
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
    connect_api_jwt_issuer_host: 'https://api.connect-dev.fastenhealth.com/v1',
    jwks_uri: 'https://cdn.fastenhealth.com/jwks/fasten-connect/dev.json',
    //Stripe pricing table (Test mode in Dev)
    stripe_customer_portal: 'https://billing.stripe.com/p/login/test_bIY7thbZL5g6gXC000'
    // stripe_customer_portal: 'https://billing.stripe.com/p/login/dR6aEYe5h4AYe2I144'
};


/***/ }),

/***/ 28496:
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

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.name != "local") {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-ps": 46235,
	"./ar-ps.js": 46235,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku-kmr": 19619,
	"./ku-kmr.js": 19619,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
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
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map