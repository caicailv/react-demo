import React, { Component } from 'react'
import { Menu } from 'antd';
import { HashRouter, Link } from 'react-router-dom'
import menuList from '../../resource/menuConfig'
import './index.less'
import { from } from 'rxjs';

const { SubMenu } = Menu;
export default class NavLeft extends Component {
    componentWillMount() {
        const menuTree = this.renderMenuList(menuList);
        this.setState({
            menuTree
        })
    }
    renderMenuList = data => {
        return data.map(item => {
            if (item.children) {
                return <SubMenu title={item.title} key={item.key}>
                    {this.renderMenuList(item.children)}
                </SubMenu>
            }

            return (
                <Menu.Item key={item.key}>
                    <Link to={item.key}>
                        {item.title}
                    </Link>
                </Menu.Item>
            )
        })
    }
    render() {
        return (
            <div>
                <HashRouter>
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="vertical"
                        theme="dark"
                    >
                        {this.state.menuTree}
                    </Menu>
                </HashRouter>

            </div>
        );
    }
}
