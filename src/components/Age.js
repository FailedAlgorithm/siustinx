import React from 'react';

import classes from './Age.module.css';

const Age = (props) => {
    return (
    	<div className = { classes.Age }>
    		<div className = { classes.Box }>
                <p className = { classes.Info }>Šiame puslapyje vartojami<br/>necenzūriniai žodžiai.</p>
                <h1 className = { classes.Question }>Ar turite <span>18</span> metų?</h1>
                <div className = { classes.Buttons }>
                    <button onClick = { props.approve }>Taip</button>
                    <button onClick = { props.approve }>Ne, bet vistiek noriu pasiųsti ką nors nx</button>
                </div>
                <p className = { classes.Go }>Jei dar neturite 18 metų - prašome eiti nx. { /*<br/>Eiti galima paspaundžiant <a href = 'http://propatria.lt/'>čia</a> */ }</p>
                <a className = { classes.Exit } href = 'http://propatria.lt/'>Eiti</a>
            </div>
    	</div>
    );
}

export default Age;
