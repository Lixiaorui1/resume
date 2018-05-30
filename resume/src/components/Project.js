import React, { Component } from 'react';
// import {  } from 'antd-mobile';


class Project extends Component {
  constructor (props) {
  	super (props);
  	this.state = {
      data: [
        {
          'title': '中国健康云（webApp）',
          '开始时间': "2017-12",
          '结束时间': '2018-02',
          '项目职责': '1. 使用弹性盒布局百分比布局；2.使用react框架实现组件化开发；3.使用react-router实现页面跳转；4.使用axios请求后台数据；5. 使用mint-ui插件实现页面结构 ；6.使用react-redux存储并传递组件公用数据，实现组件间的数据传递',
          '项目描述': '主要功能包括查询，找专家，健康管理，健康活动，我的订单,为用户提供优质的查以及健康管理服务。'
        },
        {
          'title': '缦途后台管理系统（pc）',
          '开始时间': "2017-07",
          '结束时间': '2018-10',
          '项目职责': '1. 通过react-router建立一级路由，按需建造子路由；2. 使用ant design快速构建页面布局；3. Axios获取数据，循环渲染图片数据列表；4. 使用react-redux存储并传递组件公用数据，实现组件间的数据传递；5.使用ReactTransition实现收藏夹的划入划出等动画效果。',
          '项目描述': '本项目是由react框架搭建的单页面后台管理系统，功能主要为传媒公司后台文案数据与图片摄影数据的管理提供技术支持，使得文案类型分类明确，图片数据便于管理。'
        },{
          'title': '东大门style（app）',
          '开始时间': "2016-12",
          '结束时间': '2017-03',
          '项目职责': '1. 项目整体选用vue来开发；2．页面之间的跳转由嵌套路由和动态路由来实现；3. 图片使用懒加载；4. 通过ajax来实现前后端数据的交互；5. 把购物车页面分成几个小组件，外层是一个大组件的方式来开发；6. 使用vuex来管理状态；7. 使用mint-ui插件构建构建页面',
          '项目描述': '主要功能包括查询，找专家，健康管理，健康活动，我的订单,为用户提供优质的查以及健康管理服务。'
        },{
          'title': '肽积木官网 （pc）',
          '开始时间': "2016-08",
          '结束时间': '2016-10',
          '项目职责': '1. 将设计图所需图片切片；2．利用html+css对页面进行布局，编写语义化强的代码；3. 使用jQuery完成页面的行为和特效；4. 通过ajax来实现前后端数据的交互；5. 对网站的建设提出建设性的建议',
          '项目描述': '这是一个专门介绍人工医疗智能，并且推广其旗下产品的官方网站。'
        },{
          'title': '宁米科技官网（pc）',
          '开始时间': "2016-08",
          '结束时间': '2016-10',
          '项目职责': '1. 用html+css进行页面的搭建与特效的实现；2.使用jQuery完成页面的行为和特效；3.使用 ajax 完成前后端数据交互；4. 参与网站的测试bug修改工',
          '项目描述': '公司业务介绍，以及各类服务介绍，为客户提供查询以及各类在线服务。'
        },
      ]
  	}
  }
  render() {
  	
    return (
      <div className="job">
        {
          this.state.data.map((value,index) => {
            return (
              <ul key={index} className="resume-card" >
              <p></p>
                <h1 className="resume-title"><span>{value.title}</span></h1>
                {
                  Object.keys(value).filter((value)=>{return value != 'title'}).map((item,num) => {
                    var flag = false;
                    if(value[item].length > 13){
                       flag = true;
                    }
                    return (
                      <li key={num} style={{overflow: 'hidden'}}>
                        <p style={{float: "left",color: '#9a9a9a',fontSize: '12px',width: flag ? '100%' : ''}}>{item}:</p>
                        <p style={{float: flag ? "none" : "right", width: flag ? '100%' : '2rem',marginRight: '0.05rem'}}>{value[item]}</p>
                      </li>
                    )
                  })
                }
              </ul>
            )
          })
        }
      </div>
     )
  }
}

export default Project;
