import React from 'react';
import styles from './navbar.module.css';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <div>
            <div className={styles.navbar}>
                <h1><span className={styles.textPrimary}><i className="fas fa-guitar " ></i>play</span>well</h1>
                <nav>
                    <ul>
                        <li><Link to='/' className={styles.link}>Home</Link></li>
                        <li><Link to='/promoções' className={styles.link}>Sales</Link></li>
                        <li><Link to='/login' className={styles.link}>Login</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );    
}

export default NavBar;