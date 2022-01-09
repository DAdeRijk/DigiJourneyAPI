(self["webpackChunkdigi_journey"] = self["webpackChunkdigi_journey"] || []).push([[92],{

/***/ 69666:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=66)}({0:function(t,r){t.exports=e},66:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M17 14h-4.34a6 6 0 110-4H23v4h-2v4h-4v-4zM7 14a2 2 0 100-4 2 2 0 000 4z",fill:"#8E8EA9"}))}}})}));

/***/ }),

/***/ 87071:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactIntl=__webpack_require__(97132);var _helperPlugin=__webpack_require__(68547);var _IconButton=__webpack_require__(30741);var _Duplicate=_interopRequireDefault(__webpack_require__(67483));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactCopyToClipboard=__webpack_require__(74855);var _Key=_interopRequireDefault(__webpack_require__(69666));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var HeaderContentBox=function HeaderContentBox(_ref){var apiToken=_ref.apiToken;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var toggleNotification=(0,_helperPlugin.useNotification)();var _useTracking=(0,_helperPlugin.useTracking)(),trackUsage=_useTracking.trackUsage;var trackUsageRef=(0,_react.useRef)(trackUsage);return/*#__PURE__*/_react["default"].createElement(_helperPlugin.ContentBox,{endAction:apiToken&&/*#__PURE__*/_react["default"].createElement("span",{style:{alignSelf:'start'}},/*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard,{onCopy:function onCopy(){trackUsageRef('didCopyTokenKey');toggleNotification({type:'success',message:{id:'Settings.apiTokens.notification.copied'}});},text:apiToken},/*#__PURE__*/_react["default"].createElement(_IconButton.IconButton,{label:formatMessage({id:'app.component.CopyToClipboard.label',defaultMessage:'Copy to clipboard'}),noBorder:true,icon:/*#__PURE__*/_react["default"].createElement(_Duplicate["default"],null),style:{padding:0,height:'1rem'}}))),title:apiToken||formatMessage({id:'Settings.apiTokens.copy.editTitle',defaultMessage:'This token isn’t accessible anymore.'}),subtitle:apiToken?formatMessage({id:'Settings.apiTokens.copy.lastWarning',defaultMessage:'Make sure to copy this token, you won’t be able to see it again!'}):formatMessage({id:'Settings.apiTokens.copy.editMessage',defaultMessage:'For security reasons, you can only see your token once.'}),icon:/*#__PURE__*/_react["default"].createElement(_Key["default"],null),iconBackground:"neutral100"});};HeaderContentBox.defaultProps={apiToken:null};HeaderContentBox.propTypes={apiToken:_propTypes["default"].string};var _default=HeaderContentBox;exports.default=_default;

/***/ }),

/***/ 9461:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _helperPlugin=__webpack_require__(68547);var _Layout=__webpack_require__(78862);var _Main=__webpack_require__(62031);var _Button=__webpack_require__(19408);var _Check=_interopRequireDefault(__webpack_require__(84734));var _reactIntl=__webpack_require__(97132);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var LoadingView=function LoadingView(_ref){var apiTokenName=_ref.apiTokenName;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;(0,_helperPlugin.useFocusWhenNavigate)();return/*#__PURE__*/_react["default"].createElement(_Main.Main,{"aria-busy":"true"},/*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle,{name:"API Tokens"}),/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{primaryAction:/*#__PURE__*/_react["default"].createElement(_Button.Button,{disabled:true,startIcon:/*#__PURE__*/_react["default"].createElement(_Check["default"],null),type:"button",size:"L"},formatMessage({id:'form.button.save',defaultMessage:'Save'})),title:apiTokenName||formatMessage({id:'Settings.apiTokens.createPage.title',defaultMessage:'Create API Token'})}),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null)));};LoadingView.defaultProps={apiTokenName:null};LoadingView.propTypes={apiTokenName:_propTypes["default"].string};var _default=LoadingView;exports.default=_default;

/***/ }),

/***/ 91486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactIntl=__webpack_require__(97132);var _helperPlugin=__webpack_require__(68547);var _Layout=__webpack_require__(78862);var _Main=__webpack_require__(62031);var _Button=__webpack_require__(19408);var _Check=_interopRequireDefault(__webpack_require__(84734));var _ArrowLeft=_interopRequireDefault(__webpack_require__(68717));var _Link=__webpack_require__(85104);var _formik=__webpack_require__(80831);var _Stack=__webpack_require__(9008);var _Box=__webpack_require__(5493);var _Typography=__webpack_require__(49425);var _Grid=__webpack_require__(34626);var _TextInput=__webpack_require__(55967);var _Textarea=__webpack_require__(59626);var _Select=__webpack_require__(43808);var _get=_interopRequireDefault(__webpack_require__(27361));var _reactRouterDom=__webpack_require__(39711);var _reactQuery=__webpack_require__(23724);var _utils=__webpack_require__(26595);var _utils2=__webpack_require__(53777);var _schema=_interopRequireDefault(__webpack_require__(93004));var _LoadingView=_interopRequireDefault(__webpack_require__(9461));var _ContentBox=_interopRequireDefault(__webpack_require__(87071));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var ApiTokenCreateView=function ApiTokenCreateView(){var _history$location$sta,_apiToken2,_apiToken3,_apiToken4;var apiToken;(0,_helperPlugin.useFocusWhenNavigate)();var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useOverlayBlocker=(0,_helperPlugin.useOverlayBlocker)(),lockApp=_useOverlayBlocker.lockApp,unlockApp=_useOverlayBlocker.unlockApp;var toggleNotification=(0,_helperPlugin.useNotification)();var history=(0,_reactRouterDom.useHistory)();var _useTracking=(0,_helperPlugin.useTracking)(),trackUsage=_useTracking.trackUsage;var trackUsageRef=(0,_react.useRef)(trackUsage);var _useRouteMatch=(0,_reactRouterDom.useRouteMatch)('/settings/api-tokens/:id'),id=_useRouteMatch.params.id;var isCreating=id==='create';(0,_react.useEffect)(function(){trackUsageRef.current(isCreating?'didAddTokenFromList':'didEditTokenFromList');},[isCreating]);if((_history$location$sta=history.location.state)!==null&&_history$location$sta!==void 0&&_history$location$sta.apiToken.accessKey){apiToken=history.location.state.apiToken;}var _useQuery=(0,_reactQuery.useQuery)(['api-token',id],/*#__PURE__*/(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var _yield$axiosInstance$,data;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _utils2.axiosInstance.get("/admin/api-tokens/".concat(id));case 2:_yield$axiosInstance$=_context.sent;data=_yield$axiosInstance$.data.data;return _context.abrupt("return",data);case 5:case"end":return _context.stop();}}},_callee);})),{enabled:!isCreating&&!apiToken,onError:function onError(){toggleNotification({type:'warning',message:{id:'notification.error',defaultMessage:'An error occured'}});}}),status=_useQuery.status,data=_useQuery.data;if(data){apiToken=data;}var handleSubmit=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(body,actions){var _ref3,response,errors;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:trackUsageRef.current(isCreating?'willCreateToken':'willEditToken');lockApp();_context2.prev=2;if(!isCreating){_context2.next=9;break;}_context2.next=6;return _utils2.axiosInstance.post("/admin/api-tokens",body);case 6:_context2.t0=_context2.sent;_context2.next=12;break;case 9:_context2.next=11;return _utils2.axiosInstance.put("/admin/api-tokens/".concat(id),body);case 11:_context2.t0=_context2.sent;case 12:_ref3=_context2.t0;response=_ref3.data.data;apiToken=response;toggleNotification({type:'success',message:formatMessage({id:'notification.success.saved',defaultMessage:'Saved'})});trackUsageRef.current(isCreating?'didCreateToken':'didEditToken',{type:apiToken.type});if(isCreating){history.replace("/settings/api-tokens/".concat(response.id),{apiToken:response});}_context2.next=25;break;case 20:_context2.prev=20;_context2.t1=_context2["catch"](2);errors=(0,_utils.formatAPIErrors)(_context2.t1.response.data);actions.setErrors(errors);toggleNotification({type:'warning',message:(0,_get["default"])(_context2.t1,'response.data.message','notification.error')});case 25:unlockApp();case 26:case"end":return _context2.stop();}}},_callee2,null,[[2,20]]);}));return function handleSubmit(_x,_x2){return _ref2.apply(this,arguments);};}();var isLoading=!isCreating&&!apiToken&&status!=='success';if(isLoading){var _apiToken;return/*#__PURE__*/_react["default"].createElement(_LoadingView["default"],{apiTokenName:(_apiToken=apiToken)===null||_apiToken===void 0?void 0:_apiToken.name});}return/*#__PURE__*/_react["default"].createElement(_Main.Main,null,/*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle,{name:"API Tokens"}),/*#__PURE__*/_react["default"].createElement(_formik.Formik,{validationSchema:_schema["default"],validateOnChange:false,initialValues:{name:((_apiToken2=apiToken)===null||_apiToken2===void 0?void 0:_apiToken2.name)||'',description:((_apiToken3=apiToken)===null||_apiToken3===void 0?void 0:_apiToken3.description)||'',type:((_apiToken4=apiToken)===null||_apiToken4===void 0?void 0:_apiToken4.type)||'read-only'},onSubmit:handleSubmit},function(_ref4){var _apiToken5,_apiToken6,_errors$name,_errors$description,_errors$type;var errors=_ref4.errors,handleChange=_ref4.handleChange,isSubmitting=_ref4.isSubmitting,values=_ref4.values;return/*#__PURE__*/_react["default"].createElement(_helperPlugin.Form,null,/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{title:((_apiToken5=apiToken)===null||_apiToken5===void 0?void 0:_apiToken5.name)||formatMessage({id:'Settings.apiTokens.createPage.title',defaultMessage:'Create API Token'}),primaryAction:/*#__PURE__*/_react["default"].createElement(_Button.Button,{disabled:isSubmitting,loading:isSubmitting,startIcon:/*#__PURE__*/_react["default"].createElement(_Check["default"],null),type:"submit",size:"L"},formatMessage({id:'app.components.Button.save',defaultMessage:'Save'})),navigationAction:/*#__PURE__*/_react["default"].createElement(_Link.Link,{startIcon:/*#__PURE__*/_react["default"].createElement(_ArrowLeft["default"],null),to:"/settings/api-tokens"},formatMessage({id:'app.components.go-back',defaultMessage:'Go back'}))}),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:6},Boolean((_apiToken6=apiToken)===null||_apiToken6===void 0?void 0:_apiToken6.name)&&/*#__PURE__*/_react["default"].createElement(_ContentBox["default"],{apiToken:apiToken.accessKey}),/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral0",hasRadius:true,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:4},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"delta",as:"h2"},formatMessage({id:'app.components.Users.ModalCreateBody.block-title.details',defaultMessage:'Details'})),/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:5},/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{key:"name",col:6,xs:12},/*#__PURE__*/_react["default"].createElement(_TextInput.TextInput,{name:"name",error:errors.name?formatMessage((_errors$name=errors.name)!==null&&_errors$name!==void 0&&_errors$name.id?errors.name:{id:errors.name,defaultMessage:errors.name}):null,label:formatMessage({id:'Settings.apiTokens.form.name',defaultMessage:'Name'}),onChange:handleChange,value:values.name})),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{key:"description",col:6,xs:12},/*#__PURE__*/_react["default"].createElement(_Textarea.Textarea,{label:formatMessage({id:'Settings.apiTokens.form.description',defaultMessage:'Description'}),name:"description",error:errors.description?formatMessage((_errors$description=errors.description)!==null&&_errors$description!==void 0&&_errors$description.id?errors.description:{id:errors.description,defaultMessage:errors.description}):null,onChange:handleChange},values.description)),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{key:"type",col:6,xs:12},/*#__PURE__*/_react["default"].createElement(_Select.Select,{name:"type",label:formatMessage({id:'Settings.apiTokens.form.type',defaultMessage:'Token type'}),value:values.type,error:errors.type?formatMessage((_errors$type=errors.type)!==null&&_errors$type!==void 0&&_errors$type.id?errors.type:{id:errors.type,defaultMessage:errors.type}):null,onChange:function onChange(value){handleChange({target:{name:'type',value:value}});}},/*#__PURE__*/_react["default"].createElement(_Select.Option,{value:"read-only"},formatMessage({id:'Settings.apiTokens.types.read-only',defaultMessage:'Read-only'})),/*#__PURE__*/_react["default"].createElement(_Select.Option,{value:"full-access"},formatMessage({id:'Settings.apiTokens.types.full-access',defaultMessage:'Full access'}))))))))));}));};var _default=ApiTokenCreateView;exports.default=_default;

/***/ }),

/***/ 93004:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var yup=_interopRequireWildcard(__webpack_require__(53209));var _helperPlugin=__webpack_require__(68547);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var schema=yup.object().shape({name:yup.string(_helperPlugin.translatedErrors.string).required(_helperPlugin.translatedErrors.required),type:yup.string(_helperPlugin.translatedErrors.string).oneOf(['read-only','full-access']).required(_helperPlugin.translatedErrors.required),description:yup.string().nullable()});var _default=schema;exports.default=_default;

/***/ }),

/***/ 70593:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _helperPlugin=__webpack_require__(68547);var _permissions=_interopRequireDefault(__webpack_require__(13240));var _EditView=_interopRequireDefault(__webpack_require__(91486));var ProtectedApiTokenCreateView=function ProtectedApiTokenCreateView(){return/*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions,{permissions:_permissions["default"].settings['api-tokens'].update},/*#__PURE__*/_react["default"].createElement(_EditView["default"],null));};var _default=ProtectedApiTokenCreateView;exports.default=_default;

/***/ })

}]);