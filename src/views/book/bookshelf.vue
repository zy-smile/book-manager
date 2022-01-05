<template>
    <el-breadcrumb>
      <el-breadcrumb-item>我的书架</el-breadcrumb-item>
      <el-breadcrumb-item>书架{{id}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container-box">

    </div>
</template>

<script>
export default {
    props: {
      id: Number
    },
    setup() {
      
    }
}
</script>

<style scoped lang="less">
 
</style>