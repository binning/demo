webpackJsonp([2],{A8au:function(t,e){},MpTN:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=new(s("MVMM").default),i=s("YaEn"),l={data:function(){return{collapse:!1,fullscreen:!1,name:"linxin",message:2}},computed:{username:function(){var t=localStorage.getItem("ms_username");return console.log(t),t||this.name}},methods:{handleCommand:function(t){"loginout"==t&&(localStorage.removeItem("ms_username"),this.$router.push("/login"))},collapseChage:function(){this.collapse=!this.collapse,n.$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()},created:function(){var t=this;i.a.beforeEach(function(e,s,n){t.$Progress.start(),n()}),i.a.afterEach(function(e,s){t.$Progress.finish()})}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[s("i",{staticClass:"el-icon-menu"})]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"logo"},[t._v("盘石金融 -- 后台管理系统")]),t._v(" "),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[s("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[s("i",{staticClass:"el-icon-rank"})])],1),t._v(" "),s("div",{staticClass:"btn-bell"},[s("el-tooltip",{attrs:{effect:"dark",content:t.message?"有"+t.message+"条未读消息":"消息中心",placement:"bottom"}},[s("router-link",{attrs:{to:"/tabs"}},[s("i",{staticClass:"el-icon-bell"})])],1),t._v(" "),t.message?s("span",{staticClass:"btn-bell-badge"}):t._e()],1),t._v(" "),t._m(1),t._v(" "),s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t.username)+" "),s("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("a",{attrs:{href:"#"}},[s("el-dropdown-item",[t._v("个人中心")])],1),t._v(" "),s("a",{attrs:{href:"#"}},[s("el-dropdown-item",[t._v("设置")])],1),t._v(" "),s("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo-img"},[e("img",{attrs:{src:"static/img/logo.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-avators"},[e("img",{attrs:{src:"static/img/img.jpg"}})])}]};var o={data:function(){return{collapse:!1,items:[{icon:"el-icon-setting",index:"dashboard",title:"首页"},{icon:"el-icon-tickets",index:"order",title:"订单管理",subs:[{index:"orderToltal",title:"所有订单"},{index:"orderCount",title:"订单统计"}]},{icon:"el-icon-message",index:"userManage",title:"用户管理",subs:[{index:"userTotal",title:"所有用户"},{index:"userCount",title:"用户统计"}]},{icon:"el-icon-date",index:"productManage",title:"产品管理",subs:[{index:"creditWork",title:"信贷业务"},{index:"productData",title:"产品数据"}]},{icon:"el-icon-star-on",index:"risk",title:"风控审核",subs:[{index:"machineData",title:"机器审核数据"},{index:"firstCheck",title:"人工初审"},{index:"secondCheck",title:"人工复审"},{index:"checkData",title:"审核数据"}]},{icon:"el-icon-rank",index:"collection",title:"催收管理",subs:[{index:"collOrder",title:"催收订单"},{index:"collHistory",title:"历史催收"},{index:"collData",title:"催收数据"}]},{icon:"el-icon-warning",index:"callcentar",title:"客服中心",subs:[{index:"userFeedback",title:"用户反馈"},{index:"callRecords",title:"来电记录"},{index:"enjoyIs",title:"满意度统计"}]},{icon:"el-icon-warning",index:"statsCenter",title:"统计中心",subs:[{index:"finance",title:"财务统计"},{index:"performance",title:"绩效统计"},{index:"user",title:"用户统计"},{index:"order",title:"订单统计"}]},{icon:"el-icon-warning",index:"systemCenter",title:"系统管理",subs:[{index:"system",title:"系统管理"},{index:"personal",title:"人事结构"}]},{icon:"el-icon-error",index:"chart",title:"图表"}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;n.$on("collapse",function(e){t.collapse=e}),i.a.beforeEach(function(e,s,n){t.$Progress.start(),n()}),i.a.afterEach(function(e,s){t.$Progress.finish()})}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,function(e){return[e.subs?[s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.subs,function(e,n){return s("el-menu-item",{key:n,attrs:{index:e.index}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])})],2)]:[s("el-menu-item",{key:e.index,attrs:{index:e.index}},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]})],2)],1)},staticRenderFns:[]};var r={data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],s=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];s?e.path===this.$route.fullPath&&this.$router.push(s.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter(function(e){return e.path===t.$route.fullPath});this.tagsList=e},setTags:function(t){!this.tagsList.some(function(e){return e.path===t.fullPath})&&this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name}),n.$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){this.setTags(this.$route)}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTags?s("div",{staticClass:"tags"},[s("ul",t._l(t.tagsList,function(e,n){return s("li",{key:n,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),t._v(" "),s("span",{staticClass:"tags-li-icon",on:{click:function(e){t.closeTags(n)}}},[s("i",{staticClass:"el-icon-close"})])],1)})),t._v(" "),s("div",{staticClass:"tags-close-box"},[s("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleTags}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),t._v(" "),s("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},staticRenderFns:[]};var d={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:s("vSla")(l,a,!1,function(t){s("A8au")},"data-v-6fdc99f1",null).exports,vSidebar:s("vSla")(o,c,!1,function(t){s("mGTt")},"data-v-ac53c306",null).exports,vTags:s("vSla")(r,u,!1,function(t){s("upZc")},null,null).exports},created:function(){var t=this;n.$on("collapse",function(e){t.collapse=e}),n.$on("tags",function(e){for(var s=[],n=0,i=e.length;n<i;n++)e[n].name&&s.push(e[n].name);t.tagsList=s})}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("v-head"),this._v(" "),e("v-sidebar"),this._v(" "),e("div",{staticClass:"content-box",class:{"content-collapse":this.collapse}},[e("v-tags"),this._v(" "),e("div",{staticClass:"content"},[e("transition",{attrs:{name:"el-fade-in-linear",mode:"out-in"}},[e("keep-alive",{attrs:{include:this.tagsList}},[e("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]},h=s("vSla")(d,m,!1,null,null,null);e.default=h.exports},mGTt:function(t,e){},upZc:function(t,e){}});