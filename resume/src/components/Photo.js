import React, { Component } from 'react';
import "../style/Photo.css";
// import {  } from 'antd-mobile';


class Photo extends Component {
  constructor (props) {
  	super (props);
  	this.state = {
      data: ['//thumbnail0.baidupcs.com/thumbnail/1283ae263b618873ef00ff723741b325?fid=2352385247-250528-148670383038822&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-X%2f7Jx5mYQrQBa89xxX7%2bXUVmGmY%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/236d517975fc7455251fe691937a13d9?fid=2352385247-250528-175406154633847&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ke3XzZ0qw1kZ6vy%2bAKX2dHUxAXE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/c88e0eeef3a992b4ed1e9778e415c760?fid=2352385247-250528-590884511563647&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-0gRxLNtmuanER1ZAnaudM0xtwMU%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/6375ce2033d2a5cb7cc84323606f6084?fid=2352385247-250528-774244763623079&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-z1l9VlY%2b5GfVNvfXFDXWiYEA434%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/ea2e375ad46943eaa557d0efd63e9385?fid=2352385247-250528-16268914107099&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-VvgtHv5evwqqFfeW%2fhOxH506joc%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/80d1d3cca923b59011c8514e396a7976?fid=2352385247-250528-1026153134629348&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-dxwvfK4b8ovZeUhPXqveJM73dm4%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/141b76c41aad417ff7bf7e52cde15ad5?fid=2352385247-250528-522593539179916&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-GniuVIKa%2b%2fDscPjYMkntP1mDd5I%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/9c1d58b4753f79239613462a0a3bcc63?fid=2352385247-250528-183540829634962&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-MVsxmS3nabCpVCmK3pPvGhz67ug%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/a41d8ba28f1f2ff68385af23e833b368?fid=2352385247-250528-1037305204833690&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-BWKqAQxF1incFi2GnGdZoWY%2fI0E%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/7f8640262ed75ea8f34c937e07fbcfc4?fid=2352385247-250528-84249212996276&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-wF88YZBKv8LxI6HApYjfKrdLHh8%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/230cd4b9e58ebf9f9aa084f799499c12?fid=2352385247-250528-886399749857232&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-z%2b%2fcMNOwMu%2bF8AIeIy4u9GoqBUU%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/0498efd6b6501d47e14d65e4b7963dd9?fid=2352385247-250528-637054984349182&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-t%2brzFDvv20khRoaZEn58h5BvvTM%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/da8b1361d6f61ba4ed186d8add986874?fid=2352385247-250528-336925614752903&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-LcuNcVI32S6bEdtYRckzbK30cPQ%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/b7071cda4bfd664c1fb1bdbd53f044ff?fid=2352385247-250528-50087503354804&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-t8bqau5a3iKmCWhTxmsfWXMKn3U%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/e328f85fb8bda231425bfe9282f609e8?fid=2352385247-250528-476522917221614&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-6deIUUG7uEytTIb3E7vbLYmLrm8%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/a281eac1c87be4f0f3be8a8dd487d052?fid=2352385247-250528-70323327280910&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-NZjbmlVG2kmnTFd57IMr06Qf6nE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/4835f2af2df16d8527c9573f65623339?fid=2352385247-250528-1031918420413751&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-MXT9HlplyfGXj%2ftoSIfaGC1X%2bZg%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/6e8a9d3331a9363f9d99de834b622b57?fid=2352385247-250528-68434205020495&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-7jkIlvoaqJ%2bm42XaiYkdkEsofpI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/759ec937dea3dc15df65de711845320b?fid=2352385247-250528-176729512273238&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-fu14PdHLDbWLKQ8AmYuYcGzD8Y4%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/347c61fde256100323eec735413098cf?fid=2352385247-250528-334307017789537&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-bmatOmaJYfJaVJJ%2b2mcOU62m4ew%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/f7cafc44c131ebfa438ad47ff1237255?fid=2352385247-250528-590288064366808&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-RUGbhbzLE86TrLx6NgMPorVxunw%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image',
      '//thumbnail0.baidupcs.com/thumbnail/4af9ad7988ff093207d32fa063e5cdea?fid=2352385247-250528-486389872048849&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-0112%2f2iPQr77OpsShxhzWTRXx7o%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3337883709140840262&dp-callid=0&time=1527170400&size=c850_u580&quality=100&vuk=2352385247&ft=image'
      ],
      data1: [],
      data2: [],
      data3: []
  	}
    // this.minHeight = this.minHeight.bind(this,content);
    // this.loadIngImg = this.loadIngImg.bind(this);
  }

  componentDidMount() {
   
  }

  // minHeight(content1,content2,content3) {
  //   let height1 = content1.offsetHeight;
  //   let height2 = content2.offsetHeight;
  //   let height3 = content3.offsetHeight;
  //   let min = Math.min(height1,height2,height3);
  //   let index = 0;
  //   for(let i = 0;i < uls.length;i ++){
  //     if(uls[i].offsetHeight < min){
  //       min = uls[i].offsetHeight;
  //       index = i;
  //     }
  //   }
  //   return index;
  // }

  // loadIngImg() {
  //   for(let i = 1;this.state.data.length;i ++){
  //     let oLi = document.createElement("li");
  //     let oImg = document.createElement("img");
  //     oImg.src = "images/" + i + ".jpg";
  //     oImg.title = i;
  //     oLi.appendChild(oImg);
  //     oUl[minHeight(oUl)].appendChild(oLi);
  //   }
  // }
  // componentDidMount() {
  //   let that = this;
  //   let arr1 = [];
  //   let arr2 = [];
  //   let arr3 = [];
  //   let height1 = this.content1.offsetHeight;
  //   let height2 = this.content2.offsetHeight;
  //   let height3 = this.content3.offsetHeight;
  //   this.state.data.forEach( function(item, index) {
  //     if(height1 <= height2 && height1 <= height3) {
  //       arr1.push(item);
  //       that.setState({
  //         data1: arr1
  //       })
  //       return;
  //     };
  //     if(height2 <= height1 && height2 <= height3) {
  //       arr2.push(item);
  //       that.setState({
  //         data2: arr2
  //       })
  //       return;
  //     };
  //     if(height3 <= height1 && height3 <= height2) {
  //       arr3.push(item);
  //       that.setState({
  //         data3: arr3
  //       })
  //       return;
  //     };
  //   });
  // }
  render() {
    console.log("dajk")
    return (
      <div className="photo">
      	<ul>
          {
            this.state.data.map((item) => {
              return (
                <li key={item}>
                  <img src={item} />
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
