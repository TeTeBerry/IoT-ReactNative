import React, { Component } from 'react';

import { Button, ThemeProvider } from 'react-native-elements';
export default class Login extends Component {

    render() {
        return(
            <ThemeProvider>
            <Button title="Hey!" />
          </ThemeProvider>
        )
    }
    
}

