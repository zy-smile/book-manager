<template>
   <el-menu
   class="bar-menu"
    active-text-color="#55b3ee"
    background-color="#fff"
    text-color="#6e84a3"
    :router="true"
    :collapse="isCollapse"
    :default-active="active"
    :unique-opened="true"
    :default-openeds="[1]"
    @select="selectMenu"
   >    
      <el-sub-menu index="1">
          <template #title><el-icon><User/></el-icon><span>我的书架</span></template>
          <el-menu-item index="/bookshelf/1">我的书架1<el-icon class="arrow-right"><ArrowRight/></el-icon></el-menu-item>
          <el-menu-item index="/bookshelf/2">我的书架2<el-icon class="arrow-right"><ArrowRight/></el-icon></el-menu-item>
          <el-menu-item index="/bookshelf/3">我的书架3<el-icon class="arrow-right"><ArrowRight/></el-icon></el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/manager"><el-icon ><Reading /></el-icon><template #title>书架管理</template></el-menu-item>
      <el-menu-item index="/countdata"><el-icon><Histogram/></el-icon><template #title>数据统计</template></el-menu-item>
      <el-menu-item index="/settings"><el-icon><Tools/></el-icon><template #title>我的设置</template></el-menu-item>
   </el-menu>
</template>

<script>
import {ref,onMounted} from 'vue'
import componentIcons from '@/plugins/element-icon.js'
// import {Histogram,Reading,Tools,User,ArrowRight} from '@element-plus/icons-vue'
export default {
    components: {
        ...componentIcons
    },
    props: {
        isCollapse: Boolean
    },
    setup() {
        // const menus = [{
        //     name: '我的书架',
        //     icon: '',
        //     id: 1
        // },{
        //     name: '书籍管理',
        //     icon: '',
        //     id: 2
        // }]
        // return {
        //     menus
        // }
        
        const active = ref('/bookshelf/1')
        function selectMenu(index) {
            sessionStorage.setItem('sideIndex',index)
        }
        onMounted(() => {
            if(sessionStorage.getItem('sideIndex')) {
                active.value = sessionStorage.getItem('sideIndex')
            }
        })
        return {
            active,
            
            selectMenu
        }
    }
}
</script>

<style scoped lang="less">
    .bar-menu:not(.el-menu--collapse) {
        width: 200px;
    }
    .el-menu-item.is-active {
        background-color: #e4e4e4;
    }
    .arrow-right {
        margin-left: 80px;
        font-size: 14px;
    }
</style>    