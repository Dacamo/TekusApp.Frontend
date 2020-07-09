import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
    render() {
        return (
            ReactDOM.createPortal(
                <div className="modal fade" id={this.props.id} tabIndex= "-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            {this.props.header}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            {this.props.footer}
                        </div>
                        </div>
                    </div>
                </div>,
                document.querySelector('#modal')
            )
        );        
    }
}

export default Modal;
