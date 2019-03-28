import React, { Component } from 'react';
import { Container, Header, Content, Form, 
         Item, Input, Label,Left,Body,Right,
         Title} from 'native-base';
import { View,Text,TouchableOpacity} from 'react-native';
import { styles } from './style/style';

export default class Login extends Component {

    render() {
        return (
            <Container>
            <Header>
          <Left/>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>
            <Content>
              <Form>
                <Item floatingLabel>
                  <Label>Member Name</Label>
                  <Input />
                </Item>
                <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input type="password"/>
                </Item>
              </Form>
              <View style={{margin:20}} />
              <TouchableOpacity>
                  <Text>Login</Text>
              </TouchableOpacity>
            </Content>
          </Container>
            )
    }
}