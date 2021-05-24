import React, {useState, useEffect} from 'react'
import './App.css';
import {Link} from 'react-router-dom';
import imgs from './imgs'

function Teams() {
  
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('http://127.0.0.1:8000/teams/');
    
    const items = await data.json();

    setItems(items);

  };

  return (
    <div className="team">
      {items.map(item => (
        <div className="entry" key={item.id}>
        <div className="photo-prev"><img src={imgs[item.id-1]} alt="team-photo" className="preview"></img></div>
        <h2 className="team-desc">
          <Link to={`/team/${item.id}`}>{item.name}</Link>
        </h2>
        <div className="clearStyle"></div>
        </div>
      ))}
    </div>
  );
}

export default Teams;

