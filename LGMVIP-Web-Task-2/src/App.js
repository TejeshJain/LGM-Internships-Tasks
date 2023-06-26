import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const[Flag,setFlag]= useState(false)
  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setFlag(!Flag);
      setUsers(response.data.data);
     
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);


  
  return (
    <div>
      <nav className="navbar">
        {/* <span className="brand-name" style={{marginRight:"12px", fontWeight:"bold"}}>Tejesh Jain</span> */}
        <button className="get-users" onClick={getUsers} disabled={loading} style={{padding:"12px", borderRadius:"4px", marginTop:"50px"}}>
          Get Users
        </button>
      </nav>
      {Flag===true ? (<div className="user-card" style={{display:"flex",flexWrap:"wrap", marginTop:"100px"}}>
        {loading ? (
          <div className="loader"><h1>Loading...</h1></div>
        ) : (
           users.map(user => <UserCard key={user.id} user={user} />)
        )}
      </div>):""}

    </div>
    
  );
}

export default App;
