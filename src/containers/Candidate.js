import React from 'react';

import classes from './Candidate.module.css';

const candidate = (props) => {
    return (
    	<div className = { classes.Candidate } style = { props.selected ? { backgroundColor: '#FF5555' } : null } onClick = { () => props.clicked(props.id) }>
    		{ <img src = { props.selected ? (props.imageAngry ? props.imageAngry : props.image) : props.image } /> }
    	</div>
    );
}

export default candidate;
