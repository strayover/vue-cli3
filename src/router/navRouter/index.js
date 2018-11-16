/* 
    系统子路由
*/

import Analyze from '@/components/Analyze/index'
import Device from '@/components/Device/index'
import MyClient from '@/components/MyClient/index'
import ReportForms from '@/components/ReportForms/index'

var Analysis = []

Analysis.push(
    { path: 'Analyze',name: 'Analyze',component: Analyze, meta:{auth:true} }, // 分析统计
    { path: 'Device',name: 'Device',component: Device, meta:{auth:true} }, // 设备管理
    { path: 'MyClient',name: 'MyClient',component: MyClient, meta:{auth:true} }, // 我的客户
    { path: 'ReportForms',name: 'ReportForms',component: ReportForms, meta:{auth:true} }, // 统计报表
)

export default Analysis