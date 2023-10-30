<template>
    <div class="compHeader">
        <div class="main">
            <div class="header_l">
                <a href="/index">
                    <img src="/static/images/logo_1.png" />
                    <img src="/static/images/logo_2.png" />
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