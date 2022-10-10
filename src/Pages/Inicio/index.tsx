import React, { useState } from 'react';
import styles from './Inicio.module.scss';
import Clima from 'Components/Clima';
import Footer from 'Components/Footer';
import Menu from 'Components/Menu';
import Banner from 'Components/Banner';

export default function Inicio() {

    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();
    const [autoriza, setAutoriza] = useState<boolean>(false);
    const [cidade, setCidade] = useState('');

    const cidadeTratada = cidade.replace(/[- ]+/g, '-');

    function buscarCidade(e: any) {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cidadeTratada}&limit=5&appid=fa9c5052feb5e2cf2f693bd2a2f28a61`)
            .then(response => response.json())
            .then(data => {
                setLatitude(data[0].lat);
                setLongitude(data[0].lon);
                setAutoriza(!autoriza);
            });
    }
    return (
        <div className={styles.caixa}>
            <Menu />
            <Banner />
            <form className={styles.form} >
                <label className={styles.form__label}>Insira sua cidade:</label>

                <div className={styles.form__container}>
                    <input className={styles.form__input} type="text" placeholder='Ex: Rio de Janeiro' required onChange={(e) => setCidade(e.target.value)} />
                    <button className={styles.form__botao} onClick={(e) => buscarCidade(e)}>Pesquisar</button>
                </div>
            </form>
            <Clima
                latitude={latitude}
                longitude={longitude}
                autoriza={autoriza}
                cidadeTratada={cidadeTratada}
            />
            <Footer />
        </div>
    );
}