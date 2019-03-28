import React, { Component } from 'react';
import { Container, Header, Content, Form, 
         Item, Input, Label,Left,Body,Right,
         Title,Button,Text } from 'native-base';
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
              <View style={{margin:7}} />
              <Button block>
            <Text>Primary</Text>
          </Button>
            </Content>
          </Container>
            )
    }
}