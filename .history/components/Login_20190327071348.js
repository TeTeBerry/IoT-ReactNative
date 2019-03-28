import React, { Component } from 'react';
import { Container, Header, Content, Form, 
         Item, Input, Label,Left,Body,Right,
         Title } from 'native-base';

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
                  <Input />
                </Item>
              </Form>
            </Content>
          </Container>
            )
    }
}