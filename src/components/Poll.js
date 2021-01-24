import React, { Component } from 'react';

import gryb from '../assets/images/gryb.jpeg';
import grybAngry from '../assets/images/gryb_angry.jpg';
import naus from '../assets/images/naus.png';
import karb from '../assets/images/karb.jpg';
import land from '../assets/images/land.jpg';

import Candidate from '../containers/Candidate';
import classes from './Poll.module.css';

class Poll extends Component {
	state = {
		selected: ''
	}

	checkSelected = (id) => {
		this.setState({ selected: id }); 
	}

	render () {
		return (
			<div className = { classes.Poll }>
				<section className = { classes.Greeting }>
					<div>
						<h1>Sveiki! Siusk nx dabar!</h1>
					</div>
				</section>

				<section className = { classes.Candidates }>
					<Candidate id = 'gryb' selected = { 'gryb' === this.state.selected } image = { gryb } imageAngry = { grybAngry } clicked = { this.checkSelected } />
					<Candidate id = 'naus' selected = { 'naus' === this.state.selected } image = { naus } clicked = { this.checkSelected } />
					<Candidate id = 'karb' selected = { 'karb' === this.state.selected } image = { karb } clicked = { this.checkSelected } />
					<Candidate id = 'land' selected = { 'land' === this.state.selected } image = { land } clicked = { this.checkSelected } />
				</section>
				
				<section className = { classes.Send }>
					<button disabled = { this.state.selected === '' } onClick = { () => this.props.voted(this.state.selected) }>Siusti</button>
				</section>
			</div>
		);
	}
}

export default Poll;
