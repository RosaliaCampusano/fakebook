import React from "react";
import styled from "styled-components/native";

interface AvatarProps {
  source: string | any;
  onLine: boolean;
  story: boolean;
  cheked: boolean;
}

interface ProfileImageProps {
  cheked: boolean;
  story: boolean;
}

const Container = styled.View`
  width: 40px;
  heigth: 12px;
  position: relative;
`;

const ProfileImage = styled.Image<ProfileImageProps>`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border-color: ${(props) => (props.cheked ? "#ffff" : "#1777f2")};
  border-width: ${(props) => (props.story ? "3px" : 0)};
`;

const UserActive = styled.View`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background: #10d24b;
  border: 2px solid #ffff;
`;

const Avatar: React.FC<AvatarProps> = ({ source, onLine, story, cheked }) => {
  return (
    <Container>
      <ProfileImage source={source} story={story} cheked={cheked} />
      {onLine && <UserActive />}
    </Container>
  );
};

export default Avatar;
