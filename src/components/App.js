import React, { Component } from 'react';
import WaterDisplay from '../components/display/WaterDisplay';

export default class App extends Component {
  render() {
    return (
      <>
        <WaterDisplay total={'100'} />
      </>
    );
  }
}

//start with presenational components so we know we have some working things
//visual stuff less thinking
//once pres comp can render, then come to container and thinking about biz logic and interact
//controlled components just means that the value and the on set are set;
