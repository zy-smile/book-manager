<template>
        <Header v-model:isCollapse="isCollapse"></Header>
        <div class="content-box">
            <div class="sidebar">
                <side-bar :isCollapse="isCollapse"></side-bar>
            </div>
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
</template>

<script>
import {ref} from 'vue'
import Header from '../../components/Header.vue'
import SideBar from '../../components/SideBar.vue'
export default {
    components:{
        Header,
        SideBar
    },
    setup() {
        const isCollapse = ref(false)
        return {
            isCollapse
        }
    }
}
</script>

<style scope lang="less">
    .content-box{
        height: calc(100% - 46px);
        .sidebar {
            float: left;
            height: 100%;
            background-color: #fff;
            border-right: 2px solid #e3ebf6;
        }
        .container {
            padding:10px;
            height: 100%;
            box-sizing: border-box;
            margin-left: v-bind(barWidth);
            background: #f9fbfd;
            overflow-y: auto;
        }
    }
</style>