import React, { Component } from 'react';

import classes from './Stats.module.css';

class Stats extends Component {
	state = {
		chatboxOpen: false,
		notification: false
	}

	componentDidMount () {
		setTimeout(() => {
			this.setState({ notification: true })
		}, 3000);
	}

	chatboxOpenHandler = () => {
		this.setState(prevState => { return { chatboxOpen: !prevState.chatboxOpen, notification: false } });
	}

	render () {
		return (
			<div className = { classes.Stats }>
				<section className = { classes.Leaders }>
					<div id = { classes.Banner } >
						<h1>Top nx ld</h1>
					</div>

					<div className = { classes.Leader }>
						<p className = { classes.Site }>420</p>
						<p className = { classes.Game }>228</p>
						<div className = { classes.Voted }></div>
						<div className = { classes.Name }><p>Uspaskich</p></div>
					</div>
				</section>

				<section className = { classes.Other }>					
					<div className = { classes.Leader } style = {{ height: '50px', width: '80%' }}>
						<p className = { classes.Site }>213</p>
						<p className = { classes.Game }>113</p>
						<div className = { classes.Voted }></div>
						<div className = { classes.Name }><p>Nauseda</p></div>
					</div>
					
					<div className = { classes.Leader } style = {{ height: '50px', width: '60%' }}>
						<p className = { classes.Site }>184</p>
						<p className = { classes.Game }>135</p>
						<div className = { classes.Voted }></div>
						<div className = { classes.Name }><p>Grybauskaite</p></div>
					</div>
					
					<div className = { classes.Leader } style = {{ height: '50px', width: '50%' }}>
						<p className = { classes.Site }>103</p>
						<p className = { classes.Game }>78</p>
						<div className = { classes.Voted }></div>
						<div className = { classes.Name }><p>Karbauskis</p></div>
					</div>
				</section>

				<section className = { classes.Chat }>
					{ !this.state.chatboxOpen ?
						<button className = { classes.Message } onClick = { this.chatboxOpenHandler }>
							<div className = { classes.Mail }>
								{ this.state.notification ?
									<div className = { classes.New }>+1</div>
								: null }
							</div>
							{ this.state.notification ?
							<div className = { classes.Notification }>
								<div className = { classes.Arrow }/>
								<p className = { classes.Text }>(+1) Nauja žinutė</p>
							</div>
							: null }
						</button>
					: null }

					{ this.state.chatboxOpen ? 
						<div className = { classes.Chatbox }>
							<div className = { classes.Info }>
								<div className = { classes.Photo }></div>
								<p className = { classes.Name }>Ramunas Karbauskis</p>
								<button className = { classes.Close } onClick = { this.chatboxOpenHandler }>X</button>
							</div>
							<div className = { classes.HisMessage }>
								<div className = { classes.Photo }/>
								<div className = { classes.MessageBox }>
									<div className = { classes.Arrow }/>
									<p className = { classes.Text }>Blet kodel mane pasiunte?<br/>Siusk Uspaskich!</p>
								</div>
							</div>
						</div>
					: null }
				</section>
			</div>
		);
	}
}

export default Stats;
