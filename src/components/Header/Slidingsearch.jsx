import React from 'react';
import './Slidingsearch.css';
import { assets } from '../../assets/assets';

const SlidingSearch = ({ isOpen, onClose }) => {
  return (
    <div className={`sliding-search ${isOpen ? 'open' : ''}`}>
      <div className="search-content">
        <button className="close-btn-search" onClick={onClose}><img src={assets.arrow} alt="" /></button>
       
        <input className='middle' type="text" placeholder="Search" />
        
      </div>
    </div>
  );
};

export default SlidingSearch;
