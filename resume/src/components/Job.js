import React, { Component } from 'react';
import "../style/Job.css";
// import {  } from 'antd-mobile';


class Job extends Component {
  constructor (props) {
  	super (props);
  	this.state = {
      data: [
        {
          'title': '北京浩桦科技有限公司',
          '开始时间': "2016-08",
          '结束时间': '2018-03',
          '行业类别': '互联网',
          '职位类别': 'WEB前端开发',
          '职位名称': 'WEB前端开发工程师',
          '职位薪金（税前）': '13000元/月',
          '工作描述': '1、负责一些公司的页面开发，有pc端、移动端，也会研发一些web前端项目；2、应用javaScript、jQuery、react、vue等技术实现网页的动静态页面以及交互,开发基于H5/ css3的页面。 '
        },
        {
          'title': '山西傲天科技有限公司',
          '开始时间': "2015/06",
          '结束时间': '2016/06',
          '行业类别': '互联网',
          '职位类别': 'WEB前端开发',
          '职位名称': 'WEB前端开发工程师',
          '职位薪金（税前）': '7000元/月',
          '工作描述': '1、进行设计图的切片工作，利用css+div编写网页，进行网页布局和排版；2、利用Ajax进行数据的获取，加载图片、信息，负责网站web界面设计以及交互效果实现，对产品开发和设计提出建设性意见。'
        }
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
                    console.log(flag)
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
    );
  }
}

export default Job;
