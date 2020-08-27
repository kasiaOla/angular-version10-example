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
const home_component_1 = __webpack_require__(/*! ./modules/pages/home/home.component */ "./src/app/modules/pages/home/home.component.ts");
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
    },
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
const i1 = __webpack_require__(/*! ./modules/core/authentication/auth/auth.service */ "./src/app/modules/core/authentication/auth/auth.service.ts");
const i2 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const i3 = __webpack_require__(/*! ./modules/core/navbar/navbar.component */ "./src/app/modules/core/navbar/navbar.component.ts");
const i4 = __webpack_require__(/*! ./modules/core/footer/footer.component */ "./src/app/modules/core/footer/footer.component.ts");
class AppComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.auth.state.subscribe(authorized => {
            authorized ? this.router.navigate(['user/profile']) : this.router.navigate(['/']);
        });
    }
}
exports.AppComponent = AppComponent;
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); };
AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "app"], [1, "app__page"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "app-navbar");
        i0.ɵɵelement(3, "app-footer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i3.NavbarComponent, i4.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.Router }]; }, null); })();


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
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const core_module_1 = __webpack_require__(/*! ./modules/core/core.module */ "./src/app/modules/core/core.module.ts");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const logger_service_1 = __webpack_require__(/*! ./shared/shared-services/logger/logger.service */ "./src/app/shared/shared-services/logger/logger.service.ts");
const environment_prod_1 = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
const ag_grid_angular_1 = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
const announcement_service_1 = __webpack_require__(/*! ./shared/shared-services/announcement/announcement.service */ "./src/app/shared/shared-services/announcement/announcement.service.ts");
const ag_grid_header_component_1 = __webpack_require__(/*! ./shared/shared-ag-grid-header/ag-grid-header.component */ "./src/app/shared/shared-ag-grid-header/ag-grid-header.component.ts");
const authentication_module_1 = __webpack_require__(/*! ./modules/core/authentication/authentication.module */ "./src/app/modules/core/authentication/authentication.module.ts");
const location_service_1 = __webpack_require__(/*! ./shared/shared-services/location/location.service */ "./src/app/shared/shared-services/location/location.service.ts");
const home_component_1 = __webpack_require__(/*! ./modules/pages/home/home.component */ "./src/app/modules/pages/home/home.component.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
const i2 = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
class AppModule {
}
exports.AppModule = AppModule;
AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        announcement_service_1.AnnouncementService,
        location_service_1.LocationService,
        {
            provide: logger_service_1.LoggerService,
            useClass: environment_prod_1.envProdServiceLogger,
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
            authentication_module_1.AuthenticationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent,
        home_component_1.HomeComponent,
        ag_grid_header_component_1.AgGridHeaderComponent], imports: [common_1.CommonModule, i1.BrowserModule, platform_browser_1.BrowserModule, i2.AgGridModule, app_routing_module_1.AppRoutingModule,
        forms_1.ReactiveFormsModule,
        forms_1.FormsModule,
        http_1.HttpClientModule,
        animations_1.BrowserAnimationsModule,
        core_module_1.CoreModule,
        authentication_module_1.AuthenticationModule], exports: [app_component_1.AppComponent,
        home_component_1.HomeComponent,
        ag_grid_header_component_1.AgGridHeaderComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    app_component_1.AppComponent,
                    home_component_1.HomeComponent,
                    ag_grid_header_component_1.AgGridHeaderComponent
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
                    authentication_module_1.AuthenticationModule
                ],
                exports: [
                    app_component_1.AppComponent,
                    home_component_1.HomeComponent,
                    ag_grid_header_component_1.AgGridHeaderComponent
                ],
                providers: [
                    announcement_service_1.AnnouncementService,
                    location_service_1.LocationService,
                    {
                        provide: logger_service_1.LoggerService,
                        useClass: environment_prod_1.envProdServiceLogger,
                    }
                ],
                entryComponents: [
                    ag_grid_header_component_1.AgGridHeaderComponent
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
const i2 = __webpack_require__(/*! ../../../shared/shared-services/logger/logger.service */ "./src/app/shared/shared-services/logger/logger.service.ts");
const i3 = __webpack_require__(/*! ../../core/authentication/auth/auth.service */ "./src/app/modules/core/authentication/auth/auth.service.ts");
const i4 = __webpack_require__(/*! src/app/shared/shared-services/announcement/announcement.service */ "./src/app/shared/shared-services/announcement/announcement.service.ts");
const i5 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
class AddAnnouncementComponent {
    constructor(fb, logger, authService, announcementService, route) {
        this.fb = fb;
        this.logger = logger;
        this.authService = authService;
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
            userid: '' + this.authService.getCurrentUser(),
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
        console.log('currect user', this.authService.getCurrentUser());
        this.announcementService.addAnnouncement(setAnnouncement, this.id_category, this.id_type)
            .subscribe(data => {
            Syntax: switch (data.success) {
                case false: {
                    this.logger.error(`Error code ${data.errcode}`);
                    break;
                }
                case true: {
                    this.logger.info('The advertisement has been correctly added' + data.respons);
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
AddAnnouncementComponent.ɵfac = function AddAnnouncementComponent_Factory(t) { return new (t || AddAnnouncementComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.LoggerService), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.AnnouncementService), i0.ɵɵdirectiveInject(i5.ActivatedRoute)); };
AddAnnouncementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddAnnouncementComponent, selectors: [["app-add-announcement"]], decls: 87, vars: 3, consts: [[1, "dashboard"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "dashboard__section", "dashboard__section--small"], [1, "dashboard__heading", "dashboard__heading--mail"], [1, "dashboard__section"], [1, "dashboard__heading"], [1, "panel-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "col-sm-12", "col-md-6"], ["for", "title"], ["type", "text", "formControlName", "title", 1, "form-control"], [1, "form-group", "col-sm-12", "col-md-2"], ["for", "price"], ["type", "text", "formControlName", "price", 1, "form-control"], ["for", "surface"], ["type", "text", "formControlName", "surface", 1, "form-control"], ["for", "pricePerM"], ["type", "text", "formControlName", "pricePerM", 1, "form-control"], ["for", "numberOfRooms"], ["type", "number", "formControlName", "numberOfRooms", 1, "form-control"], ["for", "floor"], ["type", "number", "formControlName", "floor", 1, "form-control"], [1, "form-group", "col-sm-12", "col-md-4"], ["for", "multimedia"], ["required", "", "type", "text", "formControlName", "multimedia", 1, "form-control"], [1, "border", "p-2", "col-sm-12", "col-md-10"], ["formGroupName", "address", 1, "row"], ["for", "city"], ["type", "text", "formControlName", "city", 1, "form-control"], ["for", "street"], ["type", "text", "formControlName", "street", 1, "form-control"], ["for", "houseNumber"], ["type", "number", "formControlName", "houseNumber", 1, "form-control"], ["for", "postCode"], ["type", "text", "formControlName", "postCode", 1, "form-control"], [1, "form-group", "col-sm-12", "col-md-8"], ["for", "description"], ["formControlName", "description", "placeholder", "Opis", "rows", "3", 1, "form-control"], ["for", "announcementType"], ["type", "text", "id", "announcementType", "name", "announcementType", "disabled", "", 1, "form-control", 3, "value"], [1, "col-sm-12", "col-md-4", "form-group"], ["type", "button", 1, "button"], ["type", "submit", 1, "btn", "btn-success"]], template: function AddAnnouncementComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "h2");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 2);
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵelementStart(12, "h3");
        i0.ɵɵtext(13, "Lista og\u0142osze\u0144");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 8);
        i0.ɵɵelementStart(15, "form", 9);
        i0.ɵɵlistener("ngSubmit", function AddAnnouncementComponent_Template_form_ngSubmit_15_listener() { return ctx.addAnnouncement(); });
        i0.ɵɵelementStart(16, "div", 2);
        i0.ɵɵelementStart(17, "div", 10);
        i0.ɵɵelementStart(18, "label", 11);
        i0.ɵɵtext(19, "Tytu\u0142 ");
        i0.ɵɵelementStart(20, "sup");
        i0.ɵɵtext(21, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(22, "input", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 13);
        i0.ɵɵelementStart(24, "label", 14);
        i0.ɵɵtext(25, "Cena ");
        i0.ɵɵelementStart(26, "sup");
        i0.ɵɵtext(27, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(28, "input", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "div", 13);
        i0.ɵɵelementStart(30, "label", 16);
        i0.ɵɵtext(31, "Powierzchnia ");
        i0.ɵɵelementStart(32, "sup");
        i0.ɵɵtext(33, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(34, "input", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "div", 2);
        i0.ɵɵelementStart(36, "div", 13);
        i0.ɵɵelementStart(37, "label", 18);
        i0.ɵɵtext(38, "Powierzchnia za m\u00B2");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(39, "input", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "div", 13);
        i0.ɵɵelementStart(41, "label", 20);
        i0.ɵɵtext(42, "Liczba pokoi");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(43, "input", 21);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "div", 13);
        i0.ɵɵelementStart(45, "label", 22);
        i0.ɵɵtext(46, "Pietro");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(47, "input", 23);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "div", 24);
        i0.ɵɵelementStart(49, "label", 25);
        i0.ɵɵtext(50, "Multimedia");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(51, "input", 26);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "fieldset", 27);
        i0.ɵɵelementStart(53, "label");
        i0.ɵɵtext(54, "Adres:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(55, "div", 28);
        i0.ɵɵelementStart(56, "div", 24);
        i0.ɵɵelementStart(57, "label", 29);
        i0.ɵɵtext(58, "Miasto");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(59, "input", 30);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(60, "div", 24);
        i0.ɵɵelementStart(61, "label", 31);
        i0.ɵɵtext(62, "Ulica");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(63, "input", 32);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(64, "div", 13);
        i0.ɵɵelementStart(65, "label", 33);
        i0.ɵɵtext(66, "Nr domu");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(67, "input", 34);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(68, "div", 13);
        i0.ɵɵelementStart(69, "label", 35);
        i0.ɵɵtext(70, "Kod pocztowy");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(71, "input", 36);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(72, "div", 2);
        i0.ɵɵelementStart(73, "div", 37);
        i0.ɵɵelementStart(74, "label", 38);
        i0.ɵɵtext(75, "Opis");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(76, "textarea", 39);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(77, "div", 13);
        i0.ɵɵelementStart(78, "label", 40);
        i0.ɵɵtext(79, "Typ: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(80, "input", 41);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(81, "div", 2);
        i0.ɵɵelementStart(82, "div", 42);
        i0.ɵɵelementStart(83, "button", 43);
        i0.ɵɵtext(84, "Resetuj");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(85, "button", 44);
        i0.ɵɵtext(86, "Rejestracja");
        i0.ɵɵelementEnd();
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
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1("Dodaj og\u0142oszenie - ", ctx.AnnouncementsCategories[ctx.id_category], "");
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("formGroup", ctx.announcementForm);
        i0.ɵɵadvance(65);
        i0.ɵɵproperty("value", ctx.AnnouncementType[ctx.id_type]);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.NumberValueAccessor, i1.RequiredValidator, i1.FormGroupName], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  -webkit-text-size-adjust: 100%;\n  \n  -ms-text-size-adjust: 100%;\n  \n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n  \n  -ms-interpolation-mode: bicubic;\n  \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0;\n  \n  padding: 0;\n  white-space: normal;\n  \n  *margin-left: -7px;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  margin: 0;\n  \n  vertical-align: baseline;\n  \n  *vertical-align: middle;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n  \n  cursor: pointer;\n  \n  *overflow: visible;\n  \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  \n  padding: 0;\n  \n  *height: 13px;\n  \n  *width: 13px;\n  \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;\n  \n  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n  vertical-align: top;\n  \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-height: 100vh;\n}\n.app[_ngcontent-%COMP%]   .app__page[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fafafa;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.38);\n  text-transform: uppercase;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n.form-group[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  margin-top: 1rem;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\ninput[_ngcontent-%COMP%]:active {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\n.dashboard[_ngcontent-%COMP%] {\n  margin: 3rem 5rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading.dashboard__heading--mail[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section[_ngcontent-%COMP%] {\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #a4bfdd, inset 0 0 10px #c8ced5;\n  padding: 2rem 1rem;\n  margin-top: 2rem;\n  border-radius: 0.25rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section.dashboard__section--small[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table[_ngcontent-%COMP%]   .table__tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid grey;\n}\n.table[_ngcontent-%COMP%]   .table__tr[_ngcontent-%COMP%]:nth-of-type(even) {\n  background: lightgrey;\n}\n.table[_ngcontent-%COMP%]   .table__td[_ngcontent-%COMP%] {\n  padding: 0 0.25rem;\n  height: 3.5rem;\n  vertical-align: middle;\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n.button[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #fff;\n  padding: 1rem;\n  font-size: 1rem;\n  border-radius: 2rem;\n  background: inset -10px -10px 100px #c8ced5, 10px 10px 20px #a4bfdd, inset 0 0 10px #c8ced5;\n  cursor: pointer;\n}\n.button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  animation: button-hover 1s ease;\n}\n@keyframes button-hover {\n  50% {\n    background-color: 0 0;\n  }\n}\n.circles[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL3Jlc2V0LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYW5ub3VuY2VtZW50cy9hZGQtYW5ub3VuY2VtZW50L2FkZC1hbm5vdW5jZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQtc2Nzcy9hcHAuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2hhcmVkLXNjc3MvZGFzaGJvYXJkLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQtc2Nzcy9jb21wb25lbnRzL3RhYmxlLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQtc2Nzcy9jb21wb25lbnRzL2J1dHRvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkksU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0FKO0FESUEseURBQUE7QUFFQTtFQUNJLFVBQUE7QUNGSjtBRE1BLGdEQUFBO0FBRUE7Ozs7Ozs7Ozs7O0VBV0ksY0FBQTtBQ0pKO0FET0E7RUFDSSxjQUFBO0FDSko7QURPQTs7RUFFSSxnQkFBQTtBQ0pKO0FET0E7O0VBRUksWUFBQTtBQ0pKO0FET0E7Ozs7RUFJSSxXQUFBO0VBQ0EsYUFBQTtBQ0pKO0FET0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDSko7QURPQTs7OztFQUlJLHdCQUFBO0VBQ0EscUJBQUE7QUNKSjtBRE9BO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUdBLHVCQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSko7QURRQTs7RUFBQTtBQUlBOzs7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STtFQUNJLG1CQUFBO0FINGVSO0FHM2VRO0VBQ0ksZ0JBQUE7QUg2ZVo7QUcxZUk7RUFDSSwyRkRWSTtFQ1dKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBSDRlUjtBRzNlUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUg2ZVo7QUk3ZkE7RUFDSSxXQUFBO0FKZ2dCSjtBSS9mSTtFQUNJLDZCQUFBO0FKaWdCUjtBSWhnQlE7RUFDSSxxQkFBQTtBSmtnQlo7QUkvZkk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCRk5PO0VFT1AsMEJGS1M7QUY0ZmpCO0FLN2dCQTtFQUNJLHFCQUFBO0VBQ0EsV0hhSTtFR1pKLGFBQUE7RUFDQSxlSEVXO0VHRFgsbUJBQUE7RUFDQSwyRkhQUTtFR1FSLGVBQUE7QUxnaEJKO0FLL2dCSTtFQUVJLFdIS0E7RUdKQSwrQkFBQTtBTGdoQlI7QUs1Z0JBO0VBQ0k7SUFDSSxxQkFBQTtFTCtnQk47QUFDRjtBQS9oQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQWlpQkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Fubm91bmNlbWVudHMvYWRkLWFubm91bmNlbWVudC9hZGQtYW5ub3VuY2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cclxuICAgdjIuMC1tb2RpZmllZCB8IDIwMTEwMTI2XHJcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXHJcbiovXHJcblxyXG5odG1sLFxyXG5ib2R5LFxyXG5kaXYsXHJcbnNwYW4sXHJcbmFwcGxldCxcclxub2JqZWN0LFxyXG5pZnJhbWUsXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYsXHJcbnAsXHJcbmJsb2NrcXVvdGUsXHJcbnByZSxcclxuYSxcclxuYWJicixcclxuYWNyb255bSxcclxuYWRkcmVzcyxcclxuYmlnLFxyXG5jaXRlLFxyXG5jb2RlLFxyXG5kZWwsXHJcbmRmbixcclxuZW0sXHJcbmltZyxcclxuaW5zLFxyXG5rYmQsXHJcbnEsXHJcbnMsXHJcbnNhbXAsXHJcbnNtYWxsLFxyXG5zdHJpa2UsXHJcbnN0cm9uZyxcclxuc3ViLFxyXG5zdXAsXHJcbnR0LFxyXG52YXIsXHJcbmIsXHJcbnUsXHJcbmksXHJcbmNlbnRlcixcclxuZGwsXHJcbmR0LFxyXG5kZCxcclxub2wsXHJcbnVsLFxyXG5saSxcclxuZmllbGRzZXQsXHJcbmZvcm0sXHJcbmxhYmVsLFxyXG5sZWdlbmQsXHJcbnRhYmxlLFxyXG5jYXB0aW9uLFxyXG50Ym9keSxcclxudGZvb3QsXHJcbnRoZWFkLFxyXG50cixcclxudGgsXHJcbnRkLFxyXG5hcnRpY2xlLFxyXG5hc2lkZSxcclxuY2FudmFzLFxyXG5kZXRhaWxzLFxyXG5lbWJlZCxcclxuZmlndXJlLFxyXG5maWdjYXB0aW9uLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxuaGdyb3VwLFxyXG5tZW51LFxyXG5uYXYsXHJcbm91dHB1dCxcclxucnVieSxcclxuc2VjdGlvbixcclxuc3VtbWFyeSxcclxudGltZSxcclxubWFyayxcclxuYXVkaW8sXHJcbnZpZGVvIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBmb250OiBpbmhlcml0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG5cclxuLyogbWFrZSBzdXJlIHRvIHNldCBzb21lIGZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xyXG5cclxuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcblxyXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcblxyXG5hcnRpY2xlLFxyXG5hc2lkZSxcclxuZGV0YWlscyxcclxuZmlnY2FwdGlvbixcclxuZmlndXJlLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxuaGdyb3VwLFxyXG5tZW51LFxyXG5uYXYsXHJcbnNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbm9sLFxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlLFxyXG5xIHtcclxuICAgIHF1b3Rlczogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZTpiZWZvcmUsXHJcbmJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLFxyXG5xOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgY29udGVudDogbm9uZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxyXG4gKi9cclxuXHJcbmF1ZGlvLFxyXG5jYW52YXMsXHJcbnZpZGVvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICpkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAqem9vbTogMTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxyXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxyXG4gKi9cclxuXHJcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXHJcbiAqIEtub3duIGlzc3VlOiBubyBJRSA2IHN1cHBvcnQuXHJcbiAqL1xyXG5cclxuW2hpZGRlbl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRleHQgcmVzaXppbmcgb2RkbHkgaW4gSUUgNi83IHdoZW4gYm9keSBgZm9udC1zaXplYCBpcyBzZXQgdXNpbmdcclxuICogICAgYGVtYCB1bml0cy5cclxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXHJcbiAqICAgIHVzZXIgem9vbS5cclxuICovXHJcblxyXG5odG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIC8qIDEgKi9cclxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgIC8qIDIgKi9cclxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgLyogMiAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuYTphY3RpdmUsXHJcbmE6aG92ZXIge1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cclxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXHJcbiAqL1xyXG5cclxuaW1nIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIC8qIDEgKi9cclxuICAgIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7XHJcbiAgICAvKiAyICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cclxuICovXHJcblxyXG5maWd1cmUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENvcnJlY3QgbWFyZ2luIGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXHJcbiAqL1xyXG5cclxuZm9ybSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxyXG4gKi9cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA2LzcvOC85LlxyXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cclxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cclxuICovXHJcblxyXG5sZWdlbmQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAvKiAyICovXHJcbiAgICAqbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgICAvKiAzICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gSUUgNi83LCBGaXJlZm94IDMrLCBTYWZhcmkgNSxcclxuICogICAgYW5kIENocm9tZS5cclxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAvKiAxICovXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAvKiAyICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAvKiAzICovXHJcbiAgICAqdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC8qIDMgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIEZpcmVmb3ggMysgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXHJcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQge1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXHJcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXHJcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cclxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cclxuICovXHJcblxyXG5idXR0b24sXHJcbnNlbGVjdCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxyXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cclxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxyXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxyXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXHJcbiAqIDQuIFJlbW92ZSBpbm5lciBzcGFjaW5nIGluIElFIDcgd2l0aG91dCBhZmZlY3Rpbmcgbm9ybWFsIHRleHQgaW5wdXRzLlxyXG4gKiAgICBLbm93biBpc3N1ZTogaW5uZXIgc3BhY2luZyByZW1haW5zIGluIElFIDYuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5odG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXHJcblxyXG4vKiAxICovXHJcblxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0sXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XHJcbiAgICAvKiAyICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiAzICovXHJcbiAgICAqb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAvKiA0ICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cclxuICovXHJcblxyXG5idXR0b25bZGlzYWJsZWRdLFxyXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXHJcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkuXHJcbiAqIDMuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA3LlxyXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxyXG4gKi9cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLyogMiAqL1xyXG4gICAgKmhlaWdodDogMTNweDtcclxuICAgIC8qIDMgKi9cclxuICAgICp3aWR0aDogMTNweDtcclxuICAgIC8qIDMgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxyXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcclxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXHJcbiAqL1xyXG5cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICAgIC8qIDEgKi9cclxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgLyogMiAqL1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcclxuICogb24gT1MgWC5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggMysuXHJcbiAqL1xyXG5cclxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA2LzcvOC85LlxyXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgLyogMSAqL1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIC8qIDIgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXHJcbiAqL1xyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG5odG1sLFxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG46Oi1tb3otc2VsZWN0aW9uIHtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG46OnNlbGVjdGlvbiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbi5jaHJvbWVmcmFtZSB7XHJcbiAgICBtYXJnaW46IDAuMmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAwO1xyXG59XHJcbiIsIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXG4gICB2Mi4wLW1vZGlmaWVkIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBtYWtlIHN1cmUgdG8gc2V0IHNvbWUgZm9jdXMgc3R5bGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXG46Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKipcbiAqIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXG4gKi9cbmF1ZGlvLFxuY2FudmFzLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gICp6b29tOiAxO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8qKlxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXG4gKi9cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuLyoqXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgNy84LzksIEZpcmVmb3ggMywgYW5kIFNhZmFyaSA0LlxuICogS25vd24gaXNzdWU6IG5vIElFIDYgc3VwcG9ydC5cbiAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGV4dCByZXNpemluZyBvZGRseSBpbiBJRSA2Lzcgd2hlbiBib2R5IGBmb250LXNpemVgIGlzIHNldCB1c2luZ1xuICogICAgYGVtYCB1bml0cy5cbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xuICogICAgdXNlciB6b29tLlxuICovXG5odG1sIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLyogMiAqL1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxuICovXG5hOmZvY3VzIHtcbiAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XG59XG5cbi8qKlxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbmE6YWN0aXZlLFxuYTpob3ZlciB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXG4gKiAyLiBJbXByb3ZlIGltYWdlIHF1YWxpdHkgd2hlbiBzY2FsZWQgaW4gSUUgNy5cbiAqL1xuaW1nIHtcbiAgYm9yZGVyOiAwO1xuICAvKiAxICovXG4gIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA2LzcvOC85LCBTYWZhcmkgNSwgYW5kIE9wZXJhIDExLlxuICovXG5maWd1cmUge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogQ29ycmVjdCBtYXJnaW4gZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cbiAqL1xuZm9ybSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXG4gKi9cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgbWFyZ2luOiAwIDJweDtcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA2LzcvOC85LlxuICogMi4gQ29ycmVjdCB0ZXh0IG5vdCB3cmFwcGluZyBpbiBGaXJlZm94IDMuXG4gKiAzLiBDb3JyZWN0IGFsaWdubWVudCBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxuICovXG5sZWdlbmQge1xuICBib3JkZXI6IDA7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgLyogMiAqL1xuICAqbWFyZ2luLWxlZnQ6IC03cHg7XG4gIC8qIDMgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gSUUgNi83LCBGaXJlZm94IDMrLCBTYWZhcmkgNSxcbiAqICAgIGFuZCBDaHJvbWUuXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuYnV0dG9uLFxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgLyogMSAqL1xuICBtYXJnaW46IDA7XG4gIC8qIDIgKi9cbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAvKiAzICovXG4gICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAvKiAzICovXG59XG5cbi8qKlxuICogQWRkcmVzcyBGaXJlZm94IDMrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxuICogdGhlIFVBIHN0eWxlc2hlZXQuXG4gKi9cbmJ1dHRvbixcbmlucHV0IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLyoqXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDYrLlxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cbiAqL1xuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cbiAqIDQuIFJlbW92ZSBpbm5lciBzcGFjaW5nIGluIElFIDcgd2l0aG91dCBhZmZlY3Rpbmcgbm9ybWFsIHRleHQgaW5wdXRzLlxuICogICAgS25vd24gaXNzdWU6IGlubmVyIHNwYWNpbmcgcmVtYWlucyBpbiBJRSA2LlxuICovXG5idXR0b24sXG5odG1sIGlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9cmVzZXRdLFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIC8qIDIgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiAzICovXG4gICpvdmVyZmxvdzogdmlzaWJsZTtcbiAgLyogNCAqL1xufVxuXG4vKipcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXG4gKi9cbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLyoqXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGNvbnRlbnQtYm94IGluIElFIDgvOS5cbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkuXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cbiAqICAgIEtub3duIGlzc3VlOiBleGNlc3MgcGFkZGluZyByZW1haW5zIGluIElFIDYuXG4gKi9cbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiAxICovXG4gIHBhZGRpbmc6IDA7XG4gIC8qIDIgKi9cbiAgKmhlaWdodDogMTNweDtcbiAgLyogMyAqL1xuICAqd2lkdGg6IDEzcHg7XG4gIC8qIDMgKi9cbn1cblxuLyoqXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cbiAqL1xuaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIC8qIDEgKi9cbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLyogMiAqL1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLyoqXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxuICogb24gT1MgWC5cbiAqL1xuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCAzKy5cbiAqL1xuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDYvNy84LzkuXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxuICovXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXG4gKi9cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmh0bWwsXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgY29sb3I6ICMyMjI7XG59XG5cbjo6LW1vei1zZWxlY3Rpb24ge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuZmllbGRzZXQge1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4uY2hyb21lZnJhbWUge1xuICBtYXJnaW46IDAuMmVtIDA7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAwLjJlbSAwO1xufVxuXG4uYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4uYXBwIC5hcHBfX3BhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiAwO1xufVxuaW5wdXQ6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5kYXNoYm9hcmQge1xuICBtYXJnaW46IDNyZW0gNXJlbTtcbn1cbi5kYXNoYm9hcmQgLmRhc2hib2FyZF9faGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uZGFzaGJvYXJkIC5kYXNoYm9hcmRfX2hlYWRpbmcuZGFzaGJvYXJkX19oZWFkaW5nLS1tYWlsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5kYXNoYm9hcmQgLmRhc2hib2FyZF9fc2VjdGlvbiB7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsIDEwcHggMTBweCAyMHB4ICNhNGJmZGQsIGluc2V0IDAgMCAxMHB4ICNjOGNlZDU7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5kYXNoYm9hcmQgLmRhc2hib2FyZF9fc2VjdGlvbi5kYXNoYm9hcmRfX3NlY3Rpb24tLXNtYWxsIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi50YWJsZSAudGFibGVfX3RyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG59XG4udGFibGUgLnRhYmxlX190cjpudGgtb2YtdHlwZShldmVuKSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbn1cbi50YWJsZSAudGFibGVfX3RkIHtcbiAgcGFkZGluZzogMCAwLjI1cmVtO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBiYWNrZ3JvdW5kOiBpbnNldCAtMTBweCAtMTBweCAxMDBweCAjYzhjZWQ1LCAxMHB4IDEwcHggMjBweCAjYTRiZmRkLCBpbnNldCAwIDAgMTBweCAjYzhjZWQ1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnV0dG9uOmhvdmVyLCAuYnV0dG9uOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGFuaW1hdGlvbjogYnV0dG9uLWhvdmVyIDFzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgYnV0dG9uLWhvdmVyIHtcbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAwIDA7XG4gIH1cbn1cbi5jaXJjbGVzIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59IiwiQGltcG9ydCBcIi4vcmVzZXQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uYXBwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAuYXBwX19wYWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteGw7XHJcbiAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbWQ7XHJcbiAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XHJcbiAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuQG1peGluIG91dGxpbmUtLW5vbmUge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgQGluY2x1ZGUgb3V0bGluZS0tbm9uZTtcclxuICAgIH1cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBAaW5jbHVkZSBvdXRsaW5lLS1ub25lO1xyXG4gICAgfVxyXG59XHJcbiIsIiRib3hTaGFkb3c6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsXHJcbjEwcHggMTBweCAyMHB4ICNhNGJmZGQsXHJcbmluc2V0IDAgMCAxMHB4ICNjOGNlZDU7XHJcbiRib3JkZXI6IDFweCAjMjIyIHNvbGlkO1xyXG4kZm9udC1zaXplLXh4czogLjYyNXJlbTtcclxuJGZvbnQtc2l6ZS14czogLjc1cmVtO1xyXG4kZm9udC1zaXplLXNtOiAuOXJlbTtcclxuJGZvbnQtc2l6ZS1tZDogMXJlbTtcclxuJGZvbnQtc2l6ZS1sZzogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS14bDogMS41cmVtO1xyXG4kZm9udC1zaXplLXh4bDogMnJlbTtcclxuJGNvbG9yLXJlZDogI0ZGMDAwMDtcclxuJGNvbG9yLWdyZWVuLTE1OiAjMDA0ZDFhO1xyXG4kY29sb3ItZ3JheS05MDogI2JiYmJiYTtcclxuJGNvbG9yLWdyYXktMjU6ICM0ZDRkMzM7XHJcbiRjb2xvci1ncmVlbi01NTogIzUzYzY1MztcclxuJHdoaXRlOiAjZmZmO1xyXG4kZGFyazogcmdiYSgjMDAwLCAuODcpO1xyXG4kZGFyay1zZWNvbmRhcnk6IHJnYmEoIzAwMCwgLjU0KTtcclxuJGRhcmstZGlzYWJsZWQ6IHJnYmEoIzAwMCwgLjM4KTtcclxuIiwiQGltcG9ydCBcIi4vYXBwLnNjc3NcIjtcclxuLmRhc2hib2FyZCB7XHJcbiAgICBtYXJnaW46IDNyZW0gNXJlbTtcclxuICAgIC5kYXNoYm9hcmRfX2hlYWRpbmcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgJi5kYXNoYm9hcmRfX2hlYWRpbmctLW1haWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kYXNoYm9hcmRfX3NlY3Rpb24ge1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRib3hTaGFkb3c7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgICAgICYuZGFzaGJvYXJkX19zZWN0aW9uLS1zbWFsbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLnRhYmxlX190ciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgJjpudGgtb2YtdHlwZShldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGFibGVfX3RkIHtcclxuICAgICAgICBwYWRkaW5nOiAwIC4yNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcclxuICAgICAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG4gICAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLW1kO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGZvbnQtc2l6ZS1tZCAqIDI7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYm94U2hhZG93O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlcixcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBidXR0b24taG92ZXIgMXMgZWFzZTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBidXR0b24taG92ZXIge1xyXG4gICAgNTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAwIDA7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddAnnouncementComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-add-announcement',
                templateUrl: './add-announcement.component.html',
                styleUrls: ['./add-announcement.component.scss']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.LoggerService }, { type: i3.AuthService }, { type: i4.AnnouncementService }, { type: i5.ActivatedRoute }]; }, null); })();


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
const list_announcements_component_1 = __webpack_require__(/*! ./list-announcements/list-announcements.component */ "./src/app/modules/announcements/list-announcements/list-announcements.component.ts");
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
                pathMatch: 'full',
            },
            {
                path: 'list-announcements',
                data: { title: 'Lista ogłoszeń' },
                component: list_announcements_component_1.ListAnnouncementsComponent,
            },
            {
                path: 'edit-announcement/:id',
                component: announcement_component_1.AnnouncementComponent,
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
const announcement_service_1 = __webpack_require__(/*! ../../shared/shared-services/announcement/announcement.service */ "./src/app/shared/shared-services/announcement/announcement.service.ts");
const announcement_component_1 = __webpack_require__(/*! ./announcement/announcement.component */ "./src/app/modules/announcements/announcement/announcement.component.ts");
const list_announcements_component_1 = __webpack_require__(/*! ./list-announcements/list-announcements.component */ "./src/app/modules/announcements/list-announcements/list-announcements.component.ts");
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
        add_category_announcement_component_1.AddCategoryAnnouncementComponent,
        list_announcements_component_1.ListAnnouncementsComponent], imports: [common_1.CommonModule,
        announcement_routing_module_1.AnnouncementRoutingModule,
        router_1.RouterModule,
        forms_1.ReactiveFormsModule], exports: [announcement_component_1.AnnouncementComponent,
        add_announcement_component_1.AddAnnouncementComponent,
        add_category_announcement_component_1.AddCategoryAnnouncementComponent,
        list_announcements_component_1.ListAnnouncementsComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnnouncementModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    announcement_component_1.AnnouncementComponent,
                    add_announcement_component_1.AddAnnouncementComponent,
                    add_category_announcement_component_1.AddCategoryAnnouncementComponent,
                    list_announcements_component_1.ListAnnouncementsComponent
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
                    add_category_announcement_component_1.AddCategoryAnnouncementComponent,
                    list_announcements_component_1.ListAnnouncementsComponent
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
    ngOnInit() { }
}
exports.AnnouncementComponent = AnnouncementComponent;
AnnouncementComponent.ɵfac = function AnnouncementComponent_Factory(t) { return new (t || AnnouncementComponent)(); };
AnnouncementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AnnouncementComponent, selectors: [["app-announcement"]], decls: 1, vars: 0, template: function AnnouncementComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "router-outlet");
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

/***/ "./src/app/modules/announcements/list-announcements/list-announcements.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/announcements/list-announcements/list-announcements.component.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAnnouncementsComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! ../../../shared/shared-services/announcement/announcement.service */ "./src/app/shared/shared-services/announcement/announcement.service.ts");
const i2 = __webpack_require__(/*! ../../core/authentication/auth/auth.service */ "./src/app/modules/core/authentication/auth/auth.service.ts");
const i3 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const i4 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const _c0 = function (a1) { return ["/edit-announcement/", a1]; };
function ListAnnouncementsComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 13);
    i0.ɵɵelementStart(1, "td", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 14);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 14);
    i0.ɵɵelementStart(8, "button", 15);
    i0.ɵɵtext(9, "edit ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 16);
    i0.ɵɵlistener("click", function ListAnnouncementsComponent_tr_26_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r3); const listAnnouncement_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.removeAnnouncement(listAnnouncement_r1, listAnnouncement_r1._id); });
    i0.ɵɵtext(11, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const listAnnouncement_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listAnnouncement_r1._id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listAnnouncement_r1.price);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listAnnouncement_r1.pricePerM);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(4, _c0, listAnnouncement_r1._id));
} }
class ListAnnouncementsComponent {
    constructor(announcementService, authService) {
        this.announcementService = announcementService;
        this.authService = authService;
        this.idUser = '' + this.authService.getCurrentUser();
        this.listAnnouncements = this.announcementService.getAnnouncementUser(this.idUser);
    }
    ngOnInit() { }
    removeAnnouncement(value, id) { }
}
exports.ListAnnouncementsComponent = ListAnnouncementsComponent;
ListAnnouncementsComponent.ɵfac = function ListAnnouncementsComponent_Factory(t) { return new (t || ListAnnouncementsComponent)(i0.ɵɵdirectiveInject(i1.AnnouncementService), i0.ɵɵdirectiveInject(i2.AuthService)); };
ListAnnouncementsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListAnnouncementsComponent, selectors: [["app-list-announcements"]], decls: 28, vars: 3, consts: [[1, "dashboard"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "dashboard__section", "dashboard__section--small"], [1, "dashboard__heading", "dashboard__heading--mail"], [1, "dashboard__section"], [1, "dashboard__heading"], [1, "table"], [1, "table__thead"], [1, "table__th"], [1, "table__tbody"], ["class", "table__tr", 4, "ngFor", "ngForOf"], [1, "table__tr"], [1, "table__td"], [1, "material-icons", "table__action-icon", 3, "routerLink"], [1, "material-icons", "table__action-icon", 3, "click"]], template: function ListAnnouncementsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "h2");
        i0.ɵɵtext(7, "Twoja lista og\u0142osze\u0144");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 2);
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵelementStart(12, "h3");
        i0.ɵɵtext(13, "Lista og\u0142osze\u0144");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "table", 8);
        i0.ɵɵelement(15, "thead", 9);
        i0.ɵɵelementStart(16, "tr");
        i0.ɵɵelementStart(17, "th", 10);
        i0.ɵɵtext(18, "#");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "th", 10);
        i0.ɵɵtext(20, "Nazwa");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "th", 10);
        i0.ɵɵtext(22, "Cena");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "th", 10);
        i0.ɵɵtext(24, "Powierzchnia");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "tbody", 11);
        i0.ɵɵtemplate(26, ListAnnouncementsComponent_tr_26_Template, 12, 6, "tr", 12);
        i0.ɵɵpipe(27, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(26);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(27, 1, ctx.listAnnouncements));
    } }, directives: [i3.NgForOf, i4.RouterLink], pipes: [i3.AsyncPipe], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  -webkit-text-size-adjust: 100%;\n  \n  -ms-text-size-adjust: 100%;\n  \n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n  \n  -ms-interpolation-mode: bicubic;\n  \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0;\n  \n  padding: 0;\n  white-space: normal;\n  \n  *margin-left: -7px;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  margin: 0;\n  \n  vertical-align: baseline;\n  \n  *vertical-align: middle;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n  \n  cursor: pointer;\n  \n  *overflow: visible;\n  \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  \n  padding: 0;\n  \n  *height: 13px;\n  \n  *width: 13px;\n  \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;\n  \n  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n  vertical-align: top;\n  \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-height: 100vh;\n}\n.app[_ngcontent-%COMP%]   .app__page[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fafafa;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.38);\n  text-transform: uppercase;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n.form-group[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  margin-top: 1rem;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\ninput[_ngcontent-%COMP%]:active {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\n.dashboard[_ngcontent-%COMP%] {\n  margin: 3rem 5rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading.dashboard__heading--mail[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section[_ngcontent-%COMP%] {\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #a4bfdd, inset 0 0 10px #c8ced5;\n  padding: 2rem 1rem;\n  margin-top: 2rem;\n  border-radius: 0.25rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section.dashboard__section--small[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table[_ngcontent-%COMP%]   .table__tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid grey;\n}\n.table[_ngcontent-%COMP%]   .table__tr[_ngcontent-%COMP%]:nth-of-type(even) {\n  background: lightgrey;\n}\n.table[_ngcontent-%COMP%]   .table__td[_ngcontent-%COMP%] {\n  padding: 0 0.25rem;\n  height: 3.5rem;\n  vertical-align: middle;\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL3Jlc2V0LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYW5ub3VuY2VtZW50cy9saXN0LWFubm91bmNlbWVudHMvbGlzdC1hbm5vdW5jZW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2hhcmVkLXNjc3MvYXBwLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQtc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL2Rhc2hib2FyZC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2hhcmVkLXNjc3MvY29tcG9uZW50cy90YWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkksU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0FKO0FESUEseURBQUE7QUFFQTtFQUNJLFVBQUE7QUNGSjtBRE1BLGdEQUFBO0FBRUE7Ozs7Ozs7Ozs7O0VBV0ksY0FBQTtBQ0pKO0FET0E7RUFDSSxjQUFBO0FDSko7QURPQTs7RUFFSSxnQkFBQTtBQ0pKO0FET0E7O0VBRUksWUFBQTtBQ0pKO0FET0E7Ozs7RUFJSSxXQUFBO0VBQ0EsYUFBQTtBQ0pKO0FET0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDSko7QURPQTs7OztFQUlJLHdCQUFBO0VBQ0EscUJBQUE7QUNKSjtBRE9BO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUdBLHVCQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSko7QURRQTs7RUFBQTtBQUlBOzs7RUFHSSxxQkFBQTtHQ05GLGVET0U7R0NORixPRE9FO0VBQ0EsZUFBQTtBQ05KO0FE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RUFDSSwyRkRWSTtFQ1dKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBSDRlUjtBRzNlUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUg2ZVo7QUk3ZkE7RUFDSSxXQUFBO0FKZ2dCSjtBSS9mSTtFQUNJLDZCQUFBO0FKaWdCUjtBSWhnQlE7RUFDSSxxQkFBQTtBSmtnQlo7QUkvZkk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCRk5PO0VFT1AsMEJGS1M7QUY0ZmpCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbm5vdW5jZW1lbnRzL2xpc3QtYW5ub3VuY2VtZW50cy9saXN0LWFubm91bmNlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xyXG4gICB2Mi4wLW1vZGlmaWVkIHwgMjAxMTAxMjZcclxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcclxuKi9cclxuXHJcbmh0bWwsXHJcbmJvZHksXHJcbmRpdixcclxuc3BhbixcclxuYXBwbGV0LFxyXG5vYmplY3QsXHJcbmlmcmFtZSxcclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNixcclxucCxcclxuYmxvY2txdW90ZSxcclxucHJlLFxyXG5hLFxyXG5hYmJyLFxyXG5hY3JvbnltLFxyXG5hZGRyZXNzLFxyXG5iaWcsXHJcbmNpdGUsXHJcbmNvZGUsXHJcbmRlbCxcclxuZGZuLFxyXG5lbSxcclxuaW1nLFxyXG5pbnMsXHJcbmtiZCxcclxucSxcclxucyxcclxuc2FtcCxcclxuc21hbGwsXHJcbnN0cmlrZSxcclxuc3Ryb25nLFxyXG5zdWIsXHJcbnN1cCxcclxudHQsXHJcbnZhcixcclxuYixcclxudSxcclxuaSxcclxuY2VudGVyLFxyXG5kbCxcclxuZHQsXHJcbmRkLFxyXG5vbCxcclxudWwsXHJcbmxpLFxyXG5maWVsZHNldCxcclxuZm9ybSxcclxubGFiZWwsXHJcbmxlZ2VuZCxcclxudGFibGUsXHJcbmNhcHRpb24sXHJcbnRib2R5LFxyXG50Zm9vdCxcclxudGhlYWQsXHJcbnRyLFxyXG50aCxcclxudGQsXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5jYW52YXMsXHJcbmRldGFpbHMsXHJcbmVtYmVkLFxyXG5maWd1cmUsXHJcbmZpZ2NhcHRpb24sXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5oZ3JvdXAsXHJcbm1lbnUsXHJcbm5hdixcclxub3V0cHV0LFxyXG5ydWJ5LFxyXG5zZWN0aW9uLFxyXG5zdW1tYXJ5LFxyXG50aW1lLFxyXG5tYXJrLFxyXG5hdWRpbyxcclxudmlkZW8ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcblxyXG4vKiBtYWtlIHN1cmUgdG8gc2V0IHNvbWUgZm9jdXMgc3R5bGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXHJcblxyXG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuXHJcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5kZXRhaWxzLFxyXG5maWdjYXB0aW9uLFxyXG5maWd1cmUsXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5oZ3JvdXAsXHJcbm1lbnUsXHJcbm5hdixcclxuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxub2wsXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUsXHJcbnEge1xyXG4gICAgcXVvdGVzOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlOmJlZm9yZSxcclxuYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsXHJcbnE6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c2VhcmNoXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXHJcbiAqL1xyXG5cclxuYXVkaW8sXHJcbmNhbnZhcyxcclxudmlkZW8ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgKmRpc3BsYXk6IGlubGluZTtcclxuICAgICp6b29tOiAxO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXHJcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXHJcbiAqL1xyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cclxuICogS25vd24gaXNzdWU6IG5vIElFIDYgc3VwcG9ydC5cclxuICovXHJcblxyXG5baGlkZGVuXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGV4dCByZXNpemluZyBvZGRseSBpbiBJRSA2Lzcgd2hlbiBib2R5IGBmb250LXNpemVgIGlzIHNldCB1c2luZ1xyXG4gKiAgICBgZW1gIHVuaXRzLlxyXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcclxuICogICAgdXNlciB6b29tLlxyXG4gKi9cclxuXHJcbmh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgLyogMSAqL1xyXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgLyogMiAqL1xyXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAvKiAyICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5hOmFjdGl2ZSxcclxuYTpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxyXG4gKiAyLiBJbXByb3ZlIGltYWdlIHF1YWxpdHkgd2hlbiBzY2FsZWQgaW4gSUUgNy5cclxuICovXHJcblxyXG5pbWcge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgLyogMSAqL1xyXG4gICAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYztcclxuICAgIC8qIDIgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA2LzcvOC85LCBTYWZhcmkgNSwgYW5kIE9wZXJhIDExLlxyXG4gKi9cclxuXHJcbmZpZ3VyZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29ycmVjdCBtYXJnaW4gZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cclxuICovXHJcblxyXG5mb3JtIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXHJcbiAqL1xyXG5cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDYvNy84LzkuXHJcbiAqIDIuIENvcnJlY3QgdGV4dCBub3Qgd3JhcHBpbmcgaW4gRmlyZWZveCAzLlxyXG4gKiAzLiBDb3JyZWN0IGFsaWdubWVudCBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxyXG4gKi9cclxuXHJcbmxlZ2VuZCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIC8qIDIgKi9cclxuICAgICptYXJnaW4tbGVmdDogLTdweDtcclxuICAgIC8qIDMgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cclxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxyXG4gKiAgICBhbmQgQ2hyb21lLlxyXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIC8qIDEgKi9cclxuICAgIG1hcmdpbjogMDtcclxuICAgIC8qIDIgKi9cclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIC8qIDMgKi9cclxuICAgICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLyogMyAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cclxuICogdGhlIFVBIHN0eWxlc2hlZXQuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCB7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cclxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cclxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDYrLlxyXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuc2VsZWN0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXHJcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxyXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXHJcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXHJcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cclxuICogNC4gUmVtb3ZlIGlubmVyIHNwYWNpbmcgaW4gSUUgNyB3aXRob3V0IGFmZmVjdGluZyBub3JtYWwgdGV4dCBpbnB1dHMuXHJcbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuXHJcbi8qIDEgKi9cclxuXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICAgIC8qIDIgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIDMgKi9cclxuICAgICpvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIC8qIDQgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxyXG4gKi9cclxuXHJcbmJ1dHRvbltkaXNhYmxlZF0sXHJcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGNvbnRlbnQtYm94IGluIElFIDgvOS5cclxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cclxuICogMy4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDcuXHJcbiAqICAgIEtub3duIGlzc3VlOiBleGNlc3MgcGFkZGluZyByZW1haW5zIGluIElFIDYuXHJcbiAqL1xyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8qIDEgKi9cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvKiAyICovXHJcbiAgICAqaGVpZ2h0OiAxM3B4O1xyXG4gICAgLyogMyAqL1xyXG4gICAgKndpZHRoOiAxM3B4O1xyXG4gICAgLyogMyAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXHJcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxyXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gICAgLyogMSAqL1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAvKiAyICovXHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxyXG4gKiBvbiBPUyBYLlxyXG4gKi9cclxuXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCAzKy5cclxuICovXHJcblxyXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXHJcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDYvNy84LzkuXHJcbiAqIDIuIEltcHJvdmUgcmVhZGFiaWxpdHkgYW5kIGFsaWdubWVudCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxudGV4dGFyZWEge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAvKiAxICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgLyogMiAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cclxuICovXHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbjo6LW1vei1zZWxlY3Rpb24ge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbjo6c2VsZWN0aW9uIHtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLmNocm9tZWZyYW1lIHtcclxuICAgIG1hcmdpbjogMC4yZW0gMDtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDA7XHJcbn1cclxuIiwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cbiAgIHYyLjAtbW9kaWZpZWQgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qKlxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cbiAqL1xuYXVkaW8sXG5jYW52YXMsXG52aWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgKnpvb206IDE7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cbiAqL1xuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKipcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxuICovXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXG4gKiAgICBgZW1gIHVuaXRzLlxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXG4gKiAgICB1c2VyIHpvb20uXG4gKi9cbmh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG4gIC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKiAyICovXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXG4gKi9cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcbn1cblxuLyoqXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cbiAqL1xuYTphY3RpdmUsXG5hOmhvdmVyIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cbiAqIDIuIEltcHJvdmUgaW1hZ2UgcXVhbGl0eSB3aGVuIHNjYWxlZCBpbiBJRSA3LlxuICovXG5pbWcge1xuICBib3JkZXI6IDA7XG4gIC8qIDEgKi9cbiAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYztcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXG4gKi9cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxuICovXG5mb3JtIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cbiAqL1xuZmllbGRzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICBtYXJnaW46IDAgMnB4O1xuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDYvNy84LzkuXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cbiAqIDMuIENvcnJlY3QgYWxpZ25tZW50IGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXG4gKi9cbmxlZ2VuZCB7XG4gIGJvcmRlcjogMDtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAvKiAyICovXG4gICptYXJnaW4tbGVmdDogLTdweDtcbiAgLyogMyAqL1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgZm9udCBzaXplIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxuICogICAgYW5kIENocm9tZS5cbiAqIDMuIEltcHJvdmUgYXBwZWFyYW5jZSBhbmQgY29uc2lzdGVuY3kgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICAvKiAxICovXG4gIG1hcmdpbjogMDtcbiAgLyogMiAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIC8qIDMgKi9cbiAgKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC8qIDMgKi9cbn1cblxuLyoqXG4gKiBBZGRyZXNzIEZpcmVmb3ggMysgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cbiAqL1xuYnV0dG9uLFxuaW5wdXQge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4vKipcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxuICovXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxuICogNC4gUmVtb3ZlIGlubmVyIHNwYWNpbmcgaW4gSUUgNyB3aXRob3V0IGFmZmVjdGluZyBub3JtYWwgdGV4dCBpbnB1dHMuXG4gKiAgICBLbm93biBpc3N1ZTogaW5uZXIgc3BhY2luZyByZW1haW5zIGluIElFIDYuXG4gKi9cbmJ1dHRvbixcbmh0bWwgaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1yZXNldF0sXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgLyogMiAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIDMgKi9cbiAgKm92ZXJmbG93OiB2aXNpYmxlO1xuICAvKiA0ICovXG59XG5cbi8qKlxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cbiAqL1xuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKipcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cbiAqIDMuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA3LlxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cbiAqL1xuaW5wdXRbdHlwZT1jaGVja2JveF0sXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMiAqL1xuICAqaGVpZ2h0OiAxM3B4O1xuICAvKiAzICovXG4gICp3aWR0aDogMTNweDtcbiAgLyogMyAqL1xufVxuXG4vKipcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxuICovXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgLyogMSAqL1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAvKiAyICovXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4vKipcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXG4gKiBvbiBPUyBYLlxuICovXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxuICovXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cbiAqIDIuIEltcHJvdmUgcmVhZGFiaWxpdHkgYW5kIGFsaWdubWVudCBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cbiAqL1xudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaHRtbCxcbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBjb2xvcjogIzIyMjtcbn1cblxuOjotbW96LXNlbGVjdGlvbiB7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5jaHJvbWVmcmFtZSB7XG4gIG1hcmdpbjogMC4yZW0gMDtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDAuMmVtIDA7XG59XG5cbi5hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5hcHAgLmFwcF9fcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG5pbnB1dDphY3RpdmUge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogMDtcbn1cblxuLmRhc2hib2FyZCB7XG4gIG1hcmdpbjogM3JlbSA1cmVtO1xufVxuLmRhc2hib2FyZCAuZGFzaGJvYXJkX19oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5kYXNoYm9hcmQgLmRhc2hib2FyZF9faGVhZGluZy5kYXNoYm9hcmRfX2hlYWRpbmctLW1haWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmRhc2hib2FyZCAuZGFzaGJvYXJkX19zZWN0aW9uIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMTAwcHggI2M4Y2VkNSwgMTBweCAxMHB4IDIwcHggI2E0YmZkZCwgaW5zZXQgMCAwIDEwcHggI2M4Y2VkNTtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLmRhc2hib2FyZCAuZGFzaGJvYXJkX19zZWN0aW9uLmRhc2hib2FyZF9fc2VjdGlvbi0tc21hbGwge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRhYmxlIC50YWJsZV9fdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbn1cbi50YWJsZSAudGFibGVfX3RyOm50aC1vZi10eXBlKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xufVxuLnRhYmxlIC50YWJsZV9fdGQge1xuICBwYWRkaW5nOiAwIDAuMjVyZW07XG4gIGhlaWdodDogMy41cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59IiwiQGltcG9ydCBcIi4vcmVzZXQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uYXBwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAuYXBwX19wYWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteGw7XHJcbiAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbWQ7XHJcbiAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XHJcbiAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuQG1peGluIG91dGxpbmUtLW5vbmUge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgQGluY2x1ZGUgb3V0bGluZS0tbm9uZTtcclxuICAgIH1cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBAaW5jbHVkZSBvdXRsaW5lLS1ub25lO1xyXG4gICAgfVxyXG59XHJcbiIsIiRib3hTaGFkb3c6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsXHJcbjEwcHggMTBweCAyMHB4ICNhNGJmZGQsXHJcbmluc2V0IDAgMCAxMHB4ICNjOGNlZDU7XHJcbiRib3JkZXI6IDFweCAjMjIyIHNvbGlkO1xyXG4kZm9udC1zaXplLXh4czogLjYyNXJlbTtcclxuJGZvbnQtc2l6ZS14czogLjc1cmVtO1xyXG4kZm9udC1zaXplLXNtOiAuOXJlbTtcclxuJGZvbnQtc2l6ZS1tZDogMXJlbTtcclxuJGZvbnQtc2l6ZS1sZzogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS14bDogMS41cmVtO1xyXG4kZm9udC1zaXplLXh4bDogMnJlbTtcclxuJGNvbG9yLXJlZDogI0ZGMDAwMDtcclxuJGNvbG9yLWdyZWVuLTE1OiAjMDA0ZDFhO1xyXG4kY29sb3ItZ3JheS05MDogI2JiYmJiYTtcclxuJGNvbG9yLWdyYXktMjU6ICM0ZDRkMzM7XHJcbiRjb2xvci1ncmVlbi01NTogIzUzYzY1MztcclxuJHdoaXRlOiAjZmZmO1xyXG4kZGFyazogcmdiYSgjMDAwLCAuODcpO1xyXG4kZGFyay1zZWNvbmRhcnk6IHJnYmEoIzAwMCwgLjU0KTtcclxuJGRhcmstZGlzYWJsZWQ6IHJnYmEoIzAwMCwgLjM4KTtcclxuIiwiQGltcG9ydCBcIi4vYXBwLnNjc3NcIjtcclxuLmRhc2hib2FyZCB7XHJcbiAgICBtYXJnaW46IDNyZW0gNXJlbTtcclxuICAgIC5kYXNoYm9hcmRfX2hlYWRpbmcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgJi5kYXNoYm9hcmRfX2hlYWRpbmctLW1haWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kYXNoYm9hcmRfX3NlY3Rpb24ge1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRib3hTaGFkb3c7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgICAgICYuZGFzaGJvYXJkX19zZWN0aW9uLS1zbWFsbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLnRhYmxlX190ciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgJjpudGgtb2YtdHlwZShldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGFibGVfX3RkIHtcclxuICAgICAgICBwYWRkaW5nOiAwIC4yNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcclxuICAgICAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListAnnouncementsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-list-announcements',
                templateUrl: './list-announcements.component.html',
                styleUrls: ['./list-announcements.component.scss']
            }]
    }], function () { return [{ type: i1.AnnouncementService }, { type: i2.AuthService }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/authentication/auth-guard/auth-guard.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/core/authentication/auth-guard/auth-guard.service.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuardService = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! ../auth/auth.service */ "./src/app/modules/core/authentication/auth/auth.service.ts");
class AuthGuardService {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(route, state) {
        return !this.authService.isAuthenticated;
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

/***/ "./src/app/modules/core/authentication/auth-interceptor/auth-interceptor.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/core/authentication/auth-interceptor/auth-interceptor.service.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthInterceptorService = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
const rxjs_2 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! ../auth/auth.service */ "./src/app/modules/core/authentication/auth/auth.service.ts");
const i2 = __webpack_require__(/*! ../../../../shared/shared-services/logger/logger.service */ "./src/app/shared/shared-services/logger/logger.service.ts");
class AuthInterceptorService {
    constructor(auth, logger) {
        this.auth = auth;
        this.logger = logger;
    }
    intercept(req, next) {
        return next.handle(this.getAuthorizedRequest(req)).pipe(operators_1.catchError((Error, caught) => {
            if (Error instanceof http_1.HttpErrorResponse && Error.status === 401) {
                this.logger.error('Authorization Request ');
                return rxjs_2.empty();
            }
            else if (Error instanceof http_1.HttpErrorResponse && Error.status === 403) {
                this.logger.error('Forbidden');
                return rxjs_2.empty();
            }
            else if (Error instanceof http_1.HttpErrorResponse && Error.status === 404) {
                this.logger.error('Not Found');
                return rxjs_2.empty(); // empty() - przerwanie obsługi
            }
            return rxjs_1.throwError(Error);
        }));
    }
    getAuthorizedRequest(req) {
        return req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + this.auth.getToken()
            }
        });
    }
}
exports.AuthInterceptorService = AuthInterceptorService;
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.LoggerService)); };
AuthInterceptorService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthInterceptorService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.LoggerService }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/authentication/auth/auth.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/core/authentication/auth/auth.service.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const i2 = __webpack_require__(/*! ../../../../shared/shared-services/logger/logger.service */ "./src/app/shared/shared-services/logger/logger.service.ts");
class AuthService {
    constructor(httpClient, logger) {
        this.httpClient = httpClient;
        this.logger = logger;
        this.userSession = new rxjs_1.BehaviorSubject(null);
        this.userSession$ = this.userSession.asObservable();
        this.isAuthenticated = false;
        // state - stan czy użytkownik jest zalogowany
        this.state = this.userSession.pipe(operators_1.map(session => session && !!session.token), operators_1.tap(state => this.isAuthenticated = state));
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    registration(newUser) {
        return this.httpClient.post(`/register`, newUser, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('Add User')));
    }
    login(user) {
        return this.httpClient.post('/login', user, this.httpOptions).pipe(operators_1.tap(state => {
            this.userSession.next(state);
            this.isAuthenticated = true;
        }), operators_1.catchError(this.handleError('Login user')));
    }
    loginOut() {
        this.isAuthenticated = false;
        this.userSession.next(null);
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            this.logger.error(error);
            this.logger.info(`${operation} failed: ${error.message}`);
            return rxjs_1.of(result);
        };
    }
    getToken() {
        // getValue - zwraca ostatnią wartość w BehaviorSubject
        const session = this.userSession.getValue();
        return session && session.token;
    }
    getCurrentUser() {
        const session = this.userSession.getValue();
        return session && session !== null && session.respons !== null ? session.respons._id : session;
    }
}
exports.AuthService = AuthService;
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LoggerService)); };
AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LoggerService }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/authentication/authentication.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/core/authentication/authentication.module.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModule = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const auth_interceptor_service_1 = __webpack_require__(/*! ./auth-interceptor/auth-interceptor.service */ "./src/app/modules/core/authentication/auth-interceptor/auth-interceptor.service.ts");
const auth_service_1 = __webpack_require__(/*! ./auth/auth.service */ "./src/app/modules/core/authentication/auth/auth.service.ts");
const auth_guard_service_1 = __webpack_require__(/*! ./auth-guard/auth-guard.service */ "./src/app/modules/core/authentication/auth-guard/auth-guard.service.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class AuthenticationModule {
}
exports.AuthenticationModule = AuthenticationModule;
AuthenticationModule.ɵmod = i0.ɵɵdefineNgModule({ type: AuthenticationModule });
AuthenticationModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); }, providers: [
        auth_service_1.AuthService,
        auth_guard_service_1.AuthGuardService,
        {
            provide: http_1.HTTP_INTERCEPTORS,
            useClass: auth_interceptor_service_1.AuthInterceptorService,
            multi: true
        }
    ], imports: [[
            common_1.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AuthenticationModule, { imports: [common_1.CommonModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthenticationModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [],
                imports: [
                    common_1.CommonModule,
                ],
                providers: [
                    auth_service_1.AuthService,
                    auth_guard_service_1.AuthGuardService,
                    {
                        provide: http_1.HTTP_INTERCEPTORS,
                        useClass: auth_interceptor_service_1.AuthInterceptorService,
                        multi: true
                    }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/core/authentication/deactivate-guard/deactivate-guard.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/core/authentication/deactivate-guard/deactivate-guard.service.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeactivateGuardService = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class DeactivateGuardService {
    constructor() { }
    canDeactivate(component, currentRoute, currentState, nextState) {
        console.log('component.locations ', component.locations);
        console.log('!!component.locations ', !!component.locations);
        console.log('!component.locations ', !component.locations);
        return !!component.locations; // jesli jest coś w polu locations można będzie przełączać się na inne komponenty
    }
}
exports.DeactivateGuardService = DeactivateGuardService;
DeactivateGuardService.ɵfac = function DeactivateGuardService_Factory(t) { return new (t || DeactivateGuardService)(); };
DeactivateGuardService.ɵprov = i0.ɵɵdefineInjectable({ token: DeactivateGuardService, factory: DeactivateGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DeactivateGuardService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
const highlight_directive_1 = __webpack_require__(/*! ./directive/highlight.directive */ "./src/app/modules/core/directive/highlight.directive.ts");
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
        navbar_component_1.NavbarComponent,
        highlight_directive_1.HighlightDirective], imports: [common_1.CommonModule,
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
                    highlight_directive_1.HighlightDirective,
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

/***/ "./src/app/modules/core/directive/highlight.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/core/directive/highlight.directive.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HighlightDirective = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class HighlightDirective {
    constructor(elementHtml) {
        this.elementHtml = elementHtml;
    }
    // dekorator elementHtml
    hoverHighlight() {
        this.elementHtml.nativeElement.style.backgroundColor = '#a9c4e0';
    }
    cancelhighlight() {
        this.elementHtml.nativeElement.style.backgroundColor = null;
    }
}
exports.HighlightDirective = HighlightDirective;
HighlightDirective.ɵfac = function HighlightDirective_Factory(t) { return new (t || HighlightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
HighlightDirective.ɵdir = i0.ɵɵdefineDirective({ type: HighlightDirective, selectors: [["", "highlightDirective", ""]], hostBindings: function HighlightDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function HighlightDirective_mouseenter_HostBindingHandler() { return ctx.hoverHighlight(); })("mouseleave", function HighlightDirective_mouseleave_HostBindingHandler() { return ctx.cancelhighlight(); });
    } } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HighlightDirective, [{
        type: core_1.Directive,
        args: [{
                selector: '[highlightDirective]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { hoverHighlight: [{
            type: core_1.HostListener,
            args: ['mouseenter']
        }], cancelhighlight: [{
            type: core_1.HostListener,
            args: ['mouseleave']
        }] }); })();


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
const i1 = __webpack_require__(/*! ../authentication/auth/auth.service */ "./src/app/modules/core/authentication/auth/auth.service.ts");
const i2 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const i3 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const i4 = __webpack_require__(/*! ../directive/highlight.directive */ "./src/app/modules/core/directive/highlight.directive.ts");
function NavbarComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵtext(1, "Rejestracja");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/user/registration");
} }
function NavbarComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 11);
    i0.ɵɵtext(1, "Zaloguj");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/user/login");
} }
function NavbarComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 12);
    i0.ɵɵlistener("click", function NavbarComponent_a_9_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.loginOut(); });
    i0.ɵɵtext(1, "Wyloguj");
    i0.ɵɵelementEnd();
} }
function NavbarComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 13);
    i0.ɵɵtext(1, "Profil");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/user/profile");
} }
function NavbarComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 14);
    i0.ɵɵtext(1, "Lista og\u0142osze\u0144");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/list-announcements");
} }
function NavbarComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Cze\u015B\u0107, ", ctx_r5.authService.getCurrentUser(), " ");
} }
function NavbarComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵtext(1, "Dodaj og\u0142oszenie");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/announcement/category");
} }
class NavbarComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() { }
    ngOnDestroy() { }
    loginOut() {
        this.authService.loginOut();
    }
}
exports.NavbarComponent = NavbarComponent;
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(i0.ɵɵdirectiveInject(i1.AuthService)); };
NavbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 20, vars: 9, consts: [[1, "navbar", "navbar-light", "bg-light"], ["routerLinkActive", "active", "name", "home", 1, "navbar__brand", 3, "routerLink"], ["class", "navbar__brand", "routerLinkActive", "active", "name", "registration", 3, "routerLink", 4, "ngIf"], ["highlightDirective", "", "class", "navbar__brand", "routerLinkActive", "active", "name", "login", 3, "routerLink", 4, "ngIf"], ["class", "navbar__brand", "name", "loginOut", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", "name", "contact", 1, "navbar__brand", 3, "routerLink"], ["class", "navbar__brand", "name", "profile", 3, "routerLink", 4, "ngIf"], ["class", "navbar__brand", "name", "listAnnouncements", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["class", "btn btn-default link__button--save", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", "name", "registration", 1, "navbar__brand", 3, "routerLink"], ["highlightDirective", "", "routerLinkActive", "active", "name", "login", 1, "navbar__brand", 3, "routerLink"], ["name", "loginOut", 1, "navbar__brand", 3, "click"], ["name", "profile", 1, "navbar__brand", 3, "routerLink"], ["name", "listAnnouncements", 1, "navbar__brand", 3, "routerLink"], ["routerLinkActive", "active", 1, "btn", "btn-default", "link__button--save", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0);
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵelementStart(2, "a", 1);
        i0.ɵɵtext(3, "Strona g\u0142\u00F3wna");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵtemplate(5, NavbarComponent_a_5_Template, 2, 1, "a", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div");
        i0.ɵɵtemplate(7, NavbarComponent_a_7_Template, 2, 1, "a", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div");
        i0.ɵɵtemplate(9, NavbarComponent_a_9_Template, 2, 0, "a", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div");
        i0.ɵɵelementStart(11, "a", 5);
        i0.ɵɵtext(12, "Kontakt");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div");
        i0.ɵɵtemplate(14, NavbarComponent_a_14_Template, 2, 1, "a", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div");
        i0.ɵɵtemplate(16, NavbarComponent_a_16_Template, 2, 1, "a", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, NavbarComponent_div_17_Template, 3, 1, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(18, NavbarComponent_button_18_Template, 2, 1, "button", 9);
        i0.ɵɵelement(19, "router-outlet");
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("routerLink", "/home");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.authService.isAuthenticated);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.authService.isAuthenticated);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.authService.isAuthenticated);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("routerLink", "/user/contact");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.authService.isAuthenticated);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.authService.isAuthenticated);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.authService.isAuthenticated);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.authService.isAuthenticated);
    } }, directives: [i2.RouterLinkWithHref, i2.RouterLinkActive, i3.NgIf, i2.RouterOutlet, i4.HighlightDirective, i2.RouterLink], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  -webkit-text-size-adjust: 100%;\n  \n  -ms-text-size-adjust: 100%;\n  \n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n  \n  -ms-interpolation-mode: bicubic;\n  \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0;\n  \n  padding: 0;\n  white-space: normal;\n  \n  *margin-left: -7px;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  margin: 0;\n  \n  vertical-align: baseline;\n  \n  *vertical-align: middle;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n  \n  cursor: pointer;\n  \n  *overflow: visible;\n  \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  \n  padding: 0;\n  \n  *height: 13px;\n  \n  *width: 13px;\n  \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;\n  \n  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n  vertical-align: top;\n  \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-height: 100vh;\n}\n.app[_ngcontent-%COMP%]   .app__page[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fafafa;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.38);\n  text-transform: uppercase;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n.form-group[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  margin-top: 1rem;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\ninput[_ngcontent-%COMP%]:active {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  height: 5rem;\n  justify-content: flex-end !important;\n}\n.navbar__brand[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.54);\n  opacity: 0.6;\n  margin-right: 3rem;\n  font: 400 24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n.navbar__brand[_ngcontent-%COMP%]:hover, .navbar__brand[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 10px 5px 0px 15px;\n}\n.link__button--save[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25px;\n  left: 5%;\n  margin: 0px;\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #a4bfdd, inset 0 0 10px #c8ced5;\n  border: 1px #222 solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL3Jlc2V0LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY29yZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2hhcmVkLXNjc3MvYXBwLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQtc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL25hdi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkksU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0FKO0FESUEseURBQUE7QUFFQTtFQUNJLFVBQUE7QUNGSjtBRE1BLGdEQUFBO0FBRUE7Ozs7Ozs7Ozs7O0VBV0ksY0FBQTtBQ0pKO0FET0E7RUFDSSxjQUFBO0FDSko7QURPQTs7RUFFSSxnQkFBQTtBQ0pKO0FET0E7O0VBRUksWUFBQTtBQ0pKO0FET0E7Ozs7RUFJSSxXQUFBO0VBQ0EsYUFBQTtBQ0pKO0FET0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDSko7QURPQTs7OztFQUlJLHdCQUFBO0VBQ0EscUJBQUE7QUNKSjtBRE9BO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUdBLHVCQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSko7QURRQTs7RUFBQTtBQUlBOzs7RUFHSSxxQkFBQTtHQ05GLGVET0U7R0NORixPRE9FO0VBQ0EsZUFBQTtBQ05KO0FEVUE7OztFQUFBO0FBS0E7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQ1JKO0FEWUE7OztFQUFBO0FBS0E7RUFDSSxhQUFBO0FDVko7QURjQTs7Ozs7RUFBQTtBQU9B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QUF2ZkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDJGRWJRO0VGY1Isc0JFWEs7QUZxZ0JUIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb3JlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xyXG4gICB2Mi4wLW1vZGlmaWVkIHwgMjAxMTAxMjZcclxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcclxuKi9cclxuXHJcbmh0bWwsXHJcbmJvZHksXHJcbmRpdixcclxuc3BhbixcclxuYXBwbGV0LFxyXG5vYmplY3QsXHJcbmlmcmFtZSxcclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNixcclxucCxcclxuYmxvY2txdW90ZSxcclxucHJlLFxyXG5hLFxyXG5hYmJyLFxyXG5hY3JvbnltLFxyXG5hZGRyZXNzLFxyXG5iaWcsXHJcbmNpdGUsXHJcbmNvZGUsXHJcbmRlbCxcclxuZGZuLFxyXG5lbSxcclxuaW1nLFxyXG5pbnMsXHJcbmtiZCxcclxucSxcclxucyxcclxuc2FtcCxcclxuc21hbGwsXHJcbnN0cmlrZSxcclxuc3Ryb25nLFxyXG5zdWIsXHJcbnN1cCxcclxudHQsXHJcbnZhcixcclxuYixcclxudSxcclxuaSxcclxuY2VudGVyLFxyXG5kbCxcclxuZHQsXHJcbmRkLFxyXG5vbCxcclxudWwsXHJcbmxpLFxyXG5maWVsZHNldCxcclxuZm9ybSxcclxubGFiZWwsXHJcbmxlZ2VuZCxcclxudGFibGUsXHJcbmNhcHRpb24sXHJcbnRib2R5LFxyXG50Zm9vdCxcclxudGhlYWQsXHJcbnRyLFxyXG50aCxcclxudGQsXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5jYW52YXMsXHJcbmRldGFpbHMsXHJcbmVtYmVkLFxyXG5maWd1cmUsXHJcbmZpZ2NhcHRpb24sXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5oZ3JvdXAsXHJcbm1lbnUsXHJcbm5hdixcclxub3V0cHV0LFxyXG5ydWJ5LFxyXG5zZWN0aW9uLFxyXG5zdW1tYXJ5LFxyXG50aW1lLFxyXG5tYXJrLFxyXG5hdWRpbyxcclxudmlkZW8ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcblxyXG4vKiBtYWtlIHN1cmUgdG8gc2V0IHNvbWUgZm9jdXMgc3R5bGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXHJcblxyXG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuXHJcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5kZXRhaWxzLFxyXG5maWdjYXB0aW9uLFxyXG5maWd1cmUsXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5oZ3JvdXAsXHJcbm1lbnUsXHJcbm5hdixcclxuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxub2wsXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUsXHJcbnEge1xyXG4gICAgcXVvdGVzOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlOmJlZm9yZSxcclxuYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsXHJcbnE6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c2VhcmNoXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXHJcbiAqL1xyXG5cclxuYXVkaW8sXHJcbmNhbnZhcyxcclxudmlkZW8ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgKmRpc3BsYXk6IGlubGluZTtcclxuICAgICp6b29tOiAxO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXHJcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXHJcbiAqL1xyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cclxuICogS25vd24gaXNzdWU6IG5vIElFIDYgc3VwcG9ydC5cclxuICovXHJcblxyXG5baGlkZGVuXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGV4dCByZXNpemluZyBvZGRseSBpbiBJRSA2Lzcgd2hlbiBib2R5IGBmb250LXNpemVgIGlzIHNldCB1c2luZ1xyXG4gKiAgICBgZW1gIHVuaXRzLlxyXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcclxuICogICAgdXNlciB6b29tLlxyXG4gKi9cclxuXHJcbmh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgLyogMSAqL1xyXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgLyogMiAqL1xyXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAvKiAyICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5hOmFjdGl2ZSxcclxuYTpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxyXG4gKiAyLiBJbXByb3ZlIGltYWdlIHF1YWxpdHkgd2hlbiBzY2FsZWQgaW4gSUUgNy5cclxuICovXHJcblxyXG5pbWcge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgLyogMSAqL1xyXG4gICAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYztcclxuICAgIC8qIDIgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA2LzcvOC85LCBTYWZhcmkgNSwgYW5kIE9wZXJhIDExLlxyXG4gKi9cclxuXHJcbmZpZ3VyZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29ycmVjdCBtYXJnaW4gZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cclxuICovXHJcblxyXG5mb3JtIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXHJcbiAqL1xyXG5cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDYvNy84LzkuXHJcbiAqIDIuIENvcnJlY3QgdGV4dCBub3Qgd3JhcHBpbmcgaW4gRmlyZWZveCAzLlxyXG4gKiAzLiBDb3JyZWN0IGFsaWdubWVudCBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxyXG4gKi9cclxuXHJcbmxlZ2VuZCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIC8qIDIgKi9cclxuICAgICptYXJnaW4tbGVmdDogLTdweDtcclxuICAgIC8qIDMgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cclxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxyXG4gKiAgICBhbmQgQ2hyb21lLlxyXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIC8qIDEgKi9cclxuICAgIG1hcmdpbjogMDtcclxuICAgIC8qIDIgKi9cclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIC8qIDMgKi9cclxuICAgICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLyogMyAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cclxuICogdGhlIFVBIHN0eWxlc2hlZXQuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCB7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cclxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cclxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDYrLlxyXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuc2VsZWN0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXHJcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxyXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXHJcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXHJcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cclxuICogNC4gUmVtb3ZlIGlubmVyIHNwYWNpbmcgaW4gSUUgNyB3aXRob3V0IGFmZmVjdGluZyBub3JtYWwgdGV4dCBpbnB1dHMuXHJcbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuXHJcbi8qIDEgKi9cclxuXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICAgIC8qIDIgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIDMgKi9cclxuICAgICpvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIC8qIDQgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxyXG4gKi9cclxuXHJcbmJ1dHRvbltkaXNhYmxlZF0sXHJcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGNvbnRlbnQtYm94IGluIElFIDgvOS5cclxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cclxuICogMy4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDcuXHJcbiAqICAgIEtub3duIGlzc3VlOiBleGNlc3MgcGFkZGluZyByZW1haW5zIGluIElFIDYuXHJcbiAqL1xyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8qIDEgKi9cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvKiAyICovXHJcbiAgICAqaGVpZ2h0OiAxM3B4O1xyXG4gICAgLyogMyAqL1xyXG4gICAgKndpZHRoOiAxM3B4O1xyXG4gICAgLyogMyAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXHJcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxyXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gICAgLyogMSAqL1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAvKiAyICovXHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxyXG4gKiBvbiBPUyBYLlxyXG4gKi9cclxuXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCAzKy5cclxuICovXHJcblxyXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXHJcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDYvNy84LzkuXHJcbiAqIDIuIEltcHJvdmUgcmVhZGFiaWxpdHkgYW5kIGFsaWdubWVudCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxudGV4dGFyZWEge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAvKiAxICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgLyogMiAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cclxuICovXHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbjo6LW1vei1zZWxlY3Rpb24ge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbjo6c2VsZWN0aW9uIHtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLmNocm9tZWZyYW1lIHtcclxuICAgIG1hcmdpbjogMC4yZW0gMDtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDA7XHJcbn1cclxuIiwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cbiAgIHYyLjAtbW9kaWZpZWQgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qKlxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cbiAqL1xuYXVkaW8sXG5jYW52YXMsXG52aWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgKnpvb206IDE7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cbiAqL1xuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKipcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxuICovXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXG4gKiAgICBgZW1gIHVuaXRzLlxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXG4gKiAgICB1c2VyIHpvb20uXG4gKi9cbmh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG4gIC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKiAyICovXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXG4gKi9cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcbn1cblxuLyoqXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cbiAqL1xuYTphY3RpdmUsXG5hOmhvdmVyIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cbiAqIDIuIEltcHJvdmUgaW1hZ2UgcXVhbGl0eSB3aGVuIHNjYWxlZCBpbiBJRSA3LlxuICovXG5pbWcge1xuICBib3JkZXI6IDA7XG4gIC8qIDEgKi9cbiAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYztcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXG4gKi9cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxuICovXG5mb3JtIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cbiAqL1xuZmllbGRzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICBtYXJnaW46IDAgMnB4O1xuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDYvNy84LzkuXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cbiAqIDMuIENvcnJlY3QgYWxpZ25tZW50IGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXG4gKi9cbmxlZ2VuZCB7XG4gIGJvcmRlcjogMDtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAvKiAyICovXG4gICptYXJnaW4tbGVmdDogLTdweDtcbiAgLyogMyAqL1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgZm9udCBzaXplIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxuICogICAgYW5kIENocm9tZS5cbiAqIDMuIEltcHJvdmUgYXBwZWFyYW5jZSBhbmQgY29uc2lzdGVuY3kgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICAvKiAxICovXG4gIG1hcmdpbjogMDtcbiAgLyogMiAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIC8qIDMgKi9cbiAgKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC8qIDMgKi9cbn1cblxuLyoqXG4gKiBBZGRyZXNzIEZpcmVmb3ggMysgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cbiAqL1xuYnV0dG9uLFxuaW5wdXQge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4vKipcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxuICovXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxuICogNC4gUmVtb3ZlIGlubmVyIHNwYWNpbmcgaW4gSUUgNyB3aXRob3V0IGFmZmVjdGluZyBub3JtYWwgdGV4dCBpbnB1dHMuXG4gKiAgICBLbm93biBpc3N1ZTogaW5uZXIgc3BhY2luZyByZW1haW5zIGluIElFIDYuXG4gKi9cbmJ1dHRvbixcbmh0bWwgaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1yZXNldF0sXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgLyogMiAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIDMgKi9cbiAgKm92ZXJmbG93OiB2aXNpYmxlO1xuICAvKiA0ICovXG59XG5cbi8qKlxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cbiAqL1xuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKipcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cbiAqIDMuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA3LlxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cbiAqL1xuaW5wdXRbdHlwZT1jaGVja2JveF0sXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMiAqL1xuICAqaGVpZ2h0OiAxM3B4O1xuICAvKiAzICovXG4gICp3aWR0aDogMTNweDtcbiAgLyogMyAqL1xufVxuXG4vKipcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxuICovXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgLyogMSAqL1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAvKiAyICovXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4vKipcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXG4gKiBvbiBPUyBYLlxuICovXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxuICovXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cbiAqIDIuIEltcHJvdmUgcmVhZGFiaWxpdHkgYW5kIGFsaWdubWVudCBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cbiAqL1xudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaHRtbCxcbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBjb2xvcjogIzIyMjtcbn1cblxuOjotbW96LXNlbGVjdGlvbiB7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5jaHJvbWVmcmFtZSB7XG4gIG1hcmdpbjogMC4yZW0gMDtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDAuMmVtIDA7XG59XG5cbi5hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5hcHAgLmFwcF9fcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG5pbnB1dDphY3RpdmUge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogMDtcbn1cblxuLm5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyX19icmFuZCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgb3BhY2l0eTogMC42O1xuICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gIGZvbnQ6IDQwMCAyNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuLm5hdmJhcl9fYnJhbmQ6aG92ZXIsIC5uYXZiYXJfX2JyYW5kOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDVweCAwcHggMTVweDtcbn1cblxuLmxpbmtfX2J1dHRvbi0tc2F2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiA1JTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsIDEwcHggMTBweCAyMHB4ICNhNGJmZGQsIGluc2V0IDAgMCAxMHB4ICNjOGNlZDU7XG4gIGJvcmRlcjogMXB4ICMyMjIgc29saWQ7XG59IiwiQGltcG9ydCBcIi4vcmVzZXQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uYXBwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAuYXBwX19wYWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteGw7XHJcbiAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbWQ7XHJcbiAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XHJcbiAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuQG1peGluIG91dGxpbmUtLW5vbmUge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgQGluY2x1ZGUgb3V0bGluZS0tbm9uZTtcclxuICAgIH1cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBAaW5jbHVkZSBvdXRsaW5lLS1ub25lO1xyXG4gICAgfVxyXG59XHJcbiIsIiRib3hTaGFkb3c6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsXHJcbjEwcHggMTBweCAyMHB4ICNhNGJmZGQsXHJcbmluc2V0IDAgMCAxMHB4ICNjOGNlZDU7XHJcbiRib3JkZXI6IDFweCAjMjIyIHNvbGlkO1xyXG4kZm9udC1zaXplLXh4czogLjYyNXJlbTtcclxuJGZvbnQtc2l6ZS14czogLjc1cmVtO1xyXG4kZm9udC1zaXplLXNtOiAuOXJlbTtcclxuJGZvbnQtc2l6ZS1tZDogMXJlbTtcclxuJGZvbnQtc2l6ZS1sZzogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS14bDogMS41cmVtO1xyXG4kZm9udC1zaXplLXh4bDogMnJlbTtcclxuJGNvbG9yLXJlZDogI0ZGMDAwMDtcclxuJGNvbG9yLWdyZWVuLTE1OiAjMDA0ZDFhO1xyXG4kY29sb3ItZ3JheS05MDogI2JiYmJiYTtcclxuJGNvbG9yLWdyYXktMjU6ICM0ZDRkMzM7XHJcbiRjb2xvci1ncmVlbi01NTogIzUzYzY1MztcclxuJHdoaXRlOiAjZmZmO1xyXG4kZGFyazogcmdiYSgjMDAwLCAuODcpO1xyXG4kZGFyay1zZWNvbmRhcnk6IHJnYmEoIzAwMCwgLjU0KTtcclxuJGRhcmstZGlzYWJsZWQ6IHJnYmEoIzAwMCwgLjM4KTtcclxuIiwiLm5hdmJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyX19icmFuZCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgb3BhY2l0eTogLjY7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICAgIGZvbnQ6IDQwMCAyNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgICY6aG92ZXIsXG4gICAgJjphY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxufVxuXG4vLyAubmF2YmFyX2JyYW5kIHtcbi8vICAgICBvcGFjaXR5OiAuNjtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4vLyAgICAgZm9udDogNDAwIDI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4vLyB9XG4iXX0= */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NavbarComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
            }]
    }], function () { return [{ type: i1.AuthService }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/pages/contact/contact.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/pages/contact/contact.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! ../../../shared/shared-services/location/location.service */ "./src/app/shared/shared-services/location/location.service.ts");
const i2 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const i3 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
function ContactComponent_select_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "select", 18);
    i0.ɵɵelementStart(1, "option", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const location_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", location_r1.name, "");
} }
class ContactComponent {
    constructor(locationService) {
        this.locationService = locationService;
        this.locations = this.locationService.getLocations();
        this.limit = '10';
    }
    ngOnInit() { }
    search(value) {
        this.searchValue = value;
        this.locations = this.locationService.locationSession$.pipe(operators_1.map(result => result.filter(valueFilter => valueFilter.name.indexOf(this.searchValue) >= 0)), operators_1.share());
    }
    setLimit(valueLimit) {
        return this.limit = valueLimit;
    }
}
exports.ContactComponent = ContactComponent;
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(i0.ɵɵdirectiveInject(i1.LocationService)); };
ContactComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ContactComponent, selectors: [["app-contact"]], decls: 28, vars: 7, consts: [[1, "dashboard"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "dashboard__section", "dashboard__section--small"], [1, "dashboard__heading", "dashboard__heading--mail"], ["type", "text", "placeholder", "Wprowad\u017A znaki ...", 1, "form-control", 3, "keyup"], [1, "dashboard__section"], [1, "dashboard__heading"], [1, "list-group"], ["class", "form-control", 4, "ngFor", "ngForOf"], [1, "input-group", "mt-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "form-control", 3, "change"], ["value", "10"], ["value", "20"], ["value", "30"], [1, "form-control"], ["value", "location.name"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "input", 6);
        i0.ɵɵlistener("keyup", function ContactComponent_Template_input_keyup_6_listener($event) { return ctx.search($event.target.value); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 2);
        i0.ɵɵelementStart(8, "div", 3);
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵelementStart(10, "div", 8);
        i0.ɵɵelementStart(11, "h3");
        i0.ɵɵtext(12, "Lista og\u0142osze\u0144");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 9);
        i0.ɵɵtemplate(14, ContactComponent_select_14_Template, 3, 1, "select", 10);
        i0.ɵɵpipe(15, "slice");
        i0.ɵɵpipe(16, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 11);
        i0.ɵɵelementStart(18, "div", 12);
        i0.ɵɵelementStart(19, "div", 13);
        i0.ɵɵtext(20, "Ustaw limit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "select", 14);
        i0.ɵɵlistener("change", function ContactComponent_Template_select_change_21_listener($event) { return ctx.setLimit($event.target.value); });
        i0.ɵɵelementStart(22, "option", 15);
        i0.ɵɵtext(23, "10");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "option", 16);
        i0.ɵɵtext(25, "20");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "option", 17);
        i0.ɵɵtext(27, "30");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(15, 1, i0.ɵɵpipeBind1(16, 5, ctx.locations), 0, ctx.limit));
    } }, directives: [i2.NgForOf, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x], pipes: [i2.SlicePipe, i2.AsyncPipe], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  -webkit-text-size-adjust: 100%;\n  \n  -ms-text-size-adjust: 100%;\n  \n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n  \n  -ms-interpolation-mode: bicubic;\n  \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0;\n  \n  padding: 0;\n  white-space: normal;\n  \n  *margin-left: -7px;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  margin: 0;\n  \n  vertical-align: baseline;\n  \n  *vertical-align: middle;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n  \n  cursor: pointer;\n  \n  *overflow: visible;\n  \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  \n  padding: 0;\n  \n  *height: 13px;\n  \n  *width: 13px;\n  \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;\n  \n  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n  vertical-align: top;\n  \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-height: 100vh;\n}\n.app[_ngcontent-%COMP%]   .app__page[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fafafa;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.38);\n  text-transform: uppercase;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n.form-group[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  margin-top: 1rem;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\ninput[_ngcontent-%COMP%]:active {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\n.dashboard[_ngcontent-%COMP%] {\n  margin: 3rem 5rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading.dashboard__heading--mail[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section[_ngcontent-%COMP%] {\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #a4bfdd, inset 0 0 10px #c8ced5;\n  padding: 2rem 1rem;\n  margin-top: 2rem;\n  border-radius: 0.25rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section.dashboard__section--small[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table[_ngcontent-%COMP%]   .table__tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid grey;\n}\n.table[_ngcontent-%COMP%]   .table__tr[_ngcontent-%COMP%]:nth-of-type(even) {\n  background: lightgrey;\n}\n.table[_ngcontent-%COMP%]   .table__td[_ngcontent-%COMP%] {\n  padding: 0 0.25rem;\n  height: 3.5rem;\n  vertical-align: middle;\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n.content[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 10%;\n  background-color: inset -10px -10px 100px #c8ced5, 10px 10px 20px #a4bfdd, inset 0 0 10px #c8ced5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL3Jlc2V0LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2hhcmVkLXNjc3MvYXBwLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQtc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL2Rhc2hib2FyZC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2hhcmVkLXNjc3MvY29tcG9uZW50cy90YWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkksU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0FKO0FESUEseURBQUE7QUFFQTtFQUNJLFVBQUE7QUNGSjtBRE1BLGdEQUFBO0FBRUE7Ozs7Ozs7Ozs7O0VBV0ksY0FBQTtBQ0pKO0FET0E7RUFDSSxjQUFBO0FDSko7QURPQTs7RUFFSSxnQkFBQTtBQ0pKO0FET0E7O0VBRUksWUFBQTtBQ0pKO0FET0E7Ozs7RUFJSSxXQUFBO0VBQ0EsYUFBQTtBQ0pKO0FET0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDSko7QURPQTs7OztFQUlJLHdCQUFBO0VBQ0EscUJBQUE7QUNKSjtBRE9BO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUdBLHVCQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSko7QURRQTs7RUFBQTtBQUlBOzs7RUFHSSxxQkFBQTtHQ05GLGVET0U7R0NORixPRE9FO0VBQ0EsZUFBQTtBQ05KO0FEVUE7OztFQUFBO0FBS0E7RUFDSSxhQUFBO0VBQ0Es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QUE7RUFDQSxzQkFBQTtBSDRlUjtBRzNlUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUg2ZVo7QUk3ZkE7RUFDSSxXQUFBO0FKZ2dCSjtBSS9mSTtFQUNJLDZCQUFBO0FKaWdCUjtBSWhnQlE7RUFDSSxxQkFBQTtBSmtnQlo7QUkvZkk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCRk5PO0VFT1AsMEJGS1M7QUY0ZmpCO0FBNWdCQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUdFTFE7QUZvaEJaIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xyXG4gICB2Mi4wLW1vZGlmaWVkIHwgMjAxMTAxMjZcclxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcclxuKi9cclxuXHJcbmh0bWwsXHJcbmJvZHksXHJcbmRpdixcclxuc3BhbixcclxuYXBwbGV0LFxyXG5vYmplY3QsXHJcbmlmcmFtZSxcclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNixcclxucCxcclxuYmxvY2txdW90ZSxcclxucHJlLFxyXG5hLFxyXG5hYmJyLFxyXG5hY3JvbnltLFxyXG5hZGRyZXNzLFxyXG5iaWcsXHJcbmNpdGUsXHJcbmNvZGUsXHJcbmRlbCxcclxuZGZuLFxyXG5lbSxcclxuaW1nLFxyXG5pbnMsXHJcbmtiZCxcclxucSxcclxucyxcclxuc2FtcCxcclxuc21hbGwsXHJcbnN0cmlrZSxcclxuc3Ryb25nLFxyXG5zdWIsXHJcbnN1cCxcclxudHQsXHJcbnZhcixcclxuYixcclxudSxcclxuaSxcclxuY2VudGVyLFxyXG5kbCxcclxuZHQsXHJcbmRkLFxyXG5vbCxcclxudWwsXHJcbmxpLFxyXG5maWVsZHNldCxcclxuZm9ybSxcclxubGFiZWwsXHJcbmxlZ2VuZCxcclxudGFibGUsXHJcbmNhcHRpb24sXHJcbnRib2R5LFxyXG50Zm9vdCxcclxudGhlYWQsXHJcbnRyLFxyXG50aCxcclxudGQsXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5jYW52YXMsXHJcbmRldGFpbHMsXHJcbmVtYmVkLFxyXG5maWd1cmUsXHJcbmZpZ2NhcHRpb24sXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5oZ3JvdXAsXHJcbm1lbnUsXHJcbm5hdixcclxub3V0cHV0LFxyXG5ydWJ5LFxyXG5zZWN0aW9uLFxyXG5zdW1tYXJ5LFxyXG50aW1lLFxyXG5tYXJrLFxyXG5hdWRpbyxcclxudmlkZW8ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcblxyXG4vKiBtYWtlIHN1cmUgdG8gc2V0IHNvbWUgZm9jdXMgc3R5bGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXHJcblxyXG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuXHJcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5kZXRhaWxzLFxyXG5maWdjYXB0aW9uLFxyXG5maWd1cmUsXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5oZ3JvdXAsXHJcbm1lbnUsXHJcbm5hdixcclxuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxub2wsXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUsXHJcbnEge1xyXG4gICAgcXVvdGVzOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlOmJlZm9yZSxcclxuYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsXHJcbnE6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c2VhcmNoXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXHJcbiAqL1xyXG5cclxuYXVkaW8sXHJcbmNhbnZhcyxcclxudmlkZW8ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgKmRpc3BsYXk6IGlubGluZTtcclxuICAgICp6b29tOiAxO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXHJcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXHJcbiAqL1xyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cclxuICogS25vd24gaXNzdWU6IG5vIElFIDYgc3VwcG9ydC5cclxuICovXHJcblxyXG5baGlkZGVuXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGV4dCByZXNpemluZyBvZGRseSBpbiBJRSA2Lzcgd2hlbiBib2R5IGBmb250LXNpemVgIGlzIHNldCB1c2luZ1xyXG4gKiAgICBgZW1gIHVuaXRzLlxyXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcclxuICogICAgdXNlciB6b29tLlxyXG4gKi9cclxuXHJcbmh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgLyogMSAqL1xyXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgLyogMiAqL1xyXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAvKiAyICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5hOmFjdGl2ZSxcclxuYTpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxyXG4gKiAyLiBJbXByb3ZlIGltYWdlIHF1YWxpdHkgd2hlbiBzY2FsZWQgaW4gSUUgNy5cclxuICovXHJcblxyXG5pbWcge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgLyogMSAqL1xyXG4gICAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYztcclxuICAgIC8qIDIgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA2LzcvOC85LCBTYWZhcmkgNSwgYW5kIE9wZXJhIDExLlxyXG4gKi9cclxuXHJcbmZpZ3VyZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29ycmVjdCBtYXJnaW4gZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cclxuICovXHJcblxyXG5mb3JtIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXHJcbiAqL1xyXG5cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDYvNy84LzkuXHJcbiAqIDIuIENvcnJlY3QgdGV4dCBub3Qgd3JhcHBpbmcgaW4gRmlyZWZveCAzLlxyXG4gKiAzLiBDb3JyZWN0IGFsaWdubWVudCBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxyXG4gKi9cclxuXHJcbmxlZ2VuZCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIC8qIDIgKi9cclxuICAgICptYXJnaW4tbGVmdDogLTdweDtcclxuICAgIC8qIDMgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cclxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxyXG4gKiAgICBhbmQgQ2hyb21lLlxyXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIC8qIDEgKi9cclxuICAgIG1hcmdpbjogMDtcclxuICAgIC8qIDIgKi9cclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIC8qIDMgKi9cclxuICAgICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLyogMyAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cclxuICogdGhlIFVBIHN0eWxlc2hlZXQuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCB7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cclxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cclxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDYrLlxyXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuc2VsZWN0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXHJcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxyXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXHJcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXHJcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cclxuICogNC4gUmVtb3ZlIGlubmVyIHNwYWNpbmcgaW4gSUUgNyB3aXRob3V0IGFmZmVjdGluZyBub3JtYWwgdGV4dCBpbnB1dHMuXHJcbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuXHJcbi8qIDEgKi9cclxuXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICAgIC8qIDIgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIDMgKi9cclxuICAgICpvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIC8qIDQgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxyXG4gKi9cclxuXHJcbmJ1dHRvbltkaXNhYmxlZF0sXHJcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGNvbnRlbnQtYm94IGluIElFIDgvOS5cclxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cclxuICogMy4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDcuXHJcbiAqICAgIEtub3duIGlzc3VlOiBleGNlc3MgcGFkZGluZyByZW1haW5zIGluIElFIDYuXHJcbiAqL1xyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8qIDEgKi9cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvKiAyICovXHJcbiAgICAqaGVpZ2h0OiAxM3B4O1xyXG4gICAgLyogMyAqL1xyXG4gICAgKndpZHRoOiAxM3B4O1xyXG4gICAgLyogMyAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXHJcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxyXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gICAgLyogMSAqL1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAvKiAyICovXHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxyXG4gKiBvbiBPUyBYLlxyXG4gKi9cclxuXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCAzKy5cclxuICovXHJcblxyXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXHJcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDYvNy84LzkuXHJcbiAqIDIuIEltcHJvdmUgcmVhZGFiaWxpdHkgYW5kIGFsaWdubWVudCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxudGV4dGFyZWEge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAvKiAxICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgLyogMiAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cclxuICovXHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbjo6LW1vei1zZWxlY3Rpb24ge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbjo6c2VsZWN0aW9uIHtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLmNocm9tZWZyYW1lIHtcclxuICAgIG1hcmdpbjogMC4yZW0gMDtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDA7XHJcbn1cclxuIiwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cbiAgIHYyLjAtbW9kaWZpZWQgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qKlxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cbiAqL1xuYXVkaW8sXG5jYW52YXMsXG52aWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgKnpvb206IDE7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cbiAqL1xuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKipcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxuICovXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXG4gKiAgICBgZW1gIHVuaXRzLlxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXG4gKiAgICB1c2VyIHpvb20uXG4gKi9cbmh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG4gIC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKiAyICovXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXG4gKi9cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcbn1cblxuLyoqXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cbiAqL1xuYTphY3RpdmUsXG5hOmhvdmVyIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cbiAqIDIuIEltcHJvdmUgaW1hZ2UgcXVhbGl0eSB3aGVuIHNjYWxlZCBpbiBJRSA3LlxuICovXG5pbWcge1xuICBib3JkZXI6IDA7XG4gIC8qIDEgKi9cbiAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYztcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXG4gKi9cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxuICovXG5mb3JtIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cbiAqL1xuZmllbGRzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICBtYXJnaW46IDAgMnB4O1xuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDYvNy84LzkuXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cbiAqIDMuIENvcnJlY3QgYWxpZ25tZW50IGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXG4gKi9cbmxlZ2VuZCB7XG4gIGJvcmRlcjogMDtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAvKiAyICovXG4gICptYXJnaW4tbGVmdDogLTdweDtcbiAgLyogMyAqL1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgZm9udCBzaXplIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxuICogICAgYW5kIENocm9tZS5cbiAqIDMuIEltcHJvdmUgYXBwZWFyYW5jZSBhbmQgY29uc2lzdGVuY3kgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICAvKiAxICovXG4gIG1hcmdpbjogMDtcbiAgLyogMiAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIC8qIDMgKi9cbiAgKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC8qIDMgKi9cbn1cblxuLyoqXG4gKiBBZGRyZXNzIEZpcmVmb3ggMysgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cbiAqL1xuYnV0dG9uLFxuaW5wdXQge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4vKipcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxuICovXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxuICogNC4gUmVtb3ZlIGlubmVyIHNwYWNpbmcgaW4gSUUgNyB3aXRob3V0IGFmZmVjdGluZyBub3JtYWwgdGV4dCBpbnB1dHMuXG4gKiAgICBLbm93biBpc3N1ZTogaW5uZXIgc3BhY2luZyByZW1haW5zIGluIElFIDYuXG4gKi9cbmJ1dHRvbixcbmh0bWwgaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1yZXNldF0sXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgLyogMiAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIDMgKi9cbiAgKm92ZXJmbG93OiB2aXNpYmxlO1xuICAvKiA0ICovXG59XG5cbi8qKlxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cbiAqL1xuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKipcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cbiAqIDMuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA3LlxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cbiAqL1xuaW5wdXRbdHlwZT1jaGVja2JveF0sXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMiAqL1xuICAqaGVpZ2h0OiAxM3B4O1xuICAvKiAzICovXG4gICp3aWR0aDogMTNweDtcbiAgLyogMyAqL1xufVxuXG4vKipcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxuICovXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgLyogMSAqL1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAvKiAyICovXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4vKipcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXG4gKiBvbiBPUyBYLlxuICovXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxuICovXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cbiAqIDIuIEltcHJvdmUgcmVhZGFiaWxpdHkgYW5kIGFsaWdubWVudCBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cbiAqL1xudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaHRtbCxcbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBjb2xvcjogIzIyMjtcbn1cblxuOjotbW96LXNlbGVjdGlvbiB7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5jaHJvbWVmcmFtZSB7XG4gIG1hcmdpbjogMC4yZW0gMDtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDAuMmVtIDA7XG59XG5cbi5hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5hcHAgLmFwcF9fcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG5pbnB1dDphY3RpdmUge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogMDtcbn1cblxuLmRhc2hib2FyZCB7XG4gIG1hcmdpbjogM3JlbSA1cmVtO1xufVxuLmRhc2hib2FyZCAuZGFzaGJvYXJkX19oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5kYXNoYm9hcmQgLmRhc2hib2FyZF9faGVhZGluZy5kYXNoYm9hcmRfX2hlYWRpbmctLW1haWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmRhc2hib2FyZCAuZGFzaGJvYXJkX19zZWN0aW9uIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMTAwcHggI2M4Y2VkNSwgMTBweCAxMHB4IDIwcHggI2E0YmZkZCwgaW5zZXQgMCAwIDEwcHggI2M4Y2VkNTtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLmRhc2hib2FyZCAuZGFzaGJvYXJkX19zZWN0aW9uLmRhc2hib2FyZF9fc2VjdGlvbi0tc21hbGwge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRhYmxlIC50YWJsZV9fdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbn1cbi50YWJsZSAudGFibGVfX3RyOm50aC1vZi10eXBlKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xufVxuLnRhYmxlIC50YWJsZV9fdGQge1xuICBwYWRkaW5nOiAwIDAuMjVyZW07XG4gIGhlaWdodDogMy41cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsIDEwcHggMTBweCAyMHB4ICNhNGJmZGQsIGluc2V0IDAgMCAxMHB4ICNjOGNlZDU7XG59IiwiQGltcG9ydCBcIi4vcmVzZXQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uYXBwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAuYXBwX19wYWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteGw7XHJcbiAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbWQ7XHJcbiAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XHJcbiAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuQG1peGluIG91dGxpbmUtLW5vbmUge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgQGluY2x1ZGUgb3V0bGluZS0tbm9uZTtcclxuICAgIH1cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBAaW5jbHVkZSBvdXRsaW5lLS1ub25lO1xyXG4gICAgfVxyXG59XHJcbiIsIiRib3hTaGFkb3c6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsXHJcbjEwcHggMTBweCAyMHB4ICNhNGJmZGQsXHJcbmluc2V0IDAgMCAxMHB4ICNjOGNlZDU7XHJcbiRib3JkZXI6IDFweCAjMjIyIHNvbGlkO1xyXG4kZm9udC1zaXplLXh4czogLjYyNXJlbTtcclxuJGZvbnQtc2l6ZS14czogLjc1cmVtO1xyXG4kZm9udC1zaXplLXNtOiAuOXJlbTtcclxuJGZvbnQtc2l6ZS1tZDogMXJlbTtcclxuJGZvbnQtc2l6ZS1sZzogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS14bDogMS41cmVtO1xyXG4kZm9udC1zaXplLXh4bDogMnJlbTtcclxuJGNvbG9yLXJlZDogI0ZGMDAwMDtcclxuJGNvbG9yLWdyZWVuLTE1OiAjMDA0ZDFhO1xyXG4kY29sb3ItZ3JheS05MDogI2JiYmJiYTtcclxuJGNvbG9yLWdyYXktMjU6ICM0ZDRkMzM7XHJcbiRjb2xvci1ncmVlbi01NTogIzUzYzY1MztcclxuJHdoaXRlOiAjZmZmO1xyXG4kZGFyazogcmdiYSgjMDAwLCAuODcpO1xyXG4kZGFyay1zZWNvbmRhcnk6IHJnYmEoIzAwMCwgLjU0KTtcclxuJGRhcmstZGlzYWJsZWQ6IHJnYmEoIzAwMCwgLjM4KTtcclxuIiwiQGltcG9ydCBcIi4vYXBwLnNjc3NcIjtcclxuLmRhc2hib2FyZCB7XHJcbiAgICBtYXJnaW46IDNyZW0gNXJlbTtcclxuICAgIC5kYXNoYm9hcmRfX2hlYWRpbmcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgJi5kYXNoYm9hcmRfX2hlYWRpbmctLW1haWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kYXNoYm9hcmRfX3NlY3Rpb24ge1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRib3hTaGFkb3c7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgICAgICYuZGFzaGJvYXJkX19zZWN0aW9uLS1zbWFsbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLnRhYmxlX190ciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgJjpudGgtb2YtdHlwZShldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGFibGVfX3RkIHtcclxuICAgICAgICBwYWRkaW5nOiAwIC4yNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcclxuICAgICAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ContactComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: i1.LocationService }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/pages/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/pages/home/home.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const Subscription_1 = __webpack_require__(/*! rxjs/internal/Subscription */ "./node_modules/rxjs/internal/Subscription.js");
const ag_grid_header_component_1 = __webpack_require__(/*! ../../../shared/shared-ag-grid-header/ag-grid-header.component */ "./src/app/shared/shared-ag-grid-header/ag-grid-header.component.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! src/app/shared/shared-services/announcement/announcement.service */ "./src/app/shared/shared-services/announcement/announcement.service.ts");
const i2 = __webpack_require__(/*! ../../../shared/shared-services/logger/logger.service */ "./src/app/shared/shared-services/logger/logger.service.ts");
const i3 = __webpack_require__(/*! ../../../shared/shared-services/data-json/data-json.service */ "./src/app/shared/shared-services/data-json/data-json.service.ts");
const i4 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const i5 = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
function HomeComponent_ag_grid_angular_14_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ag-grid-angular", 9);
    i0.ɵɵlistener("gridReady", function HomeComponent_ag_grid_angular_14_Template_ag_grid_angular_gridReady_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onGridReady($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("rowData", ctx_r0.rowDatatAnnouncement)("frameworkComponents", ctx_r0.frameworkComponents)("columnDefs", ctx_r0.columnDefs)("gridOptions", ctx_r0.gridOptions)("defaultColDef", ctx_r0.defaultColumn);
} }
class HomeComponent {
    constructor(announcementService, logger, dataJsonService) {
        this.announcementService = announcementService;
        this.logger = logger;
        this.dataJsonService = dataJsonService;
        this.rowDatatAnnouncement = [];
        this.columnDefs = [
            { headerName: 'Miasto', field: 'title', colId: 'title', editable: true },
            { headerName: 'Cena', field: 'price', colId: 'price' },
            { headerName: 'Powierzchnia', field: 'surface', colId: 'surface' }
        ];
        this.gridOptions = {
            suppressRowClickSelection: false,
            rowMultiSelectWithClick: false,
        };
        this.defaultColumn = {
            filter: true,
            sortable: true,
            headerCheckboxSelectionFilteredOnly: true,
            filterParams: {
                clearButton: true
            },
            width: 350,
            resizable: true,
        };
        this.frameworkComponents = {
            agColumnHeader: ag_grid_header_component_1.AgGridHeaderComponent,
        };
        this.resutDataAnnouncement = new Subscription_1.Subscription();
        this.getDataAnnouncement$ = this.announcementService.getAnnouncement();
    }
    ngOnInit() {
        /*
        this.dataJsonService.readDataJson().subscribe(dataJson => {
          if (dataJson) {
            const result = (dataJson as any)
              .map((data: any) => {
                this.logger.info('MAP ' + data.years);
                return data;
              })
              .filter((data: any) => {
                this.logger.info('FILTER ' +  data.years);
                return  data.years === 2010;
             })
              .reduce((valueStart: any, data: any) => {
                this.logger.info('REDUCE ' + data);
                return valueStart + data;
              }, 0);
            this.logger.info('FILTER MAP REDUCE result ' + result);
          }
        });
        */
        this.resutDataAnnouncement.add(this.getDataAnnouncement$.subscribe({
            next: (Res) => {
                this.rowDatatAnnouncement = Res;
            },
            error: (Err) => {
                this.logger.info('Błąd pobrania ogłoszeń. Error: ' + Err);
            },
            complete() { }
        }));
    }
    ngOnDestroy() {
        this.resutDataAnnouncement.unsubscribe();
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
}
exports.HomeComponent = HomeComponent;
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.AnnouncementService), i0.ɵɵdirectiveInject(i2.LoggerService), i0.ɵɵdirectiveInject(i3.DataJsonService)); };
HomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 15, vars: 1, consts: [[1, "dashboard"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "dashboard__section", "dashboard__section--small"], [1, "dashboard__heading", "dashboard__heading--mail"], [1, "dashboard__section"], [1, "dashboard__heading"], ["class", "ag-theme-material ag-grid__tab", 3, "rowData", "frameworkComponents", "columnDefs", "gridOptions", "defaultColDef", "gridReady", 4, "ngIf"], [1, "ag-theme-material", "ag-grid__tab", 3, "rowData", "frameworkComponents", "columnDefs", "gridOptions", "defaultColDef", "gridReady"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "h2");
        i0.ɵɵtext(7, "Lista aktualnych og\u0142osze\u0144");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 2);
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵelementStart(12, "h3");
        i0.ɵɵtext(13, "Lista og\u0142osze\u0144");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, HomeComponent_ag_grid_angular_14_Template, 1, 5, "ag-grid-angular", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("ngIf", ctx.rowDatatAnnouncement.length > 0);
    } }, directives: [i4.NgIf, i5.AgGridAngular], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  -webkit-text-size-adjust: 100%;\n  \n  -ms-text-size-adjust: 100%;\n  \n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n  \n  -ms-interpolation-mode: bicubic;\n  \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0;\n  \n  padding: 0;\n  white-space: normal;\n  \n  *margin-left: -7px;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  margin: 0;\n  \n  vertical-align: baseline;\n  \n  *vertical-align: middle;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n  \n  cursor: pointer;\n  \n  *overflow: visible;\n  \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  \n  padding: 0;\n  \n  *height: 13px;\n  \n  *width: 13px;\n  \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;\n  \n  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n  vertical-align: top;\n  \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-height: 100vh;\n}\n.app[_ngcontent-%COMP%]   .app__page[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fafafa;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.38);\n  text-transform: uppercase;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n.form-group[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  margin-top: 1rem;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\ninput[_ngcontent-%COMP%]:active {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\n.dashboard[_ngcontent-%COMP%] {\n  margin: 3rem 5rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading.dashboard__heading--mail[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section[_ngcontent-%COMP%] {\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #a4bfdd, inset 0 0 10px #c8ced5;\n  padding: 2rem 1rem;\n  margin-top: 2rem;\n  border-radius: 0.25rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section.dashboard__section--small[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.ag-grid__tab[_ngcontent-%COMP%] {\n  margin: 5% 5% 5% 15%;\n  width: 70%;\n  height: 70vh;\n  border: 1px #222 solid;\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #a4bfdd, inset 0 0 10px #c8ced5;\n}\n  .ag-header-viewport {\n  border-bottom: 1px #222 solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL3Jlc2V0LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2hhcmVkLXNjc3MvYXBwLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQtc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL2Rhc2hib2FyZC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2hhcmVkLXNjc3MvY29tcG9uZW50cy9ncmlkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDQUo7QURJQSx5REFBQTtBQUVBO0VBQ0ksVUFBQTtBQ0ZKO0FETUEsZ0RBQUE7QUFFQTs7Ozs7Ozs7Ozs7RUFXSSxjQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7QUNKSjtBRE9BOztFQUVJLGdCQUFBO0FDSko7QURPQTs7RUFFSSxZQUFBO0FDSko7QURPQTs7OztFQUlJLFdBQUE7RUFDQSxhQUFBO0FDSko7QURPQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUNKSjtBRE9BOzs7O0VBSUksd0JBQUE7RUFDQSxxQkFBQTtBQ0pKO0FET0E7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0VBR0EsdUJBQUE7QUNKSjtBRE9BO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRFFBOztFQUFBO0FBSUE7OztFQUdJLHFCQUFBO0dDTkYsZURPRTtHQ05GLE9ET0U7RUFDQSxlQUFBO0FDTko7QURVQTs7O0VBQUE7QUFLQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FD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LHNCQUFBO0FINGVSO0FHM2VRO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBSDZlWjtBSTVmQTtFQUNJLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkZGSztFRUdMLDJGRk5RO0FGcWdCWjtBQWxnQkE7RUFDSSw2QkVESztBRnNnQlQiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXHJcbiAgIHYyLjAtbW9kaWZpZWQgfCAyMDExMDEyNlxyXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxyXG4qL1xyXG5cclxuaHRtbCxcclxuYm9keSxcclxuZGl2LFxyXG5zcGFuLFxyXG5hcHBsZXQsXHJcbm9iamVjdCxcclxuaWZyYW1lLFxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG5wLFxyXG5ibG9ja3F1b3RlLFxyXG5wcmUsXHJcbmEsXHJcbmFiYnIsXHJcbmFjcm9ueW0sXHJcbmFkZHJlc3MsXHJcbmJpZyxcclxuY2l0ZSxcclxuY29kZSxcclxuZGVsLFxyXG5kZm4sXHJcbmVtLFxyXG5pbWcsXHJcbmlucyxcclxua2JkLFxyXG5xLFxyXG5zLFxyXG5zYW1wLFxyXG5zbWFsbCxcclxuc3RyaWtlLFxyXG5zdHJvbmcsXHJcbnN1Yixcclxuc3VwLFxyXG50dCxcclxudmFyLFxyXG5iLFxyXG51LFxyXG5pLFxyXG5jZW50ZXIsXHJcbmRsLFxyXG5kdCxcclxuZGQsXHJcbm9sLFxyXG51bCxcclxubGksXHJcbmZpZWxkc2V0LFxyXG5mb3JtLFxyXG5sYWJlbCxcclxubGVnZW5kLFxyXG50YWJsZSxcclxuY2FwdGlvbixcclxudGJvZHksXHJcbnRmb290LFxyXG50aGVhZCxcclxudHIsXHJcbnRoLFxyXG50ZCxcclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmNhbnZhcyxcclxuZGV0YWlscyxcclxuZW1iZWQsXHJcbmZpZ3VyZSxcclxuZmlnY2FwdGlvbixcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5vdXRwdXQsXHJcbnJ1YnksXHJcbnNlY3Rpb24sXHJcbnN1bW1hcnksXHJcbnRpbWUsXHJcbm1hcmssXHJcbmF1ZGlvLFxyXG52aWRlbyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuXHJcbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cclxuXHJcbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmRldGFpbHMsXHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5vbCxcclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSxcclxucSB7XHJcbiAgICBxdW90ZXM6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGU6YmVmb3JlLFxyXG5ibG9ja3F1b3RlOmFmdGVyLFxyXG5xOmJlZm9yZSxcclxucTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cclxuICovXHJcblxyXG5hdWRpbyxcclxuY2FudmFzLFxyXG52aWRlbyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAqZGlzcGxheTogaW5saW5lO1xyXG4gICAgKnpvb206IDE7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cclxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cclxuICovXHJcblxyXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgNy84LzksIEZpcmVmb3ggMywgYW5kIFNhZmFyaSA0LlxyXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxyXG4gKi9cclxuXHJcbltoaWRkZW5dIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXHJcbiAqICAgIGBlbWAgdW5pdHMuXHJcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xyXG4gKiAgICB1c2VyIHpvb20uXHJcbiAqL1xyXG5cclxuaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAvKiAxICovXHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAvKiAyICovXHJcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgIC8qIDIgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cclxuICovXHJcblxyXG5hOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IHRoaW4gZG90dGVkO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmE6YWN0aXZlLFxyXG5hOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXHJcbiAqIDIuIEltcHJvdmUgaW1hZ2UgcXVhbGl0eSB3aGVuIHNjYWxlZCBpbiBJRSA3LlxyXG4gKi9cclxuXHJcbmltZyB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAvKiAxICovXHJcbiAgICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljO1xyXG4gICAgLyogMiAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXHJcbiAqL1xyXG5cclxuZmlndXJlIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxyXG4gKi9cclxuXHJcbmZvcm0ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cclxuICovXHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cclxuICogMi4gQ29ycmVjdCB0ZXh0IG5vdCB3cmFwcGluZyBpbiBGaXJlZm94IDMuXHJcbiAqIDMuIENvcnJlY3QgYWxpZ25tZW50IGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXHJcbiAqL1xyXG5cclxubGVnZW5kIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIC8qIDEgKi9cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgLyogMiAqL1xyXG4gICAgKm1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gICAgLyogMyAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgZm9udCBzaXplIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXHJcbiAqICAgIGFuZCBDaHJvbWUuXHJcbiAqIDMuIEltcHJvdmUgYXBwZWFyYW5jZSBhbmQgY29uc2lzdGVuY3kgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgLyogMSAqL1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLyogMiAqL1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgLyogMyAqL1xyXG4gICAgKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAvKiAzICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBGaXJlZm94IDMrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxyXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmlucHV0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxyXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxyXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXHJcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5zZWxlY3Qge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcclxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXHJcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cclxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcclxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxyXG4gKiA0LiBSZW1vdmUgaW5uZXIgc3BhY2luZyBpbiBJRSA3IHdpdGhvdXQgYWZmZWN0aW5nIG5vcm1hbCB0ZXh0IGlucHV0cy5cclxuICogICAgS25vd24gaXNzdWU6IGlubmVyIHNwYWNpbmcgcmVtYWlucyBpbiBJRSA2LlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxyXG5cclxuLyogMSAqL1xyXG5cclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG4gICAgLyogMiAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLyogMyAqL1xyXG4gICAgKm92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgLyogNCAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXHJcbiAqL1xyXG5cclxuYnV0dG9uW2Rpc2FibGVkXSxcclxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxyXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxyXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cclxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8qIDIgKi9cclxuICAgICpoZWlnaHQ6IDEzcHg7XHJcbiAgICAvKiAzICovXHJcbiAgICAqd2lkdGg6IDEzcHg7XHJcbiAgICAvKiAzICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cclxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXHJcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxyXG4gKi9cclxuXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgICAvKiAxICovXHJcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIC8qIDIgKi9cclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXHJcbiAqIG9uIE9TIFguXHJcbiAqL1xyXG5cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxyXG4gKi9cclxuXHJcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcclxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cclxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC8qIDEgKi9cclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvKiAyICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxyXG4gKi9cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuaHRtbCxcclxuYnV0dG9uLFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuOjpzZWxlY3Rpb24ge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4uY2hyb21lZnJhbWUge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMDtcclxufVxyXG4iLCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuICAgdjIuMC1tb2RpZmllZCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogbWFrZSBzdXJlIHRvIHNldCBzb21lIGZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xuOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxuICovXG5hdWRpbyxcbmNhbnZhcyxcbnZpZGVvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAqZGlzcGxheTogaW5saW5lO1xuICAqem9vbTogMTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxuICovXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qKlxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cbiAqIEtub3duIGlzc3VlOiBubyBJRSA2IHN1cHBvcnQuXG4gKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRleHQgcmVzaXppbmcgb2RkbHkgaW4gSUUgNi83IHdoZW4gYm9keSBgZm9udC1zaXplYCBpcyBzZXQgdXNpbmdcbiAqICAgIGBlbWAgdW5pdHMuXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcbiAqICAgIHVzZXIgem9vbS5cbiAqL1xuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cbiAqL1xuYTpmb2N1cyB7XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xufVxuXG4vKipcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5hOmFjdGl2ZSxcbmE6aG92ZXIge1xuICBvdXRsaW5lOiAwO1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXG4gKi9cbmltZyB7XG4gIGJvcmRlcjogMDtcbiAgLyogMSAqL1xuICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cbiAqL1xuZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIENvcnJlY3QgbWFyZ2luIGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXG4gKi9cbmZvcm0ge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxuICovXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gIG1hcmdpbjogMCAycHg7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cbiAqIDIuIENvcnJlY3QgdGV4dCBub3Qgd3JhcHBpbmcgaW4gRmlyZWZveCAzLlxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cbiAqL1xubGVnZW5kIHtcbiAgYm9yZGVyOiAwO1xuICAvKiAxICovXG4gIHBhZGRpbmc6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIC8qIDIgKi9cbiAgKm1hcmdpbi1sZWZ0OiAtN3B4O1xuICAvKiAzICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXG4gKiAgICBhbmQgQ2hyb21lLlxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LXNpemU6IDEwMCU7XG4gIC8qIDEgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiAyICovXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgLyogMyAqL1xuICAqdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLyogMyAqL1xufVxuXG4vKipcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxuICovXG5idXR0b24sXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8qKlxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXG4gKi9cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXG4gKiA0LiBSZW1vdmUgaW5uZXIgc3BhY2luZyBpbiBJRSA3IHdpdGhvdXQgYWZmZWN0aW5nIG5vcm1hbCB0ZXh0IGlucHV0cy5cbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cbiAqL1xuYnV0dG9uLFxuaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sXG5pbnB1dFt0eXBlPXJlc2V0XSxcbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICAvKiAyICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogMyAqL1xuICAqb3ZlcmZsb3c6IHZpc2libGU7XG4gIC8qIDQgKi9cbn1cblxuLyoqXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxuICovXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qKlxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxuICogMy4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDcuXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxuICovXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICAvKiAyICovXG4gICpoZWlnaHQ6IDEzcHg7XG4gIC8qIDMgKi9cbiAgKndpZHRoOiAxM3B4O1xuICAvKiAzICovXG59XG5cbi8qKlxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXG4gKi9cbmlucHV0W3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAvKiAxICovXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC8qIDIgKi9cbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi8qKlxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcbiAqIG9uIE9TIFguXG4gKi9cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggMysuXG4gKi9cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA2LzcvOC85LlxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cbiAqL1xudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxuICovXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5odG1sLFxuYnV0dG9uLFxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLmNocm9tZWZyYW1lIHtcbiAgbWFyZ2luOiAwLjJlbSAwO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMC4yZW0gMDtcbn1cblxuLmFwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmFwcCAuYXBwX19wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogMDtcbn1cbmlucHV0OmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiAwO1xufVxuXG4uZGFzaGJvYXJkIHtcbiAgbWFyZ2luOiAzcmVtIDVyZW07XG59XG4uZGFzaGJvYXJkIC5kYXNoYm9hcmRfX2hlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmRhc2hib2FyZCAuZGFzaGJvYXJkX19oZWFkaW5nLmRhc2hib2FyZF9faGVhZGluZy0tbWFpbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZGFzaGJvYXJkIC5kYXNoYm9hcmRfX3NlY3Rpb24ge1xuICBib3gtc2hhZG93OiBpbnNldCAtMTBweCAtMTBweCAxMDBweCAjYzhjZWQ1LCAxMHB4IDEwcHggMjBweCAjYTRiZmRkLCBpbnNldCAwIDAgMTBweCAjYzhjZWQ1O1xuICBwYWRkaW5nOiAycmVtIDFyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4uZGFzaGJvYXJkIC5kYXNoYm9hcmRfX3NlY3Rpb24uZGFzaGJvYXJkX19zZWN0aW9uLS1zbWFsbCB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLmFnLWdyaWRfX3RhYiB7XG4gIG1hcmdpbjogNSUgNSUgNSUgMTUlO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwdmg7XG4gIGJvcmRlcjogMXB4ICMyMjIgc29saWQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsIDEwcHggMTBweCAyMHB4ICNhNGJmZGQsIGluc2V0IDAgMCAxMHB4ICNjOGNlZDU7XG59XG5cbjo6bmctZGVlcCAuYWctaGVhZGVyLXZpZXdwb3J0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICMyMjIgc29saWQ7XG59IiwiQGltcG9ydCBcIi4vcmVzZXQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uYXBwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAuYXBwX19wYWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteGw7XHJcbiAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbWQ7XHJcbiAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XHJcbiAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuQG1peGluIG91dGxpbmUtLW5vbmUge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgQGluY2x1ZGUgb3V0bGluZS0tbm9uZTtcclxuICAgIH1cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBAaW5jbHVkZSBvdXRsaW5lLS1ub25lO1xyXG4gICAgfVxyXG59XHJcbiIsIiRib3hTaGFkb3c6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsXHJcbjEwcHggMTBweCAyMHB4ICNhNGJmZGQsXHJcbmluc2V0IDAgMCAxMHB4ICNjOGNlZDU7XHJcbiRib3JkZXI6IDFweCAjMjIyIHNvbGlkO1xyXG4kZm9udC1zaXplLXh4czogLjYyNXJlbTtcclxuJGZvbnQtc2l6ZS14czogLjc1cmVtO1xyXG4kZm9udC1zaXplLXNtOiAuOXJlbTtcclxuJGZvbnQtc2l6ZS1tZDogMXJlbTtcclxuJGZvbnQtc2l6ZS1sZzogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS14bDogMS41cmVtO1xyXG4kZm9udC1zaXplLXh4bDogMnJlbTtcclxuJGNvbG9yLXJlZDogI0ZGMDAwMDtcclxuJGNvbG9yLWdyZWVuLTE1OiAjMDA0ZDFhO1xyXG4kY29sb3ItZ3JheS05MDogI2JiYmJiYTtcclxuJGNvbG9yLWdyYXktMjU6ICM0ZDRkMzM7XHJcbiRjb2xvci1ncmVlbi01NTogIzUzYzY1MztcclxuJHdoaXRlOiAjZmZmO1xyXG4kZGFyazogcmdiYSgjMDAwLCAuODcpO1xyXG4kZGFyay1zZWNvbmRhcnk6IHJnYmEoIzAwMCwgLjU0KTtcclxuJGRhcmstZGlzYWJsZWQ6IHJnYmEoIzAwMCwgLjM4KTtcclxuIiwiQGltcG9ydCBcIi4vYXBwLnNjc3NcIjtcclxuLmRhc2hib2FyZCB7XHJcbiAgICBtYXJnaW46IDNyZW0gNXJlbTtcclxuICAgIC5kYXNoYm9hcmRfX2hlYWRpbmcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgJi5kYXNoYm9hcmRfX2hlYWRpbmctLW1haWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kYXNoYm9hcmRfX3NlY3Rpb24ge1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRib3hTaGFkb3c7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgICAgICYuZGFzaGJvYXJkX19zZWN0aW9uLS1zbWFsbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uL3ZhcmlhYmxlcy5zY3NzXCI7XG4uYWctZ3JpZF9fdGFiIHtcbiAgICBtYXJnaW46IDUlIDUlIDUlIDE1JTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBib3JkZXI6ICRib3JkZXI7XG4gICAgYm94LXNoYWRvdzogJGJveFNoYWRvdztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HomeComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: i1.AnnouncementService }, { type: i2.LoggerService }, { type: i3.DataJsonService }]; }, null); })();


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
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const i2 = __webpack_require__(/*! ../../../shared/shared-services/logger/logger.service */ "./src/app/shared/shared-services/logger/logger.service.ts");
const i3 = __webpack_require__(/*! ../../../shared/shared-services/user/user-shared.service */ "./src/app/shared/shared-services/user/user-shared.service.ts");
const i4 = __webpack_require__(/*! ../../core/authentication/auth/auth.service */ "./src/app/modules/core/authentication/auth/auth.service.ts");
const i5 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
function UserLoginComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Wprowad\u017A nazw\u0119 klienta ");
    i0.ɵɵelementEnd();
} }
function UserLoginComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Wprowad\u017A has\u0142o ");
    i0.ɵɵelementEnd();
} }
class UserLoginComponent {
    constructor(fb, logger, userSharedService, authService) {
        this.fb = fb;
        this.logger = logger;
        this.userSharedService = userSharedService;
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
                switch (data.success) {
                    case false: {
                        this.logger.error(`Error code ${data.message}`);
                        break;
                    }
                    case true: {
                        this.logger.info('Logged in successfully');
                        this.userSharedService.shareUser(data.respons);
                        this.loginForm.reset();
                        break;
                    }
                    default: {
                        this.loginForm.reset();
                        break;
                    }
                }
            }, (Error) => {
                if (Error instanceof http_1.HttpErrorResponse) {
                    this.logger.error('Error name: ' + Error.error);
                    this.logger.error('Error status text: ' + Error.statusText);
                    this.logger.error('Error status: ' + Error.status);
                }
            });
        }
    }
}
exports.UserLoginComponent = UserLoginComponent;
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.LoggerService), i0.ɵɵdirectiveInject(i3.UserSharedService), i0.ɵɵdirectiveInject(i4.AuthService)); };
UserLoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserLoginComponent, selectors: [["app-user-login"]], decls: 33, vars: 3, consts: [[1, "dashboard"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "dashboard__section", "dashboard__section--small"], [1, "dashboard__heading", "dashboard__heading--mail"], [1, "dashboard__section"], [1, "dashboard__heading"], [1, "panel-body"], ["id", "login-form", 1, "example-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username"], ["required", "", "type", "text", "formControlName", "username", "name", "username", 1, "form-control"], [4, "ngIf"], ["for", "password"], ["required", "", "type", "password", "formControlName", "password", "name", "password", 1, "form-control"], ["type", "submit", "id", "Login", "title", "Login", 1, "btn", "btn-success"]], template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "h2");
        i0.ɵɵtext(7, "Logowanie u\u017Cytkownika");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 2);
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵelementStart(12, "h3");
        i0.ɵɵtext(13, "Wprowad\u017A dane");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 8);
        i0.ɵɵelementStart(15, "form", 9);
        i0.ɵɵlistener("ngSubmit", function UserLoginComponent_Template_form_ngSubmit_15_listener() { return ctx.login(); });
        i0.ɵɵelementStart(16, "div", 10);
        i0.ɵɵelementStart(17, "label", 11);
        i0.ɵɵtext(18, "Nazwa klienta");
        i0.ɵɵelementStart(19, "sup");
        i0.ɵɵtext(20, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "input", 12);
        i0.ɵɵtemplate(22, UserLoginComponent_div_22_Template, 2, 0, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 10);
        i0.ɵɵelementStart(24, "label", 14);
        i0.ɵɵtext(25, "Has\u0142o");
        i0.ɵɵelementStart(26, "sup");
        i0.ɵɵtext(27, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(28, "input", 15);
        i0.ɵɵtemplate(29, UserLoginComponent_div_29_Template, 2, 0, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div", 10);
        i0.ɵɵelementStart(31, "button", 16);
        i0.ɵɵtext(32, "Login");
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
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("formGroup", ctx.loginForm);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.isFieldInvalid("username"));
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.isFieldInvalid("password"));
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.RequiredValidator, i1.NgControlStatus, i1.FormControlName, i5.NgIf], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  -webkit-text-size-adjust: 100%;\n  \n  -ms-text-size-adjust: 100%;\n  \n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n  \n  -ms-interpolation-mode: bicubic;\n  \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0;\n  \n  padding: 0;\n  white-space: normal;\n  \n  *margin-left: -7px;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  margin: 0;\n  \n  vertical-align: baseline;\n  \n  *vertical-align: middle;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n  \n  cursor: pointer;\n  \n  *overflow: visible;\n  \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  \n  padding: 0;\n  \n  *height: 13px;\n  \n  *width: 13px;\n  \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;\n  \n  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n  vertical-align: top;\n  \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-height: 100vh;\n}\n.app[_ngcontent-%COMP%]   .app__page[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fafafa;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.38);\n  text-transform: uppercase;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n.form-group[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  margin-top: 1rem;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\ninput[_ngcontent-%COMP%]:active {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\n.dashboard[_ngcontent-%COMP%] {\n  margin: 3rem 5rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading.dashboard__heading--mail[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section[_ngcontent-%COMP%] {\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #a4bfdd, inset 0 0 10px #c8ced5;\n  padding: 2rem 1rem;\n  margin-top: 2rem;\n  border-radius: 0.25rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section.dashboard__section--small[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  -webkit-text-size-adjust: 100%;\n  \n  -ms-text-size-adjust: 100%;\n  \n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n  \n  -ms-interpolation-mode: bicubic;\n  \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0;\n  \n  padding: 0;\n  white-space: normal;\n  \n  *margin-left: -7px;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  margin: 0;\n  \n  vertical-align: baseline;\n  \n  *vertical-align: middle;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n  \n  cursor: pointer;\n  \n  *overflow: visible;\n  \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  \n  padding: 0;\n  \n  *height: 13px;\n  \n  *width: 13px;\n  \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;\n  \n  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n  vertical-align: top;\n  \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-height: 100vh;\n}\n.app[_ngcontent-%COMP%]   .app__page[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fafafa;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.38);\n  text-transform: uppercase;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n.form-group[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  margin-top: 1rem;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\ninput[_ngcontent-%COMP%]:active {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\n.content[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 10%;\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #a4bfdd, inset 0 0 10px #c8ced5;\n}\ninput[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL3Jlc2V0LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2hhcmVkLXNjc3MvYXBwLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQtc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL2Rhc2hib2FyZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkksU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0FKO0FESUEseURBQUE7QUFFQTtFQUNJLFVBQUE7QUNGSjtBRE1BLGdEQUFBO0FBRUE7Ozs7Ozs7Ozs7O0VBV0ksY0FBQTtBQ0pKO0FET0E7RUFDSSxjQUFBO0FDSko7QURPQTs7RUFFSSxnQkFBQTtBQ0pKO0FET0E7O0VBRUksWUFBQTtBQ0pKO0FET0E7Ozs7RUFJSSxXQUFBO0VBQ0EsYUFBQTtBQ0pKO0FET0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDSko7QURPQTs7OztFQUlJLHdCQUFBO0VBQ0EscUJBQUE7QUNKSjtBRE9BO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUdBLHVCQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSko7QURRQTs7RUFBQTtBQUlBOzs7RUFHSSxxQkFBQTtHQ05GLGVET0U7R0NORixPRE9FO0VBQ0EsZUFBQTtBQ05KO0FEVUE7OztFQUFBO0FBS0E7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQ1JKO0FEWUE7OztFQUFBO0FBS0E7RUFDSSxhQUFBO0FDVko7QURj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RUFLSSxXQUFBO0FDNGNKO0FEcmNBO0VBQ0ksaUJBQUE7QUM0Y0o7QUR6Y0E7RUFDSSxzQkFBQTtBQzRjSjtBRHpjQTtFQUNJLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQzRjSjtBRHpjQTtFQUNJLGdCQUFBO0FDNGNKO0FEemNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDNGNKO0FDeDdCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEMjdCSjtBQzE3Qkk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUQ0N0JSO0FDeDdCQTtFQUNJLGlCQ0pXO0VES1gsMEJDSWE7QUZ1N0JqQjtBQ3g3QkE7RUFDSSxlQ1hXO0VEWVgsMEJBQUE7RUFDQSx5QkFBQTtBRDI3Qko7QUN4N0JBO0VBQ0ksaUJDbEJXO0VEbUJYLDBCQ1BhO0FGazhCakI7QUN4N0JBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBRDI3Qko7QUN4N0JBO0VBQ0ksZ0JBQUE7QUQyN0JKO0FDajdCSTtFQU5BLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0FEMjdCSjtBQ3A3Qkk7RUFUQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBRGc4Qko7QUFyK0JBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSwyRkVOUTtBRjgrQlo7QUFyK0JBO0VBQ0ksYUFBQTtBQXcrQkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXJzL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXHJcbiAgIHYyLjAtbW9kaWZpZWQgfCAyMDExMDEyNlxyXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxyXG4qL1xyXG5cclxuaHRtbCxcclxuYm9keSxcclxuZGl2LFxyXG5zcGFuLFxyXG5hcHBsZXQsXHJcbm9iamVjdCxcclxuaWZyYW1lLFxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG5wLFxyXG5ibG9ja3F1b3RlLFxyXG5wcmUsXHJcbmEsXHJcbmFiYnIsXHJcbmFjcm9ueW0sXHJcbmFkZHJlc3MsXHJcbmJpZyxcclxuY2l0ZSxcclxuY29kZSxcclxuZGVsLFxyXG5kZm4sXHJcbmVtLFxyXG5pbWcsXHJcbmlucyxcclxua2JkLFxyXG5xLFxyXG5zLFxyXG5zYW1wLFxyXG5zbWFsbCxcclxuc3RyaWtlLFxyXG5zdHJvbmcsXHJcbnN1Yixcclxuc3VwLFxyXG50dCxcclxudmFyLFxyXG5iLFxyXG51LFxyXG5pLFxyXG5jZW50ZXIsXHJcbmRsLFxyXG5kdCxcclxuZGQsXHJcbm9sLFxyXG51bCxcclxubGksXHJcbmZpZWxkc2V0LFxyXG5mb3JtLFxyXG5sYWJlbCxcclxubGVnZW5kLFxyXG50YWJsZSxcclxuY2FwdGlvbixcclxudGJvZHksXHJcbnRmb290LFxyXG50aGVhZCxcclxudHIsXHJcbnRoLFxyXG50ZCxcclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmNhbnZhcyxcclxuZGV0YWlscyxcclxuZW1iZWQsXHJcbmZpZ3VyZSxcclxuZmlnY2FwdGlvbixcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5vdXRwdXQsXHJcbnJ1YnksXHJcbnNlY3Rpb24sXHJcbnN1bW1hcnksXHJcbnRpbWUsXHJcbm1hcmssXHJcbmF1ZGlvLFxyXG52aWRlbyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuXHJcbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cclxuXHJcbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmRldGFpbHMsXHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5vbCxcclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSxcclxucSB7XHJcbiAgICBxdW90ZXM6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGU6YmVmb3JlLFxyXG5ibG9ja3F1b3RlOmFmdGVyLFxyXG5xOmJlZm9yZSxcclxucTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cclxuICovXHJcblxyXG5hdWRpbyxcclxuY2FudmFzLFxyXG52aWRlbyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAqZGlzcGxheTogaW5saW5lO1xyXG4gICAgKnpvb206IDE7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cclxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cclxuICovXHJcblxyXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgNy84LzksIEZpcmVmb3ggMywgYW5kIFNhZmFyaSA0LlxyXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxyXG4gKi9cclxuXHJcbltoaWRkZW5dIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXHJcbiAqICAgIGBlbWAgdW5pdHMuXHJcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xyXG4gKiAgICB1c2VyIHpvb20uXHJcbiAqL1xyXG5cclxuaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAvKiAxICovXHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAvKiAyICovXHJcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgIC8qIDIgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cclxuICovXHJcblxyXG5hOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IHRoaW4gZG90dGVkO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmE6YWN0aXZlLFxyXG5hOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXHJcbiAqIDIuIEltcHJvdmUgaW1hZ2UgcXVhbGl0eSB3aGVuIHNjYWxlZCBpbiBJRSA3LlxyXG4gKi9cclxuXHJcbmltZyB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAvKiAxICovXHJcbiAgICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljO1xyXG4gICAgLyogMiAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXHJcbiAqL1xyXG5cclxuZmlndXJlIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxyXG4gKi9cclxuXHJcbmZvcm0ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cclxuICovXHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cclxuICogMi4gQ29ycmVjdCB0ZXh0IG5vdCB3cmFwcGluZyBpbiBGaXJlZm94IDMuXHJcbiAqIDMuIENvcnJlY3QgYWxpZ25tZW50IGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXHJcbiAqL1xyXG5cclxubGVnZW5kIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIC8qIDEgKi9cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgLyogMiAqL1xyXG4gICAgKm1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gICAgLyogMyAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgZm9udCBzaXplIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXHJcbiAqICAgIGFuZCBDaHJvbWUuXHJcbiAqIDMuIEltcHJvdmUgYXBwZWFyYW5jZSBhbmQgY29uc2lzdGVuY3kgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgLyogMSAqL1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLyogMiAqL1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgLyogMyAqL1xyXG4gICAgKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAvKiAzICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBGaXJlZm94IDMrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxyXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmlucHV0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxyXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxyXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXHJcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5zZWxlY3Qge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcclxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXHJcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cclxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcclxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxyXG4gKiA0LiBSZW1vdmUgaW5uZXIgc3BhY2luZyBpbiBJRSA3IHdpdGhvdXQgYWZmZWN0aW5nIG5vcm1hbCB0ZXh0IGlucHV0cy5cclxuICogICAgS25vd24gaXNzdWU6IGlubmVyIHNwYWNpbmcgcmVtYWlucyBpbiBJRSA2LlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxyXG5cclxuLyogMSAqL1xyXG5cclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG4gICAgLyogMiAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLyogMyAqL1xyXG4gICAgKm92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgLyogNCAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXHJcbiAqL1xyXG5cclxuYnV0dG9uW2Rpc2FibGVkXSxcclxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxyXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxyXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cclxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8qIDIgKi9cclxuICAgICpoZWlnaHQ6IDEzcHg7XHJcbiAgICAvKiAzICovXHJcbiAgICAqd2lkdGg6IDEzcHg7XHJcbiAgICAvKiAzICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cclxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXHJcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxyXG4gKi9cclxuXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgICAvKiAxICovXHJcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIC8qIDIgKi9cclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXHJcbiAqIG9uIE9TIFguXHJcbiAqL1xyXG5cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxyXG4gKi9cclxuXHJcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcclxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cclxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC8qIDEgKi9cclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvKiAyICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxyXG4gKi9cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuaHRtbCxcclxuYnV0dG9uLFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuOjpzZWxlY3Rpb24ge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4uY2hyb21lZnJhbWUge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMDtcclxufVxyXG4iLCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuICAgdjIuMC1tb2RpZmllZCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogbWFrZSBzdXJlIHRvIHNldCBzb21lIGZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xuOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxuICovXG5hdWRpbyxcbmNhbnZhcyxcbnZpZGVvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAqZGlzcGxheTogaW5saW5lO1xuICAqem9vbTogMTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxuICovXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qKlxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cbiAqIEtub3duIGlzc3VlOiBubyBJRSA2IHN1cHBvcnQuXG4gKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRleHQgcmVzaXppbmcgb2RkbHkgaW4gSUUgNi83IHdoZW4gYm9keSBgZm9udC1zaXplYCBpcyBzZXQgdXNpbmdcbiAqICAgIGBlbWAgdW5pdHMuXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcbiAqICAgIHVzZXIgem9vbS5cbiAqL1xuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cbiAqL1xuYTpmb2N1cyB7XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xufVxuXG4vKipcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5hOmFjdGl2ZSxcbmE6aG92ZXIge1xuICBvdXRsaW5lOiAwO1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXG4gKi9cbmltZyB7XG4gIGJvcmRlcjogMDtcbiAgLyogMSAqL1xuICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cbiAqL1xuZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIENvcnJlY3QgbWFyZ2luIGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXG4gKi9cbmZvcm0ge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxuICovXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gIG1hcmdpbjogMCAycHg7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cbiAqIDIuIENvcnJlY3QgdGV4dCBub3Qgd3JhcHBpbmcgaW4gRmlyZWZveCAzLlxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cbiAqL1xubGVnZW5kIHtcbiAgYm9yZGVyOiAwO1xuICAvKiAxICovXG4gIHBhZGRpbmc6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIC8qIDIgKi9cbiAgKm1hcmdpbi1sZWZ0OiAtN3B4O1xuICAvKiAzICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXG4gKiAgICBhbmQgQ2hyb21lLlxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LXNpemU6IDEwMCU7XG4gIC8qIDEgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiAyICovXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgLyogMyAqL1xuICAqdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLyogMyAqL1xufVxuXG4vKipcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxuICovXG5idXR0b24sXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8qKlxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXG4gKi9cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXG4gKiA0LiBSZW1vdmUgaW5uZXIgc3BhY2luZyBpbiBJRSA3IHdpdGhvdXQgYWZmZWN0aW5nIG5vcm1hbCB0ZXh0IGlucHV0cy5cbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cbiAqL1xuYnV0dG9uLFxuaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sXG5pbnB1dFt0eXBlPXJlc2V0XSxcbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICAvKiAyICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogMyAqL1xuICAqb3ZlcmZsb3c6IHZpc2libGU7XG4gIC8qIDQgKi9cbn1cblxuLyoqXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxuICovXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qKlxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxuICogMy4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDcuXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxuICovXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICAvKiAyICovXG4gICpoZWlnaHQ6IDEzcHg7XG4gIC8qIDMgKi9cbiAgKndpZHRoOiAxM3B4O1xuICAvKiAzICovXG59XG5cbi8qKlxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXG4gKi9cbmlucHV0W3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAvKiAxICovXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC8qIDIgKi9cbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi8qKlxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcbiAqIG9uIE9TIFguXG4gKi9cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggMysuXG4gKi9cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA2LzcvOC85LlxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cbiAqL1xudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxuICovXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5odG1sLFxuYnV0dG9uLFxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLmNocm9tZWZyYW1lIHtcbiAgbWFyZ2luOiAwLjJlbSAwO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMC4yZW0gMDtcbn1cblxuLmFwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmFwcCAuYXBwX19wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogMDtcbn1cbmlucHV0OmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiAwO1xufVxuXG4uZGFzaGJvYXJkIHtcbiAgbWFyZ2luOiAzcmVtIDVyZW07XG59XG4uZGFzaGJvYXJkIC5kYXNoYm9hcmRfX2hlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmRhc2hib2FyZCAuZGFzaGJvYXJkX19oZWFkaW5nLmRhc2hib2FyZF9faGVhZGluZy0tbWFpbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZGFzaGJvYXJkIC5kYXNoYm9hcmRfX3NlY3Rpb24ge1xuICBib3gtc2hhZG93OiBpbnNldCAtMTBweCAtMTBweCAxMDBweCAjYzhjZWQ1LCAxMHB4IDEwcHggMjBweCAjYTRiZmRkLCBpbnNldCAwIDAgMTBweCAjYzhjZWQ1O1xuICBwYWRkaW5nOiAycmVtIDFyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4uZGFzaGJvYXJkIC5kYXNoYm9hcmRfX3NlY3Rpb24uZGFzaGJvYXJkX19zZWN0aW9uLS1zbWFsbCB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cbiAgIHYyLjAtbW9kaWZpZWQgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qKlxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cbiAqL1xuYXVkaW8sXG5jYW52YXMsXG52aWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgKnpvb206IDE7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cbiAqL1xuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKipcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxuICovXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXG4gKiAgICBgZW1gIHVuaXRzLlxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXG4gKiAgICB1c2VyIHpvb20uXG4gKi9cbmh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG4gIC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKiAyICovXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXG4gKi9cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcbn1cblxuLyoqXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cbiAqL1xuYTphY3RpdmUsXG5hOmhvdmVyIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cbiAqIDIuIEltcHJvdmUgaW1hZ2UgcXVhbGl0eSB3aGVuIHNjYWxlZCBpbiBJRSA3LlxuICovXG5pbWcge1xuICBib3JkZXI6IDA7XG4gIC8qIDEgKi9cbiAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYztcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXG4gKi9cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxuICovXG5mb3JtIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cbiAqL1xuZmllbGRzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICBtYXJnaW46IDAgMnB4O1xuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDYvNy84LzkuXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cbiAqIDMuIENvcnJlY3QgYWxpZ25tZW50IGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXG4gKi9cbmxlZ2VuZCB7XG4gIGJvcmRlcjogMDtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAvKiAyICovXG4gICptYXJnaW4tbGVmdDogLTdweDtcbiAgLyogMyAqL1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgZm9udCBzaXplIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxuICogICAgYW5kIENocm9tZS5cbiAqIDMuIEltcHJvdmUgYXBwZWFyYW5jZSBhbmQgY29uc2lzdGVuY3kgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICAvKiAxICovXG4gIG1hcmdpbjogMDtcbiAgLyogMiAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIC8qIDMgKi9cbiAgKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC8qIDMgKi9cbn1cblxuLyoqXG4gKiBBZGRyZXNzIEZpcmVmb3ggMysgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cbiAqL1xuYnV0dG9uLFxuaW5wdXQge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4vKipcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxuICovXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxuICogNC4gUmVtb3ZlIGlubmVyIHNwYWNpbmcgaW4gSUUgNyB3aXRob3V0IGFmZmVjdGluZyBub3JtYWwgdGV4dCBpbnB1dHMuXG4gKiAgICBLbm93biBpc3N1ZTogaW5uZXIgc3BhY2luZyByZW1haW5zIGluIElFIDYuXG4gKi9cbmJ1dHRvbixcbmh0bWwgaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1yZXNldF0sXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgLyogMiAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIDMgKi9cbiAgKm92ZXJmbG93OiB2aXNpYmxlO1xuICAvKiA0ICovXG59XG5cbi8qKlxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cbiAqL1xuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKipcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cbiAqIDMuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA3LlxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cbiAqL1xuaW5wdXRbdHlwZT1jaGVja2JveF0sXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMiAqL1xuICAqaGVpZ2h0OiAxM3B4O1xuICAvKiAzICovXG4gICp3aWR0aDogMTNweDtcbiAgLyogMyAqL1xufVxuXG4vKipcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxuICovXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgLyogMSAqL1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAvKiAyICovXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4vKipcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXG4gKiBvbiBPUyBYLlxuICovXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxuICovXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cbiAqIDIuIEltcHJvdmUgcmVhZGFiaWxpdHkgYW5kIGFsaWdubWVudCBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cbiAqL1xudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaHRtbCxcbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBjb2xvcjogIzIyMjtcbn1cblxuOjotbW96LXNlbGVjdGlvbiB7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5jaHJvbWVmcmFtZSB7XG4gIG1hcmdpbjogMC4yZW0gMDtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDAuMmVtIDA7XG59XG5cbi5hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5hcHAgLmFwcF9fcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG5pbnB1dDphY3RpdmUge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogMDtcbn1cblxuLmNvbnRlbnQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDEwJTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMTAwcHggI2M4Y2VkNSwgMTBweCAxMHB4IDIwcHggI2E0YmZkZCwgaW5zZXQgMCAwIDEwcHggI2M4Y2VkNTtcbn1cblxuaW5wdXQgLmZvcm0tY29udHJvbDpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG59IiwiQGltcG9ydCBcIi4vcmVzZXQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uYXBwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAuYXBwX19wYWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteGw7XHJcbiAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbWQ7XHJcbiAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XHJcbiAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuQG1peGluIG91dGxpbmUtLW5vbmUge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgQGluY2x1ZGUgb3V0bGluZS0tbm9uZTtcclxuICAgIH1cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBAaW5jbHVkZSBvdXRsaW5lLS1ub25lO1xyXG4gICAgfVxyXG59XHJcbiIsIiRib3hTaGFkb3c6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsXHJcbjEwcHggMTBweCAyMHB4ICNhNGJmZGQsXHJcbmluc2V0IDAgMCAxMHB4ICNjOGNlZDU7XHJcbiRib3JkZXI6IDFweCAjMjIyIHNvbGlkO1xyXG4kZm9udC1zaXplLXh4czogLjYyNXJlbTtcclxuJGZvbnQtc2l6ZS14czogLjc1cmVtO1xyXG4kZm9udC1zaXplLXNtOiAuOXJlbTtcclxuJGZvbnQtc2l6ZS1tZDogMXJlbTtcclxuJGZvbnQtc2l6ZS1sZzogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS14bDogMS41cmVtO1xyXG4kZm9udC1zaXplLXh4bDogMnJlbTtcclxuJGNvbG9yLXJlZDogI0ZGMDAwMDtcclxuJGNvbG9yLWdyZWVuLTE1OiAjMDA0ZDFhO1xyXG4kY29sb3ItZ3JheS05MDogI2JiYmJiYTtcclxuJGNvbG9yLWdyYXktMjU6ICM0ZDRkMzM7XHJcbiRjb2xvci1ncmVlbi01NTogIzUzYzY1MztcclxuJHdoaXRlOiAjZmZmO1xyXG4kZGFyazogcmdiYSgjMDAwLCAuODcpO1xyXG4kZGFyay1zZWNvbmRhcnk6IHJnYmEoIzAwMCwgLjU0KTtcclxuJGRhcmstZGlzYWJsZWQ6IHJnYmEoIzAwMCwgLjM4KTtcclxuIiwiQGltcG9ydCBcIi4vYXBwLnNjc3NcIjtcclxuLmRhc2hib2FyZCB7XHJcbiAgICBtYXJnaW46IDNyZW0gNXJlbTtcclxuICAgIC5kYXNoYm9hcmRfX2hlYWRpbmcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgJi5kYXNoYm9hcmRfX2hlYWRpbmctLW1haWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kYXNoYm9hcmRfX3NlY3Rpb24ge1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRib3hTaGFkb3c7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgICAgICYuZGFzaGJvYXJkX19zZWN0aW9uLS1zbWFsbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserLoginComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-user-login',
                templateUrl: './user-login.component.html',
                styleUrls: ['./user-login.component.scss'],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.LoggerService }, { type: i3.UserSharedService }, { type: i4.AuthService }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/users/user-profile/user-profile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/users/user-profile/user-profile.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! ../../core/authentication/auth/auth.service */ "./src/app/modules/core/authentication/auth/auth.service.ts");
const i2 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
function UserProfileComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 13);
    i0.ɵɵelementStart(1, "td", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 14);
    i0.ɵɵelementStart(4, "button", 15);
    i0.ɵɵlistener("click", function UserProfileComponent_tr_26_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.authService.loginOut(); });
    i0.ɵɵtext(5, "Wyloguj si\u0119");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const profil_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(profil_r1._id);
} }
const _c0 = function () { return []; };
class UserProfileComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() { }
}
exports.UserProfileComponent = UserProfileComponent;
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(i0.ɵɵdirectiveInject(i1.AuthService)); };
UserProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 27, vars: 2, consts: [[1, "dashboard"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "dashboard__section", "dashboard__section--small"], [1, "dashboard__heading", "dashboard__heading--mail"], [1, "dashboard__section"], [1, "dashboard__heading"], [1, "table"], [1, "table__thead"], [1, "table__th"], [1, "table__tbody"], ["class", "table__tr", 4, "ngFor", "ngForOf"], [1, "table__tr"], [1, "table__td"], [3, "click"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "h2");
        i0.ɵɵtext(7, "Profil");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 2);
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵelementStart(12, "h3");
        i0.ɵɵtext(13, "Lista og\u0142osze\u0144");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "table", 8);
        i0.ɵɵelement(15, "thead", 9);
        i0.ɵɵelementStart(16, "tr");
        i0.ɵɵelementStart(17, "th", 10);
        i0.ɵɵtext(18, "#");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "th", 10);
        i0.ɵɵtext(20, "Nazwa");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "th", 10);
        i0.ɵɵtext(22, "Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "th", 10);
        i0.ɵɵtext(24, "Typ u\u017Cytkownika");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "tbody", 11);
        i0.ɵɵtemplate(26, UserProfileComponent_tr_26_Template, 6, 1, "tr", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(26);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction0(1, _c0));
    } }, directives: [i2.NgForOf], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  -webkit-text-size-adjust: 100%;\n  \n  -ms-text-size-adjust: 100%;\n  \n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n  \n  -ms-interpolation-mode: bicubic;\n  \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0;\n  \n  padding: 0;\n  white-space: normal;\n  \n  *margin-left: -7px;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  margin: 0;\n  \n  vertical-align: baseline;\n  \n  *vertical-align: middle;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n  \n  cursor: pointer;\n  \n  *overflow: visible;\n  \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  \n  padding: 0;\n  \n  *height: 13px;\n  \n  *width: 13px;\n  \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;\n  \n  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n  vertical-align: top;\n  \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-height: 100vh;\n}\n.app[_ngcontent-%COMP%]   .app__page[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fafafa;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.38);\n  text-transform: uppercase;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n.form-group[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  margin-top: 1rem;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\ninput[_ngcontent-%COMP%]:active {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\n.dashboard[_ngcontent-%COMP%] {\n  margin: 3rem 5rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading.dashboard__heading--mail[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section[_ngcontent-%COMP%] {\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #a4bfdd, inset 0 0 10px #c8ced5;\n  padding: 2rem 1rem;\n  margin-top: 2rem;\n  border-radius: 0.25rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section.dashboard__section--small[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table[_ngcontent-%COMP%]   .table__tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid grey;\n}\n.table[_ngcontent-%COMP%]   .table__tr[_ngcontent-%COMP%]:nth-of-type(even) {\n  background: lightgrey;\n}\n.table[_ngcontent-%COMP%]   .table__td[_ngcontent-%COMP%] {\n  padding: 0 0.25rem;\n  height: 3.5rem;\n  vertical-align: middle;\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL3Jlc2V0LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL2FwcC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2hhcmVkLXNjc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQtc2Nzcy9kYXNoYm9hcmQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL2NvbXBvbmVudHMvdGFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0NBQUE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNBSjtBRElBLHlEQUFBO0FBRUE7RUFDSSxVQUFBO0FDRko7QURNQSxnREFBQTtBQUVBOzs7Ozs7Ozs7OztFQVdJLGNBQUE7QUNKSjtBRE9BO0VBQ0ksY0FBQTtBQ0pKO0FET0E7O0VBRUksZ0JBQUE7QUNKSjtBRE9BOztFQUVJLFlBQUE7QUNKSjtBRE9BOzs7O0VBSUksV0FBQTtFQUNBLGFBQUE7QUNKSjtBRE9BO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQ0pKO0FET0E7Ozs7RUFJSSx3QkFBQTtFQUNBLHFCQUFBO0FDSko7QURPQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFHQSx1QkFBQTtBQ0pKO0FET0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0pKO0FEUUE7O0VBQUE7QUFJQTs7O0VBR0kscUJBQUE7R0NORixlRE9FO0dDTkYsT0RPRTtFQUNBLGVBQUE7QUNOSjtBRFVBOzs7RUFBQTtBQUtBO0VBQ0ks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QTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUg0ZVI7QUczZVE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FINmVaO0FJN2ZBO0VBQ0ksV0FBQTtBSmdnQko7QUkvZkk7RUFDSSw2QkFBQTtBSmlnQlI7QUloZ0JRO0VBQ0kscUJBQUE7QUprZ0JaO0FJL2ZJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkZOTztFRU9QLDBCRktTO0FGNGZqQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXHJcbiAgIHYyLjAtbW9kaWZpZWQgfCAyMDExMDEyNlxyXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxyXG4qL1xyXG5cclxuaHRtbCxcclxuYm9keSxcclxuZGl2LFxyXG5zcGFuLFxyXG5hcHBsZXQsXHJcbm9iamVjdCxcclxuaWZyYW1lLFxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG5wLFxyXG5ibG9ja3F1b3RlLFxyXG5wcmUsXHJcbmEsXHJcbmFiYnIsXHJcbmFjcm9ueW0sXHJcbmFkZHJlc3MsXHJcbmJpZyxcclxuY2l0ZSxcclxuY29kZSxcclxuZGVsLFxyXG5kZm4sXHJcbmVtLFxyXG5pbWcsXHJcbmlucyxcclxua2JkLFxyXG5xLFxyXG5zLFxyXG5zYW1wLFxyXG5zbWFsbCxcclxuc3RyaWtlLFxyXG5zdHJvbmcsXHJcbnN1Yixcclxuc3VwLFxyXG50dCxcclxudmFyLFxyXG5iLFxyXG51LFxyXG5pLFxyXG5jZW50ZXIsXHJcbmRsLFxyXG5kdCxcclxuZGQsXHJcbm9sLFxyXG51bCxcclxubGksXHJcbmZpZWxkc2V0LFxyXG5mb3JtLFxyXG5sYWJlbCxcclxubGVnZW5kLFxyXG50YWJsZSxcclxuY2FwdGlvbixcclxudGJvZHksXHJcbnRmb290LFxyXG50aGVhZCxcclxudHIsXHJcbnRoLFxyXG50ZCxcclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmNhbnZhcyxcclxuZGV0YWlscyxcclxuZW1iZWQsXHJcbmZpZ3VyZSxcclxuZmlnY2FwdGlvbixcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5vdXRwdXQsXHJcbnJ1YnksXHJcbnNlY3Rpb24sXHJcbnN1bW1hcnksXHJcbnRpbWUsXHJcbm1hcmssXHJcbmF1ZGlvLFxyXG52aWRlbyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuXHJcbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cclxuXHJcbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmRldGFpbHMsXHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5vbCxcclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSxcclxucSB7XHJcbiAgICBxdW90ZXM6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGU6YmVmb3JlLFxyXG5ibG9ja3F1b3RlOmFmdGVyLFxyXG5xOmJlZm9yZSxcclxucTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cclxuICovXHJcblxyXG5hdWRpbyxcclxuY2FudmFzLFxyXG52aWRlbyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAqZGlzcGxheTogaW5saW5lO1xyXG4gICAgKnpvb206IDE7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cclxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cclxuICovXHJcblxyXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgNy84LzksIEZpcmVmb3ggMywgYW5kIFNhZmFyaSA0LlxyXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxyXG4gKi9cclxuXHJcbltoaWRkZW5dIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXHJcbiAqICAgIGBlbWAgdW5pdHMuXHJcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xyXG4gKiAgICB1c2VyIHpvb20uXHJcbiAqL1xyXG5cclxuaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAvKiAxICovXHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAvKiAyICovXHJcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgIC8qIDIgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cclxuICovXHJcblxyXG5hOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IHRoaW4gZG90dGVkO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmE6YWN0aXZlLFxyXG5hOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXHJcbiAqIDIuIEltcHJvdmUgaW1hZ2UgcXVhbGl0eSB3aGVuIHNjYWxlZCBpbiBJRSA3LlxyXG4gKi9cclxuXHJcbmltZyB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAvKiAxICovXHJcbiAgICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljO1xyXG4gICAgLyogMiAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXHJcbiAqL1xyXG5cclxuZmlndXJlIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxyXG4gKi9cclxuXHJcbmZvcm0ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cclxuICovXHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cclxuICogMi4gQ29ycmVjdCB0ZXh0IG5vdCB3cmFwcGluZyBpbiBGaXJlZm94IDMuXHJcbiAqIDMuIENvcnJlY3QgYWxpZ25tZW50IGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXHJcbiAqL1xyXG5cclxubGVnZW5kIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIC8qIDEgKi9cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgLyogMiAqL1xyXG4gICAgKm1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gICAgLyogMyAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgZm9udCBzaXplIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXHJcbiAqICAgIGFuZCBDaHJvbWUuXHJcbiAqIDMuIEltcHJvdmUgYXBwZWFyYW5jZSBhbmQgY29uc2lzdGVuY3kgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgLyogMSAqL1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLyogMiAqL1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgLyogMyAqL1xyXG4gICAgKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAvKiAzICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBGaXJlZm94IDMrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxyXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmlucHV0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxyXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxyXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXHJcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5zZWxlY3Qge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcclxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXHJcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cclxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcclxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxyXG4gKiA0LiBSZW1vdmUgaW5uZXIgc3BhY2luZyBpbiBJRSA3IHdpdGhvdXQgYWZmZWN0aW5nIG5vcm1hbCB0ZXh0IGlucHV0cy5cclxuICogICAgS25vd24gaXNzdWU6IGlubmVyIHNwYWNpbmcgcmVtYWlucyBpbiBJRSA2LlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxyXG5cclxuLyogMSAqL1xyXG5cclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG4gICAgLyogMiAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLyogMyAqL1xyXG4gICAgKm92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgLyogNCAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXHJcbiAqL1xyXG5cclxuYnV0dG9uW2Rpc2FibGVkXSxcclxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxyXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxyXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cclxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8qIDIgKi9cclxuICAgICpoZWlnaHQ6IDEzcHg7XHJcbiAgICAvKiAzICovXHJcbiAgICAqd2lkdGg6IDEzcHg7XHJcbiAgICAvKiAzICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cclxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXHJcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxyXG4gKi9cclxuXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgICAvKiAxICovXHJcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIC8qIDIgKi9cclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXHJcbiAqIG9uIE9TIFguXHJcbiAqL1xyXG5cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxyXG4gKi9cclxuXHJcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcclxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cclxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC8qIDEgKi9cclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvKiAyICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxyXG4gKi9cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuaHRtbCxcclxuYnV0dG9uLFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuOjpzZWxlY3Rpb24ge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4uY2hyb21lZnJhbWUge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMDtcclxufVxyXG4iLCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuICAgdjIuMC1tb2RpZmllZCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogbWFrZSBzdXJlIHRvIHNldCBzb21lIGZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xuOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxuICovXG5hdWRpbyxcbmNhbnZhcyxcbnZpZGVvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAqZGlzcGxheTogaW5saW5lO1xuICAqem9vbTogMTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxuICovXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qKlxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cbiAqIEtub3duIGlzc3VlOiBubyBJRSA2IHN1cHBvcnQuXG4gKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRleHQgcmVzaXppbmcgb2RkbHkgaW4gSUUgNi83IHdoZW4gYm9keSBgZm9udC1zaXplYCBpcyBzZXQgdXNpbmdcbiAqICAgIGBlbWAgdW5pdHMuXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcbiAqICAgIHVzZXIgem9vbS5cbiAqL1xuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cbiAqL1xuYTpmb2N1cyB7XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xufVxuXG4vKipcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5hOmFjdGl2ZSxcbmE6aG92ZXIge1xuICBvdXRsaW5lOiAwO1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXG4gKi9cbmltZyB7XG4gIGJvcmRlcjogMDtcbiAgLyogMSAqL1xuICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cbiAqL1xuZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIENvcnJlY3QgbWFyZ2luIGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXG4gKi9cbmZvcm0ge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxuICovXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gIG1hcmdpbjogMCAycHg7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cbiAqIDIuIENvcnJlY3QgdGV4dCBub3Qgd3JhcHBpbmcgaW4gRmlyZWZveCAzLlxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cbiAqL1xubGVnZW5kIHtcbiAgYm9yZGVyOiAwO1xuICAvKiAxICovXG4gIHBhZGRpbmc6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIC8qIDIgKi9cbiAgKm1hcmdpbi1sZWZ0OiAtN3B4O1xuICAvKiAzICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXG4gKiAgICBhbmQgQ2hyb21lLlxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LXNpemU6IDEwMCU7XG4gIC8qIDEgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiAyICovXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgLyogMyAqL1xuICAqdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLyogMyAqL1xufVxuXG4vKipcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxuICovXG5idXR0b24sXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8qKlxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXG4gKi9cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXG4gKiA0LiBSZW1vdmUgaW5uZXIgc3BhY2luZyBpbiBJRSA3IHdpdGhvdXQgYWZmZWN0aW5nIG5vcm1hbCB0ZXh0IGlucHV0cy5cbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cbiAqL1xuYnV0dG9uLFxuaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sXG5pbnB1dFt0eXBlPXJlc2V0XSxcbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICAvKiAyICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogMyAqL1xuICAqb3ZlcmZsb3c6IHZpc2libGU7XG4gIC8qIDQgKi9cbn1cblxuLyoqXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxuICovXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qKlxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxuICogMy4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDcuXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxuICovXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICAvKiAyICovXG4gICpoZWlnaHQ6IDEzcHg7XG4gIC8qIDMgKi9cbiAgKndpZHRoOiAxM3B4O1xuICAvKiAzICovXG59XG5cbi8qKlxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXG4gKi9cbmlucHV0W3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAvKiAxICovXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC8qIDIgKi9cbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi8qKlxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcbiAqIG9uIE9TIFguXG4gKi9cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggMysuXG4gKi9cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA2LzcvOC85LlxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cbiAqL1xudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxuICovXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5odG1sLFxuYnV0dG9uLFxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLmNocm9tZWZyYW1lIHtcbiAgbWFyZ2luOiAwLjJlbSAwO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMC4yZW0gMDtcbn1cblxuLmFwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmFwcCAuYXBwX19wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogMDtcbn1cbmlucHV0OmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiAwO1xufVxuXG4uZGFzaGJvYXJkIHtcbiAgbWFyZ2luOiAzcmVtIDVyZW07XG59XG4uZGFzaGJvYXJkIC5kYXNoYm9hcmRfX2hlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmRhc2hib2FyZCAuZGFzaGJvYXJkX19oZWFkaW5nLmRhc2hib2FyZF9faGVhZGluZy0tbWFpbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZGFzaGJvYXJkIC5kYXNoYm9hcmRfX3NlY3Rpb24ge1xuICBib3gtc2hhZG93OiBpbnNldCAtMTBweCAtMTBweCAxMDBweCAjYzhjZWQ1LCAxMHB4IDEwcHggMjBweCAjYTRiZmRkLCBpbnNldCAwIDAgMTBweCAjYzhjZWQ1O1xuICBwYWRkaW5nOiAycmVtIDFyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4uZGFzaGJvYXJkIC5kYXNoYm9hcmRfX3NlY3Rpb24uZGFzaGJvYXJkX19zZWN0aW9uLS1zbWFsbCB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGFibGUgLnRhYmxlX190ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xufVxuLnRhYmxlIC50YWJsZV9fdHI6bnRoLW9mLXR5cGUoZXZlbikge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG59XG4udGFibGUgLnRhYmxlX190ZCB7XG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn0iLCJAaW1wb3J0IFwiLi9yZXNldC5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5hcHAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIC5hcHBfX3BhZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14bDtcclxuICAgIGNvbG9yOiAkZGFyay1zZWNvbmRhcnk7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tZDtcclxuICAgIGNvbG9yOiAkZGFyay1kaXNhYmxlZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcclxuICAgIGNvbG9yOiAkZGFyay1zZWNvbmRhcnk7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gb3V0bGluZS0tbm9uZSB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBAaW5jbHVkZSBvdXRsaW5lLS1ub25lO1xyXG4gICAgfVxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIEBpbmNsdWRlIG91dGxpbmUtLW5vbmU7XHJcbiAgICB9XHJcbn1cclxuIiwiJGJveFNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMTAwcHggI2M4Y2VkNSxcclxuMTBweCAxMHB4IDIwcHggI2E0YmZkZCxcclxuaW5zZXQgMCAwIDEwcHggI2M4Y2VkNTtcclxuJGJvcmRlcjogMXB4ICMyMjIgc29saWQ7XHJcbiRmb250LXNpemUteHhzOiAuNjI1cmVtO1xyXG4kZm9udC1zaXplLXhzOiAuNzVyZW07XHJcbiRmb250LXNpemUtc206IC45cmVtO1xyXG4kZm9udC1zaXplLW1kOiAxcmVtO1xyXG4kZm9udC1zaXplLWxnOiAxLjI1cmVtO1xyXG4kZm9udC1zaXplLXhsOiAxLjVyZW07XHJcbiRmb250LXNpemUteHhsOiAycmVtO1xyXG4kY29sb3ItcmVkOiAjRkYwMDAwO1xyXG4kY29sb3ItZ3JlZW4tMTU6ICMwMDRkMWE7XHJcbiRjb2xvci1ncmF5LTkwOiAjYmJiYmJhO1xyXG4kY29sb3ItZ3JheS0yNTogIzRkNGQzMztcclxuJGNvbG9yLWdyZWVuLTU1OiAjNTNjNjUzO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRkYXJrOiByZ2JhKCMwMDAsIC44Nyk7XHJcbiRkYXJrLXNlY29uZGFyeTogcmdiYSgjMDAwLCAuNTQpO1xyXG4kZGFyay1kaXNhYmxlZDogcmdiYSgjMDAwLCAuMzgpO1xyXG4iLCJAaW1wb3J0IFwiLi9hcHAuc2Nzc1wiO1xyXG4uZGFzaGJvYXJkIHtcclxuICAgIG1hcmdpbjogM3JlbSA1cmVtO1xyXG4gICAgLmRhc2hib2FyZF9faGVhZGluZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAmLmRhc2hib2FyZF9faGVhZGluZy0tbWFpbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRhc2hib2FyZF9fc2VjdGlvbiB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogJGJveFNoYWRvdztcclxuICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICAgICAgJi5kYXNoYm9hcmRfX3NlY3Rpb24tLXNtYWxsIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAudGFibGVfX3RyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICAgICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWJsZV9fdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgLjI1cmVtO1xyXG4gICAgICAgIGhlaWdodDogMy41cmVtO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG4gICAgICAgIGNvbG9yOiAkZGFyay1zZWNvbmRhcnk7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserProfileComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.scss']
            }]
    }], function () { return [{ type: i1.AuthService }]; }, null); })();


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
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const i2 = __webpack_require__(/*! ../../../shared/shared-services/logger/logger.service */ "./src/app/shared/shared-services/logger/logger.service.ts");
const i3 = __webpack_require__(/*! ../../core/authentication/auth/auth.service */ "./src/app/modules/core/authentication/auth/auth.service.ts");
const i4 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const i5 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
function UserRegistrationComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Nazwa u\u017Cytkownika jest wymagana! ");
    i0.ɵɵelementEnd();
} }
function UserRegistrationComponent_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r5 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" D\u0142ugo\u015B\u0107 znak\u00F3w musi by\u0107 ", error_r5.requiredLength, ". Brakuje ", error_r5.requiredLength - error_r5.actualLength, " znaku/\u00F3w! ");
} }
function UserRegistrationComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, UserRegistrationComponent_div_22_div_1_Template, 2, 0, "div", 24);
    i0.ɵɵtemplate(2, UserRegistrationComponent_div_22_div_2_Template, 2, 2, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.registrationForm.get("username").hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.registrationForm.get("username").getError("minlength"));
} }
function UserRegistrationComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Has\u0142o u\u017Cytkownika jest wymagane! ");
    i0.ɵɵelementEnd();
} }
function UserRegistrationComponent_div_29_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " ma\u0142e litery");
    i0.ɵɵelementEnd();
} }
function UserRegistrationComponent_div_29_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " du\u017Ce litery");
    i0.ɵɵelementEnd();
} }
function UserRegistrationComponent_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Has\u0142o musi zawiera\u0107 ");
    i0.ɵɵtemplate(2, UserRegistrationComponent_div_29_div_2_span_2_Template, 2, 0, "span", 24);
    i0.ɵɵtemplate(3, UserRegistrationComponent_div_29_div_2_span_3_Template, 2, 0, "span", 24);
    i0.ɵɵtext(4, "! ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r7.f.password.errors.lowercase === false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.f.password.errors.uppercase === false);
} }
function UserRegistrationComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, UserRegistrationComponent_div_29_div_1_Template, 2, 0, "div", 24);
    i0.ɵɵtemplate(2, UserRegistrationComponent_div_29_div_2_Template, 5, 2, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.registrationForm.get("password").hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.f.errors);
} }
function UserRegistrationComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Email u\u017Cytkownika jest wymagany! ");
    i0.ɵɵelementEnd();
} }
function UserRegistrationComponent_div_36_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Adres email jest niepoprawny! ");
    i0.ɵɵelementEnd();
} }
function UserRegistrationComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, UserRegistrationComponent_div_36_div_1_Template, 2, 0, "div", 24);
    i0.ɵɵtemplate(2, UserRegistrationComponent_div_36_div_2_Template, 2, 0, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.registrationForm.get("email").hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.registrationForm.get("email").hasError("email"));
} }
class UserRegistrationComponent {
    constructor(fb, logger, authService, router) {
        this.fb = fb;
        this.logger = logger;
        this.authService = authService;
        this.router = router;
        this.CustomerType = user_1.CustomerType;
    }
    ngOnInit() {
        this.registrationForm = this.fb.group({
            username: this.fb.control('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            password: this.fb.control('', [
                forms_1.Validators.required,
                this.validatePassword
            ]),
            email: this.fb.control('', [forms_1.Validators.required, forms_1.Validators.email]),
            type: this.makeFormControl(),
        });
    }
    makeFormControl() {
        const cloned = new forms_1.FormControl('', [forms_1.Validators.required]);
        return cloned;
    }
    validatePassword(control) {
        const hasUppercase = control.value.match(/[A-Z]/);
        const hasLowercase = control.value.match(/[a-z]/);
        if (hasUppercase && hasLowercase) {
            return null;
        }
        if (hasUppercase === null) {
            return {
                'uppercase': false,
            };
        }
        if (hasLowercase === null) {
            return {
                'lowercase': false,
            };
        }
        else {
            return {
                'password': true,
                'uppercase': true,
                'lowercase': true,
            };
        }
    }
    get f() {
        return this.registrationForm.controls;
    }
    registration() {
        if (this.registrationForm.dirty && this.registrationForm.valid) {
            this.authService.registration(this.registrationForm.value).subscribe(data => {
                // data - jest Observerem
                switch (data.success) {
                    case false: {
                        this.logger.error(`Error code ${data.message}`);
                        break;
                    }
                    case true: {
                        this.logger.info('User created successfully, please login to access your account.');
                        this.router.navigate(['user/login']);
                        this.registrationForm.reset();
                        break;
                    }
                    default: {
                        this.registrationForm.reset();
                        break;
                    }
                }
            }, (Error) => {
                if (Error instanceof http_1.HttpErrorResponse) {
                    this.logger.error('Error name: ' + Error.error);
                    this.logger.error('Error status text: ' + Error.statusText);
                    this.logger.error('Error status: ' + Error.status);
                }
            });
        }
    }
}
exports.UserRegistrationComponent = UserRegistrationComponent;
UserRegistrationComponent.ɵfac = function UserRegistrationComponent_Factory(t) { return new (t || UserRegistrationComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.LoggerService), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.Router)); };
UserRegistrationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserRegistrationComponent, selectors: [["app-user-registration"]], decls: 53, vars: 7, consts: [[1, "dashboard"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "dashboard__section", "dashboard__section--small"], [1, "dashboard__heading", "dashboard__heading--mail"], [1, "dashboard__section"], [1, "dashboard__heading"], [1, "panel-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "userName"], ["required", "", "type", "text", "formControlName", "username", 1, "form-control"], ["class", "validation-feedback", 4, "ngIf"], ["for", "password"], ["required", "", "type", "text", "formControlName", "password", 1, "form-control"], ["for", "email"], ["required", "", "type", "text", "formControlName", "email", 1, "form-control"], ["for", "type"], ["required", "", "formControlName", "type", "name", "type", 1, "form-control"], [3, "value"], ["type", "button", 1, "btn", "btn-default"], ["type", "submit", 1, "btn", "btn-success"], [1, "validation-feedback"], [4, "ngIf"]], template: function UserRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "h2");
        i0.ɵɵtext(7, "Rejestracja");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 2);
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵelementStart(12, "h3");
        i0.ɵɵtext(13, "Wprowad\u017A dane");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 8);
        i0.ɵɵelementStart(15, "form", 9);
        i0.ɵɵlistener("ngSubmit", function UserRegistrationComponent_Template_form_ngSubmit_15_listener() { return ctx.registration(); });
        i0.ɵɵelementStart(16, "div", 10);
        i0.ɵɵelementStart(17, "label", 11);
        i0.ɵɵtext(18, "Nazwa u\u017Cytkownika");
        i0.ɵɵelementStart(19, "sup");
        i0.ɵɵtext(20, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "input", 12);
        i0.ɵɵtemplate(22, UserRegistrationComponent_div_22_Template, 3, 2, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 10);
        i0.ɵɵelementStart(24, "label", 14);
        i0.ɵɵtext(25, "Has\u0142o");
        i0.ɵɵelementStart(26, "sup");
        i0.ɵɵtext(27, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(28, "input", 15);
        i0.ɵɵtemplate(29, UserRegistrationComponent_div_29_Template, 3, 2, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div", 10);
        i0.ɵɵelementStart(31, "label", 16);
        i0.ɵɵtext(32, "Email");
        i0.ɵɵelementStart(33, "sup");
        i0.ɵɵtext(34, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(35, "input", 17);
        i0.ɵɵtemplate(36, UserRegistrationComponent_div_36_Template, 3, 2, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "div", 10);
        i0.ɵɵelementStart(38, "label", 18);
        i0.ɵɵtext(39, "Typ");
        i0.ɵɵelementStart(40, "sup");
        i0.ɵɵtext(41, "*");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "select", 19);
        i0.ɵɵelementStart(43, "option", 20);
        i0.ɵɵtext(44, "Standard");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "option", 20);
        i0.ɵɵtext(46, "Premium");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "option", 20);
        i0.ɵɵtext(48, "VIP");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "button", 21);
        i0.ɵɵtext(50, "Resetuj");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(51, "button", 22);
        i0.ɵɵtext(52, "Rejestracja");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("formGroup", ctx.registrationForm);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.registrationForm.get("username").touched || ctx.registrationForm.get("username").dirty);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.registrationForm.get("password").touched || ctx.registrationForm.get("password").dirty);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.registrationForm.get("email").touched || ctx.registrationForm.get("email").dirty);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("value", ctx.CustomerType.Standard);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.CustomerType.Premium);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.CustomerType.VIP);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.RequiredValidator, i1.NgControlStatus, i1.FormControlName, i5.NgIf, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  -webkit-text-size-adjust: 100%;\n  \n  -ms-text-size-adjust: 100%;\n  \n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n  \n  -ms-interpolation-mode: bicubic;\n  \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0;\n  \n  padding: 0;\n  white-space: normal;\n  \n  *margin-left: -7px;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%;\n  \n  margin: 0;\n  \n  vertical-align: baseline;\n  \n  *vertical-align: middle;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n  \n  cursor: pointer;\n  \n  *overflow: visible;\n  \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  \n  padding: 0;\n  \n  *height: 13px;\n  \n  *width: 13px;\n  \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;\n  \n  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  \n  vertical-align: top;\n  \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-height: 100vh;\n}\n.app[_ngcontent-%COMP%]   .app__page[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fafafa;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.38);\n  text-transform: uppercase;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n.form-group[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  margin-top: 1rem;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\ninput[_ngcontent-%COMP%]:active {\n  outline: none !important;\n  -webkit-appearance: none;\n  outline: 0;\n}\n.dashboard[_ngcontent-%COMP%] {\n  margin: 3rem 5rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__heading.dashboard__heading--mail[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section[_ngcontent-%COMP%] {\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #a4bfdd, inset 0 0 10px #c8ced5;\n  padding: 2rem 1rem;\n  margin-top: 2rem;\n  border-radius: 0.25rem;\n}\n.dashboard[_ngcontent-%COMP%]   .dashboard__section.dashboard__section--small[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.content[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 10%;\n  box-shadow: inset -10px -10px 100px #c8ced5, 10px 10px 20px #a4bfdd, inset 0 0 10px #c8ced5;\n}\nform[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .ng-invalid.ng-dirty[_ngcontent-%COMP%] {\n  border: 2px solid red !important;\n}\nform[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%]    ~ .validation-feedback[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .ng-invalid.ng-dirty[_ngcontent-%COMP%]    ~ .validation-feedback[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL3Jlc2V0LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXNlci1yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQtc2Nzcy9hcHAuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2hhcmVkLXNjc3MvZGFzaGJvYXJkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDQUo7QURJQSx5REFBQTtBQUVBO0VBQ0ksVUFBQTtBQ0ZKO0FETUEsZ0RBQUE7QUFFQTs7Ozs7Ozs7Ozs7RUFXSSxjQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7QUNKSjtBRE9BOztFQUVJLGdCQUFBO0FDSko7QURPQTs7RUFFSSxZQUFBO0FDSko7QURPQTs7OztFQUlJLFdBQUE7RUFDQSxhQUFBO0FDSko7QURPQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUNKSjtBRE9BOzs7O0VBSUksd0JBQUE7RUFDQSxxQkFBQTtBQ0pKO0FET0E7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0VBR0EsdUJBQUE7QUNKSjtBRE9BO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRFFBOztFQUFBO0FBSUE7OztFQUdJLHFCQUFBO0dDTkYsZURPRTtHQ05GLE9ET0U7RUFDQSxlQUFBO0FDTko7QURVQTs7O0VBQUE7QUFLQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FDUko7QURZQTs7O0VBQUE7QUFLQTtFQUNJ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aUJBQUE7RUFDQSxvQkFBQTtBSDZlWjtBQTNmQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkZFTFE7QUZtZ0JaO0FBM2ZBOztFQUVJLGdDQUFBO0FBOGZKO0FBM2ZBOztFQUVJLFVBQUE7QUE4ZkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXJzL3VzZXItcmVnaXN0cmF0aW9uL3VzZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cclxuICAgdjIuMC1tb2RpZmllZCB8IDIwMTEwMTI2XHJcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXHJcbiovXHJcblxyXG5odG1sLFxyXG5ib2R5LFxyXG5kaXYsXHJcbnNwYW4sXHJcbmFwcGxldCxcclxub2JqZWN0LFxyXG5pZnJhbWUsXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYsXHJcbnAsXHJcbmJsb2NrcXVvdGUsXHJcbnByZSxcclxuYSxcclxuYWJicixcclxuYWNyb255bSxcclxuYWRkcmVzcyxcclxuYmlnLFxyXG5jaXRlLFxyXG5jb2RlLFxyXG5kZWwsXHJcbmRmbixcclxuZW0sXHJcbmltZyxcclxuaW5zLFxyXG5rYmQsXHJcbnEsXHJcbnMsXHJcbnNhbXAsXHJcbnNtYWxsLFxyXG5zdHJpa2UsXHJcbnN0cm9uZyxcclxuc3ViLFxyXG5zdXAsXHJcbnR0LFxyXG52YXIsXHJcbmIsXHJcbnUsXHJcbmksXHJcbmNlbnRlcixcclxuZGwsXHJcbmR0LFxyXG5kZCxcclxub2wsXHJcbnVsLFxyXG5saSxcclxuZmllbGRzZXQsXHJcbmZvcm0sXHJcbmxhYmVsLFxyXG5sZWdlbmQsXHJcbnRhYmxlLFxyXG5jYXB0aW9uLFxyXG50Ym9keSxcclxudGZvb3QsXHJcbnRoZWFkLFxyXG50cixcclxudGgsXHJcbnRkLFxyXG5hcnRpY2xlLFxyXG5hc2lkZSxcclxuY2FudmFzLFxyXG5kZXRhaWxzLFxyXG5lbWJlZCxcclxuZmlndXJlLFxyXG5maWdjYXB0aW9uLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxuaGdyb3VwLFxyXG5tZW51LFxyXG5uYXYsXHJcbm91dHB1dCxcclxucnVieSxcclxuc2VjdGlvbixcclxuc3VtbWFyeSxcclxudGltZSxcclxubWFyayxcclxuYXVkaW8sXHJcbnZpZGVvIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBmb250OiBpbmhlcml0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG5cclxuLyogbWFrZSBzdXJlIHRvIHNldCBzb21lIGZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xyXG5cclxuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcblxyXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcblxyXG5hcnRpY2xlLFxyXG5hc2lkZSxcclxuZGV0YWlscyxcclxuZmlnY2FwdGlvbixcclxuZmlndXJlLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxuaGdyb3VwLFxyXG5tZW51LFxyXG5uYXYsXHJcbnNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbm9sLFxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlLFxyXG5xIHtcclxuICAgIHF1b3Rlczogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZTpiZWZvcmUsXHJcbmJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLFxyXG5xOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgY29udGVudDogbm9uZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxyXG4gKi9cclxuXHJcbmF1ZGlvLFxyXG5jYW52YXMsXHJcbnZpZGVvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICpkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAqem9vbTogMTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxyXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxyXG4gKi9cclxuXHJcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXHJcbiAqIEtub3duIGlzc3VlOiBubyBJRSA2IHN1cHBvcnQuXHJcbiAqL1xyXG5cclxuW2hpZGRlbl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRleHQgcmVzaXppbmcgb2RkbHkgaW4gSUUgNi83IHdoZW4gYm9keSBgZm9udC1zaXplYCBpcyBzZXQgdXNpbmdcclxuICogICAgYGVtYCB1bml0cy5cclxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXHJcbiAqICAgIHVzZXIgem9vbS5cclxuICovXHJcblxyXG5odG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIC8qIDEgKi9cclxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgIC8qIDIgKi9cclxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgLyogMiAqL1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuYTphY3RpdmUsXHJcbmE6aG92ZXIge1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cclxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXHJcbiAqL1xyXG5cclxuaW1nIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIC8qIDEgKi9cclxuICAgIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7XHJcbiAgICAvKiAyICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cclxuICovXHJcblxyXG5maWd1cmUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENvcnJlY3QgbWFyZ2luIGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXHJcbiAqL1xyXG5cclxuZm9ybSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxyXG4gKi9cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA2LzcvOC85LlxyXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cclxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cclxuICovXHJcblxyXG5sZWdlbmQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAvKiAyICovXHJcbiAgICAqbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgICAvKiAzICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gSUUgNi83LCBGaXJlZm94IDMrLCBTYWZhcmkgNSxcclxuICogICAgYW5kIENocm9tZS5cclxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAvKiAxICovXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAvKiAyICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAvKiAzICovXHJcbiAgICAqdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC8qIDMgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIEZpcmVmb3ggMysgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXHJcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQge1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXHJcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXHJcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cclxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cclxuICovXHJcblxyXG5idXR0b24sXHJcbnNlbGVjdCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxyXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cclxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxyXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxyXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXHJcbiAqIDQuIFJlbW92ZSBpbm5lciBzcGFjaW5nIGluIElFIDcgd2l0aG91dCBhZmZlY3Rpbmcgbm9ybWFsIHRleHQgaW5wdXRzLlxyXG4gKiAgICBLbm93biBpc3N1ZTogaW5uZXIgc3BhY2luZyByZW1haW5zIGluIElFIDYuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5odG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXHJcblxyXG4vKiAxICovXHJcblxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0sXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XHJcbiAgICAvKiAyICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiAzICovXHJcbiAgICAqb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAvKiA0ICovXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cclxuICovXHJcblxyXG5idXR0b25bZGlzYWJsZWRdLFxyXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXHJcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkuXHJcbiAqIDMuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA3LlxyXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxyXG4gKi9cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLyogMiAqL1xyXG4gICAgKmhlaWdodDogMTNweDtcclxuICAgIC8qIDMgKi9cclxuICAgICp3aWR0aDogMTNweDtcclxuICAgIC8qIDMgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxyXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcclxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXHJcbiAqL1xyXG5cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICAgIC8qIDEgKi9cclxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgLyogMiAqL1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcclxuICogb24gT1MgWC5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggMysuXHJcbiAqL1xyXG5cclxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA2LzcvOC85LlxyXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgLyogMSAqL1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIC8qIDIgKi9cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXHJcbiAqL1xyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG5odG1sLFxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG46Oi1tb3otc2VsZWN0aW9uIHtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG46OnNlbGVjdGlvbiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbi5jaHJvbWVmcmFtZSB7XHJcbiAgICBtYXJnaW46IDAuMmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAwO1xyXG59XHJcbiIsIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXG4gICB2Mi4wLW1vZGlmaWVkIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBtYWtlIHN1cmUgdG8gc2V0IHNvbWUgZm9jdXMgc3R5bGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXG46Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKipcbiAqIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXG4gKi9cbmF1ZGlvLFxuY2FudmFzLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gICp6b29tOiAxO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8qKlxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXG4gKi9cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuLyoqXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgNy84LzksIEZpcmVmb3ggMywgYW5kIFNhZmFyaSA0LlxuICogS25vd24gaXNzdWU6IG5vIElFIDYgc3VwcG9ydC5cbiAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGV4dCByZXNpemluZyBvZGRseSBpbiBJRSA2Lzcgd2hlbiBib2R5IGBmb250LXNpemVgIGlzIHNldCB1c2luZ1xuICogICAgYGVtYCB1bml0cy5cbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xuICogICAgdXNlciB6b29tLlxuICovXG5odG1sIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLyogMiAqL1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxuICovXG5hOmZvY3VzIHtcbiAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XG59XG5cbi8qKlxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbmE6YWN0aXZlLFxuYTpob3ZlciB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXG4gKiAyLiBJbXByb3ZlIGltYWdlIHF1YWxpdHkgd2hlbiBzY2FsZWQgaW4gSUUgNy5cbiAqL1xuaW1nIHtcbiAgYm9yZGVyOiAwO1xuICAvKiAxICovXG4gIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA2LzcvOC85LCBTYWZhcmkgNSwgYW5kIE9wZXJhIDExLlxuICovXG5maWd1cmUge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogQ29ycmVjdCBtYXJnaW4gZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cbiAqL1xuZm9ybSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXG4gKi9cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgbWFyZ2luOiAwIDJweDtcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA2LzcvOC85LlxuICogMi4gQ29ycmVjdCB0ZXh0IG5vdCB3cmFwcGluZyBpbiBGaXJlZm94IDMuXG4gKiAzLiBDb3JyZWN0IGFsaWdubWVudCBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxuICovXG5sZWdlbmQge1xuICBib3JkZXI6IDA7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgLyogMiAqL1xuICAqbWFyZ2luLWxlZnQ6IC03cHg7XG4gIC8qIDMgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gSUUgNi83LCBGaXJlZm94IDMrLCBTYWZhcmkgNSxcbiAqICAgIGFuZCBDaHJvbWUuXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuYnV0dG9uLFxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgLyogMSAqL1xuICBtYXJnaW46IDA7XG4gIC8qIDIgKi9cbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAvKiAzICovXG4gICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAvKiAzICovXG59XG5cbi8qKlxuICogQWRkcmVzcyBGaXJlZm94IDMrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxuICogdGhlIFVBIHN0eWxlc2hlZXQuXG4gKi9cbmJ1dHRvbixcbmlucHV0IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLyoqXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDYrLlxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cbiAqL1xuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cbiAqIDQuIFJlbW92ZSBpbm5lciBzcGFjaW5nIGluIElFIDcgd2l0aG91dCBhZmZlY3Rpbmcgbm9ybWFsIHRleHQgaW5wdXRzLlxuICogICAgS25vd24gaXNzdWU6IGlubmVyIHNwYWNpbmcgcmVtYWlucyBpbiBJRSA2LlxuICovXG5idXR0b24sXG5odG1sIGlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9cmVzZXRdLFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIC8qIDIgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiAzICovXG4gICpvdmVyZmxvdzogdmlzaWJsZTtcbiAgLyogNCAqL1xufVxuXG4vKipcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXG4gKi9cbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLyoqXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGNvbnRlbnQtYm94IGluIElFIDgvOS5cbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkuXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cbiAqICAgIEtub3duIGlzc3VlOiBleGNlc3MgcGFkZGluZyByZW1haW5zIGluIElFIDYuXG4gKi9cbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiAxICovXG4gIHBhZGRpbmc6IDA7XG4gIC8qIDIgKi9cbiAgKmhlaWdodDogMTNweDtcbiAgLyogMyAqL1xuICAqd2lkdGg6IDEzcHg7XG4gIC8qIDMgKi9cbn1cblxuLyoqXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cbiAqL1xuaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIC8qIDEgKi9cbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLyogMiAqL1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLyoqXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxuICogb24gT1MgWC5cbiAqL1xuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCAzKy5cbiAqL1xuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDYvNy84LzkuXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxuICovXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXG4gKi9cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmh0bWwsXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgY29sb3I6ICMyMjI7XG59XG5cbjo6LW1vei1zZWxlY3Rpb24ge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuZmllbGRzZXQge1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4uY2hyb21lZnJhbWUge1xuICBtYXJnaW46IDAuMmVtIDA7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAwLjJlbSAwO1xufVxuXG4uYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4uYXBwIC5hcHBfX3BhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiAwO1xufVxuaW5wdXQ6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5kYXNoYm9hcmQge1xuICBtYXJnaW46IDNyZW0gNXJlbTtcbn1cbi5kYXNoYm9hcmQgLmRhc2hib2FyZF9faGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uZGFzaGJvYXJkIC5kYXNoYm9hcmRfX2hlYWRpbmcuZGFzaGJvYXJkX19oZWFkaW5nLS1tYWlsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5kYXNoYm9hcmQgLmRhc2hib2FyZF9fc2VjdGlvbiB7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0xMHB4IC0xMHB4IDEwMHB4ICNjOGNlZDUsIDEwcHggMTBweCAyMHB4ICNhNGJmZGQsIGluc2V0IDAgMCAxMHB4ICNjOGNlZDU7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5kYXNoYm9hcmQgLmRhc2hib2FyZF9fc2VjdGlvbi5kYXNoYm9hcmRfX3NlY3Rpb24tLXNtYWxsIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMTAlO1xuICBib3gtc2hhZG93OiBpbnNldCAtMTBweCAtMTBweCAxMDBweCAjYzhjZWQ1LCAxMHB4IDEwcHggMjBweCAjYTRiZmRkLCBpbnNldCAwIDAgMTBweCAjYzhjZWQ1O1xufVxuXG5mb3JtIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsXG5mb3JtIC5uZy1pbnZhbGlkLm5nLWRpcnR5IHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkICFpbXBvcnRhbnQ7XG59XG5cbmZvcm0gLm5nLWludmFsaWQubmctdG91Y2hlZCB+IC52YWxpZGF0aW9uLWZlZWRiYWNrLFxuZm9ybSAubmctaW52YWxpZC5uZy1kaXJ0eSB+IC52YWxpZGF0aW9uLWZlZWRiYWNrIHtcbiAgY29sb3I6IHJlZDtcbn0iLCJAaW1wb3J0IFwiLi9yZXNldC5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5hcHAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIC5hcHBfX3BhZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14bDtcclxuICAgIGNvbG9yOiAkZGFyay1zZWNvbmRhcnk7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tZDtcclxuICAgIGNvbG9yOiAkZGFyay1kaXNhYmxlZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcclxuICAgIGNvbG9yOiAkZGFyay1zZWNvbmRhcnk7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gb3V0bGluZS0tbm9uZSB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBAaW5jbHVkZSBvdXRsaW5lLS1ub25lO1xyXG4gICAgfVxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIEBpbmNsdWRlIG91dGxpbmUtLW5vbmU7XHJcbiAgICB9XHJcbn1cclxuIiwiJGJveFNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMTAwcHggI2M4Y2VkNSxcclxuMTBweCAxMHB4IDIwcHggI2E0YmZkZCxcclxuaW5zZXQgMCAwIDEwcHggI2M4Y2VkNTtcclxuJGJvcmRlcjogMXB4ICMyMjIgc29saWQ7XHJcbiRmb250LXNpemUteHhzOiAuNjI1cmVtO1xyXG4kZm9udC1zaXplLXhzOiAuNzVyZW07XHJcbiRmb250LXNpemUtc206IC45cmVtO1xyXG4kZm9udC1zaXplLW1kOiAxcmVtO1xyXG4kZm9udC1zaXplLWxnOiAxLjI1cmVtO1xyXG4kZm9udC1zaXplLXhsOiAxLjVyZW07XHJcbiRmb250LXNpemUteHhsOiAycmVtO1xyXG4kY29sb3ItcmVkOiAjRkYwMDAwO1xyXG4kY29sb3ItZ3JlZW4tMTU6ICMwMDRkMWE7XHJcbiRjb2xvci1ncmF5LTkwOiAjYmJiYmJhO1xyXG4kY29sb3ItZ3JheS0yNTogIzRkNGQzMztcclxuJGNvbG9yLWdyZWVuLTU1OiAjNTNjNjUzO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRkYXJrOiByZ2JhKCMwMDAsIC44Nyk7XHJcbiRkYXJrLXNlY29uZGFyeTogcmdiYSgjMDAwLCAuNTQpO1xyXG4kZGFyay1kaXNhYmxlZDogcmdiYSgjMDAwLCAuMzgpO1xyXG4iLCJAaW1wb3J0IFwiLi9hcHAuc2Nzc1wiO1xyXG4uZGFzaGJvYXJkIHtcclxuICAgIG1hcmdpbjogM3JlbSA1cmVtO1xyXG4gICAgLmRhc2hib2FyZF9faGVhZGluZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAmLmRhc2hib2FyZF9faGVhZGluZy0tbWFpbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRhc2hib2FyZF9fc2VjdGlvbiB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogJGJveFNoYWRvdztcclxuICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICAgICAgJi5kYXNoYm9hcmRfX3NlY3Rpb24tLXNtYWxsIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserRegistrationComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-user-registration',
                templateUrl: './user-registration.component.html',
                styleUrls: ['./user-registration.component.scss']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.LoggerService }, { type: i3.AuthService }, { type: i4.Router }]; }, null); })();


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
UserComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserComponent, selectors: [["app-user"]], decls: 1, vars: 0, template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "router-outlet");
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
const user_login_component_1 = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/modules/users/user-login/user-login.component.ts");
const auth_guard_service_1 = __webpack_require__(/*! ../core/authentication/auth-guard/auth-guard.service */ "./src/app/modules/core/authentication/auth-guard/auth-guard.service.ts");
const user_profile_component_1 = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/modules/users/user-profile/user-profile.component.ts");
const contact_component_1 = __webpack_require__(/*! ../pages/contact/contact.component */ "./src/app/modules/pages/contact/contact.component.ts");
const deactivate_guard_service_1 = __webpack_require__(/*! ../core/authentication/deactivate-guard/deactivate-guard.service */ "./src/app/modules/core/authentication/deactivate-guard/deactivate-guard.service.ts");
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
                canActivate: [auth_guard_service_1.AuthGuardService],
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
                canDeactivate: [deactivate_guard_service_1.DeactivateGuardService]
            },
            {
                path: 'profile',
                data: { title: 'Profil' },
                component: user_profile_component_1.UserProfileComponent,
            },
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
const user_login_component_1 = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/modules/users/user-login/user-login.component.ts");
const user_profile_component_1 = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/modules/users/user-profile/user-profile.component.ts");
const auth_interceptor_service_1 = __webpack_require__(/*! ../core/authentication/auth-interceptor/auth-interceptor.service */ "./src/app/modules/core/authentication/auth-interceptor/auth-interceptor.service.ts");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const contact_component_1 = __webpack_require__(/*! ../pages/contact/contact.component */ "./src/app/modules/pages/contact/contact.component.ts");
const deactivate_guard_service_1 = __webpack_require__(/*! ../core/authentication/deactivate-guard/deactivate-guard.service */ "./src/app/modules/core/authentication/deactivate-guard/deactivate-guard.service.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class UsersModule {
}
exports.UsersModule = UsersModule;
UsersModule.ɵmod = i0.ɵɵdefineNgModule({ type: UsersModule });
UsersModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, providers: [
        {
            provide: http_1.HTTP_INTERCEPTORS,
            useClass: auth_interceptor_service_1.AuthInterceptorService,
            multi: true // przekazanie wszystkich np serviców do tablicy HTTP_INTERCEPTORS
        },
        deactivate_guard_service_1.DeactivateGuardService
    ], imports: [[
            common_1.CommonModule,
            users_routing_module_1.UsersRoutingModule,
            router_1.RouterModule,
            forms_1.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UsersModule, { declarations: [user_registration_component_1.UserRegistrationComponent,
        user_component_1.UserComponent,
        contact_component_1.ContactComponent,
        user_login_component_1.UserLoginComponent,
        user_profile_component_1.UserProfileComponent], imports: [common_1.CommonModule,
        users_routing_module_1.UsersRoutingModule,
        router_1.RouterModule,
        forms_1.ReactiveFormsModule], exports: [user_registration_component_1.UserRegistrationComponent,
        user_component_1.UserComponent,
        contact_component_1.ContactComponent,
        user_login_component_1.UserLoginComponent,
        user_profile_component_1.UserProfileComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UsersModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    user_registration_component_1.UserRegistrationComponent,
                    user_component_1.UserComponent,
                    contact_component_1.ContactComponent,
                    user_login_component_1.UserLoginComponent,
                    user_profile_component_1.UserProfileComponent,
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
                    user_login_component_1.UserLoginComponent,
                    user_profile_component_1.UserProfileComponent
                ],
                providers: [
                    {
                        provide: http_1.HTTP_INTERCEPTORS,
                        useClass: auth_interceptor_service_1.AuthInterceptorService,
                        multi: true // przekazanie wszystkich np serviców do tablicy HTTP_INTERCEPTORS
                    },
                    deactivate_guard_service_1.DeactivateGuardService
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared-ag-grid-header/ag-grid-header.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/shared-ag-grid-header/ag-grid-header.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AgGridHeaderComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const _c0 = ["menuButton"];
function AgGridHeaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4, 5);
    i0.ɵɵlistener("click", function AgGridHeaderComponent_div_3_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onMenuClicked($event); });
    i0.ɵɵelement(2, "i", 6);
    i0.ɵɵelementEnd();
} }
function AgGridHeaderComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "i", 7);
    i0.ɵɵelementEnd();
} }
function AgGridHeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "i", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.ascSort);
} }
function AgGridHeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "i", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r3.descSort);
} }
class AgGridHeaderComponent {
    constructor() {
        this.ascSort = '';
        this.descSort = '';
        this.noSort = '';
        this.isSortVisible = true;
    }
    agInit(params) {
        this.params = params;
        this.isSortVisible = !params.hideSort;
        params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
        this.onSortChanged();
    }
    onMenuClicked(event) {
        this.params.showColumnMenu(this.menuButton.nativeElement);
        event.stopPropagation();
    }
    onSortChanged() {
        this.ascSort = this.descSort = this.noSort = 'inactive';
        if (this.params.column.isSortAscending()) {
            this.ascSort = 'active';
        }
        else if (this.params.column.isSortDescending()) {
            this.descSort = 'active';
        }
        else {
            this.noSort = 'active';
        }
    }
    onColumnSortRequested(event) {
        let order = '';
        if (this.params.column.isSortAscending()) {
            order = 'desc';
        }
        else if (this.params.column.isSortDescending()) {
            order = '';
        }
        else {
            order = 'asc';
        }
        this.params.setSort(order, event.shiftKey);
    }
}
exports.AgGridHeaderComponent = AgGridHeaderComponent;
AgGridHeaderComponent.ɵfac = function AgGridHeaderComponent_Factory(t) { return new (t || AgGridHeaderComponent)(); };
AgGridHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AgGridHeaderComponent, selectors: [["app-ag-grid-header"]], viewQuery: function AgGridHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.menuButton = _t.first);
    } }, decls: 7, vars: 5, consts: [[1, "header__text", 3, "click"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "click"], ["menuButton", ""], [1, "header__icon", "header__menu__icon"], [1, "header__icon", "header__filter__icon"], [3, "ngClass"], [1, "header__icon", "header__sortUp__icon"], [1, "header__icon", "header__sortDown_icon"]], template: function AgGridHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function AgGridHeaderComponent_Template_div_click_0_listener($event) { return ctx.onColumnSortRequested($event); });
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, AgGridHeaderComponent_div_3_Template, 3, 0, "div", 1);
        i0.ɵɵtemplate(4, AgGridHeaderComponent_div_4_Template, 2, 0, "div", 2);
        i0.ɵɵtemplate(5, AgGridHeaderComponent_div_5_Template, 2, 1, "div", 3);
        i0.ɵɵtemplate(6, AgGridHeaderComponent_div_6_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.params.displayName);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.params.enableMenu);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.params.column.isFilterActive());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.params.column.isSortAscending() && ctx.isSortVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.params.column.isSortDescending() && ctx.isSortVisible);
    } }, directives: [i1.NgIf, i1.NgClass], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.header__text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.header__icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  margin-left: 15px;\n}\n\n.header__menu__icon[_ngcontent-%COMP%]:before {\n  content: url('caret-square-down-regular.svg');\n}\n\n.header__sortDown_icon[_ngcontent-%COMP%]:before {\n  content: url('sort-amount-down-solid.svg');\n}\n\n.header__sortUp__icon[_ngcontent-%COMP%]:before {\n  content: url('sort-amount-up-alt-solid.svg');\n}\n\n.header__filter__icon[_ngcontent-%COMP%]:before {\n  content: url('filter.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1hZy1ncmlkLWhlYWRlci9hZy1ncmlkLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLDZDQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQ0FBQTtBQUNKOztBQUVBO0VBQ0ksNENBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2hhcmVkLWFnLWdyaWQtaGVhZGVyL2FnLWdyaWQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3RleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2ljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmhlYWRlcl9fbWVudV9faWNvbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvY2FyZXQtc3F1YXJlLWRvd24tcmVndWxhci5zdmcnKTtcclxufVxyXG5cclxuLmhlYWRlcl9fc29ydERvd25faWNvbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvc29ydC1hbW91bnQtZG93bi1zb2xpZC5zdmcnKTtcclxufVxyXG5cclxuLmhlYWRlcl9fc29ydFVwX19pY29uOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9zb3J0LWFtb3VudC11cC1hbHQtc29saWQuc3ZnJyk7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2ZpbHRlcl9faWNvbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvZmlsdGVyLnN2ZycpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgGridHeaderComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-ag-grid-header',
                templateUrl: './ag-grid-header.component.html',
                styleUrls: ['./ag-grid-header.component.scss']
            }]
    }], function () { return []; }, { menuButton: [{
            type: core_1.ViewChild,
            args: ['menuButton', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared-services/announcement/announcement.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/shared-services/announcement/announcement.service.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementService = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const i2 = __webpack_require__(/*! ../logger/logger.service */ "./src/app/shared/shared-services/logger/logger.service.ts");
class AnnouncementService {
    constructor(httpClient, logger) {
        this.httpClient = httpClient;
        this.logger = logger;
        this.listAnnouncements = new rxjs_1.BehaviorSubject(null);
        this.listAnnouncements$ = this.listAnnouncements.asObservable();
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    addAnnouncement(newAnnouncement, idCategory, idType) {
        return this.httpClient.post(`/category/${idCategory}/type/${idType}`, newAnnouncement, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('Add Announcement')));
    }
    getAnnouncement() {
        return this.httpClient.get(`/api/get-announcements`).pipe(operators_1.tap(announcements => this.logger.info('Announcements retrieved!' + announcements)), operators_1.share());
    }
    getAnnouncementUser(idUser) {
        return this.httpClient.get(`/api/get-announcements-user/${idUser}`).pipe(operators_1.tap(announcements => this.logger.info('The announcements of the logged in user have been retrieved!' + announcements)), operators_1.share());
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            this.logger.error(error);
            this.logger.info(`${operation} failed: ${error.message}`);
            return rxjs_1.of(result);
        };
    }
}
exports.AnnouncementService = AnnouncementService;
AnnouncementService.ɵfac = function AnnouncementService_Factory(t) { return new (t || AnnouncementService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LoggerService)); };
AnnouncementService.ɵprov = i0.ɵɵdefineInjectable({ token: AnnouncementService, factory: AnnouncementService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnnouncementService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LoggerService }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared-services/data-json/data-json.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/shared-services/data-json/data-json.service.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataJsonService = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
class DataJsonService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    readDataJson() {
        return this.httpClient.get('../../../../assets/data.json');
    }
}
exports.DataJsonService = DataJsonService;
DataJsonService.ɵfac = function DataJsonService_Factory(t) { return new (t || DataJsonService)(i0.ɵɵinject(i1.HttpClient)); };
DataJsonService.ɵprov = i0.ɵɵdefineInjectable({ token: DataJsonService, factory: DataJsonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataJsonService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared-services/location/location.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/shared-services/location/location.service.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const i2 = __webpack_require__(/*! ../logger/logger.service */ "./src/app/shared/shared-services/logger/logger.service.ts");
class LocationService {
    constructor(httpClient, logger) {
        this.httpClient = httpClient;
        this.logger = logger;
        this.locationSession = new rxjs_1.BehaviorSubject(null);
        this.locationSession$ = this.locationSession.asObservable();
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    getLocations() {
        return this.httpClient.get(`/api/get-locations`, this.httpOptions).pipe(operators_1.map(data => data), operators_1.tap(announcements => {
            this.locationSession.next(announcements);
            this.logger.info('locations retrieved!' + announcements);
        }), operators_1.share());
    }
}
exports.LocationService = LocationService;
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LoggerService)); };
LocationService.ɵprov = i0.ɵɵdefineInjectable({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LocationService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LoggerService }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared-services/logger/logger.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/shared-services/logger/logger.service.ts ***!
  \*****************************************************************/
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

/***/ "./src/app/shared/shared-services/user/user-shared.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/shared-services/user/user-shared.service.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSharedService = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class UserSharedService {
    constructor() {
        // zapamietuje dane w innych komponentach
        this.userSource = new rxjs_1.BehaviorSubject(null);
        this.userContent$ = this.userSource.asObservable();
    }
    shareUser(user) {
        this.userSource.next(user);
    }
}
exports.UserSharedService = UserSharedService;
UserSharedService.ɵfac = function UserSharedService_Factory(t) { return new (t || UserSharedService)(); };
UserSharedService.ɵprov = i0.ɵɵdefineInjectable({ token: UserSharedService, factory: UserSharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserSharedService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
const logger_service_1 = __webpack_require__(/*! ../app/shared/shared-services/logger/logger.service */ "./src/app/shared/shared-services/logger/logger.service.ts");
const announcement_service_1 = __webpack_require__(/*! src/app/shared/shared-services/announcement/announcement.service */ "./src/app/shared/shared-services/announcement/announcement.service.ts");
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
const logger_service_1 = __webpack_require__(/*! ../app/shared/shared-services/logger/logger.service */ "./src/app/shared/shared-services/logger/logger.service.ts");
const announcement_service_1 = __webpack_require__(/*! ../app/shared/shared-services/announcement/announcement.service */ "./src/app/shared/shared-services/announcement/announcement.service.ts");
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