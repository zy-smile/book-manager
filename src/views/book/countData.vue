<template>
   <el-breadcrumb>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container-box">
         <div class="datacount">
                <div class="card-item card-item1">
                     <div class="bookname">名著类</div>
                     <div class="count">200</div>
                     <el-icon size="60" color="#95aac9"><coffee-cup /></el-icon>
                </div>
                <div class="card-item card-item2">
                     <div class="bookname">小说类</div>
                     <div class="count">100</div>
                     <el-icon size="60" color="#95aac9"><reading /></el-icon>
                </div>
                <div class="card-item card-item3">
                     <div class="bookname">科学类</div>
                     <div class="count">10</div>
                     <el-icon size="60" color="#95aac9"><medal /></el-icon>
                </div>
                <div class="card-item card-item3">
                     <div class="bookname">心理类</div>
                     <div class="count">10</div>
                     <el-icon size="60" color="#95aac9"><medal /></el-icon>
                </div>
         </div>
         <div class="ranking">
            <div class="rankking-echart" id="bookLineEcharts"></div>
               <div class="rankking-list">
                        <h3>排行榜</h3>
                        <ol class="book-list">
                           <li><span>1.名著类</span><span class="list-num">30本</span><span>阅读指数: 40</span><el-icon color="#67C23A"><top/></el-icon></li>
                           <li><span>2.小说类</span><span class="list-num">30本</span><span>阅读指数: 40</span><el-icon color="#67C23A"><top/></el-icon></li>
                           <li><span>3.科学类</span><span class="list-num">30本</span><span>阅读指数: 40</span><el-icon color="#67C23A"><top/></el-icon></li>
                           <li><span>4.社会类</span><span class="list-num">30本</span><span>阅读指数: 40</span><el-icon color="#67C23A"><top/></el-icon></li>
                           <li><span>5.心理类</span><span class="list-num">30本</span><span>阅读指数: 40</span><el-icon color="#F56C6C"><bottom/></el-icon></li>
                           <li><span>6.心理类</span><span class="list-num">30本</span><span>阅读指数: 40</span><el-icon color="#F56C6C"><bottom/></el-icon></li>
                           <li><span>7.心理类</span><span class="list-num">30本</span><span>阅读指数: 40</span><el-icon color="#F56C6C"><bottom/></el-icon></li>
                           <li><span>8.心理类</span><span class="list-num">30本</span><span>阅读指数: 40</span><el-icon color="#F56C6C"><bottom/></el-icon></li>
                           <li><span>9.心理类</span><span class="list-num">30本</span><span>阅读指数: 40</span><el-icon color="#F56C6C"><bottom/></el-icon></li>
                           <li><span>10.心理类</span><span class="list-num">30本</span><span>阅读指数: 40</span><el-icon color="#F56C6C"><bottom/></el-icon></li>
                        </ol>
               </div>
               
         </div>
         <div id="echart-box3"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import {onMounted} from 'vue'
import {lineoptions,echarts_3} from '@/plugins/echartsOption/countdata.js'
import components from '@/plugins/element-icon.js'
// import {Reading,CoffeeCup,Medal,Top,Bottom} from '@element-plus/icons-vue'
export default {
   components: {
      ...components
   },
   setup() {
      onMounted(() => {
         let lineChart = echarts.init(document.getElementById('bookLineEcharts'));
         lineChart.setOption(lineoptions)
         let echarts3 = echarts.init(document.getElementById('echart-box3'))
         echarts3.setOption(echarts_3)
         window.onresize = function() {
            lineChart.resize()
            echarts3.resize()
         }
      }) 
   }
}
</script>

<style scoped lang="less">
   @rankingH: 400px;
   .datacount {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
   }
   .card-item {
      position: relative;
      flex: 1;
      height: 185px;
      margin: 0 30px;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
      padding: 52px 0 0 52px;
      box-sizing: border-box;
      transition: all .3s;
      .bookname {
         margin-bottom: 10px;
         color: #95aac9;
         font-size: 30px;
         font-family: Adobe 黑体 Std;
      }
      .count {
         color: #404158;
         font-weight: bold;
         font-size: 36px;
         font-family: Segoe UI Emoji;
      }
      &:before {
         content: '';
         position: absolute;
         top: 0;
         left: 6px;
         width: 0;
         height: 2px;
         background: green;
         transition: ease-in-out .6s;
      }
       &:after {
         content: '';
         position: absolute;
         bottom: 0;
         right: 6px;
         width: 0;
         height: 2px;
         background: green;
         transition: ease-in-out .6s;
      }
      &:hover {
          transform: scale(1.01);
          &:after {
             width: calc(100% - 12px);
          }
           &:before {
             width: calc(100% - 12px);
          }
      }
      .el-icon {
         position: absolute;
         right: 20%;
         top: 50%;
         transform: translateY((-50%));
      }
   }
   @media screen and (max-width: 1440px) {
      .card-item {
         height: 150px;
         margin: 0 10px;
         padding: 40px 0 0 40px;
         .bookname {
            font-size: 26px;
            margin-bottom: 4px;
         }
         .count {
            font-size: 36px;
         }
         .el-icon {
            font-size: 36px;
         }
      }
   }
    @media screen and (max-width: 1280px) {
      .card-item {
         height: 120px;
         margin: 0 10px;
         padding: 30px 0 0 30px;
         .bookname {
            font-size: 20px;
            margin-bottom: 4px;
         }
         .count {
            font-size: 30px;
         }
         .el-icon {
            font-size: 30px;
         }
      }
   }
   
   .ranking {
      height: @rankingH;
      display: flex;
      justify-content: space-between;
      margin: 30px 0 10px;
      padding: 0 10px;
      .rankking-list {
         flex: 1;
         height: @rankingH;
         background-color: #fff;
         border-radius: 12px;
         margin-left: 10px;
         box-shadow: 0 2px 5px rgba(0,0,0,0.1);
         h3 {
            margin-bottom: 10px;
            margin: 10px 0 20px 20px;
         }
         li {
            display: flex;
            justify-content: space-between;
            height: 32px;
            line-height: 32px;
            padding: 0 20px;
            .el-icon {
               height: 32px;
               line-height: 32px;
               font-weight: bold;
            }
            
            
         }
      }
      .rankking-echart {
         flex: 1;
         height: @rankingH;
         border-radius: 12px;
         
         margin-right: 10px;
         background-color: #fff;
         box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
   }
   #echart-box3 {
      margin: 20px 10px 10px;
      height: 360px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      border-radius: 5px;
   }
</style>