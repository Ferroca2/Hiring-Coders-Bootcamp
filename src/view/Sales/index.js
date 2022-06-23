import React from 'react';
import NavBar from '../../components/navbar';
import styles from './sales.module.css';
import Violin from './imgs/violino1.png';
import Guitar from './imgs/violão.png';
import Sax from './imgs/sax.png';
import Pand from './imgs/pandeiro.png';
import Flaut from './imgs/flauta.png';
import Cavac from './imgs/cavaquinho.png'

function HomePage() {
    return(
        <div className={styles.window}>
            <NavBar></NavBar>
            <div className={styles.container}>
                <h1>Compre seus instrumentos aqui!</h1>
                <div className={styles.imagesWrapper}>
                    <div className={styles.product}>
                        <img src={Violin} alt=""/>
                        <label className={styles.description}>Violino Gianini de 3 cordas</label>
                        <label>Preço: R$ 199,99</label>
                    </div>
                    <div className={styles.product}>
                        <img src={Guitar} alt=""/>
                        <label className={styles.description}>Guitarra Fender </label>
                        <label>Preço: R$ 399,99</label>
                    </div>
                    <div className={styles.product}>
                        <img src={Flaut} alt=""/>
                        <label className={styles.description}>Flauta Rockster</label>
                        <label>Preço: R$ 299,99</label>
                    </div>
                </div>
                <div className={styles.imagesWrapper}>
                    <div className={styles.product}>
                        <img src={Cavac} alt=""/>
                        <label className={styles.description}>Cavaquinho Brazilian</label>
                        <label>Preço: R$ 99,99</label>
                    </div>
                    <div className={styles.product}>
                        <img src={Sax} alt=""/>
                        <label className={styles.description}>Saxofone James</label>
                        <label>Preço: R$ 899,99</label>
                    </div>
                    <div className={styles.product}>
                        <img src={Pand} alt=""/>
                        <label className={styles.description}>Pandeiro Pagodeiro</label>
                        <label>Preço: R$ 89,99</label>
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default HomePage;