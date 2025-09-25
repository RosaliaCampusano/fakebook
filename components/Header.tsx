import React from "react";
import { StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View`
  margin-block-start: ${StatusBar.currentHeight}px;
  width: 100%;
  height: 58px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Text = styled.Text`
  color: #3a86e9;
  font-size: 29px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  margin-left: 16px;
  background: #eeeeee;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <Container>
      <Text>Fakebook</Text>
      <Row>
        <Button>
          <MaterialCommunityIcons name="magnify" size={26} color="black" />
        </Button>
        <Button>
          <MaterialCommunityIcons
            name="facebook-messenger"
            size={26}
            color="black"
          />
        </Button>
      </Row>
    </Container>
  );
};

export default Header;
