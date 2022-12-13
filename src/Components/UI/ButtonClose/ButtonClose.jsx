import React from 'react';

import cls from './ButtonClose.module.css';

const ButtonClose = ({ setModal }) => {
	return <button onClick={() => setModal(false)} className={cls.myBtn} type="button" />;
};

export default ButtonClose;
