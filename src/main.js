import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/common/style.css'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/dist/index.css'
import {ElMessage} from 'element-plus'
const app = createApp(App)

router.beforeEach((to,from,next) => {
    console.log(to);
    let isLogin = localStorage.getItem('loginType')
    if(to.name == 'login' || isLogin) {
      next()
    }else {
      ElMessage('身份信息失效,请重新登录！')
      router.push({path: '/login'})
     
    }
  })
app.use(ElementPlus).use(store).use(router).mount('#app')
