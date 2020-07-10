import React from 'react';

const Service = ({ name, hourValue, contries, actions }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{hourValue}</td>
      <td>{contries}</td>
      <td>{actions}</td>
    </tr>
  )
};

export default Service;
