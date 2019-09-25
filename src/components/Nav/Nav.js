import React from 'react';
import style from './index.module.scss';
import {connect}from 'react-redux';
import * as actions from '../../actions/language';
import mainLogo from '../../assets/icons/logo__onecall.svg'; 
import menuIcon from '../../assets/icons/icon__hamburger.svg'; 
import accIcon from '../../assets/icons/icon__mypages.svg'; 


const Nav = (props) => {

    //__Destructuring
    const {testingFunction} = props;

    return (
        <nav className={style.nav}>
            <div className={style.logoWrapper}>
                <img src={mainLogo} className={style.mainLogo} alt='one call icon'/>
            </div>
            <div className={style.navigation}>
                <p className={style.navigationItem} onClick={()=>testingFunction('click works')}>mobilabonnement</p>
                <p className={style.navigationItem} onClick={()=>testingFunction('click works')}>kundeservice</p>
                <p className={style.navigationItem} onClick={()=>testingFunction('click works')}>nettbutikk</p>
            </div>
            <div className={style.sideNavigation}>
                <div className={style.accWrapper}>
                    <p className={style.accText}>mine sider</p>
                    <img src={accIcon} alt='mine sider icon'/>
                </div>
                <div className={style.sideNavLogo}>
                    <p className={style.sideNavMenu}>meny</p>
                    <img src={menuIcon} alt='menu icon'/>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        lanugage: state.language
    }
};

export default connect(mapStateToProps, actions)(Nav);
