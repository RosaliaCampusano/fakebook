import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const View = styled.View`
  align-items: center;
  heigth: 500px;
`;

const Profile = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default Profile;
