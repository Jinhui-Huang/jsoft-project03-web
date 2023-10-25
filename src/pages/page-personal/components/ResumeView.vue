<template>
    <div>
        <div class="personalBody">
            <div id="base_div" v-show="show_base" class="perRightcon">
                <div class="JlBoxTit">
                    <p class="tit1">基本资料/求职意向</p>
                    <div class="tit2"></div>
                    <p class="tit3">最高学历</p>
                </div>
                <div class="JlBoxCon">
                    <h1><span>基本信息</span>
                        <div></div>
                    </h1>
                    <div class="JlBoxLeft">
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>姓 名：</div>
                            <div class="inputtxt">
                                <input name="" type="text" class="txt1" />
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>性 别：</div>
                            <div class="inputtxt">
                                <div class="sex" :class="{ on: show_sex }" @click="showSex('man')">男</div>
                                <div class="sex" :class="{ on: !show_sex }" @click="showSex('girl')">女</div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>出生年月：</div>
                            <div class="inputtxt">
                                <input name="" type="date" class="txt8" />
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>现居住地：</div>
                            <div class="inputtxt">
                                <input name="" type="text" class="txt7" />
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>户口所在地：</div>
                            <div class="inputtxt">
                                <input name="" type="text" class="txt7" />
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>我成长在：</div>
                            <div class="inputtxt">
                                <input name="" type="text" class="txt7" />
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>手机号码：</div>
                            <div class="inputtxt">
                                <span class="phone">152*******56</span>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>电子邮箱：</div>
                            <div class="inputtxt">
                                <input name="" type="text" class="txt3" />
                                <b>可用来登录</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="JlBoxCon">
                    <h1><span>求职意向</span>
                        <div></div>
                    </h1>
                    <div class="JlBoxLeft">
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>求职状态：</div>
                            <div class="inputtxt">
                                <select class="txtcon txt2">
                                    <option value="">离职-随时到岗</option>
                                    <option value="">在职-月内到岗</option>
                                    <option value="">在职-考虑机会</option>
                                    <option value="">在职-暂不考虑</option>
                                </select>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>相关工作经验：</div>
                            <div class="inputtxt">
                                <div class="typeJob" :class="{ on: isActive }" @click="showJob('yes')">有</div>
                                <div class="typeJob" :class="{ on: !isActive }" @click="showJob('no')">无</div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>期望工作性质：</div>
                            <div class="inputtxt">
                                <div class="typeJob" :class="{ on: show1 }" @click="showThreeJob(1)">全职</div>
                                <div class="typeJob" :class="{ on: show2 }" @click="showThreeJob(2)">兼职</div>
                                <div class="typeJob" :class="{ on: show3 }" @click="showThreeJob(3)">实习</div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>期望月薪：</div>
                            <div class="inputtxt">
                                <select class="txtcon txt2">
                                    <option value="">面议</option>
                                    <option value="">30000以上</option>
                                    <option value="">20000-30000</option>
                                    <option value="">10000-20000</option>
                                    <option value="">5000-10000</option>
                                    <option value="">5000以下</option>
                                </select>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>期望工作地点：</div>
                            <div class="inputtxt">
                                <input name="" type="text" class="txt7" />
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>期望职位类别：</div>
                            <div class="inputtxt">
                                <input name="" type="text" class="txt7" />
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <button id="next_btn" class="nextBtn" @click="show()">进一步完善</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="education_div" v-show="show_education" class="perRightcon">
                <div class="JlBoxTit">
                    <p class="tit1">基本资料/求职意向</p>
                    <div class="tit2"></div>
                    <p class="tit3 on">最高学历</p>
                </div>
                <div class="JlBoxCon">
                    <h1><span>最高学历</span>
                        <div></div>
                    </h1>
                    <div class="JlBoxLeft">
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>学校名称：</div>
                            <div class="inputtxt">
                                <input name="" type="text" class="txt3" />
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>毕业时间：</div>
                            <div class="inputtxt">
                                <input id="graduation_time" name="" type="date" class="txt8" />
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>学历：</div>
                            <div class="inputtxt">
                                <select class="txtcon txt2">
                                    <option value="">初中及一下</option>
                                    <option value="">中专/中技</option>
                                    <option value="">高中</option>
                                    <option value="">大专</option>
                                    <option value="">硕士</option>
                                    <option value="">本科</option>
                                    <option value="0">博士</option>
                                </select>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>学历类型：</div>
                            <div class="inputtxt">
                                <select class="txtcon txt2">
                                    <option value="">普通高等教育（统招）</option>
                                    <option value="">普通专升本（统招）</option>
                                    <option value="">成人高考</option>
                                    <option value="">自考</option>
                                    <option value="">电大</option>
                                    <option value="">网络教育</option>
                                </select>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>专业名称：</div>
                            <div class="inputtxt">
                                <input name="" type="text" class="txt3" />
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <div class="nametxt"><span>*</span>专业类别：</div>
                            <div class="inputtxt">
                                <select class="txtcon txt2">
                                    <option value="">哲学</option>
                                    <option value="">经济学</option>
                                    <option value="">法学</option>
                                    <option value="">教育学</option>
                                    <option value="">文学</option>
                                    <option value="">历史学</option>
                                    <option value="">理学</option>
                                    <option value="">工学</option>
                                    <option value="">农学</option>
                                    <option value="">医学</option>
                                    <option value="">军事学</option>
                                    <option value="">管理学</option>
                                    <option value="">艺术学</option>
                                </select>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="jldiv">
                            <button class="saveBtn">填写完毕</button>
                            <button id="previous_btn" class="preBtn" @click="show()">上一步</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
        <div class="footer"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show_base: true,
            show_education: false,
            show_sex: true,
            isActive: true,
            show1: true,
            show2: false,
            show3: false
        }
    },
    methods: {
        show() {
            this.show_base = !this.show_base
            this.show_education = !this.show_education
        },
        showSex(sex) {
            if (sex == 'man') {
                this.show_sex = true
            } else {
                this.show_sex = false
            }
        },
        showJob(status) {
            if (status == 'yes') {
                this.isActive = true
            } else {
                this.isActive = false
            }
        },
        showThreeJob(i) {
            this.show1 = false,
            this.show2 = false,
            this.show3 = false
            if (i == 1) {
                this.show1 = true
            }
            if (i == 2) {
                this.show2 = true
            }
            if (i == 3) {
                this.show3 = true
            }
        }
    }
}
</script>