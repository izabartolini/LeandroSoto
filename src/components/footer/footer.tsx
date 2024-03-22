import style from './footer.module.css'
import adv from '@/assets/logo-pnf.png'

export default function Footer() {
    return (
        <footer className={style.footer}>
            <img src={adv.src} alt="" />
            <div className={style.contatosContainer}>
                <h1>Entre em contato</h1>
                <div className={ style.contatos}>
                    <div className={style.contato}><img src="https://cdn-icons-png.flaticon.com/128/455/455705.png" alt="" />
                        <p>(44)99999-9999</p></div>
                    <div className={style.contato}><img src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png" alt="" />
                        <p>leandrosoto@advogado.com</p></div>
                    <div className={style.contato}><img src="https://cdn-icons-png.flaticon.com/128/3670/3670274.png" alt="" />
                        <p>@leandrosotoadv</p></div>
                    <div className={style.contato}><img src="https://cdn-icons-png.flaticon.com/128/3670/3670271.png" alt="" />
                        <p>Leandro Soto</p></div></div>
            </div>
        </footer>
    )
}