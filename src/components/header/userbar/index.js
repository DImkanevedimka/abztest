import React from 'react';
import chat from './img/Chat.svg';
import notification from './img/Notifications.svg';
import user from './img/user.png';
import './styles.css';

const UserBar = () => (
  <div className="user__inner">
    <div className="user__notification">
      <a href="/">
        <img src={chat} alt="chat" />
      </a>
      <a href="/">
        <img src={notification} alt="notification" />
      </a>
    </div>
    <div className="user__info">
      <div className="user__img">
        <img src={user} alt="user" />
      </div>
      <div>Maximillian Beekeeper</div>
    </div>
  </div>
);

export { UserBar };
