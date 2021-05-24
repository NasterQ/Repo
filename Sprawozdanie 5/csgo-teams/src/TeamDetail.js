import React, {useState, useEffect} from 'react';
import './App.css';
import imgs from './imgs';

function TeamDetail({match}) {

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`http://127.0.0.1:8000/team/${match.params.id}`);
    const item = await fetchItem.json();
    setItem(item);
  };

  return (
    <div>
      <div className="team-detail-top">
        <h2>{item.name}</h2>
        <img src={imgs[item.id-1]} alt="team-photo" className="team-detail-photo"></img>
        <p><strong>Country:</strong> {item.country}</p>
        <p><strong>Coach:</strong> {item.coach}</p>
      </div>
      <div className="team-detail-bottom">
        <h2>Current squad:</h2>
        <div className="player"><h3>{item.p1}</h3></div>
        <div className="player"><h3>{item.p2}</h3></div>
        <div className="player"><h3>{item.p3}</h3></div>
        <div className="player"><h3>{item.p4}</h3></div>
        <div className="player"><h3>{item.p5}</h3></div>
        <div className="clearStyle"></div>
      </div>
    </div>
  );
}

export default TeamDetail;
