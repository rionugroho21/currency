import React, { Component } from 'react';
import Label from './component/Label';
import Input from './component/Input';
import Button from './component/Button';
import List from './component/List';
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
      country: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputClick = this.inputClick.bind(this);
    this.listClick = this.listClick.bind(this);
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
      for(rates in ajaxResult.rates) {
        this.setState({
          resultConvert: ajaxResult.rates[rates] * inputAmount
        });
      }
    });
  }

  handleClick() {
    const inputAmount = Number(this.state.inputAmount);
    const inputFrom = this.state.inputFrom.toUpperCase();
    const inputTo = this.state.inputTo.toUpperCase();
    this.startConvert(inputAmount, inputFrom, inputTo);
  }

  componentDidMount(){
    axios.get(`https://api.exchangeratesapi.io/latest?`)
    .then(res => {
      const country = res.data;
      let rates = '';
      for(rates in country.rates) {
        this.setState({country: this.state.country.concat(rates)});
      }
    });
  }

  inputClick() {
    
  }

  listClick(e) {
    e.target.dataset.value = this.state.inputFrom;
    e.target.elements.inputFrom.value = e.target.dataset.value;
    console.log(this.state.inputFrom);
  }

  render() {
    return (
      <div className="wrap">
        <div className="wrap-input clearfix">
          <div className="box">
            <Label className="label" label={'Amount'}/>
            <Input className="input" type="number" name={'inputAmount'} value={this.state.inputAmount} onChange={this.handleChange}/>
          </div>
          <div className="box">
            <Label className="label" label={'From'}/>
            <Input className="input" type="text" name={'inputFrom'} value={this.state.inputFrom} onChange={this.handleChange} onClick={this.inputClick}/>
            <List className="list-country" country={this.state.country} onClick={this.listClick}/>
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
