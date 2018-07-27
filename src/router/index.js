import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                //订单管理
                {
                    path: '/orderToltal',
                    component: resolve => require(['../components/page/order_manage/OrderTotal.vue'], resolve),
                    meta: { title: '所有订单' }
                },
                {
                    path: '/orderCount',
                    component: resolve => require(['../components/page/order_manage/OrderCount.vue'], resolve),
                    meta: { title: '订单统计' }
                },
                // 用户管理
                {
                    path: '/userTotal',
                    component: resolve => require(['../components/page/user_manage/UserTotal.vue'], resolve),
                    meta: { title: '所有用户' }
                },
                {
                    path: '/userCount',
                    component: resolve => require(['../components/page/user_manage/userCount.vue'], resolve),
                    meta: { title: '用户统计' }
                },
                // 产品管理
                {
                    path: '/creditWork',
                    component: resolve => require(['../components/page/product_manage/CreditWork.vue'], resolve),
                    meta: { title: '信贷业务' }    
                },
                {
                    path: '/productData',
                    component: resolve => require(['../components/page/product_manage/ProductData.vue'], resolve),
                    meta: { title: '产品数据' }   
                },
                //风控审核
                {
                    path: '/machineData',
                    component: resolve => require(['../components/page/risk_manage/MachineAuditData.vue'], resolve),
                    meta: { title: '机器审核数据' }
                },
                {
                    path: '/firstCheck',
                    component: resolve => require(['../components/page/risk_manage/ArtificialTrial.vue'], resolve),
                    meta: { title: '人工初审' }
                },
                {
                    path: '/secondCheck',
                    component: resolve => require(['../components/page/risk_manage/ManualReview.vue'], resolve),
                    meta: { title: '人工复审'}
                },
                {
                    path: '/checkData',
                    component: resolve => require(['../components/page/risk_manage/AuditData.vue'], resolve),
                    meta: { title: '审核数据'}
                },
                //催收管理
                {
                    path: '/collOrder',
                    component: resolve => require(['../components/page/collection_manage/CollectionOrder.vue'], resolve),
                    meta: { title: '催收订单' }
                },
                {
                    path: '/collHistory',
                    component: resolve => require(['../components/page/collection_manage/CollectionHistory.vue'], resolve),
                    meta: { title: '历史催收' }
                },
                {
                    path: '/collData',
                    component: resolve => require(['../components/page/collection_manage/CollectionData.vue'], resolve),
                    meta: { title: '催收数据'}
                },
                // 客服中心
                {
                    path: '/userFeedback',
                    component: resolve => require(['../components/page/call_center/UserFeedback.vue'], resolve),
                    meta: { title: '用户反馈'}
                },
                {
                    path: '/callRecords',
                    component: resolve => require(['../components/page/call_center/CallRecords.vue'], resolve),
                    meta: { title: '来电记录'}
                },
                {
                    path: '/enjoyIs',
                    component: resolve => require(['../components/page/call_center/EnjoyStatistics.vue'], resolve),
                    meta: { title: '满意度统计'}
                }, 
                // 统计中心
                {
                    path: '/finance',
                    component: resolve => require(['../components/page/stats-central/Finance.vue'], resolve),
                    meta: { title: '财务统计'}
                },
                {
                    path: '/performance',
                    component: resolve => require(['../components/page/stats-central/Performance.vue'], resolve),
                    meta: { title: '绩效统计'}
                },
                {
                    path: '/user',
                    component: resolve => require(['../components/page/stats-central/User.vue'], resolve),
                    meta: { title: '用户统计'}
                },
                {
                    path: '/order',
                    component: resolve => require(['../components/page/stats-central/Order.vue'], resolve),
                    meta: { title: '订单统计'}
                },
                // 系统管理
                {
                    path: '/account',
                    component: resolve => require(['../components/page/system-manage/AccountManage.vue'], resolve),
                    meta: { title: '系统管理'}
                },
                {
                    path: '/personal',
                    component: resolve => require(['../components/page/system-manage/PersonnelStructure.vue'], resolve),
                    meta: { title: '人事结构'}
                },
                
                {
                    path: '/chart',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: '图表'}
                }
                
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
