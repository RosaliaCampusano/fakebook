import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 40px;
  heigth: 42px;
  position: relative;
`;

const ProfileImage = styled.Image`
  width: 40px;
  heigth: 1px;
  border-radius: 40px;
`;

const Avatar = ({ source }) => {
  return (
    <Container>
      <ProfileImage source={(String = source)} />
    </Container>
  );
};

export default Avatar;
