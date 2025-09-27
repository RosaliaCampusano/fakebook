import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const Container = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
`;

const Cover = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const SongDataContainer = styled.View`
  margin-left: 15px;
  flex: 1;
`;

const SongData = styled.Text`
  font-size: 17px;
`;

const Title = styled(SongData)`
  font-weight: bold;
  color: #222121;
`;

const Artist = styled(SongData)`
  color: #747476;
`;

const ProfileSong = () => {
  return (
    <Container>
      <Cover source={require("../assets/songImage.jpg")} />
      <SongDataContainer>
        <Title>Hunger</Title>
        <Artist>Florence + The Machine</Artist>
      </SongDataContainer>
      <MaterialCommunityIcons
        name="dots-horizontal"
        size={20}
        color="#747476"
      />
    </Container>
  );
};

export default ProfileSong;
