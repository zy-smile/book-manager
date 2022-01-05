<template>
  <div class="login-page">
      <div class="login-box">
        <h3>Login</h3>
        <el-form ref="loginform" :model="loginForm" :rules="rules" label-width="120px">
            <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="loginForm.username" placeholder="输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                 <el-input type="password" v-model="loginForm.password" placeholder="输入密码"></el-input>
            </el-form-item>
            <el-form-item class="submitBtns">
                <el-button type="primary"  v-loading.fullscreen.lock="fullscreenLoading" @click="loginInHandle('loginform')">登录</el-button>
                <el-button type="warning">重置</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
        data() {
            return {
            }   
        },
        setup() {
            const fullscreenLoading = ref(false)
            const loginForm = ref({username: '',password: ''})
            const rules = {
                    username: [
                        {required: true,min: 4,max: 12,message: '请输入用户名,长度4-12个字符',trigger: 'blur'},
                    ],
                    password: [
                        {required: true,min: 6,max: 14,message: '请输入6-14位密码'}
                    ]
                }
            return {
                fullscreenLoading,
                rules,
                loginForm
            }
        },
        methods: {
            loginInHandle(formname) {
                this.$refs[formname].validate(valid => {
                    if(valid) {
                        this.fullscreenLoading = true
                        localStorage.setItem('username',this.loginForm.username)
                        localStorage.setItem('password',this.loginForm.password)
                        localStorage.setItem('loginType',true)
                        setTimeout(() => {
                            this.fullscreenLoading = true
                            this.$message.success('登录成功')
                            this.$router.push({path: '/home'})
                        },2000)
                    }
                })
            }
        }
       
}
</script>

<style scoped lang="less">
    .login-page {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: #333;
        .login-box {
            width: 480px;
            height: 320px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 2px 4px 4px ragb(0,0,0,0.2);
            padding-top: 20px;
            h3 {
                font-size: 36px;
                text-align: center;
                margin-bottom: 40px;
            }
            .el-input {
                width: 300px;
            }
            .submitBtns {
                text-align: center;
                /deep/.el-form-item__content {
                    margin-left: 0!important;
                }
            }
        }
    }
</style>