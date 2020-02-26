import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import UsersContainer from '../Users/UsersContainer';
import './Header.css';



class HeaderContainer extends React.Component {
  usersContainer = new UsersContainer();

  render() {
    const {firstName, lastName, gender, lowerAgeLimit, upperAgeLimit,
       handleChange, handleSubmit, handleReset} = this.props;

    return (
      <Container className='header-container-wrapper'>

        <Row>

          <Col className='header-col-wrapper' xs='4'>
          <h5> User name:</h5>
          <input  
              name='firstName'
              value={firstName}
              onChange={(event) => handleChange(event)}
              placeholder='first name'
            />
            <input  
              name='lastName'
              value={lastName}
              onChange={(event) => handleChange(event)}
              placeholder='last name'
            />
          </Col>

          <Col className='header-col-wrapper' xs='4'>
          <h5>Desired age:</h5>
          <input 
              name='lowerAgeLimit'
              value={lowerAgeLimit}
              onChange={(event) => handleChange(event)}
              placeholder='lower age limit'
            />
            <input  
              name='upperAgeLimit'
              value={upperAgeLimit}
              onChange={(event) => handleChange(event)}
              placeholder='upper age limit'
            />
          </Col>

          <Col className='header-col-wrapper' xs='2'>
          <h5>Gender: </h5> 
          <select name='gender' value={gender} onChange={(event) => handleChange(event)}>
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="both">Both</option>
            </select>
          </Col>

          <Col className='header-col-wrapper button-wrapper' xs='2'>
            <Button className='confirm-button' variant="secondary" onClick={handleSubmit}>Confirm</Button>
            <Button className='reset-button' variant="secondary" onClick={handleReset}>Reset</Button>
          </Col>

        </Row>
      
      </Container>
    
    );
  }
}

export default HeaderContainer;