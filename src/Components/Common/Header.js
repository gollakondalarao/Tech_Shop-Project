import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
// import { CommonContext } from '../context/CommonContext';
// import { CartContext } from '../context/CartContext';

const Header = () => {
    const { toggleSearch, toggleForm, formuserinfo } = useContext();
    const { cartitems } = useContext();
    const [header, setHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => setHeader(window.scrollY >= 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={header ? 'header active' : 'header'}>
            <div className="container">
                <div className="navbar">
                    <h2 className="nav_logo">
                        <Link to="/">Tech-shop</Link>
                    </h2>
                    <nav className="nav_actions">
                        <div className="search_actions" onClick={() => toggleSearch(true)}>
                            <AiOutlineSearch />
                        </div>
                        <div className="user_profile">
                            {!formuserinfo ? (
                                <button onClick={() => toggleForm(true)}>Login / Signup</button>
                            ) : (
                                <p>Welcome, {formuserinfo}</p>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
