(window.webpackJsonp=window.webpackJsonp||[]).push([[32,34],{255:function(e,t,n){"use strict";n.r(t);var o=n(2),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"max-w-full my-4 overflow-x-auto"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},296:function(e,t,n){"use strict";n.r(t);n(15),n(48),n(9),n(23);var o={props:{of:{type:String,default:void 0},data:{type:Object,default:function(){return{}}},required:{type:Boolean,default:void 0},values:{type:Boolean,default:void 0},description:{type:Boolean,default:void 0},defaultValue:{type:Boolean,default:void 0}},computed:{component:function(){return this.data},props:function(){return this.component.props.filter((function(e){var t;return!(null!==(t=e.tags)&&void 0!==t&&t.ignore)}))},showRequired:function(){return void 0!==this.required?this.required:this.props.find((function(e){return void 0!==e.required}))},showValues:function(){return void 0!==this.values?this.values:this.props.find((function(e){return e.values}))},showDescription:function(){return void 0!==this.description?this.description:this.props.find((function(e){return e.description}))},showDefault:function(){return void 0!==this.defaultValue?this.defaultValue:this.props.find((function(e){return e.defaultValue}))}}},r=n(2),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table-container",[e.component?n("table",[n("thead",[n("tr",[n("th",[e._v("Prop")]),e._v(" "),n("th",[e._v("Type")]),e._v(" "),e.showRequired?n("th",[e._v("Required")]):e._e(),e._v(" "),e.showDefault?n("th",[e._v("Default")]):e._e(),e._v(" "),e.showValues?n("th",[e._v("Values")]):e._e(),e._v(" "),e.showDescription?n("th",[e._v("Description")]):e._e()])]),e._v(" "),n("tbody",e._l(e.props,(function(t){return n("tr",{key:t.name},[n("td",[n("code",[e._v(e._s(t.name))])]),e._v(" "),n("td",[n("code",[e._v(e._s(t.type&&t.type.name))])]),e._v(" "),e.showRequired?n("td",[e._v(e._s(t.required?"Yes":"No"))]):e._e(),e._v(" "),e.showDefault?n("td",[t.defaultValue?n("code",[e._v(e._s(t.defaultValue&&t.defaultValue.value))]):e._e()]):e._e(),e._v(" "),e.showValues?n("td",[t.values?n("code",[e._v(e._s(t.values&&JSON.stringify(t.values).replace(/,/g,", ")))]):n("span",[e._v("-")])]):e._e(),e._v(" "),e.showDescription?n("td",[n("div",{domProps:{innerHTML:e._s(t.description)}})]):e._e()])})),0)]):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TableContainer:n(255).default})}}]);