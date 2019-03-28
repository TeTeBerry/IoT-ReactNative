import React, {Component} from 'react';
import Login from './Login';
import SplashScreen from './SplashScreen';
import { resolve } from 'url';



export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true
    }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) => 
    setTimeout(
      () => { resolve('result') },
       2000
       )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading :false});
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen/>;
    }
    return (
     <Login/>
    );
  }
}


