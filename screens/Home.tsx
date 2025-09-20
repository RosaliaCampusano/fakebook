import React from "react";
import Users from "../components/User";
import Story from "../components/Story";
import ToolBar from "../components/ToolBar";
import styled from "styled-components/native";
import MainSeparator from "../components/MainSeparator";
import Post from "../components/Post";
import { ScrollView } from "react-native";

const View = styled.View`
  flex: 1;
`;

const Home = () => {
  return (
    <View>
      <ScrollView>
        <ToolBar />
        <MainSeparator />
        <Users />
        <MainSeparator />
        <Story />
        <MainSeparator />
        <Post />
      </ScrollView>
    </View>
  );
};

export default Home;
