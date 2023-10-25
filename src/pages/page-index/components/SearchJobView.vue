<template>
    <div>
        <div class="topDiv">
            <div class="topL">
                <div class="logo">
                    <a href="/index">
                        <img src="/static/images/LOGO.png" />
                        <img src="/static/images/view_logo40.png" class="img1" />
                    </a>
                </div>
                <img src="/static/images/spirit_40.png" />
            </div>
            <div class="topR">
                <div class="topR0 topR2"><a href="/login/register">注册</a></div>
                <div class="topR0 topR3"><a href="/login">个人登录</a></div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="menuDiv">
            <div class="mainWarp">
            </div>
        </div>
        <div class="clear"></div>
        <div class="menuLittle">
        </div>
        <div class="clear"></div>
        <div class="searchDiv">
            <div class="search1">
                <div class="sea1_1">
                    <input name="" type="text" placeholder="请填写关键词或选择职位" class="keyword" />
                    <span class="jiantou"></span>
                </div>
                <div class="sea1_4">
                    <a href="javascript:void(0)">搜工作</a>
                </div>
            </div>
        </div>
        <div class="clear"></div>
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
                            <th width="30%">企业名称</th>
                            <th width="8%"></th>
                            <th width="16%">工作地点</th>
                            <th width="8%">薪水</th>
                            <th width="10%">刷新时间</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in arr" :key="item">
                        <tr>
                            <td>
                                <a href="/info" class="jobname">后勤文员</a>
                            </td>
                            <td>
                                <div class="company">
                                    <a href="/info/company">广东同源科技发展有限公司</a>
                                </div>
                            </td>
                            <td></td>
                            <td>广东佛山南海区</td>
                            <td><span>2.5K-3.5K</span></td>
                            <td>1小时</td>
                        </tr>
                        <tr class="xxdetail" :class="{ none: isNone }">
                            <td colspan="5">
                                <div class="yaoqiu">学历要求：中专 | 工作经验：1~2年 | 公司规模：少于50人 | 招聘方式：全职<br />
                                    岗位职责：1、 负责公司资产管理、办公用品采购及劳保用品的管理工作,避免公司资产流失和浪费； 2、 负责书刊资料印刷、快递、物流及办公室的其他事情； 3、 ...<br />
                                    岗位要求：1、1年以上行政工作经验； 2、熟悉行政工作流程，办公用品采购流程，企业资产管理； 3、较强的责任心和敬业精神，良好的组织协调能力及沟通能力，较...</div>
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
                <div class="lb3"><span>共1141条 第1/39页</span></div>
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
        <div class="clear"></div>
        <div class="footer">
        </div>
    </div>
</template>
<script>

export default {
    name: 'indexTopBar',
    data() {
        return {
            arr: new Array(10),
            isOn: true,
            isNone: true
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
        }
    }
}
</script>