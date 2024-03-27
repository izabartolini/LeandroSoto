'use client';

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './carrossel.module.css'
import feedback1 from '@/assets/feedback1.png'
import feedback2 from '@/assets/feedback2.jpg'
import feedback3 from '@/assets/feedback3.jpg'
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
                <Image src={feedback1.src} fluid className={styles.carroselImg}/>
            </Carousel.Item>
            <Carousel.Item className={styles.carrosselItem}>
            <Image src={feedback2.src} fluid className={styles.carroselImg}/>
            </Carousel.Item>
            <Carousel.Item className={styles.carrosselItem}>
            <Image src={feedback3.src} fluid className={styles.carroselImg}/>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrossel;

