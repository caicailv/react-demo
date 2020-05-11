import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topic from './Topic';
import Main from './Main';
export default class Irouter extends React.Component {
    render() {
        return <HashRouter>
            <Home>
                <Route path="/main" render={() => {
                    return <Main>
                        <Route path="/main/:value" component={About}></Route>
                    </Main>
                }}></Route>
                <Route path="/topic" component={Topic}></Route>
            </Home>
        </HashRouter>
    }
}