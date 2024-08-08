import React from 'react';
import "./sum.css";
import reaction from "../../assets/images/icon-reaction.svg";
import memory from "../../assets/images/icon-memory.svg";
import verbal from "../../assets/images/icon-verbal.svg";
import visual from "../../assets/images/icon-visual.svg";
const sum = () => {
  return (
    <div className="card">
      <h2>Summary</h2>
      
      <ul className="list">
        <li className="summ">
          <div className="image"><img className='logo' src={reaction} alt ="logo" /><h6>Reaction</h6></div>
        <div>
          <p>80/100</p>
        </div>
        </li>


        <li className="summ">
          <div className="image"><img className='logo' src={memory} alt ="logo" />
          <h6>Memory</h6>
          
        </div>
        <div>
        <p>80/100</p>
        </div>
        </li>

        <li className="summ">
          <div className="image"><img className='logo' src={verbal} alt ="logo" /><h6>Verbal</h6></div>

        <div>
        <p>80/100</p>
        </div>
        </li>

        <li className="summ">
          <div className="image"><img className='logo' src={visual} alt ="logo" /><h6>Visual</h6></div>
        <div>
        <p>80/100</p>
        </div>
        </li>


      </ul>

      <button className='btn'>Continue</button>

    </div>
  )
}

export default sum
