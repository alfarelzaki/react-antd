import React from 'react';
import { Tooltip, Button } from 'antd';
import {
  SmileTwoTone,
  FrownTwoTone,
} from '@ant-design/icons';

class Counter extends React.Component {
    state = {
        count: 0,
    }

    handleLike = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    handleDislike = () => {
        this.setState({
            count: this.state.count - 1,
        })
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                margin: '25px 0px'
            }}>
                <FrownTwoTone style={{fontSize: '32px'}} twoToneColor="#eb2f96" onClick={this.handleDislike}/>
                <Tooltip placement="topLeft" title="Banyak like - dislike" arrowPointAtCenter>
                    <Button style={{margin: '5px 15px', width: '100px'}}>{this.state.count}</Button>
                </Tooltip>
                <SmileTwoTone style={{fontSize: '32px'}} twoToneColor="#52c41a" onClick={this.handleLike}/>
            </div>
        )
    }
}

export default Counter