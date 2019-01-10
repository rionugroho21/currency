import React, { Component } from 'react';
import Label from './component/Label';
import Input from './component/Input';
import Button from './component/Button';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAmount: '',
      inputFrom: '',
      inputTo: '',
      resultConvert: '',
      ajaxResult: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}) {
    this.setState({
      [target.name]: target.value
    });
  }

  startConvert(inputAmount, inputFrom, inputTo){
    axios.get(`https://api.exchangeratesapi.io/latest?base=${inputFrom}&symbols=${inputTo}`)
    .then(res => {
      const ajaxResult = res.data;
      let rates = '';
      this.setState({ ajaxResult });
      for(rates in ajaxResult.rates) {
        this.setState({resultConvert:ajaxResult.rates[rates] * inputAmount});
      }
    });
  }

  handleClick() {
    const inputAmount = Number(this.state.inputAmount);
    const inputFrom = this.state.inputFrom;
    const inputTo = this.state.inputTo;
    this.startConvert(inputAmount, inputFrom, inputTo);
  }

  render() {
    return (
      <div className="wrap">
        <div className="wrap-input clearfix">
          <div className="box">
            <Label className="label" label={'Amount'}/>
            <Input className="input" type="text" name={'inputAmount'} value={this.state.inputAmount} onChange={this.handleChange}/>
          </div>
          <div className="box">
            <Label className="label" label={'From'}/>
            <Input className="input" type="text" name={'inputFrom'} value={this.state.inputFrom} onChange={this.handleChange}/>
          </div>
          <div className="box">
            <Label className="label" label={'To'}/>
            <Input className="input" type="text" name={'inputTo'} value={this.state.inputTo} onChange={this.handleChange}/>
          </div>
          <Button className="btn-convert" value={'Convert'} onClick = {this.handleClick}/>
        </div>
        <div className="">
          <h1 className="resultConvert" name="resultConvert">{this.state.resultConvert}</h1>
        </div>
      </div>
    );
  }
}

export default App;
