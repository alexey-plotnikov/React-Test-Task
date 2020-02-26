import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./Users.css"

class UsersContainer extends React.Component {

  render() {
    const {filteredUsers, userStatus, handleOpenModal, getYear} = this.props;

     return (
        
        <Container className='user-container-wrapper'>
        <h5 className='user-list-title'> List of users: </h5>
        <ul className='user-list'>
          {filteredUsers.map(({ id, first_name, last_name, gender, dob, status }) => (
            
            <li 
            onClick={() => {handleOpenModal(id)}}
            className={userStatus(status)} 
            key={id}>
              
                
                <Row className='user-row-wrapper'>
                  
                  <Col className='user-col-wrapper' xs='2'>
                   # {id}
                  </Col>
                  
                  <Col className='user-col-wrapper' xs='4'>
                   {first_name} {last_name}
                  </Col>
                  
                  <Col className='user-col-wrapper' xs='3'>
                  {getYear() - getYear(dob)} year old
                  </Col>
                  
                  <Col className='user-col-wrapper' xs='3'>
                  {gender}
                  </Col>
 
                
                </Row>
              
            </li>
            
          ))
          }
        </ul>
        </Container>
    )
  }
}

export default UsersContainer;