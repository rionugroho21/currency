import React, {Component} from 'react';


export class Label extends Component {
    render() {
        return <label className={this.props.className}>{this.props.label}</label>
    }
}

export default Label;