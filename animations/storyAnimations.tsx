import { Animated } from "react-native";

export const scroll_x: any = new Animated.Value(0);

// ---- CARD ----
export const cardTop = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [15, 80],
  extrapolate: "clamp",
});

export const cardLeft = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [10, -50],
  extrapolate: "clamp",
});

export const cardHeight = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [200, 50],
  extrapolate: "clamp",
});

export const cardMargin = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [0, 4],
  extrapolate: "clamp",
});

export const cardRadius = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [10, 40],
  extrapolate: "clamp",
});

export const cardLeftRadius = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [10, 0],
  extrapolate: "clamp",
});

export const cardRightRadius = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [10, 50],
  extrapolate: "clamp",
});

// ---- TEXT ----
export const textOpacity = scroll_x.interpolate({
  inputRange: [0, 10],
  outputRange: [1, 0],
  extrapolate: "clamp",
});

export const textScale = scroll_x.interpolate({
  inputRange: [0, 10],
  outputRange: [1, 0],
  extrapolate: "clamp",
});

// ---- ICON ----
export const iconScale = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [1, 0.5],
  extrapolate: "clamp",
});

export const iconTop = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [115, 15],
  extrapolate: "clamp",
});

export const iconLeft = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [40, 80],
  extrapolate: "clamp",
});

// ---- IMAGE ----
export const imageTop = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [0, 0],
  extrapolate: "clamp",
});

export const imageLeft = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [0, 60],
  extrapolate: "clamp",
});

export const imageWidth = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [110, 40],
  extrapolate: "clamp",
});

export const imageHeight = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [130, 40],
  extrapolate: "clamp",
});

export const imageMargin = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [0, 6],
  extrapolate: "clamp",
});

export const imageRadius = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [10, 100],
  extrapolate: "clamp",
});

export const imageBottomRadius = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [0, 100],
  extrapolate: "clamp",
});

// ---- SCROLLVIEW ----
export const scrollLeft = scroll_x.interpolate({
  inputRange: [0, 100],
  outputRange: [120, 0],
  extrapolate: "clamp",
});
