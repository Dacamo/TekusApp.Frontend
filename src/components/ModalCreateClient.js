import React from 'react';
import Modal from './Modal';
import CreateClientContainer from '../containers/CreateClientContainer';

const getHeader = () => {
  return (
    <h5 className="modal-title" id="exampleModalLabel">Nuevo Cliente</h5>
  );
}

const getFooter = () => {
  return (
    <>
      <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">Cancelar</button>
    </>
  );
}

const ModalCreateClient = ({ id }) => {
  return (
    <Modal id={id} header={getHeader()} footer={getFooter()}>
      <div>
        <CreateClientContainer/>
      </div>
    </Modal>
  )
}

export default ModalCreateClient;
