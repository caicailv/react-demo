import React from 'react';

export default class Demo extends React.Component {
    componentWillMount(){
        console.log('componentWillMount');
        
    }
    componentDidMount(){
        
    }
    componentWillReceiveProps(e){
        console.log('componentWillReceiveProps',e);
        
    }
    render() {
        return (
            <div>
                <p>
                    children:
                 </p>
            </div>
        )
    }
}