import React, { useRef, useState } from 'react';
import styles from './Menu.module.scss';
import { ReactComponent as MenuBurguer } from 'assets/menu.svg';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as Curiosidades } from 'assets/busca.svg';
import { ReactComponent as Inicio } from 'assets/home.svg';
import { ReactComponent as Brasil } from 'assets/brasil.svg';
import ClassNames from 'classnames';
import Banner from 'Components/Banner';
import { Link } from 'react-router-dom';

export default function Menu() {
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    function onClick() { setIsActive(!isActive); }
    return (
        <>
            <header className={styles.cabecalho}>
                <div className={styles.cabecalho__container}>
                    <Logo className={styles.cabecalho__logo} />
                    <p className={styles.cabecalho__texto}>CLIMA</p>
                </div>

                <MenuBurguer className={styles.cabecalho__botao} onClick={onClick} />
            </header>
            <nav
                ref={dropDownRef}
                className={ClassNames({
                    [styles.active]: isActive === true,
                    [styles.inactive]: isActive === false
                })}
            >
                <ul className={styles.lista}>
                    <li className={styles.lista__item}><Link to={'/'} ><Inicio className={styles.item} /></Link></li>
                    <li className={styles.lista__item}><Link to={'/curiosidades'} ><Curiosidades className={styles.item} /></Link></li>
                </ul>
            </nav>
        </>
    );
}