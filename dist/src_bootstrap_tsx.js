"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkplan_a"] = self["webpackChunkplan_a"] || []).push([["src_bootstrap_tsx"],{

/***/ "./src/App.styles.ts":
/*!***************************!*\
  !*** ./src/App.styles.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ \"webpack/sharing/consume/default/react-jss/react-jss\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)({\n  \"@global\": {\n    body: {\n      width: \"100vw\",\n      margin: 0,\n      background: \"#ffffff\",\n      height: \"100vh\",\n      fontFamily: \"'Rational Semi Bold', Daytona, sans-serif\"\n    }\n  },\n  link: {\n    cursor: \"pointer\",\n    textDecoration: \"underline\",\n    color: \"rgb(20, 20, 20)\",\n    \"&:not(:last-child)\": {\n      marginRight: \"2rem\"\n    },\n    \"&:hover\": {\n      fontWeight: 600\n    }\n  },\n  activePage: {\n    fontWeight: 600,\n    pointerEvents: \"none\",\n    textDecoration: \"none\"\n  },\n  wrapper: {\n    display: \"flex\",\n    height: \"100vh\",\n    flexDirection: \"column\"\n  },\n  navWrapper: {\n    height: 50,\n    verticalAlign: \"middle\",\n    display: \"inline-block\",\n    marginLeft: 30\n  },\n  nav: {\n    zIndex: 1,\n    height: \"8rem\",\n    padding: \"2rem 2rem 0 2rem\",\n    position: \"sticky\",\n    background: \"#fff\",\n    top: 0\n  },\n  content: {\n    transform: \"rotate(0deg)\",\n    background: \"#ffffff\",\n    height: \"calc(100% - 8rem)\",\n    padding: \"0 2rem 0 2rem\"\n  },\n  imageButton: {\n    border: 0,\n    background: \"none\",\n    \"& > img\": {\n      cursor: \"pointer\"\n    }\n  }\n}, {\n  name: \"App\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);\n\n//# sourceURL=webpack://plan-a/./src/App.styles.ts?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RemoteWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RemoteWrapper */ \"./src/RemoteWrapper/index.ts\");\n/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavLink */ \"./src/NavLink/index.ts\");\n/* harmony import */ var _externalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./externalComponents */ \"./src/externalComponents.ts\");\n/* harmony import */ var _useSDK__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useSDK */ \"./src/useSDK/index.ts\");\n/* harmony import */ var _App_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.styles */ \"./src/App.styles.ts\");\n\n\n\n\n\n\n\n/**\n *\n * @returns\n */\nconst App = () => {\n  const [activePage, setActivePage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_externalComponents__WEBPACK_IMPORTED_MODULE_3__.defaultPage);\n  const [, setCurrentLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const classes = (0,_App_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  const SDK = (0,_useSDK__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(activePage, setCurrentLanguage, setActivePage);\n  const ActivePage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => _externalComponents__WEBPACK_IMPORTED_MODULE_3__[\"default\"][activePage], [activePage]);\n  const {\n    t\n  } = SDK;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes.wrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes.nav\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RemoteWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    SDK: SDK\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_externalComponents__WEBPACK_IMPORTED_MODULE_3__.TranslationToggle, SDK)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: classes.imageButton,\n    onClick: () => setActivePage(_externalComponents__WEBPACK_IMPORTED_MODULE_3__.defaultPage)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://factor-us-development.myshopify.com/cdn/shop/files/favicon_factor.webp?v=1673837643&width=50\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes.navWrapper\n  }, Object.keys(_externalComponents__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).map((page, i) => page !== _externalComponents__WEBPACK_IMPORTED_MODULE_3__.defaultPage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: i,\n    t: t,\n    classes: classes,\n    page: page,\n    activePage: activePage,\n    setActivePage: setActivePage\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes.content\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RemoteWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    SDK: SDK\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActivePage, SDK))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://plan-a/./src/App.tsx?");

/***/ }),

/***/ "./src/ErrorBoundary/ErrorBoundary.tsx":
/*!*********************************************!*\
  !*** ./src/ErrorBoundary/ErrorBoundary.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * this is just copied from a standardized ErrorBoundry and\n * can be customized as we see fit\n */\nclass ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props);\n    this.state = {\n      hasError: false,\n      error: null\n    };\n  }\n  static getDerivedStateFromError(error) {\n    // Update state so the next render will show the fallback UI.\n    return {\n      hasError: true,\n      error\n    };\n  }\n  componentDidCatch(error, errorInfo) {\n    console.error(this, error, errorInfo);\n    // You can also log the error to an error reporting service\n    // logErrorToMyService(error, errorInfo);\n  }\n  render() {\n    const {\n      error,\n      hasError\n    } = this.state;\n    if (hasError) {\n      // You can render any custom fallback UI\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Something went wrong. \", error?.message);\n    }\n    return this.props.children;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);\n\n//# sourceURL=webpack://plan-a/./src/ErrorBoundary/ErrorBoundary.tsx?");

/***/ }),

/***/ "./src/ErrorBoundary/index.ts":
/*!************************************!*\
  !*** ./src/ErrorBoundary/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorBoundary */ \"./src/ErrorBoundary/ErrorBoundary.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://plan-a/./src/ErrorBoundary/index.ts?");

/***/ }),

/***/ "./src/Loader/Loader.styles.ts":
/*!*************************************!*\
  !*** ./src/Loader/Loader.styles.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ \"webpack/sharing/consume/default/react-jss/react-jss\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)({\n  \"@global\": {\n    \"@keyframes animateC\": {\n      \"0%\": {\n        transform: \"rotate(0deg)\"\n      },\n      \"100%\": {\n        transform: \"rotate(360deg)\"\n      }\n    },\n    \"@keyframes animate\": {\n      \"0%\": {\n        transform: \"rotate(45deg)\"\n      },\n      \"100%\": {\n        transform: \"rotate(405deg)\"\n      }\n    }\n  },\n  ring: {\n    position: \"absolute\",\n    top: \"50%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    width: 150,\n    height: 150,\n    background: \"transparent\",\n    border: \"3px solid #3c3c3c\",\n    borderRadius: \"50%\",\n    textAlign: \"center\",\n    lineHeight: 150,\n    fontFamily: \"sans-serif\",\n    fontSize: 20,\n    color: \"#fff000\",\n    letterSpacing: 4,\n    textTransform: \"uppercase\",\n    textShadow: \"0 0 10px #fff000\",\n    boxShadow: \"0 0 20px rgba(0,0,0,0.5)\",\n    \"&:before\": {\n      content: \"''\",\n      position: \"absolute\",\n      top: -3,\n      left: -3,\n      width: \"100%\",\n      height: \"100%\",\n      border: \"3px solid transparent\",\n      borderTop: \"3px solid #fff000\",\n      borderRight: \"3px solid #fff000\",\n      borderRadius: \"50%\",\n      animation: \"animateC 2s linear infinite\"\n    },\n    \"& > span\": {\n      display: \"block\",\n      position: \"absolute\",\n      top: \"calc(50% - 2px)\",\n      left: \"50%\",\n      width: \"50%\",\n      height: 4,\n      background: \"transparent\",\n      transformOrigin: \"left\",\n      animation: \"animate 2s linear infinite\",\n      \"&:before\": {\n        content: \"''\",\n        position: \"absolute\",\n        width: 16,\n        height: 16,\n        borderRadius: \"50%\",\n        background: \"#fff000\",\n        top: -6,\n        right: -8,\n        boxShadow: \"0 0 20px #fff000\"\n      }\n    }\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);\n\n//# sourceURL=webpack://plan-a/./src/Loader/Loader.styles.ts?");

/***/ }),

/***/ "./src/Loader/Loader.tsx":
/*!*******************************!*\
  !*** ./src/Loader/Loader.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Loader_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.styles */ \"./src/Loader/Loader.styles.ts\");\n\n\n/**\n *\n * @param param0\n * @returns\n */\nconst Loader = _ref => {\n  let {\n    SDK\n  } = _ref;\n  const classes = (0,_Loader_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  console.log(SDK);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes.ring\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);\n\n//# sourceURL=webpack://plan-a/./src/Loader/Loader.tsx?");

/***/ }),

/***/ "./src/Loader/index.ts":
/*!*****************************!*\
  !*** ./src/Loader/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader */ \"./src/Loader/Loader.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://plan-a/./src/Loader/index.ts?");

/***/ }),

/***/ "./src/NavLink/NavLink.tsx":
/*!*********************************!*\
  !*** ./src/NavLink/NavLink.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n *\n * @param param0\n * @returns\n */\nconst NavLink = _ref => {\n  let {\n    t,\n    classes,\n    page,\n    activePage,\n    setActivePage\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: `${classes.link} ${activePage === page ? classes.activePage : classes.inactivePage}`,\n    onClick: () => setActivePage(page)\n  }, t(`${page}.HEADER`));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);\n\n//# sourceURL=webpack://plan-a/./src/NavLink/NavLink.tsx?");

/***/ }),

/***/ "./src/NavLink/index.ts":
/*!******************************!*\
  !*** ./src/NavLink/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink */ \"./src/NavLink/NavLink.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NavLink__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://plan-a/./src/NavLink/index.ts?");

/***/ }),

/***/ "./src/RemoteWrapper/RemoteWrapper.tsx":
/*!*********************************************!*\
  !*** ./src/RemoteWrapper/RemoteWrapper.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorBoundary */ \"./src/ErrorBoundary/index.ts\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loader */ \"./src/Loader/index.ts\");\n\n\n\n/**\n *\n * @param param0\n * @returns\n */\nconst RemoteWrapper = _ref => {\n  let {\n    children,\n    SDK\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      SDK: SDK\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: \"rotate(0deg)\"\n    }\n  }, children)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoteWrapper);\n\n//# sourceURL=webpack://plan-a/./src/RemoteWrapper/RemoteWrapper.tsx?");

/***/ }),

/***/ "./src/RemoteWrapper/index.ts":
/*!************************************!*\
  !*** ./src/RemoteWrapper/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _RemoteWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemoteWrapper */ \"./src/RemoteWrapper/RemoteWrapper.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_RemoteWrapper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://plan-a/./src/RemoteWrapper/index.ts?");

/***/ }),

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n\n\n\nconst {\n  body\n} = document;\nif (body) {\n  const rootApp = document.createElement(\"div\");\n  body.appendChild(rootApp);\n  const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootApp);\n  root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n}\n\n//# sourceURL=webpack://plan-a/./src/bootstrap.tsx?");

/***/ }),

/***/ "./src/externalComponents.ts":
/*!***********************************!*\
  !*** ./src/externalComponents.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LandingPage: () => (/* binding */ LandingPage),\n/* harmony export */   MenuPage: () => (/* binding */ MenuPage),\n/* harmony export */   TranslationToggle: () => (/* binding */ TranslationToggle),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   defaultPage: () => (/* binding */ defaultPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n * ts is having issue with the remote loading syntax\n * this can be revisited, there's _always_ a better answer than ts-ignore\n */\n// @ts-ignore\nconst LandingPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_Onboarding_LandingPage\").then(__webpack_require__.t.bind(__webpack_require__, /*! Onboarding/LandingPage */ \"webpack/container/remote/Onboarding/LandingPage\", 23)));\n// @ts-ignore\nconst TranslationToggle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_Onboarding_TranslationToggle\").then(__webpack_require__.t.bind(__webpack_require__, /*! Onboarding/TranslationToggle */ \"webpack/container/remote/Onboarding/TranslationToggle\", 23)));\n// @ts-ignore\nconst MenuPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_Dashboard_MenuPage\").then(__webpack_require__.t.bind(__webpack_require__, /*! Dashboard/MenuPage */ \"webpack/container/remote/Dashboard/MenuPage\", 23)));\nconst defaultPage = \"LANDING_PAGE\";\nconst pages = {\n  \"LANDING_PAGE\": LandingPage,\n  \"MENU_PAGE\": MenuPage\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pages);\n\n//# sourceURL=webpack://plan-a/./src/externalComponents.ts?");

/***/ }),

/***/ "./src/translations.ts":
/*!*****************************!*\
  !*** ./src/translations.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * this represents a simplified i18n system to be replaced (or not i guess)\n * by whatever system would use\n */\n\nconst translations = {\n  en: {\n    LOADING_TEXT: \"Now loading...\",\n    SET_LANGUAGE: \"Toggle Language\",\n    LANDING_PAGE: {\n      LOGIN_TITLE: \"Log in\",\n      LOGIN_PROMPT: \"Enter your email and we'll send you a login code\"\n    },\n    MENU_PAGE: {\n      HEADER: \"Menu\",\n      DELIVERY_DATE: \"Menu for {{date}} deliveries\",\n      ADD_TO_CART_CTA: \"Add to cart\"\n    }\n  },\n  jp: {\n    LOADING_TEXT: \"ロード中...\",\n    SET_LANGUAGE: \"トグル言語\",\n    LANDING_PAGE: {\n      LOGIN_TITLE: \"jhfjfv\",\n      LOGIN_PROMPT: \"jhfutdf\"\n    },\n    MENU_PAGE: {\n      HEADER: \"メニュー\",\n      DELIVERY_DATE: \"{{date}}に配信されるメニュー\",\n      ADD_TO_CART_CTA: \"カートに入れる\"\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (translations);\n\n//# sourceURL=webpack://plan-a/./src/translations.ts?");

/***/ }),

/***/ "./src/useSDK/index.ts":
/*!*****************************!*\
  !*** ./src/useSDK/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _useSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSDK */ \"./src/useSDK/useSDK.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_useSDK__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://plan-a/./src/useSDK/index.ts?");

/***/ }),

/***/ "./src/useSDK/useSDK.tsx":
/*!*******************************!*\
  !*** ./src/useSDK/useSDK.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var translationary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translationary */ \"webpack/sharing/consume/default/translationary/translationary\");\n/* harmony import */ var translationary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(translationary__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loader */ \"./src/Loader/index.ts\");\n/* harmony import */ var _RemoteWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RemoteWrapper */ \"./src/RemoteWrapper/index.ts\");\n/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorBoundary */ \"./src/ErrorBoundary/index.ts\");\n/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../translations */ \"./src/translations.ts\");\n\n\n\n\n\n\n/**\n *\n * @param activePage\n * @param setCurrentLanguage\n * @returns\n */\nconst useSDK = (activePage, setCurrentLanguage, setActivePage) => {\n  /**\n   *\n   */\n  const t = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new (translationary__WEBPACK_IMPORTED_MODULE_1___default())({\n    appName: \"sdk\",\n    fetchTranslations: _ref => {\n      let {\n        lang\n      } = _ref;\n      return _translations__WEBPACK_IMPORTED_MODULE_5__[\"default\"][lang];\n    },\n    lang: \"en\",\n    onLanguageChange: lang => setCurrentLanguage(lang),\n    formatter: a => a\n  }), []);\n\n  /**\n   *\n   */\n  const scopedT = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.assign((key, props) => t(`${activePage}.${key}`, props), t), [activePage, t]);\n  const SDK = {\n    components: {},\n    scopedT,\n    setActivePage,\n    t\n  };\n  const WrappedLoader = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    SDK: SDK\n  });\n  const WrappedRemoteWrapper = _ref2 => {\n    let {\n      children\n    } = _ref2;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RemoteWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      SDK: SDK\n    }, children);\n  };\n  SDK.components = {\n    ErrorBoundary: _ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    Loader: WrappedLoader,\n    RemoteWrapper: WrappedRemoteWrapper\n  };\n\n  /**\n   *\n   */\n  return SDK;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSDK);\n\n//# sourceURL=webpack://plan-a/./src/useSDK/useSDK.tsx?");

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar m = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\nif (false) {} else {\n  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;\n  exports.createRoot = function(c, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.createRoot(c, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n  exports.hydrateRoot = function(c, h, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.hydrateRoot(c, h, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n}\n\n\n//# sourceURL=webpack://plan-a/./node_modules/react-dom/client.js?");

/***/ })

}]);