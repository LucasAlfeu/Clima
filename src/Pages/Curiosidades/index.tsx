import Banner from 'Components/Banner';
import Footer from 'Components/Footer';
import Menu from 'Components/Menu';
import React from 'react';
import styles from './Curiosidades.module.scss';

export default function Curiosidades() {
    return (
        <main className={styles.curiosidade}>
            <Menu />
            <Banner />

            <article className={styles.historia}>
                <h2> Historia da Previsao do Tempo </h2>
                <div>
                    A previsão é feita a partir da análise de dados captados em todo o mundo por uma rede internacional.
                    Até o fim da Segunda Guerra Mundial, as informações meteorológicas tinham fins militares.
                    Com a criação da Organização das Nações Unidas, os países começaram a trabalhar em conjunto e surgiu a Organização Meteorológica Mundial (OMM) em 1950.
                </div>
                <a href="https://super.abril.com.br/mundo-estranho/como-e-feita-a-previsao-do-tempo/">Leia Mais</a>
            </article>

            <article className={styles.metodologia}>
                <h2 className={styles.metodologia__titulo}>Como é Feita</h2>
                <div className={styles.metodologia__text}>
                    Para fazer a previsão do tempo, é necessário antes conhecer o estado atual da atmosfera.
                    Quanto melhor conhecermos o que está acontecendo agora, melhor será a previsão do tempo.
                    Como conhecer o estado atual da atmosfera? Através de observações sistemáticas.
                    Essas observações sistemáticas são feitas utilizando alguns instrumentos e técnicas, veja nos tópicos a seguir:
                </div>
                <ol className={styles.metodologia__lista}>
                    <li className={styles.metodologia__item}>
                        <strong>Estações Meteorológicas de superfície</strong>: Em Estações Meteorológicas de Superfície, são feitas observações de temperatura, umidade relativa, pressão, chuva, vento, radiação solar e nebulosidade (tipo e quantidade de nuvens). As observações e medições são feitas diariamente, sempre seguindo uma mesma metodologia científica. Os instrumentos são manuseados com cuidado e em caso de mau funcionamento, a manutenção é feita e caso seja necessário, o instrumento é trocado por um previamente calibrado.
                    </li>
                    <li className={styles.metodologia__item}>
                        <strong>Radiossondas</strong>: radiossondas são balões acoplados a sensores (que medem temperatura, umidade relativa, vento, pressão, etc). O balão sobe, enquanto faz um perfil vertical da variação de todas essas variáveis da atmosfera. Essas informações são transmitidas via rádio para uma base. Radiossondas são mais normalmente lançadas em aeroportos.
                    </li>
                    <li className={styles.metodologia__item}>
                        <strong>Satélites meteorológicos</strong>: Depois da década de 70, com maior difusão dos satélites para uso civil, a previsão do tempo ganhou muito em qualidade. Através dos satélites, é possível ter informações meteorológicas sobre todas as partes do planeta, principalmente onde não há estações meteorológicas de superfície ou radiossondas.
                    </li>
                    <li className={styles.metodologia__item}>
                        <strong>Radar Meteorológico</strong>: são utilizados para detectar nuvens e caracterizá-las, ou seja, ajudam a determinar a intensidade e o tipo da precipitação
                    </li>
                    <li className={styles.metodologia__item}>
                        <strong>Bóias oceanográficas e navios</strong>: fazem o monitoramento da atmosfera sobre os oceanos
                    </li>
                </ol>
                <a href="https://meteoropole.com.br/2012/01/como-e-feita-a-previsao-do-tempo/">Leia Mais</a>
            </article>

            <Footer />
        </main>
    );
}