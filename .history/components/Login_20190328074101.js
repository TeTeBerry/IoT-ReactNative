import React, { Component } from 'react';
import { Container, Header, Content, Form, 
         Item, Input, Label,Left,Body,Right,
         Title,Button,Text,Icon} from 'native-base';
import { View } from 'react-native';

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
            <Icon name='home' />
          <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
          <Icon type="FontAwesome" name="home" />
              <Form>
                <Item floatingLabel>
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input type="password"/>
                </Item>
              </Form>
              <View style={{margin:20}} />
              <Button block>
            <Text>Login</Text>
          </Button>
            </Content>
          </Container>
            )
    }
}