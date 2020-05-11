import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './index.less'
import Home from '../../pages/Home'
import Order from '../../pages/Order'
import Index from '../../pages/Index'
import Shop from '../../pages/Shop'
import ShopDetail from '../../pages/ShopDetail'
import NoPage from '../../pages/NoPage'
export default class Content extends Component {
    render() {
        return <div className='content'>
            <HashRouter>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/shop" render={() => {
                        return <Shop>
                                <Route path="/shop/detail" component={ShopDetail}></Route>
                            </Shop>
                    }}></Route>
                    <Route path="/index" component={Index}></Route>
                    <Route path="/order" component={Order}></Route>
                    
                    <Route component={NoPage}></Route>
                </Switch>

            </HashRouter>
        </div>
    }
}