import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Input, Button } from 'react-onsenui';

export default class Child extends React.Component {
    constructor(props) {
        super(props);
}

render() {
    return (
        <Card>
            <div className="title">GrandChild</div>
            <div className="content"> </div>
                  <div>count={this.props.count}</div>
                  
                  <Button modifier="large" onClick={this.props.valueClear}>Clear</Button>
                 
        </Card>
    );
 }
}
