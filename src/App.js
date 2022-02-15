import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  const [inputText, setInputText] = useState('')

  function handleSearch(e) {
    setInputText(e.target.value)
    console.log(e.target.value)
  }

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(inputText))
  console.log(filteredUsers);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => setUsers(users))
  }, [])

  return (
    <div className="App">
      <h1>Search User Profiles</h1>
      <input placeholder='Search a user...' onChange={handleSearch}/>
      {users.map((user) => 
        <div key={user.id} className="card">
          <img src={`https://robohash.org/${user.id}`} alt="John" />
          <h1>{user.name}</h1>
          <p className="title">CEO & Founder, {user.company.name}</p>
          <p>Harvard University</p>
          <a><i className="fa fa-dribbble"></i></a>
          <a><i className="fa fa-twitter"></i></a>
          <a><i className="fa fa-linkedin"></i></a>
          <a><i className="fa fa-facebook"></i></a>
          <p><button>Contact</button></p>
        </div>
      )}
    </div>
  );
}

export default App;
