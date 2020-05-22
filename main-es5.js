function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_game_engine_game_engine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @components/game-engine/game-engine.component */
    "./src/app/components/game-engine/game-engine.component.ts");

    var routes = [{
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'game',
      component: _components_game_engine_game_engine_component__WEBPACK_IMPORTED_MODULE_3__["GameEngineComponent"]
    }, //{ path: 'second-component', component: SecondComponent },
    {
      path: '',
      redirectTo: 'game',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: '**',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @components/components.module */
    "./src/app/components/components.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _game_engine_game_engine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./game-engine/game-engine.component */
    "./src/app/components/game-engine/game-engine.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsModule
    });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsModule_Factory(t) {
        return new (t || ComponentsModule)();
      },
      providers: [],
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
        declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _game_engine_game_engine_component__WEBPACK_IMPORTED_MODULE_4__["GameEngineComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _game_engine_game_engine_component__WEBPACK_IMPORTED_MODULE_4__["GameEngineComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _game_engine_game_engine_component__WEBPACK_IMPORTED_MODULE_4__["GameEngineComponent"]],
          exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _game_engine_game_engine_component__WEBPACK_IMPORTED_MODULE_4__["GameEngineComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/game-engine/game-engine.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/game-engine/game-engine.component.ts ***!
    \*****************************************************************/

  /*! exports provided: GameEngineComponent */

  /***/
  function srcAppComponentsGameEngineGameEngineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameEngineComponent", function () {
      return GameEngineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_game_engine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/services/game-engine.service */
    "./src/app/shared/services/game-engine.service.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/components/login/login.component.ts");

    var _c0 = ["rendererCanvas"];

    var GameEngineComponent = /*#__PURE__*/function () {
      function GameEngineComponent(engineService) {
        _classCallCheck(this, GameEngineComponent);

        this.engineService = engineService;
      }

      _createClass(GameEngineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.engineService.createScene(this.rendererCanvas); //this.engineService.animate();
        }
      }]);

      return GameEngineComponent;
    }();

    GameEngineComponent.ɵfac = function GameEngineComponent_Factory(t) {
      return new (t || GameEngineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_game_engine_service__WEBPACK_IMPORTED_MODULE_1__["GameEngineService"]));
    };

    GameEngineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameEngineComponent,
      selectors: [["app-game-engine"]],
      viewQuery: function GameEngineComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rendererCanvas = _t.first);
        }
      },
      decls: 11,
      vars: 1,
      consts: [[1, "ui-wrapper"], [1, "fps-wrapper"], [1, "login-wrapper"], [1, "engine-wrapper"], ["id", "renderCanvas"], ["rendererCanvas", ""]],
      template: function GameEngineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FPS\xA0:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "canvas", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.engineService == null ? null : ctx.engineService.fps);
        }
      },
      directives: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
      styles: [".engine-wrapper[_ngcontent-%COMP%] {\n  z-index: 0;\n  position: absolute;\n  background: #0a0d36;\n  background: linear-gradient(180deg, #15194a 0%, #15194a 23%, black 100%);\n}\n\n.ui-wrapper[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  width: 100%;\n}\n\n.ui-wrapper[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n\n.ui-wrapper[_ngcontent-%COMP%]   .fps-wrapper[_ngcontent-%COMP%] {\n  z-index: 10;\n  font-family: vibes;\n  padding: 5px;\n  color: #fdfdfd;\n  font-size: 20px;\n}\n\n.ui-wrapper[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWVuZ2luZS9DOlxcVXNlcnNcXFJhblxcRG9jdW1lbnRzXFxHaXRIdWJcXHBsYW5ldC1jb25xdWVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxnYW1lLWVuZ2luZVxcZ2FtZS1lbmdpbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1lbmdpbmUvZ2FtZS1lbmdpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdFQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0FDR1I7O0FEREk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNHUjs7QURBSTtFQUNJLFdBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1lbmdpbmUvZ2FtZS1lbmdpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW5naW5lLXdyYXBwZXIge1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMCwgMTMsIDU0KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjEsIDI1LCA3NCwgMSkgMCUsIHJnYmEoMjEsIDI1LCA3NCwgMSkgMjMlLCByZ2JhKDAsIDAsIDAsIDEpIDEwMCUpO1xyXG59XHJcbi51aS13cmFwcGVyIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAqIHtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxuICAgIC5mcHMtd3JhcHBlciB7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZpYmVzO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4td3JhcHBlcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4iLCIuZW5naW5lLXdyYXBwZXIge1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMwYTBkMzY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxNTE5NGEgMCUsICMxNTE5NGEgMjMlLCBibGFjayAxMDAlKTtcbn1cblxuLnVpLXdyYXBwZXIge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cbi51aS13cmFwcGVyICoge1xuICB6LWluZGV4OiAxMDtcbn1cbi51aS13cmFwcGVyIC5mcHMtd3JhcHBlciB7XG4gIHotaW5kZXg6IDEwO1xuICBmb250LWZhbWlseTogdmliZXM7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICNmZGZkZmQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi51aS13cmFwcGVyIC5sb2dpbi13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameEngineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-engine',
          templateUrl: './game-engine.component.html',
          styleUrls: ['./game-engine.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_game_engine_service__WEBPACK_IMPORTED_MODULE_1__["GameEngineService"]
        }];
      }, {
        rendererCanvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['rendererCanvas', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    function LoginComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.onClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " button ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(http) {
        _classCallCheck(this, LoginComponent);

        this.http = http;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          this.http.get('./api/v1/search').subscribe(function (res) {
            return console.log("res");
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 5,
      vars: 1,
      consts: [[1, "wrapper"], ["class", "button", 3, "click", 4, "ngIf"], [1, "shell"], [1, "title"], [1, "button", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Planet Conquer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        }
      },
      styles: [".wrapper[_ngcontent-%COMP%] {\n  z-index: 10;\n  width: 500px;\n  height: 500px;\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n}\n.wrapper[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 20px;\n  background: grey;\n}\n.wrapper[_ngcontent-%COMP%]   .shell[_ngcontent-%COMP%] {\n  min-width: 500px;\n  min-height: 250px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.205);\n}\n.wrapper[_ngcontent-%COMP%]   .shell[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: vibes;\n  line-height: 40px;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXFJhblxcRG9jdW1lbnRzXFxHaXRIdWJcXHBsYW5ldC1jb25xdWVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRENJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUNDUjtBREFRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIH1cclxuXHJcbiAgICAuc2hlbGwge1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjA1KTtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmliZXM7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLndyYXBwZXIge1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi53cmFwcGVyIC5idXR0b24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBncmV5O1xufVxuLndyYXBwZXIgLnNoZWxsIHtcbiAgbWluLXdpZHRoOiA1MDBweDtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMDUpO1xufVxuLndyYXBwZXIgLnNoZWxsIC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiB2aWJlcztcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 3,
      vars: 0,
      consts: [[1, "game-wrapper"], ["id", "renderCanvas"], ["rendererCanvas", ""]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n}\n.wrapper[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 20px;\n  background: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxVc2Vyc1xcUmFuXFxEb2N1bWVudHNcXEdpdEh1YlxccGxhbmV0LWNvbnF1ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNESjtBREVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi53cmFwcGVye1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIC5idXR0b257XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICB9XHJcbn0iLCIud3JhcHBlciB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cbi53cmFwcGVyIC5idXR0b24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBncmV5O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/game-engine.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/game-engine.service.ts ***!
    \********************************************************/

  /*! exports provided: GameEngineService */

  /***/
  function srcAppSharedServicesGameEngineServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameEngineService", function () {
      return GameEngineService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _obx_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./obx-loader.service */
    "./src/app/shared/services/obx-loader.service.ts");
    /* harmony import */


    var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! three */
    "./node_modules/three/build/three.module.js");
    /* harmony import */


    var postprocessing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! postprocessing */
    "./node_modules/postprocessing/build/postprocessing.esm.js");

    var GameEngineService = /*#__PURE__*/function () {
      function GameEngineService(ngZone, obxLoader) {
        _classCallCheck(this, GameEngineService);

        this.ngZone = ngZone;
        this.obxLoader = obxLoader;
        this.clock = new three__WEBPACK_IMPORTED_MODULE_2__["Clock"]();
        this.fpsCounter = 0;
        this.frameId = null;
      }

      _createClass(GameEngineService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
          }

          if (this.fpsInterval) {
            clearInterval(this.fpsInterval);
          }
        }
      }, {
        key: "createScene",
        value: function createScene(canvas) {
          this.canvas = canvas.nativeElement;
          this.initScene();
          this.initCamera();
          this.initLight();
          this.initWorld();
          this.initFpsCalculation();
          this.animate();
        }
      }, {
        key: "initFpsCalculation",
        value: function initFpsCalculation() {
          var _this = this;

          this.fpsInterval = setInterval(function () {
            _this.fps = _this.fpsCounter.toString();
            _this.fpsCounter = 0;
          }, 1000);
        }
      }, {
        key: "initScene",
        value: function initScene() {
          this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({
            canvas: this.canvas,
            alpha: true,
            antialias: true
          });
          this.renderer.setSize(window.innerWidth, window.innerHeight);
          this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        }
      }, {
        key: "initCamera",
        value: function initCamera() {
          this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](60, window.innerWidth / window.innerHeight, 0.3, 1000);
          this.camera.position.set(13.320, 26.500, 20.714);
          this.camera.rotation.set(-this.degToRad(42.40), this.degToRad(23.6), this.degToRad(22.2));
          this.scene.add(this.camera);
          this.composer = new postprocessing__WEBPACK_IMPORTED_MODULE_3__["EffectComposer"](new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]());
          this.composer.addPass(new postprocessing__WEBPACK_IMPORTED_MODULE_3__["RenderPass"](this.scene, this.camera));
          var bloomOptions = {
            luminanceThreshold: 0.2,
            luminanceSmoothing: 0.075,
            height: 480
          };
          var bloom = new postprocessing__WEBPACK_IMPORTED_MODULE_3__["BloomEffect"](bloomOptions); //const selectiveBloomEffect = new SelectiveBloomEffect(scene, camera, bloomOptions);

          this.composer.addPass(new postprocessing__WEBPACK_IMPORTED_MODULE_3__["EffectPass"](this.camera, bloom));
        }
      }, {
        key: "initLight",
        value: function initLight() {
          this.light = new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](0x404040);
          this.light.position.z = -10;
          this.light.intensity = 3;
          this.light.castShadow = true;
          this.scene.add(this.light);
          this.spotLight = new three__WEBPACK_IMPORTED_MODULE_2__["SpotLight"](0xfdfbd3);
          this.spotLight.position.set(9, 30, 7.5);
          this.spotLight.intensity = 1;
          this.spotLight.angle = 0.3;
          this.spotLight.castShadow = true;
          var directionalLight = new three__WEBPACK_IMPORTED_MODULE_2__["DirectionalLight"](0xfdfbd3);
          directionalLight.castShadow = true;
          directionalLight.intensity = 0.5;
          this.scene.add(directionalLight); //this.scene.add(this.spotLight);
        }
      }, {
        key: "initWorld",
        value: function initWorld() {
          //this.obxLoader.loadObject(this.scene, ObxNames.WORLD,ObxTypes.OBJ);
          this.obxLoader.loadObject(this.scene, _obx_loader_service__WEBPACK_IMPORTED_MODULE_1__["ObxNames"].WORLD, _obx_loader_service__WEBPACK_IMPORTED_MODULE_1__["ObxTypes"].GLTF);
        }
      }, {
        key: "animate",
        value: function animate() {
          var _this2 = this;

          this.ngZone.runOutsideAngular(function () {
            if (document.readyState !== 'loading') {
              _this2.render();
            } else {
              window.addEventListener('DOMContentLoaded', function () {
                _this2.render();
              });
            }

            window.addEventListener('resize', function () {
              _this2.resize();
            });
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;

          this.frameId = requestAnimationFrame(function () {
            _this3.render();
          }); //this.cube.rotation.x += 0.01;
          //this.cube.rotation.y += 0.01;

          var dt = this.clock.getDelta();
          this.fpsCounter++;
          this.obxLoader.update(dt);
          this.renderer.render(this.scene, this.camera);
          this.composer.render(dt);
        }
      }, {
        key: "resize",
        value: function resize() {
          var width = window.innerWidth;
          var height = window.innerHeight;
          this.camera.aspect = width / height;
          this.camera.updateProjectionMatrix();
          this.renderer.setSize(width, height);
        }
      }, {
        key: "degToRad",
        value: function degToRad(degree) {
          return Math.PI / 180 * degree;
        }
      }]);

      return GameEngineService;
    }();

    GameEngineService.ɵfac = function GameEngineService_Factory(t) {
      return new (t || GameEngineService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_obx_loader_service__WEBPACK_IMPORTED_MODULE_1__["ObxLoaderService"]));
    };

    GameEngineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GameEngineService,
      factory: GameEngineService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameEngineService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _obx_loader_service__WEBPACK_IMPORTED_MODULE_1__["ObxLoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/obx-loader.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/services/obx-loader.service.ts ***!
    \*******************************************************/

  /*! exports provided: ObxLoaderService, ObxNames, ObxTypes */

  /***/
  function srcAppSharedServicesObxLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObxLoaderService", function () {
      return ObxLoaderService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObxNames", function () {
      return ObxNames;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObxTypes", function () {
      return ObxTypes;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! three/examples/jsm/loaders/OBJLoader.js */
    "./node_modules/three/examples/jsm/loaders/OBJLoader.js");
    /* harmony import */


    var three_examples_jsm_loaders_FBXLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! three/examples/jsm/loaders/FBXLoader */
    "./node_modules/three/examples/jsm/loaders/FBXLoader.js");
    /* harmony import */


    var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! three/examples/jsm/loaders/GLTFLoader */
    "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ObxLoaderService = /*#__PURE__*/function () {
      function ObxLoaderService() {
        _classCallCheck(this, ObxLoaderService);

        this.runningObjects = new Array();
        this.fbxLoader = new three_examples_jsm_loaders_FBXLoader__WEBPACK_IMPORTED_MODULE_2__["FBXLoader"]();
        this.objLoader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__["OBJLoader"]();
        this.gltfLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__["GLTFLoader"]();
      }

      _createClass(ObxLoaderService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.runningObjects = [];
        }
      }, {
        key: "loadObject",
        value: function loadObject(scene, obxName, type) {
          var _this4 = this;

          var loader = this.getLoader(type);
          var objectPath = this.getObject(obxName);
          loader.load(objectPath, function (group) {
            if (type === ObxTypes.GLTF) {
              group.scene.castShadow = true;
              group.scene.receiveShadow = true; //group.scene.scale.set(0.2,0.2,0.2)

              scene.add(group.scene);

              _this4.runningObjects.push(group.scene);
            } else {
              //group.position.set(0,0,0);
              scene.add(group);

              _this4.runningObjects.push(group);
            }
          }, function (xhr) {
            console.log(xhr.loaded / xhr.total * 100 + '% loaded');
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getLoader",
        value: function getLoader(type) {
          switch (type) {
            case ObxTypes.FBX:
              return this.fbxLoader;

            case ObxTypes.OBJ:
              return this.fbxLoader;

            case ObxTypes.GLTF:
              return this.gltfLoader;
          }
        }
      }, {
        key: "getObject",
        value: function getObject(obxName) {
          switch (obxName) {
            case ObxNames.WORLD:
              if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) return "https://tygro101.github.io/planet-conquer/assets/3ds/worlds/planetv3.glb";else return "/assets/3ds/worlds/planetv3.glb";

            case ObxNames.TEMP:
              return "/assets/obj/floor.fbx";

            case ObxNames.WORLD_WITH_SUN:
              return "/assets/3ds/worlds/planet-with-sun.glb";
          }
        }
      }, {
        key: "update",
        value: function update(dt) {
          this.runningObjects.forEach(function (item) {
            //item.rotation.x += dt/6;
            item.rotation.y += dt / 7; //item.rotation.z += dt/9;
          });
        }
      }]);

      return ObxLoaderService;
    }();

    ObxLoaderService.ɵfac = function ObxLoaderService_Factory(t) {
      return new (t || ObxLoaderService)();
    };

    ObxLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ObxLoaderService,
      factory: ObxLoaderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObxLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    var ObxNames;

    (function (ObxNames) {
      ObxNames["WORLD"] = "world";
      ObxNames["TEMP"] = "temp";
      ObxNames["WORLD_WITH_SUN"] = "world with sun";
    })(ObxNames || (ObxNames = {}));

    var ObxTypes;

    (function (ObxTypes) {
      ObxTypes["OBJ"] = "obj";
      ObxTypes["FBX"] = "fbx";
      ObxTypes["GLTF"] = "gltf";
    })(ObxTypes || (ObxTypes = {}));
    /***/

  },

  /***/
  "./src/app/shared/services/socket-controller.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/services/socket-controller.service.ts ***!
    \**************************************************************/

  /*! exports provided: SocketControllerService */

  /***/
  function srcAppSharedServicesSocketControllerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketControllerService", function () {
      return SocketControllerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SocketControllerService = function SocketControllerService() {
      _classCallCheck(this, SocketControllerService);
    };

    SocketControllerService.ɵfac = function SocketControllerService_Factory(t) {
      return new (t || SocketControllerService)();
    };

    SocketControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocketControllerService,
      factory: SocketControllerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketControllerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_socket_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/socket-controller.service */
    "./src/app/shared/services/socket-controller.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_services_socket_controller_service__WEBPACK_IMPORTED_MODULE_1__["SocketControllerService"]],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [_services_socket_controller_service__WEBPACK_IMPORTED_MODULE_1__["SocketControllerService"]],
          bootstrap: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Ran\Documents\GitHub\planet-conquer\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map