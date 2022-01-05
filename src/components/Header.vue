<template>
  <header class="header-nav">
      <div class="nav-left">
          Book
          <div class="extend-open">
            <el-icon :style="{marginLeft: ml}" size="26" color="#666" @click="expendBar"><component :is="expendIcon"></component></el-icon>
        </div>
      </div>
      <div class="nav-right" @click="signout">
          <img src="" alt="">
          退出
      </div>
  </header>
</template>

<script>
import {ref} from 'vue'
import components from '@/plugins/element-icon.js'
export default {
    components: {
        ...components
    },
    props: {
        isCollapse: String
    },
    emits: ['update:barWidth'],
    setup(props,{emit}) {
        const ml = ref('80px')
        const expendIcon = ref('Fold')
        function expendBar() {
            if(expendIcon.value == 'Fold') {
                expendIcon.value = 'Expand'
                emit('update:isCollapse',true)
            }else if(expendIcon.value == 'Expand') {
                expendIcon.value = 'Fold'
                emit('update:isCollapse',false)
            }
            
        }
      
        return {
            ml,
            expendIcon,
            expendBar,
        
        }
    },
    methods: {
         async signout() {
            let confirm = await this.$confirm(
                '你确定要退出登录吗',
                '提示',
                {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning',
                }
            )
            console.log(confirm);
            if(confirm == 'confirm') {
                localStorage.removeItem('loginType')
                this.$router.push({path: '/login'})
            }
            
            // useRouter.push({path: '/login'})
        }
    }

}
</script>

<style scoped lang="less">
    .header-nav {
        display: flex;
        height: 45px;
        justify-content: space-between;
        background-color: #333;
        border-bottom: 1px solid #f1f1f1;
        line-height: 45px;
        color: #fff;
       .nav-left {
           margin-left: 15px;
           font-size: 26px;
           font-weight: 700;
           
       }
       .nav-right {
           margin-right: 20px;
           cursor: pointer;
       }
    }
     .extend-open {
        display: inline-block;
       text-align: right;
       padding-right: 10px;
       .el-icon {
           cursor: pointer;
       }
   }
</style>