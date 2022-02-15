import React, { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/CardList/card-list.component';
import SearchBar from './components/SearchBar/search-bar.component';

function App() {
  const [users, setUsers] = useState([])
  const [inputText, setInputText] = useState('')

  function handleSearch(e) {
    setInputText(e.target.value)
  }

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(inputText))

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => setUsers(users))
  }, [])

  return (
    <div className="App">
      <h1>Search User Profiles</h1>
      <SearchBar placeholder='Search a user...' handleSearch={handleSearch}/>
      <CardList users={filteredUsers}/>
    </div>
  );
}

export default App;
