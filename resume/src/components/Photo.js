import React, { Component } from 'react';
import "../style/Photo.css";
import { Button } from 'antd-mobile';

var time = null;
class Photo extends Component {
  constructor (props) {
  	super (props);
  	this.state = {
      data: ['李富贵','王二麻','张狗蛋','孙小明','赵','钱','孙','李','周','吴','郑','王','陈'],
      show: []
  	}
    // this.minHeight = this.minHeight.bind(this,content);
    this.getRandom = this.getRandom.bind(this);
    this.start = this.start.bind(this);
    this.end = this.end.bind(this)
  }

  componentDidMount() {
   var arr = this.state.data.map((item) => {
    return {name: item, flag: 0}
   })
   console.log(arr);
   this.setState({show: arr});
  }

  getRandom() {
    return Math.floor(Math.random() * this.state.show.length);
  }

  start() {
    var that = this;
    time = setInterval(function(){
      var index = that.getRandom();
      var arr = [...that.state.show];
      arr[index] = {name: that.state.data[index], flag: 1};
      that.setState({
        show: arr
      })
      that.state.show[index].flag = 0;
    },50)
  }

  end() {
    clearInterval(time)
  }
  render() {
    let that = this;
    return (
      <div className="photo">
        <div className="button">
          <Button type="primary"  size="small" onClick={this.start}>随机点名</Button>
          <Button type="warning"  size="small" onClick={this.start} style={{marginTop: "0.2rem"}} onClick={this.end}>停止</Button>
        </div>
      	<ul>
          {
            this.state.show.map((item) => {
              return (
                <li key={item.name} className={item.flag ? 'light' : 'normal'}>
                  {item.name}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default Photo;
