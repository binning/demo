
<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'dashboard',
                        title: '首页'                  
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: 'order',
                        title: '订单管理',
                         subs: [
                            {
                                index: 'orderToltal',
                                title: '所有订单'
                            },
                            {
                                index: 'orderCount',
                                title: '订单统计'
                            }             
                        ]
                    },
                    {
                        icon: 'el-icon-message',
                        index: 'userManage',
                        title: '用户管理',
                         subs: [
                            {
                                index: 'userTotal',
                                title: '所有用户'
                            },
                            {
                                index: 'userCount',
                                title: '用户统计'
                            }             
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: 'productManage',
                        title: '产品管理',
                        subs: [
                            {
                                index: 'creditWork',
                                title: '信贷业务'
                            },
                            {
                                index: 'productData',
                                title: '产品数据'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'risk',
                        title: '风控审核',
                         subs: [
                            {
                                index: 'machineData',
                                title: '机器审核数据'
                            },
                            {
                                index: 'firstCheck',
                                title: '人工初审'
                            },
                            {
                                index: 'secondCheck',
                                title: '人工复审'
                            }  ,
                            {
                                index: 'checkData',
                                title: '审核数据'
                            }               
                        ]
                    },
                    {
                        icon: 'el-icon-rank',
                        index: 'collection',
                        title: '催收管理',
                         subs: [
                            {
                                index: 'collOrder',
                                title: '催收订单'
                            },
                            {
                                index: 'collHistory',
                                title: '历史催收'
                            },
                            {
                                index: 'collData',
                                title: '催收数据'
                            }          
                        ]
                    },
                    {
                        icon: 'el-icon-warning',
                        index: 'callcentar',
                        title: '客服中心',
                         subs: [
                            {
                                index: 'userFeedback',
                                title: '用户反馈'
                            },
                            {
                                index: 'callRecords',
                                title: '来电记录'
                            },
                            {
                                index: 'enjoyIs',
                                title: '满意度统计'
                            }             
                        ]
                    },
                    {
                        icon: 'el-icon-warning',
                        index: 'statsCenter',
                        title: '统计中心',
                         subs: [
                            {
                                index: 'finance',
                                title: '财务统计'
                            },
                            {
                                index: 'performance',
                                title: '绩效统计'
                            },
                            {
                                index: 'user',
                                title: '用户统计'
                            },
                            {
                                index: 'order',
                                title: '订单统计'
                            }             
                        ]
                    },
                    {
                        icon: 'el-icon-warning',
                        index: 'systemCenter',
                        title: '系统管理',
                         subs: [
                            {
                                index: 'system',
                                title: '系统管理'
                            },
                            {
                                index: 'personal',
                                title: '人事结构'
                            }             
                        ]
                    },
                    {
                        icon: 'el-icon-error',
                        index: 'chart',
                        title: '图表'
                    },
                       // {
                    //     icon: 'el-icon-error',
                    //     index: '404',
                    //     title: '404页面'
                    // }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            });
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 200px;
    }
    .sidebar > ul {
        height:100%;
    }

     .el-menu-item{
       background-color: rgb(73, 80, 96)!important;
    }
    .el-menu-item:hover{
          background-color: #48576a!important;
          color: #fff!important;
    }
    .sidebar-el-menu{
         background-color: rgb(73, 80, 96)!important;
    }
   
    .el-menu-item.is-active{
         /* background-color: rgb(50, 65, 87)!important; */
    }  
    .el-submenu .el-menu--inline .el-menu-item{
    background-color: #363e4f!important;
    }
    .el-submenu .el-menu--inline .el-menu-item:hover{
    background-color: #48576a!important;
    color: #fff!important;
    }

</style>
