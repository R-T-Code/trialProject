import React from 'react';
import style from './index.module.scss';
import familyLogo from '../../assets/icons/logo__familie.svg'; 

const Deals = () => {
    return (
        <section className={style.deals}>
            <div className={style.content}>
                <div className={style.familyPack}>
                    <img className={style.familyLogo} src={familyLogo} alt='family pack logo'/>
                    <h2 className={style.heading}>det er smart å være flere</h2>
                    <button className={style.order}>bestill nå</button>
                </div>
                <div className={style.newPhone}>
                    <button className={style.order}>bestill</button>
                </div>
            </div>
            <button className={style.more}>se våre mobilabonnement</button>
        </section>
    )
}

export default Deals
