(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2890096f"],{bd0c:function(t,n,a){},c7ca:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-main",[a("v-fade-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1)},i=[],o={name:"BaseView"},s=o,r=a("2877"),c=a("6544"),d=a.n(c),u=a("0789"),p=(a("bd0c"),a("d10f")),f=p["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,n=t.bar,a=t.top,e=t.right,i=t.footer,o=t.insetFooter,s=t.bottom,r=t.left;return{paddingTop:"".concat(a+n,"px"),paddingRight:"".concat(e,"px"),paddingBottom:"".concat(i+o+s,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var n={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,n,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}}),l=Object(r["a"])(s,e,i,!1,null,null,null);n["default"]=l.exports;d()(l,{VFadeTransition:u["a"],VMain:f})},d10f:function(t,n,a){"use strict";var e=a("2b0e");n["a"]=e["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})}}]);
//# sourceMappingURL=chunk-2890096f.d7bb34a2.js.map