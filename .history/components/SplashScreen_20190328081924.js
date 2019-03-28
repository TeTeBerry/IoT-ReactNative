import React, { Component } from 'react';
import { View,Text,StyleSheet} from 'react-native';


export default class SplashScreen extends Component{

    render(){
        const viewStyles = [styles.container, { backgroundColor: 'skyblue' }];
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

const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
},
});