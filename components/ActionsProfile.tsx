import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

type Actions = {
  name: string;
  description: string;
};

const actions: Actions[] = [
  {
    name: "plus",
    description: "Add Story",
  },
  {
    name: "format-list-bulleted",
    description: "Activity Log",
  },
  {
    name: "pencil",
    description: "Edit Profile",
  },
  {
    name: "dots-horizontal",
    description: "More",
  },
];

const Container = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 25px;
`;

const ActionContainer = styled.View`
  align-items: center;
`;

const Icon = styled.TouchableOpacity`
  border-radius: 50%;
  padding: 12.5px;
  background-color: #ecedf0;
`;

const Description = styled.Text`
  margin-top: 2px;
  font-size: 14px;
`;

const ActionsProfile = () => {
  return (
    <Container>
      {actions.map((icons, i) => {
        return (
          <ActionContainer key={i}>
            <Icon>
              <MaterialCommunityIcons
                name={icons.name}
                size={20}
                color="#000000"
              />
            </Icon>
            <Description>{icons.description}</Description>
          </ActionContainer>
        );
      })}
    </Container>
  );
};

export default ActionsProfile;
