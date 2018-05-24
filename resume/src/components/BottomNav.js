import React, {Component} from 'react';
import "../style/Bottom.css";
import "../iconfont/iconfont.css";
import {NavLink} from 'react-router-dom'

class BottomNav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="bottom-nav">
		        <NavLink className="option" activeStyle={{fontWeight: 'bold', color: '#fff'}} to="/resume"><li><i className="iconfont icon-form"></i><span>简介</span></li></NavLink>
		        <NavLink className="option" activeStyle={{fontWeight: 'bold', color: '#fff'}} to="/job"><li><i className="iconfont icon-qrcode"></i><span>工作</span></li></NavLink>
		        <NavLink className="option" activeStyle={{fontWeight: 'bold', color: '#fff'}} to="/project"><li><i className="iconfont icon-box"></i><span>项目</span></li></NavLink>
		        <NavLink className="option" activeStyle={{fontWeight: 'bold', color: '#fff'}} to="/photo"><li><i className="iconfont icon-pic"></i><span>相册</span></li></NavLink>
		      </ul>
		)
	}
}

export default BottomNav;