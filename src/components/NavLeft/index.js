import React, { Component } from 'react'
import { Menu } from 'antd';
import menuList from '../../resource/menuConfig'
import './index.less'

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
                    { this.renderMenuList(item.children) }
                </SubMenu>
            }

            return (
                <Menu.Item key={item.key}>
                    {item.title}
                </Menu.Item>
            )
        })
    }
    render() {
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="vertical"
                    theme="dark"
                >
                    {this.state.menuTree}
                </Menu>
            </div>
        );
    }
}
