import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Card,
  CardItem
} from "native-base";

export default function App() {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon type="FontAwesome" name="camera" />
          </Button>
        </Left>

        <Body>
          <Title>InstaCoded</Title>
        </Body>

        <Right>
          <Button transparent>
            <Icon type="Entypo" name="direction" />
          </Button>
        </Right>
      </Header>

      <Body>
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text>React Native</Text>
        <Image
          source={{
            uri:
              "https://d1vki863cvir6c.cloudfront.net/uploads/topic/image/432/black.png"
          }}
          style={{ width: 300, height: 100 }}
        />
      </Body>

      <Footer>
        <Left>
          <Button transparent>
            <Icon type="AntDesign" name="hearto" />
          </Button>
        </Left>
        <Left>
          <Button transparent>
            <Icon type="EvilIcons" name="comment" />
          </Button>
        </Left>
        <Left>
          <Button transparent>
            <Icon type="Entypo" name="direction" />
          </Button>
        </Left>
      </Footer>
    </Container>
  );
}
