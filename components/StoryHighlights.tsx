import React from "react";
import styled from "styled-components/native";
import Story from "./Story";

const TextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #222121;
`;

const AddNewText = styled.Text`
  font-size: 17px;
  color: #6884cd;
`;

const StoryHighlights = () => {
  return (
    <>
      <TextContainer>
        <HeaderText>Story Highlights</HeaderText>
        <AddNewText>Add New</AddNewText>
      </TextContainer>
      <Story profile={true} />
    </>
  );
};

export default StoryHighlights;
