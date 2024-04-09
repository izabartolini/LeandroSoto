'use client';

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './carrossel.module.css'
import cachorro from '@/assets/cachorro.png'
import fumaca from '@/assets/fumaça.png'
import penguim from '@/assets/penguim.png'
import { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';

function Carrossel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carrosselContainer} >
            <Carousel.Item className={styles.carrosselItem}>
                <Image src={cachorro.src} fluid className={styles.carroselImg}/>
            </Carousel.Item>
            <Carousel.Item className={styles.carrosselItem}>
            <Image src={fumaca.src} fluid className={styles.carroselImg}/>
            </Carousel.Item>
            <Carousel.Item className={styles.carrosselItem}>
            <Image src={penguim.src} fluid className={styles.carroselImg}/>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrossel;

