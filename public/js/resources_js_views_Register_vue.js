(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InputVs.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InputVs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["type", "placeholder", "label-placeholder", 'value'],
  name: "input-vs",
  computed: {
    getlabelPlaceholder: function getlabelPlaceholder() {
      return this["labelPlaceholder"] != undefined;
    },
    isIcon: function isIcon() {
      return this.$slots.icon != undefined;
    }
  },
  data: function data() {
    return {
      invalue: this.value
    };
  },
  methods: {
    handleInput: function handleInput(e) {
      this.$emit("input", this.invalue);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_InputVs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/InputVs */ "./resources/js/components/InputVs.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    InputVs: _components_InputVs__WEBPACK_IMPORTED_MODULE_0__.default
  },
  created: function created() {
    if (window.token) {
      this.$router.replace({
        name: 'home'
      });
    }
  },
  data: function data() {
    return {
      data: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errors: {},
      disabled: false,
      error: false,
      errorMessage: "",
      color: "danger"
    };
  },
  computed: {
    registerDisabled: function registerDisabled() {
      return this.disabled;
    }
  },
  methods: {
    register: function register() {
      var _this = this;

      this.disabled = true;
      this.errors = {};
      this.error = false;
      var loading = this.$vs.loading({
        target: this.$refs.register,
        scale: "0.6",
        background: "primary",
        opacity: 1,
        color: "#fff"
      });
      axios.post("register", this.data).then(function (res) {
        _this.disabled = false;
        loading.close();

        _this.$swal({
          title: res.data.message,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: "success"
        });

        _this.$store.dispatch("login", res.data);

        _this.$router.replace({
          name: 'home'
        });
      })["catch"](function (err) {
        loading.close();
        _this.disabled = false;
        _this.error = true;
        _this.color = "danger";
        _this.errorMessage = err.response.data.message;

        if (err.response.status == 422) {
          _this.errors = err.response.data.errors;
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/InputVs.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/InputVs.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputVs_vue_vue_type_template_id_6b7953e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputVs.vue?vue&type=template&id=6b7953e8& */ "./resources/js/components/InputVs.vue?vue&type=template&id=6b7953e8&");
/* harmony import */ var _InputVs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputVs.vue?vue&type=script&lang=js& */ "./resources/js/components/InputVs.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _InputVs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _InputVs_vue_vue_type_template_id_6b7953e8___WEBPACK_IMPORTED_MODULE_0__.render,
  _InputVs_vue_vue_type_template_id_6b7953e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/InputVs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Register.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Register.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=3563ad7c& */ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/InputVs.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/InputVs.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputVs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputVs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InputVs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputVs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/InputVs.vue?vue&type=template&id=6b7953e8&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/InputVs.vue?vue&type=template&id=6b7953e8& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputVs_vue_vue_type_template_id_6b7953e8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputVs_vue_vue_type_template_id_6b7953e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputVs_vue_vue_type_template_id_6b7953e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputVs.vue?vue&type=template&id=6b7953e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InputVs.vue?vue&type=template&id=6b7953e8&");


/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=template&id=3563ad7c& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=3563ad7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InputVs.vue?vue&type=template&id=6b7953e8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InputVs.vue?vue&type=template&id=6b7953e8& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "input-main" }, [
    _c("div", { staticClass: "input-parent" }, [
      _c("div", { staticClass: "content-vs" }, [
        _vm.type === "checkbox"
          ? _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.invalue,
                  expression: "invalue"
                }
              ],
              staticClass: "input-vs",
              class: { "input-vs--has-icon": _vm.isIcon },
              attrs: { type: "checkbox" },
              domProps: {
                value: _vm.value,
                checked: Array.isArray(_vm.invalue)
                  ? _vm._i(_vm.invalue, _vm.value) > -1
                  : _vm.invalue
              },
              on: {
                input: _vm.handleInput,
                change: function($event) {
                  var $$a = _vm.invalue,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = _vm.value,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.invalue = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.invalue = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.invalue = $$c
                  }
                }
              }
            })
          : _vm.type === "radio"
          ? _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.invalue,
                  expression: "invalue"
                }
              ],
              staticClass: "input-vs",
              class: { "input-vs--has-icon": _vm.isIcon },
              attrs: { type: "radio" },
              domProps: {
                value: _vm.value,
                checked: _vm._q(_vm.invalue, _vm.value)
              },
              on: {
                input: _vm.handleInput,
                change: function($event) {
                  _vm.invalue = _vm.value
                }
              }
            })
          : _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.invalue,
                  expression: "invalue"
                }
              ],
              staticClass: "input-vs",
              class: { "input-vs--has-icon": _vm.isIcon },
              attrs: { type: _vm.type },
              domProps: { value: _vm.value, value: _vm.invalue },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.invalue = $event.target.value
                  },
                  _vm.handleInput
                ]
              }
            }),
        _vm._v(" "),
        _vm.invalue == ""
          ? _c(
              "label",
              {
                staticClass: "label-vs",
                class: { "label-vs--placeholder": _vm.getlabelPlaceholder }
              },
              [_vm._v(_vm._s(_vm.labelPlaceholder || _vm.placeholder))]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.isIcon
          ? _c("span", { staticClass: "icon-vs" }, [_vm._t("icon")], 2)
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vs-input__message vs-input__message--danger" },
      [_vm._t("error")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "transition",
        { attrs: { name: "zoom-fade", mode: "out-in", appear: "" } },
        [_c("h4", [_vm._v("Register")])]
      ),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted mb-4" }, [
        _vm._v("Sign up to continue to ചാറ്റ് മുറി.")
      ]),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "zoom-fade", mode: "out-in", appear: "" } },
        [
          _c(
            "div",
            { staticClass: "new-card p-4" },
            [
              _c("vs-alert", {
                attrs: { closable: "", color: _vm.color },
                scopedSlots: _vm._u([
                  {
                    key: "title",
                    fn: function() {
                      return [_vm._v(" " + _vm._s(_vm.errorMessage) + " ")]
                    },
                    proxy: true
                  }
                ]),
                model: {
                  value: _vm.error,
                  callback: function($$v) {
                    _vm.error = $$v
                  },
                  expression: "error"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pt-4" },
                [
                  _c(
                    "input-vs",
                    {
                      attrs: { type: "text", labelPlaceholder: "Name" },
                      model: {
                        value: _vm.data.name,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "name", $$v)
                        },
                        expression: "data.name"
                      }
                    },
                    [
                      _c("div", { attrs: { slot: "icon" }, slot: "icon" }, [
                        _c("i", { staticClass: "bx bx-user" })
                      ]),
                      _vm._v(" "),
                      _vm.errors.hasOwnProperty("name")
                        ? _c(
                            "div",
                            { attrs: { slot: "error" }, slot: "error" },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.errors.name[0]) +
                                  "\n          "
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pt-4" },
                [
                  _c(
                    "input-vs",
                    {
                      attrs: { type: "text", labelPlaceholder: "EMail" },
                      model: {
                        value: _vm.data.email,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "email", $$v)
                        },
                        expression: "data.email"
                      }
                    },
                    [
                      _c("div", { attrs: { slot: "icon" }, slot: "icon" }, [
                        _c("i", { staticClass: "bx bx-mail-send" })
                      ]),
                      _vm._v(" "),
                      _vm.errors.hasOwnProperty("email")
                        ? _c(
                            "div",
                            { attrs: { slot: "error" }, slot: "error" },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.errors.email[0]) +
                                  "\n          "
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pt-4" },
                [
                  _c(
                    "input-vs",
                    {
                      attrs: { type: "password", labelPlaceholder: "Password" },
                      model: {
                        value: _vm.data.password,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "password", $$v)
                        },
                        expression: "data.password"
                      }
                    },
                    [
                      _c("div", { attrs: { slot: "icon" }, slot: "icon" }, [
                        _c("i", { staticClass: "bx bx-lock" })
                      ]),
                      _vm._v(" "),
                      _vm.errors.hasOwnProperty("password")
                        ? _c(
                            "div",
                            { attrs: { slot: "error" }, slot: "error" },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.errors.password[0]) +
                                  "\n          "
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-4" },
                [
                  _c(
                    "input-vs",
                    {
                      attrs: {
                        type: "password",
                        labelPlaceholder: "Confirm Password"
                      },
                      model: {
                        value: _vm.data.password_confirmation,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "password_confirmation", $$v)
                        },
                        expression: "data.password_confirmation"
                      }
                    },
                    [
                      _c("div", { attrs: { slot: "icon" }, slot: "icon" }, [
                        _c("i", { staticClass: "bx bx-lock" })
                      ]),
                      _vm._v(" "),
                      _vm.errors.hasOwnProperty("password_confirmation")
                        ? _c(
                            "div",
                            { attrs: { slot: "error" }, slot: "error" },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.errors.password_confirmation[0]) +
                                  "\n          "
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  ref: "register",
                  staticClass: "mt-4",
                  attrs: {
                    block: "",
                    active: "",
                    disabled: _vm.registerDisabled
                  },
                  on: { click: _vm.register }
                },
                [_vm._v("Register")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mt-5 text-center" }, [
        _c(
          "p",
          [
            _vm._v("\n      Do you have an account ?\n      "),
            _c(
              "router-link",
              {
                staticClass: "font-weight-medium text-primary",
                attrs: { to: { name: "login" } }
              },
              [_vm._v("\n        Signin now\n      ")]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);