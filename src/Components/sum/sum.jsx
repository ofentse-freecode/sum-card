import React from 'react';
import "./sum.css";
import reaction from "../../assets/images/icon-reaction.svg";

const sum = () => {
  return (
    <div className="card">
      <h2>Summary</h2>
      
      <ul className="list">
        <li className="summ">
          <div><img className='logo' src={reaction} alt ="logo" /><h6>name</h6></div>
        <div>
          <h6>80</h6>
          <h6>/100</h6>
        </div>
        </li>


        <li className="summ">
          <div><img className='logo' src={reaction} alt ="logo" /><h6>name</h6></div>
        <div>
          <h6>80</h6>
          <h6>/100</h6>
        </div>
        </li>

        <li className="summ">
          <div><img className='logo' src={reaction} alt ="logo" /><h6>name</h6></div>
        <div>
          <h6>80</h6>
          <h6>/100</h6>
        </div>
        </li>

        <li className="summ">
          <div><img className='logo' src={reaction} alt ="logo" /><h6>name</h6></div>
        <div>
          <h6>80</h6>
          <h6>/100</h6>
        </div>
        </li>


      </ul>

      <button className='btn'>Continue</button>

    </div>
  )
}

export default sum
