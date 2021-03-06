import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topic from './Topic';
export default class Irouter extends React.Component {
    render() {
    return    <HashRouter>
            <Home>
                <Route exact     path="/" render={()=>{
                    return <div>home</div>
                }}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/topic" component={Topic}></Route>
            </Home>
        </HashRouter>
    }
}