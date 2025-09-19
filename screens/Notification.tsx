import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const View = styled.View`
  align-items: center;
  heigth: 500px;
`;

const Notification = () => {
  return (
    <View>
      <Text>Notification Screen</Text>
    </View>
  );
};

export default Notification;
