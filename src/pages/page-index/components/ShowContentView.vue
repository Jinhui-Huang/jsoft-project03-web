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
                                <span>个人登录</span>
                            </div>
                            <div class="loginC loginB">
                            </div>
                        </div>
                        <div class="loginmain">
                            <div class="ContentA">
                                <div class="txtInput"><input name="" type="text" placeholder="请输入用户名" /></div>
                                <div class="txtInput"><input name="" type="text" placeholder="请输入密码" /></div>
                                <div class="txtbtn">
                                    <div style="float:left">
                                        <br />
                                        <div class="clear"></div>
                                        <a href="/login/forget" class="a2">忘记密码</a>
                                    </div>
                                    <input name="" type="button" class="lobtn" value="登  录" />
                                </div>
                                <div class="zcbox">
                                    <div class="zc2">
                                        <a href="/login/resume" class="a1">一分钟填写简历</a>
                                        <a href="/login/register" class="a2">注册</a>
                                    </div>
                                </div>
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
                    <div v-for="item in arr" :key="item">
                        <div class="lineBox"></div>
                        <div class="divBox">
                            <a href="/info"><img src="/static/images/18.gif" width="84" /></a>
                            <p class="tit"><a href="/info">橱柜设计</a></p>
                            <p class="sub"><a href="/info/company">深圳维意定制家居用品有限公司</a></p>
                            <p class="num"><span>8K-10K</span></p>
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
export default {
    name: 'showContent',
    data() {
        return {
            arr: new Array(10)
        }
    },
    methods: {
        jumpSearchJob() {
            window.location = '/index/search';
        }
    }
}
</script>