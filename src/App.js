import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  const [inputText, setInputText] = useState('')

  // const getUsers = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users', {
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   })
  //   .then((response) => {response.json()})
  //   .then((users) => setUsers(users));
  // }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => setUsers(users))
  }, [])

  return (
    <div className="App">
      <h1>Search User Profiles</h1>
      <input placeholder='Search a user...'/>
      {users.map((user) => 
        <div className="card">
          <img src={`https://robohash.org/${user.id}`} alt="John" />
          <h1>{user.name}</h1>
          <p className="title">CEO & Founder, {user.company.name}</p>
          <p>Harvard University</p>
          <a href="#"><i className="fa fa-dribbble"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-facebook"></i></a>
          <p><button>Contact</button></p>
        </div>
      )}
    </div>
  );
}

export default App;
