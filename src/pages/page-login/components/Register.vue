<template>
    <div>
        <div class="header">
            <div class="mainwarp">
                <div class="logo"><a href="/index"><img src="/static/images/log.png" /></a></div>
                <div class="welcome">欢迎注册</div>
                <div class="headerright">
                    <a href="/login">个人登录</a>
                    <span>|</span>
                    <a href="/index">返回首页</a>
                </div>
            </div>
        </div>
        <div class="zhuceBox">
            <div class="zcLeft">
                <ul id="tabzc">
                    <li>邮箱/手机号注册</li>
                    <li></li>
                    <div class="clear"></div>
                </ul>
                <div class="clear"></div>
                <div id="contentzc">
                    <ul style="display:block;">
                        <div class="zcpart0">
                            <div class="zcpart5">
                                <span></span>
                                <input name="" type="text" placeholder="手机号或邮箱" />
                            </div>
                            <div class="zcpart6">手机号/邮箱用于登录和找回密码</div>
                            <div class="zcpart7">
                                <span></span>
                                <input name="" type="text" placeholder="设置密码" />
                            </div>
                            <div class="zcpart6">请输入6-20个字符</div>
                            <div class="zcpart2_c">
                                <span class="CheckBox" :class="{Yes: isShow}" @click="check()"></span>
                                <span style="float:left">我已阅读并接受<a href="/login/user_agree">用户协议</a></span>
                            </div>
                            <div class="clear"></div>
                            <div class="zcpart8">
                                <a href="/login/register">注 册</a>
                            </div>
                            <div class="zcpart8 zcpart9">
                                <a href="/login/resume">一分钟填写简历 快速填写 省时省力</a>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="zcRight">
                <div class="topdiv">
                    <span class="noPa">已有账号了？</span><br />
                    <a href="/login">立即登录</a>
                </div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        check() {
            this.isShow = !this.isShow
        }
    }
}
</script>