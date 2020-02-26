import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


class NotificationModalWindow extends React.Component {

  render() {
    const {isOpen, handleCloseModal} = this.props;

     return (
      <Modal show={isOpen} onHide={handleCloseModal}>

        <Modal.Header closeButton>
            <Modal.Title>Notification</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            Invitation sent
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
        
      </Modal>
    )
  }
}

export default NotificationModalWindow;