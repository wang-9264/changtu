<template>
    <div>
        <div class="bar">
        <ul>
        <router-link to="/wdj/hotAnswer" tag="li" activeClass="active">热门</router-link>
        <router-link to="/wdj/ToAnswer" tag="li" activeClass="active">待回答</router-link>
        </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.active{
    border-bottom: 1px solid #ff7600;
}
.bar{
    width: 3.75rem;
    background: white;
    height: 0.44rem;
    margin-top: 0.14rem;
    ul{
        list-style: none;
        display: flex;
        width: 100%;
        li{
            flex: 1;
            height: 0.44rem;
            line-height: 0.44rem;
            text-align: center;
        }
    }
}
</style>
