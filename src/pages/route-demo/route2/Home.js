import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import About from './About'
import Topic from './Topic'

export default class Index extends React.Component {
    render() {
        return <HashRouter>
            <div>
                <div>
                    <div>
                        <Link to="/about">about</Link>
                    </div>
                    <div>
                        <Link to="/topic">topic</Link>

                    </div>
                </div>
                <div>
                    <Switch>
          
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route path="/" render={()=>{
                            return <div>da</div>
                        }}></Route>
                    </Switch>

                </div>

            </div>
        </HashRouter>
    }
}