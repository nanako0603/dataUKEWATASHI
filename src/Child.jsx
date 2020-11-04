import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Input, Button } from 'react-onsenui';

import GrandChild from 'GrandChild.jsx';

export default class Child extends React.Component {
    constructor(props) {
        super(props);
}

render() {
    return (
        <Card>
            <div className="title">Child</div>
            <div className="content"> </div>
                  <div>count={this.props.count}</div>

                  <Button modifier="large" onClick={this.props.valueDown}>Down</Button>
      
                  {/* Appのcountを渡して、propsで参照できるようにする */}
                  <GrandChild count={this.props.count} valueClear={this.props.valueClear}/>
        </Card>
    );
 }
}
