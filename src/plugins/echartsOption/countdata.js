import * as echarts from 'echarts'
export let lineoptions = {
    grid: {
        top: '12%',
        left: '60px',
        right: '30px',
        bottom: '30px'
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        // textStyle: {
        //     color: '#2c7be5',
        
        // },
       
        formatter: '{b}: {c}本'
    },
    xAxis: {
        type: 'category',
        data: ['名著类',"小说类","科学类","心理类","社会类"],
        axisLabel: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#95aac9'
            }
        },
        boundaryGap: true,
        axisTick: {
            show: true,
            length: 4,
            lineStyle: {
                color: '#95aac9'
            }
        },
        splitArea: {
            show: false
        },
        axisPointer: {
            show: true,
            label: {
                show: true
            }
        }
        
    },
    yAxis: {
        type: 'value',
        name: '单位: 本',
        nameTextStyle: {
            align: 'right'
        },
        nameGap: 15,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#f2f2f2',
                opacity: 0.5
            }
        },
        axisPointer: {
            show: false,
            label: {
                show: true
            }
        }
    },
    series: [{
        type: 'bar',
        name: '书籍',
        barWidth: 26,
        lineStyle: {
            color: 'green'
        },
        symbolSize: 6,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#46D7FF'
              },
              {
                offset: 1,
                color: '#38B2E6'
              }
            ])
          },
        data: [200,300,400,500,500]
    }, {
        name: '',
        type: 'pictorialBar',
        symbolSize: [26, 10],
        symbolOffset: [0,7], // 下部椭圆
        // "barWidth": "20",
        z: 12,
        color: '#2DB1EF',
        data: [200,300,400,500,500]
    }, {
        name: '',
        type: 'pictorialBar',
        symbolSize: [26, 10],
        symbolPosition: 'end',
        symbolOffset: [0,-6], // 上部椭圆
        // "barWidth": "20",
        z: 12,
        color: '#73E1FF',
        data: [200,300,400,500,500]
    }]
}
export let echarts_3 = {
    color: ['#EE6666','#91CC75'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        backgroundColor: 'rgba(0,0,0,20%)',
        borderColor: 'transparent',
        formatter: function(params) {
            console.log(params);
            let str = `${params[0].name}<br/>`
            params.length && params.forEach((item,index) => {
                if(index == 0) {
                    str += `${item.marker} ${item.seriesName}<span style="display: inline-block;width: 100px;text-align: right;">${item.value}小时</span><br/>`
                }else if(index == 1) {
                    str += `${item.marker} ${item.seriesName}<span style="display: inline-block;width: 100px;text-align: right;">${item.value}字</span><br/>`
                }else if(index == 2) {
                    str += `${item.marker} ${item.seriesName}<span style="display: inline-block;width: 100px;text-align: right;">${item.value}页</span>`
                }
            })
            return str
        }
    },
    legend: {
       top: '2%'
    },
    grid: {
        left: '4%',
        right: '2%',
        top: '12%',
        bottom: '8%'
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisTick: {
                alignWidthLabel: true
            },
            data: ['周日',"星期一","星期二","星期三","星期四","星期五","星期六"]
        }
    ],
    yAxis:[{
        type: 'value',
        name: '阅读时长',
        position: 'left',
        min: 0,
        max: 8,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#999'
            }
        },
        axisTick: {
            show: true
        },
        splitLine: {
            lineStyle: {
                color: '#f6f6f6'
            }
        }
    },{
        type: 'value',
        position: 'right',
        name: '阅读字数',
        nameTextStyle: {
            align: 'center',
            padding: [0,10,0,0]
        },
        min: 0,
        max: 80000,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#999'
            }
        },
        axisTick: {
            show: false,
            inside: true,
        },
        axisLabel: {
            inside: true,
        },
        splitLine: {
            lineStyle: {
                color: '#f6f6f6'
            }
        }
    }],
    series: [
        {
            name: '阅读时长',
            type: 'line',
            data: [1,2,1.2,4,2.7,4.2,2.1]
        },{
            name: '阅读字数',
            type: 'bar',
            barGap: '80%',
            barWidth: 20,
            yAxisIndex: 1,
            emphasis: {
                focus: 'series',
            },
            data: [1999,4000,5000,3000,5000,60000,3000]
        },{
            name: '阅读章节',
            type: 'bar',
            barWidth: 20,
            yAxisIndex: 1,
            data: [30000,50000,30000,10000,50000,10000,3000],
            itemStyle: {
                color: '#FFE63A'
            }
        }
    ]
}
