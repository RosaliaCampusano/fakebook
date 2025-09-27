import React from "react";
import styled from "styled-components/native";
import Avatar from "../components/Avatar";
import ProfileSong from "../components/ProfileSong";
import ActionsProfile from "../components/ActionsProfile";
import StoryHighlights from "../components/StoryHighlights";

const Container = styled.ScrollView`
  background-color: #ffff;
`;

const Header = styled.View`
  position: relative;
  align-items: center;
`;

const Banner = styled.Image`
  width: 100%;
  height: 180px;
`;

const UserWrapper = styled.View`
  width: 115px;
  height: 115px;
  border-radius: 63px;
  border: 3px solid transparent;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-top-left-radius: 65px;
  border-top-right-radius: 53px;
  bottom: -60px;
`;

const UserName = styled.Text`
  margin-top: 70px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Separator = styled.View`
  width: 90%;
  height: 3px;
  border-radius: 2px;
  background: #d8d4d4ff;
  margin: 20px auto;
`;

const Profile = () => {
  return (
    <Container>
      <Header>
        <Banner source={require("../assets/banner-profile.jpg")} />
        <UserWrapper>
          <Avatar
            source={require("../assets/0.jpg")}
            profile={true}
            onLine={true}
            checked={false}
            story={true}
          />
        </UserWrapper>
      </Header>
      <UserName>Paola Mariselli</UserName>
      <ProfileSong />
      <ActionsProfile />
      <Separator />
      <StoryHighlights />
    </Container>
  );
};

export default Profile;
