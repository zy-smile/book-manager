<template>
  <el-breadcrumb>
      <el-breadcrumb-item>书架管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container-box">
        <div class="search-box">
          <div class="addBtn">
            <el-button type="primary">添加</el-button>
          </div>
            <el-form
            :inline="true">
            <el-form-item>
              <el-input type="text" placeholder="请输入书籍名称" clearable/>
            </el-form-item>
            <el-form-item>
              <el-select placeholder="请选择书籍类型">
                <option value="">全部</option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-date-picker type="date" placeholder="请输入日期" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-table :data="tableData" border stripe>
          <el-table-column type="selection" align="center"></el-table-column>
          <el-table-column prop="bookname" label="名称"></el-table-column>
          <el-table-column prop="author" label="作者"></el-table-column>
          <el-table-column prop="type" label="书籍类型"></el-table-column>
          <el-table-column prop="addtime" label="添加时间"></el-table-column>
          <el-table-column label="操作" align="center">
            <template v-slot="scope">
              <el-button type="primary" size="small" @click="seeDetail(scope.row.id)">查看</el-button>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="table-pagebox">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
        tableData: [
          {bookname: '平凡的世界',addtime: '2021-12-04',type: '名著类',author: '路遥'},
          {bookname: '平凡的世界',addtime: '2021-12-04',type: '名著类',author: '路遥'},
          {bookname: '平凡的世界',addtime: '2021-12-04',type: '名著类',author: '路遥'},
          {bookname: '平凡的世界',addtime: '2021-12-04',type: '名著类',author: '路遥'},
          {bookname: '平凡的世界',addtime: '2021-12-04',type: '名著类',author: '路遥'}
        ]
      }
  },
  setup() {
    
  }
}
</script>

<style scoped lang="less">
.search-box {
  display: flex;
  justify-content: space-between;
  .el-form {
    margin: 20px 0;
    .el-form-item {
      margin-right: 30px;
    }
  }
  .addBtn {
    margin: 20px 0;
  }
}
.table-pagebox {
  margin: 20px 0;
  text-align: center;
}
</style>