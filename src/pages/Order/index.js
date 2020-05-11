import React from 'react';
import { Select, DatePicker } from 'antd'
import moment from 'moment'
import './index.less';
export default class Order extends React.Component {
    state = {
        activeCity: 0,
        orderStatus: 0,
        orderStatusList: [
            {
                id: 0,
                title: '全部'
            },
            {
                id: 1,
                title: '已送达',
            },
            {
                id: 2,
                title: '未送达',
            },
            {
                id: 3,
                title: '未付款',
            },

        ],
        cityList: [
            {
                id: 0,
                title: '全部'
            },
            {
                id: 1,
                title: '沈阳',
            },
            {
                id: 2,
                title: '营口',
            },
            {
                id: 3,
                title: '大连',
            },
        ]
    }
    cityChange = cityid => {
        this.setState({
            activeCity: cityid
        })
    }
    dateChange = value => {
        let [startTime, endTime] = [moment(value[0]).format('YYYY-MM-DD'), moment(value[1]).format('YYYY-MM-DD'),]
        console.log(startTime, endTime);

    }
    orderStatusChange = orderstatusid => {
        this.setState({
            orderStatus: orderstatusid
        })
    }
    render() {
        return <div className="win">
            <div className="header">
                <div className="select">
                    <p>城市:</p>
                    <Select onChange={this.cityChange} defaultValue="全部">
                        {
                            this.state.cityList.map(el => {
                                return <Select.Option key={el.id} value={el.id}>{el.title}</Select.Option>
                            })
                        }
                    </Select>
                </div>
                <div className="date">
                    <DatePicker.RangePicker placeholder={['开始时间', '结束时间']} onChange={this.dateChange} />
                </div>
                <div className="order-status">
                    <p>订单状态:</p>
                    <Select onChange={this.orderStatusChange} defaultValue="全部">
                        {
                            this.state.orderStatusList.map(el => {
                                return <Select.Option key={el.id} value={el.id}>{el.title}</Select.Option>
                            })
                        }
                    </Select>

                </div>
            </div>
        </div>

    }
}