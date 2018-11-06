import React from 'react';

function ViceHistory(props) {
  const vices = props.vices;
  const viceItems = vices.map((vice) =>
    <li key={vice._id}>
      {vice.name} - £{vice.amount}
    </li>
  );
  return (
    <ul>{viceItems}</ul>
  );
}

export default ViceHistory;
