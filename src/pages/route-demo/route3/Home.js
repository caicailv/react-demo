import React from 'react';
import { HashRouter, Link } from 'react-router-dom'
// import About from './About'
// import Topic from './Topic'

export default class Home extends React.Component {
    render() {
        return <HashRouter>
            <ul>
                <li>
                    <Link to="/main">main</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/topic">topic</Link>
                </li>
                <hr></hr>
                {this.props.children}
            </ul>
        </HashRouter>
    }
}