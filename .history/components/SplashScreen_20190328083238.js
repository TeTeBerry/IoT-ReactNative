import React, { Component } from 'react';
import { View,Text } from 'react-native';
import styles from './style/style';


export default class SplashScreen extends Component{

    render(){
        const viewStyles = [styles.container, { backgroundColor: '#3F51B5' }];
        const textStyles = {
          color: 'white',
          fontSize: 40,
          fontWeight: 'bold'
        };
    
        return (
          <View style={viewStyles}>
            <Text style={textStyles}>
             Smart Water Metering
            </Text>
          </View>
        );
      }
    }    
