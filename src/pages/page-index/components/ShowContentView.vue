<template>
    <div>
        <div class="topDiv">
        </div>
        <div class="loginDiv">
            <div class="loginL">
                <img src="/static/images/LOGO.png" />
                <img src="/static/images/view_logo40.png" />
            </div>
            <div class="loginAddress">
                <div class="add1">
                </div>
            </div>
            <div class="loginC">
                <input name="" type="text" placeholder="请填写关键词或选择职位..." />
                <button @click="jumpSearchJob()"></button>
            </div>
            <div class="loginR">
                <img src="/static/images/spirit_40.png" />
            </div>
        </div>
        <div class="menuDiv">
            <a href="/index" class="onnav">首页</a>
            <a href="/personal/resume">个人中心</a>
            <a href="/personal/select">我的职位</a>
        </div>
        <div class="BodyMain">
            <div class="mainTop">
                <div class="mainTopL">
                    <ul>
                        <div class="items">
                            <div class="itemOne">
                                <span class="itme1"><b></b>销售|市场|客服|贸易</span>
                            </div>
                        </div>
                        <div class="items">
                            <div class="itemOne">
                                <span class="itme2"><b></b>经营管理|人事|行政|财务</span>
                            </div>
                        </div>
                        <div class="items">
                            <div class="itemOne">
                                <span class="itme3"><b></b>生产|质管|技工|物流</span>
                            </div>
                        </div>
                        <div class="items">
                            <div class="itemOne">
                                <span class="itme4"><b></b>教育|法律|咨询|翻译</span>
                            </div>
                        </div>
                        <div class="items">
                            <div class="itemOne">
                                <span class="itme5"><b></b>零售|家政|餐饮|旅游</span>
                            </div>
                        </div>
                        <div class="items">
                            <div class="itemOne">
                                <span class="itme6"><b></b>广告|媒体|艺术|出版</span>
                            </div>
                        </div>
                        <div class="items">
                            <div class="itemOne">
                                <span class="itme7"><b></b>IT|互联网|通信</span>
                            </div>
                        </div>
                    </ul>
                </div>
                <div class="mainTopR">
                    <div class="ads">
                        <div class="floatL" id="left"></div>
                        <div class="adBox0">
                            <ul style="margin-left: 0px; overflow: hidden">
                                <li>
                                    <a href="javascript:void(0)">
                                        <div
                                            style="background:url(/static/images/1.jpg);background-size: cover;background-repeat: no-repeat;background-position: center">
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <div
                                            style="background:url(/static/images/2.jpg);background-size: cover;background-repeat: no-repeat;background-position: center">
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <div
                                            style="background:url(/static/images/3.gif);background-size: cover;background-repeat: no-repeat;background-position: center">
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="clear"> </div>
                    </div>
                    <div class="login">
                        <div class="erweima">
                            <div class="close"></div>
                            <div class="ewmimg"><img src="/static/images/showqrcode.jpg" /></div>
                            <div class="ewmtxt">使用微信扫描上方二维码登录</div>
                        </div>
                        <div class="logintop">
                            <div class="loginC loginA select">
                                <span>{{title}}</span>
                            </div>
                            <div class="loginC loginB">
                            </div>
                        </div>
                        <div class="loginmain">
                            <div v-show="isShow" class="ContentA">
                                <div class="txtInput"><input v-model="loginArgs" name="" type="text"
                                        placeholder="请输入用户名/手机号/邮箱" /></div>
                                <div class="txtInput"><input v-model="password" name="" type="text" placeholder="请输入密码" />
                                </div>
                                <div class="txtbtn">
                                    <div style="float:left">
                                        <br />
                                        <div class="clear"></div>
                                        <a href="/login/forget" class="a2">忘记密码</a>
                                    </div>
                                    <input @click="submitFormDTO()" name="" type="button" class="lobtn" value="登  录" />
                                </div>
                                <div class="zcbox">
                                    <div class="zc2">
                                        <a href="/login/resume" class="a1">一分钟填写简历</a>
                                        <a href="/login/register" class="a2">注册</a>
                                    </div>
                                </div>
                            </div>
                            <div v-show="!isShow" class="ContentA">
                                <span class="bigFont">用户名：</span>{{ userName }} <br/>   
                                <span class="bigFont">手机号：</span>{{ phone }} <br/> 
                                <span class="bigFont">邮箱：</span>{{ userEmail }} <br/> 
                            </div>
    
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="clear"></div>
            <div class="mainCon2">
                <div class="commontitdiv">
                    <div class="title">高薪职位</div>
                    <span>高薪就这么任性！</span>
                </div>
                <div class="clear"></div>
                <div class="highMoney">
                    <div v-for="item in HighRecruitList" :key="item.companyId+'-'+item.recruitId">
                        <div class="lineBox"></div>
                        <div class="divBox">
                            <a :href="'/info?companyId='+item.companyId+'&recruitId='+item.recruitId" ><img :src="'/static/images/'+item.company.companyIcon" width="84" /></a>
                            <p class="tit"><a :href="'/info?companyId='+item.companyId+'&recruitId='+item.recruitId">{{ item.recruitName }}</a></p>
                            <p class="sub"><a :href="'/info/company?companyId='+item.companyId" >{{item.companyName}}</a></p>
                            <p class="num"><span>{{ item.recruitSalaryMin }}K-{{ item.recruitSalaryMax}}K</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="footerLine"></div>
        <div class="footer">
            <div class="footerdown">
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    // edit by JoneElmo
    name: 'showContent',
    data() {
        return {
            arr: new Array(10),

            isShow:true,
            loginArgs: "",
            title:"个人登陆",

            phone: null,
            userEmail: null,
            password: null,
            userName: null,
            code: null,
            userId: null,

            HighRecruitList:""
        }
    },
    mounted(){
        axios({
            method: 'GET',
            url: '/api/recruit/getHighSalaryRecruit'
        })
            .then(response => {
                let data = response.data
                let code = data.code
                let msg = data.msg
                let info = data.object
                if (code === 200001) { //判断你的请求是否成功
                    console.log(data)
                    this.HighRecruitList = info.list
                    console.log(this.HighRecruitList)
                } else {

                    alert(msg)
                }
            }, error => {
                console.log('错误', error.message)
                // alert(error.message)
            })
    },
    methods: {
        jumpSearchJob() {
            window.location = '/index/search';
        },
        getUserInfo() {  //获取用户详细信息
            let that = this
            axios({
                method: 'post',
                url: '/api/user-info/getUserInfo',
                data: {
                    userId: that.userId,
                    phone: that.phone,
                    userEmail: that.userEmail,
                    userName: that.userName,
                    password: that.password,
                    code: that.code
                }
            })
                .then(function (result) {
                    console.log(result)
                    let phone = result.data.object.phone
                    console.log(result.data.object.userName)
                    that.userName = result.data.object.userName
                    let email = result.data.object.userEmail
                    if(phone == null){
                        that.phone = "未绑定手机号"
                    }
                    if(email == null){
                        that.userEmail = "未绑定邮箱"
                    }

                })
        },
        submitFormDTO() {
            // 简单的手机号正则，匹配11位数字
            const phoneRegex = /^[1-9]\d{10}$/;
            // 简单的邮箱正则，匹配常见的邮箱格式
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            // 简单的用户名正则，匹配以"user_"开头，后面跟着数字的格式
            const usernameRegex = /^user_\d+$/;

            if (phoneRegex.test(this.loginArgs)) {
                this.phone = this.loginArgs;
            }
            if (emailRegex.test(this.loginArgs)) {
                this.userEmail = this.loginArgs;
            }
            if (usernameRegex.test(this.loginArgs)) {
                this.userName = this.loginArgs;
            }

            let that = this;
            axios({
                method: 'post',
                url: '/api/user-info/login',
                async: false,
                data: {
                    phone: that.phone,
                    userEmail: that.userEmail,
                    userName: that.userName,
                    password: that.password,
                    userId: that.userId,
                    code: that.code
                }
            })
                .then(function (result) {
                    console.log(result)
                    let code = result.data.code
                    if (code == 100000) {
                        alert("用户不存在或密码错误")
                    } else {
                        that.isShow = false
                        that.title = "个人资料"
                        that.getUserInfo()
                    }
                })

        }
    }
}
</script>
<style>
    .bigFont{
        font-size: 15px;
        font-weight: bold;
    }
</style>