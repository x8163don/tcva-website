(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e942d"],{"8d7b":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t._self._c;return e("NewsList",{attrs:{news:t.activities}})},a=[],r=n("c7eb"),c=n("1da1"),i=function(){var t=this,e=t._self._c;return e("div",[e("table",{staticClass:"f6 w-100 mw8 center",attrs:{cellspacing:"0"}},[t._m(0),e("tbody",t._l(t.news,(function(n){return e("tr",{key:n.ID},[e("td",{staticClass:"pv3 pr3 bb b--black-20"},[t._v(" "+t._s(t._f("localDateTime")(n.date))+" ")]),e("td",{staticClass:"pv3 pr3 bb b--black-20 printer"},[e("a",{attrs:{href:"/post/".concat(n.ID)}},[t._v(t._s(n.title))])])])})),0)])])},l=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"w-20 fw6 bb b--black-20 tl pb3 pr3 bg-white"},[t._v("發佈日期")]),e("th",{staticClass:"w-80 fw6 bb b--black-20 tl pb3 pr3 bg-white"},[t._v("主題")])])])}],u=n("c1df"),b=n.n(u),o={props:{news:{type:Array,default:function(){return[]}}},filters:{localDateTime:function(t){return b()(t).format("yyyy-MM-DD HH:mm:ss")}}},p=o,f=n("2877"),w=Object(f["a"])(p,i,l,!1,null,null,null),d=w.exports,v=n("c514"),h={components:{NewsList:d},mounted:function(){var t=this;return Object(c["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["b"])({number:100,category:"最新消息"}).then((function(e){t.activities=e.data.posts}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{activities:[]}}},_=h,m=Object(f["a"])(_,s,a,!1,null,null,null);e["default"]=m.exports}}]);