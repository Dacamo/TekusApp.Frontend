import React from 'react';

const ServiceCountry = ({ name, actions }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{actions}</td>
    </tr>
  )
};

export default ServiceCountry;
