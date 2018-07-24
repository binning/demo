<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 产品管理</el-breadcrumb-item>
                <el-breadcrumb-item>产品数据</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-row v-for='(item,index) in updateList' :key='index'>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-row>
                        <el-col :span="24">
                            <div class="bg-purple">
                                <span>版本号：{{item.type}}</span>
                                <span>更新时间：2018/02/10</span>
                                <span>更新类型：核心功能迭代</span>
                            </div>
                        </el-col>
                    </el-row>
                    <div class="update-list">
                        <div class="info-box">
                            <p>1、可视化编辑功能</p>
                            <p>2、标签模板制作功能，简化模板制作及修改方法</p>
                            <p>3、6.0默认响应式模板一套</p>
                            <p>4、模板颜色自定义功能</p>
                            <p>5、产品列表页按参搜索功能</p>
                            <p>6、列表页访客按需点击最新，热门，推荐，销量排序功能（需要模板支持）</p>
                            <p>7、优化在线客服功能，新增facebook功能</p>
                            <p>9、重写后台及前台代码，理顺系统所有路径及因历史版本升级而造成的功能缺失</p>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            updateList:[
                {type:'V1.0'},
                {type:'V2.0'},
                {type:'V3.0'},
            ]
        }
    }
}
</script>
<style scoped>
  .el-row {
    margin-bottom: 20px;
    font-size: 14px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #d3dce6;
  }
  .bg-purple{
      background: #7a97c0;
      padding: 15px 10px;
      color: rgb(243, 237, 237);
  }
    .bg-purple span{
        margin-right: 50px;
    }
  .grid-content {
    border-radius: 4px;
    min-height: 200px;
  }
.update-list{
    padding: 0 10px 10px 100px;
}
.info-box{
    position: relative;
    font-weight: 400;
    color: #606266;
    cursor: text;
}
.info-box::before{
    content:'更新日志：';
    position: absolute;
    left: -80px;
}
</style>