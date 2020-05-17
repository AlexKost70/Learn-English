import React from 'react';
import s from './Info.module.scss';

const Info = ({ title, text }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <h1 className={s.title}>{title}</h1>
                <p className={s.text}>{text}</p>
            </div>
        </div>
    );
}

export default Info;