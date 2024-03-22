'use client';

import 'bootstrap/dist/css/bootstrap.min.css'
import feedback1 from '@/assets/feedback1.png'
import feedback2 from '@/assets/feedback2.jpg'
import feedback3 from '@/assets/feedback3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';
import { useEffect } from 'react';

const Carrossel = () => {
    useEffect(() => {
        const carrosselElement = document.getElementById('meuCarrossel');
        if (carrosselElement) {
            const carrossel = new Carousel(carrosselElement, {
                interval: 2000
            });
        }
    }, []);
    return (
        <div id="meuCarrossel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={feedback1.src} className="d-block w-100" alt="Primeiro Slide" />
                </div>
                <div className="carousel-item">
                    <img src={feedback2.src} className="d-block w-100" alt="Segundo Slide" />
                </div>
                <div className="carousel-item">
                    <img src={feedback3.src} className="d-block w-100" alt="Terceiro Slide" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#meuCarrossel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#meuCarrossel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Próximo</span>
            </button>
        </div>
    );
}

export default Carrossel;
