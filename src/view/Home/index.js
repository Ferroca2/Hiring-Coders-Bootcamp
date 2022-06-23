import React from 'react';
import NavBar from '../../components/navbar'
import styles from './home.module.css'

function SalesPage (){
    return(
        <>
            <div className={styles.window}>
                <NavBar/>
                <div className={styles.container}>
                <h1>Venha para Playwell</h1>
                <p>Temos os melhores instrumentos em um ótimo preço!</p>
                </div>
            </div>
        </>
    );
}

export default SalesPage;