<template>
    <div>
        <div class="header">
            <div class="mainwarp">
                <div class="logo"><a href="/index"><img src="/static/images/log.png" /></a></div>
                <div class="welcome">重置密码</div>
                <div class="headerright">
                    <a href="/login">个人登录 </a>
                    <span>|</span>
                    <a href="/index">返回首页</a>
                </div>
            </div>
        </div>
        <div class="passdBox">
            <div class="passpart1">
                <div class="TitleNotice">忘记密码了？根据收到的激活码进行验证身份，通过验证后重置密码，您就可以登录了。</div>
                <div class="StepsBox">
                    <div id="step_div_1" class="Step stepfirst" :class="{ Active: show_1 }">
                        <span class="StepNo">1</span>
                        <span class="StepName">确认账户</span>
                    </div>
                    <div id="step_div_2" class="Step" :class="{ Active: show_2 }">
                        <span class="StepNo">2</span>
                        <span class="StepName">安全认证</span>
                    </div>
                    <div id="step_div_3" class="Step" :class="{ Active: show_3 }">
                        <span class="StepNo">3</span>
                        <span class="StepName">重置密码</span>
                    </div>
                    <div id="step_div_4" class="Step steplast" :class="{ Active: show_4 }">
                        <span class="StepNo"></span>
                        <span class="StepName">完成</span>
                    </div>
                </div>
                <div class="clear"></div>
                <div id="step_1" class="restInfo" v-show="show_1">
                    <div class="box1">
                        <span>账 户：</span>
                        <input name="" v-model="fogetArgs" type="text" placeholder="用户名/邮箱/已验证手机号" />
                        <div class="clear"></div>
                    </div>
                    <div class="box1">
                        <span>验证码：</span>
                        <input name="" v-model="imageVarifyCode" type="text" class="yzm" />
                        <img :src="imageUrl" width="100" height="35" />
                        <div class="clear"></div>
                    </div>
                    <div class="box1">
                        <input type="button" class="onebtn" @click="show(1)" value="下一步" />
                    </div>
                </div>
                <div id="step_2" class="restInfo" v-show="show_2">
                    <div class="box2"> {{ text }} </div>

                    <div class="box1">
                        <span>激活码：</span>
                        <input name="smsCodeInput" v-model="smsCodeInput" type="text" class="yzm" />
                        <b class="phonenum" @click="getSMSCode()">获取短信验证码</b>
                        <div class="clear"></div>
                    </div>
                    <div class="box1">
                        <input type="button" class="onebtn" @click="show(2)" value="下一步" />
                    </div>
                </div>
                <div id="step_3" class="restInfo" v-show="show_3">
                    <div class="box2">
                        <span class="span1">用户名：</span>
                        <span class="span2">{{ userName }}</span>
                        <div class="clear"></div>
                    </div>
                    <div class="box1">
                        <span>新密码：</span>
                        <input name="" type="text" />
                        <div class="clear"></div>
                    </div>
                    <div class="box1">
                        <span>确认密码：</span>
                        <input name="" type="text" />
                        <div class="clear"></div>
                    </div>
                    <div class="box1">
                        <input type="button" class="onebtn" @click="show(3)" value="下一步" />
                    </div>
                </div>
                <div id="step_4" class="restInfo2" v-show="show_4">
                    <div class="SucTitle">恭喜您，您的密码设置成功！</div>
                    <p>您的用户名是：HEB5_14@your_email.com</p>
                    <p>您可以使用新密码登录蝶飞人才网<a href="/login">立即登录</a></p>
                </div>

            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'forgetPwd',
    data() {
        return {
            show_1: true,
            show_2: false,
            show_3: false,
            show_4: false,
            imageUrl: '/static/images/VerifyCode.jpg',

            fogetArgs: "",
            imageVarifyCode: "",
            userId: null,
            phone: null,
            userEmail: null,
            userName: null,
            password: null,
            code: null,
            text: "",
            smsCode: null,
            smsCodeInput: ""
        }
    },
    methods: {
        getSMSCode() {  //获取验证码
            let that = this
            axios({
                method: 'post',
                url: '/api/user/sendVerifyCode',
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
                    console.log(result.data)
                    that.smsCode = result.data
                })
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
                    // console.log(result.data.object.phone)
                    that.phone = result.data.object.phone
                    console.log(result.data.object.userName)
                    that.userName = result.data.object.userName
                })
        },
        validateCode() {
            let that = this
            return new Promise((resolve, reject) => {
                axios({
                    method: 'post',
                    url: '/api/user/validateCode',
                    data: {
                        userId: that.userId,
                        phone: that.phone,
                        userEmail: that.userEmail,
                        userName: that.userName,
                        password: that.password,
                        code: that.smsCodeInput
                    }
                })
                    .then(function (result) {
                        console.log("验证码校验的返回值：" + result.data.code)
                        if (result.data.code == "100001") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    })

            })

        },
        show(stepIndex) {
            switch (stepIndex) {
                case 1:
                    if (this.fogetArgs == "" || this.imageVarifyCode == "") {
                        alert("请输入完整信息！")
                        return;
                    }

                    const phoneRegex = /^[1-9]\d{10}$/;

                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

                    const usernameRegex = /^user_\d+$/;

                    //发送请求获取图片验证码 todo
                    // axios({
                    //     method: 'get', 
                    //     url: '/api/user-info/getImageVerifyCode',
                    // })
                    // .then(function(result){

                    // })

                    if (phoneRegex.test(this.fogetArgs)) {
                        this.phone = this.fogetArgs;
                        this.text = "激活码已经发送到您的手机：" + this.phone + " 中"
                    }
                    if (emailRegex.test(this.fogetArgs)) {
                        this.userEmail = this.fogetArgs;
                        this.text = "激活码已经发送到您的邮箱：" + this.userEmail + " 中"
                    }

                    if (usernameRegex.test(this.fogetArgs)) {
                        this.userName = this.fogetArgs;
                        let that = this
                        //获取用户详细信息
                        this.getUserInfo()
                        that.text = "激活码已经发送到您的手机：" + that.phone + " 中"
                    }

                    this.show_1 = false
                    this.show_2 = true
                    break
                //cookie中存放用户编号和用户名
                case 2:
                    // let r = this.validateCode();
                    // if (!r) {
                    //     break
                    // }
                    let that = this
                    this.validateCode().then(function (result) {
                        if (result) {
                            that.getUserInfo()
                            that.show_2 = false
                            that.show_3 = true           
                        } else {
                            alert("验证码校验不通过")
                            return
                        }
                    })
                    break
                case 3:

                    this.show_3 = false
                    this.show_4 = true
                    break
                case 4:
                    break
            }
        }
    }
}
</script>