import React from 'react';
import classes from './Layout.module.css';

const layout = (props) => {
    return (
    	<div>
    		{ props.children }
			<section className = { classes.Background }>
				<div className = { classes.Yellow }></div>
				<div className = { classes.Green }></div>
				<div className = { classes.Red }></div>
			</section>
    	</div>
    );
}

export default layout;
