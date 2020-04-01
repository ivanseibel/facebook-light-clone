import React from 'react';
import { MdAccountCircle } from 'react-icons/md';

import './styles.css';
import logo from '../../assets/facebook-1.png';

export default function Header() {
  return (
    <div className="main-header-container">
      <img src={logo} alt="logo" />
      <div className="main-profile-container">
        <strong>My profile</strong>
        <MdAccountCircle className="loginIcon" />
      </div>
    </div>
  );
}