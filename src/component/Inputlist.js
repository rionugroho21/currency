import React from 'react';

function Inputlist(props) {
    const country = props.datas;
    const listItems = country.map((index) =>
      <option key={index} value={index} />
    );
    return (
        <datalist id={props.id}>{listItems}</datalist>
    )
}

export default Inputlist;