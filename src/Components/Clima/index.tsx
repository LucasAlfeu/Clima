import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './Clima.module.scss';
import ClassNames from 'classnames';

interface ICidade {
    latitude: number | undefined
    longitude: number | undefined
    autoriza: boolean
    cidadeTratada: string
}

export default function Clima({ latitude, longitude, autoriza }: ICidade) {

    const divClima = document.querySelector('#clima') as HTMLElement;

    const [nome, setNome] = useState<string>('');
    const [pais, setPais] = useState<string>('');
    const [temperatura, setTemperatura] = useState<number>(0);
    const [sensacaoTermica, setSensacaoTermica] = useState<number>(0);
    const [humidade, setHumidade] = useState<number>(0);
    const [nivelMar, setNivelMar] = useState<number>(0);
    const [icon, setIcon] = useState<string>('');
    const [velocidadeVento, setVelocidadeVento] = useState<number>(0);
    const [mostra, setMostra] = useState<boolean>(false);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=fa9c5052feb5e2cf2f693bd2a2f28a61`)
            .then(response => response.json())
            .then(data => {
                setNome(data.name);
                setPais(data.sys.country);
                setTemperatura((data.main.temp) - 273);
                setSensacaoTermica(((data.main.feels_like) - 273));
                setHumidade(data.main.humidity);
                setNivelMar(data.main.sea_level);
                setVelocidadeVento(data.wind.speed);
                setIcon(data.weather[0].icon);
                setMostra(true);
            })
            .catch(() => {                
                setMostra(false);
            });
    }, [autoriza]);

    useEffect(() => {
        axios.get(`http://openweathermap.org/img/wn/${icon}@2x.png`)
            .then((data) => {
                setIcon(String(data.config.url));
            });
    }, [icon]);

    return (
        <div id='clima' className={ClassNames({
            [styles.container]: mostra === false,
            [styles.caixa]: mostra === true
        })}>
            <div className={ClassNames({
                [styles.clima]: mostra === true,
                [styles.base]: mostra === false
            })}>
                <div className={styles.clima__cabecalho}>
                    <div className={styles.clima__nome}>{`${nome} `}</div>
                    <div className={styles.clima__pais}>{` - ${pais}`}</div>
                </div>
                <div className={styles.clima__corpo}>
                    <img className={styles.clima__icone} src={icon} />

                    <div className={styles.clima__tempoDivisao}>
                        <div className={styles.clima__temperatura}>{`${temperatura.toFixed(1)} °C`}</div>
                        <div className={styles.clima__sensacao}>{`Sensação térmica de ${sensacaoTermica.toFixed(1)} °C`}</div>
                        <div className={styles.clima__humidade}>{` Umidade ${humidade}% `}</div>
                    </div>
                </div>
                <div className={styles.clima__nivelDoMar}>{`Nível do Mar: ${nivelMar} metros`}</div>
                <div className={styles.clima__velocidadeVento}>{`Velocidade do Vento: ${(velocidadeVento * 3.16).toFixed(1)} Km/h`}</div>

            </div>
        </div>
    );
}