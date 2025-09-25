import React from "react";
import * as Animations from "../animations/storyAnimations";
import styled from "styled-components/native";
import { Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fakeStories from "../data/fakeStories";
import Avatar from "./Avatar";

interface UserCardFooterProps {
  profile: boolean;
}

interface TextProps {
  profile: boolean;
}

const Container = styled.View`
  width: 100%;
  height: 230px;
  flex-direction: row;
  align-items: center;
  background: #ffff;
`;

const FakeCard = styled.View`
  width: 110px;
  height: 200px;
  margin-left: 10px;
  background: #ffff;
`;

const PersonalCard = styled.View`
  width: 110px;
  height: 200px;
  margin-right: 10px;
  position: absolute;
  background: #ffff;
  border-radius: 10px;
  z-index: 10;
  border: 1px solid #dddddd;
`;

const PersonalCardStory = styled.Image`
  width: 100%;
  height: 130px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const PersonalCardIcon = styled.View`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  background: #3a86e9;
  border-width: 3px;
  border-color: #ffff;
  align-items: center;
  position: absolute;
  top: 115px;
  left: 40px;
`;

const UserCard = styled.View`
  width: 110px;
  height: 200px;
  margin-right: 10px;
  position: relative;
`;

const UserCardStory = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

const UserOnCard = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ffff;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const UserCardFooter = styled.View<UserCardFooterProps>`
  position: absolute;
  width: 100%;
  height: 35%;
  top: 130px;
  left: 0px;
  background: ${(props) =>
    props.profile ? "#ffff" : "rgba(255, 255, 255, 0)"};
`;

const Text = styled.Text<TextProps>`
  font-size: 15px;
  font-weight: bold;
  margin: 0 10px;
  padding-top: ${(props) => (props.profile ? "150px" : "45px")};
  text-align: center;
  color: ${(props) => (props.profile ? "#000000ff" : "#ffff")};
`;

const Story = () => {
  return (
    <Container>
      <PersonalCard
        as={Animated.View}
        style={{
          top: Animations.cardTop,
          left: Animations.cardLeft,
          height: Animations.cardHeight,
          borderRadius: Animations.cardRadius,
          borderBottomLeftRadius: Animations.cardLeftRadius,
          borderTopLeftRadius: Animations.cardLeftRadius,
        }}
      >
        <PersonalCardStory
          as={Animated.Image}
          source={require("../assets/story.jpg")}
          style={{
            top: Animations.imageTop,
            left: Animations.imageLeft,
            width: Animations.imageWidth,
            height: Animations.imageHeight,
            marginRight: Animations.imageMargin,
            marginTop: Animations.imageMargin,
            borderRadius: Animations.imageRadius,
            borderTopRightRadius: Animations.imageBottomRadius,
            borderTopLeftRadius: Animations.imageBottomRadius,
            borderBottomLeftRadius: Animations.imageBottomRadius,
            borderBottomRightRadius: Animations.imageBottomRadius,
          }}
        />
        <Text
          as={Animated.Text}
          profile={true}
          style={{
            opacity: Animations.textOpacity,
            transform: [{ scale: Animations.textScale }],
          }}
        >
          Create a Story
        </Text>
        <PersonalCardIcon
          as={Animated.View}
          style={{
            transform: [{ scale: Animations.iconScale }],
            top: Animations.iconTop,
            left: Animations.iconLeft,
          }}
        >
          <MaterialCommunityIcons name="plus" size={28} color="#ffffff" />
        </PersonalCardIcon>
      </PersonalCard>

      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 10, flexDirection: "row" }}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: Animations.scroll_x } } },
        ])}
      >
        <FakeCard />
        {fakeStories.map((story, i) => (
          <UserCard key={i.toString()}>
            <UserCardStory source={story.source} />
            <UserCardFooter profile={false}>
              <Text profile={false}>{story.name}</Text>
            </UserCardFooter>
            <UserOnCard>
              <Avatar source={story.user} story={true} checked={story.cheked} />
            </UserOnCard>
          </UserCard>
        ))}
      </Animated.ScrollView>
    </Container>
  );
};

export default Story;
