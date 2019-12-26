<template>
    <div>
        <div class="bar">
        <!-- <i>iconfont</i> -->
        <ul>
            <router-link to="/discover/recommended" tag="li" activeClass="active">推荐</router-link>
            <router-link to="/discover/FocusOn" tag="li" activeClass="active">关注</router-link>
            <router-link to="/discover/city" tag="li" activeClass="active">大连市</router-link>
        </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.active{
    color: #333333;
    border-bottom: 1px solid #ff7600;
}
*{
    padding: 0;
    margin: 0;
}
.bar{
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 33;
}
ul{
    list-style: none;
    display: flex;
    width: 100%;
    li{
        flex: 1;
        width:100%;
        color: #808080;
        height: 0.44rem;
        line-height: 0.44rem;
        text-align: center;
        // position: fixed;
        // top: 0px;
        // right: 0px;
        background: white;
    }
}
</style>
