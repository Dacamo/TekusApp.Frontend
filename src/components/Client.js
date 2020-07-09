import React from 'react';

const Client = ({ nit, name, email, actions }) => {
  return (
    <tr>
      <td>{nit}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{actions}</td>
    </tr>
  )
};

export default Client;
