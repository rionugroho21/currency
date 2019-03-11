import React, { Component } from 'react';
import Label from './Label';
import Input from './Input';
import Button from './Button';
import Option from './Option';
import Inputlist from './Inputlist';
import {connect} from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputAmount: '',
            inputFrom: '',
            inputTo: '',
            result: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange({target}) {
        this.setState({
          [target.name]: target.value
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({result: nextProps.money})
    }
    
    handleClick() {
        const inputAmount = Number(this.state.inputAmount);
        const inputFrom = this.state.inputFrom.toUpperCase();
        const inputTo = this.state.inputTo.toUpperCase();
        this.props.startConvert(inputAmount, inputFrom, inputTo);
    }
    
    componentDidMount(){
        this.props.startLoadingRates();
    }
    
    render() {
        return (
          <div className="wrap">
            <div className="wrap-input clearfix">
              <div className="box">
                <Label className="label" label={'Amount'}/>
                <Input className="input" type="number" placeholder={'10'} name={'inputAmount'} value={this.state.inputAmount} onChange={this.handleChange}/>
              </div>
              <div className="box">
                <Label className="label" label={'From'}/>
                <Input className="input" type="text" list="country" placeholder={'USD'} name={'inputFrom'} value={this.state.inputFrom} onChange={this.handleChange}/>
                <Inputlist id="country" {...this.props}/>
              </div>
              <div className="box">
                <Label className="label" label={'To'}/>
                <Option className="option-country" name="inputTo" value={this.state.inputTo} onChange={this.handleChange} {...this.props} />
              </div>
              <Button className="btn-convert" value={'Convert'} onClick={this.handleClick}/>
            </div>
            <div className="">
              <h1 className="resultConvert" name="resultConvert">{this.state.result}</h1>
            </div>
            <p className="note">Example = Amount : 1, From : USD or IDR etc, To : IDR or USD etc</p>
          </div>
        );
    }
}

const mapsStateToProps = (state) => ({
    datas2: state.money
});

export default connect(mapsStateToProps)(Main);