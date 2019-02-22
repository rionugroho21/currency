import axios from 'axios';

export function startLoadingRates(){
    return (dispatch) => {
        return axios.get('https://api.exchangeratesapi.io/latest?')
        .then(res => {
            const country = res.data;
            let rates = '';
            let list = [];
            for(rates in country.rates) {
                list = list.concat(rates);
            }
            dispatch(loadRates(list));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function loadRates(datas) {
    return {
        type: 'LOAD_RATES',
        datas
    }
}

export function startConvert(inputAmount, inputFrom, inputTo){
    return (dispatch) => {
        return axios.get(`https://api.exchangeratesapi.io/latest?base=${inputFrom}&symbols=${inputTo}`)
        .then(res => {
            const ajaxResult = res.data;
            let rates = '';
            let resultConvert= '';
            for(rates in ajaxResult.rates) {
                resultConvert = ajaxResult.rates[rates] * inputAmount;
            }
            dispatch(loadMoney(resultConvert));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function loadMoney(resultConvert) {
    return {
        type: 'LOAD_MONEY',
        resultConvert
    }
}