(window.webpackJsonp=window.webpackJsonp||[]).push([[30,20],{241:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}})])}),[],!1,null,null,null);e.default=component.exports},251:function(t,e,n){"use strict";n.r(e);n(15),n(34);var r={props:{document:{type:Object,required:!0}},computed:{settings:function(){return this.$docus.settings},link:function(){if(this.settings.github)return[this.$docus.repoUrl,"edit",this.settings.github.branch,this.settings.github.dir,this.$config.contentDir,"".concat(this.document.path).concat(this.document.extension).replace(/^\//g,"")].filter(Boolean).join("/")}}},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.link?n("div",{staticClass:"flex flex-col justify-between mt-10 mb-4 sm:flex-row"},[n("a",{staticClass:"flex items-center font-medium hover:underline",attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n    "+t._s(t.$t("article.github"))+"\n    "),n("IconExternalLink",{staticClass:"w-4 h-4 ml-1"})],1),t._v(" "),n("span",{staticClass:"flex items-center mt-4 text-sm font-medium text-gray-500 dark:text-gray-300 sm:mt-0"},[t._v("\n    "+t._s(t.$t("article.updatedAt"))+" "+t._s(t.$d(Date.parse(t.document.updatedAt),"long"))+"\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconExternalLink:n(241).default})}}]);