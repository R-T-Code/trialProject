import React from 'react';
import style from './index.module.scss';

const Shortcuts = () => {

    //__ClassName for private shortcuts
    const privateShortcut = [style.shortcut, style.privateShortcut].join(' ');

    return (
        <section className={style.shortcuts}>
            <div className={style.contentWrapper}>
                <h2 className={style.heading}>snarveier</h2>
                <div className={style.content}>
                    <div className={style.column}>
                        <p className={style.shortcut}>bli kunde</p>
                        <p className={style.shortcut}>delbetaling</p>
                        <p className={style.shortcut}>utlandspriser</p>
                    </div>
                    <div className={style.column}>
                        <p className={style.shortcut}>wiFi tale</p>
                        <p className={style.shortcut}>priser</p>
                        <p className={style.shortcut}>fylle på saldo</p>
                    </div>
                    <div className={style.column}>
                        <p className={privateShortcut}>se forbruk</p>
                        <p className={privateShortcut}>mine fakturaer</p>
                        <p className={privateShortcut}>PIN- og PUK-kode</p>
                    </div>
                    <div className={style.column}>
                        <p className={privateShortcut}>endre abonnement</p>
                        <p className={privateShortcut}>aktiver SIM-kort</p>
                        <p className={privateShortcut}>kjøp mobildata</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shortcuts
