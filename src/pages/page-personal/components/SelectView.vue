<template>
    <div>
        <div class="personalBody">
            <div class="perRightcon">
                <div class="commonTit">
                    <h1 class="fl">职位搜索</h1>
                </div>
                <div class="clear"></div>
                <div class="zwssPart1">
                    <div class="zxssPart1_1">
                        <input name="" type="text" placeholder="请填写关键词或选择职位" />
                    </div>
                    <div class="zxssPart1_4">
                        <input name="" type="button" value="搜工作" />
                    </div>
                </div>
                <div class="clear"></div>
                <div class="zwssPart3">
                    <div class="seachlist">
                        <div class="listtop">
                            <div class="tj1" :class="{ on: !isOn }">
                                <span class="list" :class="{ on: isOn }" @click="showOn('list')">列表</span>
                                <span class="zhaoyao" :class="{ on: !isOn }" @click="showOn('zhaiyao')">摘要</span>
                            </div>
                            <div class="tj3">
                                <span>共1141条 第1/39页</span>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="listcon">
                            <table border="0" width="100%" cellpadding="0" cellspacing="0" class="listtab">
                                <thead>
                                    <tr>
                                        <th width="24%" style="padding-left:17px">职位名称</th>
                                        <th width="20%">企业名称</th>
                                        <th width="9%"></th>
                                        <th width="10%">工作地点</th>
                                        <th width="10%">薪水</th>
                                        <th width="15%">刷新时间</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in arr" :key="item.recruitId">
                                    <tr>
                                        <td>
                                            <a href="/info" class="jobname">{{ item.recruitName }}</a>
                                        </td>
                                        <td>
                                            <div class="company">
                                                <a :href="'/info/company?companyId='+item.companyId">{{ item.companyName }}</a>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td>{{ item.recruitAddress }}</td>
                                        <td><span>{{item.recruitSalaryMin }}K-{{item.recruitSalaryMax }}K</span></td>
                                        <td>{{new Date(item.recruitTime).toLocaleString()}}</td>
                                    </tr>
                                    <tr class="xxdetail" :class="{ none: isNone }">
                                        <td colspan="5">
                                            <div class="yaoqiu">学历要求：中专 | 工作经验：1~2年 | 公司规模：少于50人 | 招聘方式：全职<br />
                                                岗位职责：1、 负责公司资产管理、办公用品采购及劳保用品的管理工作,避免公司资产流失和浪费； 2、
                                                负责书刊资料印刷、快递、物流及办公室的其他事情； 3、
                                                ...<br />
                                                岗位要求：1、1年以上行政工作经验； 2、熟悉行政工作流程，办公用品采购流程，企业资产管理；
                                                3、较强的责任心和敬业精神，良好的组织协调能力及沟通能力，较...
                                            </div>
                                        </td>
                                        <td>
                                            <div class="applydiv">
                                                <a href="javascript:void(0);" class="ysqbtn">已申请</a>
                                                <span class="ygz">已关注</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="clear"></div>
                        <div class="listbottom">
                            <div class="lb3"><span>共{{ this.dataTotal}}条 第{{ this.pageNum}}/{{ this.pageTotal}}页</span></div>
                        </div>
                        <div class="clear"></div>
                        <div class="fenyediv">
                            <a href="javascript:void(0)" class="fy1">首页</a>
                            <a href="javascript:void(0)" class="fy1">上一页</a>
                            <a href="javascript:void(0)" class="fy2 on">1</a>
                            <a href="javascript:void(0)" class="fy2">2</a>
                            <a href="javascript:void(0)" class="fy2">3</a>
                            <a href="javascript:void(0)" class="fy2">4</a>
                            <a href="javascript:void(0)" class="fy2">5</a>
                            <a href="javascript:void(0)" class="fy2">6</a>
                            <a href="javascript:void(0)" class="fy2">7</a>
                            <a href="javascript:void(0)" class="fy2">8</a>
                            <a href="javascript:void(0)" class="fy2">9</a>
                            <a href="javascript:void(0)" class="fy2">10</a>
                            <a href="javascript:void(0)" class="fy1">下一页</a>
                            <a href="javascript:void(0)" class="fy1">尾页</a>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
        <div class="footer"></div>
    </div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie';
export default {
    data() {
        return {
            arr: "",
            isOn: true,
            isNone: true,
            userId:"",
            dataTotal:"",//总数据条数
            pageNum:1,//第几页
            pageTotal:""//总几页
        }
    },
    methods: {
        
        showOn(status) {
            if (status == 'list') {
                this.isOn = true,
                    this.isNone = true
            } else {
                this.isOn = false,
                    this.isNone = false
            }
        },
        getMyApplyRecruit(like,pageNum,userId){
            let that = this
             /* 获取进入页面的申请职位信息 */
        axios({
            method: 'GET',
            url: '/api/apply/getAllUserApply/'+like+'/'+pageNum+'/'+userId
        })
            .then(response => {
                let data = response.data
                let code = data.code
                let msg = data.msg
                let info = data.object
                if (code === 200001) { //判断你的请求是否成功
                    console.log(data)
                    this.arr = info.list
                    that.pageTotal = info.pages
                    that.dataTotal = info.total
                } else {
                    alert(msg)
                }
            }, error => {
                console.log('错误', error.message)
                // alert(error.message)
            })
        }
    },
    mounted(){
        const cookieValue = Cookies.get('cookieUserId');
        this.getMyApplyRecruit(null,this.pageNum,cookieValue)
    }
}
</script>