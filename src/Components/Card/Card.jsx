import React from 'react';
import './Card.css';
const Card = (props) => {
	// console.log('data', props.data);
	return (
		<div id='card' className='pb-3'>
			<img
				src='/images/design.webp'
				alt='image'
				style={{ width: '100%', height: '200px', objectFit: 'contain' }}
			/>
			<div className='date d-flex align-items-center justify-content-center'>
				<h1>
					5 <br /> Days
				</h1>
			</div>
			<div className='logo-container' style={{ marginTop: '-35px', marginLeft: '25px' }}>
				<img src='/images/logo.webp' alt='image' style={{ width: '80px', height: '80px' }} />
			</div>
			<h2 className='title mt-3 ml-4'>{props.data.departure.airport}</h2>
			<p className='para'>Parishey is the fashion powerhouse of the aesth</p>
		</div>
	);
};

export default Card;
