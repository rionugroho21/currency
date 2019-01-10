import React from 'react';

function List(props) {
    const country = props.country;
    const listItems = country.map((index) =>
      <li key={index} data-value={index} onClick={props.onClick}>
        {index}
      </li>
    );
    return (
        <ul className={props.className}>{listItems}</ul>
    )
}

export default List;