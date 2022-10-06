import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as Instagram } from 'assets/instagram.svg';

export default function Footer(){
    return(
        <div className={styles.footer}>
            <p className={styles.footer__text}>Clima</p>
            <Instagram className={styles.footer__instagram}/>
        </div>
    );
}