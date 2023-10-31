<template>
    <div class="compHeader">
        <div class="main">
            <div class="header_l">
                <a href="/index">
                    <img style="height: 50px; width: 50px;" src="/static/images/MYHD.png" />
                </a>
                
            </div>
            <div class="header_r">
                <a href="/personal/resume">{{ userName }}</a>
                <a href="/login/register">注册</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userName:null,
        }
    },
    mounted(){
        this.userName = this.$cookie.get("cookieUserName")
        console.log("获取到的userName"+this.userName)
    }
}
</script>