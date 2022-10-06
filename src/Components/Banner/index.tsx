import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Banner.module.scss';

export default function Banner() {
    return(
        <div className={styles.banner}>
            <p className={styles.banner__frase}>Estamos perdendo a corrida para as mudanças climáticas. Esse é o desafio de nossa geração: ganhar a batalha contra o tempo.</p>
            <p className={styles.banner__autor}>Emmanuel Macron, presidente</p>
            <Outlet />
        </div>
    );
}