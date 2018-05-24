import React, { Component } from 'react';
import "../style/Resume.css";
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';


class Resume extends Component {
  constructor (props) {
  	super (props);
  	this.state = {
      data: [],
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
          data: res.data.data.films,
        });
      })
    },100)
  }

  render() {
    return (
      <div className="resume">
      	<div className="banner">
          <Carousel
            autoplay={true}
            autoplayInterval={1000}
            infinite
          >
            {this.state.data.map((item, index) => (
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
      </div>
    );
  }
}

export default Resume;
