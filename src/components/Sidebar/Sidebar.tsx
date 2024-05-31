import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar: React.FC = React.memo(() => {
    return (
        <aside>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active_link" : "")}>Все темы</NavLink>
            <NavLink to="/Логика_и_мышление" className={({ isActive }) => (isActive ? "active_link" : "")}>Логика и мышление</NavLink>
            <NavLink to="/Загадки" className={({ isActive }) => (isActive ? "active_link" : "")}>Загадки</NavLink>
            <NavLink to="/Головоломки" className={({ isActive }) => (isActive ? "active_link" : "")}>Головоломки</NavLink>
            <NavLink to="/Путешествия" className={({ isActive }) => (isActive ? "active_link" : "")}>Путешествия</NavLink>
        </aside>
    );
});

export default Sidebar;