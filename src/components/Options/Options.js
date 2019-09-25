import React from 'react';
import style from './index.module.scss';
import subscriptions from '../../assets/icons/icon__subscriptions.svg';
import onlineShop from '../../assets/icons/icon__phone.svg';
import support from '../../assets/icons/icon__support.svg';

const Options = () => {
    return (
        <section className={style.options}>
            <div className={style.option}>
                <img src={subscriptions} alt='subscription icon'/>
                <h2 className={style.heading}>mobilabonnement</h2>
                <p className={style.text}>til deg eller til hele familien</p>
            </div>
            <div className={style.option}>
                <img src={onlineShop} alt='online shop icon'/>
                <h2 className={style.heading}>nettbutikk</h2>
                <p className={style.text}>kjøp din nye mobiltelefon her</p>
            </div>
            <div className={style.option}>
                <img src={support} alt='subscription icon'/>
                <h2 className={style.heading}>kundeservice</h2>
                <p className={style.text}>har du spørsmål eller trenger hjelp?</p>
            </div>
        </section>
    )
}

export default Options
