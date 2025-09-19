import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Avatar from "./Avatar";

const Container = styled.View`
  width: 100%;
  height: 92px;
`;

const Row = styled.View`
  flex-direction: row;
  background: #ffffffff;
  width: 100%;
  padding: 0 11px;
  align-items: center;
`;

const Input = styled.TextInput`
  height: 40px;
  width: 85%;
  padding: 0 8px;
  border: 1px solid #ddd;
  margin: 10px;
  border-radius: 30px;
`;

const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background: #dddd;
`;

const Menu = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

const MenuText = styled.Text`
  padding-left: 11px;
  font-weight: 500;
  font-size: 12px;
`;

const Separator = styled.View`
  width: 1px;
  height: 26px;
  background: #f0f0f0;
`;

const ToolBar = () => {
  return (
    <Container>
      <Row>
        <Avatar source={require("../assets/68.jpg")} />
        <Input placeholder="¿Que estas pensando?" />
      </Row>
      <Divider />
      <Row>
        <Menu>
          <MaterialCommunityIcons
            name="video-account"
            size={26}
            color="#f44337"
          />
          <MenuText>Directo</MenuText>
        </Menu>
        <Separator />
        <Menu>
          <MaterialCommunityIcons
            name="image-multiple"
            size={26}
            color="#4caf50"
          />
          <MenuText>Foto</MenuText>
        </Menu>
        <Separator />
        <Menu>
          <MaterialCommunityIcons name="video-plus" size={26} color="#a748ee" />
          <MenuText>Sala</MenuText>
        </Menu>
      </Row>
    </Container>
  );
};

export default ToolBar;
