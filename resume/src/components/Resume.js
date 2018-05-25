import React, { Component } from 'react';
import "../style/Resume.css";
import { Carousel } from 'antd-mobile';
import axios from 'axios';


class Resume extends Component {
  constructor (props) {
  	super (props);
  	this.state = {
      films: [],
      data: [
        {
          'title': '个人信息',
          '姓名': "李晓瑞",
          '性别': '男',
          '出生日期': '1995-08',
          '参加工作时间': '2015-06',
          '户口所在地': '山西-晋中',
          '现居住城市': '杭州',
          '手机号码': '15257162190',
          '邮箱地址': '13834517044@163.com'
        },
        {
          'title': '求职意向',
          '工作性质': '全职',
          '工作地点': '杭州',
          '期望薪资': '面议',
          '职位类别': 'WEB前端开发',
          '行业类别': '互联网/电子商务',
          '工作状态': '我目前属于离职状态，可立即上岗',
        },
        {
          'title': '教育背景',
          '学校名称': '山西大学',
          '专业名称': '软件工程',
          '学历/学位': '本科',
          '是否统招': '统招',
          '入学时间': '2011-09',
          '毕业时间': '2015-07',
        }
      ],
      imgHeight: 176,
  	}
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
       axios.get("/v4/api/film/now-playing?__t=1518062660575&page=1&count=5")
      .then((res)=>{
        console.log(res);
        this.setState({
          films: res.data.data.films,
        });
      })
    },100)
  }

  getCard() {

  }

  render() {
    console.log(this.state.data[0]["姓名"])
    return (
      <div className="resume">
      	<div className="banner">
          <Carousel
            autoplay={true}
            autoplayInterval={1000}
            infinite
          >
            {this.state.films.map((item, index) => (
              <span
                key={item.id}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight, position: 'relative' }}
              >
                <img
                  src={item.cover.origin}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
                <div className="grade">
                  <p style={{fontSize: '14px', color: '#9a9a9a'}}>{item.watchCount}人购票</p>
                  <p style={{ color: '#F0F62B'}}>评分：{item.grade}</p>
                </div>
              </span>
            ))}
          </Carousel>
        </div>
        <div className="resume-message">
          {
          this.state.data.map((value,index) => {
            return (
              <ul key={index} className="resume-card" >
              <p></p>
                <h1 className="resume-title"><span>{value.title}</span></h1>
                {
                  Object.keys(value).filter((value)=>{return value != 'title'}).map((item,num) => {
                    var flag = false;
                    if(/；/g.test(value[item])){
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
      </div>
    );
  }
}

export default Resume;
