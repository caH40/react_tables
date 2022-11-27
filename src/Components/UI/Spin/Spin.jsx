import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Spinner = () => {
	return (
		<TailSpin
			height="40"
			width="40"
			color="rgba(140, 140, 140, 0.3)"
			ariaLabel="tail-spin-loading"
			radius="1"
			wrapperStyle={{}}
			wrapperClass=""
			visible={true}
		/>
	);
};

export default Spinner;
