import React from 'react';
import style from './index.module.scss';
import bubble from '../../assets/icons/mfa_bubble.svg'; 

const Hero = () => {
    return (
        <section className={style.hero}>
            <div className={style.content}>
                <div className={style.bubble}>
                    <img src={bubble} alt='mobil for alle'/>
                </div>
                
                <h1 className={style.heading}>å kjøpe mobiltelefon skal <br/> være enkelt og billig</h1>

                <button className={style.more}>les mer</button>
            </div>
        </section>
    )
}

export default Hero
