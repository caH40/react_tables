import React from 'react';
import classes from './Button.module.css';

const Button = ({ children, sendForm }) => {
	return (
		<button onClick={sendForm} className={classes.myBtn} type="button">
			{children}
		</button>
	);
};

export default Button;
