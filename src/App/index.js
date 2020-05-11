import React from 'react'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd'
import './index.less'
import NavLeft from '../components/NavLeft'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content';
export default class App extends React.Component {
    render() {
        return <Row className="container">
            <Col span="3" className="nav-left">
                <NavLeft></NavLeft>
            </Col>
            <Col span="21" className="main">
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </Col>
        </Row> 
    }
}