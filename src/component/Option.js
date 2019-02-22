import React from 'react';

function Option(props) {
    const country = props.datas;
    const listItems = country.map((index) =>
      <option key={index} data-value={index} value={index}>
        {index}
      </option>
    );
    return (
      <select className={props.className} name={props.name} value={props.value} onChange={props.onChange}>{listItems}</select>
    )
}

export default Option;