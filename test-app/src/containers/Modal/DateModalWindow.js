import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


class DateModalWindow extends React.Component {

  render() {
    const {isOpen, userId, handleDeleteUser, handleCloseModal} = this.props;

     return (
      <Modal show={isOpen} onHide={handleCloseModal}>

        <Modal.Header closeButton>
          <Modal.Title>Date Confirmation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to date user with ID - {userId}?
        </Modal.Body>

        <Modal.Footer>
        <Button onClick={handleDeleteUser}>
            OK
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
        
      </Modal>
    )
  }
}

export default DateModalWindow;