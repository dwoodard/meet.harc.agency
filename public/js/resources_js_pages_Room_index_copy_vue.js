"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Room_index_copy_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Room/index copy.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Room/index copy.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Room',
  props: {
    rooms: Array
  },
  data: function data() {
    return {
      search: '',
      headers: [{
        text: 'ID',
        align: 'start',
        sortable: false,
        value: 'id'
      }, {
        text: 'Name',
        value: 'name'
      }, {
        text: 'UID',
        value: 'uid'
      }, {
        text: 'Description',
        value: 'description'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }]
    };
  },
  methods: {
    //
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Room/index copy.vue?vue&type=template&id=59720c84&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Room/index copy.vue?vue&type=template&id=59720c84&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-data-table", {
    staticClass: "elevation-1",
    attrs: {
      headers: _vm.headers,
      items: _vm.rooms,
      "items-per-page": 5,
      search: _vm.search
    },
    scopedSlots: _vm._u([{
      key: "expand",
      fn: function fn(props) {
        return [_c("v-data-table", {
          staticClass: "elevation-1",
          attrs: {
            headers: _vm.headers,
            items: props.item.food,
            pagination: _vm.pagination,
            expand: "true",
            "select-all": "",
            "item-key": "category",
            "hide-actions": ""
          },
          on: {
            "update:pagination": function updatePagination($event) {
              _vm.pagination = $event;
            }
          },
          scopedSlots: _vm._u([{
            key: "items",
            fn: function fn(props) {
              return [_c("tr", {
                on: {
                  click: function click($event) {
                    props.expanded = !props.expanded;
                  }
                }
              }, [_c("td", [_c("v-checkbox", {
                attrs: {
                  "input-value": props.selected,
                  primary: "",
                  "hide-details": ""
                }
              })], 1), _vm._v(" "), _c("td", [_vm._v(_vm._s(props.item.name))]), _vm._v(" "), _c("td", {
                staticClass: "text-xs-right"
              }, [_vm._v(_vm._s(props.item.calories))]), _vm._v(" "), _c("td", {
                staticClass: "text-xs-right"
              }, [_vm._v(_vm._s(props.item.fat))]), _vm._v(" "), _c("td", {
                staticClass: "text-xs-right"
              }, [_vm._v(_vm._s(props.item.carbs))]), _vm._v(" "), _c("td", {
                staticClass: "text-xs-right"
              }, [_vm._v(_vm._s(props.item.protein))]), _vm._v(" "), _c("td", {
                staticClass: "text-xs-right"
              }, [_vm._v(_vm._s(props.item.iron))])])];
            }
          }], null, true),
          model: {
            value: _vm.selected,
            callback: function callback($$v) {
              _vm.selected = $$v;
            },
            expression: "selected"
          }
        })];
      }
    }, {
      key: "top",
      fn: function fn() {
        return [_c("v-toolbar", {
          attrs: {
            flat: ""
          }
        }, [_c("v-toolbar-title", [_vm._v("Rooms")]), _vm._v(" "), _c("v-divider", {
          staticClass: "mx-4",
          attrs: {
            inset: "",
            vertical: ""
          }
        }), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-text-field", {
          attrs: {
            "append-icon": "mdi-magnify",
            label: "Search",
            "single-line": "",
            "hide-details": ""
          },
          model: {
            value: _vm.search,
            callback: function callback($$v) {
              _vm.search = $$v;
            },
            expression: "search"
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "item.uid",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("a", {
          attrs: {
            href: "/rooms/".concat(item.uid)
          }
        }, [_vm._v(_vm._s(item.uid))])];
      }
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/Room/index copy.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/Room/index copy.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_copy_vue_vue_type_template_id_59720c84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index copy.vue?vue&type=template&id=59720c84&scoped=true& */ "./resources/js/pages/Room/index copy.vue?vue&type=template&id=59720c84&scoped=true&");
/* harmony import */ var _index_copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index copy.vue?vue&type=script&lang=js& */ "./resources/js/pages/Room/index copy.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_copy_vue_vue_type_template_id_59720c84_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_copy_vue_vue_type_template_id_59720c84_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "59720c84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Room/index copy.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Room/index copy.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Room/index copy.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index copy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Room/index copy.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Room/index copy.vue?vue&type=template&id=59720c84&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/Room/index copy.vue?vue&type=template&id=59720c84&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_copy_vue_vue_type_template_id_59720c84_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_copy_vue_vue_type_template_id_59720c84_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_copy_vue_vue_type_template_id_59720c84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index copy.vue?vue&type=template&id=59720c84&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Room/index copy.vue?vue&type=template&id=59720c84&scoped=true&");


/***/ })

}]);