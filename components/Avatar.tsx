import React from "react";
import styled from "styled-components/native";

interface AvatarProps {
  source: string | any;
  onLine?: boolean;
  story?: boolean;
  checked?: boolean;
  profile?: boolean;
}

interface ProfileImageProps {
  cheked: boolean;
  story: boolean;
  profile?: boolean;
}

const Container = styled.View<ProfileImageProps>`
  width: ${(props) => (props.profile ? "100%" : "40px")};
  height: ${(props) => (props.profile ? "100%" : "40px")};
  position: relative;
`;

const ProfileImage = styled.Image<ProfileImageProps>`
  width: ${(props) => (props.profile ? "120px" : "40px")};
  height: ${(props) => (props.profile ? "120px" : "40px")};
  border-radius: ${(props) => (props.profile ? "60px" : "20px")};
  border-color: ${(props) => (props.cheked ? "#ffff" : "#1777f2")};
  border-width: ${(props) => (props.story ? "3px" : 0)};
  margin: auto;
  padding: ${(props) => (props.profile ? "0px" : 0)};
`;

const UserActive = styled.View<ProfileImageProps>`
  position: absolute;
  bottom: ${(props) => (props.profile ? "15px" : "-2px")};
  right: ${(props) => (props.profile ? "15px" : "-2px")};
  width: ${(props) => (props.profile ? "25px" : "15px")};
  height: ${(props) => (props.profile ? "25px" : "15px")};
  border: ${(props) => (props.profile ? "4px" : "2px")} solid #ffffffff;
  border-radius: 8px;
  background: #10d24b;
`;

const Avatar: React.FC<AvatarProps> = ({
  source,
  onLine,
  story,
  checked,
  profile,
}) => {
  return (
    <Container profile={profile}>
      <ProfileImage
        source={source}
        story={story}
        cheked={checked}
        profile={profile}
      />
      {onLine && <UserActive />}
    </Container>
  );
};

export default Avatar;
