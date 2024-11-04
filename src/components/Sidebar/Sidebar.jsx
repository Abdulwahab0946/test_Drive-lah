import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = ({ isVisible, onClose }) => {
  const location = useLocation();
  const menuItems = [
    { name: 'Location', path: '/location', completed: true },
    { name: 'About', path: '/about', completed: true },
    { name: 'Features', path: '/features', completed: true },
    { name: 'Rules', path: '/rules', completed: true },
    { name: 'Pricing', path: '/pricing', completed: true },
    { name: 'Promotion', path: '/promotion', completed: true },
    { name: 'Pictures', path: '/pictures', completed: true },
    { name: 'Insurance', path: '/insurance', completed: true },
    { name: 'Subscription', path: '/subscription', completed: false },
    { name: 'Device', path: '/device', completed: false },
    { name: 'Easy Access', path: '/easy-access', completed: false },
  ];

  return (
    <aside className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="close-button" onClick={onClose}>×</div>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${location.pathname === item.path ? 'active' : ''} ${item.completed ? 'completed' : ''}`}
          >
            <Link to={item.path} className="item-text">
              {item.name}
            </Link>
            {item.completed && <span className="checkmark-circle">&#10003;</span>}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
