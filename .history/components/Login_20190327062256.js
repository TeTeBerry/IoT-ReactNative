import React, { Component } from 'react';
import { Text } from 'react-native';
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

