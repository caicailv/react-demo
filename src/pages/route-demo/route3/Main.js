import React from 'react';
import { HashRouter, Link } from 'react-router-dom'
// import About from './About'
// import Topic from './Topic'

export default class Main extends React.Component {
    render() {
        return <HashRouter>

            <div>
                <hr></hr>
                <Link to="/main/tes">main/a</Link>
                {this.props.children}
            </div>
        </HashRouter>
    }
}