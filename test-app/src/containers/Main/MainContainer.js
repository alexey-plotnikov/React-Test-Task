import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderContainer from '../Header/HeaderContainer';
import UsersContainer from '../Users/UsersContainer';
import DateModalWindow from '../Modal/DateModalWindow'
import NotificationModalWindow from '../Modal/NotificationModalWindow'

class MainContainer extends React.Component {

  // Token for API
  token = 'nQ9iwW2dE6_tWRJsL6Z3F6XhANg8x83kEXLv';

  constructor() {
    super();

    this.state = {
      users: [],
      filteredUsers: [],
      firstName: '',
      lastName: '',
      gender: '',
      lowerAgeLimit: '',
      upperAgeLimit: '',
      dateModalIsOpen: false,
      notificationModalIsOpen: false,
      userId: ''
    };

    this.getYear = this.getYear.bind(this);
  }

  componentDidMount() {
    fetch('https://gorest.co.in/public-api/users?&_format=json&access-token=' + this.token, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(jsonData => {
      this.setState({
        users: jsonData.result,
        filteredUsers: jsonData.result
      });
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  // Set inputs value to state
  handleChange(event) {
    this.setState({ 
      [event.target.name]: event.target.value
    });
  }

  // Filter users
  handleSubmit() {
    const {firstName, lastName, gender, lowerAgeLimit, upperAgeLimit, users} = this.state;
    const filteredUsers = users.filter((user) => {

      const usersAge = this.getYear() - this.getYear(user.dob); 

        if ((firstName.length >= 2 && !((user.first_name.toUpperCase()).includes(firstName.toUpperCase()))) 
        || (lastName.length >= 2 && !((user.last_name.toUpperCase()).includes(lastName.toUpperCase()))) 
        || (gender.length !== 0 && gender !== 'both' && gender !== user.gender) 
        || (lowerAgeLimit.length !== 0 && lowerAgeLimit > usersAge)
        || (upperAgeLimit.length !== 0 && upperAgeLimit < usersAge)) {
          return null;
        }
        return user;

    })
    this.setState({
      filteredUsers: filteredUsers
    })
  }

  // Reset state and inputs value
  handleReset(event) {
    this.setState({ 
      filteredUsers: this.state.users,
      firstName: '',
      lastName: '',
      gender: '',
      lowerAgeLimit: '',
      upperAgeLimit: ''
    });
  }

  // User status for styling
  userStatus(status) {
    if (status === "active") {
      return status
    } else if (status === "inactive") {
      return status
    }
  }

  // Open date modal window
  handleOpenModal(userId) {
    this.setState({
      dateModalIsOpen: true,
      userId: userId
    });
  }

  handleCloseModal() {
    this.setState({
      dateModalIsOpen: false,
      notificationModalIsOpen: false});
  }

  // Invite user on a date and delete this user from state
  handleDeleteUser() {
    const {userId, users} = this.state;

    const filteredUsers = users.filter((user) => user.id !== userId)

    this.setState({
      users: filteredUsers,
      filteredUsers: filteredUsers,
      dateModalIsOpen: false,
      notificationModalIsOpen: true
    })
  }

  getYear(date) {
    let year = '';
    if (typeof date === 'undefined') {
       year = new Date().getFullYear();
    } else {
       year = new Date(date).getFullYear();
    }
    return year;
  }

  render() {

    const {firstName, 
           lastName, 
           gender, 
           lowerAgeLimit, 
           upperAgeLimit, 
           filteredUsers, 
           dateModalIsOpen, 
           notificationModalIsOpen,
           userId} = this.state;

    return (
      <div>
        <HeaderContainer 
                        firstName={firstName}
                        lastName={lastName}
                        gender={gender}
                        lowerAgeLimit={lowerAgeLimit}
                        upperAgeLimit={upperAgeLimit}
                        handleChange={(event) => this.handleChange(event)}
                        handleSubmit={() => this.handleSubmit()}
                        handleReset={() => this.handleReset()}
                        />
        <UsersContainer 
                        filteredUsers={filteredUsers}
                        userStatus={(status) => this.userStatus(status)}
                        handleOpenModal={(id) => this.handleOpenModal(id)}
                        getYear={(date) => this.getYear(date)}
                        />
        <DateModalWindow    
                        isOpen={dateModalIsOpen}
                        userId= {userId}
                        handleDeleteUser={() => this.handleDeleteUser()}
                        handleCloseModal={() => this.handleCloseModal()}
                        />
        <NotificationModalWindow 
                        isOpen={notificationModalIsOpen}
                        handleCloseModal={() => this.handleCloseModal()}
                        />
      </div>
    )
  }

}

export default MainContainer;
