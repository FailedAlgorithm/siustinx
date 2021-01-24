import React, { Component } from 'react';
import Layout from './hoc/Layout';
import Stats from './components/Stats';
import Poll from './components/Poll';
import Age from './components/Age'
import './App.css';

class App extends Component {
  state = {
    voted: '', // ''
    ageApproved: false // false
  }

  userVotedHandler = (person) => {
    this.setState({ voted: person });
  }

  approveHandler = () => {
    this.setState({ ageApproved: true });
  }

  render () {
    const main = this.state.voted !== '' 
      ? <Stats voted = { this.state.voted } /> 
      : <Poll voted = { this.userVotedHandler } />
    
    return (
      <Layout>
        { this.state.ageApproved ? main : <Age approve = { this.approveHandler } /> }
      </Layout>
    );
  }
}

export default App;
