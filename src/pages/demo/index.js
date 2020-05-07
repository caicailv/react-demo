import React from 'react';
import Children from './children';
import { Button } from 'antd';

import './index.less';
export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        }
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        let style = {
            color: 'green',
            padding: 10
        }

        return (
            <div style={style}>
                <Button onClick={this.handleClick}>点我加一</Button>
                <p>
                    {this.state.count}
                </p>
                <Children name="jack"></Children>
            </div>
        )
    }
}