(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{252:function(t,n,r){var content=r(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(47).default)("1d1eea3c",content,!0,{sourceMap:!1})},273:function(t,n,r){"use strict";r(252)},274:function(t,n,r){var o=r(46)((function(i){return i[1]}));o.push([t.i,".list-primary{\n  color:var(--primary-500)\n}\n.dark .list-primary{\n  color:var(--primary-400)\n}\n.list-info{\n  --tw-text-opacity:1;\n  color:rgba(14, 165, 233, var(--tw-text-opacity))\n}\n.dark .list-info{\n  --tw-text-opacity:1;\n  color:rgba(56, 189, 248, var(--tw-text-opacity))\n}\n.list-success{\n  --tw-text-opacity:1;\n  color:rgba(16, 185, 129, var(--tw-text-opacity))\n}\n.dark .list-success{\n  --tw-text-opacity:1;\n  color:rgba(52, 211, 153, var(--tw-text-opacity))\n}\n.list-warning{\n  --tw-text-opacity:1;\n  color:rgba(245, 158, 11, var(--tw-text-opacity))\n}\n.dark .list-warning{\n  --tw-text-opacity:1;\n  color:rgba(251, 191, 36, var(--tw-text-opacity))\n}\n.list-danger{\n  --tw-text-opacity:1;\n  color:rgba(239, 68, 68, var(--tw-text-opacity))\n}\n.dark .list-danger{\n  --tw-text-opacity:1;\n  color:rgba(248, 113, 113, var(--tw-text-opacity))\n}",""]),o.locals={},t.exports=o},298:function(t,n,r){"use strict";r.r(n);r(31);var o={props:{items:{type:Array,default:function(){return[]}},icon:{type:String,default:null},type:{type:String,default:"primary",validator:function(t){return["primary","info","success","warning","danger"].includes(t)}}},computed:{iconName:function(){return this.icon||{primary:"IconBadgeCheck",info:"IconInformationCircle",success:"IconCheckCircle",warning:"IconExclamationCircle",danger:"IconXCircle"}[this.type]}}},c=(r(273),r(2)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",t._l(t.items,(function(n,i){return r("div",{key:i,staticClass:"mt-3 flex"},[r("span",{staticClass:"mt-px mr-3 flex-shrink-0",class:"list-"+t.type},[r(t.iconName,{tag:"component",staticClass:"h-6 w-6"})],1),t._v("\n    "+t._s(n)+"\n  ")])})),0)}),[],!1,null,null,null);n.default=component.exports}}]);