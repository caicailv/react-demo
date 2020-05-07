import React, { Component } from 'react'
import axios from '../../axios' 
import Util from '../../utils/utils'
import './index.less'
export default class Header extends Component {
    state = {
        userName:'',
        sysTime:'',
        dayPictureUrl:'',
        weather:''

    }
    componentWillMount() {
        this.setState({
            userName: '菜菜驴',
        })

        setInterval(()=>{
            let sysTime = Util.forMateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        })
        this.getWaterApiData();
    }
    getWaterApiData(){
        let city = '沈阳'
        axios.jsonp({
            url:`http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        }).then(res=>{
             console.log(res);
            let data = res.results[0].weather_data[0];
            this.setState({
                dayPictureUrl:data.dayPictureUrl,
                weather:data.weather
            })
        })
    }    
    render() {
        return <div className='header'>
            <div className="top">
                <div className="user-nmae">欢迎,{this.state.userName}</div>
                <div className="back">退出</div>
            </div>
            <div className="bot">
                <div className="left">首页</div>
                <div className="right">
                    <span>{this.state.sysTime}</span>
                    <img src={this.state.dayPictureUrl} alt=""/>
                    <span>{this.state.weather}</span>
                </div>
            </div>
        </div>
    }
}