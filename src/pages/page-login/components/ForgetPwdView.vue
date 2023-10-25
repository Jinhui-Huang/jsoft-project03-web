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
                    <div id="step_div_1" class="Step stepfirst" :class="{Active: show_1}">
                        <span class="StepNo">1</span>
                        <span class="StepName">确认账户</span>
                    </div>
                    <div id="step_div_2" class="Step" :class="{Active: show_2}">
                        <span class="StepNo">2</span>
                        <span class="StepName">安全认证</span>
                    </div>
                    <div id="step_div_3" class="Step" :class="{Active: show_3}">
                        <span class="StepNo">3</span>
                        <span class="StepName">重置密码</span>
                    </div>
                    <div id="step_div_4" class="Step steplast" :class="{Active: show_4}">
                        <span class="StepNo"></span>
                        <span class="StepName">完成</span>
                    </div>
                </div>
                <div class="clear"></div>
                <div id="step_1" class="restInfo" v-show="show_1">
                    <div class="box1">
                        <span>账 户：</span>
                        <input name="" type="text" placeholder="用户名/邮箱/已验证手机号" />
                        <div class="clear"></div>
                    </div>
                    <div class="box1">
                        <span>验证码：</span>
                        <input name="" type="text" class="yzm" />
                        <img :src="imageUrl" width="100" height="35" />
                        <div class="clear"></div>
                    </div>
                    <div class="box1">
                        <input type="button" class="onebtn" @click="show(1)" value="下一步" />
                    </div>
                </div>
                <div id="step_2" class="restInfo" v-show="show_2">
                    <div class="box2">激活码已经发送到您的手机：152*******56 中</div>
                    <div class="box1">
                        <span>激活码：</span>
                        <input name="" type="text" class="yzm" />
                        <b class="phonenum">获取短信验证码</b>
                        <div class="clear"></div>
                    </div>
                    <div class="box1">
                        <input type="button" class="onebtn" @click="show(2)" value="下一步" />
                    </div>
                </div>
                <div id="step_3" class="restInfo" v-show="show_3">
                    <div class="box2">
                        <span class="span1">用户名：</span>
                        <span class="span2">EB5_14@your_email.com</span>
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
export default {
    name: 'forgetPwd',
    data () {
        return {
            show_1: true,
            show_2: false,
            show_3: false,
            show_4: false,
            imageUrl: '/static/images/VerifyCode.jpg'
        }
    },
    methods: {
        show(stepIndex) {
            switch(stepIndex){
                case 1:
                    this.show_1 = false
                    this.show_2 = true
                    break 
                case 2:
                    this.show_2 = false
                    this.show_3 = true
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