import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class Register extends Component {
    render(){
        return(
            <Container>
           <Header>
          <Left/>
          <Body>
            <Title>Register</Title>
          </Body>
          <Right />
        </Header>
            <Content>
              <Form>
                <Item inlineLabel>
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item inlineLabel last>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Form>
            </Content>
          </Container>
        )
    }

}