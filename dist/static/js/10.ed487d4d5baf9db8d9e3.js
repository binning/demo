webpackJsonp([10],{UUy0:function(e,t){},vmcZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"basetable",data:function(){return{value6:"",value7:"",url:"./static/vuetable.json",cur_page:1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,delVisible:!1,form:{order_num:"",user_i:"",date:"",name:"",address:"",phone:"",money_num:"",cycle:"",state:""},idx:-1,tableData:[{order_num:1,user_id:11,date:"2018-07-19",name:"王小虎",address:"西湖区文一西路111号",phone:18750567586,money_num:4e3,cycle:7,state:"待审核"},{order_num:2,user_id:21,date:"2018-07-18",name:"王小虎1",address:"西湖区文一西路111号",phone:18750567586,money_num:4100,cycle:7,state:"待审核"},{order_num:3,user_id:31,date:"2018-07-18",name:"王小虎2",address:"西湖区文一西路111号",phone:18750567586,money_num:4e3,cycle:7,state:"待审核"},{order_num:4,user_id:41,date:"2018-07-20",name:"王小虎3",address:"西湖区文一西路111号",phone:18750567586,money_num:4e3,cycle:7,state:"待审核"},{order_num:5,user_id:51,date:"2018-07-18",name:"王小虎4",address:"西湖区文一西路111号",phone:18750567586,money_num:4e3,cycle:7,state:"待审核"},{order_num:6,user_id:61,date:"2018-07-18",name:"王小虎5",address:"西湖区文一西路111号",phone:18750567586,money_num:4e3,cycle:7,state:"待审核"}]}},created:function(){this.getData()},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var a=!1,l=0;l<e.del_list.length;l++)if(t.name===e.del_list[l].name){a=!0;break}if(!a&&t.address.indexOf(e.select_cate)>-1&&(t.name.indexOf(e.select_word)>-1||t.address.indexOf(e.select_word)>-1))return t})}},methods:{handleCurrentChange:function(e){this.cur_page=e,this.getData(),console.log(e)},handleSizeChange:function(e){console.log(e)},getData:function(){},search:function(){this.is_search=!0},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},handleEdit:function(e,t){this.idx=e;this.tableData[e];this.form={},this.editVisible=!0},handleDelete:function(e,t){this.idx=e,this.delVisible=!0},handleCheck:function(e,t){console.log(e,t)},delAll:function(){var e=this.multipleSelection.length,t="";this.del_list=this.del_list.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.error("删除了"+t),this.multipleSelection=[]},handleSelectionChange:function(e){this.multipleSelection=e},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1,this.$message.success("修改第 "+(this.idx+1)+" 行成功")},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contants"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-date"}),e._v(" 客服中心")]),e._v(" "),a("el-breadcrumb-item",[e._v("满意度统计")])],1)],1),e._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"container"},[a("div",{staticClass:"search-box"},[a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"请输入关键词"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")])],1),e._v(" "),a("div",{staticClass:"handle-box"},[a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"全部"},model:{value:e.select_cate,callback:function(t){e.select_cate=t},expression:"select_cate"}},[a("el-option",{key:"1",attrs:{label:"全部",value:"全部"}}),e._v(" "),a("el-option",{key:"2",attrs:{label:"S1",value:"S1"}}),e._v(" "),a("el-option",{key:"3",attrs:{label:"S2",value:"S2"}}),e._v(" "),a("el-option",{key:"4",attrs:{label:"M1",value:"M1"}}),e._v(" "),a("el-option",{key:"5",attrs:{label:"M2",value:"M2"}}),e._v(" "),a("el-option",{key:"6",attrs:{label:"M3",value:"M3"}})],1),e._v(" "),a("div",{staticClass:"time-select clearfix"},[a("span",{staticClass:"demonstration"},[e._v("时间段:")]),e._v(" "),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"全部"},model:{value:e.select_cate,callback:function(t){e.select_cate=t},expression:"select_cate"}},[a("el-option",{key:"1",attrs:{label:"全部",value:"全部"}}),e._v(" "),a("el-option",{key:"2",attrs:{label:"7天",value:"7天"}}),e._v(" "),a("el-option",{key:"3",attrs:{label:"1个月",value:"1个月"}}),e._v(" "),a("el-option",{key:"4",attrs:{label:"6个月",value:"6个月"}}),e._v(" "),a("el-option",{key:"5",attrs:{label:"1年",value:"1年s"}})],1),e._v(" "),a("span",{staticClass:"demonstration"},[e._v("自定义:")]),e._v(" "),a("el-date-picker",{attrs:{type:"datetimerange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["12:00:00"]},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}})],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"order_num",label:"订单号",sortable:"",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"user_id",label:"用户ID",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机号",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"money_num",label:"借款金额（元）",sortable:"",width:"130"}}),e._v(" "),a("el-table-column",{attrs:{prop:"cycle",label:"借款周期",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"date",label:"申请时间",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"state",label:"订单状态"}}),e._v(" "),a("el-table-column",{attrs:{label:"处理",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){e.handleCheck(t.$index,t.row)}}},[e._v("查看")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"50px"}},[a("el-form-item",{attrs:{label:"日期"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)])},staticRenderFns:[]};var i=a("vSla")(l,s,!1,function(e){a("UUy0")},"data-v-b81aed9c",null);t.default=i.exports}});