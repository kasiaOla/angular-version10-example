(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const home_component_1 = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'user',
        loadChildren: () => Promise.resolve().then(() => __webpack_require__(/*! ./modules/users/users.module */ "./src/app/modules/users/users.module.ts")).then(m => m.UsersModule)
    },
    {
        path: 'announcement',
        loadChildren: () => Promise.resolve().then(() => __webpack_require__(/*! ./modules/announcements/announcement.module */ "./src/app/modules/announcements/announcement.module.ts")).then(m => m.AnnouncementModule)
    }
];
class AppRoutingModule {
}
exports.AppRoutingModule = AppRoutingModule;
AppRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppRoutingModule });
AppRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[router_1.RouterModule.forRoot(routes, {
                // enableTracing: true, // debuggowanie routing
                useHash: true,
                initialNavigation: 'enabled'
            })], router_1.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [router_1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [router_1.RouterModule.forRoot(routes, {
                        // enableTracing: true, // debuggowanie routing
                        useHash: true,
                        initialNavigation: 'enabled'
                    })],
                exports: [router_1.RouterModule]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! ./modules/core/navbar/navbar.component */ "./src/app/modules/core/navbar/navbar.component.ts");
const i2 = __webpack_require__(/*! ./modules/core/footer/footer.component */ "./src/app/modules/core/footer/footer.component.ts");
class AppComponent {
}
exports.AppComponent = AppComponent;
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "app-navbar");
        i0.ɵɵelement(1, "app-footer");
    } }, directives: [i1.NavbarComponent, i2.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const home_component_1 = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const core_module_1 = __webpack_require__(/*! ./modules/core/core.module */ "./src/app/modules/core/core.module.ts");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const logger_service_1 = __webpack_require__(/*! ./shared/shared-services/logger.service */ "./src/app/shared/shared-services/logger.service.ts");
const environment_prod_1 = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
const ag_grid_angular_1 = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
const announcement_service_1 = __webpack_require__(/*! ./shared/shared-services/announcement.service */ "./src/app/shared/shared-services/announcement.service.ts");
const auth_guard_service_1 = __webpack_require__(/*! ./modules/core/authentication/auth-guard.service */ "./src/app/modules/core/authentication/auth-guard.service.ts");
const auth_service_1 = __webpack_require__(/*! ./modules/core/authentication/auth.service */ "./src/app/modules/core/authentication/auth.service.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
const i2 = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
class AppModule {
}
exports.AppModule = AppModule;
AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        auth_guard_service_1.AuthGuardService,
        announcement_service_1.AnnouncementService,
        auth_service_1.AuthService,
        {
            provide: logger_service_1.LoggerService,
            useClass: environment_prod_1.envProdServiceLogger
        }
    ], imports: [[
            common_1.CommonModule,
            platform_browser_1.BrowserModule.withServerTransition({
                appId: 'serverApp'
            }),
            platform_browser_1.BrowserModule,
            ag_grid_angular_1.AgGridModule.withComponents([]),
            app_routing_module_1.AppRoutingModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            animations_1.BrowserAnimationsModule,
            core_module_1.CoreModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent,
        home_component_1.HomeComponent], imports: [common_1.CommonModule, i1.BrowserModule, platform_browser_1.BrowserModule, i2.AgGridModule, app_routing_module_1.AppRoutingModule,
        forms_1.ReactiveFormsModule,
        forms_1.FormsModule,
        http_1.HttpClientModule,
        animations_1.BrowserAnimationsModule,
        core_module_1.CoreModule], exports: [app_component_1.AppComponent,
        home_component_1.HomeComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    app_component_1.AppComponent,
                    home_component_1.HomeComponent
                ],
                imports: [
                    common_1.CommonModule,
                    platform_browser_1.BrowserModule.withServerTransition({
                        appId: 'serverApp'
                    }),
                    platform_browser_1.BrowserModule,
                    ag_grid_angular_1.AgGridModule.withComponents([]),
                    app_routing_module_1.AppRoutingModule,
                    forms_1.ReactiveFormsModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    animations_1.BrowserAnimationsModule,
                    core_module_1.CoreModule,
                ],
                exports: [
                    app_component_1.AppComponent,
                    home_component_1.HomeComponent
                ],
                providers: [
                    auth_guard_service_1.AuthGuardService,
                    announcement_service_1.AnnouncementService,
                    auth_service_1.AuthService,
                    {
                        provide: logger_service_1.LoggerService,
                        useClass: environment_prod_1.envProdServiceLogger
                    }
                ],
                bootstrap: [app_component_1.AppComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/announcements/add-announcement/add-announcement.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/announcements/add-announcement/add-announcement.component.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAnnouncementComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const announcement_1 = __webpack_require__(/*! ../announcement */ "./src/app/modules/announcements/announcement.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const i2 = __webpack_require__(/*! ../../../shared/shared-services/logger.service */ "./src/app/shared/shared-services/logger.service.ts");
const i3 = __webpack_require__(/*! src/app/shared/shared-services/announcement.service */ "./src/app/shared/shared-services/announcement.service.ts");
const i4 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
class AddAnnouncementComponent {
    constructor(fb, logger, announcementService, route) {
        this.fb = fb;
        this.logger = logger;
        this.announcementService = announcementService;
        this.route = route;
        this.AnnouncementsCategories = announcement_1.AnnouncementsCategories;
        this.AnnouncementType = announcement_1.AnnouncementType;
    }
    ngOnInit() {
        // this.id_category = +this.route.snapshot.paramMap.get('id_category'); // sniszczyc shaphot ostatnia wersje komponentu
        // this.id_type = +this.route.snapshot.paramMap.get('id_type');
        this.announcementForm = this.fb.group({
            title: this.makeFormControl(),
            price: this.makeFormControl(),
            surface: this.makeFormControl(),
            pricePerM: this.makeFormControl(),
            numberOfRooms: this.makeFormControl(),
            address: new forms_1.FormGroup({
                street: this.makeFormControl(),
                houseNumber: this.makeFormControl(),
                postCode: this.makeFormControl(),
                city: this.makeFormControl(),
            }),
            multimedia: this.makeFormControl(),
            description: this.makeFormControl(),
            floor: this.makeFormControl(),
        });
        this.route.paramMap.subscribe(params => {
            this.id_category = params.get('id_category');
            this.announcementsCategories = announcement_1.AnnouncementsCategories[this.id_category];
        });
        this.route.paramMap.subscribe(params => {
            this.id_type = params.get('id_type');
            this.announcementType = announcement_1.AnnouncementType[this.id_type];
        });
    }
    makeFormControl() {
        const cloned = new forms_1.FormControl(null, [forms_1.Validators.required]);
        return cloned;
    }
    addAnnouncement() {
        const setAnnouncement = {
            title: this.announcementForm.value.title,
            price: this.announcementForm.value.price,
            surface: this.announcementForm.value.surface,
            pricePerM: this.announcementForm.value.pricePerM,
            numberOfRooms: this.announcementForm.value.numberOfRooms,
            address: {
                street: this.announcementForm.value.address.street,
                houseNumber: this.announcementForm.value.address.houseNumber,
                postCode: this.announcementForm.value.address.postCode,
                city: this.announcementForm.value.address.city,
            },
            announcementsCategories: announcement_1.AnnouncementsCategories[this.id_category],
            announcementType: announcement_1.AnnouncementType[this.id_type],
            multimedia: this.announcementForm.value.multimedia,
            description: this.announcementForm.value.description,
            floor: this.announcementForm.value.floor,
        };
        this.announcementService.addAnnouncement(setAnnouncement, this.id_category, this.id_type)
            .subscribe(data => {
            Syntax: switch (data.success) {
                case false: {
                    this.logger.error(`Error code ${data.errcode}`);
                    break;
                }
                case true: {
                    this.logger.info('The advertisement has been correctly added');
                    this.announcementForm.reset();
                    break;
                }
                default: {
                    this.announcementForm.reset();
                    break;
                }
            }
        });
    }
}
exports.AddAnnouncementComponent = AddAnnouncementComponent;
AddAnnouncementComponent.ɵfac = function AddAnnouncementComponent_Factory(t) { return new (t || AddAnnouncementComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.LoggerService), i0.ɵɵdirectiveInject(i3.AnnouncementService), i0.ɵɵdirectiveInject(i4.ActivatedRoute)); };
AddAnnouncementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddAnnouncementComponent, selectors: [["app-add-announcement"]], decls: 80, vars: 3, consts: [[1, "jumbotron", "content"], [1, "panel", "panel-default"], [1, "panel-heading", "text-center"], [1, "row"], [1, "col-xs-12", "col-lg-12"], [1, "panel-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "col-sm-12", "col-md-6"], ["for", "title"], ["type", "text", "formControlName", "title", 1, "form-control"], [1, "form-group", "col-sm-12", "col-md-2"], ["for", "price"], ["type", "text", "formControlName", "price", 1, "form-control"], ["for", "surface"], ["type", "text", "formControlName", "surface", 1, "form-control"], ["for", "pricePerM"], ["type", "text", "formControlName", "pricePerM", 1, "form-control"], ["for", "numberOfRooms"], ["type", "number", "formControlName", "numberOfRooms", 1, "form-control"], ["for", "floor"], ["type", "number", "formControlName", "floor", 1, "form-control"], [1, "form-group", "col-sm-12", "col-md-4"], ["for", "multimedia"], ["required", "", "type", "text", "formControlName", "multimedia", 1, "form-control"], [1, "border", "p-2", "col-sm-12", "col-md-10"], ["formGroupName", "address", 1, "row"], ["for", "city"], ["type", "text", "formControlName", "city", 1, "form-control"], ["for", "street"], ["type", "text", "formControlName", "street", 1, "form-control"], ["for", "houseNumber"], ["type", "number", "formControlName", "houseNumber", 1, "form-control"], ["for", "postCode"], ["type", "text", "formControlName", "postCode", 1, "form-control"], [1, "form-group", "col-sm-12", "col-md-8"], ["for", "description"], ["formControlName", "description", "placeholder", "Opis", "rows", "3", 1, "form-control"], ["for", "announcementType"], ["type", "text", "id", "announcementType", "name", "announcementType", "disabled", "", 1, "form-control", 3, "value"], [1, "col-sm-12", "col-md-4", "form-group"], ["type", "button", 1, "btn", "btn-default"], ["type", "submit", 1, "btn", "btn-success"]], template: function AddAnnouncementComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "h2");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "form", 6);
        i0.ɵɵlistener("ngSubmit", function AddAnnouncementComponent_Template_form_ngSubmit_8_listener() { return ctx.addAnnouncement(); });
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵelementStart(10, "div", 7);
        i0.ɵɵelementStart(11, "label", 8);
        i0.ɵɵtext(12, "Tytu\u0142 ");
        i0.ɵɵelementStart(13, "sup");
        i0.ɵɵtext(14, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(15, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 10);
        i0.ɵɵelementStart(17, "label", 11);
        i0.ɵɵtext(18, "Cena ");
        i0.ɵɵelementStart(19, "sup");
        i0.ɵɵtext(20, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "input", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 10);
        i0.ɵɵelementStart(23, "label", 13);
        i0.ɵɵtext(24, "Powierzchnia ");
        i0.ɵɵelementStart(25, "sup");
        i0.ɵɵtext(26, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(27, "input", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "div", 3);
        i0.ɵɵelementStart(29, "div", 10);
        i0.ɵɵelementStart(30, "label", 15);
        i0.ɵɵtext(31, "Powierzchnia za m\u00B2");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(32, "input", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 10);
        i0.ɵɵelementStart(34, "label", 17);
        i0.ɵɵtext(35, "Liczba pokoi");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(36, "input", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "div", 10);
        i0.ɵɵelementStart(38, "label", 19);
        i0.ɵɵtext(39, "Pietro");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(40, "input", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "div", 21);
        i0.ɵɵelementStart(42, "label", 22);
        i0.ɵɵtext(43, "Multimedia");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(44, "input", 23);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "fieldset", 24);
        i0.ɵɵelementStart(46, "label");
        i0.ɵɵtext(47, "Adres:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "div", 25);
        i0.ɵɵelementStart(49, "div", 21);
        i0.ɵɵelementStart(50, "label", 26);
        i0.ɵɵtext(51, "Miasto");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(52, "input", 27);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(53, "div", 21);
        i0.ɵɵelementStart(54, "label", 28);
        i0.ɵɵtext(55, "Ulica");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(56, "input", 29);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "div", 10);
        i0.ɵɵelementStart(58, "label", 30);
        i0.ɵɵtext(59, "Nr domu");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(60, "input", 31);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(61, "div", 10);
        i0.ɵɵelementStart(62, "label", 32);
        i0.ɵɵtext(63, "Kod pocztowy");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(64, "input", 33);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "div", 3);
        i0.ɵɵelementStart(66, "div", 34);
        i0.ɵɵelementStart(67, "label", 35);
        i0.ɵɵtext(68, "Opis");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(69, "textarea", 36);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(70, "div", 10);
        i0.ɵɵelementStart(71, "label", 37);
        i0.ɵɵtext(72, "Typ: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(73, "input", 38);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(74, "div", 3);
        i0.ɵɵelementStart(75, "div", 39);
        i0.ɵɵelementStart(76, "button", 40);
        i0.ɵɵtext(77, "Resetuj");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(78, "button", 41);
        i0.ɵɵtext(79, "Rejestracja");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("Dodaj og\u0142oszenie - ", ctx.AnnouncementsCategories[ctx.id_category], "");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formGroup", ctx.announcementForm);
        i0.ɵɵadvance(65);
        i0.ɵɵproperty("value", ctx.AnnouncementType[ctx.id_type]);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.NumberValueAccessor, i1.RequiredValidator, i1.FormGroupName], styles: [".circles[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbm5vdW5jZW1lbnRzL2FkZC1hbm5vdW5jZW1lbnQvYWRkLWFubm91bmNlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Fubm91bmNlbWVudHMvYWRkLWFubm91bmNlbWVudC9hZGQtYW5ub3VuY2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZXMge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddAnnouncementComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-add-announcement',
                templateUrl: './add-announcement.component.html',
                styleUrls: ['./add-announcement.component.scss']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.LoggerService }, { type: i3.AnnouncementService }, { type: i4.ActivatedRoute }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/announcements/add-category-announcement/add-category-announcement.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/announcements/add-category-announcement/add-category-announcement.component.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCategoryAnnouncementComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const announcement_1 = __webpack_require__(/*! ../announcement */ "./src/app/modules/announcements/announcement.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const i2 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const _c0 = function (a1, a3) { return ["/announcement/category", a1, "type", a3]; };
function AddCategoryAnnouncementComponent_div_6_div_1_span_2_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const indexOfelementType_r7 = ctx.index;
    const indexOfelementCategorie_r3 = i0.ɵɵnextContext(2).index;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(2, _c0, indexOfelementCategorie_r3, indexOfelementType_r7));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.AnnouncementType[indexOfelementType_r7], "");
} }
function AddCategoryAnnouncementComponent_div_6_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtemplate(1, AddCategoryAnnouncementComponent_div_6_div_1_span_2_a_1_Template, 2, 5, "a", 7);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r4.AnnouncementType));
} }
function AddCategoryAnnouncementComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, AddCategoryAnnouncementComponent_div_6_div_1_span_2_Template, 3, 3, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const enum_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", enum_r2, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.announcementsCategoriesLength >= 0);
} }
function AddCategoryAnnouncementComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AddCategoryAnnouncementComponent_div_6_div_1_Template, 3, 2, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.keys());
} }
class AddCategoryAnnouncementComponent {
    constructor() {
        this.AnnouncementsCategories = announcement_1.AnnouncementsCategories;
        this.announcementsCategoriesLength = Object.values(announcement_1.AnnouncementsCategories).length;
        this.AnnouncementType = announcement_1.AnnouncementType;
    }
    ngOnInit() {
    }
    keys() {
        const keys = Object.keys(announcement_1.AnnouncementsCategories);
        return keys.slice(keys.length / 2, keys.length);
    }
}
exports.AddCategoryAnnouncementComponent = AddCategoryAnnouncementComponent;
AddCategoryAnnouncementComponent.ɵfac = function AddCategoryAnnouncementComponent_Factory(t) { return new (t || AddCategoryAnnouncementComponent)(); };
AddCategoryAnnouncementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddCategoryAnnouncementComponent, selectors: [["app-add-category-announcement"]], decls: 7, vars: 1, consts: [[1, "container"], ["for", "type"], [4, "ngIf"], ["class", "text--title", "for", "category", 4, "ngFor", "ngForOf"], ["for", "category", 1, "text--title"], ["class", "circles", 4, "ngIf"], [1, "circles"], ["class", "text__link", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "text__link", 3, "routerLink"]], template: function AddCategoryAnnouncementComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵelementStart(2, "label", 1);
        i0.ɵɵtext(3, "Wybierz kategorie");
        i0.ɵɵelementStart(4, "sup");
        i0.ɵɵtext(5, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, AddCategoryAnnouncementComponent_div_6_Template, 2, 1, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.announcementsCategoriesLength >= 0);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.RouterLinkWithHref, i2.RouterLinkActive], pipes: [i1.KeyValuePipe], styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline;\n  margin: 100px 0px 0px 0px;\n  transform: translate(25%, -50%);\n}\n\n.text--title[_ngcontent-%COMP%] {\n  display: inline-table;\n}\n\n.circles[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  margin: 25px 10px 0 10px;\n  border-radius: 50%;\n  display: inline-block;\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #c8ced5, inset 0 0 10px #c8ced5;\n  background-color: #ffffff;\n}\n\n.text__link[_ngcontent-%COMP%] {\n  display: table-row-group;\n  transform: translate(60%, 200%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbm5vdW5jZW1lbnRzL2FkZC1jYXRlZ29yeS1hbm5vdW5jZW1lbnQvYWRkLWNhdGVnb3J5LWFubm91bmNlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJGQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsK0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5ub3VuY2VtZW50cy9hZGQtY2F0ZWdvcnktYW5ub3VuY2VtZW50L2FkZC1jYXRlZ29yeS1hbm5vdW5jZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbjogMTAwcHggMHB4IDBweCAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNSUsIC01MCUpO1xyXG59XHJcblxyXG4udGV4dC0tdGl0bGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG59XHJcblxyXG4uY2lyY2xlcyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAyNXB4IDEwcHggMCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMTAwcHggI2M4Y2VkNSwgMTBweCAxMHB4IDIwcHggI2M4Y2VkNSwgaW5zZXQgMCAwIDEwcHggI2M4Y2VkNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi50ZXh0X19saW5rIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDYwJSwgMjAwJSk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddCategoryAnnouncementComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-add-category-announcement',
                templateUrl: './add-category-announcement.component.html',
                styleUrls: ['./add-category-announcement.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/announcements/announcement-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/announcements/announcement-routing.module.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementRoutingModule = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const add_announcement_component_1 = __webpack_require__(/*! ./add-announcement/add-announcement.component */ "./src/app/modules/announcements/add-announcement/add-announcement.component.ts");
const add_category_announcement_component_1 = __webpack_require__(/*! ./add-category-announcement/add-category-announcement.component */ "./src/app/modules/announcements/add-category-announcement/add-category-announcement.component.ts");
const announcement_component_1 = __webpack_require__(/*! ./announcement/announcement.component */ "./src/app/modules/announcements/announcement/announcement.component.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const routes = [
    {
        path: '',
        component: announcement_component_1.AnnouncementComponent,
        children: [
            {
                path: 'category',
                data: { title: 'Wybierz kategorie' },
                component: add_category_announcement_component_1.AddCategoryAnnouncementComponent,
            },
            {
                path: 'category/:id_category/type/:id_type',
                data: { title: 'Dodaj ogłoszenie' },
                component: add_announcement_component_1.AddAnnouncementComponent,
                pathMatch: 'full'
            }
        ]
    }
];
class AnnouncementRoutingModule {
}
exports.AnnouncementRoutingModule = AnnouncementRoutingModule;
AnnouncementRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AnnouncementRoutingModule });
AnnouncementRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AnnouncementRoutingModule_Factory(t) { return new (t || AnnouncementRoutingModule)(); }, imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AnnouncementRoutingModule, { imports: [i1.RouterModule], exports: [router_1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnnouncementRoutingModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/announcements/announcement.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/announcements/announcement.module.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementModule = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const announcement_routing_module_1 = __webpack_require__(/*! ./announcement-routing.module */ "./src/app/modules/announcements/announcement-routing.module.ts");
const add_announcement_component_1 = __webpack_require__(/*! ./add-announcement/add-announcement.component */ "./src/app/modules/announcements/add-announcement/add-announcement.component.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const add_category_announcement_component_1 = __webpack_require__(/*! ./add-category-announcement/add-category-announcement.component */ "./src/app/modules/announcements/add-category-announcement/add-category-announcement.component.ts");
const announcement_service_1 = __webpack_require__(/*! ../../shared/shared-services/announcement.service */ "./src/app/shared/shared-services/announcement.service.ts");
const announcement_component_1 = __webpack_require__(/*! ./announcement/announcement.component */ "./src/app/modules/announcements/announcement/announcement.component.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class AnnouncementModule {
}
exports.AnnouncementModule = AnnouncementModule;
AnnouncementModule.ɵmod = i0.ɵɵdefineNgModule({ type: AnnouncementModule });
AnnouncementModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AnnouncementModule_Factory(t) { return new (t || AnnouncementModule)(); }, providers: [announcement_service_1.AnnouncementService], imports: [[
            common_1.CommonModule,
            announcement_routing_module_1.AnnouncementRoutingModule,
            router_1.RouterModule,
            forms_1.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AnnouncementModule, { declarations: [announcement_component_1.AnnouncementComponent,
        add_announcement_component_1.AddAnnouncementComponent,
        add_category_announcement_component_1.AddCategoryAnnouncementComponent], imports: [common_1.CommonModule,
        announcement_routing_module_1.AnnouncementRoutingModule,
        router_1.RouterModule,
        forms_1.ReactiveFormsModule], exports: [announcement_component_1.AnnouncementComponent,
        add_announcement_component_1.AddAnnouncementComponent,
        add_category_announcement_component_1.AddCategoryAnnouncementComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnnouncementModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    announcement_component_1.AnnouncementComponent,
                    add_announcement_component_1.AddAnnouncementComponent,
                    add_category_announcement_component_1.AddCategoryAnnouncementComponent
                ],
                imports: [
                    common_1.CommonModule,
                    announcement_routing_module_1.AnnouncementRoutingModule,
                    router_1.RouterModule,
                    forms_1.ReactiveFormsModule,
                ],
                exports: [
                    announcement_component_1.AnnouncementComponent,
                    add_announcement_component_1.AddAnnouncementComponent,
                    add_category_announcement_component_1.AddCategoryAnnouncementComponent
                ],
                providers: [announcement_service_1.AnnouncementService]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/announcements/announcement.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/announcements/announcement.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = exports.AnnouncementType = exports.AnnouncementsCategories = void 0;
var AnnouncementsCategories;
(function (AnnouncementsCategories) {
    AnnouncementsCategories[AnnouncementsCategories["Mieszkania"] = 0] = "Mieszkania";
    AnnouncementsCategories[AnnouncementsCategories["Domy"] = 1] = "Domy";
    AnnouncementsCategories[AnnouncementsCategories["Dzia\u0142ki"] = 2] = "Dzia\u0142ki";
    AnnouncementsCategories[AnnouncementsCategories["Gara\u017Ce"] = 3] = "Gara\u017Ce";
})(AnnouncementsCategories = exports.AnnouncementsCategories || (exports.AnnouncementsCategories = {}));
var AnnouncementType;
(function (AnnouncementType) {
    AnnouncementType[AnnouncementType["Sprzedam"] = 0] = "Sprzedam";
    AnnouncementType[AnnouncementType["Wynajm\u0119"] = 1] = "Wynajm\u0119";
})(AnnouncementType = exports.AnnouncementType || (exports.AnnouncementType = {}));
var Market;
(function (Market) {
    Market[Market["Wt\u00F3ryny"] = 0] = "Wt\u00F3ryny";
    Market[Market["Pierwotny"] = 1] = "Pierwotny";
})(Market = exports.Market || (exports.Market = {}));


/***/ }),

/***/ "./src/app/modules/announcements/announcement/announcement.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/announcements/announcement/announcement.component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
class AnnouncementComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.AnnouncementComponent = AnnouncementComponent;
AnnouncementComponent.ɵfac = function AnnouncementComponent_Factory(t) { return new (t || AnnouncementComponent)(); };
AnnouncementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AnnouncementComponent, selectors: [["app-announcement"]], decls: 2, vars: 0, consts: [[1, "outlet-container"]], template: function AnnouncementComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "router-outlet");
        i0.ɵɵelementEnd();
    } }, directives: [i1.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5ub3VuY2VtZW50cy9hbm5vdW5jZW1lbnQvYW5ub3VuY2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnnouncementComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-announcement',
                templateUrl: './announcement.component.html',
                styleUrls: ['./announcement.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/authentication/auth-guard.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/authentication/auth-guard.service.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuardService = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! ./auth.service */ "./src/app/modules/core/authentication/auth.service.ts");
class AuthGuardService {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(route, state) {
        return this.authService.isLogged;
    }
}
exports.AuthGuardService = AuthGuardService;
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(i0.ɵɵinject(i1.AuthService)); };
AuthGuardService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthGuardService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AuthService }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/authentication/auth.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/authentication/auth.service.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.isLogged = false;
    }
    registration(newUser) {
        let headers = new http_1.HttpHeaders();
        headers = headers.set('content-type', 'application/json');
        return this.httpClient.post('/register', JSON.stringify(newUser), { headers });
    }
    login(user) {
        let headers = new http_1.HttpHeaders();
        headers = headers.set('content-type', 'application/json');
        this.isLogged = true;
        return this.httpClient.post('/login', JSON.stringify(user), { headers });
    }
    loginOut() {
        this.isLogged = false;
    }
}
exports.AuthService = AuthService;
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient)); };
AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/core.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const footer_component_1 = __webpack_require__(/*! ./footer/footer.component */ "./src/app/modules/core/footer/footer.component.ts");
const list_1 = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
const navbar_component_1 = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/modules/core/navbar/navbar.component.ts");
const tabs_1 = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./src/app/modules/users/users.module.ts");
const announcement_module_1 = __webpack_require__(/*! ../announcements/announcement.module */ "./src/app/modules/announcements/announcement.module.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class CoreModule {
}
exports.CoreModule = CoreModule;
CoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: CoreModule });
CoreModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            common_1.CommonModule,
            list_1.MatListModule,
            tabs_1.MatTabsModule,
            router_1.RouterModule,
            users_module_1.UsersModule,
            announcement_module_1.AnnouncementModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreModule, { declarations: [footer_component_1.FooterComponent,
        navbar_component_1.NavbarComponent], imports: [common_1.CommonModule,
        list_1.MatListModule,
        tabs_1.MatTabsModule,
        router_1.RouterModule,
        users_module_1.UsersModule,
        announcement_module_1.AnnouncementModule], exports: [footer_component_1.FooterComponent,
        navbar_component_1.NavbarComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoreModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    footer_component_1.FooterComponent,
                    navbar_component_1.NavbarComponent,
                ],
                imports: [
                    common_1.CommonModule,
                    list_1.MatListModule,
                    tabs_1.MatTabsModule,
                    router_1.RouterModule,
                    users_module_1.UsersModule,
                    announcement_module_1.AnnouncementModule
                ],
                exports: [
                    footer_component_1.FooterComponent,
                    navbar_component_1.NavbarComponent,
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/core/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/core/footer/footer.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.FooterComponent = FooterComponent;
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], decls: 33, vars: 0, consts: [[1, "page-footer", "font-small", "blue", "pt-4"], [1, "container-fluid", "text-center", "text-md-left"], [1, "row"], [1, "col-md-6", "mt-md-0", "mt-3"], [1, "text-uppercase"], [1, "clearfix", "w-100", "d-md-none", "pb-3"], [1, "col-md-3", "mb-md-0", "mb-3"], [1, "list-unstyled"], ["href", "#!"], [1, "fa", "fa-home", "mr-3"], [1, "fa", "fa-envelope", "mr-3"], [1, "fa", "fa-phone", "mr-3"], [1, "fa", "fa-print", "mr-3"], [1, "footer-copyright", "text-center", "py-3"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "footer", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "h5", 4);
        i0.ɵɵtext(5, "Projekt rezalizowany na potrzeny nauki Angular.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7, "Wykonawca Katarzyna Bulicka");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "hr", 5);
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵelementStart(10, "h5", 4);
        i0.ɵɵtext(11, "O projekcie");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "ul", 7);
        i0.ɵɵelementStart(13, "li");
        i0.ɵɵelementStart(14, "a", 8);
        i0.ɵɵtext(15, "O mnie");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 6);
        i0.ɵɵelementStart(17, "h5", 4);
        i0.ɵɵtext(18, "Adres");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "p");
        i0.ɵɵelement(20, "i", 9);
        i0.ɵɵtext(21, " Warszawa 02-942 Konstanci\u0144ska 7b/36");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "p");
        i0.ɵɵelement(23, "i", 10);
        i0.ɵɵtext(24, " test@example.com");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "p");
        i0.ɵɵelement(26, "i", 11);
        i0.ɵɵtext(27, " + ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "p");
        i0.ɵɵelement(29, "i", 12);
        i0.ɵɵtext(30, " + 01 234 567 89");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "div", 13);
        i0.ɵɵtext(32, " \u00A9 2020 Copyright: Katarzyna Bulicka");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/navbar/navbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/core/navbar/navbar.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const i2 = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/modules/core/authentication/auth.service.ts");
const i3 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
function NavbarComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵtext(1, "Rejestracja");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/user/registration");
} }
function NavbarComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵtext(1, "Zaloguj");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/user/login");
} }
function NavbarComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 11);
    i0.ɵɵlistener("click", function NavbarComponent_a_10_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.loginOut(); });
    i0.ɵɵtext(1, "Wyloguj");
    i0.ɵɵelementEnd();
} }
class NavbarComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    loginOut() {
        this.authService.loginOut();
    }
}
exports.NavbarComponent = NavbarComponent;
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.AuthService)); };
NavbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 18, vars: 6, consts: [[1, "card-body"], [1, "navbar", "navbar-light", "bg-light"], ["routerLinkActive", "active", "name", "home", 1, "navbar-brand", 3, "routerLink"], ["class", "navbar-brand", "routerLinkActive", "active", "name", "registration", 3, "routerLink", 4, "ngIf"], ["class", "navbar-brand", "routerLinkActive", "active", "name", "login", 3, "routerLink", 4, "ngIf"], ["class", "navbar-brand", "name", "loginOut", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", "name", "contact", 1, "navbar-brand", 3, "routerLink"], ["routerLinkActive", "active", 1, "btn", "btn-default", "link-button--save", 3, "routerLink"], [1, "card-text"], ["routerLinkActive", "active", "name", "registration", 1, "navbar-brand", 3, "routerLink"], ["routerLinkActive", "active", "name", "login", 1, "navbar-brand", 3, "routerLink"], ["name", "loginOut", 1, "navbar-brand", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "nav", 1);
        i0.ɵɵelementStart(2, "div");
        i0.ɵɵelementStart(3, "a", 2);
        i0.ɵɵtext(4, "Strona g\u0142\u00F3wna");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵtemplate(6, NavbarComponent_a_6_Template, 2, 1, "a", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div");
        i0.ɵɵtemplate(8, NavbarComponent_a_8_Template, 2, 1, "a", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div");
        i0.ɵɵtemplate(10, NavbarComponent_a_10_Template, 2, 0, "a", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div");
        i0.ɵɵelementStart(12, "a", 6);
        i0.ɵɵtext(13, "Kontakt");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "button", 7);
        i0.ɵɵtext(15, "Dodaj og\u0142oszenie");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "p", 8);
        i0.ɵɵelement(17, "router-outlet");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("routerLink", "/home");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.authService.isLogged);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.authService.isLogged);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.authService.isLogged);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("routerLink", "/user/contact");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("routerLink", "/announcement/category");
    } }, directives: [i1.RouterLinkWithHref, i1.RouterLinkActive, i3.NgIf, i1.RouterLink, i1.RouterOutlet], styles: [".navbar[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  margin-right: 3rem;\n  font: 400 24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: white !important;\n  justify-content: flex-end !important;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-light[_ngcontent-%COMP%]   .bg-light[_ngcontent-%COMP%] {\n  justify-content: flex-end !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 10px 5px 0px 15px;\n}\n\n.link-button--save[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 5%;\n  margin: 0px;\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #c8ced5, inset 0 0 10px #c8ced5;\n  border: 1px #222 solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL25hdi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NvcmUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBQWZBO0VBQ0kseUJBQUE7QUFrQko7O0FBZkE7RUFDSSxVQUFBO0FBa0JKOztBQWZBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBa0JKOztBQWZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyRkFBQTtFQUNBLHNCQ2xCSztBRG9DVCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gICAgb3BhY2l0eTogLjY7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICAgIGZvbnQ6IDQwMCAyNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uYmctbGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbGlnaHQgLmJnLWxpZ2h0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59IiwiLm5hdmJhciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgb3BhY2l0eTogMC42O1xuICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gIGZvbnQ6IDQwMCAyNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXIgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1saWdodCAuYmctbGlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweCA1cHggMHB4IDE1cHg7XG59XG5cbi5saW5rLWJ1dHRvbi0tc2F2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDUlO1xuICBtYXJnaW46IDBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMTAwcHggI2M4Y2VkNSwgMTBweCAxMHB4IDIwcHggI2M4Y2VkNSwgaW5zZXQgMCAwIDEwcHggI2M4Y2VkNTtcbiAgYm9yZGVyOiAxcHggIzIyMiBzb2xpZDtcbn0iLCIkYm94U2hhZG93OiBpbnNldCAtMTBweCAtMTBweCAxMDBweCAjYzhjZWQ1LFxuMTBweCAxMHB4IDIwcHggI2M4Y2VkNSxcbmluc2V0IDAgMCAxMHB4ICNjOGNlZDU7XG4kYm9yZGVyOiAxcHggIzIyMiBzb2xpZDsiXX0= */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NavbarComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.AuthService }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! src/app/shared/shared-services/announcement.service */ "./src/app/shared/shared-services/announcement.service.ts");
const i2 = __webpack_require__(/*! ../../shared/shared-services/logger.service */ "./src/app/shared/shared-services/logger.service.ts");
const i3 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const i4 = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "ag-grid-angular", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("rowData", ctx_r0.rowDatatAnnouncement)("columnDefs", ctx_r0.columnDefs)("defaultColDef", ctx_r0.defaultColumn);
} }
class HomeComponent {
    constructor(announcementService, logger) {
        this.announcementService = announcementService;
        this.logger = logger;
        this.rowDatatAnnouncement = [];
        this.columnDefs = [
            { headerName: 'Miasto', field: 'title', colId: 'title', sortable: true, filter: true },
            { headerName: 'Cena', field: 'price', colId: 'price', sortable: true, filter: true },
            { headerName: 'Powierzchnia', field: 'surface', colId: 'surface', sortable: true, filter: true }
        ];
        this.gridOptions = {
            suppressRowClickSelection: false,
            rowMultiSelectWithClick: false,
        };
        this.defaultColumn = {
            sortable: true,
            filter: 'agTextColumnFilter',
            filterParams: {
                clearButton: true
            },
            width: 150,
            resizable: true,
            headerCheckboxSelectionFilteredOnly: true,
        };
        this.announcementService.getAnnouncement().subscribe({
            next: Res => {
                this.rowDatatAnnouncement = Res['respons'];
            },
            error: Err => {
                this.logger.info('Błąd pobrania ogłoszeń. Error: ' + Err);
            },
            complete() { }
        });
    }
    ngOnInit() { }
}
exports.HomeComponent = HomeComponent;
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.AnnouncementService), i0.ɵɵdirectiveInject(i2.LoggerService)); };
HomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "ag-theme-material", "ag-grid__tab", 3, "rowData", "columnDefs", "defaultColDef"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HomeComponent_div_0_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.rowDatatAnnouncement.length > 0);
    } }, directives: [i3.NgIf, i4.AgGridAngular], styles: [".ag-grid__tab[_ngcontent-%COMP%] {\n  margin: 5% 5% 5% 15%;\n  width: 70%;\n  height: 70vh;\n  border: 1px #222 solid;\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #c8ced5, inset 0 0 10px #c8ced5;\n}\n\n  .ag-header-viewport {\n  border-bottom: 1px #222 solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL2dyaWQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkNGSztFREdMLDJGQ05RO0FDTVo7O0FBSkE7RUFDSSw2QkFBQTtBQU9KIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xuLmFnLWdyaWRfX3RhYiB7XG4gICAgbWFyZ2luOiA1JSA1JSA1JSAxNSU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgIGJveC1zaGFkb3c6ICRib3hTaGFkb3c7XG59IiwiJGJveFNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMTAwcHggI2M4Y2VkNSxcbjEwcHggMTBweCAyMHB4ICNjOGNlZDUsXG5pbnNldCAwIDAgMTBweCAjYzhjZWQ1O1xuJGJvcmRlcjogMXB4ICMyMjIgc29saWQ7IiwiLmFnLWdyaWRfX3RhYiB7XG4gIG1hcmdpbjogNSUgNSUgNSUgMTUlO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwdmg7XG4gIGJvcmRlcjogMXB4ICMyMjIgc29saWQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsIDEwcHggMTBweCAyMHB4ICNjOGNlZDUsIGluc2V0IDAgMCAxMHB4ICNjOGNlZDU7XG59XG5cbjo6bmctZGVlcCAuYWctaGVhZGVyLXZpZXdwb3J0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICMyMjIgc29saWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HomeComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: i1.AnnouncementService }, { type: i2.LoggerService }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/users/contact/contact.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/users/contact/contact.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.ContactComponent = ContactComponent;
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ContactComponent, selectors: [["app-contact"]], decls: 20, vars: 0, consts: [[1, "jumbotron", "content"], [1, "panel", "panel-default"], [1, "panel-body"], [1, "col-md-3", "mb-md-0", "mb-3"], [1, "text-uppercase"], [1, "fa", "fa-home", "mr-3"], [1, "fa", "fa-envelope", "mr-3"], [1, "fa", "fa-phone", "mr-3"], [1, "fa", "fa-print", "mr-3"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "h2");
        i0.ɵɵtext(4, "Kontakt");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "h5", 4);
        i0.ɵɵtext(7, "Adres");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵelement(9, "i", 5);
        i0.ɵɵtext(10, " Warszawa 02-942 Konstanci\u0144ska 7b/36");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "p");
        i0.ɵɵelement(12, "i", 6);
        i0.ɵɵtext(13, " test@example.com");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "p");
        i0.ɵɵelement(15, "i", 7);
        i0.ɵɵtext(16, " + ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "p");
        i0.ɵɵelement(18, "i", 8);
        i0.ɵɵtext(19, " + 01 234 567 89");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, styles: [".content[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 10%;\n  background-color: inset -10px -10px 100px #c8ced5, 10px 10px 20px #c8ced5, inset 0 0 10px #c8ced5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQtc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUdDSlE7QURJWiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC9zaGFyZWQtc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uY29udGVudCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm94U2hhZG93O1xyXG59XHJcbiIsIiRib3hTaGFkb3c6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsXG4xMHB4IDEwcHggMjBweCAjYzhjZWQ1LFxuaW5zZXQgMCAwIDEwcHggI2M4Y2VkNTtcbiRib3JkZXI6IDFweCAjMjIyIHNvbGlkOyJdfQ== */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ContactComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/users/user-login/user-login.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/users/user-login/user-login.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const i2 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const i3 = __webpack_require__(/*! ../../core/authentication/auth.service */ "./src/app/modules/core/authentication/auth.service.ts");
const i4 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
function UserLoginComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Wprowad\u017A nazw\u0119 klienta ");
    i0.ɵɵelementEnd();
} }
function UserLoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Wprowad\u017A has\u0142o ");
    i0.ɵɵelementEnd();
} }
class UserLoginComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    }
    isFieldInvalid(field) {
        return ((!this.loginForm.get(field).valid && this.loginForm.get(field).touched));
    }
    login() {
        if (this.loginForm.dirty && this.loginForm.valid) {
            this.authService.login(this.loginForm.value)
                .subscribe(data => {
                if (data.success === false) {
                }
                else {
                    this.router.navigate(['/']);
                }
                this.loginForm.reset();
            });
        }
    }
}
exports.UserLoginComponent = UserLoginComponent;
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.AuthService)); };
UserLoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserLoginComponent, selectors: [["app-user-login"]], decls: 24, vars: 3, consts: [[1, "jumbotron", "content"], [1, "panel", "panel-default"], [1, "panel-heading", "text-center"], [1, "panel-body"], ["id", "login-form", 1, "example-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username"], ["required", "", "type", "text", "formControlName", "username", "name", "username", 1, "form-control"], [4, "ngIf"], ["for", "password"], ["required", "", "type", "password", "formControlName", "password", "name", "password", 1, "form-control"], ["type", "submit", "id", "Login", "title", "Login", 1, "btn", "btn-success"]], template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "h4");
        i0.ɵɵtext(4, "Logowanie u\u017Cytkownika");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "form", 4);
        i0.ɵɵlistener("ngSubmit", function UserLoginComponent_Template_form_ngSubmit_6_listener() { return ctx.login(); });
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "label", 6);
        i0.ɵɵtext(9, "Nazwa klienta");
        i0.ɵɵelementStart(10, "sup");
        i0.ɵɵtext(11, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 7);
        i0.ɵɵtemplate(13, UserLoginComponent_div_13_Template, 2, 0, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 5);
        i0.ɵɵelementStart(15, "label", 9);
        i0.ɵɵtext(16, "Has\u0142o");
        i0.ɵɵelementStart(17, "sup");
        i0.ɵɵtext(18, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(19, "input", 10);
        i0.ɵɵtemplate(20, UserLoginComponent_div_20_Template, 2, 0, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 5);
        i0.ɵɵelementStart(22, "button", 11);
        i0.ɵɵtext(23, "Login");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formGroup", ctx.loginForm);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.isFieldInvalid("username"));
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.isFieldInvalid("password"));
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.RequiredValidator, i1.NgControlStatus, i1.FormControlName, i4.NgIf], styles: [".content[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 10%;\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #c8ced5, inset 0 0 10px #c8ced5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2VyLWxvZ2luL3VzZXItbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQtc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkZDSlE7QURJWiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC9zaGFyZWQtc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uY29udGVudCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAxMCU7XHJcbiAgICBib3gtc2hhZG93OiAkYm94U2hhZG93XHJcbn1cclxuIiwiJGJveFNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMTAwcHggI2M4Y2VkNSxcbjEwcHggMTBweCAyMHB4ICNjOGNlZDUsXG5pbnNldCAwIDAgMTBweCAjYzhjZWQ1O1xuJGJvcmRlcjogMXB4ICMyMjIgc29saWQ7Il19 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserLoginComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-user-login',
                templateUrl: './user-login.component.html',
                styleUrls: ['./user-login.component.scss']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.Router }, { type: i3.AuthService }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/users/user-registration/user-registration.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/users/user-registration/user-registration.component.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistrationComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const user_1 = __webpack_require__(/*! ../user */ "./src/app/modules/users/user.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const i2 = __webpack_require__(/*! ../../core/authentication/auth.service */ "./src/app/modules/core/authentication/auth.service.ts");
const i3 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
class UserRegistrationComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.CustomerType = user_1.CustomerType;
    }
    ngOnInit() {
        this.registrationForm = this.fb.group({
            username: this.makeFormControl(),
            password: this.makeFormControl(),
            email: this.makeFormControl(),
            type: this.makeFormControl(),
        });
    }
    makeFormControl() {
        const cloned = new forms_1.FormControl('', [forms_1.Validators.required]);
        return cloned;
    }
    registration() {
        if (this.registrationForm.dirty && this.registrationForm.valid) {
            this.authService.registration(this.registrationForm.value).subscribe(data => {
                if (data === false) {
                }
                else {
                    this.router.navigate(['']);
                }
                this.registrationForm.reset();
            });
        }
    }
}
exports.UserRegistrationComponent = UserRegistrationComponent;
UserRegistrationComponent.ɵfac = function UserRegistrationComponent_Factory(t) { return new (t || UserRegistrationComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.Router)); };
UserRegistrationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserRegistrationComponent, selectors: [["app-user-registration"]], decls: 41, vars: 4, consts: [[1, "jumbotron", "content"], [1, "panel", "panel-default"], [1, "panel-heading", "text-center"], [1, "panel-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "userName"], ["required", "", "type", "text", "formControlName", "username", "id", "username", "name", "username", 1, "form-control"], ["for", "password"], ["required", "", "type", "text", "formControlName", "password", "id", "password", "name", "password", 1, "form-control"], ["for", "email"], ["required", "", "type", "text", "formControlName", "email", "id", "email", "name", "email", 1, "form-control"], ["for", "type"], ["required", "", "formControlName", "type", "name", "type", 1, "form-control"], [3, "value"], ["type", "button", 1, "btn", "btn-default"], ["type", "submit", 1, "btn", "btn-success"]], template: function UserRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "h2");
        i0.ɵɵtext(4, "Rejestracja u\u017Cytkownika");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "form", 4);
        i0.ɵɵlistener("ngSubmit", function UserRegistrationComponent_Template_form_ngSubmit_6_listener() { return ctx.registration(); });
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "label", 6);
        i0.ɵɵtext(9, "Nazwa u\u017Cytkownika ");
        i0.ɵɵelementStart(10, "sup");
        i0.ɵɵtext(11, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 5);
        i0.ɵɵelementStart(14, "label", 8);
        i0.ɵɵtext(15, "Has\u0142o");
        i0.ɵɵelementStart(16, "sup");
        i0.ɵɵtext(17, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 5);
        i0.ɵɵelementStart(20, "label", 10);
        i0.ɵɵtext(21, "Email");
        i0.ɵɵelementStart(22, "sup");
        i0.ɵɵtext(23, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(24, "input", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 5);
        i0.ɵɵelementStart(26, "label", 12);
        i0.ɵɵtext(27, "Typ");
        i0.ɵɵelementStart(28, "sup");
        i0.ɵɵtext(29, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "select", 13);
        i0.ɵɵelementStart(31, "option", 14);
        i0.ɵɵtext(32, "Standard");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "option", 14);
        i0.ɵɵtext(34, "Premium");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "option", 14);
        i0.ɵɵtext(36, "VIP");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "button", 15);
        i0.ɵɵtext(38, "Resetuj");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "button", 16);
        i0.ɵɵtext(40, "Rejestracja");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formGroup", ctx.registrationForm);
        i0.ɵɵadvance(25);
        i0.ɵɵproperty("value", ctx.CustomerType.Standard);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.CustomerType.Premium);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.CustomerType.VIP);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.RequiredValidator, i1.NgControlStatus, i1.FormControlName, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x], styles: [".content[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 10%;\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #c8ced5, inset 0 0 10px #c8ced5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2VyLXJlZ2lzdHJhdGlvbi91c2VyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSwyRkNKUTtBRElaIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2VyLXJlZ2lzdHJhdGlvbi91c2VyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvc2hhcmVkLXNjc3MvdmFyaWFibGVzLnNjc3NcIjtcclxuLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMTAlO1xyXG4gICAgYm94LXNoYWRvdzogJGJveFNoYWRvd1xyXG59XHJcbiIsIiRib3hTaGFkb3c6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsXG4xMHB4IDEwcHggMjBweCAjYzhjZWQ1LFxuaW5zZXQgMCAwIDEwcHggI2M4Y2VkNTtcbiRib3JkZXI6IDFweCAjMjIyIHNvbGlkOyJdfQ== */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserRegistrationComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-user-registration',
                templateUrl: './user-registration.component.html',
                styleUrls: ['./user-registration.component.scss']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.Router }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/users/user.ts":
/*!***************************************!*\
  !*** ./src/app/modules/users/user.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerType = void 0;
var CustomerType;
(function (CustomerType) {
    CustomerType[CustomerType["Standard"] = 0] = "Standard";
    CustomerType[CustomerType["Premium"] = 1] = "Premium";
    CustomerType[CustomerType["VIP"] = 2] = "VIP";
})(CustomerType = exports.CustomerType || (exports.CustomerType = {}));


/***/ }),

/***/ "./src/app/modules/users/user/user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/users/user/user.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
class UserComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.UserComponent = UserComponent;
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserComponent, selectors: [["app-user"]], decls: 2, vars: 0, consts: [[1, "outlet-container"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "router-outlet");
        i0.ɵɵelementEnd();
    } }, directives: [i1.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/users/users-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/users/users-routing.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutingModule = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const user_registration_component_1 = __webpack_require__(/*! ./user-registration/user-registration.component */ "./src/app/modules/users/user-registration/user-registration.component.ts");
const user_component_1 = __webpack_require__(/*! ./user/user.component */ "./src/app/modules/users/user/user.component.ts");
const contact_component_1 = __webpack_require__(/*! ./contact/contact.component */ "./src/app/modules/users/contact/contact.component.ts");
const user_login_component_1 = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/modules/users/user-login/user-login.component.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const routes = [
    {
        path: '',
        component: user_component_1.UserComponent,
        children: [
            {
                path: 'registration',
                data: { title: 'Rejestracja' },
                //    canActivate: [false],
                component: user_registration_component_1.UserRegistrationComponent,
            },
            {
                path: 'login',
                data: { title: 'Zaloguj' },
                component: user_login_component_1.UserLoginComponent,
            },
            {
                path: 'contact',
                data: { title: 'Kontakt' },
                component: contact_component_1.ContactComponent,
            }
        ]
    },
];
class UsersRoutingModule {
}
exports.UsersRoutingModule = UsersRoutingModule;
UsersRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: UsersRoutingModule });
UsersRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); }, imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UsersRoutingModule, { imports: [i1.RouterModule], exports: [router_1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UsersRoutingModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/users/users.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/users/users.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const users_routing_module_1 = __webpack_require__(/*! ./users-routing.module */ "./src/app/modules/users/users-routing.module.ts");
const user_registration_component_1 = __webpack_require__(/*! ./user-registration/user-registration.component */ "./src/app/modules/users/user-registration/user-registration.component.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const user_component_1 = __webpack_require__(/*! ./user/user.component */ "./src/app/modules/users/user/user.component.ts");
const contact_component_1 = __webpack_require__(/*! ./contact/contact.component */ "./src/app/modules/users/contact/contact.component.ts");
const user_login_component_1 = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/modules/users/user-login/user-login.component.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class UsersModule {
}
exports.UsersModule = UsersModule;
UsersModule.ɵmod = i0.ɵɵdefineNgModule({ type: UsersModule });
UsersModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, providers: [], imports: [[
            common_1.CommonModule,
            users_routing_module_1.UsersRoutingModule,
            router_1.RouterModule,
            forms_1.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UsersModule, { declarations: [user_registration_component_1.UserRegistrationComponent,
        user_component_1.UserComponent,
        contact_component_1.ContactComponent,
        user_login_component_1.UserLoginComponent], imports: [common_1.CommonModule,
        users_routing_module_1.UsersRoutingModule,
        router_1.RouterModule,
        forms_1.ReactiveFormsModule], exports: [user_registration_component_1.UserRegistrationComponent,
        user_component_1.UserComponent,
        contact_component_1.ContactComponent,
        user_login_component_1.UserLoginComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UsersModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    user_registration_component_1.UserRegistrationComponent,
                    user_component_1.UserComponent,
                    contact_component_1.ContactComponent,
                    user_login_component_1.UserLoginComponent
                ],
                imports: [
                    common_1.CommonModule,
                    users_routing_module_1.UsersRoutingModule,
                    router_1.RouterModule,
                    forms_1.ReactiveFormsModule,
                ],
                exports: [
                    user_registration_component_1.UserRegistrationComponent,
                    user_component_1.UserComponent,
                    contact_component_1.ContactComponent,
                    user_login_component_1.UserLoginComponent
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared-services/announcement.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/shared-services/announcement.service.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementService = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
class AnnouncementService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    addAnnouncement(newAnnouncement, idCategory, idType) {
        let headers = new http_1.HttpHeaders();
        headers = headers.set('content-type', 'application/json');
        // tslint:disable-next-line:max-line-length
        return this.httpClient.post(`/category/${idCategory}/type/${idType}`, JSON.stringify(newAnnouncement), { headers });
    }
    getAnnouncement() {
        return this.httpClient.get(`/api/get-announcements`).pipe(operators_1.tap(announcements => console.log('Announcements retrieved!')));
    }
}
exports.AnnouncementService = AnnouncementService;
AnnouncementService.ɵfac = function AnnouncementService_Factory(t) { return new (t || AnnouncementService)(i0.ɵɵinject(i1.HttpClient)); };
AnnouncementService.ɵprov = i0.ɵɵdefineInjectable({ token: AnnouncementService, factory: AnnouncementService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnnouncementService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared-services/logger.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/shared-services/logger.service.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerErrorService = exports.LoggerInfoService = exports.LoggerDebugService = exports.LoggerService = void 0;
/**
 * Głowny Interfejs Logger
 */
class LoggerService {
}
exports.LoggerService = LoggerService;
/**
 * Implementacja funkcji Loggera, które nic nie robią
 */
const doesNothing = () => { };
/**
 * Implementacja Loggera
 * Loguje wszystkie poziomy
 */
class LoggerDebugService extends LoggerService {
    debug(msg) {
        console.log(`[DEBUG] ${msg}`);
    }
    error(msg) {
        console.error(msg);
    }
    info(msg) {
        console.log(msg);
    }
}
exports.LoggerDebugService = LoggerDebugService;
/**
 * Implementacja Loggera
 * Pomija logowanie wpisów DEBUG
 */
class LoggerInfoService extends LoggerService {
    constructor() {
        super(...arguments);
        this.debug = doesNothing;
    }
    error(msg) {
        console.error(msg);
    }
    info(msg) {
        console.log(msg);
    }
}
exports.LoggerInfoService = LoggerInfoService;
/**
 * Implementacja Loggera
 * Pomija logowanie wpisów DEBUG i INFO
 */
class LoggerErrorService extends LoggerService {
    constructor() {
        super(...arguments);
        this.debug = doesNothing;
        this.info = doesNothing;
    }
    error(msg) {
        console.error(msg);
    }
}
exports.LoggerErrorService = LoggerErrorService;


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.envProdAnnouncementService = exports.envProdServiceLogger = exports.environment = void 0;
const logger_service_1 = __webpack_require__(/*! ../app/shared/shared-services/logger.service */ "./src/app/shared/shared-services/logger.service.ts");
const announcement_service_1 = __webpack_require__(/*! src/app/shared/shared-services/announcement.service */ "./src/app/shared/shared-services/announcement.service.ts");
exports.environment = {
    production: true
};
exports.envProdServiceLogger = logger_service_1.LoggerDebugService;
exports.envProdAnnouncementService = announcement_service_1.AnnouncementService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.envAnnouncementService = exports.envServiceLogger = exports.environment = void 0;
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const logger_service_1 = __webpack_require__(/*! ../app/shared/shared-services/logger.service */ "./src/app/shared/shared-services/logger.service.ts");
const announcement_service_1 = __webpack_require__(/*! ../app/shared/shared-services/announcement.service */ "./src/app/shared/shared-services/announcement.service.ts");
exports.environment = {
    production: false
};
exports.envServiceLogger = logger_service_1.LoggerDebugService;
exports.envAnnouncementService = announcement_service_1.AnnouncementService;
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
const __NgCli_bootstrap_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
const __NgCli_bootstrap_2 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/**
 * bootstrapper dla aplikacji klienckiej
 */
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
document.addEventListener('DOMContentLoaded', () => {
    __NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule)
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projekty_Angular5\angular10-example\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map