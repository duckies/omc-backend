(window.webpackJsonp=window.webpackJsonp||[]).push([[5,25,29],{243:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{d:"M6 18L18 6M6 6l12 12"}})])}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,n){"use strict";n.r(e);n(19),n(12),n(15),n(27),n(28);var r=n(6),o=n(250);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={computed:c(c({},Object(o.a)(["settings"])),{},{menu:{get:function(){return this.$menu.open},set:function(t){this.$menu.open=t}}})},d=n(2),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"fixed bottom-0 right-0 z-50 p-4 mb-4 mr-4 text-white rounded-full shadow bg-primary-500 lg:hidden focus:outline-none",attrs:{"aria-label":"Menu"},on:{click:function(e){e.stopPropagation(),t.menu=!t.menu}}},[t.menu?n("IconX",{staticClass:"w-6 h-6"}):n("IconMenuAlt",{staticClass:"w-6 h-6"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconX:n(243).default,IconMenuAlt:n(160).default})},298:function(t,e,n){"use strict";n.r(e);var r={computed:{settings:function(){return this.$docus.settings},categories:function(){return this.$docus.categories[this.$i18n.locale]},lastRelease:function(){return this.$docus.lastRelease}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lg:flex lg:flex-1"},[n("aside",{staticClass:"fixed inset-0 z-40 flex-none w-full h-full bg-black bg-opacity-25 lg:bg-white lg:dark:bg-gray-900 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block",class:{hidden:!t.$menu.open},on:{click:function(e){t.$menu.open=!1}}},[n("div",{staticClass:"h-full mr-24 overflow-hidden overflow-y-auto bg-white sm:mr-64 lg:h-auto lg:block lg:sticky lg:bg-transparent lg:top-18 dark:bg-gray-900 lg:mr-0",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"absolute inset-x-0 z-10 hidden h-12 pointer-events-none lg:block bg-gradient-to-b from-white dark:from-gray-900"}),t._v(" "),n("nav",{staticClass:"pt-6 overflow-y-auto font-medium text-base sm:px-4 xl:px-6 lg:text-sm pb-10 lg:pt-10 lg:pb-16 lg:h-(screen-18)"},[n("AsideTop"),t._v(" "),t.lastRelease?n("ul",{staticClass:"mb-8 space-y-8 lg:hidden"},[n("li",[n("NuxtLink",{staticClass:"px-4 py-2 font-medium text-gray-400 transition duration-200 lg:px-3 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",attrs:{to:"/releases","exact-active-class":"text-primary-500 dark:text-primary-400"}},[t._v(t._s(t.lastRelease.name))])],1)]):t._e(),t._v(" "),n("ul",t._l(t.categories,(function(t,e){return n("CategoryItem",{key:e,attrs:{category:e,docs:t}})})),1),t._v(" "),n("AsideBottom")],1)])]),t._v(" "),n("MenuButton")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AsideTop:n(162).default,CategoryItem:n(166).default,AsideBottom:n(164).default,Aside:n(115).default,MenuButton:n(253).default})}}]);