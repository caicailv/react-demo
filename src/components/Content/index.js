import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import './index.less'
import Home from '../../pages/Home'
import Index from '../../pages/Index'
import Shop from '../../pages/Shop'
export default class Content extends Component {
    render() {
        return <div className='content'>
            <HashRouter>
                <div>
                    <Route path="/home" component={Home}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/index" component={Index}></Route>
                    <Route path="/shop" component={Shop}></Route>
                </div>
            </HashRouter>
        </div>
    }
}