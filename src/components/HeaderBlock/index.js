import React from 'react';
import s from './HeaderBlock.module.scss';
import ReactLogoPng from '../../logo512.png'
import {ReactComponent as ReactLogoSvg} from '../../logo.svg'

const HeaderBlock = () => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                <h1 className={s.header}>Учите слова онлайн</h1>
                <img src={ReactLogoPng} alt="Логотип" />
                <ReactLogoSvg />
                <p className="s.decr">Используйте карточки для запоминания и поплняйте активный словарный запас</p>
            </div>
        </div>
    );
}

export default HeaderBlock;