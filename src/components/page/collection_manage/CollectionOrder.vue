<template>
    <div class="contants">
       <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 催收管理</el-breadcrumb-item>
                <el-breadcrumb-item>催收订单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
       <div class="table">
        <div class="container">
            <div class="search-box">   
                <el-input v-model="select_word" placeholder="请输入关键词" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="search" @click="search">搜索</el-button>
            </div>
          <div class="handle-box">
                <el-select v-model="select_cate" placeholder="全部" class="handle-select mr10">
                    <el-option key="1" label="全部" value="全部"></el-option>
                    <el-option key="2" label="S1" value="S1"></el-option>
                    <el-option key="3" label="S2" value="S2"></el-option>
                    <el-option key="4" label="M1" value="M1"></el-option>
                    <el-option key="5" label="M2" value="M2"></el-option>
                    <el-option key="6" label="M3" value="M3"></el-option>
                </el-select>                       
                <div class="time-select clearfix">
                    <span class="demonstration">时间段:</span>
                    <el-select v-model="select_cate" placeholder="全部" class="handle-select mr10">
                        <el-option key="1" label="全部" value="全部"></el-option>
                        <el-option key="2" label="7天" value="7天"></el-option>
                        <el-option key="3" label="1个月" value="1个月"></el-option>
                        <el-option key="4" label="6个月" value="6个月"></el-option>
                        <el-option key="5" label="1年" value="1年s"></el-option>
                    </el-select>
                    <span class="demonstration">自定义:</span>
                    <el-date-picker
                    v-model="value6"
                    type="datetimerange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['12:00:00']">
                    </el-date-picker>
                </div>
            </div>
        
            <el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
                <!-- <el-table-column type="selection" width="55"></el-table-column> -->
                <el-table-column prop="order_num" label="订单号" sortable width="150">
                </el-table-column>
                <el-table-column prop="user_id" label="用户ID" width="120">
                </el-table-column>
                <el-table-column prop="name" label="姓名" >
                </el-table-column>
                <el-table-column prop="phone" label="手机号" width="150">
                </el-table-column>
                <el-table-column prop="money_num" label="借款金额（元）" sortable width="130">
                </el-table-column>
                <el-table-column prop="cycle" label="借款周期" sortable>
                    </el-table-column>
                <el-table-column prop="date" label="申请时间" sortable>
                    </el-table-column>
                <el-table-column prop="state" label="订单状态">
                </el-table-column>
                <el-table-column label="操作" width="90">
                    <template slot-scope="scope">
                        <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
                        <el-button size="small" type="primary" @click="handleCheck(scope.$index, scope.row)">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination layout="total, prev, pager, next, jumper"
                 @size-change="handleSizeChange" 
                 @current-change="handleCurrentChange"
                 :total="1000">
                </el-pagination>
            </div>
             
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
    </div>
</template>
<script>
export default {
  name: "basetable",
  data() {
    return {
      value6: '',
      value7: '',
      url: "./static/vuetable.json",
      cur_page: 1,
      multipleSelection: [],
      select_cate: "",
      select_word: "",
      del_list: [],
      is_search: false,
      editVisible: false,
      delVisible: false,
      form: {
        order_num: "",
        user_i: "",
        date: "",
        name: "",
        address: "",
        phone: "",
        money_num: "",
        cycle: "",
        state: ""
      },
      idx: -1,
      tableData: [
        {
          order_num:1,
          user_id:11,
          date: "2018-07-19",
          name: "王小虎",
          address: "西湖区文一西路111号",
          phone:18750567586,
          money_num:4000.00,
          cycle:7,
          state:"待审核"
        },
        {
          order_num:2,
          user_id:21,
          date: "2018-07-18",
          name: "王小虎1",
          address: "西湖区文一西路111号",
          phone:18750567586,
          money_num:4100.00,
          cycle:7,
          state:"待审核"
        },
         {
          order_num:3,
          user_id:31,
          date: "2018-07-18",
          name: "王小虎2",
          address: "西湖区文一西路111号",
          phone:18750567586,
          money_num:4000.00,
          cycle:7,
          state:"待审核"
        },
         {
          order_num:4,
          user_id:41,
          date: "2018-07-20",
          name: "王小虎3",
          address: "西湖区文一西路111号",
          phone:18750567586,
          money_num:4000.00,
          cycle:7,
          state:"待审核"
        },
         {
          order_num:5,
          user_id:51,
          date: "2018-07-18",
          name: "王小虎4",
          address: "西湖区文一西路111号",
          phone:18750567586,
          money_num:4000.00,
          cycle:7,
          state:"待审核"
        },
         {
          order_num:6,
          user_id:61,
          date: "2018-07-18",
          name: "王小虎5",
          address: "西湖区文一西路111号",
          phone:18750567586,
          money_num:4000.00,
          cycle:7,
          state:"待审核"
        }
      ]
    };
  },
  created() {
    this.getData();
  },
  computed: {
    data() {     
      return this.tableData.filter(d => {
        let is_del = false;
        for (let i = 0; i < this.del_list.length; i++) {
          if (d.name === this.del_list[i].name) {
            is_del = true;
            break;
          }
        }
        if (!is_del) {
          if (
            d.address.indexOf(this.select_cate) > -1 &&
            (d.name.indexOf(this.select_word) > -1 ||
              d.address.indexOf(this.select_word) > -1)
          ) {
            return d;
          }
        }
      });
    }
  },
  methods: {
    // 分页导航
    handleCurrentChange(val) {
      this.cur_page = val;
      this.getData();
      console.log(val)
    },
    handleSizeChange(val){
       console.log(val)
    },
    // 获取 easy-mock 的模拟数据
    getData() {
      // 开发环境使用 easy-mock 数据，正式环境使用 json 文件
    //   if (process.env.NODE_ENV === "development") {
    //     this.url = "/ms/table/list";
    //   }
      // this.$axios.post(this.url, {
      //     page: this.cur_page
      // }).then((res) => {
      //     this.tableData = res.data.list;
      // })
    },
    search() {
      this.is_search = true;
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    handleEdit(index, row) {
      this.idx = index;
      const item = this.tableData[index];
      this.form = {
        // name: item.name,
        // date: item.date,
        // address: item.address
      };
      this.editVisible = true;
    },
    handleDelete(index, row) {
      this.idx = index;
      this.delVisible = true;
    },
    handleCheck(index,row){
        console.log(index,row)
    },
    delAll() {
      const length = this.multipleSelection.length;
      let str = "";
      this.del_list = this.del_list.concat(this.multipleSelection);
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name + " ";
      }
      this.$message.error("删除了" + str);
      this.multipleSelection = [];
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 保存编辑
    saveEdit() {
      this.$set(this.tableData, this.idx, this.form);
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
    },
    // 确定删除
    deleteRow() {
      this.tableData.splice(this.idx, 1);
      this.$message.success("删除成功");
      this.delVisible = false;
    }
  }
};
</script>
<style scoped>
.search-box{
    margin-bottom: 10px;
}
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}
.time-select{
    /* display: inline-block; */
    margin-left: 10px;
    float: right;
}
.time-select .demonstration{
    font-size: 14px;
    color:grey;
    margin-left: 10px;
}
.clearfix:after{
   content:".";/*加一段内容*/
   display:block;/*让生成的元素以块级元素显示，占满剩余空间*/
   height:0;/*避免生成的内容破坏原有布局高度*/
   clear:both;/*清除浮动*/
   visibility:hidden;/*让生成的内容不可见*/
  }
  .clearfix{zoom:1;/*为IE6，7的兼容性设置*/}
</style>
